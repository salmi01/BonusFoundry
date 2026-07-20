import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BestFor,
  CommonMistakes,
  HowItWorks,
  KeyFacts,
  KeyTakeaways,
  LastVerified,
  ProviderMiniFAQ,
  QuickAnswer,
  RelatedResources,
  Troubleshooting,
  type LinkItem,
  type TroubleshootingItem
} from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { JsonLd } from "@/components/json-ld";
import { ProviderCard } from "@/components/provider-card";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { corridors, getCorridor, getCorridorProviders, type Corridor } from "@/data/corridors";
import type { Provider } from "@/data/providers";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

const guideLabels: Record<string, string> = {
  "how-referral-codes-work": "How referral codes work",
  "how-to-claim-a-welcome-bonus": "How to claim a welcome bonus",
  "how-to-avoid-missing-signup-bonus": "How to avoid missing a signup bonus",
  "what-to-check-before-using-money-transfer-referral-link": "What to check before using a referral link"
};

const sendingCountryHubSlugs: Record<string, string> = {
  France: "france",
  USA: "usa"
};

export function generateStaticParams() {
  return corridors.map((corridor) => ({ slug: corridor.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const corridor = getCorridor(slug);
  if (!corridor) return {};

  return createMetadata({
    title: `${corridor.from} to ${corridor.to} transfer bonuses`,
    description: `Compare providers, referral and promo opportunities, payment methods, delivery options, verification checks, and bonus mistakes for transfers from ${corridor.from} to ${corridor.to}.`,
    path: `/corridors/${corridor.slug}`
  });
}

export default async function CorridorPage({ params }: PageProps) {
  const { slug } = await params;
  const corridor = getCorridor(slug);
  if (!corridor) notFound();

  const relatedProviders = getCorridorProviders(corridor);
  const comparisonRows = relatedProviders.map((provider) => buildComparisonRow(provider, corridor));
  const relatedLinks = buildRelatedLinks(corridor, relatedProviders);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: `${corridor.from} to ${corridor.to}`, item: `/corridors/${corridor.slug}` }
        ])}
      />
      <JsonLd data={faqJsonLd(corridor.faq)} />
      <JsonLd
        data={webPageJsonLd({
          title: `${corridor.from} to ${corridor.to} transfer bonuses`,
          description: corridor.summary,
          path: `/corridors/${corridor.slug}`,
          updatedAt: corridor.lastUpdated
        })}
      />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/corridors", label: "Corridors" },
            { href: `/corridors/${corridor.slug}`, label: `${corridor.from} to ${corridor.to}` }
          ]}
        />
        <LastVerified date={formatDate(corridor.lastUpdated)} />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">
          {corridor.from} to {corridor.to} transfer bonuses
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{corridor.summary}</p>

        <div className="mt-10 space-y-8">
          <QuickAnswer answer={corridor.currentOffer} />
          <KeyTakeaways items={corridorTakeaways(corridor)} />
          <KeyFacts
            title="Corridor summary"
            facts={[
              ...corridor.keyFacts,
              { label: "Relevant receiving options", value: corridor.receivingOptions.join(", ") },
              { label: "Typical verification focus", value: corridor.identityVerification[0] },
              { label: "Last verified", value: formatDate(corridor.lastUpdated) }
            ]}
          />

          <ProviderComparisonTable rows={comparisonRows} />

          <section>
            <h2 className="text-2xl font-semibold">Provider cards</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              These providers are a corridor-specific shortlist. Open a provider page for full referral, eligibility,
              verification, support, and official-source details.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {relatedProviders.map((provider) => (
                <ProviderCard key={provider.slug} provider={provider} />
              ))}
            </div>
          </section>

          <BestFor items={bestForItems(corridor)} />
          <HowItWorks steps={corridor.steps.map((step) => ({ label: step }))} title="How to compare this corridor" />
          <KeyFacts title="Transfer methods and speed" facts={transferFacts(corridor)} />
          <KeyFacts title="Country-specific notes" facts={corridor.countryNotes.map((note, index) => ({ label: `Note ${index + 1}`, value: note }))} />
          <CommonMistakes mistakes={corridor.commonMistakes} />
          <Troubleshooting items={buildTroubleshooting(corridor)} title="Troubleshooting missing rewards" />
          <ProviderMiniFAQ items={corridor.faq} title={`${corridor.from} to ${corridor.to} FAQ`} />
          <RelatedResources links={relatedLinks} />
          <Disclosure />
        </div>
      </Container>
    </>
  );
}

type ComparisonRow = {
  provider: Provider;
  deliveryMethods: string;
  typicalSpeed: string;
  bonusAvailable: string;
  bestFor: string;
};

function ProviderComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Provider comparison</h2>
      <div className="mt-5 overflow-x-auto rounded-lg border bg-card shadow-sm">
        <Table className="min-w-[860px]">
          <thead>
            <TableRow>
              <TableHead className="w-[150px]">Provider</TableHead>
              <TableHead>Delivery methods</TableHead>
              <TableHead>Typical speed</TableHead>
              <TableHead>Bonus available</TableHead>
              <TableHead>Best for</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {rows.map((row) => (
              <TableRow key={row.provider.slug}>
                <TableHead className="w-[150px]">
                  <Link href={`/providers/${row.provider.slug}`} className="text-primary">
                    {row.provider.name}
                  </Link>
                </TableHead>
                <TableCell>{row.deliveryMethods}</TableCell>
                <TableCell>{row.typicalSpeed}</TableCell>
                <TableCell>{row.bonusAvailable}</TableCell>
                <TableCell>{row.bestFor}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

function buildComparisonRow(provider: Provider, corridor: Corridor): ComparisonRow {
  return {
    provider,
    deliveryMethods: deliveryMethodSummary(provider, corridor),
    typicalSpeed: speedSummary(provider, corridor),
    bonusAvailable: referralOpportunity(provider),
    bestFor: providerBestFit(provider)
  };
}

function referralOpportunity(provider: Provider) {
  if (provider.referralCode) {
    return `BonusFoundry code listed when ${provider.name} shows a code field for this route.`;
  }

  if (
    provider.referralLink &&
    provider.sources?.some((source) => source.confidence === "referral-link" && source.url === provider.referralLink)
  ) {
    return "BonusFoundry referral link listed; open it before signup when the route and offer terms match.";
  }

  return "Use the provider's own live promo, referral, or first-transfer offer when it appears for this route.";
}

function deliveryMethodSummary(provider: Provider, corridor: Corridor) {
  const providerMethods = provider.availability?.paymentMethods ?? [];
  const relevant = providerMethods.filter((method) => {
    const normalized = method.toLowerCase();
    return corridor.receivingOptions.some((option) => {
      const text = option.toLowerCase();
      return (
        (text.includes("bank") && normalized.includes("bank")) ||
        (text.includes("cash") && normalized.includes("cash")) ||
        (text.includes("wallet") && normalized.includes("wallet")) ||
        (text.includes("mobile") && normalized.includes("mobile")) ||
        (text.includes("card") && normalized.includes("card"))
      );
    });
  });

  const methods = relevant.length ? relevant : providerMethods.slice(0, 3);
  return methods.length ? methods.slice(0, 3).join(", ") : corridor.receivingOptions.slice(0, 2).join(", ");
}

function speedSummary(provider: Provider, corridor: Corridor) {
  if (provider.slug === "wise" || provider.slug === "xe") return "Route quote controls timing; bank delivery can vary.";
  if (provider.slug === "ria" || provider.slug === "western-union" || provider.slug === "moneygram") {
    return "Cash pickup can be fast after approval; agent and verification checks still matter.";
  }
  if (corridor.receivingOptions.some((option) => /mobile|wallet/i.test(option))) {
    return "Digital delivery can be fast when the recipient wallet or account is supported.";
  }

  return corridor.transferSpeed[0] ?? "Speed depends on funding method, payout method, and verification.";
}

function corridorTakeaways(corridor: Corridor) {
  return [
    corridorFocus(corridor),
    `Most relevant receiving options: ${corridor.receivingOptions.join(", ")}`,
    `Provider shortlist: ${corridor.providerSlugs.length} providers to check for ${corridor.from} to ${corridor.to}.`,
    corridor.countryNotes[0],
    "Use the live provider flow before relying on a referral, promo, or first-transfer offer."
  ];
}

function bestForItems(corridor: Corridor) {
  const receiving = corridor.receivingOptions.map((option) => {
    if (/mobile|wallet/i.test(option)) return "Mobile money or wallet delivery";
    if (/cash/i.test(option)) return "Cash pickup";
    if (/bank/i.test(option)) return "Bank deposit";
    if (/card/i.test(option)) return "Card or account delivery";
    return option.replace(/\.$/, "");
  });

  return Array.from(new Set([...receiving, corridorFocus(corridor)])).slice(0, 6);
}

function corridorFocus(corridor: Corridor) {
  return corridor.keyFacts.find((fact) => fact.label === "Main user need")?.value ?? corridor.summary;
}

function transferFacts(corridor: Corridor) {
  return [
    { label: "Funding methods", value: corridor.paymentMethods.join(", ") },
    { label: "Receiving options", value: corridor.receivingOptions.join(", ") },
    { label: "Transfer speed", value: corridor.transferSpeed.join(", ") },
    { label: "Supported currencies", value: corridor.supportedCurrencies.join(", ") },
    { label: "Provider limitations", value: corridor.providerLimitations.join(", ") }
  ];
}

function buildTroubleshooting(corridor: Corridor): TroubleshootingItem[] {
  return corridor.missingBonus.slice(0, 5).map((item, index) => ({
    problem: index === 0 ? "Bonus missing" : `Corridor check ${index + 1}`,
    possibleReason: item,
    suggestedAction:
      "Check the provider's live route terms, keep the offer screen and transfer receipt, then contact the provider through official support."
  }));
}

function buildRelatedLinks(corridor: Corridor, providers: Provider[]): LinkItem[] {
  const countryHub = sendingCountryHubSlugs[corridor.from]
    ? [
        {
          href: `/from/${sendingCountryHubSlugs[corridor.from]}`,
          label: `Send money from ${corridor.from}`,
          description: `Country hub for ${corridor.from} transfer providers and referral opportunities.`
        }
      ]
    : [];
  const sameSenderCorridors = corridors
    .filter((item) => item.from === corridor.from && item.slug !== corridor.slug)
    .slice(0, 4)
    .map((item) => ({
      href: `/corridors/${item.slug}`,
      label: `${item.from} to ${item.to}`,
      description: "Related corridor with the same sender country."
    }));

  return [
    ...providers.flatMap((provider) => [
      {
        href: `/providers/${provider.slug}`,
        label: `${provider.name} provider page`,
        description: `Referral, eligibility, verification, and support details for ${provider.name}.`
      },
      {
        href: `/providers/${provider.slug}/referral-code`,
        label: `${provider.name} referral code`,
        description: `Code, link, reward, and troubleshooting details for ${provider.name}.`
      }
    ]),
    ...corridor.relatedGuideSlugs.map((guideSlug) => ({
      href: `/guides/${guideSlug}`,
      label: guideLabels[guideSlug] ?? guideSlug,
      description: "Related guide for referral and welcome-bonus decisions."
    })),
    ...countryHub,
    ...sameSenderCorridors
  ];
}

function providerBestFit(provider: Provider) {
  if (provider.slug === "wise") return "Bank-account routes where the live total received amount is stronger.";
  if (provider.slug === "sendwave") return "Digital delivery routes where the recipient can use a supported wallet or account.";
  if (provider.slug === "lemfi") return "Diaspora-focused routes where LemFi supports the sender country and recipient market.";
  if (provider.slug === "remitly") return "First-transfer comparisons where delivery speed, payout method, and reward terms all match.";
  if (provider.slug === "ria") return "Cash pickup and agent-network coverage when the recipient needs in-person collection.";
  if (provider.slug === "western-union") return "Cash pickup backup coverage and broad route availability.";
  if (provider.slug === "moneygram") return "Agent-network or broad global coverage where the live route shows a qualifying offer.";
  if (provider.slug === "worldremit") return "Routes with bank, wallet, cash pickup, airtime, or mobile money options in the live flow.";
  if (provider.slug === "paysend") return "Card, bank, or wallet routes where Paysend shows the destination and referral terms.";
  if (provider.slug === "xe") return "Bank-account or broad currency routes where the live quote is competitive.";

  return "Use when the provider's live route, payment method, and reward terms match the transfer.";
}
