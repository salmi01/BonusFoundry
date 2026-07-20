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
  ResearchConfidence,
  RewardSummary,
  StepChecklist,
  Troubleshooting,
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
  const referralInstruction = referralEntryInstruction(provider);
  const quickCardFacts = providerQuickCardFacts(provider, authority);
  const providerFaq = buildProviderFaq(provider, authority);
  const relatedResources = buildRelatedResources(provider, relatedGuides, relatedFaqs, relatedCorridors, relatedProviders);
  const officialSources = buildOfficialSources(authority);
  const troubleshooting = buildTroubleshooting(provider);
  const codePath = whereToEnterCodeSteps(provider);
  const confidence = researchConfidencePercent(authority.researchProfile.confidence);
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
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/providers/${provider.slug}`, label: provider.name }
          ]}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <article>
            <LastVerified date={formatDate(authority.lastManualReview)} />
            <h1 className="mt-4 text-4xl font-bold tracking-normal">{provider.name} welcome bonus and referral program</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {referralInstruction} {provider.description}
            </p>

            <div className="mt-8 grid gap-5">
              <QuickAnswer answer={provider.currentOffer} />
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
              <ResearchConfidence percentage={confidence} explanation={authority.researchProfile.completeness} />
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
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
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

function providerQuickCardFacts(provider: Provider, authority: ProviderAuthority) {
  const minimumTransfer = authority.referral.minimumTransfer || "No fixed minimum transfer was verified from the reviewed public provider sources.";
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

function researchConfidencePercent(confidence: ProviderAuthority["researchProfile"]["confidence"]) {
  if (confidence === "high") return 95;
  if (confidence === "medium") return 75;
  return 50;
}
