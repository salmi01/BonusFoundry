import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { CopyCodeButton } from "@/components/copy-code-button";
import { JsonLd } from "@/components/json-ld";
import { ReferralBox } from "@/components/referral-box";
import { ProviderCorridorLinks } from "@/components/provider-corridor-links";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Provider } from "@/data/providers";
import {
  sendwaveCode,
  sendwaveSources,
  sendwaveReferralMetadata,
  sendwaveReferralUpdatedAt,
  sendwaveReferralTermsCheckedAt,
  sendwaveOfferEvidenceAt,
  sendwaveQuickAnswer,
  sendwaveReferralMinimum,
  sendwaveReferralExpiry,
  sendwaveFriendSteps,
  sendwaveReferrerSteps,
  sendwaveReferralFaq,
  sendwaveTroubleshooting
} from "@/data/sendwave-referral";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

const path = "/providers/sendwave/referral-code";

function Source({
  kind,
  children
}: {
  kind: keyof typeof sendwaveSources;
  children: ReactNode;
}) {
  return (
    <a
      className="font-medium text-primary underline underline-offset-4"
      href={sendwaveSources[kind]}
    >
      {children}
    </a>
  );
}

function Section({
  title,
  id,
  children
}: {
  title: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="min-w-0 rounded-lg border bg-card p-5 shadow-sm"
    >
      <h2 id={`${id}-heading`} className="text-xl font-semibold leading-tight">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground [overflow-wrap:anywhere]">
        {children}
      </div>
    </section>
  );
}

export function SendwaveReferralPage({ provider }: { provider: Provider }) {
  const facts: [string, ReactNode][] = [
    [
      "Referral code",
      `${sendwaveCode} — personal code supplied by BonusFoundry’s publisher`
    ],
    [
      "New customer reward",
      "€20 credit for the friend who enters I4H9G at first signup, shown in the app screenshot reviewed on October 25, 2026. Eligibility and qualifying-transfer conditions apply."
    ],
    [
      "Referrer reward",
      "€20 credit once the friend’s first transfer is delivered successfully, toward the referrer’s next Sendwave transfer (October 25 screenshot)."
    ],
    ["Minimum qualifying transfer", sendwaveReferralMinimum],
    [
      "Eligible sending countries",
      "The publisher previously confirmed a France-registered account. The October 25 screenshot does not display a country or eligible-country list; check your app."
    ],
    [
      "Eligible destinations",
      "The October 25 screenshot does not identify a destination. Check your exact route; supported transfers can still be excluded from referral rewards."
    ],
    [
      "When to enter the code",
      "During signup, before completing the first transaction. Confirm acceptance in the Sendwave app."
    ],
    [
      "Reward type",
      "Promotional transfer credit; no cash payout to a bank account is documented."
    ],
    ["Reward validity", sendwaveReferralExpiry],
    [
      "Last verified",
      <>
        Public rules:{" "}
        <time dateTime={sendwaveReferralTermsCheckedAt}>
          {formatDate(sendwaveReferralTermsCheckedAt)}
        </time>
        . App screenshot reviewed:{" "}
        <time dateTime={sendwaveOfferEvidenceAt}>
          {formatDate(sendwaveOfferEvidenceAt)}
        </time>
        . Code and both €20 rewards are visible in the supplied screenshot.
      </>
    ],
    [
      "Official sources",
      <>
        <Source kind="terms">Referral terms</Source> (eligibility and credit
        rules); <Source kind="program">program explanation</Source> (rewards
        vary by country and promotion). These do not publicly validate I4H9G or
        a fixed €20 reward.
      </>
    ]
  ];
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: "Sendwave", item: "/providers/sendwave" },
          { name: "Referral code", item: path }
        ])}
      />
      <JsonLd
        data={{
          ...webPageJsonLd({
            ...sendwaveReferralMetadata,
            path,
            updatedAt: sendwaveReferralUpdatedAt
          }),
          "@id": `${siteConfig.url}${path}#webpage`,
          isPartOf: { "@id": `${siteConfig.url}/#website` },
          about: {
            "@type": "Organization",
            name: "Sendwave",
            url: "https://www.sendwave.com/"
          },
          citation: [
            sendwaveSources.terms,
            sendwaveSources.program,
            sendwaveSources.promo
          ]
        }}
      />
      <Container className="py-6 sm:py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/providers/sendwave", label: "Sendwave" },
            { href: path, label: "Referral code" }
          ]}
        />
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="min-w-0">
            <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">
              Sendwave Referral Code {sendwaveCode}: €20 Credit &amp;
              Eligibility
            </h1>
            <p className="mt-4 leading-7 text-muted-foreground">
              Sendwave is a money transfer provider. This independent
              BonusFoundry guide explains the publisher’s personal referral
              offer, who may qualify and how to check credit.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              By{" "}
              <Link
                className="font-medium text-primary underline"
                href="/about"
              >
                BonusFoundry Editorial Team
              </Link>{" "}
              · Updated{" "}
              <time dateTime={sendwaveReferralUpdatedAt}>
                {formatDate(sendwaveReferralUpdatedAt)}
              </time>
            </p>
            <div className="mt-6 grid min-w-0 grid-cols-1 gap-5">
              <Section id="sendwave-quick-answer" title="Quick answer">
                <p>{sendwaveQuickAnswer}</p>
                <p>
                  <a
                    className="font-medium text-primary underline"
                    href="#sendwave-sources"
                  >
                    Offer evidence and verification limits
                  </a>{" "}
                  · <Source kind="terms">Official eligibility rules</Source>
                </p>
              </Section>
              <Section id="sendwave-code" title="Sendwave referral code">
                <p className="font-mono text-3xl font-bold tracking-wide text-foreground">
                  {sendwaveCode}
                </p>
                <CopyCodeButton
                  code={sendwaveCode}
                  label="Copy Sendwave code"
                />
                <p>
                  Enter the code in the app during signup, before completing
                  your first transaction. Check that Sendwave accepts it and
                  shows the reward for your account.
                </p>
                <p className="rounded-md border bg-muted/50 p-3">
                  <strong className="text-foreground">
                    Referral disclosure:
                  </strong>{" "}
                  BonusFoundry may receive €20 transfer credit if you use this
                  code and your first qualifying transfer is successfully
                  delivered under the pictured offer’s conditions. BonusFoundry
                  is independent of Sendwave and is not endorsed by it.
                </p>
              </Section>
              <section
                className="min-w-0 overflow-hidden rounded-lg border bg-card shadow-sm"
                aria-labelledby="sendwave-facts"
              >
                <h2 id="sendwave-facts" className="p-5 text-xl font-semibold">
                  Referral offer at a glance
                </h2>
                <Table className="table-fixed" aria-labelledby="sendwave-facts">
                  <caption className="sr-only">
                    Sendwave I4H9G: October 25 app offer and public referral
                    rules
                  </caption>
                  <tbody>
                    {facts.map(([fact, answer]) => (
                      <TableRow key={fact}>
                        <TableHead scope="row">{fact}</TableHead>
                        <TableCell>{answer}</TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </section>
              <Section
                id="sendwave-program"
                title="How the Sendwave referral program works"
              >
                <p>
                  A new friend enters a personal code before their first
                  transaction and completes an eligible transfer. The referrer
                  then receives the credit shown in their app.{" "}
                  <Source kind="terms">Sendwave’s referral terms</Source> set
                  these rules; its{" "}
                  <Source kind="program">program explanation</Source> says both
                  people can receive credit and amounts vary by country and
                  promotion.
                </p>
                <h3 className="font-semibold text-foreground">
                  For the referred friend
                </h3>
                <ol className="list-decimal space-y-2 pl-5">
                  {sendwaveFriendSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <h3 className="font-semibold text-foreground">
                  For the referrer
                </h3>
                <ol className="list-decimal space-y-2 pl-5">
                  {sendwaveReferrerSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </Section>
              <Section
                id="sendwave-eligibility"
                title="Eligibility requirements"
              >
                <p>
                  Only new users with no previous completed Sendwave app
                  transaction may use a referral code, according to the{" "}
                  <Source kind="terms">official referral rules</Source>. Code
                  entry alone does not establish eligibility.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-foreground">
                      Account history:
                    </strong>{" "}
                    a customer who has already completed a Sendwave transaction
                    cannot qualify as the referred new user.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Sending country and destination:
                    </strong>{" "}
                    Sendwave may restrict either country or their combination.
                    The supplied screenshot does not list eligible countries or
                    destinations; check the conditions for your own account.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Minimum transfer:
                    </strong>{" "}
                    {sendwaveReferralMinimum}
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Identity verification:
                    </strong>{" "}
                    Sendwave may request Know Your Customer (KYC) documents
                    before processing a transaction or applying a reward.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      First qualifying transaction:
                    </strong>{" "}
                    enter the code before completion and meet the conditions
                    displayed for your first transfer. Check successful delivery
                    in the app.
                  </li>
                </ul>
                <p>
                  If you have registered but never sent money, ask Sendwave to
                  confirm account eligibility and how to enter the code before
                  proceeding.
                </p>
              </Section>
              <Section
                id="sendwave-rewards"
                title="Referral rewards and credit"
              >
                <p>
                  The €20 shown in the publisher’s app screenshot is promotional
                  transfer credit. It does not document a cash payment to a bank
                  account. The <Source kind="terms">public terms</Source>{" "}
                  describe referral credit toward future Sendwave transfers.
                </p>
                <h3 className="font-semibold text-foreground">
                  When credit is awarded
                </h3>
                <p>
                  The October 25 screenshot links the referrer’s €20 to
                  successful delivery of the friend’s first qualifying transfer,
                  for use on the referrer’s next transfer. A separate deadline
                  for the new user’s credit is not shown in the screenshot.
                  Check the app’s credit balance and redemption instructions; no
                  fixed processing time is verified here.
                </p>
                <h3 className="font-semibold text-foreground">
                  Using credit and checking expiry
                </h3>
                <p>{sendwaveReferralExpiry}</p>
                <p>
                  Sendwave may cap credit used on a transfer at the transfer
                  amount and carry unused credit forward. Fees and exchange-rate
                  costs can still apply. Compare the full cost and recipient
                  amount before paying.
                </p>
                <p>
                  Under the referral terms, Sendwave may withhold, cancel or
                  reclaim credit for fraud, abuse or rule violations, and may
                  change, suspend or end the program.
                </p>
              </Section>
              <Section
                id="sendwave-promo"
                title="Referral code, bonus code or promo code?"
              >
                <p>
                  I4H9G is the publisher’s personal referral code. If you
                  searched for a Sendwave bonus code or promo code, check which
                  type of offer your app accepts. Separate{" "}
                  <Source kind="promo">promo-code promotion terms</Source>{" "}
                  govern campaign codes; their entry field and reward rules
                  should not be assumed to apply to this personal referral
                  offer.
                </p>
              </Section>
              <section
                id="sendwave-troubleshooting"
                className="min-w-0 overflow-hidden rounded-lg border bg-card shadow-sm"
                aria-labelledby="sendwave-troubleshooting-heading"
              >
                <h2
                  id="sendwave-troubleshooting-heading"
                  className="p-5 text-xl font-semibold"
                >
                  Troubleshooting Sendwave referral credit
                </h2>
                <p className="px-5 pb-4 text-sm leading-6 text-muted-foreground">
                  Check the conditions below if the code is rejected or credit
                  is missing. These are possible explanations based on{" "}
                  <Source kind="terms">published referral conditions</Source>,
                  not diagnoses of your account.
                </p>
                <Table
                  className="table-fixed"
                  aria-labelledby="sendwave-troubleshooting-heading"
                >
                  <caption className="sr-only">
                    Problem, possible reason and suggested action for Sendwave
                    referrals
                  </caption>
                  <thead>
                    <TableRow>
                      <TableHead scope="col" className="w-1/4 px-2 sm:px-4">
                        Problem
                      </TableHead>
                      <TableHead scope="col" className="w-1/3 px-2 sm:px-4">
                        Possible reason
                      </TableHead>
                      <TableHead scope="col" className="w-auto px-2 sm:px-4">
                        Suggested action
                      </TableHead>
                    </TableRow>
                  </thead>
                  <tbody>
                    {sendwaveTroubleshooting.map((row) => (
                      <TableRow key={row.problem}>
                        <TableHead scope="row" className="px-2 sm:px-4">
                          {row.problem}
                        </TableHead>
                        <TableCell className="px-2 sm:px-4">
                          {row.reason}
                        </TableCell>
                        <TableCell className="px-2 sm:px-4">
                          {row.action}
                        </TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
                <p className="p-5 text-sm leading-6 text-muted-foreground">
                  For account-specific help, use Sendwave’s in-app chat or its{" "}
                  <a
                    href="https://www.sendwave.com/en-us/support"
                    className="font-medium text-primary underline"
                  >
                    official support page
                  </a>
                  . Keep the offer screenshot, code and transfer reference.
                  Support must determine whether a reward is due.
                </p>
              </section>
              <Section id="sendwave-faq" title="Sendwave referral code FAQ">
                {sendwaveReferralFaq.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-semibold text-foreground">
                      {item.question}
                    </h3>
                    <p className="mt-1">{item.answer}</p>
                  </div>
                ))}
              </Section>
              <Section
                id="sendwave-sources"
                title="Sources and verification methodology"
              >
                <p>
                  BonusFoundry distinguishes public program rules from the
                  publisher’s personal app offer. The public pages were
                  retrieved and reviewed on{" "}
                  <time dateTime={sendwaveReferralTermsCheckedAt}>
                    {formatDate(sendwaveReferralTermsCheckedAt)}
                  </time>
                  . The publisher’s new app screenshot was also reviewed on
                  October 25, 2026.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <Source kind="terms">
                      Sendwave referral-program terms
                    </Source>{" "}
                    — new-user history, code timing, successful first
                    transaction, possible country and minimum restrictions,
                    verification, credit use and 12-month validity unless
                    otherwise specified.
                  </li>
                  <li>
                    <Source kind="program">
                      Sendwave referral-program explanation
                    </Source>{" "}
                    — personal codes, rewards for both participants and
                    variation by country and promotion.
                  </li>
                  <li>
                    <Source kind="promo">
                      Sendwave promo-code promotion terms
                    </Source>{" "}
                    — separate campaign rules, used here only to distinguish
                    promo codes from the personal referral program.
                  </li>
                </ul>
                <h3 className="font-semibold text-foreground">
                  App screenshot reviewed October 25, 2026
                </h3>
                <p>
                  The publisher supplied a Sendwave “Refer a Friend” screenshot
                  reviewed on{" "}
                  <time dateTime={sendwaveOfferEvidenceAt}>
                    {formatDate(sendwaveOfferEvidenceAt)}
                  </time>
                  . It shows code I4H9G, €20 credit for the friend entering it
                  at first signup, and €20 for the referrer once the friend’s
                  first transfer is delivered successfully, toward the
                  referrer’s next Sendwave transfer. The publisher previously
                  confirmed a France-registered account; the screenshot itself
                  does not display a country.
                </p>
                <h3 className="font-semibold text-foreground">
                  What is not independently verified
                </h3>
                <p>
                  Acceptance of I4H9G on a new account and a completed reward
                  payout were not independently tested. The screenshot does not
                  show a numeric minimum, a destination list, a separate
                  new-user credit deadline, an offer expiry date or availability
                  in every country. Public terms do not identify this personal
                  code or promise €20 for every account. Confirm your live offer
                  before sending money.
                </p>
                <p>
                  <Link
                    className="font-medium text-primary underline"
                    href="/editorial-policy"
                  >
                    Editorial policy
                  </Link>{" "}
                  ·{" "}
                  <Link
                    className="font-medium text-primary underline"
                    href="/research-methodology"
                  >
                    Research methodology
                  </Link>{" "}
                  ·{" "}
                  <Link
                    className="font-medium text-primary underline"
                    href="/disclosure"
                  >
                    Full referral disclosure
                  </Link>
                </p>
              </Section>
              <ProviderCorridorLinks provider={provider} />
              <Section
                id="sendwave-resources"
                title="Compare transfers and understand referral offers"
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <Link
                      className="font-medium text-primary underline"
                      href="/providers/sendwave"
                    >
                      Sendwave provider review
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-primary underline"
                      href="/from/france"
                    >
                      Compare money transfer apps from France
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-primary underline"
                      href="/providers"
                    >
                      Compare money transfer referral offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-primary underline"
                      href="/guides/how-referral-codes-work"
                    >
                      How referral codes work
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-primary underline"
                      href="/guides/why-bonus-was-not-received"
                    >
                      Check a missing welcome bonus
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-medium text-primary underline"
                      href="/guides/how-to-compare-welcome-bonuses-between-transfer-apps"
                    >
                      Compare welcome bonuses and the full transfer cost
                    </Link>
                  </li>
                </ul>
              </Section>
            </div>
          </article>
          <div className="min-w-0">
            <ReferralBox
              provider={{
                ...provider,
                welcomeBonus:
                  "The app screenshot reviewed on October 25, 2026 shows €20 credit for an eligible new user entering I4H9G at first signup. Complete a qualifying first transfer and confirm the conditions in your app."
              }}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
