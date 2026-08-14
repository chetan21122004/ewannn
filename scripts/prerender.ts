/**
 * Post-build prerender: load each public route in Chromium and write the fully
 * rendered HTML into dist/{route}/index.html so View Source and crawlers see
 * headings, copy, and per-page meta before JavaScript runs.
 */
import { execSync, spawn, type ChildProcess } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { PRERENDER_ROUTES } from "../src/data/prerenderRoutes";

const PREVIEW_HOST = "127.0.0.1";
const PREVIEW_PORT = 4173;
const PREVIEW_ORIGIN = `http://${PREVIEW_HOST}:${PREVIEW_PORT}`;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const distDir = path.join(rootDir, "dist");

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

function waitForPreview(child: ChildProcess): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Timed out waiting for vite preview to start"));
    }, 30000);

    const onData = (chunk: Buffer) => {
      const text = chunk.toString();
      if (text.includes("Local:") || text.includes(`:${PREVIEW_PORT}`)) {
        clearTimeout(timeout);
        child.stdout?.off("data", onData);
        child.stderr?.off("data", onData);
        resolve();
      }
    };

    child.stdout?.on("data", onData);
    child.stderr?.on("data", onData);
    child.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });
    child.on("exit", (code) => {
      if (code && code !== 0) {
        clearTimeout(timeout);
        reject(new Error(`vite preview exited with code ${code}`));
      }
    });
  });
}

async function prerenderRoute(
  browser: Awaited<ReturnType<typeof puppeteer.launch>>,
  routePath: string,
): Promise<void> {
  const page = await browser.newPage();
  try {
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await page.evaluateOnNewDocument(() => {
      window.localStorage.setItem("ewan-lng", "en");
    });

    const url = `${PREVIEW_ORIGIN}${routePath}`;
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForSelector("#root h1, #root main, #root h2", { timeout: 20000 });
    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        return Boolean(root && root.innerText.replace(/\s+/g, " ").trim().length > 120);
      },
      { timeout: 20000 },
    );
    await new Promise((resolve) => setTimeout(resolve, 250));

    const html = await page.content();
    const outPath = distOutputPath(routePath);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    console.log(`Prerendered ${routePath}`);
  } finally {
    await page.close();
  }
}

async function main() {
  const preview = spawn(
    "npx",
    ["vite", "preview", "--host", PREVIEW_HOST, "--port", String(PREVIEW_PORT), "--strictPort"],
    {
      cwd: rootDir,
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, BROWSER: "none" },
    },
  );

  preview.stdout?.on("data", (chunk) => process.stdout.write(chunk));
  preview.stderr?.on("data", (chunk) => process.stderr.write(chunk));

  try {
    await waitForPreview(preview);

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });

    try {
      for (const routePath of PRERENDER_ROUTES) {
        await prerenderRoute(browser, routePath);
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
