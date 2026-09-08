import type { MetadataRoute } from "next";
import { corridors } from "@/data/corridors";
import { faqs } from "@/data/faqs";
import { indexReviewedAt } from "@/data/index-review";
import { providers } from "@/data/providers";
import { sendingCountryHubs } from "@/data/sending-country-hubs";
import { siteConfig } from "@/data/site";
import { blogSlugs, guideSlugs, getGuides, getBlogPosts } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [guides, posts] = await Promise.all([getGuides(), getBlogPosts()]);
  const modifiedDates = new Map<string, string>([
    ...["/providers", "/corridors", "/guides", "/faq"].map(
      (path): [string, string] => [path, indexReviewedAt]
    ),
    ...providers.flatMap((provider): [string, string][] => [
      [`/providers/${provider.slug}`, provider.lastUpdated],
      [`/providers/${provider.slug}/referral-code`, provider.lastUpdated]
    ]),
    ...guides.map((guide): [string, string] => [
      `/guides/${guide.slug}`,
      guide.updatedAt
    ]),
    ...posts.map((post): [string, string] => [
      `/blog/${post.slug}`,
      post.updatedAt
    ]),
    ...corridors.map((corridor): [string, string] => [
      `/corridors/${corridor.slug}`,
      corridor.lastUpdated
    ]),
    ...faqs.map((faq): [string, string] => [
      `/faq/${faq.slug}`,
      faq.lastUpdated
    ]),
    ...sendingCountryHubs.map((hub): [string, string] => [
      `/from/${hub.slug}`,
      hub.lastUpdated
    ])
  ]);
  const routes = [
    "",
    "/providers",
    "/corridors",
    "/guides",
    "/faq",
    "/blog",
    "/about",
    "/editorial-policy",
    "/research-methodology",
    "/disclosure",
    "/privacy-policy",
    "/terms",
    "/contact",
    ...sendingCountryHubs.map((hub) => `/from/${hub.slug}`),
    ...providers.flatMap((provider) => [
      `/providers/${provider.slug}`,
      `/providers/${provider.slug}/referral-code`
    ]),
    ...corridors.map((corridor) => `/corridors/${corridor.slug}`),
    ...guideSlugs.map((slug) => `/guides/${slug}`),
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    ...faqs.map((faq) => `/faq/${faq.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: modifiedDates.get(route),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
