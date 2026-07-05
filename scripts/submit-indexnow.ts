import { readFile } from "node:fs/promises";
import { join } from "node:path";

const DEFAULT_INDEXNOW_KEY = "d5775f67f15d4277a2de928533af6055";
const DEFAULT_SITE_URL = "https://bonusfoundry.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

type SitemapSource = {
  xml: string;
  source: string;
};

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, "");
}

function isLocalUrl(url: URL) {
  return url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "::1";
}

function extractLocUrls(xml: string, siteUrl: string) {
  const site = new URL(siteUrl);
  const matches = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)];

  return [...new Set(matches.map((match) => match[1].trim()))].filter((rawUrl) => {
    try {
      const url = new URL(rawUrl);

      if (isLocalUrl(url)) return false;
      return url.host === site.host;
    } catch {
      return false;
    }
  });
}

async function fetchSitemap(siteUrl: string): Promise<SitemapSource> {
  const sitemapUrl = `${siteUrl}/sitemap.xml`;

  try {
    const response = await fetch(sitemapUrl);

    if (!response.ok) {
      throw new Error(`Sitemap fetch returned ${response.status} ${response.statusText}`);
    }

    return {
      xml: await response.text(),
      source: sitemapUrl
    };
  } catch (error) {
    console.warn(`IndexNow: could not fetch ${sitemapUrl}. Falling back to local build output.`);
    console.warn(error instanceof Error ? error.message : error);
  }

  const localSitemapPath = join(process.cwd(), ".next", "server", "app", "sitemap.xml.body");

  return {
    xml: await readFile(localSitemapPath, "utf8"),
    source: localSitemapPath
  };
}

async function main() {
  const key = process.env.INDEXNOW_KEY ?? DEFAULT_INDEXNOW_KEY;
  const siteUrl = normalizeSiteUrl(process.env.SITE_URL ?? DEFAULT_SITE_URL);
  const site = new URL(siteUrl);

  if (isLocalUrl(site)) {
    console.log("IndexNow: skipped because SITE_URL points to localhost.");
    return;
  }

  if (!key) {
    console.log("IndexNow: skipped because INDEXNOW_KEY is not configured.");
    return;
  }

  let sitemap: SitemapSource;
  try {
    sitemap = await fetchSitemap(siteUrl);
  } catch (error) {
    console.warn("IndexNow: no sitemap could be loaded. Skipping submission.");
    console.warn(error instanceof Error ? error.message : error);
    return;
  }

  const urlList = extractLocUrls(sitemap.xml, siteUrl);

  if (urlList.length === 0) {
    console.log(`IndexNow: no submit-ready URLs found in ${sitemap.source}.`);
    return;
  }

  const body = {
    host: site.host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(body)
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.warn(`IndexNow: submission failed with ${response.status} ${response.statusText}.`);
      if (responseText) console.warn(responseText);
      return;
    }

    console.log(`IndexNow: submitted ${urlList.length} URLs from ${sitemap.source}.`);
  } catch (error) {
    console.warn("IndexNow: submission failed safely. Production build is not blocked.");
    console.warn(error instanceof Error ? error.message : error);
  }
}

main().catch((error) => {
  console.warn("IndexNow: unexpected failure handled safely.");
  console.warn(error instanceof Error ? error.message : error);
});
