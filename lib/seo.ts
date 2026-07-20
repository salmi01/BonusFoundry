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
      images: [
        {
          url: new URL(siteConfig.ogImage, siteConfig.url).toString(),
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ],
      publishedTime,
      modifiedTime
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL(siteConfig.ogImage, siteConfig.url).toString()]
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
      "@id": `${siteConfig.url}/#editorial-team`,
      name: input.author || siteConfig.author
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`
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
      "@id": `${siteConfig.url}/#editorial-team`
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: new URL("/", siteConfig.url).toString(),
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#logo`,
      url: new URL(siteConfig.logo, siteConfig.url).toString(),
      contentUrl: new URL(siteConfig.logo, siteConfig.url).toString(),
      caption: siteConfig.name,
      width: 2172,
      height: 724
    },
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: siteConfig.sameAs,
    publishingPrinciples: new URL("/editorial-policy", siteConfig.url).toString()
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: new URL("/", siteConfig.url).toString(),
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
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
      "The editorial team that researches BonusFoundry provider, corridor, guide, FAQ, and referral bonus pages by reviewing official provider websites, referral terms, help-center documentation, and manually verified app offers.",
    knowsAbout: [
      "Money transfer referral programs",
      "Welcome bonuses",
      "Promo codes",
      "Referral eligibility",
      "Provider verification requirements"
    ]
  };
}
