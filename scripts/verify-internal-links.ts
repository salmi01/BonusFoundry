// Run after npm run build. Inspect crawlable HTML for every relationship.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { corridors } from "../data/corridors";
import { providers } from "../data/providers";

const decode = (value: string) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"');
function anchors(html: string) {
  return [
    ...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)
  ].map((match) => ({
    href: decode(match[1]),
    label: decode(match[2].replace(/<[^>]+>/g, ""))
      .replace(/\s+/g, " ")
      .trim()
  }));
}
async function page(path: string) {
  return (await readFile(`.next/server/app${path}.html`, "utf8")).replace(
    /<script\b[^>]*>[\s\S]*?<\/script>/g,
    ""
  );
}

async function main() {
  const providerSlugs = new Set(providers.map((provider) => provider.slug));
  const corridorSlugs = new Set(corridors.map((corridor) => corridor.slug));
  assert.equal(providerSlugs.size, providers.length, "Duplicate provider slug");
  assert.equal(corridorSlugs.size, corridors.length, "Duplicate corridor slug");
  let relationships = 0;

  for (const corridor of corridors) {
    assert.equal(
      new Set(corridor.providerSlugs).size,
      corridor.providerSlugs.length
    );
    const html = await page(`/corridors/${corridor.slug}`);
    const comparison = html.match(
      /<h2\b[^>]*>Provider comparison<\/h2>[\s\S]*?<table\b[^>]*>([\s\S]*?)<\/table>/
    )?.[1];
    assert(comparison, `${corridor.slug}: comparison table missing`);
    const links = anchors(comparison);
    for (const slug of corridor.providerSlugs) {
      assert(
        providerSlugs.has(slug),
        `${corridor.slug}: unknown provider ${slug}`
      );
      const provider = providers.find((item) => item.slug === slug)!;
      assert(
        links.some(
          (link) =>
            link.href === `/providers/${slug}` &&
            link.label === `${provider.name} transfer guide`
        ),
        `${corridor.slug}: missing contextual provider link ${slug}`
      );
      assert(
        links.some(
          (link) =>
            link.href === `/providers/${slug}/referral-code` &&
            link.label === `${provider.name} referral terms`
        ),
        `${corridor.slug}: missing contextual referral link ${slug}`
      );
      relationships++;
    }
    for (const link of links.filter((link) =>
      link.href.startsWith("/providers/")
    )) {
      assert(
        corridor.providerSlugs.includes(link.href.split("/")[2]),
        `${corridor.slug}: unrelated provider link ${link.href}`
      );
    }
  }

  for (const provider of providers) {
    const expected = corridors.filter((corridor) =>
      corridor.providerSlugs.includes(provider.slug)
    );
    for (const suffix of ["", "/referral-code"]) {
      const path = `/providers/${provider.slug}${suffix}`;
      const html = await page(path);
      const section = html.match(
        new RegExp(
          `<section[^>]*aria-labelledby="${provider.slug}-corridor-comparisons"[^>]*>([\\s\\S]*?)<\\/section>`
        )
      )?.[1];
      if (!expected.length) {
        assert(!section, `${path}: should not invent corridor relationships`);
        continue;
      }
      assert(section, `${path}: missing corridor comparison section`);
      const links = anchors(section);
      assert.deepEqual(
        links.map((link) => link.href).sort(),
        expected.map((corridor) => `/corridors/${corridor.slug}`).sort(),
        `${path}: corridor links must match editorial shortlists exactly`
      );
      for (const corridor of expected) {
        assert(
          links.some(
            (link) =>
              link.href === `/corridors/${corridor.slug}` &&
              link.label === `${corridor.from} to ${corridor.to} transfers`
          ),
          `${path}: descriptive route anchor missing`
        );
      }
      assert(
        anchors(html)
          .filter((link) => link.href.startsWith("/corridors/"))
          .every((link) =>
            expected.some(
              (corridor) => link.href === `/corridors/${corridor.slug}`
            )
          ),
        `${path}: stale unrelated corridor link outside the section`
      );
    }
  }
  console.log(
    JSON.stringify(
      {
        corridorPages: corridors.length,
        providerPages: providers.length * 2,
        reciprocalRelationships: relationships,
        checkedDirections: relationships * 4,
        result:
          "All links present in server-rendered HTML with descriptive anchors and existing destinations"
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
