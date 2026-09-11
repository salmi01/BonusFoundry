import assert from "node:assert/strict";

// Check the actual assets referenced by HTML, not just a successful page response.
const origin = process.argv[2] || "http://localhost:3000";
const assets = new Map();
for (const path of ["/", "/providers", "/providers/sendwave/referral-code"]) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path}: page unavailable`);
  const html = await response.text();
  const styles = [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)];
  assert(styles.length > 0, `${path}: no stylesheet linked`);
  for (const match of styles) {
    const href = match[0].match(/href="([^"]+)"/)?.[1];
    assert(href, `${path}: stylesheet URL missing`);
    assets.set(new URL(href.replaceAll("&amp;", "&"), origin).href, "css");
  }
  for (const match of html.matchAll(/<script\b[^>]*src="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll("&amp;", "&"), origin);
    if (url.origin === new URL(origin).origin) assets.set(url.href, "js");
  }
  console.log(`${path}: HTML 200`);
}
for (const [url, type] of assets) {
  const response = await fetch(url);
  assert.equal(response.status, 200, `Missing ${type}: ${url}`);
  assert(
    response.headers
      .get("content-type")
      ?.includes(type === "css" ? "text/css" : "javascript"),
    `Unexpected content type: ${url}`
  );
  if (type === "css") {
    assert(
      (await response.text()).includes(".flex"),
      `Tailwind utilities missing: ${url}`
    );
  } else {
    await response.arrayBuffer();
  }
}
console.log(
  `${assets.size} CSS/JavaScript assets returned 200; Tailwind CSS present.`
);
