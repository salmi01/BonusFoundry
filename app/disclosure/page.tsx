import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Referral disclosure",
  description:
    "Bonus Foundry referral disclosure, independence statement, and explanation of changing offer eligibility.",
  path: "/disclosure"
});

export default function DisclosurePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Disclosure", item: "/disclosure" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Referral disclosure",
          description:
            "Bonus Foundry referral disclosure, independence statement, and explanation of changing offer eligibility.",
          path: "/disclosure",
          updatedAt: "2026-06-27"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/disclosure", label: "Disclosure" }]} />
        <LastUpdated date="2026-06-27" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Referral disclosure</h1>
        <div className="mt-6 max-w-3xl space-y-5 text-muted-foreground">
          <p>
            Bonus Foundry is independent. It is not an official website of Taptap Send, Wise, Remitly, Sendwave, Ria, or
            any other money transfer or fintech provider.
          </p>
          <p>
            Some links on Bonus Foundry are referral links. Bonus Foundry may receive a reward if a user signs up through
            a referral link and meets the provider&apos;s current requirements.
          </p>
          <p>
            Offers can change by country, time, provider, transfer corridor, payment method, and user eligibility. A
            referral code or link shown here does not guarantee that a bonus will be available or paid.
          </p>
        </div>
      </Container>
    </>
  );
}
