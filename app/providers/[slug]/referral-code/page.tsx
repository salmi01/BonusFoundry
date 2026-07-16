import { notFound } from "next/navigation";
import {
  CommonMistakes,
  EligibilitySummary,
  HowItWorks,
  KeyFacts,
  KeyTakeaways,
  LastVerified,
  OfficialSources,
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
import { CopyCodeButton } from "@/components/copy-code-button";
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

  if (provider.slug === "taptap-send") {
    return createMetadata({
      title: "TapTap Send Referral Code SALAHEDD1933 — Get €10 or $10",
      description:
        "Use TapTap Send referral code SALAHEDD1933 and receive a €10 or $10 bonus after completing a qualifying first transfer of at least €100 or $100.",
      path: "/providers/taptap-send/referral-code",
      type: "article",
      modifiedTime: "2026-07-16"
    });
  }

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

  if (provider.slug === "taptap-send") {
    return <TaptapSendReferralPage provider={provider} authority={authority} guides={guides} />;
  }

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

function TaptapSendReferralPage({
  provider,
  authority,
  guides
}: {
  provider: Provider;
  authority: ProviderAuthority;
  guides: { slug: string; title: string; description: string }[];
}) {
  const pageFaq = taptapReferralFaq();
  const relatedResources = buildTaptapRelatedResources(provider, authority, guides);
  const reviewDate = formatDate(authority.lastManualReview);
  const quickAnswer =
    "Use TapTap Send referral code SALAHEDD1933 to receive a €10 or $10 bonus after completing a qualifying first transfer of at least €100 or $100. Enter the code before completing your first eligible transfer. The code is currently valid and has no displayed expiration date.";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: "Taptap Send", item: "/providers/taptap-send" },
          { name: "Referral code", item: "/providers/taptap-send/referral-code" }
        ])}
      />
      <JsonLd data={faqJsonLd(pageFaq.map((item) => ({ question: item.question, answer: String(item.answer) })))} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "TapTap Send Referral Code SALAHEDD1933",
          description:
            "Use TapTap Send referral code SALAHEDD1933 and receive a €10 or $10 bonus after completing a qualifying first transfer of at least €100 or $100.",
          url: "https://bonusfoundry.com/providers/taptap-send/referral-code",
          dateModified: "2026-07-16",
          author: {
            "@id": "https://bonusfoundry.com/#editorial-team",
            name: "BonusFoundry Editorial Team"
          },
          reviewedBy: {
            "@id": "https://bonusfoundry.com/#editorial-team",
            name: "BonusFoundry Editorial Team"
          },
          publisher: {
            "@id": "https://bonusfoundry.com/#organization",
            name: "Bonus Foundry"
          },
          about: {
            "@type": "Offer",
            name: "TapTap Send referral code SALAHEDD1933",
            description:
              "€10 or $10 bonus after a qualifying first transfer of at least €100 or $100, manually verified in the TapTap Send app."
          }
        }}
      />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/providers/taptap-send", label: "Taptap Send" },
            { href: "/providers/taptap-send/referral-code", label: "Referral code" }
          ]}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <article>
            <LastVerified date={reviewDate} />
            <h1 className="mt-4 text-4xl font-bold tracking-normal">TapTap Send Referral Code SALAHEDD1933</h1>
            <div className="mt-6 grid gap-5">
              <QuickAnswer answer={quickAnswer} />

              <section className="rounded-lg border bg-card p-5 shadow-sm">
                <h2 className="text-xl font-semibold leading-tight">Referral code</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Enter <strong className="text-foreground">SALAHEDD1933</strong> in the TapTap Send referral or promo code field before completing the first eligible transfer.
                </p>
                <div className="mt-4">
                  <CopyCodeButton code="SALAHEDD1933" />
                </div>
              </section>

              <KeyFacts
                title="Key facts"
                facts={[
                  { label: "Referral code", value: "SALAHEDD1933" },
                  { label: "Bonus", value: "€10 or $10" },
                  { label: "Minimum transfer", value: "€100 or $100" },
                  { label: "Eligible users", value: "New users completing their first qualifying transfer" },
                  { label: "When to enter the code", value: "Before completing the first eligible transfer" },
                  { label: "Expiration", value: "No expiration currently shown" },
                  { label: "Last verified", value: reviewDate },
                  { label: "Verification source", value: "TapTap Send app" }
                ]}
              />

              <HowItWorks
                title="How to use the code"
                steps={[
                  { label: "Download or open TapTap Send." },
                  { label: "Create a new account." },
                  { label: "Start the first eligible transfer." },
                  { label: "Enter SALAHEDD1933 in the referral or promo code field." },
                  { label: "Send at least €100 or $100." },
                  { label: "Complete the transfer." },
                  { label: "Check the account for the €10 or $10 bonus." }
                ]}
              />

              <KeyFacts
                title="When the bonus is applied"
                facts={[
                  { label: "Bonus amount", value: "€10 or $10" },
                  { label: "Required action", value: "Complete a qualifying first transfer of at least €100 or $100." },
                  {
                    label: "Timing",
                    value:
                      "TapTap Send's public referral help says referral credit is added after the referred friend uses the code and sends their first transfer. The manual app verification did not prove that the bonus is instant."
                  }
                ]}
              />

              <EligibilitySummary
                title="Eligibility"
                newUsers="New TapTap Send users completing their first qualifying transfer after entering SALAHEDD1933."
                existingUsers="Existing TapTap Send users are not eligible for this new-user referral bonus."
                countryRestrictions="The app-verified code, bonus, and transfer minimum are current for the verified offer. Destination availability and delivery methods still depend on the live TapTap Send route."
                verificationRequirements={authority.verification.identityRequired}
              />

              <CommonMistakes
                title="Common mistakes"
                mistakes={[
                  "Creating a TapTap Send account and looking for the referral code field only after the first transfer is complete.",
                  "Sending less than €100 or $100 for the first qualifying transfer.",
                  "Entering a different promo code instead of SALAHEDD1933.",
                  "Assuming the bonus is instant before TapTap Send has completed the qualifying transfer and reward checks.",
                  "Ignoring identity, payment, or 3D Secure verification prompts."
                ]}
              />

              <Troubleshooting
                title="Troubleshooting"
                items={[
                  {
                    problem: "Bonus did not appear",
                    possibleReason: "The code was not entered before the first eligible transfer was completed.",
                    suggestedAction: "Check the transfer receipt and offer screen, then contact TapTap Send support if the code was entered correctly."
                  },
                  {
                    problem: "Transfer did not qualify",
                    possibleReason: "The first transfer may have been below €100 or $100.",
                    suggestedAction: "Review the sent amount and currency before expecting the referral bonus."
                  },
                  {
                    problem: "Account was already used",
                    possibleReason: "The offer is for new users completing their first qualifying transfer.",
                    suggestedAction: "Use the code only on a new TapTap Send account before the first eligible transfer."
                  },
                  {
                    problem: "Transfer is delayed or failed",
                    possibleReason: "Identity verification, payment authentication, or 3D Secure may still be pending.",
                    suggestedAction: "Complete any TapTap Send or bank verification prompt, then check the transfer status again."
                  }
                ]}
              />

              <section className="rounded-lg border bg-card p-5 shadow-sm">
                <h2 className="text-xl font-semibold leading-tight">Official sources and verification</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Manually verified in the TapTap Send app on {reviewDate}. The offer displayed a €10 or $10 bonus after a qualifying first transfer of at least €100 or $100. No expiration date was displayed for the referral code.
                </p>
              </section>

              <OfficialSources
                sources={[
                  {
                    name: "TapTap Send app manual verification",
                    type: "Official mobile app",
                    url: "https://www.taptapsend.com/",
                    reviewedInformation:
                      "SALAHEDD1933, €10 or $10 bonus, €100 or $100 minimum qualifying transfer, and no displayed expiration date.",
                    reviewDate
                  },
                  {
                    name: "TapTap Send referrals help",
                    type: "Official help center",
                    url: "https://support.taptapsend.com/hc/en-gb/articles/360001303088-How-do-referrals-work",
                    reviewedInformation: "Referral credit mechanics, first-transfer requirement, and reward timing.",
                    reviewDate
                  },
                  {
                    name: "TapTap Send promo codes help",
                    type: "Official help center",
                    url: "https://support.taptapsend.com/hc/en-gb/articles/360001301127-How-do-promo-codes-work",
                    reviewedInformation: "Referral codes versus marketing promo codes and code-entry behavior.",
                    reviewDate
                  },
                  {
                    name: "TapTap Send support",
                    type: "Official support",
                    url: "https://support.taptapsend.com/hc/en-gb/articles/360035876954-Contact-Taptap-Send-Support",
                    reviewedInformation: "Where to contact TapTap Send for account-specific transfer or reward issues.",
                    reviewDate
                  }
                ]}
              />

              <ProviderMiniFAQ items={pageFaq} title="FAQ" />
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

function taptapReferralFaq(): FAQItem[] {
  return [
    {
      question: "What is the TapTap Send referral code?",
      answer: "The TapTap Send referral code is SALAHEDD1933."
    },
    {
      question: "How much is the TapTap Send referral bonus?",
      answer: "The app-verified TapTap Send referral bonus is €10 or $10."
    },
    {
      question: "What is the minimum transfer?",
      answer: "The minimum qualifying first transfer is €100 or $100."
    },
    {
      question: "Where do I enter the referral code?",
      answer: "Enter SALAHEDD1933 in the TapTap Send referral or promo code field before completing the first eligible transfer."
    },
    {
      question: "When do I receive the bonus?",
      answer:
        "TapTap Send's public referral help says referral credit is added after the referred friend uses the code and sends their first transfer. The manual app verification did not prove that the bonus is instant."
    },
    {
      question: "Does the referral code expire?",
      answer: "No expiration date was displayed for SALAHEDD1933 during the July 16, 2026 TapTap Send app verification."
    },
    {
      question: "Can existing users use the code?",
      answer: "No. This referral bonus is for new users completing their first qualifying TapTap Send transfer."
    },
    {
      question: "Why did the bonus not appear?",
      answer:
        "The bonus may not appear if the code was not entered before the first eligible transfer, the first transfer was below €100 or $100, the account was not new, or verification is still pending."
    }
  ];
}

function buildTaptapRelatedResources(
  provider: Provider,
  authority: ProviderAuthority,
  guides: { slug: string; title: string; description: string }[]
): LinkItem[] {
  const relatedGuides = guides
    .filter((guide) => authority.relatedGuideSlugs.includes(guide.slug))
    .map((guide) => ({ href: `/guides/${guide.slug}`, label: guide.title, description: guide.description }));
  const relatedCorridors = corridors
    .filter((corridor) => authority.relatedCorridorSlugs.includes(corridor.slug))
    .map((corridor) => ({ href: `/corridors/${corridor.slug}`, label: `${corridor.from} to ${corridor.to}`, description: corridor.summary }));

  return [
    { href: `/providers/${provider.slug}`, label: "TapTap Send provider page", description: "Service overview, countries, payment methods, delivery methods, verification, support, and provider details." },
    ...relatedGuides,
    { href: "/guides/why-bonus-was-not-received", label: "Referral code troubleshooting guide", description: "Checks to run when a signup bonus or referral reward does not appear." },
    ...relatedCorridors,
    { href: "/disclosure", label: "Referral disclosure" }
  ];
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
