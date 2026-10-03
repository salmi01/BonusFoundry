import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import {
  HowItWorks,
  LastVerified,
  ProviderMiniFAQ,
  QuickAnswer,
  RelatedResources
} from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { JsonLd } from "@/components/json-ld";
import { ProviderCorridorLinks } from "@/components/provider-corridor-links";
import { buttonStyles } from "@/components/ui/button";
import {
  paysendReferralFaq,
  paysendReferralLink,
  paysendReferralMetadata,
  paysendReferralPath,
  paysendReferralQuickAnswer,
  paysendReferralReviewedAt,
  paysendReferralSources as sources,
  paysendReferralSteps,
  paysendReferrerAnswer
} from "@/data/paysend-referral";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

function SourceLink({ source }: { source: { label: string; url: string } }) {
  return (
    <a
      href={source.url}
      className="font-medium text-primary underline underline-offset-4"
      rel={
        source.url === paysendReferralLink ? "nofollow sponsored" : undefined
      }
    >
      {source.label}
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
      className="rounded-lg border bg-card p-5 shadow-sm"
    >
      <h2 id={`${id}-title`} className="text-xl font-semibold leading-tight">
        {title}
      </h2>
      <div className="mt-3 space-y-4 text-sm leading-7 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function PaysendReferralPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: "Paysend", item: "/providers/paysend" },
          { name: "Bonus and referral link", item: paysendReferralPath }
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          ...paysendReferralMetadata,
          path: paysendReferralPath,
          updatedAt: paysendReferralReviewedAt
        })}
      />
      <JsonLd data={faqJsonLd(paysendReferralFaq)} />
      <Container className="py-6 sm:py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/providers/paysend", label: "Paysend" },
            { href: paysendReferralPath, label: "Bonus and referral link" }
          ]}
        />
        <article className="mx-auto min-w-0 max-w-4xl">
          <LastVerified
            date={formatDate(paysendReferralReviewedAt)}
            label="Last verified against official Paysend sources"
            contentUpdatedAt={formatDate(paysendReferralReviewedAt)}
          />
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
            Paysend bonus and referral link: how it works
          </h1>
          <div className="mt-6 grid min-w-0 gap-6">
            <QuickAnswer
              title="Quick answer: current Paysend referral offer"
              answer={
                <>
                  <p>{paysendReferralQuickAnswer}</p>
                  <p className="mt-3 text-sm">
                    <SourceLink source={sources.useLink} /> ·{" "}
                    <SourceLink source={sources.program} />
                  </p>
                </>
              }
            />

            <section
              aria-label="Paysend referral invitation"
              className="rounded-lg border border-primary/25 bg-primary/5 p-5"
            >
              <p className="font-semibold">
                New to Paysend? Start with the invite link.
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Eligible new users can receive a fee-free first transfer. Open
                the invitation before creating an account and confirm the offer
                for your country.
              </p>
              <Link
                href={paysendReferralLink}
                rel="nofollow sponsored"
                className={buttonStyles({
                  className: "mt-4 w-full text-center sm:w-auto"
                })}
              >
                Open Paysend referral link{" "}
                <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
              </Link>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                This is BonusFoundry&apos;s referral link. BonusFoundry may
                receive a reward when a referral qualifies.
              </p>
            </section>

            <HowItWorks
              title="How the Paysend referral link works"
              steps={paysendReferralSteps}
            />
            <p className="text-sm leading-6 text-muted-foreground">
              Paysend makes the first-transfer fee waiver available after
              successful registration through the invitation. Existing accounts
              cannot add the link later. <SourceLink source={sources.invite} />{" "}
              · <SourceLink source={sources.existingAccount} />
            </p>

            <Section
              id="referrer-rewards"
              title="Paysend referral bonus: what the referrer earns"
            >
              <p>
                {paysendReferrerAnswer} <SourceLink source={sources.program} />
              </p>
              <p>
                Paysend&apos;s Help Center also gives local examples of £1.50 or
                €2.25 per qualifying transfer, depending on registration
                location. These examples are not worldwide entitlements.{" "}
                <SourceLink source={sources.rewards} />
              </p>
              <p>
                Eligible Paysend users can find their own link in the
                profile&apos;s Invite friends area and share it with multiple
                friends. The new user&apos;s fee waiver and the referrer&apos;s
                rewards are different benefits.{" "}
                <SourceLink source={sources.share} />
              </p>
            </Section>

            <Section
              id="code-or-link"
              title="Paysend bonus code vs referral link"
            >
              <p>
                Paysend&apos;s standard referral mechanism uses a personal
                invite link. If you searched for a Paysend referral code, invite
                code or bonus code, BonusFoundry provides the referral link
                above; no universal public code is verified here. The Paysend
                bonus link is the same invitation used before registration.{" "}
                <SourceLink source={sources.useLink} />
              </p>
              <p>
                Paysend promo codes are separate, campaign-specific offers.
                Paysend distributes them through newsletters, push
                notifications, social media and in-app messages. An applicable
                code can be entered through{" "}
                <strong className="text-foreground">Add a code</strong> while
                preparing a transfer. Follow that campaign&apos;s terms; do not
                assume a code also applies a referral or that the benefits can
                be combined. <SourceLink source={sources.getPromo} /> ·{" "}
                <SourceLink source={sources.applyPromo} />
              </p>
            </Section>

            <Section
              id="eligibility"
              title="Eligibility, limits and country availability"
            >
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong className="text-foreground">New accounts:</strong>{" "}
                  Paysend&apos;s invite link must be used before account
                  creation. It cannot be applied retroactively to an existing
                  account. <SourceLink source={sources.existingAccount} />
                </li>
                <li>
                  <strong className="text-foreground">
                    Participating markets:
                  </strong>{" "}
                  Paysend referral availability and amounts depend on the
                  registration country. Check the current official list and the
                  offer in your account; destination coverage alone does not
                  prove referral eligibility.{" "}
                  <SourceLink source={sources.rewards} />
                </li>
                <li>
                  <strong className="text-foreground">
                    Qualifying activity:
                  </strong>{" "}
                  Paysend excludes bonus withdrawals and card-verification
                  microcharges from referral bonus eligibility.{" "}
                  <SourceLink source={sources.invite} />
                </li>
                <li>
                  <strong className="text-foreground">
                    Minimum and timing:
                  </strong>{" "}
                  the current Paysend invitation reviewed does not establish a
                  universal first-transfer minimum or a guaranteed referrer
                  payment deadline. Use the applicable account terms.{" "}
                  <SourceLink source={sources.invite} /> ·{" "}
                  <SourceLink source={sources.program} />
                </li>
              </ul>
              <p>
                If a Paysend reward is missing, check that registration used the
                invitation and that the transfer meets the displayed terms.
                Contact Paysend support from the app if those conditions are
                met. <SourceLink source={sources.program} />
              </p>
            </Section>

            <Section
              id="expired-promotions"
              title="Recent expired Paysend referral promotions"
            >
              <p>
                These Paysend campaigns are historical as of October 3, 2026.
                Neither campaign establishes a current reward for a new
                invitation.
              </p>
              <div className="rounded-md border p-4">
                <h3 className="font-semibold text-foreground">
                  Expired: summer 2026 welcome bonus
                </h3>
                <p className="mt-2">
                  The June 1–July 31, 2026 Paysend campaign described a fee-free
                  first transfer plus $5 USD after a second transfer of at least
                  $100 USD. The campaign closed July 31. The second-transfer
                  reward and minimum are not presented here as current standard
                  referral terms. <SourceLink source={sources.summer} />
                </p>
              </div>
              <div className="rounded-md border p-4">
                <h3 className="font-semibold text-foreground">
                  Expired: September 2026 double rewards
                </h3>
                <p className="mt-2">
                  Paysend advertised $6 and up to $72 during September 1–30,
                  2026, with market restrictions including exclusion of the
                  United States. Paysend said the standard rate returned October
                  1. These doubled amounts are not current rewards.{" "}
                  <SourceLink source={sources.september} />
                </p>
              </div>
              <p>
                <strong className="text-foreground">
                  Official-source discrepancy:
                </strong>{" "}
                the live Paysend invitation&apos;s title metadata still mentions
                $5 after a second transfer. Its visible content describes a
                fee-free first transfer and does not establish current $5
                eligibility. BonusFoundry does not treat the title alone as
                proof of an active cash offer.{" "}
                <SourceLink source={sources.invite} />
              </p>
            </Section>

            <ProviderMiniFAQ
              title="Paysend referral FAQ"
              items={paysendReferralFaq}
            />

            <Section
              id="official-sources"
              title="Official Paysend sources and last verification"
            >
              <p>
                BonusFoundry checked the official Paysend sources below on{" "}
                <time dateTime={paysendReferralReviewedAt}>
                  {formatDate(paysendReferralReviewedAt)}
                </time>
                . Current program and Help Center guidance inform the current
                offer; dated campaign pages provide historical context.
                BonusFoundry is an independent publisher.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {Object.values(sources).map((source) => (
                  <li key={source.url}>
                    <SourceLink source={source} />
                  </li>
                ))}
              </ul>
              <p>
                The expired September article describes rewards per referral,
                while Paysend&apos;s current program page and invitation
                describe qualifying transfers per friend. The current
                explanation above follows those current sources.
                Country-specific terms and the offer shown in your account
                remain decisive.
              </p>
            </Section>

            <ProviderCorridorLinks
              provider={{ slug: "paysend", name: "Paysend" }}
            />
            <RelatedResources
              title="More help with referral offers"
              links={[
                {
                  href: "/providers/paysend",
                  label: "Paysend provider overview",
                  description: "Service and transfer-method background."
                },
                {
                  href: "/guides/how-referral-codes-work",
                  label: "How money transfer referrals work"
                },
                {
                  href: "/guides/how-to-compare-welcome-bonuses-between-transfer-apps",
                  label: "Compare money transfer welcome bonuses"
                },
                {
                  href: "/research-methodology",
                  label: "How BonusFoundry checks its sources"
                }
              ]}
            />
            <Disclosure />
          </div>
        </article>
      </Container>
    </>
  );
}
