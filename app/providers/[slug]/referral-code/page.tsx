import { notFound } from "next/navigation";
import { BonusCard } from "@/components/bonus-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import {
  EligibilityTable,
  ProviderFacts,
  ReferralChecklist,
  SupportResources,
  TroubleshootingGuide,
  VerificationRequirements,
  WelcomeBonusCard
} from "@/components/provider-authority";
import { ReferralBox } from "@/components/referral-box";
import { getProvider, getProviderAuthority, providers } from "@/data/providers";
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
    title: `${provider.name} referral code and promo code guide`,
    description: `Current ${provider.name} referral code, promo code, bonus requirements, eligibility notes, and first-transfer checks.`,
    path: `/providers/${provider.slug}/referral-code`
  });
}

export default async function ReferralCodePage({ params }: PageProps) {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) notFound();
  const authority = getProviderAuthority(provider);
  const hasOwnedReferralLink = Boolean(
    provider.referralLink &&
      provider.sources?.some((source) => source.confidence === "referral-link" && source.url === provider.referralLink)
  );
  const offerEntry = provider.referralCode
    ? `Referral or promo code: ${provider.referralCode}`
    : hasOwnedReferralLink && provider.referralLink
      ? `Referral link: ${provider.referralLink}`
      : "No Bonus Foundry code is listed; check the provider app or website for an active promo, referral, or first-transfer offer.";
  const applicationTiming = provider.referralCode
    ? "Enter the code before signup is completed or before the first qualifying transfer when the provider shows a code field."
    : hasOwnedReferralLink
      ? "Open the referral link before creating the account, then keep using the same provider flow until the qualifying action is complete."
      : "Apply any provider promo, referral, or first-transfer offer before checkout or account creation when the provider displays it.";
  const existingUserGuidance =
    "Existing users are usually not eligible for new-user referral or signup bonuses unless the provider's current terms show an offer for that account.";
  const addLaterGuidance =
    "Usually no. Many referral and signup offers must be attached before signup, before checkout, or during the first-transfer flow. If the provider's terms show that the offer should have applied, contact provider support with the offer screen and transfer details.";
  const filteredProviderFaq = provider.faq.filter(
    (item) => !/official|Bonus Foundry-owned|does .* have .* here/i.test(`${item.question} ${item.answer}`)
  );

  const faq = [
    ...filteredProviderFaq,
    {
      question: `How do I use the ${provider.name} referral code?`,
      answer: provider.referralCode
        ? "Enter the Bonus Foundry-listed code during signup or the first-transfer flow if the provider shows a code field. Confirm the live terms before completing a transfer."
        : hasOwnedReferralLink
          ? "Open the Bonus Foundry-listed referral link before signup, then confirm the provider's live terms before completing a transfer."
          : "Check the provider app or website for any active promo, referral, or first-transfer offer before signup or checkout."
    },
    {
      question: "Is the code on Bonus Foundry official?",
      answer:
        "The code or link listed on Bonus Foundry is provided as a practical referral or promotional resource for users looking for a provider bonus. Bonus Foundry does not claim that every listed code is a universal public promo code. Users should check the offer details shown by the provider before completing a transfer."
    }
  ];
  const referralAnswer = provider.referralCode
    ? `The current referral code Bonus Foundry lists for ${provider.name} is ${provider.referralCode}.`
    : hasOwnedReferralLink
      ? `Bonus Foundry lists a referral link for ${provider.name} rather than a manual referral code.`
      : `Check ${provider.name}'s live app or website for any active referral, promo, or first-transfer offer.`;

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
      <JsonLd
        data={webPageJsonLd({
          title: `${provider.name} referral code`,
          description: provider.welcomeBonus,
          path: `/providers/${provider.slug}/referral-code`,
          updatedAt: provider.lastUpdated
        })}
      />
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
              {referralAnswer} Use the listed code, referral link, or provider offer before signup or the first
              qualifying transfer when the provider shows that option. Bonus eligibility depends on the provider&apos;s
              live rules, your country, account status, transfer amount, destination, and payment method.
            </p>
            <div className="mt-8 grid gap-5">
              <ProviderFacts provider={provider} authority={authority} />
              <BonusCard title="What code, link, or offer can I use?">
                <p>{offerEntry}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{provider.currentOffer}</p>
              </BonusCard>
              <BonusCard title="Does this provider use a code, a link, or both?">
                <p>
                  {provider.referralCode
                    ? `${provider.name} has a Bonus Foundry-listed code on this page. Some provider campaigns may also use referral links, promo codes, or app-only offers.`
                    : hasOwnedReferralLink
                      ? `${provider.name} has a Bonus Foundry-listed referral link on this page rather than a manual code.`
                      : `${provider.name} does not have a separate Bonus Foundry code on this page. Use the provider's own promo, referral, or first-transfer offer when it appears in the live flow.`}
                </p>
              </BonusCard>
              <BonusCard title="How does the referral or promo offer work?">
                <p>
                  A referral or promo offer can reduce a transfer cost, unlock a welcome bonus, or provide a reward
                  after a qualifying action. The provider controls the qualifying country, account, transfer amount,
                  destination, payment method, expiry, and payout timing.
                </p>
              </BonusCard>
              <WelcomeBonusCard authority={authority} />
              <EligibilityTable eligible={provider.eligibleUsers} ineligible={authority.ineligibleUsers} />
              <BonusCard title="When should I apply the code or link?">
                <p>{applicationTiming}</p>
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
              <BonusCard title="When is the bonus applied?">
                <p>
                  {authority.referral.payoutTiming ||
                    "Bonus timing is provider-specific. Check the live offer terms for whether the bonus appears before checkout, after a qualifying transfer, or after provider review."}
                </p>
              </BonusCard>
              <BonusCard title="Can I add the code after signup?">
                <p>{addLaterGuidance}</p>
              </BonusCard>
              <BonusCard title="Can existing users use the code?">
                <p>{existingUserGuidance}</p>
              </BonusCard>
              <VerificationRequirements authority={authority} />
              <ReferralChecklist items={authority.bonusChecklist} />
              <BonusCard title="Why did the code not work?">
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
              <FAQ items={faq} />
              <SupportResources authority={authority} />
              <Disclosure />
            </div>
          </article>
          <ReferralBox provider={provider} />
        </div>
      </Container>
    </>
  );
}
