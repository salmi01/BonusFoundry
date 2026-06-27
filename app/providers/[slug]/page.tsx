import Link from "next/link";
import { notFound } from "next/navigation";
import { BonusCard } from "@/components/bonus-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { ReferralBox } from "@/components/referral-box";
import { getProvider, providers } from "@/data/providers";
import { breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return providers.map((provider) => ({ slug: provider.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) return {};

  return createMetadata({
    title: `${provider.name} welcome bonus and referral program`,
    description: `Learn how the ${provider.name} welcome bonus and referral program work, including eligibility, requirements, supported countries, and referral details.`,
    path: `/providers/${provider.slug}`
  });
}

export default async function ProviderPage({ params }: PageProps) {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) notFound();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Providers", item: `/providers/${provider.slug}` },
    { name: provider.name, item: `/providers/${provider.slug}` }
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(provider.faq)} />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/providers/${provider.slug}`, label: provider.name }
          ]}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <article>
            <LastUpdated date={provider.lastUpdated} />
            <h1 className="mt-4 text-4xl font-bold tracking-normal">{provider.name} welcome bonus and referral program</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {provider.description} This page explains how the current bonus usually works, what to check before
              signing up, and where our referral details fit in.
            </p>

            <div className="mt-8 grid gap-5">
              <BonusCard title="Welcome bonus">
                <p>{provider.welcomeBonus}</p>
              </BonusCard>
              <BonusCard title="Eligibility">
                <p>{provider.eligibleUsers}</p>
              </BonusCard>
              <BonusCard title="Supported countries">
                <p>{provider.supportedCountries.join(", ")}</p>
              </BonusCard>
              <BonusCard title="How it works">
                <ol className="list-decimal space-y-2 pl-5">
                  {provider.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </BonusCard>
              <BonusCard title="Requirements">
                <ul className="list-disc space-y-2 pl-5">
                  {provider.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </BonusCard>
              <FAQ items={provider.faq} />
              <Disclosure />
            </div>
          </article>
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <ReferralBox provider={provider} />
            <div className="rounded-md border bg-card p-5">
              <h2 className="font-semibold">Related pages</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href={`/providers/${provider.slug}/referral-code`}>{provider.name} referral code</Link>
                </li>
                <li>
                  <Link href="/corridors/france-to-morocco">France to Morocco bonuses</Link>
                </li>
                <li>
                  <Link href="/guides/how-referral-codes-work">How referral codes work</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
