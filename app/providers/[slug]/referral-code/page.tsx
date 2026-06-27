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
    title: `${provider.name} referral code`,
    description: `Current ${provider.name} referral code details, bonus requirements, eligibility notes, and clear disclosure.`,
    path: `/providers/${provider.slug}/referral-code`
  });
}

export default async function ReferralCodePage({ params }: PageProps) {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) notFound();

  const faq = [
    ...provider.faq,
    {
      question: `How do I use the ${provider.name} referral code?`,
      answer:
        "Use the referral link or enter the code during signup if the provider gives you a code field. Confirm the live terms before completing a transfer."
    }
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: provider.name, item: `/providers/${provider.slug}` },
          { name: "Referral code", item: `/providers/${provider.slug}/referral-code` }
        ])}
      />
      <JsonLd data={faqJsonLd(faq)} />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/providers/${provider.slug}`, label: provider.name },
            { href: `/providers/${provider.slug}/referral-code`, label: "Referral code" }
          ]}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <article>
            <LastUpdated date={provider.lastUpdated} />
            <h1 className="mt-4 text-4xl font-bold tracking-normal">{provider.name} referral code</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The current referral code we list for {provider.name} is <strong>{provider.referralCode}</strong>. The
              bonus is not automatic; it depends on the provider&apos;s live eligibility rules, your country, and whether your
              first transfer qualifies.
            </p>
            <div className="mt-8 grid gap-5">
              <BonusCard title="What is the referral program?">
                <p>
                  A referral program lets an existing user invite a new user. If the new user meets the current terms,
                  one or both accounts may receive a reward.
                </p>
              </BonusCard>
              <BonusCard title="Current bonus">
                <p>{provider.welcomeBonus}</p>
              </BonusCard>
              <BonusCard title="How to use it">
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
              <FAQ items={faq} />
              <Disclosure />
            </div>
          </article>
          <ReferralBox provider={provider} />
        </div>
      </Container>
    </>
  );
}
