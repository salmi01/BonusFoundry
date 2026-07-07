import Link from "next/link";
import { notFound } from "next/navigation";
import { BonusCard } from "@/components/bonus-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { KeyFacts } from "@/components/key-facts";
import { LastUpdated } from "@/components/last-updated";
import { buttonStyles } from "@/components/ui/button";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import {
  getSendingCountryHub,
  getSendingCountryHubCorridors,
  getSendingCountryHubProviders,
  sendingCountryHubs
} from "@/data/sending-country-hubs";
import type { Provider } from "@/data/providers";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";

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
        <LastUpdated date={hub.lastUpdated} />
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal">{hub.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{hub.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/providers" className={buttonStyles({ variant: "outline" })}>
            Browse providers
          </Link>
          <Link href="/corridors" className={buttonStyles({ variant: "outline" })}>
            Browse corridors
          </Link>
          <Link href="/guides" className={buttonStyles({ variant: "outline" })}>
            Read guides
          </Link>
          <Link href="/faq" className={buttonStyles({ variant: "outline" })}>
            FAQ
          </Link>
        </div>

        <div className="mt-10 space-y-10">
          <BonusCard title="Quick answer">
            <p>{hub.summary}</p>
          </BonusCard>

          <KeyFacts title="Key facts" facts={hub.keyFacts} />

          <section>
            <h2 className="text-2xl font-semibold">Providers available or relevant from {hub.name}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              These providers are relevant to outbound transfers from {hub.name} based on Bonus Foundry&apos;s structured provider data.
              Confirm the destination, receiving method, payment method, and bonus terms in the provider flow.
            </p>
            <div className="mt-5 overflow-x-auto rounded-lg border bg-card shadow-sm">
              <Table className="min-w-[960px]">
                <thead>
                  <TableRow>
                    <TableHead className="w-[160px]">Provider</TableHead>
                    <TableHead>Country relevance</TableHead>
                    <TableHead>Referral or welcome bonus</TableHead>
                    <TableHead>Payment methods</TableHead>
                    <TableHead>Verification</TableHead>
                  </TableRow>
                </thead>
                <tbody>
                  {hubProviders.map((provider) => (
                    <TableRow key={provider.slug}>
                      <TableHead className="w-[160px]">
                        <Link href={`/providers/${provider.slug}`} className="text-primary">
                          {provider.name}
                        </Link>
                      </TableHead>
                      <TableCell>{provider.supportedCountries.includes(hub.name) ? `${hub.name} sender data is present in Bonus Foundry provider notes.` : `${hub.name} relevance is based on corridor and provider notes; confirm in the live flow.`}</TableCell>
                      <TableCell>{referralOpportunity(provider, hub.shortName)}</TableCell>
                      <TableCell>{provider.availability?.paymentMethods.slice(0, 4).join(", ") ?? "Check the provider flow."}</TableCell>
                      <TableCell>{provider.verification?.identityRequired ?? "Identity checks may be required."}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>

          <BonusCard title="Referral and welcome bonus opportunities">
            <ul className="list-disc space-y-2 pl-5">
              {hubProviders.map((provider) => (
                <li key={provider.slug}>
                  <Link href={`/providers/${provider.slug}/referral-code`} className="font-medium text-primary">
                    {provider.name} referral page
                  </Link>
                  : {referralOpportunity(provider, hub.shortName)}
                </li>
              ))}
            </ul>
          </BonusCard>

          <BonusCard title="Popular corridors">
            <div className="grid gap-4 md:grid-cols-2">
              {hubCorridors.map((corridor) => (
                <article key={corridor.slug} className="rounded-lg border bg-muted/30 p-4">
                  <h3 className="font-semibold text-foreground">
                    {hub.shortName} to {corridor.to}
                  </h3>
                  <p className="mt-2 text-sm leading-6">{corridor.summary}</p>
                  <Link href={`/corridors/${corridor.slug}`} className="mt-3 inline-block font-medium text-primary">
                    Read {hub.shortName} to {corridor.to} guide
                  </Link>
                </article>
              ))}
            </div>
          </BonusCard>

          <ProviderUseCaseTable providers={hubProviders} countryName={hub.shortName} />

          <TwoColumnFacts
            leftTitle={`Payment methods from ${hub.shortName}`}
            leftItems={hub.paymentMethods}
            rightTitle="Receiving methods by destination"
            rightItems={hub.receivingMethods}
          />

          <TwoColumnFacts
            leftTitle="Verification requirements"
            leftItems={hub.verificationRequirements}
            rightTitle="How to choose a provider"
            rightItems={hub.chooseProvider.map((item) => `${item.useCase}: ${item.guidance}`)}
          />

          <BonusCard title="Common mistakes">
            <ul className="list-disc space-y-2 pl-5">
              {hub.commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </BonusCard>

          <FAQ items={hub.faq} />

          <BonusCard title="Related providers">
            <ul className="grid gap-2 pl-0 sm:grid-cols-2">
              {hubProviders.map((provider) => (
                <li key={provider.slug} className="list-none">
                  <Link href={`/providers/${provider.slug}`} className="font-medium text-primary">
                    {provider.name}
                  </Link>
                  <span className="text-muted-foreground"> · </span>
                  <Link href={`/providers/${provider.slug}/referral-code`} className="font-medium text-primary">
                    referral details
                  </Link>
                </li>
              ))}
            </ul>
          </BonusCard>

          <BonusCard title="Related corridor pages">
            <ul className="grid gap-2 pl-0 sm:grid-cols-2">
              {hubCorridors.map((corridor) => (
                <li key={corridor.slug} className="list-none">
                  <Link href={`/corridors/${corridor.slug}`} className="font-medium text-primary">
                    {hub.shortName} to {corridor.to}
                  </Link>
                </li>
              ))}
            </ul>
          </BonusCard>

          <BonusCard title="Related guides">
            <ul className="list-disc space-y-2 pl-5">
              {hub.relatedGuideSlugs.map((guideSlug) => (
                <li key={guideSlug}>
                  <Link href={`/guides/${guideSlug}`} className="font-medium text-primary">
                    {guideLabels[guideSlug] ?? guideSlug}
                  </Link>
                </li>
              ))}
            </ul>
          </BonusCard>

          <Disclosure />
        </div>
      </Container>
    </>
  );
}

function ProviderUseCaseTable({ providers, countryName }: { providers: Provider[]; countryName: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Provider comparison table</h2>
      <div className="mt-5 overflow-x-auto rounded-lg border bg-card shadow-sm">
        <Table className="min-w-[900px]">
          <thead>
            <TableRow>
              <TableHead>Provider</TableHead>
              <TableHead>Best-fit use case</TableHead>
              <TableHead>Reward note</TableHead>
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
                <TableCell>{providerBestFit(provider, countryName)}</TableCell>
                <TableCell>{provider.welcomeBonus}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

function TwoColumnFacts({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems
}: {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <BonusCard title={leftTitle}>
        <ul className="list-disc space-y-2 pl-5">
          {leftItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </BonusCard>
      <BonusCard title={rightTitle}>
        <ul className="list-disc space-y-2 pl-5">
          {rightItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </BonusCard>
    </div>
  );
}

function referralOpportunity(provider: Provider, countryName: string) {
  if (provider.referralCode) {
    return `Bonus Foundry lists code ${provider.referralCode}; the ${countryName} route must still meet the provider's live terms.`;
  }

  if (
    provider.referralLink &&
    provider.sources?.some((source) => source.confidence === "referral-link" && source.url === provider.referralLink)
  ) {
    return `Bonus Foundry lists an owned referral link; use it only when the provider's live ${countryName} terms match the route.`;
  }

  return "No Bonus Foundry-owned referral code or link is currently published; check the provider's official terms for eligibility.";
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
