import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function createMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime
}: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    authors: [{ name: siteConfig.author }],
    alternates: {
      canonical: path
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: siteConfig.name,
      publishedTime,
      modifiedTime
    }
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.item, siteConfig.url).toString()
    }))
  };
}

export function faqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: new URL(input.path, siteConfig.url).toString(),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    author: {
      "@type": "Organization",
      name: input.author
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name
    }
  };
}

export function webPageJsonLd(input: {
  title: string;
  description: string;
  path: string;
  updatedAt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.title,
    description: input.description,
    url: new URL(input.path, siteConfig.url).toString(),
    dateModified: input.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.author
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: new URL("/favicon.svg", siteConfig.url).toString(),
    description: siteConfig.description,
    email: siteConfig.email,
    publishingPrinciples: new URL("/editorial-policy", siteConfig.url).toString()
  };
}

export function editorialTeamJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#editorial-team`,
    name: "BonusFoundry Editorial Team",
    url: new URL("/about", siteConfig.url).toString(),
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name
    },
    description:
      "The editorial team that researches Bonus Foundry provider, corridor, guide, FAQ, and referral bonus pages using official provider sources and clearly disclosed referral information.",
    knowsAbout: [
      "Money transfer referral programs",
      "Welcome bonuses",
      "Promo codes",
      "Referral eligibility",
      "Provider verification requirements"
    ]
  };
}
