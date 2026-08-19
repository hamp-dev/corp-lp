import { copyFile, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const sourceUrl = process.argv[2] ?? "http://localhost:3001/";
const publicUrl = "https://lp.hamp.ai/music-events/";

const response = await fetch(sourceUrl);

if (!response.ok) {
  throw new Error(`Static source returned HTTP ${response.status}: ${sourceUrl}`);
}

let html = await response.text();

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*href=["']\/(?:@id|_next)\/[^>]*>/gi, "")
  .replace(
    /<link\b[^>]*href=["']\/app\/globals\.css["'][^>]*>/gi,
    '<link rel="stylesheet" href="./styles.css">',
  )
  .replace(/\s+srcset="[^"]*"/gi, "")
  .replace(/\s+sizes="[^"]*"/gi, "")
  .replace(
    /\/_next\/image\?url=%2F([^&"]+)&amp;w=\d+&amp;q=\d+/gi,
    (_, filename) => `./public/${decodeURIComponent(filename)}`,
  )
  .replace(/src="\/(logo\.svg)"/gi, 'src="./public/$1"')
  .replace(/href="\/(favicon\.svg)"/gi, 'href="./public/$1"')
  .replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${publicUrl}">`,
  )
  .replace(
    "</head>",
    `<link rel="canonical" href="${publicUrl}"><meta property="og:image" content="${publicUrl}public/og.png"><meta name="twitter:image" content="${publicUrl}public/og.png"></head>`,
  );

await writeFile(resolve(projectDirectory, "index.html"), html, "utf8");
await copyFile(
  resolve(projectDirectory, "app", "globals.css"),
  resolve(projectDirectory, "styles.css"),
);

const writtenHtml = await readFile(resolve(projectDirectory, "index.html"), "utf8");

for (const requiredText of [
  "DJもゲストも",
  "./styles.css",
  "./public/660152_m.jpg",
  "https://hamp.ai/organizer",
]) {
  if (!writtenHtml.includes(requiredText)) {
    throw new Error(`Static export is missing required content: ${requiredText}`);
  }
}

if (writtenHtml.includes("/_next/") || writtenHtml.includes("/@id/")) {
  throw new Error("Static export still contains runtime-only asset references");
}

console.log(`Static site exported to ${resolve(projectDirectory, "index.html")}`);
