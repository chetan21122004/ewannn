/**
 * Post-build: write dist/{route}/index.html with per-page meta baked into <head>.
 * Run after `vite build` so crawlers and View Source see unique tags per URL.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SEO_STATIC_PAGES } from "../src/data/seoPages";

const SITE_URL = (process.env.VITE_SITE_URL ?? "https://www.uvan.co.in").replace(/\/$/, "");
const OG_IMAGE = `${SITE_URL}/uvanLogo.png`;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const distDir = path.join(rootDir, "dist");
const baseHtmlPath = path.join(distDir, "index.html");

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(text: string): string {
  return escapeHtml(text).replace(/'/g, "&#39;");
}

function canonicalPath(routePath: string): string {
  if (routePath === "/") return `${SITE_URL}/`;
  const normalized = routePath.endsWith("/") ? routePath : `${routePath}/`;
  return `${SITE_URL}${normalized}`;
}

function injectSeo(html: string, page: (typeof SEO_STATIC_PAGES)[number]): string {
  const title = escapeHtml(page.title);
  const description = escapeAttr(page.description);
  const canonical = escapeAttr(canonicalPath(page.path));

  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);

  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${description}" />`,
  );

  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeAttr(page.title)}" />`,
  );

  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`,
  );

  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`,
  );

  out = out.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${escapeAttr(OG_IMAGE)}" />`,
  );

  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeAttr(page.title)}" />`,
  );

  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${description}" />`,
  );

  out = out.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:image" content="${escapeAttr(OG_IMAGE)}" />`,
  );

  out = out.replace(
    /<meta\s+name="twitter:site"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:site" content="@uvan__" />`,
  );

  if (/<meta\s+name="twitter:url"/i.test(out)) {
    out = out.replace(
      /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:url" content="${canonical}" />`,
    );
  } else {
    out = out.replace(
      /(<meta\s+name="twitter:card"[^>]*\/?>)/i,
      `$1\n    <meta name="twitter:url" content="${canonical}" />`,
    );
  }

  if (page.keywords?.trim()) {
    const keywords = escapeAttr(page.keywords.trim());
    if (/<meta\s+name="keywords"/i.test(out)) {
      out = out.replace(
        /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="keywords" content="${keywords}" />`,
      );
    } else {
      out = out.replace(
        /(<meta\s+name="description"[^>]*\/?>)/i,
        `$1\n    <meta name="keywords" content="${keywords}" />`,
      );
    }
  }

  const canonicalTag = `<link rel="canonical" href="${canonical}" />`;
  if (/<link\s+rel="canonical"/i.test(out)) {
    out = out.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, canonicalTag);
  } else {
    out = out.replace(/(<meta\s+name="author"[^>]*\/?>)/i, `$1\n    ${canonicalTag}`);
  }

  return out;
}

function distSegment(routePath: string): string | null {
  if (routePath === "/") return null;
  return routePath.replace(/^\//, "");
}

async function main() {
  const baseHtml = await readFile(baseHtmlPath, "utf8");

  for (const page of SEO_STATIC_PAGES) {
    const html = injectSeo(baseHtml, page);
    const segment = distSegment(page.path);

    if (segment === null) {
      await writeFile(baseHtmlPath, html, "utf8");
      console.log(`SEO HTML: / (dist/index.html)`);
      continue;
    }

    const outDir = path.join(distDir, segment);
    await mkdir(outDir, { recursive: true });
    const outPath = path.join(outDir, "index.html");
    await writeFile(outPath, html, "utf8");
    console.log(`SEO HTML: ${page.path} → dist/${segment}/index.html`);
  }

  console.log(`Done - ${SEO_STATIC_PAGES.length} routes.`);
}

main().catch((error) => {
  console.error("generate-seo-html failed:", error);
  process.exit(1);
});
