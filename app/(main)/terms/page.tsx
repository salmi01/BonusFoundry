import { LastVerified, QuickAnswer, RelatedResources } from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of use",
  description: "Terms of use for BonusFoundry.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Terms", item: "/terms" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Terms of use",
          description: "Terms of use for BonusFoundry.",
          path: "/terms",
          updatedAt: "2026-06-27"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/terms", label: "Terms" }]} />
        <LastVerified date="June 27, 2026" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Terms of use</h1>
        <div className="mt-6 max-w-3xl">
          <QuickAnswer answer="BonusFoundry provides general informational content about referral programs and welcome bonuses. BonusFoundry is not a money transfer provider or an official provider support channel." />
        </div>
        <div className="mt-6 max-w-3xl space-y-5 text-muted-foreground">
          <p>
            BonusFoundry provides general informational content about referral programs and welcome bonuses. It is not a
            money transfer provider, financial adviser, legal adviser, or official support channel for any provider.
          </p>
          <p>
            Provider offers, fees, exchange rates, and eligibility rules can change. Always check the provider&apos;s
            current terms before creating an account or sending money.
          </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <RelatedResources
            links={[
              { href: "/privacy-policy", label: "Privacy policy" },
              { href: "/disclosure", label: "Referral disclosure" },
              { href: "/contact", label: "Contact BonusFoundry" }
            ]}
          />
        </div>
      </Container>
    </>
  );
}
