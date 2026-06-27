import type { ComponentType } from "react";

export type GuideMeta = {
  title: string;
  slug: string;
  description: string;
  updatedAt: string;
};

export type BlogMeta = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  tags: string[];
};

type MdxModule<T> = T & { default: ComponentType };

const guideModules = {
  "how-referral-codes-work": () =>
    import("@/content/guides/how-referral-codes-work.mdx") as Promise<MdxModule<{ meta: GuideMeta }>>,
  "how-to-claim-a-welcome-bonus": () =>
    import("@/content/guides/how-to-claim-a-welcome-bonus.mdx") as Promise<MdxModule<{ meta: GuideMeta }>>,
  "promo-code-vs-referral-code": () =>
    import("@/content/guides/promo-code-vs-referral-code.mdx") as Promise<MdxModule<{ meta: GuideMeta }>>,
  "how-to-avoid-missing-signup-bonus": () =>
    import("@/content/guides/how-to-avoid-missing-signup-bonus.mdx") as Promise<MdxModule<{ meta: GuideMeta }>>,
  "how-to-compare-welcome-bonuses-between-transfer-apps": () =>
    import("@/content/guides/how-to-compare-welcome-bonuses-between-transfer-apps.mdx") as Promise<
      MdxModule<{ meta: GuideMeta }>
    >,
  "what-to-check-before-using-money-transfer-referral-link": () =>
    import("@/content/guides/what-to-check-before-using-money-transfer-referral-link.mdx") as Promise<
      MdxModule<{ meta: GuideMeta }>
    >,
  "why-bonus-was-not-received": () =>
    import("@/content/guides/why-bonus-was-not-received.mdx") as Promise<MdxModule<{ meta: GuideMeta }>>
};

const blogModules = {
  "how-to-check-transfer-bonus-terms": () =>
    import("@/content/blog/how-to-check-transfer-bonus-terms.mdx") as Promise<MdxModule<{ meta: BlogMeta }>>
};

export const guideSlugs = Object.keys(guideModules);
export const blogSlugs = Object.keys(blogModules);

export async function getGuide(slug: string) {
  const loader = guideModules[slug as keyof typeof guideModules];
  if (!loader) return null;
  const mod = await loader();
  return { meta: mod.meta, Content: mod.default };
}

export async function getGuides() {
  return Promise.all(guideSlugs.map((slug) => getGuide(slug))).then((items) =>
    items.filter(Boolean).map((item) => item!.meta)
  );
}

export async function getBlogPost(slug: string) {
  const loader = blogModules[slug as keyof typeof blogModules];
  if (!loader) return null;
  const mod = await loader();
  return { meta: mod.meta, Content: mod.default };
}

export async function getBlogPosts() {
  return Promise.all(blogSlugs.map((slug) => getBlogPost(slug))).then((items) =>
    items.filter(Boolean).map((item) => item!.meta)
  );
}
