import { LastVerified, QuickAnswer, RelatedResources } from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { indexReviewedAt } from "@/data/index-review";
import { formatDate } from "@/lib/utils";
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
          updatedAt: indexReviewedAt
        })}
      />
      <Container className="py-6 sm:py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/providers", label: "Providers" }]} />
        <LastVerified date={formatDate(indexReviewedAt)} />
        <h1 className="mt-4 max-w-4xl break-words text-3xl font-bold tracking-normal sm:text-4xl">
          Money transfer referral codes and bonus guides
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
          Use this index to find provider-specific referral codes, referral links, promo guidance, and welcome bonus
          checks. Each guide explains how to use the listed code or link, what conditions may apply, and what to check
          before signup or a first transfer.
        </p>
        <div className="mt-6 grid min-w-0 grid-cols-1 gap-4 sm:mt-8 sm:gap-5">
          <QuickAnswer answer="Use the Providers index to compare provider-level Referral Code, Referral Link, Promo Code, Welcome Bonus, eligibility, verification, and support information before opening a provider account." />
        </div>
        <div className="mt-6 grid min-w-0 grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard key={provider.slug} provider={provider} />
          ))}
        </div>
        <div className="mt-8 min-w-0 sm:mt-10">
          <RelatedResources
            links={[
              { href: "/corridors", label: "Corridor guides", description: "Route-specific provider and bonus comparisons." },
              { href: "/guides/how-referral-codes-work", label: "How referral codes work" },
              { href: "/faq", label: "Referral code FAQ" },
              { href: "/from/usa", label: "Send money from USA" },
              { href: "/from/france", label: "Send money from France" }
            ]}
          />
        </div>
      </Container>
    </>
  );
}
