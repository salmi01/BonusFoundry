import { notFound } from "next/navigation";
import {
  CommonMistakes,
  KeyTakeaways,
  LastVerified,
  NextSteps,
  QuickAnswer,
  RelatedResources,
  StepChecklist,
  Troubleshooting,
  type LinkItem,
  type TroubleshootingItem
} from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { JsonLd } from "@/components/json-ld";
import { corridors } from "@/data/corridors";
import { faqs } from "@/data/faqs";
import { providers } from "@/data/providers";
import { articleJsonLd, breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { getGuide, getGuides, guideSlugs, type GuideMeta } from "@/lib/content";
import { formatDate } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = await getGuide(slug);
  if (!guide) return {};

  return createMetadata({
    title: guide.meta.title,
    description: guide.meta.description,
    path: `/guides/${guide.meta.slug}`,
    type: "article",
    publishedTime: guide.meta.publishedAt,
    modifiedTime: guide.meta.updatedAt
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = await getGuide(slug);
  if (!guide) notFound();
  const { Content, meta } = guide;
  const guides = await getGuides();
  const relatedResources = buildGuideRelatedResources(meta, guides);
  const guideChecklist = guideChecklistItems(meta.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: "Guides", item: `/guides/${meta.slug}` },
          { name: meta.title, item: `/guides/${meta.slug}` }
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          title: meta.title,
          description: meta.description,
          path: `/guides/${meta.slug}`,
          updatedAt: meta.updatedAt
        })}
      />
      <JsonLd
        data={articleJsonLd({
          title: meta.title,
          description: meta.description,
          path: `/guides/${meta.slug}`,
          publishedAt: meta.publishedAt ?? meta.updatedAt,
          updatedAt: meta.updatedAt,
          author: "BonusFoundry Editorial Team"
        })}
      />
      {meta.faqs ? <JsonLd data={faqJsonLd(meta.faqs)} /> : null}
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/guides/${meta.slug}`, label: meta.title }
          ]}
        />
        <article className="max-w-3xl">
          <LastVerified date={formatDate(meta.updatedAt)} />
          <h1 className="mt-4 text-4xl font-bold tracking-normal">{meta.h1 ?? meta.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{meta.description}</p>
          <div className="mt-8">
            <QuickAnswer answer={meta.quickAnswer ?? meta.description} />
          </div>
          <div className="mt-5">
            <KeyTakeaways
              title="On this page"
              items={
                meta.keyTakeaways ?? [
                  "Direct answer first.",
                  "Step-by-step actions before signup or transfer.",
                  "Checklist for avoiding missed rewards.",
                  "Common mistakes and troubleshooting paths.",
                  "Related provider, FAQ, and corridor pages."
                ]
              }
            />
          </div>
          <div className="mt-5">
            <StepChecklist items={guideChecklist} title="Action checklist" />
          </div>
          <div className="mt-8">
            <Content />
          </div>
          <div className="mt-10 grid gap-5">
            <CommonMistakes mistakes={guideCommonMistakes(meta.slug)} />
            <Troubleshooting items={guideTroubleshooting(meta.slug)} />
            <NextSteps links={guideNextSteps(meta.slug)} />
            <RelatedResources links={relatedResources} />
          </div>
          <div className="mt-10">
            <Disclosure />
          </div>
        </article>
      </Container>
    </>
  );
}

function guideChecklistItems(slug: string) {
  const base = [
    { label: "Check the provider page before signup.", status: "pending" as const },
    { label: "Confirm the sender country, destination, transfer amount, and payment method.", status: "pending" as const },
    { label: "Save the offer screen and transfer receipt.", status: "pending" as const }
  ];

  if (slug.includes("referral-link")) {
    return [
      { label: "Open the referral link before creating the account.", status: "pending" as const },
      ...base
    ];
  }

  if (slug.includes("promo-code") || slug.includes("referral-code")) {
    return [
      { label: "Confirm whether the provider uses a code, a referral link, or both.", status: "pending" as const },
      ...base
    ];
  }

  if (slug.includes("bonus-was-not-received")) {
    return [
      { label: "Check whether the transfer is complete, pending, failed, or under review.", status: "pending" as const },
      { label: "Compare the transfer against the provider's displayed reward terms.", status: "pending" as const },
      { label: "Contact provider support with the offer screen and receipt.", status: "pending" as const }
    ];
  }

  return base;
}

function guideCommonMistakes(slug: string) {
  if (slug.includes("bonus-was-not-received")) {
    return [
      "Treating a pending transfer as a missing reward.",
      "Contacting support without the offer screen or transfer receipt.",
      "Sending another transfer before checking the original terms."
    ];
  }

  if (slug.includes("compare")) {
    return [
      "Choosing the largest advertised bonus without comparing total received amount.",
      "Comparing providers with different payout methods.",
      "Ignoring verification delays on the first transfer."
    ];
  }

  return [
    "Creating the account before applying the required code or link.",
    "Assuming a provider offer works in every country.",
    "Ignoring verification or minimum-transfer requirements."
  ];
}

function guideTroubleshooting(slug: string): TroubleshootingItem[] {
  if (slug.includes("bonus-was-not-received")) {
    return [
      {
        problem: "Reward missing",
        possibleReason: "The transfer has not completed, verification is pending, or one offer condition was not met.",
        suggestedAction: "Check transfer status, reward timing, and provider terms before contacting support."
      },
      {
        problem: "Provider cannot find the offer",
        possibleReason: "The code or link may not have attached before signup or first transfer.",
        suggestedAction: "Send support the offer screen, signup date, transfer receipt, and referral details."
      }
    ];
  }

  return [
    {
      problem: "Code or link did not apply",
      possibleReason: "The offer may need to be applied before signup or before the first qualifying transfer.",
      suggestedAction: "Check the provider's referral page and live offer screen before continuing."
    },
    {
      problem: "Reward timing is unclear",
      possibleReason: "Reward timing can depend on transfer completion, verification, and provider review.",
      suggestedAction: "Keep the receipt and wait for the provider's stated reward timing before escalating."
    }
  ];
}

function guideNextSteps(slug: string): LinkItem[] {
  const items: LinkItem[] = [
    { href: "/providers", label: "Compare provider bonus pages", description: "Start with provider-specific eligibility, reward, and verification details." },
    { href: "/faq/why-did-i-not-receive-my-referral-bonus", label: "Missing referral bonus FAQ", description: "Use this when a reward has not appeared after a transfer." },
    { href: "/corridors", label: "Compare corridor pages", description: "Check sender-country and destination-specific provider options." }
  ];

  if (slug.includes("taptap")) {
    return [
      { href: "/providers/taptap-send", label: "Taptap Send provider page" },
      { href: "/providers/taptap-send/referral-code", label: "Taptap Send referral code" },
      ...items
    ];
  }

  return items;
}

function buildGuideRelatedResources(meta: GuideMeta, guides: GuideMeta[]): LinkItem[] {
  const relatedGuides = guides
    .filter((guide) => guide.slug !== meta.slug)
    .slice(0, 4)
    .map((guide) => ({
      href: `/guides/${guide.slug}`,
      label: guide.title,
      description: guide.description
    }));

  return [
    ...relatedGuides,
    ...faqs.slice(0, 4).map((faq) => ({
      href: `/faq/${faq.slug}`,
      label: faq.question,
      description: faq.answer
    })),
    ...providers.slice(0, 4).map((provider) => ({
      href: `/providers/${provider.slug}`,
      label: `${provider.name} bonus guide`,
      description: provider.welcomeBonus
    })),
    ...corridors.slice(0, 3).map((corridor) => ({
      href: `/corridors/${corridor.slug}`,
      label: `${corridor.from} to ${corridor.to}`,
      description: corridor.summary
    })),
    { href: "/from/usa", label: "Send money from USA", description: "Country hub for USA sender routes and provider options." },
    { href: "/from/france", label: "Send money from France", description: "Country hub for France sender routes and provider options." }
  ];
}
