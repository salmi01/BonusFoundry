import Link from "next/link";
import { notFound } from "next/navigation";
import { BonusCard } from "@/components/bonus-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { ProviderCard } from "@/components/provider-card";
import { corridors, getCorridor, getCorridorProviders } from "@/data/corridors";
import { breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return corridors.map((corridor) => ({ slug: corridor.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const corridor = getCorridor(slug);
  if (!corridor) return {};

  return createMetadata({
    title: `${corridor.from} to ${corridor.to} transfer bonuses`,
    description: `Compare providers, available welcome bonuses, referral requirements, and eligibility notes for transfers from ${corridor.from} to ${corridor.to}.`,
    path: `/corridors/${corridor.slug}`
  });
}

export default async function CorridorPage({ params }: PageProps) {
  const { slug } = await params;
  const corridor = getCorridor(slug);
  if (!corridor) notFound();
  const relatedProviders = getCorridorProviders(corridor);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: `${corridor.from} to ${corridor.to}`, item: `/corridors/${corridor.slug}` }
        ])}
      />
      <JsonLd data={faqJsonLd(corridor.faq)} />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/corridors/${corridor.slug}`, label: `${corridor.from} to ${corridor.to}` }
          ]}
        />
        <LastUpdated date={corridor.lastUpdated} />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">
          {corridor.from} to {corridor.to} transfer bonuses
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{corridor.summary}</p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Best providers to check</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {relatedProviders.map((provider) => (
                <ProviderCard key={provider.slug} provider={provider} />
              ))}
            </div>
          </section>
          <BonusCard title="Available bonuses">
            <ul className="list-disc space-y-2 pl-5">
              {relatedProviders.map((provider) => (
                <li key={provider.slug}>
                  <Link href={`/providers/${provider.slug}/referral-code`} className="font-medium text-primary">
                    {provider.name}
                  </Link>
                  : {provider.welcomeBonus}
                </li>
              ))}
            </ul>
          </BonusCard>
          <BonusCard title="Requirements">
            <ul className="list-disc space-y-2 pl-5">
              {corridor.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </BonusCard>
          <FAQ items={corridor.faq} />
        </div>
      </Container>
    </>
  );
}
