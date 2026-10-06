import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { CopyCodeButton } from "@/components/copy-code-button";
import { JsonLd } from "@/components/json-ld";
import { ProviderMiniFAQ } from "@/components/ai-content";
import { ReferralBox } from "@/components/referral-box";
import { ProviderCorridorLinks } from "@/components/provider-corridor-links";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Provider } from "@/data/providers";
import {
  sendwaveCode,
  sendwaveEligibility,
  sendwaveExpiry,
  sendwaveFaq,
  sendwaveMetadata,
  sendwaveMinimum,
  sendwavePayout,
  sendwaveReviewedAt,
  sendwaveReward,
  sendwaveRewardEvidence,
  sendwaveSources,
  sendwaveSteps,
  sendwaveTermsReviewedAt,
  sendwaveTiming
} from "@/data/sendwave";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

const path = "/providers/sendwave/referral-code";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border bg-card p-5 shadow-sm">
      <h2 className="text-xl font-semibold leading-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function SendwaveReferralPage({ provider }: { provider: Provider }) {
  const facts = [
    ["Sendwave referral code", sendwaveCode],
    ["Eligible users", sendwaveEligibility],
    ["When to enter", "Before completing the first transaction"],
    ["Where to enter", "Sendwave app"],
    ["New-user bonus", "€20 transfer credit with an eligible first transfer"],
    [
      "Referrer credit",
      "€20 after the friend's first transfer is successfully delivered"
    ],
    ["Minimum transfer", sendwaveMinimum],
    ["Credit validity", sendwaveExpiry],
    [
      "Restrictions",
      "Country, transfer corridor, minimum transfer and KYC conditions may apply."
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
        data={webPageJsonLd({
          ...sendwaveMetadata,
          path,
          updatedAt: sendwaveReviewedAt
        })}
      />
      <JsonLd data={faqJsonLd(sendwaveFaq)} />
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
              Sendwave Referral Code {sendwaveCode}: €20 Bonus
            </h1>
            <div className="mt-4 space-y-3 leading-7">
              <p className="text-muted-foreground">
                Use <strong className="text-foreground">{sendwaveCode}</strong>{" "}
                during signup to get{" "}
                <strong className="text-foreground">€20 transfer credit</strong>{" "}
                as an eligible new user completing a qualifying first transfer.
                Enter the code before your first transaction. The referrer also
                receives €20 credit after your transfer is successfully
                delivered.
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Updated on{" "}
              <time dateTime={sendwaveReviewedAt}>
                {formatDate(sendwaveReviewedAt)}
              </time>
              {" · "}
              <Link
                className="font-medium text-primary underline"
                href="/about"
              >
                BonusFoundry Editorial Team
              </Link>
            </p>
            <div className="mt-6 grid min-w-0 grid-cols-1 gap-5">
              <Section title="Sendwave referral code">
                <p className="font-mono text-3xl font-bold tracking-wide text-foreground">
                  {sendwaveCode}
                </p>
                <CopyCodeButton
                  code={sendwaveCode}
                  label="Copy Sendwave code"
                />
                <p>
                  Copy {sendwaveCode} into the referral-code field when creating
                  your Sendwave account, before completing your first transfer.
                </p>
                <p className="rounded-md border bg-muted/50 p-3">
                  <strong className="text-foreground">
                    Referral disclosure:
                  </strong>{" "}
                  BonusFoundry may receive €20 credit if you use this code and
                  your first qualifying transfer is successfully delivered under
                  Sendwave&apos;s referral terms.
                </p>
              </Section>
              <section
                className="overflow-hidden rounded-lg border bg-card shadow-sm"
                aria-labelledby="sendwave-facts"
              >
                <h2 id="sendwave-facts" className="p-5 text-xl font-semibold">
                  Sendwave bonus at a glance
                </h2>
                <Table aria-labelledby="sendwave-facts">
                  <caption className="sr-only">
                    Sendwave code I4H9G: €20 referral rewards and qualifying
                    conditions
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
              <ProviderCorridorLinks provider={provider} />
              <Section title="How the Sendwave referral program works">
                <p>
                  Sendwave&apos;s{" "}
                  <a
                    className="font-medium text-primary underline"
                    href={sendwaveSources.program}
                  >
                    referral-program article
                  </a>{" "}
                  describes personal codes used to refer friends. As a new user,
                  enter {sendwaveCode} at signup and complete an eligible first
                  transfer for the €20 welcome credit.
                </p>
                <p>
                  The{" "}
                  <a
                    className="font-medium text-primary underline"
                    href={sendwaveSources.terms}
                  >
                    official Sendwave referral terms
                  </a>{" "}
                  set the eligibility and code-entry rules, including possible
                  conditions for the sending country, destination and transfer
                  amount.
                </p>
              </Section>
              <Section
                title={`How to use Sendwave referral code ${sendwaveCode}`}
              >
                <ol className="list-decimal space-y-2 pl-5">
                  {sendwaveSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </Section>
              <Section title="Who is eligible for the Sendwave referral program?">
                <p>
                  According to Sendwave&apos;s official referral terms, eligible
                  referred users are new users who have never previously
                  completed a transaction through the Sendwave app.{" "}
                  {sendwaveTiming}
                </p>
                <p>
                  Sendwave may restrict sending countries, destinations or
                  transfer corridors, set a minimum transfer amount, and request
                  identity verification (KYC). Review your applicable conditions
                  in the app.
                </p>
              </Section>
              <Section title="How much is the Sendwave referral bonus?">
                <p>{sendwaveReward}</p>
                <p>
                  Each person receives their own €20 credit. The welcome bonus
                  is promotional credit toward Sendwave transfers; fees and
                  exchange-rate costs can still apply. Compare the total cost
                  and the amount your recipient will receive before paying.
                </p>
              </Section>
              <Section title="What is the minimum transfer for the €20 offer?">
                <p>{sendwaveMinimum}</p>
              </Section>
              <Section title="When do the friend and referrer receive their credit?">
                <p>{sendwavePayout}</p>
                <p>
                  Track the transfer through successful delivery in the app and
                  keep its reference if you need help with a missing credit.
                </p>
              </Section>
              <Section title="Sendwave bonus code and promo code: which should I use?">
                <p>
                  If you are searching for a Sendwave bonus code or a Sendwave
                  promo code for your first transfer, use {sendwaveCode} for the
                  €20 referral offer as an eligible new user. Enter it at
                  signup, before completing your first transaction.
                </p>
                <p>
                  Sendwave publishes separate{" "}
                  <a
                    className="font-medium text-primary underline"
                    href={sendwaveSources.promo}
                  >
                    Sendwave promo-code promotion terms
                  </a>
                  . {sendwaveCode} is a personal referral code. A campaign code
                  can have a different reward, eligibility period and qualifying
                  transaction. Use the conditions attached to the code you
                  enter.
                </p>
              </Section>
              <Section title="Why has my Sendwave referral credit not appeared?">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Confirm that {sendwaveCode} was entered before the first
                    transaction was completed.
                  </li>
                  <li>
                    Check that the referred account is new and the first
                    transfer was successfully delivered.
                  </li>
                  <li>
                    Review the offer&apos;s country, destination and
                    minimum-transfer conditions.
                  </li>
                  <li>
                    Complete any identity verification still requested in the
                    app.
                  </li>
                  <li>
                    Contact Sendwave support in the app with the offer
                    screenshot and transfer reference if the credit is still
                    missing.
                  </li>
                </ol>
              </Section>
              <Section title="Referral credit validity and restrictions">
                <p>
                  {sendwaveExpiry} Credits are promotional benefits for future
                  Sendwave transfers.
                </p>
                <p>
                  Sendwave may limit eligible countries and routes, require a
                  minimum transfer or KYC checks, cap the credit used on a
                  transfer and carry unused credit forward. The app shows the
                  conditions for your transfer.
                </p>
                <p>
                  Sendwave may withhold, reverse or cancel credits for fraud,
                  abuse or rule violations. It may amend, suspend or terminate
                  the referral program.
                </p>
              </Section>
              <ProviderMiniFAQ
                title="Sendwave referral code FAQ"
                items={sendwaveFaq}
              />
              <Section title="Official Sendwave sources">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <a
                      className="font-medium text-primary underline"
                      href={sendwaveSources.program}
                    >
                      Sendwave referral-program article: refer a friend and earn
                      credits
                    </a>{" "}
                    — how personal referral codes work.
                  </li>
                  <li>
                    <a
                      className="font-medium text-primary underline"
                      href={sendwaveSources.terms}
                    >
                      Sendwave referral-program terms and conditions
                    </a>{" "}
                    — eligibility, code timing, reward credits and expiry.
                  </li>
                </ul>
                <p>{sendwaveRewardEvidence}</p>
                <p>
                  The app offer supplies the €20 reward amount and successful
                  delivery requirement. Public terms explain who qualifies and
                  how credits can be used.
                </p>
              </Section>
              <Section title="Referral disclosure and editorial review">
                <p>
                  BonusFoundry may receive a referral reward if you use{" "}
                  {sendwaveCode} and complete a qualifying transfer.
                  BonusFoundry is independent and is not endorsed by Sendwave.
                </p>
                <p>
                  Official referral terms reviewed on{" "}
                  <time dateTime={sendwaveTermsReviewedAt}>
                    {formatDate(sendwaveTermsReviewedAt)}
                  </time>
                  . This page updated on{" "}
                  <time dateTime={sendwaveReviewedAt}>
                    {formatDate(sendwaveReviewedAt)}
                  </time>
                  .
                </p>
                <p>
                  <Link
                    className="font-medium text-primary underline"
                    href="/providers/sendwave"
                  >
                    Sendwave provider review
                  </Link>
                  {" · "}
                  <Link
                    className="font-medium text-primary underline"
                    href="/editorial-policy"
                  >
                    Editorial policy
                  </Link>
                  {" · "}
                  <Link
                    className="font-medium text-primary underline"
                    href="/disclosure"
                  >
                    Full referral disclosure
                  </Link>
                </p>
              </Section>
              <Section title="Compare transfers and understand referral offers">
                <ul className="list-disc space-y-2 pl-5">
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
            <ReferralBox provider={provider} />
          </div>
        </div>
      </Container>
    </>
  );
}
