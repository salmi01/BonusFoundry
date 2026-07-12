import { notFound } from "next/navigation";
import {
  CommonMistakes,
  EligibilitySummary,
  HowItWorks,
  KeyFacts,
  KeyTakeaways,
  LastVerified,
  ProviderMiniFAQ,
  QuickAnswer,
  RelatedResources,
  RewardSummary,
  StepChecklist,
  Troubleshooting,
  WhereToEnterCode,
  type FAQItem,
  type LinkItem,
  type TroubleshootingItem
} from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { JsonLd } from "@/components/json-ld";
import { ReferralBox } from "@/components/referral-box";
import { corridors } from "@/data/corridors";
import { faqs } from "@/data/faqs";
import { getProvider, getProviderAuthority, providers, type Provider, type ProviderAuthority } from "@/data/providers";
import { getGuides } from "@/lib/content";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

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
  const guides = await getGuides();
  const pageFaq = buildReferralFaq(provider, authority);
  const offerEntry = referralOfferEntry(provider);
  const codeSteps = whereToEnterCodeSteps(provider);
  const relatedResources = buildRelatedResources(provider, authority, guides);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: provider.name, item: `/providers/${provider.slug}` },
          { name: "Referral code", item: `/providers/${provider.slug}/referral-code` }
        ])}
      />
      <JsonLd data={faqJsonLd(pageFaq.map((item) => ({ question: item.question, answer: String(item.answer) })))} />
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
            <LastVerified date={formatDate(authority.lastManualReview)} />
            <h1 className="mt-4 text-4xl font-bold tracking-normal">{provider.name} referral code</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{referralAnswer(provider)}</p>
            <div className="mt-8 grid gap-5">
              <QuickAnswer answer={offerEntry} />
              <KeyTakeaways
                items={[
                  offerEntry,
                  applicationTiming(provider),
                  provider.eligibleUsers,
                  authority.referral.payoutTiming || "Reward timing is controlled by the provider's live offer terms.",
                  "Keep the offer screen and transfer receipt until the reward is resolved."
                ]}
              />
              <RewardSummary
                rewardType={rewardType(provider, authority)}
                rewardRange={authority.referral.welcomeBonus}
                qualifyingTransfer={
                  authority.referral.minimumTransfer ||
                  "No fixed minimum transfer was verified from reviewed public provider sources."
                }
                notes={authority.referral.limitations[0] ?? "Use the live provider terms for final eligibility."}
              />
              <WhereToEnterCode steps={codeSteps} />
              <EligibilitySummary
                newUsers={provider.eligibleUsers}
                existingUsers={authority.ineligibleUsers[0]}
                countryRestrictions={provider.countryNotes[0] ?? "Country eligibility is controlled by the provider's live flow."}
                verificationRequirements={authority.verification.identityRequired}
              />
              <HowItWorks steps={provider.steps.map((step) => ({ label: step }))} title="How to use the offer" />
              <StepChecklist items={authority.bonusChecklist.map((item) => ({ label: item, status: "pending" }))} title="Referral checklist" />
              <KeyFacts
                title="Requirements"
                facts={provider.requirements.map((requirement, index) => ({
                  label: `Requirement ${index + 1}`,
                  value: requirement
                }))}
              />
              <CommonMistakes mistakes={provider.commonMistakes} title="Why the code or offer may not work" />
              <Troubleshooting items={buildTroubleshooting(provider)} title="Troubleshooting missing rewards" />
              <KeyFacts title="Country-specific notes" facts={provider.countryNotes.map((note, index) => ({ label: `Note ${index + 1}`, value: note }))} />
              <ProviderMiniFAQ items={pageFaq} title={`${provider.name} referral FAQ`} />
              <RelatedResources links={relatedResources} />
              <Disclosure />
            </div>
          </article>
          <ReferralBox provider={provider} />
        </div>
      </Container>
    </>
  );
}

function hasOwnedReferralLink(provider: Provider) {
  return Boolean(
    provider.referralLink &&
      provider.sources?.some((source) => source.confidence === "referral-link" && source.url === provider.referralLink)
  );
}

function referralOfferEntry(provider: Provider) {
  if (provider.referralCode) return `Bonus Foundry referral code: ${provider.referralCode}`;
  if (hasOwnedReferralLink(provider)) return `Bonus Foundry referral link is listed for ${provider.name}.`;
  return `${provider.name} does not have a separate Bonus Foundry referral code listed. Use the provider's own live promo, referral, or first-transfer offer when it appears.`;
}

function referralAnswer(provider: Provider) {
  if (provider.referralCode) {
    return `The current Bonus Foundry referral code for ${provider.name} is ${provider.referralCode}. Apply it before signup or the first qualifying transfer when ${provider.name} shows a code field.`;
  }

  if (hasOwnedReferralLink(provider)) {
    return `Bonus Foundry lists an owned referral link for ${provider.name}. Open the link before signup, then use the same provider flow until the qualifying action is complete.`;
  }

  return `${provider.name} does not have a separate Bonus Foundry referral code on this page. Use ${provider.name}'s own referral, promo, or first-transfer offer when it appears in the live provider flow.`;
}

function applicationTiming(provider: Provider) {
  if (provider.referralCode) return "Enter the code before signup is completed or before the first qualifying transfer when the provider shows a code field.";
  if (hasOwnedReferralLink(provider)) return "Open the referral link before creating the account.";
  return "Apply any provider promo, referral, or first-transfer offer before checkout or account creation when the provider displays it.";
}

function whereToEnterCodeSteps(provider: Provider) {
  if (provider.referralCode) return ["Signup or first-transfer flow", "Referral Code or Promo Code field", "Before the qualifying transfer"];
  if (hasOwnedReferralLink(provider)) return ["Bonus Foundry referral link", "Provider signup flow", "Before account creation"];
  return ["Provider offer entry point", "Signup or checkout flow", "Before payment"];
}

function rewardType(provider: Provider, authority: ProviderAuthority) {
  const text = `${provider.welcomeBonus} ${authority.referral.welcomeBonus}`.toLowerCase();
  if (text.includes("gift card")) return "Gift card or provider-selected reward";
  if (text.includes("credit")) return "Bonus credit";
  if (text.includes("fee")) return "Fee discount or transfer benefit";
  if (text.includes("cashback")) return "Cashback or account credit";
  return "Referral, promo, or welcome reward";
}

function buildTroubleshooting(provider: Provider): TroubleshootingItem[] {
  return provider.missingBonus.slice(0, 5).map((item, index) => ({
    problem: index === 0 ? "Reward missing" : `Referral check ${index + 1}`,
    possibleReason: item,
    suggestedAction: "Compare the transfer with the provider's displayed offer terms, then contact official provider support with the offer screen and transfer receipt."
  }));
}

function buildReferralFaq(provider: Provider, authority: ProviderAuthority): FAQItem[] {
  const filteredProviderFaq = provider.faq.filter(
    (item) => !/official|Bonus Foundry-owned|does .* have .* here/i.test(`${item.question} ${item.answer}`)
  );

  return [
    {
      question: `How do I use the ${provider.name} referral code or offer?`,
      answer: referralOfferEntry(provider)
    },
    {
      question: `Who is eligible for the ${provider.name} referral or promo offer?`,
      answer: provider.eligibleUsers
    },
    {
      question: `When is the ${provider.name} bonus applied?`,
      answer:
        authority.referral.payoutTiming ||
        "Reward timing is provider-specific. Use the live offer terms for whether the reward appears before checkout, after a qualifying transfer, or after review."
    },
    {
      question: `Can existing ${provider.name} users use this offer?`,
      answer: authority.ineligibleUsers[0] ?? "Existing users are usually not eligible unless the provider's current terms allow existing-account participation."
    },
    {
      question: "Is the code on Bonus Foundry official?",
      answer:
        "Bonus Foundry is independent. A listed code or owned referral link is provided as a practical referral resource, not as a universal public provider promo code."
    },
    ...filteredProviderFaq
  ];
}

function buildRelatedResources(provider: Provider, authority: ProviderAuthority, guides: { slug: string; title: string; description: string }[]): LinkItem[] {
  const relatedGuides = guides
    .filter((guide) => authority.relatedGuideSlugs.includes(guide.slug))
    .map((guide) => ({ href: `/guides/${guide.slug}`, label: guide.title, description: guide.description }));
  const relatedFaqs = faqs
    .filter((faq) => authority.relatedFaqSlugs.includes(faq.slug))
    .map((faq) => ({ href: `/faq/${faq.slug}`, label: faq.question, description: faq.answer }));
  const relatedCorridors = corridors
    .filter((corridor) => authority.relatedCorridorSlugs.includes(corridor.slug))
    .map((corridor) => ({ href: `/corridors/${corridor.slug}`, label: `${corridor.from} to ${corridor.to}`, description: corridor.summary }));

  return [
    { href: `/providers/${provider.slug}`, label: `${provider.name} provider page`, description: "Full reward, eligibility, verification, country, source, and support details." },
    ...relatedGuides,
    ...relatedFaqs,
    ...relatedCorridors,
    { href: "/providers", label: "All provider bonus guides" },
    { href: "/faq", label: "Referral bonus FAQ" },
    { href: "/disclosure", label: "Referral disclosure" }
  ];
}
