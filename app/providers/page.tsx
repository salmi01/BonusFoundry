import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { ProviderCard } from "@/components/provider-card";
import { providers } from "@/data/providers";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Money transfer providers with referral and welcome bonus notes",
  description:
    "Browse money transfer providers and compare referral code availability, welcome bonus rules, supported countries, and eligibility notes.",
  path: "/providers"
});

export default function ProvidersIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Providers", item: "/providers" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Money transfer provider bonus guides",
          description:
            "Browse money transfer providers and compare referral code availability, welcome bonus rules, supported countries, and eligibility notes.",
          path: "/providers",
          updatedAt: "2026-06-27"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/providers", label: "Providers" }]} />
        <LastUpdated date="2026-06-27" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Money transfer provider bonus guides</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          Use this index to find provider-specific referral code and welcome bonus notes. Some providers have a listed
          referral code, while others only have cautious guidance because no current code is known to Bonus Foundry.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard key={provider.slug} provider={provider} />
          ))}
        </div>
      </Container>
    </>
  );
}
