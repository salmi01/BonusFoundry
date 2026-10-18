import Link from "next/link";
import type { ReactNode } from "react";
import {
  HowItWorks,
  KeyFacts,
  LastVerified,
  ProviderMiniFAQ,
  QuickAnswer,
  RelatedResources
} from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { CopyCodeButton } from "@/components/copy-code-button";
import { JsonLd } from "@/components/json-ld";
import { buttonStyles } from "@/components/ui/button";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import {
  transfergoCustomerReward,
  transfergoFaq,
  transfergoMetadata,
  transfergoMinimum,
  transfergoMistakes,
  transfergoProvider,
  transfergoQuickAnswer,
  transfergoReferralCode,
  transfergoReferralLink,
  transfergoReferralPath,
  transfergoRequirements,
  transfergoReviewedAt,
  transfergoSources,
  transfergoSteps
} from "@/data/transfergo-referral";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

function Source({
  marketing = false,
  children
}: {
  marketing?: boolean;
  children?: ReactNode;
}) {
  return (
    <a
      className="font-medium text-primary underline underline-offset-4"
      href={marketing ? transfergoSources.overview : transfergoSources.terms}
    >
      {children ?? "TransferGo referral terms"}
    </a>
  );
}

function Invite({
  children = "Open TransferGo Invite Link"
}: {
  children?: ReactNode;
}) {
  return (
    <a
      href={transfergoReferralLink}
      rel="nofollow sponsored"
      className={buttonStyles({
        className: "min-h-11 w-full whitespace-normal text-center sm:w-auto"
      })}
    >
      {children}
    </a>
  );
}

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
      id={id}
      aria-labelledby={`${id}-title`}
      className="min-w-0 rounded-lg border bg-card p-5 shadow-sm"
    >
      <h2 id={`${id}-title`} className="text-xl font-semibold leading-tight">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground [overflow-wrap:anywhere]">
        {children}
      </div>
    </section>
  );
}

// The established provider overview remains distinct from the referral guide.
export function TransfergoOverview() {
  const crumbs = [
    { name: "Home", item: "/" },
    { name: "Providers", item: "/providers" },
    { name: "TransferGo", item: "/providers/transfergo" }
  ];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={webPageJsonLd({
          title: "TransferGo: International Transfer Checks",
          description: transfergoProvider.description,
          path: "/providers/transfergo",
          updatedAt: transfergoReviewedAt
        })}
      />
      <Container className="py-6 sm:py-10">
        <Breadcrumb
          items={crumbs.map(({ name, item }) => ({ label: name, href: item }))}
        />
        <article className="mx-auto min-w-0 max-w-4xl space-y-5">
          <h1 className="text-3xl font-bold sm:text-4xl">
            TransferGo: international transfer checks
          </h1>
          <p className="leading-7 text-muted-foreground">
            {transfergoProvider.description} TransferGo&apos;s{" "}
            <Source>programme terms</Source> describe its international transfer
            service; they do not establish that every route or payment method
            qualifies for a referral.
          </p>
          <LastVerified
            date={formatDate(transfergoReviewedAt)}
            label="Official referral sources last verified"
          />
          <Section
            id="compare-transfer"
            title="Check the transfer before choosing a provider"
          >
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Confirm the sending country, destination, currency pair and
                recipient details in TransferGo.
              </li>
              <li>
                Compare the full amount received after fees and currency
                conversion, along with the delivery estimate shown for your
                transfer.
              </li>
              <li>
                Check required identity documents and which payment methods are
                available. Referral funding restrictions can differ from general
                service availability.
              </li>
              <li>
                Keep the transfer quote and receipt, and use support inside your
                account for account-specific questions.
              </li>
            </ul>
            <a
              className="text-primary underline"
              href="https://www.transfergo.com/"
            >
              Open TransferGo&apos;s official website
            </a>
          </Section>
          <Section
            id="referral-details"
            title="Looking for a TransferGo invitation?"
          >
            <p>
              {transfergoCustomerReward} Our separate referral guide explains
              the observed transfer minimum, the invite link and the difference
              between inviter and customer incentives.
            </p>
            <p>
              Use invite code{" "}
              <strong className="select-text text-foreground">
                {transfergoReferralCode}
              </strong>{" "}
              during signup, or follow{" "}
              <a
                href={transfergoReferralLink}
                rel="nofollow sponsored"
                className="break-all text-primary underline"
              >
                {transfergoReferralLink}
              </a>{" "}
              before creating your account.
            </p>
            <Link
              href={transfergoReferralPath}
              className={buttonStyles({
                className: "min-h-11 whitespace-normal text-center"
              })}
            >
              TransferGo referral link and requirements
            </Link>
          </Section>
          <RelatedResources
            links={[
              { href: "/providers", label: "Compare transfer providers" },
              {
                href: "/guides/what-to-check-before-using-money-transfer-referral-link",
                label: "Referral-link checklist"
              },
              {
                href: "/providers/paysend/referral-code",
                label: "Paysend referral guide"
              },
              {
                href: "/providers/ria/referral-code",
                label: "Ria referral guide"
              }
            ]}
          />
        </article>
      </Container>
    </>
  );
}

export function TransfergoReferralPage() {
  const crumbs = [
    { name: "Home", item: "/" },
    { name: "Providers", item: "/providers" },
    { name: "TransferGo referral link", item: transfergoReferralPath }
  ];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={webPageJsonLd({
          ...transfergoMetadata,
          path: transfergoReferralPath,
          updatedAt: transfergoReviewedAt
        })}
      />
      <Container className="py-4 sm:py-8">
        <Breadcrumb
          items={crumbs.map(({ name, item }) => ({ label: name, href: item }))}
        />
        <article className="mx-auto min-w-0 max-w-4xl">
          <h1 className="text-2xl font-bold leading-tight tracking-normal sm:text-4xl">
            TransferGo Referral Code bonus2026 &amp; Invite Link (2026)
          </h1>
          <div className="mt-4 grid min-w-0 gap-5">
            <section
              aria-label="TransferGo invitation"
              className="min-w-0 rounded-lg border border-primary/25 bg-primary/5 p-4"
            >
              <Invite />
              <p className="mt-2 select-text break-all text-sm">
                <a
                  href={transfergoReferralLink}
                  rel="nofollow sponsored"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  {transfergoReferralLink}
                </a>
              </p>
              <p className="mt-2 text-sm">
                Or enter invite code{" "}
                <strong className="select-text">
                  {transfergoReferralCode}
                </strong>{" "}
                during signup.
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                BonusFoundry may earn a referral reward if you register through
                this link or use this code and complete an eligible transfer.
                BonusFoundry is independent of TransferGo.{" "}
                <Link href="/disclosure" className="text-primary underline">
                  Disclosure
                </Link>
                .
              </p>
            </section>
            <QuickAnswer
              answer={
                <>
                  <p>{transfergoQuickAnswer}</p>
                  <p className="mt-2">
                    <Source /> ·{" "}
                    <a
                      href="#official-sources"
                      className="text-primary underline"
                    >
                      Account-specific app evidence
                    </a>
                  </p>
                </>
              }
            />
            <LastVerified
              date={formatDate(transfergoReviewedAt)}
              label="Last verified: official sources and owner app evidence"
            />
            <KeyFacts
              title="TransferGo referral facts"
              facts={[
                { label: "Provider", value: "TransferGo" },
                { label: "Invite code", value: transfergoReferralCode },
                {
                  label: "Invite URL",
                  value: (
                    <a
                      href={transfergoReferralLink}
                      rel="nofollow sponsored"
                      className="select-text break-all text-primary underline"
                    >
                      {transfergoReferralLink}
                    </a>
                  )
                },
                {
                  label: "Offer proof date",
                  value: "October 18, 2026 (owner's specific account)"
                },
                { label: "Qualifying minimum", value: transfergoMinimum },
                {
                  label: "New-customer requirement",
                  value:
                    "Register as a new user using the invitation link or code before the first transfer; complete required verification."
                },
                {
                  label: "Transfer type",
                  value:
                    "International AND cross-currency, to another person; not to yourself or the inviter."
                },
                {
                  label: "Referred-customer reward",
                  value: transfergoCustomerReward
                },
                {
                  label: "Referrer reward",
                  value:
                    "€5 in the account owner's app, not a customer welcome bonus."
                }
              ]}
            />
            <HowItWorks
              title="How to use the TransferGo referral link"
              steps={transfergoSteps.map((label) => ({ label }))}
            />
            <p className="text-sm leading-6 text-muted-foreground">
              The observed first-transfer rule comes from the owner&apos;s app.
              The <Source>official terms, clauses 2.2–2.5 and 2.9–2.12</Source>,
              cover attribution, currency, completion and verification. Check
              the live total cost before sending.
            </p>
            <div>
              <Invite>Check Your TransferGo Invitation</Invite>
            </div>
            <Section id="requirements" title="TransferGo referral requirements">
              <ul className="list-disc space-y-2 pl-5">
                {transfergoRequirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <Source>
                  Official terms: clauses 2.4–2.5, 2.9 and 2.11–2.13
                </Source>
                . The €100 first-transfer threshold and prepaid-card rule are
                also shown in the owner&apos;s app; they are not a worldwide
                offer guarantee.
              </p>
            </Section>
            <Section
              id="customer-bonus"
              title="Does the referred friend get a TransferGo bonus?"
            >
              <p>
                <strong className="text-foreground">
                  A bonus for the newly referred customer has not been verified
                  for this invite.
                </strong>{" "}
                The owner&apos;s screenshot establishes only the inviter&apos;s
                reward. Do not send money expecting a welcome payment unless
                TransferGo explicitly offers one to you.
              </p>
              <p>
                TransferGo may offer invited customers a discount or bonus, with
                amounts that vary by user. Check your registration flow and save
                the offer that applies to your account.{" "}
                <Source>Official terms, clauses 3.1–3.3</Source>.
              </p>
            </Section>
            <Section id="inviter-reward" title="What does the inviter earn?">
              <p>
                The owner&apos;s app shows €5 per successful qualifying referral
                as of October 18, 2026. This is conditional and subject to
                change. The inviter must claim an available reward within 30
                days; this is not a new-customer signup deadline.{" "}
                <Source>Official terms, clauses 3.1–3.3 and 4.2</Source>.
              </p>
            </Section>
            <Section
              id="offer-differences"
              title="Why do some TransferGo pages mention €20?"
            >
              <p>
                The <Source marketing>French public referral overview</Source>{" "}
                mentions €20 for the inviter. The owner&apos;s app instead shows
                €5. These describe different evidence: public marketing and a
                specific account&apos;s offer.
              </p>
              <p>
                The <Source>terms, clauses 3.1–3.3</Source>, allow programme and
                user differences and changes to rewards. Use the offer displayed
                in your TransferGo account; neither public amount proves a
                new-customer reward for this invitation.
              </p>
            </Section>
            <Section
              id="link-or-code"
              title="TransferGo invite link vs. invite code"
            >
              <p>
                The confirmed invitation is{" "}
                <a
                  href={transfergoReferralLink}
                  rel="nofollow sponsored"
                  className="select-text break-all text-primary underline"
                >
                  {transfergoReferralLink}
                </a>
                . You can also enter invite code{" "}
                <strong className="select-text text-foreground">
                  {transfergoReferralCode}
                </strong>{" "}
                directly during signup. The account owner confirmed the
                personalized link and code on October 18, 2026.
              </p>
              <p>
                If you searched for a TransferGo referral code, TransferGo promo
                code or Transfer Go bonus, use the full invite link before
                creating your account or enter the invite code during
                registration. This is a referral invitation, not proof of a
                separate promo or welcome bonus.{" "}
                <Source>Official terms, clauses 2.1–2.3</Source>.
              </p>
              <CopyCodeButton
                code={transfergoReferralCode}
                label="Copy invite code"
              />
            </Section>
            <Section
              id="non-qualifying"
              title="Common reasons a referral doesn't qualify"
            >
              <ul className="list-disc space-y-2 pl-5">
                {transfergoMistakes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <Source>
                  Official terms, clauses 2.4–2.5, 2.9, 2.11 and 2.13
                </Source>
                . For example, sending €100 to your own foreign account fails
                the recipient rule, and sending EUR to EUR abroad fails the
                currency rule. Contact TransferGo through your account with the
                offer screen and receipt if attribution or completion is
                unclear.
              </p>
            </Section>
            <ProviderMiniFAQ
              title="Frequently asked questions"
              items={transfergoFaq}
            />
            <p className="text-sm leading-6 text-muted-foreground">
              FAQ source: <Source>TransferGo terms, clauses 2–4</Source>, and
              the owner&apos;s app evidence described below. No delivery-time
              estimate or universal country eligibility is established here.
            </p>
            <Section
              id="official-sources"
              title="Official sources and verification"
            >
              <div className="max-w-full overflow-x-auto rounded-lg border">
                <Table>
                  <thead>
                    <TableRow>
                      <TableHead>Source</TableHead>
                      <TableHead>What it confirms</TableHead>
                      <TableHead>Checked</TableHead>
                    </TableRow>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableCell>
                        <Source>Official Refer a Friend terms</Source>
                      </TableCell>
                      <TableCell>
                        Effective September 30, 2025. Qualifying activity,
                        restrictions, attribution and variable rewards; clauses
                        2–4.
                      </TableCell>
                      <TableCell>October 18, 2026</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Source marketing>
                          Official French referral overview
                        </Source>
                      </TableCell>
                      <TableCell>
                        Public marketing mentions €20 for the inviter; not proof
                        of this account&apos;s offer.
                      </TableCell>
                      <TableCell>October 18, 2026</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Owner app screenshot, October 18, 2026 (specific
                        account)
                      </TableCell>
                      <TableCell>
                        Two owner-provided screenshots reviewed: original
                        invitation, €5 inviter reward, €100 first transfer,
                        new-user and funding restrictions, checks and unlimited
                        successful invitations. Private account evidence, not a
                        universal public offer.
                      </TableCell>
                      <TableCell>October 18, 2026</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Owner confirmation of personalized invitation
                      </TableCell>
                      <TableCell>
                        Updated link: {transfergoReferralLink}. Direct invite
                        code: {transfergoReferralCode}. Supersedes the
                        invitation shown in the earlier screenshot.
                      </TableCell>
                      <TableCell>October 18, 2026</TableCell>
                    </TableRow>
                  </tbody>
                </Table>
              </div>
              <p>
                Public terms were checked live; the app evidence was supplied by
                the owner. The personalized link and direct invite code were
                subsequently confirmed by the owner. Any reward for the referred
                customer remains unverified. Check TransferGo&apos;s current
                invitation flow before sending.
              </p>
            </Section>
            <RelatedResources
              links={[
                {
                  href: "/providers/transfergo",
                  label: "TransferGo transfer overview"
                },
                {
                  href: "/providers",
                  label: "Compare money transfer referral guides"
                },
                {
                  href: "/guides/what-to-check-before-using-money-transfer-referral-link",
                  label: "What to check before using a referral link"
                },
                {
                  href: "/guides/promo-code-vs-referral-code",
                  label: "Promo code vs referral code"
                },
                {
                  href: "/providers/paysend/referral-code",
                  label: "Paysend referral link and eligibility"
                },
                {
                  href: "/providers/ria/referral-code",
                  label: "Ria referral requirements"
                },
                {
                  href: "/editorial-policy",
                  label: "BonusFoundry editorial policy"
                }
              ]}
            />
            <Section id="before-signup" title="Before you join TransferGo">
              <p>
                Open the invitation before signup or enter code{" "}
                {transfergoReferralCode} during registration, confirm the terms
                for your own account and compare the full transfer cost. An
                eligible referral does not guarantee a welcome bonus.
              </p>
              <Invite />
            </Section>
          </div>
        </article>
      </Container>
    </>
  );
}
