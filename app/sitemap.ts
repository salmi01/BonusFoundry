import type { MetadataRoute } from "next";
import { corridors } from "@/data/corridors";
import { faqs } from "@/data/faqs";
import { providers } from "@/data/providers";
import { siteConfig } from "@/data/site";
import { blogSlugs, guideSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/blog",
    ...providers.flatMap((provider) => [`/providers/${provider.slug}`, `/providers/${provider.slug}/referral-code`]),
    ...corridors.map((corridor) => `/corridors/${corridor.slug}`),
    ...guideSlugs.map((slug) => `/guides/${slug}`),
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    ...faqs.map((faq) => `/faq/${faq.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
