/**
 * Post-build prerender: load each public route in Chromium and write the fully
 * rendered HTML into dist/{route}/index.html so View Source and crawlers see
 * headings, copy, and per-page meta before JavaScript runs.
 */
import { execSync, spawn, type ChildProcess } from "node:child_process";
import { createServer } from "node:net";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Browser } from "puppeteer-core";
import { PRERENDER_ROUTES } from "../src/data/prerenderRoutes";

const PREVIEW_HOST = "127.0.0.1";
const USE_SERVERLESS_CHROMIUM = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const distDir = path.join(rootDir, "dist");
const viteBin = path.join(rootDir, "node_modules", "vite", "bin", "vite.js");

async function getFreePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(0, PREVIEW_HOST, () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Could not allocate preview port"));
        return;
      }
      const { port } = address;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(port);
      });
    });
    server.on("error", reject);
  });
}

function distOutputPath(routePath: string): string {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }
  const segment = routePath.replace(/^\//, "").replace(/\/$/, "");
  return path.join(distDir, segment, "index.html");
}

function stopPreview(child: ChildProcess) {
  if (process.platform === "win32" && child.pid) {
    try {
      execSync(`taskkill /PID ${child.pid} /T /F`, { stdio: "ignore" });
    } catch {
      child.kill("SIGTERM");
    }
    return;
  }
  child.kill("SIGTERM");
}

/** Poll the preview server until it responds (avoids fragile stdout parsing on CI). */
async function waitForPreviewReady(
  preview: ChildProcess,
  previewOrigin: string,
  timeoutMs = 90_000,
): Promise<void> {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    if (preview.exitCode !== null) {
      throw new Error(`vite preview exited with code ${preview.exitCode} before becoming ready`);
    }

    try {
      const response = await fetch(previewOrigin, { redirect: "follow" });
      if (response.ok) {
        return;
      }
    } catch {
      // Server not up yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for vite preview at ${previewOrigin}`);
}

async function launchBrowser(): Promise<Browser> {
  const launchOptions = {
    headless: true,
    protocolTimeout: 120_000,
  };

  if (USE_SERVERLESS_CHROMIUM) {
    const chromium = await import("@sparticuz/chromium");
    const puppeteer = await import("puppeteer-core");

    return puppeteer.default.launch({
      ...launchOptions,
      args: [...chromium.default.args, "--disable-dev-shm-usage"],
      executablePath: await chromium.default.executablePath(),
    });
  }

  const puppeteer = await import("puppeteer");
  return puppeteer.default.launch({
    ...launchOptions,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });
}

async function prerenderRoute(
  browser: Browser,
  routePath: string,
  previewOrigin: string,
): Promise<void> {
  const page = await browser.newPage();
  let routeError: unknown;
  try {
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await page.evaluateOnNewDocument(() => {
      window.localStorage.setItem("ewan-lng", "en");
    });

    const url = `${previewOrigin}${routePath}`;
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
    await page.waitForSelector("#root h1, #root main, #root h2", { timeout: 30_000 });
    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        return Boolean(root && root.innerText.replace(/\s+/g, " ").trim().length > 120);
      },
      { timeout: 30_000 },
    );
    await new Promise((resolve) => setTimeout(resolve, 250));

    const html = await page.content();
    const outPath = distOutputPath(routePath);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    console.log(`Prerendered ${routePath}`);
  } catch (error) {
    routeError = error;
  } finally {
    try {
      await page.close();
    } catch {
      // Browser may already be shutting down.
    }
  }

  if (routeError) {
    throw routeError;
  }
}

async function main() {
  const previewPort = await getFreePort();
  const previewOrigin = `http://${PREVIEW_HOST}:${previewPort}`;

  const preview = spawn(
    process.execPath,
    [viteBin, "preview", "--host", PREVIEW_HOST, "--port", String(previewPort), "--strictPort"],
    {
      cwd: rootDir,
      stdio: "inherit",
      env: { ...process.env, BROWSER: "none" },
    },
  );

  try {
    await waitForPreviewReady(preview, previewOrigin);

    const browser = await launchBrowser();

    try {
      for (const routePath of PRERENDER_ROUTES) {
        await prerenderRoute(browser, routePath, previewOrigin);
      }
      console.log(`Done — prerendered ${PRERENDER_ROUTES.length} routes.`);
    } finally {
      await browser.close();
    }
  } finally {
    stopPreview(preview);
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("prerender failed:", error);
    process.exit(1);
  });
