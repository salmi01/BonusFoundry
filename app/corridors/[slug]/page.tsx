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
import { ProviderCard } from "@/components/provider-card";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { corridors, getCorridor, getCorridorProviders } from "@/data/corridors";
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
  return corridors.map((corridor) => ({ slug: corridor.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const corridor = getCorridor(slug);
  if (!corridor) return {};

  return createMetadata({
    title: `${corridor.from} to ${corridor.to} transfer bonuses`,
    description: `Compare providers, welcome rewards, referral requirements, payment methods, receiving options, and verification notes for transfers from ${corridor.from} to ${corridor.to}.`,
    path: `/corridors/${corridor.slug}`
  });
}

export default async function CorridorPage({ params }: PageProps) {
  const { slug } = await params;
  const corridor = getCorridor(slug);
  if (!corridor) notFound();

  const relatedProviders = getCorridorProviders(corridor);
  const comparisonProviders = relatedProviders;

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
        <LastUpdated date={corridor.lastUpdated} />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">
          {corridor.from} to {corridor.to} transfer bonuses
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{corridor.summary}</p>

        <div className="mt-10 space-y-10">
          <KeyFacts title="Quick answer" facts={corridor.keyFacts} />

          <section>
            <h2 className="text-2xl font-semibold">Best providers to check</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              These providers are prioritized for this corridor. Confirm the live route, payout method, and bonus
              eligibility in the provider&apos;s flow before signup.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {relatedProviders.map((provider) => (
                <ProviderCard key={provider.slug} provider={provider} />
              ))}
            </div>
          </section>

          <ProviderComparisonTable providers={comparisonProviders} />

          <BonusCard title="Current welcome rewards">
            <p>{corridor.currentOffer}</p>
          </BonusCard>

          <BonusCard title="Available referral bonuses">
            <ul className="list-disc space-y-2 pl-5">
              {comparisonProviders.map((provider) => (
                <li key={provider.slug}>
                  <Link href={`/providers/${provider.slug}/referral-code`} className="font-medium text-primary">
                    {provider.name}
                  </Link>
                  : {referralOpportunity(provider)}
                </li>
              ))}
            </ul>
          </BonusCard>

          <BonusCard title="Provider reward notes">
            <ul className="list-disc space-y-2 pl-5">
              {comparisonProviders.map((provider) => (
                <li key={provider.slug}>
                  <Link href={`/providers/${provider.slug}`} className="font-medium text-primary">
                    {provider.name}
                  </Link>
                  : {provider.welcomeBonus}
                </li>
              ))}
            </ul>
          </BonusCard>

          <BonusCard title="Transfer fees overview">
            <ul className="list-disc space-y-2 pl-5">
              {corridor.feeOverview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </BonusCard>

          <TwoColumnFacts
            leftTitle="Payment methods"
            leftItems={corridor.paymentMethods}
            rightTitle="Transfer speed"
            rightItems={corridor.transferSpeed}
          />

          <TwoColumnFacts
            leftTitle="Receiving options"
            leftItems={corridor.receivingOptions}
            rightTitle="Identity verification"
            rightItems={corridor.identityVerification}
          />

          <TwoColumnFacts
            leftTitle="Supported currencies"
            leftItems={corridor.supportedCurrencies}
            rightTitle="When to choose each provider"
            rightItems={corridor.whenToChoose}
          />

          <TwoColumnFacts
            leftTitle="Provider limitations"
            leftItems={corridor.providerLimitations}
            rightTitle="Requirements"
            rightItems={corridor.requirements}
          />

          <BonusCard title="Step-by-step comparison">
            <ol className="list-decimal space-y-2 pl-5">
              {corridor.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </BonusCard>

          <BonusCard title="Common mistakes">
            <ul className="list-disc space-y-2 pl-5">
              {corridor.commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </BonusCard>

          <BonusCard title="Troubleshooting missing rewards">
            <ul className="list-disc space-y-2 pl-5">
              {corridor.missingBonus.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </BonusCard>

          <BonusCard title="Country-specific notes">
            <ul className="list-disc space-y-2 pl-5">
              {corridor.countryNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </BonusCard>

          <FAQ items={corridor.faq} />

          <BonusCard title="Related providers">
            <ul className="grid gap-2 pl-0 sm:grid-cols-2">
              {relatedProviders.map((provider) => (
                <li key={provider.slug} className="list-none">
                  <Link href={`/providers/${provider.slug}`} className="font-medium text-primary">
                    {provider.name}
                  </Link>
                </li>
              ))}
            </ul>
          </BonusCard>

          <BonusCard title="Related guides">
            <ul className="list-disc space-y-2 pl-5">
              {corridor.relatedGuideSlugs.map((guideSlug) => (
                <li key={guideSlug}>
                  <Link href={`/guides/${guideSlug}`} className="font-medium text-primary">
                    {guideLabels[guideSlug] ?? guideSlug}
                  </Link>
                </li>
              ))}
            </ul>
          </BonusCard>

          {corridor.from === "USA" ? <RelatedUsaCorridors currentSlug={corridor.slug} /> : null}

          <Disclosure />
        </div>
      </Container>
    </>
  );
}

function RelatedUsaCorridors({ currentSlug }: { currentSlug: string }) {
  const usaCorridors = corridors.filter((item) => item.from === "USA" && item.slug !== currentSlug);

  if (!usaCorridors.length) return null;

  return (
    <BonusCard title="Related USA corridors">
      <ul className="grid gap-2 pl-0 sm:grid-cols-2">
        {usaCorridors.map((item) => (
          <li key={item.slug} className="list-none">
            <Link href={`/corridors/${item.slug}`} className="font-medium text-primary">
              USA to {item.to}
            </Link>
          </li>
        ))}
      </ul>
    </BonusCard>
  );
}

function ProviderComparisonTable({ providers }: { providers: Provider[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Provider comparison table</h2>
      <div className="mt-5 overflow-x-auto rounded-lg border bg-card shadow-sm">
        <Table className="min-w-[980px]">
          <thead>
            <TableRow>
              <TableHead className="w-[150px]">Provider</TableHead>
              <TableHead>Corridor status</TableHead>
              <TableHead>Best fit</TableHead>
              <TableHead>Referral opportunity</TableHead>
              <TableHead>Payment methods</TableHead>
              <TableHead>Verification</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {providers.map((provider) => (
              <TableRow key={provider.slug}>
                <TableHead className="w-[150px]">
                  <Link href={`/providers/${provider.slug}`} className="text-primary">
                    {provider.name}
                  </Link>
                </TableHead>
                <TableCell>Provider to check for this corridor; confirm live route, payout method, and bonus eligibility before signup.</TableCell>
                <TableCell>{providerBestFit(provider)}</TableCell>
                <TableCell>{referralOpportunity(provider)}</TableCell>
                <TableCell>{provider.availability?.paymentMethods.slice(0, 4).join(", ") ?? "Check the provider flow."}</TableCell>
                <TableCell>{provider.verification?.identityRequired ?? "Identity checks may be required."}</TableCell>
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

function referralOpportunity(provider: Provider) {
  if (provider.referralCode) {
    return `Bonus Foundry lists code ${provider.referralCode}; the route must still meet the provider's live terms.`;
  }

  if (
    provider.referralLink &&
    provider.sources?.some((source) => source.confidence === "referral-link" && source.url === provider.referralLink)
  ) {
    return "Bonus Foundry lists an owned referral link; use it only if the live terms match this route.";
  }

  return "No Bonus Foundry-owned referral code or link is currently published; use official provider terms for eligibility.";
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
