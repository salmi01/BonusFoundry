import { notFound } from "next/navigation";
import {
  BestFor,
  CommonMistakes,
  EditorialNote,
  EligibilitySummary,
  HowItWorks,
  KeyFacts,
  KeyTakeaways,
  LastVerified,
  MinimumTransfer,
  OfficialSources,
  ProsCons,
  ProviderMiniFAQ,
  ProviderQuickCard,
  QuickAnswer,
  RelatedResources,
  RewardSummary,
  StepChecklist,
  Troubleshooting,
  VerificationStatus,
  WhereToEnterCode,
  type FAQItem,
  type KeyFactRow,
  type LinkItem,
  type SourceItem,
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
  const quickCardFacts = providerQuickCardFacts(provider, authority);
  const providerFaq = buildProviderFaq(provider, authority);
  const relatedResources = buildRelatedResources(provider, relatedGuides, relatedFaqs, relatedCorridors, relatedProviders);
  const officialSources = buildOfficialSources(authority);
  const troubleshooting = buildTroubleshooting(provider);
  const codePath = whereToEnterCodeSteps(provider);
  const providerFacts: KeyFactRow[] = [
    { label: "Provider", value: provider.name },
    { label: "Website", value: authority.website },
    ...(authority.foundedYear ? [{ label: "Founded year", value: authority.foundedYear }] : []),
    ...(authority.trustpilot ? [{ label: "Trustpilot", value: authority.trustpilot }] : []),
    { label: "Referral program", value: authority.referral.hasProgram },
    { label: "Last offer update", value: formatDate(authority.lastOfferUpdate) }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Providers", item: `/providers/${provider.slug}` },
    { name: provider.name, item: `/providers/${provider.slug}` }
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(providerFaq.map((item) => ({ question: item.question, answer: String(item.answer) })))} />
      <JsonLd
        data={webPageJsonLd({
          title: `${provider.name} welcome bonus and referral program`,
          description: provider.description,
          path: `/providers/${provider.slug}`,
          updatedAt: provider.lastUpdated
        })}
      />
      <Container className="py-6 sm:py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/providers/${provider.slug}`, label: provider.name }
          ]}
        />
        <div className="grid w-full min-w-0 max-w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="w-full min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-none">
            <LastVerified date={formatDate(authority.lastManualReview)} contentUpdatedAt={formatDate(provider.lastUpdated)} />
            <h1 className="mt-4 break-words text-3xl font-bold tracking-normal sm:text-4xl">{provider.name} welcome bonus and referral program</h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
              {providerPageDirectAnswer(provider, authority)}
            </p>

            <div className="mt-6 grid min-w-0 grid-cols-1 gap-5 sm:mt-8">
              <QuickAnswer answer={provider.currentOffer} />
              {provider.proprietaryVerification ? (
                <VerificationStatus verification={provider.proprietaryVerification} />
              ) : null}
              <ProviderQuickCard
                provider={provider.name}
                reward={authority.referral.welcomeBonus}
                eligibility={provider.eligibleUsers}
                minimumTransfer={quickCardFacts.minimumTransfer}
                whereToEnterCode={quickCardFacts.whereToEnterCode}
                codeOrLink={quickCardFacts.codeOrLink}
                typicalTransferSpeed="Check the live route, payout method, verification status, and payment method before sending."
                lastVerified={formatDate(authority.lastManualReview)}
                officialSourcesReviewed={authority.researchProfile.sourcesReviewed.join(", ")}
              />
              <KeyTakeaways items={authority.bonusChecklist.slice(0, 5)} />
              <RewardSummary
                rewardType={rewardType(provider, authority)}
                rewardRange={authority.referral.welcomeBonus}
                qualifyingTransfer={quickCardFacts.minimumTransfer}
                notes={authority.referral.limitations[0] ?? "Review the live provider terms before relying on a reward."}
              />
              <MinimumTransfer amount={quickCardFacts.minimumTransfer} notes="If no fixed amount is listed here, check the provider's live offer before sending the first transfer." />
              <WhereToEnterCode steps={codePath} />
              <EligibilitySummary
                newUsers={provider.eligibleUsers}
                existingUsers={authority.ineligibleUsers[0] ?? "Existing users are not usually eligible unless the provider's current terms allow it."}
                countryRestrictions={countryRestrictionSummary(authority)}
                verificationRequirements={authority.verification.identityRequired}
              />
              <HowItWorks steps={provider.steps.map((step) => ({ label: step }))} title="How to claim the offer" />
              <StepChecklist items={authority.bonusChecklist.map((item) => ({ label: item, status: "pending" }))} title="Referral checklist" />
              <KeyFacts
                title="Provider facts"
                facts={providerFacts}
              />
              <KeyFacts
                title="Verification requirements"
                facts={[
                  { label: "Identity verification", value: authority.verification.identityRequired },
                  { label: "Proof of address", value: authority.verification.proofOfAddress },
                  { label: "Bank or payment verification", value: authority.verification.bankVerification }
                ]}
              />
              <KeyFacts
                title="Country availability and payment methods"
                facts={[
                  { label: "Sending countries", value: authority.availability.sendingCountries.join(", ") },
                  { label: "Receiving countries", value: authority.availability.receivingCountries.join(", ") },
                  { label: "Currencies", value: authority.availability.currencies.join(", ") },
                  { label: "Payment methods", value: authority.availability.paymentMethods.join(", ") }
                ]}
              />
              <BestFor items={bestForItems(provider)} />
              <ProsCons pros={provider.requirements.slice(0, 4)} cons={authority.referral.limitations.slice(0, 4)} />
              <CommonMistakes mistakes={provider.commonMistakes} />
              <Troubleshooting items={troubleshooting} title="Troubleshooting missing rewards" />
              <KeyFacts title="Country-specific notes" facts={provider.countryNotes.map((note, index) => ({ label: `Note ${index + 1}`, value: note }))} />
              <ProviderMiniFAQ items={providerFaq} title={`${provider.name} FAQ`} />
              <OfficialSources sources={officialSources} />
              <KeyFacts
                title="Support"
                facts={[
                  { label: "Support email", value: authority.support.supportEmail ?? "Use the provider support page for current contact options." },
                  { label: "Help center", value: authority.support.helpCenter },
                  { label: "Support URL", value: authority.support.supportUrl }
                ]}
              />
              <KeyFacts
                title="Update history"
                facts={authority.updateHistory.map((item) => ({ label: formatDate(item.date), value: item.note }))}
              />
              <EditorialNote>
                BonusFoundry advice is separate from provider rules: keep the offer screen, transfer receipt, and verification messages until the reward or transfer is resolved.
              </EditorialNote>
              <RelatedResources links={relatedResources} />
              <Disclosure />
            </div>
          </article>
          <div className="w-full min-w-0 max-w-[calc(100vw-2rem)] space-y-5 sm:max-w-none lg:sticky lg:top-24 lg:self-start">
            <ReferralBox provider={provider} />
          </div>
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

function referralEntryInstruction(provider: Provider) {
  if (provider.referralCode) {
    return `Use BonusFoundry code ${provider.referralCode} when ${provider.name} shows a referral or promo-code field.`;
  }

  if (hasOwnedReferralLink(provider) && provider.referralLink) {
    return `Open the BonusFoundry ${provider.name} referral link before signup.`;
  }

  return `Use ${provider.name}'s own referral, promo, or first-transfer offer when it appears in the live provider flow.`;
}

function providerPageDirectAnswer(provider: Provider, authority: ProviderAuthority) {
  const lastVerified = formatDate(authority.lastManualReview);

  if (provider.referralCode) {
    return `${provider.name} referral code: ${provider.referralCode}. ${authority.referral.welcomeBonus} Eligible users: ${provider.eligibleUsers} Last reviewed by BonusFoundry: ${lastVerified}.`;
  }

  if (hasOwnedReferralLink(provider) && provider.referralLink) {
    return `${provider.name} uses a BonusFoundry-owned referral link rather than a manual BonusFoundry code. ${authority.referral.welcomeBonus} Eligible users: ${provider.eligibleUsers} Last reviewed by BonusFoundry: ${lastVerified}.`;
  }

  return `${provider.name} does not have a separate BonusFoundry referral code listed. ${provider.currentOffer} Last reviewed by BonusFoundry: ${lastVerified}.`;
}

function providerQuickCardFacts(provider: Provider, authority: ProviderAuthority) {
  const minimumTransfer = authority.referral.minimumTransfer || "Check the provider's live offer for the qualifying transfer amount.";
  const whereToEnterCode = provider.referralCode
    ? "Enter the BonusFoundry code in the referral or promo-code field before completing the qualifying transfer."
    : hasOwnedReferralLink(provider)
      ? "Open the BonusFoundry referral link before creating the account."
      : "Use the provider's own referral or promo entry point before checkout when the live flow shows one.";
  const codeOrLink = provider.referralCode
    ? `BonusFoundry code: ${provider.referralCode}`
    : hasOwnedReferralLink(provider) && provider.referralLink
      ? `BonusFoundry referral link: ${provider.referralLink}`
      : "No separate BonusFoundry code is listed for this provider.";

  return { minimumTransfer, whereToEnterCode, codeOrLink };
}

function whereToEnterCodeSteps(provider: Provider) {
  if (provider.referralCode) {
    return ["Signup or first-transfer flow", "Referral or promo-code field", "Before completing the qualifying transfer"];
  }

  if (hasOwnedReferralLink(provider)) {
    return ["BonusFoundry referral link", "Provider signup flow", "Before creating the account"];
  }

  return ["Provider referral entry point", "Offer or checkout screen", "Before paying for the qualifying transfer"];
}

function rewardType(provider: Provider, authority: ProviderAuthority) {
  const text = `${provider.welcomeBonus} ${authority.referral.welcomeBonus}`.toLowerCase();
  if (text.includes("gift card")) return "Gift card or provider-selected reward";
  if (text.includes("credit")) return "Bonus credit";
  if (text.includes("fee")) return "Fee discount or transfer benefit";
  if (text.includes("cashback")) return "Cashback or account credit";
  return "Provider referral or welcome reward";
}

function countryRestrictionSummary(authority: ProviderAuthority) {
  return authority.availability.sendingCountries.length
    ? authority.availability.sendingCountries.join(", ")
    : "Country eligibility is controlled by the provider's live flow.";
}

function bestForItems(provider: Provider) {
  const bestFor = provider.keyFacts.find((fact) => fact.label.toLowerCase() === "best for")?.value;
  const paymentMethods = provider.availability?.paymentMethods.slice(0, 2) ?? [];
  return [bestFor, ...paymentMethods].filter(Boolean) as string[];
}

function buildTroubleshooting(provider: Provider): TroubleshootingItem[] {
  return provider.missingBonus.slice(0, 5).map((item, index) => ({
    problem: index === 0 ? "Reward missing" : `Reward check ${index + 1}`,
    possibleReason: item,
    suggestedAction: "Compare the transfer against the provider's live offer terms, then contact provider support with the offer screen and transfer receipt."
  }));
}

function buildProviderFaq(provider: Provider, authority: ProviderAuthority): FAQItem[] {
  const requiredFaq: FAQItem[] = [
    {
      question: `What is the ${provider.name} referral code?`,
      answer: referralOfferEntry(provider)
    },
    {
      question: `How much is the ${provider.name} referral or welcome reward?`,
      answer: referralRewardAnswer(provider, authority)
    },
    {
      question: `What is the minimum qualifying transfer for ${provider.name}?`,
      answer: authority.referral.minimumTransfer || "Check the provider's live offer for the qualifying transfer amount."
    },
    {
      question: `Who is eligible for the ${provider.name} referral or welcome offer?`,
      answer: provider.eligibleUsers
    },
    {
      question: `How do I use the ${provider.name} code or referral offer?`,
      answer: referralEntryInstruction(provider)
    },
    {
      question: `When do I receive the ${provider.name} reward?`,
      answer:
        authority.referral.payoutTiming ||
        "The reviewed public provider sources did not verify one fixed reward timing. Check the live offer terms before sending the qualifying transfer."
    },
    {
      question: `Why didn't I receive the ${provider.name} reward?`,
      answer: provider.missingBonus[0] ?? "The reward usually fails when the account, country, transfer, code entry, verification, or timing does not match the provider's live terms."
    },
    {
      question: `Can existing ${provider.name} users participate?`,
      answer: authority.ineligibleUsers[0] ?? "Existing users are not usually eligible unless the provider's current terms explicitly allow existing-account participation."
    }
  ];
  const existingQuestions = new Set(requiredFaq.map((item) => item.question.toLowerCase()));
  const providerSpecificFaq = provider.faq
    .filter((item) => !existingQuestions.has(item.question.toLowerCase()))
    .map((item) => ({ question: item.question, answer: item.answer }));

  return [...requiredFaq, ...providerSpecificFaq];
}

function referralOfferEntry(provider: Provider) {
  if (provider.referralCode) return `BonusFoundry referral code: ${provider.referralCode}.`;
  if (hasOwnedReferralLink(provider) && provider.referralLink) return `BonusFoundry referral link: ${provider.referralLink}.`;
  return `${provider.name} does not have a separate BonusFoundry referral code listed. Use ${provider.name}'s own live promo, referral, or first-transfer offer when it appears.`;
}

function referralRewardAnswer(provider: Provider, authority: ProviderAuthority) {
  const rewardText = authority.referral.welcomeBonus;
  if (rewardText === `BonusFoundry lists ${provider.referralCode} as the ${provider.name} referral code.`) {
    return `BonusFoundry has not verified a separate public reward amount for ${provider.referralCode}. Use the code only if ${provider.name} accepts it in the live flow and shows matching offer terms.`;
  }

  return rewardText;
}

function buildOfficialSources(authority: ProviderAuthority): SourceItem[] {
  return authority.sources.map((source) => ({
    name: source.label,
    type: sourceTypeLabel(source.confidence),
    url: source.url,
    reviewedInformation: sourceStatusLabel(source.confidence),
    reviewDate: formatDate(source.lastReviewed)
  }));
}

function sourceTypeLabel(confidence: ProviderAuthority["sources"][number]["confidence"]) {
  if (confidence === "official") return "Official provider source";
  if (confidence === "referral-link") return "BonusFoundry referral link";
  return "BonusFoundry-owned referral detail";
}

function sourceStatusLabel(confidence: ProviderAuthority["sources"][number]["confidence"]) {
  if (confidence === "official") return "Provider rules, availability, support, or verification details reviewed";
  if (confidence === "referral-link") return "BonusFoundry-owned referral link reviewed";
  return "BonusFoundry owner-supplied code reviewed";
}

function buildRelatedResources(
  provider: Provider,
  guides: { slug: string; title: string }[],
  relatedFaqs: { slug: string; question: string }[],
  relatedCorridors: { slug: string; from: string; to: string }[],
  relatedProviders: Provider[]
): LinkItem[] {
  return [
    { href: `/providers/${provider.slug}/referral-code`, label: `${provider.name} referral code`, description: "Detailed code, link, eligibility, and reward timing guide." },
    ...guides.map((guide) => ({ href: `/guides/${guide.slug}`, label: guide.title })),
    ...relatedFaqs.map((faq) => ({ href: `/faq/${faq.slug}`, label: faq.question })),
    ...relatedCorridors.map((corridor) => ({ href: `/corridors/${corridor.slug}`, label: `${corridor.from} to ${corridor.to}` })),
    ...relatedProviders.map((item) => ({ href: `/providers/${item.slug}`, label: item.name })),
    { href: "/disclosure", label: "Referral disclosure" }
  ];
}
