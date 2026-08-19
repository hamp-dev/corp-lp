import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the hamp music event landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /DJもゲストも/);
  assert.match(html, /告知はX、受付はフォーム、連絡はDM。/);
  assert.match(html, /募集から当日まで/);
  assert.match(html, /イベント募集を作る/);
  assert.match(html, /https:\/\/hamp\.ai\/organizer/);
  assert.match(html, /src="\/logo\.svg"/);
  assert.match(html, /660152_m\.jpg/);
  assert.match(html, /sozai2\.png/);
  assert.doesNotMatch(html, /導入を相談|切り替えを相談/);
  assert.doesNotMatch(html, /FOR DJ \/ CLUB \/ LIVE ORGANIZERS|YOUR EVENT,|YOUR COMMUNITY\./);
  assert.doesNotMatch(html, /artist-points/);
});

test("keeps the copy and primary paths aligned with direct self-service use", async () => {
  const [page, layout, logo] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../public/logo.svg", import.meta.url), "utf8"),
  ]);

  const organizerLinks = page.match(/https:\/\/hamp\.ai\/organizer/g) ?? [];
  assert.ok(organizerLinks.length >= 4);
  assert.doesNotMatch(page, /filix\.jp\/#contact/);
  assert.doesNotMatch(page, /公開例|定性事例/);
  assert.match(page, /使い慣れたプレイガイドをご利用ください/);
  for (const image of ["660152_m.jpg", "sozai2.png", "sozai3.png", "sozai4.png", "sozai5.png"]) {
    assert.match(page, new RegExp(image.replace(".", "\\.")));
  }
  assert.match(layout, /DJ、ゲスト、スタッフの受付をひとつに/);
  assert.match(logo, /viewBox="0 0 294\.34 104\.01"/);
  assert.match(logo, /stroke="#ef9900"/);
});
