import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BestFor,
  CommonMistakes,
  KeyFacts,
  KeyTakeaways,
  LastVerified,
  OfficialSources,
  ProviderMiniFAQ,
  ProviderQuickCard,
  QuickAnswer,
  RelatedResources,
  type LinkItem,
  type SourceItem
} from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { JsonLd } from "@/components/json-ld";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Corridor } from "@/data/corridors";
import {
  getSendingCountryHub,
  getSendingCountryHubCorridors,
  getSendingCountryHubProviders,
  sendingCountryHubs,
  type SendingCountryHub
} from "@/data/sending-country-hubs";
import { getProviderAuthority, type Provider } from "@/data/providers";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

const guideLabels: Record<string, string> = {
  "how-referral-codes-work": "How referral codes work",
  "how-to-claim-a-welcome-bonus": "How to claim a welcome bonus",
  "how-to-avoid-missing-signup-bonus": "How to avoid missing a signup bonus",
  "what-to-check-before-using-money-transfer-referral-link": "What to check before using a referral link"
};

export function generateStaticParams() {
  return sendingCountryHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const hub = getSendingCountryHub(slug);
  if (!hub) return {};

  return createMetadata({
    title: hub.title,
    description:
      `Compare ${hub.name} money transfer providers, referral and welcome bonus opportunities, payment methods, verification requirements, and covered outbound corridors.`,
    path: `/from/${hub.slug}`
  });
}

export default async function SendingCountryHubPage({ params }: PageProps) {
  const { slug } = await params;
  const hub = getSendingCountryHub(slug);
  if (!hub) notFound();

  const hubProviders = getSendingCountryHubProviders(hub);
  const hubCorridors = getSendingCountryHubCorridors(hub);
  const relatedResources = buildRelatedResources(hub, hubProviders, hubCorridors);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: `Send money from ${hub.name}`, item: `/from/${hub.slug}` }
        ])}
      />
      <JsonLd data={faqJsonLd(hub.faq)} />
      <JsonLd
        data={webPageJsonLd({
          title: hub.title,
          description: hub.summary,
          path: `/from/${hub.slug}`,
          updatedAt: hub.lastUpdated
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: `/from/${hub.slug}`, label: hub.shortName }]} />
        <LastVerified date={formatDate(hub.lastUpdated)} />
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal">{hub.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{hub.summary}</p>

        <div className="mt-10 space-y-8">
          <QuickAnswer answer={hub.summary} />
          <KeyTakeaways items={countryTakeaways(hub, hubProviders, hubCorridors)} />
          <KeyFacts
            title="Country summary"
            facts={[
              ...hub.keyFacts,
              { label: "Tracked providers", value: `${hubProviders.length} providers relevant from ${hub.shortName}` },
              { label: "Popular corridors", value: hubCorridors.map((corridor) => `${hub.shortName} to ${corridor.to}`).join(", ") },
              { label: "Last verified", value: formatDate(hub.lastUpdated) }
            ]}
          />

          <FeaturedProviders hub={hub} providers={hubProviders} />
          <PopularCorridors hub={hub} corridors={hubCorridors} />
          <BestFor items={bestForItems(hub)} />
          <KeyFacts title={`Payment and receiving methods from ${hub.shortName}`} facts={methodFacts(hub)} />
          <ProviderUseCaseTable hub={hub} providers={hubProviders} />
          <CommonMistakes mistakes={hub.commonMistakes} />
          <ProviderMiniFAQ items={hub.faq} title={`${hub.shortName} money transfer FAQ`} />
          <OfficialSources sources={officialSources(hubProviders)} />
          <RelatedResources links={relatedResources} />
          <Disclosure />
        </div>
      </Container>
    </>
  );
}

function FeaturedProviders({ hub, providers }: { hub: SendingCountryHub; providers: Provider[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Featured providers from {hub.shortName}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
        These compact cards summarize reward, eligibility, minimum transfer, best-fit use case, and review date. Open the
        provider page for full terms, support details, and official-source notes.
      </p>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {providers.map((provider) => {
          const authority = getProviderAuthority(provider);
          const minimumTransfer =
            authority.referral.minimumTransfer || "No fixed minimum transfer was verified from reviewed public sources.";

          return (
            <div key={provider.slug} className="space-y-3">
              <ProviderQuickCard
                provider={provider.name}
                reward={authority.referral.welcomeBonus}
                eligibility={provider.eligibleUsers}
                minimumTransfer={minimumTransfer}
                whereToEnterCode={whereToEnterCode(provider)}
                codeOrLink={codeOrLink(provider)}
                typicalTransferSpeed="Route, destination, payment method, payout method, and verification status control timing."
                lastVerified={formatDate(authority.lastManualReview)}
                officialSourcesReviewed={authority.researchProfile.sourcesReviewed.slice(0, 4).join(", ")}
              />
              <Link href={`/providers/${provider.slug}`} className="inline-flex font-medium text-primary">
                Read {provider.name} provider page
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PopularCorridors({ hub, corridors }: { hub: SendingCountryHub; corridors: Corridor[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Popular corridors from {hub.shortName}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {corridors.map((corridor) => (
          <article key={corridor.slug} className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">
              {hub.shortName} to {corridor.to}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{corridorFocus(corridor)}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Relevant receiving options: {corridor.receivingOptions.join(", ")}
            </p>
            <Link href={`/corridors/${corridor.slug}`} className="mt-4 inline-block font-medium text-primary">
              Read {hub.shortName} to {corridor.to} corridor guide
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProviderUseCaseTable({ hub, providers }: { hub: SendingCountryHub; providers: Provider[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Provider use cases from {hub.shortName}</h2>
      <div className="mt-5 overflow-x-auto rounded-lg border bg-card shadow-sm">
        <Table className="min-w-[900px]">
          <thead>
            <TableRow>
              <TableHead>Provider</TableHead>
              <TableHead>Best for</TableHead>
              <TableHead>Reward note</TableHead>
              <TableHead>Eligibility check</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {providers.map((provider) => (
              <TableRow key={provider.slug}>
                <TableHead>
                  <Link href={`/providers/${provider.slug}`} className="text-primary">
                    {provider.name}
                  </Link>
                </TableHead>
                <TableCell>{providerBestFit(provider, hub.shortName)}</TableCell>
                <TableCell>{provider.welcomeBonus}</TableCell>
                <TableCell>{provider.eligibleUsers}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

function countryTakeaways(hub: SendingCountryHub, providers: Provider[], corridors: Corridor[]) {
  return [
    `${hub.shortName} users should compare providers by destination, payout method, payment method, verification, and total received amount.`,
    `${providers.length} relevant providers are tracked for ${hub.shortName}.`,
    `${corridors.length} outbound corridor guides are linked from this country hub.`,
    `Sender currency: ${hub.currency}.`,
    "Use provider pages for full reward, eligibility, support, and official-source details."
  ];
}

function methodFacts(hub: SendingCountryHub) {
  return [
    { label: "Payment methods", value: hub.paymentMethods.join(", ") },
    { label: "Receiving methods", value: hub.receivingMethods.join(", ") },
    { label: "Verification requirements", value: hub.verificationRequirements.join(", ") },
    { label: "Provider choice", value: hub.chooseProvider.map((item) => `${item.useCase}: ${item.guidance}`).join(" ") }
  ];
}

function bestForItems(hub: SendingCountryHub) {
  return Array.from(new Set(hub.chooseProvider.map((item) => item.useCase.replace(/^Best for /i, "")))).slice(0, 8);
}

function whereToEnterCode(provider: Provider) {
  if (provider.referralCode) return "Enter the BonusFoundry code when the provider shows a referral or promo-code field.";
  if (hasOwnedReferralLink(provider)) return "Open the BonusFoundry referral link before creating the provider account.";
  return "Use the provider's own live referral, promo, or first-transfer offer when it appears.";
}

function codeOrLink(provider: Provider) {
  if (provider.referralCode) return `BonusFoundry code: ${provider.referralCode}`;
  if (hasOwnedReferralLink(provider) && provider.referralLink) return "BonusFoundry referral link listed on the referral page.";
  return "No separate BonusFoundry code or link is listed for this provider.";
}

function hasOwnedReferralLink(provider: Provider) {
  return Boolean(
    provider.referralLink &&
      provider.sources?.some((source) => source.confidence === "referral-link" && source.url === provider.referralLink)
  );
}

function officialSources(providers: Provider[]): SourceItem[] {
  const sources = providers.flatMap((provider) =>
    (provider.sources ?? []).map((source) => ({
      name: source.label,
      type: source.confidence === "official" ? "Official provider source" : "BonusFoundry-owned referral detail",
      url: source.url,
      reviewedInformation:
        source.confidence === "official"
          ? `${provider.name} availability, referral, verification, support, or payment-method information`
          : `${provider.name} BonusFoundry-owned referral code or link`,
      reviewDate: formatDate(source.lastReviewed)
    }))
  );
  const seen = new Set<string>();

  return sources
    .filter((source) => {
      const key = `${source.name}-${source.url}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 12);
}

function buildRelatedResources(hub: SendingCountryHub, providers: Provider[], corridors: Corridor[]): LinkItem[] {
  return [
    ...providers.slice(0, 8).flatMap((provider) => [
      {
        href: `/providers/${provider.slug}`,
        label: `${provider.name} provider page`,
        description: `Reward, eligibility, verification, support, and source notes for ${provider.name}.`
      },
      {
        href: `/providers/${provider.slug}/referral-code`,
        label: `${provider.name} referral details`,
        description: `Referral-code, link, timing, and missing-reward checks for ${provider.name}.`
      }
    ]),
    ...corridors.map((corridor) => ({
      href: `/corridors/${corridor.slug}`,
      label: `${hub.shortName} to ${corridor.to}`,
      description: corridorFocus(corridor)
    })),
    ...hub.relatedGuideSlugs.map((guideSlug) => ({
      href: `/guides/${guideSlug}`,
      label: guideLabels[guideSlug] ?? guideSlug,
      description: "Related guide for referral, welcome-bonus, and signup decisions."
    })),
    { href: "/faq", label: "Referral bonus FAQ", description: "Short answers for referral, promo, eligibility, and verification questions." },
    { href: "/providers", label: "All providers", description: "Browse the full BonusFoundry provider library." },
    { href: "/corridors", label: "All corridors", description: "Browse route-specific provider and bonus comparisons." }
  ];
}

function corridorFocus(corridor: Corridor) {
  return corridor.keyFacts.find((fact) => fact.label === "Main user need")?.value ?? corridor.summary;
}

function providerBestFit(provider: Provider, countryName: string) {
  if (provider.slug === "wise") return "Bank-account routes where the live quote gives a stronger total received amount.";
  if (provider.slug === "sendwave") return "Mobile wallet or digital delivery routes shown in the live flow.";
  if (provider.slug === "taptap-send") return "Supported destination routes where the referral code is accepted during the first transfer.";
  if (provider.slug === "lemfi") return `Diaspora-focused routes where LemFi supports the ${countryName} sender and destination market.`;
  if (provider.slug === "remitly") return "First-time transfer comparisons where the reward terms, speed, and payout method match.";
  if (provider.slug === "ria") return "Cash pickup and agent-network coverage.";
  if (provider.slug === "western-union") return "Broad country coverage and cash pickup backup options.";
  if (provider.slug === "moneygram") return "Official referral or agent-network routes when the live destination qualifies.";
  if (provider.slug === "worldremit") return "Routes with bank, wallet, cash pickup, airtime, or mobile money options.";
  if (provider.slug === "paysend") return "Card, bank, or wallet routes where Paysend shows destination support and referral terms.";
  if (provider.slug === "xe") return "Bank-account or broad currency routes where the live quote is competitive.";

  return `Use when the provider's live ${countryName} route, payment method, and reward terms match the transfer.`;
}
