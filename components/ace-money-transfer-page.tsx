import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { CopyCodeButton } from "@/components/copy-code-button";
import { JsonLd } from "@/components/json-ld";
import { buttonStyles } from "@/components/ui/button";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import {
  aceCode,
  aceFaq,
  aceLead,
  aceMetadata,
  aceNigeria,
  acePath,
  aceProvider,
  aceReferralLink,
  aceReviewedAt,
  aceRewards,
  aceSources,
  aceSteps,
  aceTiming,
  aceWallet
} from "@/data/ace-money-transfer";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="rounded-lg border bg-card p-5 shadow-sm"
    >
      <h2 id={id} className="text-xl font-semibold leading-tight">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function Invitation() {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm sm:p-5">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={aceReferralLink}
          rel="nofollow sponsored"
          className={buttonStyles({ className: "min-h-11 w-full sm:w-auto" })}
        >
          Claim ACE referral offer
        </a>
        <p className="text-sm">
          Referral code:{" "}
          <strong className="select-all font-mono text-lg">{aceCode}</strong>
        </p>
        <CopyCodeButton code={aceCode} />
      </div>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Referral disclosure: BonusFoundry may receive a referral reward if you
        use this invitation and complete a qualifying transfer.
      </p>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">
        If the deep link does not open, enter {aceCode} during signup. Confirm
        the code is applied; signup without it may not qualify.
      </p>
    </div>
  );
}

export function AceMoneyTransferPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Providers", item: "/providers" },
    { name: "ACE Money Transfer", item: "/providers/ace-money-transfer" },
    { name: "Referral Code", item: acePath }
  ];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd
        data={{
          ...webPageJsonLd({
            ...aceMetadata,
            path: acePath,
            updatedAt: aceReviewedAt
          }),
          inLanguage: "en",
          isPartOf: { "@id": `${siteConfig.url}/#website` },
          about: {
            "@type": "Organization",
            name: "ACE Money Transfer",
            url: aceProvider.website
          }
        }}
      />
      <JsonLd data={faqJsonLd(aceFaq)} />
      <Container className="py-6 sm:py-10">
        <Breadcrumb
          items={breadcrumbs.map(({ name, item }) => ({
            label: name,
            href: item
          }))}
        />
        <article className="mx-auto min-w-0 max-w-4xl">
          <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">
            ACE Money Transfer Referral Code {aceCode} — €10 Wallet Credit Bonus
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {aceLead}
          </p>
          <div className="mt-5">
            <Invitation />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Last reviewed{" "}
            <time dateTime={aceReviewedAt}>{formatDate(aceReviewedAt)}</time> by
            the{" "}
            <Link href="/about" className="text-primary underline">
              {siteConfig.author}
            </Link>
            . Based on{" "}
            <a href={aceSources.terms} className="text-primary underline">
              ACE&apos;s official Invite a Friend terms
            </a>
            .
          </p>
          <p className="mt-4 rounded-lg border border-primary/30 bg-muted p-4 text-sm leading-6">
            <strong>Nigeria exception:</strong> {aceNigeria}
          </p>
          <nav
            aria-label="On this page"
            className="my-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-primary underline"
          >
            <a href="#ace-facts">Offer facts</a>
            <a href="#ace-how-to">How to use the code</a>
            <a href="#ace-rewards">Rewards by currency</a>
            <a href="#ace-faq">FAQ</a>
            <a href="#ace-sources">Official sources</a>
          </nav>
          <div className="grid min-w-0 gap-5">
            <Section id="ace-facts" title="ACE referral offer at a glance">
              <dl className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Provider", "ACE Money Transfer"],
                  ["Referral code", aceCode],
                  [
                    "EUR offer",
                    "€10 ACE Wallet credits after a €100+ paid qualifying EUR transfer"
                  ],
                  [
                    "GBP offer",
                    "£10 ACE Wallet credits after a £100+ paid qualifying GBP transfer"
                  ],
                  [
                    "Who can qualify",
                    "Invited new customers using the code or link during signup, subject to ACE's checks"
                  ],
                  [
                    "Route restriction",
                    "Dual rewards exclude transfers to Nigeria"
                  ]
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-semibold text-foreground">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p>
                Check your route against the{" "}
                <a href={aceSources.terms} className="text-primary underline">
                  official ACE referral rules
                </a>{" "}
                before making a transfer.
              </p>
            </Section>
            <Section
              id="ace-how-to"
              title={`How to use ACE Money Transfer referral code ${aceCode}`}
            >
              <ol className="list-decimal space-y-3 pl-5">
                {aceSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p>
                This is an Invite a Friend referral code, rather than a general
                promo or discount code. ACE&apos;s separate Associate Program
                has different rules. Do not assume promotions can be combined.
              </p>
            </Section>
            <Section
              id="ace-rewards"
              title="Eligible sending currencies and wallet rewards"
            >
              <p>
                The{" "}
                <a href={aceSources.guide} className="text-primary underline">
                  ACE referral guide of 21 November 2025
                </a>{" "}
                lists these values for both the eligible invited friend and
                referrer. Route rules apply; this is not a list of eligible
                countries. Transfers to Nigeria are excluded.
              </p>
              <div
                role="region"
                aria-label="ACE rewards by sending currency, scroll horizontally if needed"
                tabIndex={0}
                className="overflow-x-auto rounded-md border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <Table className="min-w-[480px]">
                  <caption className="sr-only">
                    Qualifying paid transfer minimum and invited new customer
                    reward outside Nigeria
                  </caption>
                  <thead>
                    <TableRow>
                      <TableHead scope="col">Sending currency</TableHead>
                      <TableHead scope="col">Minimum paid transfer</TableHead>
                      <TableHead scope="col">
                        New customer wallet credits
                      </TableHead>
                    </TableRow>
                  </thead>
                  <tbody>
                    {aceRewards.map((row) => (
                      <TableRow key={row.currency}>
                        <TableHead scope="row">{row.currency}</TableHead>
                        <TableCell>{row.minimum}</TableCell>
                        <TableCell>{row.reward}</TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Section>
            <Section
              id="ace-wallet"
              title="What the ACE referral reward actually is"
            >
              <p>{aceWallet}</p>
              <p>{aceTiming}</p>
              <p>
                ACE can reverse credits if a qualifying transfer is cancelled,
                refunded, disputed or found fraudulent. The{" "}
                <a href={aceSources.terms} className="text-primary underline">
                  wallet terms
                </a>{" "}
                control credit use and approval.
              </p>
            </Section>
            <Section id="ace-eligibility" title="Eligibility and exclusions">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Register as a new customer through the correct link or code.
                  If invitations compete, ACE uses the code recorded at
                  registration.
                </li>
                <li>
                  Complete a paid qualifying transfer and pass KYC, AML and
                  fraud checks. Creating an account alone does not earn credits.
                </li>
                <li>
                  Existing-customer referrals, duplicate accounts,
                  same-household referrals and abuse can cause ACE to deny or
                  reverse rewards.
                </li>
                <li>{aceNigeria}</li>
                <li>
                  Confirm your sending location and receiving route in the app.
                  ACE can change or suspend the promotion, and some regions
                  cannot use all services.
                </li>
              </ul>
              <p>
                Read the{" "}
                <a href={aceSources.terms} className="text-primary underline">
                  current legal terms
                </a>{" "}
                for the final eligibility decision.
              </p>
            </Section>
            <Section id="ace-faq" title="ACE Money Transfer referral FAQ">
              <div className="space-y-6">
                {aceFaq.map((item) => (
                  <section key={item.id} aria-labelledby={item.id}>
                    <h3
                      id={item.id}
                      className="scroll-mt-6 font-semibold text-foreground"
                    >
                      <a href={`#${item.id}`} className="hover:underline">
                        {item.question}
                      </a>
                    </h3>
                    <p className="mt-2">{item.answer}</p>
                  </section>
                ))}
              </div>
            </Section>
            <Section
              id="ace-sources"
              title="Official sources and editorial note"
            >
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <a href={aceSources.terms} className="text-primary underline">
                    ACE Money Transfer Wallet / Invite a Friend legal terms
                  </a>{" "}
                  — effective 20 November 2025; primary authority.
                </li>
                <li>
                  <a href={aceSources.guide} className="text-primary underline">
                    ACE Money Transfer Invite a Friend explanatory guide
                  </a>{" "}
                  — published 21 November 2025; currency reward examples.
                </li>
              </ul>
              <p>
                The {siteConfig.author} reviewed the legal terms and official
                guide on {formatDate(aceReviewedAt)}. The current legal rules
                retain the November 2025 dual-reward structure and Nigeria
                exception. Legal terms take priority where marketing articles
                differ.
              </p>
              <p>
                ACE publishes the program rules. BonusFoundry independently
                organizes and explains them; ACE has not authored or endorsed
                this page. The code and app-generated invitation were supplied
                by BonusFoundry&apos;s publisher. Public terms confirm program
                rules, rather than acceptance of an individual code. This is a
                source review, not a completed-transfer test.
              </p>
              <p>
                <Link
                  href="/editorial-policy"
                  className="text-primary underline"
                >
                  Editorial policy
                </Link>
                {" · "}
                <Link href="/disclosure" className="text-primary underline">
                  Referral disclosure
                </Link>
              </p>
            </Section>
            <Section id="ace-related" title="Before your first transfer">
              <p>
                <Link
                  href="/providers/ace-money-transfer"
                  className="text-primary underline"
                >
                  ACE Money Transfer overview
                </Link>
                {" · "}
                <Link href="/providers" className="text-primary underline">
                  Compare provider referral details
                </Link>
              </p>
              <p>
                <Link
                  href="/guides/how-referral-codes-work"
                  className="text-primary underline"
                >
                  How referral codes work
                </Link>
                {" · "}
                <Link
                  href="/guides/how-to-compare-welcome-bonuses-between-transfer-apps"
                  className="text-primary underline"
                >
                  How to compare welcome bonuses
                </Link>
              </p>
            </Section>
            <Section id="ace-signup" title="Ready to sign up with ACE?">
              <p>
                Use {aceCode} during registration. For the €10 wallet credit,
                complete an eligible €100+ paid EUR transfer outside Nigeria and
                pass ACE&apos;s checks.
              </p>
              <Invitation />
            </Section>
          </div>
        </article>
      </Container>
    </>
  );
}

export function AceMoneyTransferOverview() {
  return (
    <Container className="py-6 sm:py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Providers", href: "/providers" },
          { label: "ACE Money Transfer", href: "/providers/ace-money-transfer" }
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-5">
        <h1 className="text-3xl font-bold sm:text-4xl">
          ACE Money Transfer: service and referral overview
        </h1>
        <p className="leading-7 text-muted-foreground">
          {aceProvider.description} Compare the live exchange rate, transfer
          fee, recipient amount and available payout method for your route
          before sending.
        </p>
        <Section id="ace-overview-referral" title="Invite a Friend program">
          <p>{aceProvider.welcomeBonus}</p>
          <p>
            <Link
              href={acePath}
              className="font-semibold text-primary underline"
            >
              ACE Money Transfer referral code {aceCode}: link, rewards and
              eligibility
            </Link>
          </p>
        </Section>
        <Section
          id="ace-overview-availability"
          title="Check availability and verification"
        >
          <p>
            Sending currencies do not establish country or route eligibility.
            Check ACE&apos;s live transfer flow for supported locations, payment
            methods and identity requirements. Referral approval requires a
            qualifying paid transfer and compliance checks.
          </p>
          <p>
            <a href={aceProvider.website} className="text-primary underline">
              ACE Money Transfer official website
            </a>
            {" · "}
            <a href={aceSources.terms} className="text-primary underline">
              Official Invite a Friend terms
            </a>
          </p>
        </Section>
        <p className="text-sm text-muted-foreground">
          Reviewed {formatDate(aceReviewedAt)} by{" "}
          <Link href="/about" className="text-primary underline">
            {siteConfig.author}
          </Link>
          . BonusFoundry may receive a referral reward from qualifying
          invitations.
        </p>
      </article>
    </Container>
  );
}
