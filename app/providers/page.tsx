import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { ProviderCard } from "@/components/provider-card";
import { providers } from "@/data/providers";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Money transfer referral codes and welcome bonus guides",
  description:
    "Browse money transfer providers and compare referral codes, referral links, welcome bonus rules, eligibility, and first-transfer checks.",
  path: "/providers"
});

export default function ProvidersIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Providers", item: "/providers" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Money transfer referral codes and welcome bonus guides",
          description:
            "Browse money transfer providers and compare referral codes, referral links, welcome bonus rules, eligibility, and first-transfer checks.",
          path: "/providers",
          updatedAt: "2026-07-09"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/providers", label: "Providers" }]} />
        <LastUpdated date="2026-07-09" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Money transfer referral codes and bonus guides</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          Use this index to find provider-specific referral codes, referral links, promo guidance, and welcome bonus
          checks. Each guide explains how to use the listed code or link, what conditions may apply, and what to check
          before signup or a first transfer.
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
