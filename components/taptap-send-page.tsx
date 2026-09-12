import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { CopyCodeButton } from "@/components/copy-code-button";
import { JsonLd } from "@/components/json-ld";
import { ProviderCorridorLinks } from "@/components/provider-corridor-links";
import {
  LastVerified,
  RelatedResources,
  type LinkItem
} from "@/components/ai-content";
import {
  taptapOffer,
  taptapSources,
  taptapSource,
  taptapSummary,
  taptapDisclosure,
  taptapFriendReward,
  taptapReferrerReward,
  taptapMinimum,
  taptapMetadata,
  taptapEligibility,
  taptapRewardRules,
  taptapFaq,
  taptapProvider,
  type TaptapSourceKey
} from "@/data/taptap-send";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

function Source({ name }: { name: TaptapSourceKey }) {
  const source = taptapSource(name);
  return (
    <a
      href={source.url}
      className="font-medium text-primary underline underline-offset-4"
    >
      {source.label}
    </a>
  );
}

function Section({
  title,
  children,
  id
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="min-w-0 rounded-lg border bg-card p-4 shadow-sm sm:p-6"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground [overflow-wrap:anywhere]">
        {children}
      </div>
    </section>
  );
}

export function TaptapOfferFacts() {
  const rows = [
    ["Referral code shown in the owner's app", taptapOffer.code],
    [
      "Referred friend / new customer",
      `${taptapFriendReward} on the first qualifying transfer (captured offer)`
    ],
    [
      "Referrer / code owner",
      `${taptapReferrerReward} per qualifying referral (captured offer)`
    ],
    ["Minimum transfer", taptapMinimum],
    ["When to enter the code", "Before confirming the first transfer"],
    [
      "Offer scope",
      "Depends on the sending country and destination; screenshot scope not shown"
    ],
    [
      "Code or campaign expiry",
      "Not shown; do not confuse with the 90-day reward-credit expiry"
    ],
    ["Owner's evidence reviewed", formatDate(taptapOffer.evidenceReviewedAt)],
    ["Official rules checked", formatDate(taptapOffer.officialCheckedAt)]
  ];
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border bg-card">
      <table className="w-full table-fixed border-collapse text-left text-sm [overflow-wrap:anywhere]">
        <caption className="bg-muted px-4 py-3 text-left font-semibold text-foreground">
          Verified offer facts: code owner’s EUR offer
        </caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-t align-top">
              <th
                scope="row"
                className="w-2/5 bg-muted/40 px-3 py-3 font-medium sm:px-4"
              >
                {label}
              </th>
              <td className="px-3 py-3 leading-6 text-muted-foreground sm:px-4">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TaptapSendPage({
  overview = false,
  links = []
}: {
  overview?: boolean;
  links?: LinkItem[];
}) {
  const path = overview
    ? "/providers/taptap-send"
    : "/providers/taptap-send/referral-code";
  const title = overview
    ? "Taptap Send: countries, fees and transfer options"
    : `Taptap Send Referral Code ${taptapOffer.code}: Bonus and Eligibility`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Taptap Send", item: "/providers/taptap-send" },
    ...(!overview ? [{ name: "Referral code", item: path }] : [])
  ];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={{
          ...webPageJsonLd({
            title,
            description: overview
              ? taptapProvider.description
              : taptapMetadata.description,
            path,
            updatedAt: taptapOffer.contentUpdatedAt
          }),
          about: {
            "@type": "Organization",
            name: "Taptap Send",
            url: "https://www.taptapsend.com/"
          }
        }}
      />
      <Container className="py-6 sm:py-10">
        <Breadcrumb
          items={breadcrumbs.map((b) => ({ href: b.item, label: b.name }))}
        />
        <article className="mx-auto w-full min-w-0 max-w-4xl">
          <h1 className="text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {overview ? taptapProvider.description : taptapSummary}
          </p>
          <div className="mt-4">
            <CopyCodeButton
              code={taptapOffer.code}
              label="Copy referral code"
            />
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Disclosure: {taptapDisclosure}
            </p>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Offer evidence: {formatDate(taptapOffer.evidenceReviewedAt)}.
            Official rules checked: {formatDate(taptapOffer.officialCheckedAt)}.{" "}
            <Source name="referrals" /> · <Source name="terms" />
          </p>
          <div className="mt-5">
            <LastVerified
              date={formatDate(taptapOffer.officialCheckedAt)}
              label="Last verified"
              contentUpdatedAt={formatDate(taptapOffer.contentUpdatedAt)}
            />
          </div>
          <div className="mt-6 grid min-w-0 grid-cols-1 gap-5">
            {overview ? (
              <Section title="Referral offer at a glance">
                <p>{taptapProvider.welcomeBonus}</p>
                <p>
                  <Link
                    href="/providers/taptap-send/referral-code"
                    className="font-medium text-primary underline"
                  >
                    How to use Taptap Send referral code {taptapOffer.code}
                  </Link>{" "}
                  explains the steps, qualifying conditions and owner’s
                  evidence.
                </p>
              </Section>
            ) : (
              <>
                <TaptapOfferFacts />
                <Section title="How the Taptap Send referral program works">
                  <h3 className="font-semibold text-foreground">
                    For the referred friend
                  </h3>
                  <ol className="list-decimal space-y-2 pl-5">
                    {taptapProvider.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <h3 className="font-semibold text-foreground">
                    For the referrer
                  </h3>
                  <p>
                    Open Referrals using the gift icon, share your personal
                    code, and wait for the new friend to complete the required
                    action. Check your account balance for the reward. See{" "}
                    <Source name="referrals" /> and <Source name="terms" />.
                  </p>
                  <p>
                    A personal referral code comes from an existing customer. A
                    marketing promo code comes from the Taptap Send team and is
                    entered through ADD PROMO CODE on the confirmation screen.
                    Neither can be added after confirmation, and they cannot be
                    combined.
                  </p>
                </Section>
                <Section title="Eligibility requirements">
                  <ul className="list-disc space-y-2 pl-5">
                    {taptapEligibility.map((rule) => (
                      <li key={rule}>{rule}</li>
                    ))}
                  </ul>
                  <p>
                    The captured offer mentions a minimum without showing its
                    amount. The legal terms use both “equal to or greater” and
                    “exceed” when discussing thresholds; confirm the current
                    requirement shown in your app. Additional campaign terms can
                    take precedence. <Source name="terms" />.
                  </p>
                </Section>
                <Section title="How Taptap Send applies referral rewards">
                  <ul className="list-disc space-y-2 pl-5">
                    {taptapRewardRules.map((rule) => (
                      <li key={rule}>{rule}</li>
                    ))}
                  </ul>
                  <p>
                    The owner’s screen describes {taptapFriendReward} on the
                    friend’s first transfer; the legal terms describe account
                    credit after qualification. Inspect the first-transfer
                    preview rather than assuming instant payment or a cash
                    discount. <Source name="terms" />.
                  </p>
                  <p>
                    The Help Center excludes “wallet transfers” from bonus
                    application. It does not define that expression precisely
                    enough to conclude that every Mobile Money payout is
                    excluded. Ask support about your specific transfer.{" "}
                    <Source name="referrals" />.
                  </p>
                  <p>
                    <Link
                      href="/guides/how-to-use-taptap-send-bonus-credit"
                      className="text-primary underline"
                    >
                      Read the Taptap Send bonus-credit guide
                    </Link>{" "}
                    for balance use, failed-transfer recredit and expiry.
                  </p>
                </Section>
                <Section title="Why a referral code or bonus may not appear">
                  <ul className="list-disc space-y-2 pl-5">
                    {taptapProvider.missingBonus.map((rule) => (
                      <li key={rule}>{rule}</li>
                    ))}
                  </ul>
                  <p>
                    An earlier account, another code, a late code, a canceled
                    transfer or an unmet minimum can prevent qualification. Save
                    the offer and transfer receipt. <Source name="referrals" />{" "}
                    · <Source name="support" />.
                  </p>
                </Section>
              </>
            )}
            <ProviderCorridorLinks provider={taptapProvider} />
            <Section title="Countries, fees and availability">
              {overview ? (
                <>
                  <h3 className="font-semibold text-foreground">
                    Choose a sending market
                  </h3>
                  <p>
                    Start with Taptap Send’s <Source name="countries" /> to find
                    the registration rules for your residence. The published
                    guides cover Europe, the United States, UK, Canada,
                    Australia, UAE, Bahrain and Brazil. This service list does
                    not define the countries eligible for the owner’s EUR
                    referral offer.
                  </p>
                  <p>
                    In the <Source name="europe" /> guide, residence in a listed
                    country and an active local mobile number are required.
                    France, Belgium, Germany and Spain are examples, not an
                    exhaustive list. The <Source name="usa" /> guide requires
                    residence and physical presence in an available state when
                    opening the account. Nevada and the Virgin Islands are
                    currently excluded.
                  </p>
                  <h3 className="font-semibold text-foreground">
                    Compare payment and payout options
                  </h3>
                  <p>
                    Europe supports debit cards and selected bank or local
                    methods; examples include iDEAL/Wero in the Netherlands and
                    Klarna in Germany. US customers pay by debit card, with a
                    Taptap Send wallet available to eligible accounts. These are
                    sender payment methods. A recipient may receive into a bank
                    account, mobile wallet or at a cash-pickup location
                    depending on the destination. Use the Europe or US guide
                    above, then check the options displayed in your quote.
                  </p>
                  <h3 className="font-semibold text-foreground">
                    Review the complete quote
                  </h3>
                  <p>
                    Compare the fee, exchange rate, recipient amount and
                    delivery estimate together. A fee-free transfer can still
                    include an exchange-rate margin, and local providers may
                    charge handling or cashout fees. See <Source name="fees" />{" "}
                    and <Source name="rates" />. The <Source name="speed" />{" "}
                    guide explains why bank processing or verification may delay
                    delivery; an estimate is not an instant-arrival guarantee.
                  </p>
                  <p>
                    Consult Taptap Send’s <Source name="licenses" /> for the
                    entity serving your market. Published permissions do not
                    make a payment institution a bank or guarantee every
                    transfer outcome. For an account or transfer issue, use{" "}
                    <Source name="support" />.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The <Source name="countries" /> cover selected European
                    countries, the US, UK, Canada, Australia, UAE, Bahrain and
                    Brazil. Service availability does not establish eligibility
                    for the captured EUR offer.
                  </p>
                  <p>
                    <Source name="europe" /> lists specific countries, including
                    France, Belgium, Germany and Spain. It is not an all-Europe
                    offer. <Source name="usa" /> lists state restrictions;
                    Nevada and the Virgin Islands were unavailable when checked
                    on 8 September 2026.
                  </p>
                  <h3 className="font-semibold text-foreground">
                    Paying and receiving are different
                  </h3>
                  <p>
                    Sender payment methods include debit cards and selected
                    European bank/local options. Recipient delivery methods
                    include bank accounts, mobile wallets and cash pickup on
                    supported routes. Check both in the quote.{" "}
                    <Source name="europe" /> · <Source name="usa" />.
                  </p>
                  <h3 className="font-semibold text-foreground">
                    Cost and speed
                  </h3>
                  <p>
                    Fees depend on the sending country, destination, amount and
                    delivery method. No transfer fee does not mean no
                    exchange-rate cost. The app shows the fee, rate and
                    recipient amount before confirmation. <Source name="fees" />{" "}
                    · <Source name="rates" />.
                  </p>
                  <p>
                    Delivery estimates vary; payment checks, identity review and
                    bank processing can delay a transfer. Use the estimate and
                    Activity status in the app. <Source name="speed" />.
                  </p>
                  <p>
                    Taptap Send publishes its regulatory entities and
                    permissions on its <Source name="licenses" /> page. A
                    payment institution is not a bank, and regulation does not
                    guarantee every transfer outcome.
                  </p>
                </>
              )}
            </Section>
            <Section
              title={
                overview ? "Service questions" : "Taptap Send referral FAQ"
              }
            >
              {(overview ? taptapProvider.faq : taptapFaq).map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-1">{item.answer}</p>
                </div>
              ))}
            </Section>
            <Section
              title={
                overview
                  ? "Sources and service review"
                  : "How we verified this offer"
              }
              id="offer-evidence"
            >
              {overview ? (
                <p>
                  This overview uses the official sending-market, cost, delivery
                  and licensing sources below, checked on{" "}
                  {formatDate(taptapOffer.officialCheckedAt)}. For the personal
                  code’s first-party evidence, its limitations and qualification
                  steps, see the{" "}
                  <Link
                    href="/providers/taptap-send/referral-code#offer-evidence"
                    className="text-primary underline"
                  >
                    referral offer verification note
                  </Link>
                  .
                </p>
              ) : (
                <>
                  <p>
                    BonusFoundry reviewed the owner-supplied referral-screen
                    evidence dated 7 September 2026 and checked Taptap Send’s
                    Help Center and referral terms on 8 September 2026. The
                    verified transcription shows {taptapOffer.code},{" "}
                    {taptapFriendReward} for the friend and{" "}
                    {taptapReferrerReward} for the referrer. The original
                    screenshot is not yet published; these facts remain readable
                    here as text.
                  </p>
                  <p>
                    The screen does not show the exact minimum, eligible
                    countries or corridors, campaign expiry, or a completed
                    referral transaction. Confirm the offer for your route in
                    the app. In French, “code parrainage Taptap Send” describes
                    this personal referral code; a “code promo Taptap Send” may
                    instead refer to a team promotion.
                  </p>
                </>
              )}
              <p>
                Reviewed by the{" "}
                <Link href="/about" className="text-primary underline">
                  BonusFoundry Editorial Team
                </Link>
                . See our{" "}
                <Link
                  href="/editorial-policy"
                  className="text-primary underline"
                >
                  editorial policy
                </Link>
                .
              </p>
              <ul className="space-y-3">
                {taptapSources.map((source) => (
                  <li key={source.key}>
                    <Source name={source.key} /> — official update:{" "}
                    {source.updatedAt
                      ? formatDate(source.updatedAt)
                      : "not displayed"}
                    ; checked {formatDate(taptapOffer.officialCheckedAt)}.
                  </li>
                ))}
              </ul>
            </Section>
            <RelatedResources
              links={[
                {
                  href: overview
                    ? "/providers/taptap-send/referral-code"
                    : "/providers/taptap-send",
                  label: overview
                    ? `Use Taptap Send referral code ${taptapOffer.code}`
                    : "Taptap Send service overview"
                },
                {
                  href: "/guides/how-to-use-taptap-send-bonus-credit",
                  label: "How Taptap Send bonus credit works"
                },
                {
                  href: "/guides/how-to-claim-a-welcome-bonus",
                  label: "First-transfer bonus checklist"
                },
                {
                  href: "/guides/best-money-transfer-apps-to-morocco",
                  label: "Compare money transfer apps to Morocco"
                },
                ...links
              ]}
            />
          </div>
        </article>
      </Container>
    </>
  );
}
