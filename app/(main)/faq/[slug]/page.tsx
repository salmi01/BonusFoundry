import { notFound } from "next/navigation";
import {
  CommonMistakes,
  KeyTakeaways,
  LastVerified,
  NextSteps,
  ProviderMiniFAQ,
  QuickAnswer,
  RelatedResources,
  type LinkItem
} from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { faqs, getFaq } from "@/data/faqs";
import { corridors } from "@/data/corridors";
import { getProvider, providers } from "@/data/providers";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

const relatedGuides = [
  { href: "/guides/how-referral-codes-work", label: "How referral codes work" },
  { href: "/guides/promo-code-vs-referral-code", label: "Promo code vs referral code" },
  { href: "/guides/how-to-claim-a-welcome-bonus", label: "How to claim a welcome bonus" },
  { href: "/guides/how-to-avoid-missing-signup-bonus", label: "How to avoid missing a signup bonus" },
  { href: "/guides/why-bonus-was-not-received", label: "Why a welcome bonus was not received" }
];

export function generateStaticParams() {
  return faqs.map((faq) => ({ slug: faq.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const faq = getFaq(slug);
  if (!faq) return {};

  return createMetadata({
    title: faq.question,
    description: faq.answer,
    path: `/faq/${faq.slug}`
  });
}

export default async function FAQPage({ params }: PageProps) {
  const { slug } = await params;
  const faq = getFaq(slug);
  if (!faq) notFound();
  const relatedResources = buildFaqRelatedResources(faq);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: faq.question, item: `/faq/${faq.slug}` }
        ])}
      />
      <JsonLd data={faqJsonLd([{ question: faq.question, answer: faq.answer }])} />
      <JsonLd
        data={webPageJsonLd({
          title: faq.question,
          description: faq.answer,
          path: `/faq/${faq.slug}`,
          updatedAt: faq.lastUpdated
        })}
      />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/faq/${faq.slug}`, label: faq.question }
          ]}
        />
        <article className="max-w-3xl">
          <LastVerified date={formatDate(faq.lastUpdated)} />
          <h1 className="mt-4 text-4xl font-bold tracking-normal">{faq.question}</h1>
          <div className="mt-5">
            <QuickAnswer answer={faq.answer} />
          </div>
          <div className="mt-8 grid gap-5">
            <KeyTakeaways title="Short explanation" items={faqTakeaways(faq)} />
            <ProviderMiniFAQ
              title="Answer structure"
              items={[
                { question: "Direct answer", answer: faq.answer },
                { question: "Important condition", answer: faqCondition(faq.slug) },
                { question: "Related page", answer: faqRelatedPage(faq) }
              ]}
            />
            <CommonMistakes mistakes={faq.examples} title="Practical examples" />
            <NextSteps links={faqNextSteps(faq)} />
            <RelatedResources links={relatedResources} />
          </div>
        </article>
      </Container>
    </>
  );
}

function faqTakeaways(faq: NonNullable<ReturnType<typeof getFaq>>) {
  return [
    faq.answer,
    faqCondition(faq.slug),
    "Use the provider's current app, website, or support flow as the final source for account-specific decisions."
  ];
}

function faqCondition(slug: string) {
  if (slug.includes("after-signing-up")) {
    return "The key condition is timing: many offers must attach before signup or before the first qualifying transfer.";
  }

  if (slug.includes("not-receive")) {
    return "The key condition is qualification: code entry, new-user status, transfer completion, verification, amount, destination, and payout method all matter.";
  }

  if (slug.includes("refer-myself")) {
    return "The key condition is account separation: referral programs are intended for a different eligible person.";
  }

  if (slug.includes("country")) {
    return "The key condition is route eligibility: sender country, destination, payment method, and provider rules can differ.";
  }

  if (slug.includes("identity")) {
    return "The key condition is verification status: providers can delay transfers and rewards until checks are complete.";
  }

  return "The key condition is the provider's live offer terms at signup, checkout, or first transfer.";
}

function faqRelatedPage(faq: NonNullable<ReturnType<typeof getFaq>>) {
  const firstProvider = faq.providerLinks.map((slug) => getProvider(slug)).find(Boolean);
  if (firstProvider) {
    return `${firstProvider.name} bonus guide and referral code page.`;
  }

  return "Related guides and provider pages listed below.";
}

function faqNextSteps(faq: NonNullable<ReturnType<typeof getFaq>>): LinkItem[] {
  const providerLinks = faq.providerLinks
    .map((slug) => getProvider(slug))
    .filter((provider): provider is NonNullable<ReturnType<typeof getProvider>> => Boolean(provider))
    .slice(0, 2)
    .flatMap((provider) => [
      { href: `/providers/${provider.slug}`, label: `${provider.name} bonus guide` },
      { href: `/providers/${provider.slug}/referral-code`, label: `${provider.name} referral code` }
    ]);

  return [
    ...providerLinks,
    { href: "/guides/how-referral-codes-work", label: "How referral codes work" },
    { href: "/guides/how-to-avoid-missing-signup-bonus", label: "How to avoid missing a signup bonus" },
    { href: "/corridors", label: "Compare corridors" }
  ];
}

function buildFaqRelatedResources(faq: NonNullable<ReturnType<typeof getFaq>>): LinkItem[] {
  const providerResources = faq.providerLinks
    .map((slug) => getProvider(slug))
    .filter((provider): provider is NonNullable<ReturnType<typeof getProvider>> => Boolean(provider))
    .flatMap((provider) => [
      {
        href: `/providers/${provider.slug}`,
        label: `${provider.name} provider page`,
        description: provider.welcomeBonus
      },
      {
        href: `/providers/${provider.slug}/referral-code`,
        label: `${provider.name} referral code`,
        description: provider.currentOffer
      }
    ]);

  return [
    ...providerResources,
    ...relatedGuides.map((guide) => ({
      href: guide.href,
      label: guide.label,
      description: "Related guide for referral, promo, or welcome-bonus decisions."
    })),
    ...faqs
      .filter((item) => item.slug !== faq.slug)
      .slice(0, 3)
      .map((item) => ({
        href: `/faq/${item.slug}`,
        label: item.question,
        description: item.answer
      })),
    ...providers.slice(0, 2).map((provider) => ({
      href: `/providers/${provider.slug}`,
      label: `${provider.name} provider guide`,
      description: provider.description
    })),
    ...corridors.slice(0, 2).map((corridor) => ({
      href: `/corridors/${corridor.slug}`,
      label: `${corridor.from} to ${corridor.to}`,
      description: corridor.summary
    })),
    { href: "/from/usa", label: "Send money from USA", description: "Country hub for USA sender routes and provider options." },
    { href: "/from/france", label: "Send money from France", description: "Country hub for France sender routes and provider options." }
  ];
}
