import { TaptapSendPage } from "@/components/taptap-send-page";
import { SendwaveReferralPage } from "@/components/sendwave-referral-page";
import { sendwaveMetadata } from "@/data/sendwave";
import { taptapMetadata } from "@/data/taptap-send";
import Link from "next/link";
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
  VerificationStatus,
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
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
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
  const metadata = referralPageMetadata(provider);

  const generatedMetadata = createMetadata({
    title: metadata.title,
    description: metadata.description,
    path: `/providers/${provider.slug}/referral-code`,
    type: "article",
    modifiedTime: provider.lastUpdated
  });

  if (provider.slug === "ria") {
    return { ...generatedMetadata, title: { absolute: metadata.title } };
  }

  return generatedMetadata;
}

export default async function ReferralCodePage({ params }: PageProps) {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) notFound();

  const authority = getProviderAuthority(provider);
  if (provider.slug === "sendwave") {
    return <SendwaveReferralPage provider={provider} />;
  }
  const guides = await getGuides();

  if (provider.slug === "ria") {
    return <RiaReferralPage provider={provider} authority={authority} />;
  }

  if (provider.slug === "taptap-send") {
    return <TaptapSendReferralPage provider={provider} authority={authority} guides={guides} />;
  }

  const pageFaq = buildReferralFaq(provider, authority);
  const quickAnswer = referralAnswer(provider, authority);
  const codeSteps = whereToEnterCodeSteps(provider);
  const relatedResources = buildRelatedResources(provider, authority, guides);
  const officialSources = buildOfficialSources(authority);
  const metadata = referralPageMetadata(provider);

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
          title: metadata.title,
          description: metadata.description,
          path: `/providers/${provider.slug}/referral-code`,
          updatedAt: provider.lastUpdated
        })}
      />
      <Container className="py-6 sm:py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/providers/${provider.slug}`, label: provider.name },
            { href: `/providers/${provider.slug}/referral-code`, label: "Referral code" }
          ]}
        />
        <div className="grid w-full min-w-0 max-w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="w-full min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-none">
            <LastVerified date={formatDate(authority.lastManualReview)} contentUpdatedAt={formatDate(provider.lastUpdated)} />
            <h1 className="mt-4 break-words text-3xl font-bold tracking-normal sm:text-4xl">{provider.name} referral code</h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">{quickAnswer}</p>
            <div className="mt-6 grid min-w-0 grid-cols-1 gap-5 sm:mt-8">
              <QuickAnswer answer={quickAnswer} />
              {provider.proprietaryVerification ? (
                <VerificationStatus verification={provider.proprietaryVerification} />
              ) : null}
              <KeyTakeaways
                items={[
                  quickAnswer,
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
                  "Check the provider's live offer for the qualifying transfer amount."
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
              <OfficialSources sources={officialSources} />
              <RelatedResources links={relatedResources} />
              <Disclosure />
            </div>
          </article>
          <div className="w-full min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-none">
            <ReferralBox provider={provider} />
          </div>
        </div>
      </Container>
    </>
  );
}


const riaSources = {
  program:
    "https://help.riamoneytransfer.com/hc/en-us/articles/4416994463633-Ria-s-refer-a-friend-program",
  france: "https://www.riamoneytransfer.com/en-fr/refer-a-friend/",
  claim:
    "https://help.riamoneytransfer.com/hc/en-us/articles/4407688298385-I-was-referred-to-Ria-how-do-I-claim-my-reward",
  missing:
    "https://help.riamoneytransfer.com/hc/en-us/articles/36107077964561-Why-didn-t-I-receive-a-referral-discount",
  promo:
    "https://help.riamoneytransfer.com/hc/en-us/articles/4406279777169-How-do-I-use-a-promo-code"
} as const;

function RiaReferralPage({
  provider,
  authority
}: {
  provider: Provider;
  authority: ProviderAuthority;
}) {
  const pageFaq = riaReferralFaq();
  const reviewDate = formatDate(authority.lastManualReview);
  const metadata = referralPageMetadata(provider);
  const relatedResources: LinkItem[] = [
    {
      href: "/providers/ria",
      label: "Ria provider review",
      description:
        "Review Ria's service, transfer methods, eligibility checks, support, and official resources."
    },
    {
      href: "/providers",
      label: "Money transfer referral-code index",
      description: "Compare BonusFoundry's provider and referral-code pages."
    },
    {
      href: "/guides/how-referral-codes-work",
      label: "How money transfer referral codes work",
      description:
        "Understand code entry, qualifying transfers, and reward timing."
    },
    {
      href: "/guides/how-to-compare-welcome-bonuses-between-transfer-apps",
      label: "Compare money transfer welcome bonuses",
      description:
        "Compare the full transfer result, not only the advertised reward."
    },
    {
      href: "/corridors/france-to-morocco",
      label: "France to Morocco transfer comparison",
      description:
        "Compare providers and payout methods for this France-origin corridor."
    },
    {
      href: "/corridors/france-to-algeria",
      label: "France to Algeria transfer comparison",
      description:
        "Check provider availability and transfer methods for Algeria."
    },
    {
      href: "/editorial-policy",
      label: "BonusFoundry editorial policy",
      description:
        "See how BonusFoundry separates official facts from publisher-supplied referral details."
    },
    {
      href: "/research-methodology",
      label: "BonusFoundry research methodology",
      description:
        "Read how changing referral information is checked and attributed."
    }
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: "Ria", item: "/providers/ria" },
          { name: "Referral code", item: "/providers/ria/referral-code" }
        ])}
      />
      <JsonLd
        data={faqJsonLd(
          pageFaq.map((item) => ({
            question: item.question,
            answer: String(item.answer)
          }))
        )}
      />
      <JsonLd
        data={webPageJsonLd({
          title: metadata.title,
          description: metadata.description,
          path: "/providers/ria/referral-code",
          updatedAt: authority.lastManualReview
        })}
      />
      <Container className="py-6 sm:py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/providers/ria", label: "Ria" },
            { href: "/providers/ria/referral-code", label: "Referral code" }
          ]}
        />
        <div className="grid w-full min-w-0 max-w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="w-full min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-none">
            <LastVerified
              date={reviewDate}
              label="Last verified"
              contentUpdatedAt={reviewDate}
            />
            <h1 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">
              Ria Referral Code 2026: Rewards, Minimum Transfer and Eligibility
            </h1>

            <div className="mt-6 grid min-w-0 grid-cols-1 gap-5">
              <QuickAnswer
                answer={
                  <p>
                    BonusFoundry referral code{" "}
                    <strong className="text-foreground">9RMU-ENB7</strong> can
                    be entered by an eligible new Ria customer before the first
                    transfer. In France, Ria lists EUR 20 off the first
                    international transfer and EUR 20 off the referrer&apos;s
                    next transfer when at least EUR 50 is sent; rewards differ
                    in the United States and Australia. Last verified 5
                    September 2026 from Ria&apos;s{" "}
                    <a
                      href={riaSources.program}
                      className="font-medium text-primary"
                      rel="noreferrer"
                      target="_blank"
                    >
                      official refer-a-friend guidance
                    </a>
                    .
                  </p>
                }
              />

              <section
                className="rounded-lg border bg-card p-5 shadow-sm"
                aria-labelledby="ria-code-heading"
              >
                <h2
                  id="ria-code-heading"
                  className="text-xl font-semibold leading-tight"
                >
                  BonusFoundry referral code
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  <strong className="text-foreground">9RMU-ENB7</strong> is the
                  Ria referral code supplied by BonusFoundry&apos;s publisher.
                  Ria&apos;s public pages confirm the program rules below but do
                  not identify this individual code, so confirm that Ria accepts
                  it and displays the applicable offer before sending.
                </p>
                <div className="mt-4">
                  <CopyCodeButton code="9RMU-ENB7" label="Copy Ria code" />
                </div>
                <p className="mt-4 rounded-md border bg-muted/50 p-3 text-sm leading-6 text-muted-foreground">
                  <strong className="text-foreground">Disclosure:</strong>{" "}
                  BonusFoundry may receive a referral reward if you use this
                  code and complete a qualifying transfer. This does not change
                  the transfer amount, fees, or exchange rate shown by Ria.
                </p>
              </section>

              <KeyFacts
                title="Ria referral facts"
                facts={[
                  {
                    label: "Code",
                    value: "9RMU-ENB7 (supplied by BonusFoundry's publisher)"
                  },
                  {
                    label: "France reward",
                    value:
                      "EUR 20 off the friend's first transfer and EUR 20 off the referrer's next transfer"
                  },
                  {
                    label: "France minimum",
                    value: "EUR 50 in one qualifying international transfer"
                  },
                  {
                    label: "Eligible residences",
                    value: "France, United States, and Australia only"
                  },
                  { label: "Age", value: "Both people must be at least 18" },
                  {
                    label: "Offer type",
                    value:
                      "Discount on a qualifying international money transfer"
                  },
                  { label: "Last verified", value: reviewDate },
                  {
                    label: "Primary source",
                    value: (
                      <a
                        href={riaSources.program}
                        className="font-medium text-primary"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Ria&apos;s refer-a-friend program
                      </a>
                    )
                  }
                ]}
              />

              <RiaCountryRewardTable />

              <section className="rounded-lg border bg-card p-5 shadow-sm">
                <h2 className="text-xl font-semibold leading-tight">
                  How the Ria referral program works
                </h2>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      For the referred friend
                    </h3>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                      <li>
                        Create a new Ria account with no previous Ria account or
                        transfer history.
                      </li>
                      <li>
                        Enter the referral code during account creation or
                        choose â€œAdd promo codeâ€ while preparing the first
                        transfer.
                      </li>
                      <li>
                        Send the country-specific minimum in one international
                        transfer.
                      </li>
                      <li>
                        Complete the transfer successfully so Ria can apply the
                        friend&apos;s discount.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      For the referrer
                    </h3>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                      <li>
                        Be at least 18 and live in France, the United States, or
                        Australia.
                      </li>
                      <li>
                        Complete at least one transfer in the Ria app before
                        inviting friends.
                      </li>
                      <li>
                        Open â€œRefer and Earnâ€ in the Ria app and share the
                        personal referral code.
                      </li>
                      <li>
                        Receive a reward for each friend whose first
                        international transfer qualifies.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              <KeyFacts
                title="Eligibility requirements"
                facts={[
                  {
                    label: "Residence",
                    value:
                      "Ria says both the referrer and friend must live in France, the United States, or Australia. Eligibility is not established for other countries."
                  },
                  {
                    label: "Age",
                    value:
                      "Both the referrer and referred friend must be at least 18."
                  },
                  {
                    label: "Referrer history",
                    value:
                      "The referrer must have completed at least one transfer in the Ria app before referring friends."
                  },
                  {
                    label: "Friend's account",
                    value:
                      "The friend must be a new Ria customer with no previous Ria account or transfer history."
                  },
                  {
                    label: "Transfer type",
                    value:
                      "Only qualifying international transfers count; domestic transfers do not qualify."
                  },
                  {
                    label: "Minimum amount",
                    value:
                      "The applicable country minimum must be sent in one qualifying transfer."
                  },
                  {
                    label: "Code timing",
                    value:
                      "The friend must enter the referral code before completing the first transfer; it cannot be added afterward or used on a later transfer."
                  }
                ]}
              />

              <KeyFacts
                title="When the rewards are applied"
                facts={[
                  {
                    label: "Referred friend",
                    value:
                      "Ria applies the friend's discount to the first qualifying international transfer."
                  },
                  {
                    label: "Referrer",
                    value:
                      "Ria applies the referrer's discount to the next qualifying international transfer. It may take up to two days to appear after the friend's transfer has been paid to the recipient."
                  },
                  {
                    label: "Canceled transfer",
                    value:
                      "A canceled or unsuccessful transfer does not qualify. If a transfer using a referral discount is canceled, Ria says the discount becomes available for the next transfer if that transfer qualifies."
                  },
                  {
                    label: "Multiple referrals",
                    value:
                      "Ria says a referrer can refer multiple friends and receive a reward for each qualifying referral."
                  }
                ]}
              />

              <Troubleshooting
                title="Why a Ria referral discount may not appear"
                items={[
                  {
                    problem: "The friend was not eligible",
                    possibleReason:
                      "The friend was not resident in France, the United States, or Australia, or already had a Ria account or transfer history.",
                    suggestedAction:
                      "Compare the account with Ria's new-customer and residence rules."
                  },
                  {
                    problem: "The code was entered too late",
                    possibleReason:
                      "The friend completed the first transfer before entering the referral code.",
                    suggestedAction:
                      "A referral code cannot be applied retroactively or moved to a later transfer."
                  },
                  {
                    problem: "The amount was too low",
                    possibleReason:
                      "The single transfer was below EUR 50, USD 50, or AUD 100 for the applicable residence.",
                    suggestedAction:
                      "Check the country-specific minimum shown by Ria before sending."
                  },
                  {
                    problem: "The transfer did not qualify",
                    possibleReason:
                      "The transfer was domestic, canceled, unsuccessful, or not yet paid to the recipient.",
                    suggestedAction:
                      "Check the transfer status and the international-transfer requirement."
                  },
                  {
                    problem: "The referrer's reward is pending",
                    possibleReason:
                      "Ria says the reward may take up to two days after the friend's transfer is paid to the recipient.",
                    suggestedAction:
                      "Wait for that period, then contact Ria support if the account still meets every condition."
                  }
                ]}
              />

              <ProviderMiniFAQ items={pageFaq} title="Ria referral FAQ" />

              <section className="rounded-lg border bg-card p-5 shadow-sm">
                <h2 className="text-xl font-semibold leading-tight">
                  Sources and verification methodology
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  BonusFoundry checked Ria&apos;s Help Center referral overview,
                  reward-claim instructions, missing-discount guidance,
                  promo-code instructions, and France referral page on 5
                  September 2026. Country rewards and conditions below are
                  attributed to Ria; code 9RMU-ENB7 is publisher-supplied and
                  was not independently identified by Ria&apos;s public pages.
                  Offers can change, so confirm the offer shown in the Ria app
                  before sending. Ria&apos;s France page uses a combined USD/EUR
                  example in its FAQ, while Ria&apos;s newer Help Center country
                  table lists the referred friend&apos;s United States reward as
                  USD 10; BonusFoundry therefore uses the newer,
                  country-specific Help Center value for the United States. Read
                  the{" "}
                  <Link href="/about" className="font-medium text-primary">
                    BonusFoundry Editorial Team page
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/editorial-policy"
                    className="font-medium text-primary"
                  >
                    editorial policy
                  </Link>
                  .
                </p>
              </section>

              <OfficialSources
                title="Official Ria sources"
                sources={[
                  {
                    name: "Ria's refer-a-friend program",
                    type: "Official Ria Help Center",
                    url: riaSources.program,
                    reviewedInformation:
                      "Eligible countries, age, referrer requirement, country reward table, international-transfer rule, reward timing, multiple referrals, and cancellation handling. Ria page updated 18 August 2026.",
                    reviewDate
                  },
                  {
                    name: "Ria France refer-a-friend page",
                    type: "Official Ria France page",
                    url: riaSources.france,
                    reviewedInformation:
                      "France EUR 20 friend and referrer credits, EUR 50 qualifying amount, and app referral steps.",
                    reviewDate
                  },
                  {
                    name: "How a referred Ria customer claims the reward",
                    type: "Official Ria Help Center",
                    url: riaSources.claim,
                    reviewedInformation:
                      "Code-entry timing, Add promo code option, new-customer transfer rules, country rewards, one-transfer minimum, and cancellation handling. Ria page updated 18 August 2026.",
                    reviewDate
                  },
                  {
                    name: "Why a Ria referral discount may not be received",
                    type: "Official Ria Help Center",
                    url: riaSources.missing,
                    reviewedInformation:
                      "Residence, account-history, code-timing, minimum, domestic-transfer, cancellation, and successful-completion failure reasons. Ria page updated 21 July 2026.",
                    reviewDate
                  },
                  {
                    name: "How to use a Ria promo code",
                    type: "Official Ria Help Center",
                    url: riaSources.promo,
                    reviewedInformation:
                      "App and website promo-code entry before transfer confirmation. Ria page updated 11 March 2025.",
                    reviewDate
                  }
                ]}
              />

              <RelatedResources links={relatedResources} />
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

function RiaCountryRewardTable() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Ria referral rewards by country
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Ria publishes different rewards and minimum transfers according to
        residence. Currency labels are part of each amount and should not be
        combined across countries.
      </p>
      <div className="mt-4 max-w-full overflow-x-auto rounded-lg border bg-card shadow-sm">
        <Table className="min-w-[760px]">
          <caption className="border-b bg-muted/30 px-4 py-3 text-left text-sm font-medium text-foreground">
            Ria refer-a-friend rewards and minimum qualifying international
            transfer by residence
          </caption>
          <thead>
            <TableRow>
              <TableHead className="w-auto">Residence</TableHead>
              <TableHead className="w-auto">Referrer reward</TableHead>
              <TableHead className="w-auto">Referred friend reward</TableHead>
              <TableHead className="w-auto">
                Minimum qualifying transfer
              </TableHead>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableHead scope="row" className="w-auto">
                France
              </TableHead>
              <TableCell>
                EUR 20 off the referrer&apos;s next transfer
              </TableCell>
              <TableCell>EUR 20 off the friend&apos;s first transfer</TableCell>
              <TableCell>EUR 50</TableCell>
            </TableRow>
            <TableRow>
              <TableHead scope="row" className="w-auto">
                United States
              </TableHead>
              <TableCell>
                USD 20 off the referrer&apos;s next transfer
              </TableCell>
              <TableCell>USD 10 off the friend&apos;s first transfer</TableCell>
              <TableCell>USD 50</TableCell>
            </TableRow>
            <TableRow>
              <TableHead scope="row" className="w-auto">
                Australia
              </TableHead>
              <TableCell>
                AUD 30 off the referrer&apos;s next transfer
              </TableCell>
              <TableCell>AUD 30 off the friend&apos;s first transfer</TableCell>
              <TableCell>AUD 100</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </div>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">
        Source:{" "}
        <a
          href={riaSources.program}
          className="font-medium text-primary"
          rel="noreferrer"
          target="_blank"
        >
          Ria&apos;s official refer-a-friend Help Center article
        </a>
        , checked 5 September 2026. Confirm the offer shown in the Ria app
        because amounts, availability, and conditions can change.
      </p>
    </section>
  );
}

function riaReferralFaq(): FAQItem[] {
  return [
    {
      question: "What is the Ria referral code?",
      answer:
        "BonusFoundry's publisher supplied Ria referral code 9RMU-ENB7. Ria's public pages confirm the referral-program rules but do not independently identify this individual code."
    },
    {
      question: "How much is the Ria referral reward in France?",
      answer:
        "In France, Ria gives the referred friend EUR 20 off the first qualifying international transfer and the referrer EUR 20 off the next qualifying international transfer."
    },
    {
      question: "What is the minimum transfer for the Ria referral offer?",
      answer:
        "The minimum qualifying international transfer is EUR 50 for France residents, USD 50 for United States residents, or AUD 100 for Australia residents, sent in one transfer."
    },
    {
      question:
        "Which countries are eligible for Ria's refer-a-friend program?",
      answer:
        "Ria lists France, the United States, and Australia. Both the referrer and referred friend must live in one of these eligible countries and be at least 18."
    },
    {
      question: "When must a new customer enter the Ria referral code?",
      answer:
        "The new Ria customer must enter the referral code during account creation or while preparing the first transfer, before completing that first transfer."
    },
    {
      question: "When does the Ria referrer receive the reward?",
      answer:
        "Ria applies the referrer's discount to the next qualifying international transfer. It may take up to two days to appear after the friend's transfer is paid to the recipient."
    },
    {
      question: "Can a Ria referral code be added after the first transfer?",
      answer:
        "No. Ria says the referral code cannot be applied after the first transfer or saved for a later transfer."
    },
    {
      question: "What happens if the qualifying Ria transfer is canceled?",
      answer:
        "A canceled transfer does not qualify. If a transfer using a referral discount is canceled, Ria says the discount becomes available for the next transfer if that transfer qualifies."
    },
    {
      question: "Why did a Ria referral discount not appear?",
      answer:
        "Common reasons are ineligible residence, an existing Ria account or transfer history, late code entry, a transfer below the country minimum, a domestic transfer, or a canceled or unsuccessful transfer."
    },
    {
      question: "Can an existing Ria customer use a referral code?",
      answer:
        "Not as the referred friend. Ria says the friend must be a new customer with no previous Ria account or transfer history."
    }
  ];
}

function TaptapSendReferralPage({ provider, authority, guides }: {
  provider: Provider;
  authority: ProviderAuthority;
  guides: { slug: string; title: string; description: string }[];
}) {
  return <TaptapSendPage links={buildTaptapRelatedResources(provider, authority, guides)} />;
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

function referralPageMetadata(provider: Provider) {
  if (provider.slug === "sendwave") return sendwaveMetadata;
  const providerName = referralMetadataProviderName(provider);

  if (provider.slug === "ria") {
    return {
      title: "Ria Referral Code 2026: Rewards & Minimum Transfer",
      description:
        "Ria referral code 9RMU-ENB7: France, United States and Australia rewards, minimum transfers, eligibility and timing. Verified September 2026."
    };
  }

  if (provider.slug === "taptap-send") return taptapMetadata;

  if (provider.slug === "lemfi") {
    return {
      title: "LemFi Referral Code SALABGWQ — €10 / $10 Bonus",
      description:
        "Use LemFi referral code SALABGWQ to get a €10 or $10 bonus after a qualifying first transfer of at least €100 or $100."
    };
  }

  if (provider.referralCode) {
    return {
      title: `${providerName} Referral Code ${provider.referralCode} — Variable Reward`,
      description: `Use ${providerName} referral code ${provider.referralCode} only when ${providerName} accepts it in the live flow. Reward terms vary by country, campaign, route, and payout method.`
    };
  }

  if (hasOwnedReferralLink(provider)) {
    return {
      title: `${providerName} Referral Program — Invite Link`,
      description: `Use the BonusFoundry ${providerName} referral link before signup. Reward terms depend on ${providerName}'s current country, account, product, and transfer rules.`
    };
  }

  if (provider.slug === "moneygram") {
    return {
      title: "MoneyGram Referral Program — Invite Friends Guide",
      description:
        "MoneyGram's US Invite Friends page describes a $20 new-customer offer after a qualifying $50+ first transfer, limited to eligible US transfers."
    };
  }

  if (provider.slug === "xe") {
    return {
      title: "Xe Referral Program — Refer a Friend Guide",
      description:
        "Xe's US Refer a Friend page describes a $50 referrer reward and gift-card choice when the friend's transfer qualifies. Check the live Xe flow for local terms."
    };
  }

  return {
    title: `${providerName} Referral Program and Promo Guide`,
    description: `${providerName} does not have a separate BonusFoundry referral code listed. Check the provider's live flow for current referral, promo, or first-transfer terms.`
  };
}

function referralMetadataProviderName(provider: Provider) {
  if (provider.slug === "taptap-send") return "TapTap Send";
  return provider.name;
}

function referralOfferEntry(provider: Provider) {
  if (provider.referralCode) return `BonusFoundry referral code: ${provider.referralCode}`;
  if (hasOwnedReferralLink(provider)) return `BonusFoundry referral link is listed for ${provider.name}.`;
  return `${provider.name} does not have a separate BonusFoundry referral code listed. Use the provider's own live promo, referral, or first-transfer offer when it appears.`;
}

function referralAnswer(provider: Provider, authority: ProviderAuthority) {
  const lastVerified = formatDate(authority.lastManualReview);

  if (provider.referralCode) {
    return `${provider.name} referral code: ${provider.referralCode}. ${authority.referral.welcomeBonus} Apply it before signup or the first qualifying transfer when ${provider.name} shows a code field. Last reviewed by BonusFoundry: ${lastVerified}.`;
  }

  if (hasOwnedReferralLink(provider)) {
    return `${provider.name} uses a BonusFoundry-owned referral link rather than a manual BonusFoundry code. ${authority.referral.welcomeBonus} Open the link before signup, then use the same provider flow until the qualifying action is complete. Last reviewed by BonusFoundry: ${lastVerified}.`;
  }

  return `${provider.name} does not have a separate BonusFoundry referral code on this page. ${provider.currentOffer} Last reviewed by BonusFoundry: ${lastVerified}.`;
}

function applicationTiming(provider: Provider) {
  if (provider.referralCode) return "Enter the code before signup is completed or before the first qualifying transfer when the provider shows a code field.";
  if (hasOwnedReferralLink(provider)) return "Open the referral link before creating the account.";
  return "Apply any provider promo, referral, or first-transfer offer before checkout or account creation when the provider displays it.";
}

function whereToEnterCodeSteps(provider: Provider) {
  if (provider.referralCode) return ["Signup or first-transfer flow", "Referral Code or Promo Code field", "Before the qualifying transfer"];
  if (hasOwnedReferralLink(provider)) return ["BonusFoundry referral link", "Provider signup flow", "Before account creation"];
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
    (item) => !/official|BonusFoundry-owned|does .* have .* here/i.test(`${item.question} ${item.answer}`)
  );

  return [
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
    ...filteredProviderFaq
  ];
}

function buildOfficialSources(authority: ProviderAuthority) {
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

function referralRewardAnswer(provider: Provider, authority: ProviderAuthority) {
  const rewardText = authority.referral.welcomeBonus;
  if (rewardText === `BonusFoundry lists ${provider.referralCode} as the ${provider.name} referral code.`) {
    return `BonusFoundry has not verified a separate public reward amount for ${provider.referralCode}. Use the code only if ${provider.name} accepts it in the live flow and shows matching offer terms.`;
  }

  return rewardText;
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
