import { notFound } from "next/navigation";
import { BonusCard } from "@/components/bonus-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import {
  CountryAvailability,
  EligibilityTable,
  ProviderFacts,
  ReferralChecklist,
  RelatedProviderResources,
  SourceNotes,
  SupportResources,
  TroubleshootingGuide,
  UpdateHistory,
  VerificationRequirements,
  WelcomeBonusCard
} from "@/components/provider-authority";
import { ReferralBox } from "@/components/referral-box";
import { corridors } from "@/data/corridors";
import { faqs } from "@/data/faqs";
import { getProvider, getProviderAuthority, providers } from "@/data/providers";
import { getGuides } from "@/lib/content";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";

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
  const authority = getProviderAuthority(provider);
  const guides = await getGuides();
  const relatedGuides = guides.filter((guide) => authority.relatedGuideSlugs.includes(guide.slug));
  const relatedFaqs = faqs.filter((faq) => authority.relatedFaqSlugs.includes(faq.slug));
  const relatedCorridors = corridors.filter((corridor) => authority.relatedCorridorSlugs.includes(corridor.slug));
  const relatedProviders = providers.filter((item) => authority.relatedProviderSlugs.includes(item.slug));

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Providers", item: `/providers/${provider.slug}` },
    { name: provider.name, item: `/providers/${provider.slug}` }
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(provider.faq)} />
      <JsonLd
        data={webPageJsonLd({
          title: `${provider.name} welcome bonus and referral program`,
          description: provider.description,
          path: `/providers/${provider.slug}`,
          updatedAt: provider.lastUpdated
        })}
      />
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
              {provider.name} may have a welcome bonus or referral offer, but eligibility depends on the provider&apos;s
              current rules. {provider.description}
            </p>

            <div className="mt-8 grid gap-5">
              <ProviderFacts provider={provider} authority={authority} />
              <WelcomeBonusCard authority={authority} />
              <BonusCard title="Quick answer">
                <p>{provider.currentOffer}</p>
              </BonusCard>
              <EligibilityTable eligible={provider.eligibleUsers} ineligible={authority.ineligibleUsers} />
              <CountryAvailability authority={authority} />
              <VerificationRequirements authority={authority} />
              <BonusCard title="Step-by-step signup">
                <ol className="list-decimal space-y-2 pl-5">
                  {provider.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </BonusCard>
              <BonusCard title="Referral requirements">
                <ul className="list-disc space-y-2 pl-5">
                  {provider.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </BonusCard>
              <ReferralChecklist items={authority.bonusChecklist} />
              <BonusCard title="Common mistakes">
                <ul className="list-disc space-y-2 pl-5">
                  {provider.commonMistakes.map((mistake) => (
                    <li key={mistake}>{mistake}</li>
                  ))}
                </ul>
              </BonusCard>
              <TroubleshootingGuide items={provider.missingBonus} />
              <BonusCard title="Country-specific notes">
                <ul className="list-disc space-y-2 pl-5">
                  {provider.countryNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </BonusCard>
              <FAQ items={provider.faq} />
              <RelatedProviderResources
                provider={provider}
                guides={relatedGuides}
                faqs={relatedFaqs}
                corridors={relatedCorridors}
                relatedProviders={relatedProviders}
              />
              <SupportResources authority={authority} />
              <SourceNotes authority={authority} />
              <UpdateHistory items={authority.updateHistory} />
              <Disclosure />
            </div>
          </article>
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <ReferralBox provider={provider} />
          </div>
        </div>
      </Container>
    </>
  );
}
