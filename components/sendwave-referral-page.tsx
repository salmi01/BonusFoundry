import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { CopyCodeButton } from "@/components/copy-code-button";
import { JsonLd } from "@/components/json-ld";
import { ProviderMiniFAQ } from "@/components/ai-content";
import { ReferralBox } from "@/components/referral-box";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Provider } from "@/data/providers";
import {
  sendwaveCode,
  sendwaveEligibility,
  sendwaveExpiry,
  sendwaveFaq,
  sendwaveMetadata,
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
    ["Code source", "BonusFoundry owner-supplied referral code"],
    ["Eligible users", sendwaveEligibility],
    ["When to enter", "Before completing the first transaction"],
    ["Where to enter", "Sendwave app"],
    ["Bonus amount", sendwaveReward],
    ["Reward timing", sendwavePayout],
    ["Credit validity", sendwaveExpiry],
    [
      "Restrictions",
      "Country, transfer corridor, minimum transfer and KYC conditions may apply."
    ],
    [
      "Program changes",
      "Sendwave may amend, suspend or terminate its referral program."
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
              Sendwave Referral Code {sendwaveCode}
            </h1>
            <div className="mt-4 space-y-3 leading-7">
              <p className="text-lg font-semibold">
                Sendwave referral code: {sendwaveCode}.
              </p>
              <p className="text-muted-foreground">
                The BonusFoundry Sendwave referral code is {sendwaveCode}.{" "}
                {sendwaveReward} {sendwaveTiming} Sendwave&apos;s official
                referral terms limit code use to new users who have never
                completed a Sendwave app transaction.
              </p>
            </div>
            <div className="mt-6 grid min-w-0 grid-cols-1 gap-5">
              <Section title="Sendwave referral code">
                <p className="font-mono text-3xl font-bold tracking-wide text-foreground">
                  {sendwaveCode}
                </p>
                <CopyCodeButton code={sendwaveCode} />
                <p>
                  This personal referral code is supplied by BonusFoundry&apos;s
                  owner and appears on the supplied official Sendwave app screen
                  alongside €10 credit for the new user. Sendwave determines
                  eligibility.
                </p>
              </Section>
              <p className="text-sm leading-6 text-muted-foreground">
                Code source: BonusFoundry owner-supplied referral code · €10
                new-user credit confirmed on the supplied official app screen ·
                Evidence reviewed:{" "}
                <time dateTime={sendwaveReviewedAt}>
                  {formatDate(sendwaveReviewedAt)}
                </time>
                .
              </p>
              <section
                className="overflow-hidden rounded-lg border bg-card shadow-sm"
                aria-labelledby="sendwave-facts"
              >
                <h2 id="sendwave-facts" className="p-5 text-xl font-semibold">
                  Verified Sendwave referral facts
                </h2>
                <Table aria-labelledby="sendwave-facts">
                  <tbody>
                    {facts.map(([fact, answer]) => (
                      <TableRow key={fact}>
                        <TableHead scope="row">{fact}</TableHead>
                        <TableCell>{answer}</TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
                <p className="p-5 text-sm leading-6 text-muted-foreground">
                  {sendwaveRewardEvidence}
                </p>
              </section>
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
                  enter {sendwaveCode} to claim the welcome credit shown for
                  your eligible offer in the app.
                </p>
                <p>
                  The{" "}
                  <a
                    className="font-medium text-primary underline"
                    href={sendwaveSources.terms}
                  >
                    official Sendwave referral terms
                  </a>{" "}
                  set the eligibility and code-entry rules. {sendwavePayout}
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
                <p>{sendwaveRewardEvidence}</p>
                <p>
                  If you are looking for a Sendwave welcome bonus or first
                  transfer bonus, review the benefit and qualifying conditions
                  shown for your own account before sending.
                </p>
              </Section>
              <Section
                title={`Is ${sendwaveCode} a Sendwave promo code or referral code?`}
              >
                <p>
                  {sendwaveCode} is BonusFoundry&apos;s Sendwave referral code.
                  People searching for a Sendwave bonus code, promo code or
                  coupon code may mean either a personal referral or a separate
                  promotional campaign.
                </p>
                <p>
                  Sendwave publishes separate{" "}
                  <a
                    className="font-medium text-primary underline"
                    href={sendwaveSources.promo}
                  >
                    Sendwave promo-code promotion terms
                  </a>
                  . Referral codes and promotional campaign codes have different
                  terms
                  campaign code.
                </p>
              </Section>
              <Section title="Referral credit validity and restrictions">
                <p>
                  {sendwaveExpiry} Credits are promotional benefits for future
                  Sendwave transfers.
                </p>
                <p>
                  Sendwave may limit eligible countries and routes, require a
                  minimum transfer or KYC checks, cap the credit used on a
                  transfer and carry unused credit forward. No universal minimum
                  transfer is stated here.
                </p>
                <p>
                  Sendwave may withhold, reverse or cancel credits for fraud,
                  abuse or rule violations. It may amend, suspend or terminate
                  the referral program; check the current app conditions before
                  relying on a reward.
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
                    — program overview and variable rewards.
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
                <p>
                  Separate promo-code terms are linked in the
                  referral-versus-promo explanation above. These sources
                  document the program. The supplied official Sendwave app
                  screenshot documents {sendwaveCode} and the €10 new-user
                  credit.
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
                  . App evidence reviewed and this page updated on{" "}
                  <time dateTime={sendwaveReviewedAt}>
                    {formatDate(sendwaveReviewedAt)}
                  </time>
                  . Check the currency and conditions shown for your own account
                  in the app.
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
