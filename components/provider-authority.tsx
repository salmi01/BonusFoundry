import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { BonusCard } from "@/components/bonus-card";
import { KeyFacts } from "@/components/key-facts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Corridor } from "@/data/corridors";
import type { FAQPage } from "@/data/faqs";
import { referralWarning, type Provider, type ProviderAuthority } from "@/data/providers";
import type { GuideMeta } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function ProviderFacts({ provider, authority }: { provider: Provider; authority: ProviderAuthority }) {
  const facts = [
    { label: "Provider", value: provider.name },
    { label: "Website", value: authority.website },
    authority.foundedYear ? { label: "Founded year", value: authority.foundedYear } : null,
    authority.trustpilot ? { label: "Trustpilot", value: authority.trustpilot } : null,
    { label: "Referral program", value: authority.referral.hasProgram },
    { label: "Displayed date", value: formatDate(authority.displayedDate) },
    { label: "Last manual review", value: formatDate(authority.lastManualReview) },
    { label: "Last offer update", value: formatDate(authority.lastOfferUpdate) }
  ].filter(Boolean) as { label: string; value: string }[];

  return <KeyFacts facts={facts} />;
}

export function WelcomeBonusCard({ authority }: { authority: ProviderAuthority }) {
  const facts = [
    authority.referral.code
      ? { label: "Code", value: authority.referral.code }
      : { label: "Referral link", value: authority.referral.link },
    authority.referral.minimumTransfer ? { label: "Minimum transfer", value: authority.referral.minimumTransfer } : null,
    authority.referral.expiry ? { label: "Expiry", value: authority.referral.expiry } : null,
    authority.referral.payoutTiming ? { label: "Payout timing", value: authority.referral.payoutTiming } : null
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <Card>
      <section>
        <CardHeader>
          <CardTitle>Current welcome bonus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {facts.map((fact) => (
              <Fact key={fact.label} label={fact.label} value={fact.value} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">{authority.referral.welcomeBonus}</p>
          <p className="mt-4 rounded-lg border bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
            {referralWarning}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
            {authority.referral.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </section>
    </Card>
  );
}

export function EligibilityTable({
  eligible,
  ineligible
}: {
  eligible: string;
  ineligible: string[];
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Eligibility</h2>
      <div className="mt-4 overflow-hidden rounded-lg border bg-card shadow-sm">
        <Table>
          <tbody>
            <TableRow>
              <TableHead>Who may be eligible</TableHead>
              <TableCell>{eligible}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Who is usually not eligible</TableHead>
              <TableCell>
                <ul className="list-disc space-y-2 pl-5">
                  {ineligible.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export function CountryAvailability({ authority }: { authority: ProviderAuthority }) {
  return (
    <Card>
      <section>
        <CardHeader>
          <CardTitle>Country availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 lg:grid-cols-2">
            <FactList title="Supported sending countries" items={authority.availability.sendingCountries} />
            <FactList title="Supported receiving countries" items={authority.availability.receivingCountries} />
            <FactList title="Supported currencies" items={authority.availability.currencies} />
            <FactList title="Payment methods" items={authority.availability.paymentMethods} />
          </div>
          <div className="mt-5 overflow-hidden rounded-lg border">
            <Table>
              <tbody>
                {authority.availability.countryAvailability.map((item) => (
                  <TableRow key={item.country}>
                    <TableHead>{item.country}</TableHead>
                    <TableCell>
                      <p className="font-medium text-foreground">{item.supported}</p>
                      <p className="mt-1">{item.notes}</p>
                      <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                        Payment methods: {item.paymentMethods.join(", ")}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </div>
        </CardContent>
      </section>
    </Card>
  );
}

export function VerificationRequirements({ authority }: { authority: ProviderAuthority }) {
  return (
    <KeyFacts
      title="Verification requirements"
      facts={[
        { label: "Identity verification", value: authority.verification.identityRequired },
        { label: "Proof of address", value: authority.verification.proofOfAddress },
        { label: "Bank or payment verification", value: authority.verification.bankVerification }
      ]}
    />
  );
}

export function ReferralChecklist({ items }: { items: string[] }) {
  return (
    <BonusCard title="Bonus checklist">
      <ol className="list-decimal space-y-2 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </BonusCard>
  );
}

export function TroubleshootingGuide({ items }: { items: string[] }) {
  return (
    <BonusCard title="Troubleshooting missing rewards">
      <ul className="list-disc space-y-2 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </BonusCard>
  );
}

export function SupportResources({ authority }: { authority: ProviderAuthority }) {
  return (
    <Card>
      <section>
        <CardHeader>
          <CardTitle>Support and official resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Fact label="Support email" value={authority.support.supportEmail ?? "Use the provider support page for current contact options."} />
            <Fact label="Help center" value={authority.support.helpCenter} />
          </div>
          <ul className="space-y-2 text-sm">
            {authority.officialResources.map((resource) => (
              <li key={resource.href}>
                <Link href={resource.href} className="inline-flex items-center gap-2 font-semibold text-primary">
                  {resource.label}
                  <ExternalLink className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </section>
    </Card>
  );
}

export function SourceNotes({ authority }: { authority: ProviderAuthority }) {
  return (
    <Card>
      <section>
        <CardHeader>
          <CardTitle>Source notes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
            {authority.sources.map((source) => {
              const sourceType = sourceTypeLabel(source.confidence);
              const sourceStatus = sourceStatusLabel(source.confidence);

              return (
                <li key={`${source.label}-${source.url}`} className="rounded-lg border bg-muted/40 p-4">
                  <dl className="grid gap-2 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Source name</dt>
                      <dd className="mt-1 font-semibold text-foreground">{source.label}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Source type</dt>
                      <dd className="mt-1 text-foreground">{sourceType}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Source status</dt>
                      <dd className="mt-1 text-foreground">{sourceStatus}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Last manual review</dt>
                      <dd className="mt-1 text-foreground">{formatDate(source.lastReviewed)}</dd>
                    </div>
                  </dl>
                  <Link href={source.url} className="mt-3 inline-flex items-center gap-2 font-medium text-primary">
                    Open source
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </section>
    </Card>
  );
}

export function ResearchProfile({ authority }: { authority: ProviderAuthority }) {
  return (
    <Card>
      <section>
        <CardHeader>
          <CardTitle>Research profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-4 md:grid-cols-3">
            <Fact label="Completeness" value={authority.researchProfile.completeness} />
            <Fact label="Review status" value={researchStatusLabel(authority.researchProfile.confidence)} />
            <Fact label="Last manual review" value={formatDate(authority.lastManualReview)} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FactList title="Sources reviewed" items={authority.researchProfile.sourcesReviewed} />
            <FactList title="Remaining open items" items={authority.researchProfile.remainingItems} />
          </div>
        </CardContent>
      </section>
    </Card>
  );
}

export function UpdateHistory({ items }: { items: ProviderAuthority["updateHistory"] }) {
  return (
    <BonusCard title="Update history">
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={`${item.date}-${item.note}`}>
            <p className="font-medium text-foreground">{formatDate(item.date)}</p>
            <p className="mt-1">{item.note}</p>
          </li>
        ))}
      </ul>
    </BonusCard>
  );
}

export function RelatedProviderResources({
  provider,
  guides,
  faqs,
  corridors,
  relatedProviders
}: {
  provider: Provider;
  guides: GuideMeta[];
  faqs: FAQPage[];
  corridors: Corridor[];
  relatedProviders: Provider[];
}) {
  return (
    <Card>
      <section>
        <CardHeader>
          <CardTitle>Related resources</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5 text-sm leading-6 md:grid-cols-2">
          <RelatedList
            title="Guides"
            items={guides.map((guide) => ({
              href: `/guides/${guide.slug}`,
              label: guide.title
            }))}
          />
          <RelatedList
            title="FAQ"
            items={faqs.map((faq) => ({
              href: `/faq/${faq.slug}`,
              label: faq.question
            }))}
          />
          <RelatedList
            title="Corridors"
            items={corridors.map((corridor) => ({
              href: `/corridors/${corridor.slug}`,
              label: `${corridor.from} to ${corridor.to}`
            }))}
          />
          <RelatedList
            title="Providers"
            items={[
              {
                href: `/providers/${provider.slug}/referral-code`,
                label: `${provider.name} referral code`
              },
              ...relatedProviders.map((item) => ({
                href: `/providers/${item.slug}`,
                label: item.name
              }))
            ]}
          />
          <RelatedList
            title="Trust"
            items={[
              { href: "/disclosure", label: "Referral disclosure" },
              { href: "/about", label: "About Bonus Foundry" }
            ]}
          />
        </CardContent>
      </section>
    </Card>
  );
}

function sourceTypeLabel(confidence: ProviderAuthority["sources"][number]["confidence"]) {
  if (confidence === "official") return "Official provider source";
  if (confidence === "referral-link") return "Referral or invite link";
  return "BonusFoundry-owned referral detail";
}

function sourceStatusLabel(confidence: ProviderAuthority["sources"][number]["confidence"]) {
  if (confidence === "official") return "Official source reviewed";
  if (confidence === "referral-link") return "Provider terms vary by campaign";
  return "Owner-supplied referral code";
}

function researchStatusLabel(confidence: ProviderAuthority["researchProfile"]["confidence"]) {
  if (confidence === "high") return "Official source reviewed";
  if (confidence === "medium") return "Provider terms vary by country";
  return "Public offer not verified";
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-muted/40 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm leading-6">{value}</p>
    </div>
  );
}

function FactList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border bg-muted/40 p-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function RelatedList({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <ul className="mt-2 space-y-2 text-muted-foreground">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="font-medium text-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
