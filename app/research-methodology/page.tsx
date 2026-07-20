import { HowItWorks, KeyFacts, KeyTakeaways, LastVerified, QuickAnswer, RelatedResources } from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Research Methodology",
  description:
    "How BonusFoundry researches money transfer referral programs, official provider sources, country variation, verification rules, and missing-bonus issues.",
  path: "/research-methodology"
});

export default function ResearchMethodologyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Research Methodology", item: "/research-methodology" }])}
      />
      <JsonLd
        data={webPageJsonLd({
          title: "Research Methodology",
          description:
            "How BonusFoundry researches money transfer referral programs, official provider sources, country variation, verification rules, and missing-bonus issues.",
          path: "/research-methodology",
          updatedAt: "2026-07-14"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/research-methodology", label: "Research Methodology" }]} />
        <LastVerified date="July 14, 2026" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Research Methodology</h1>
        <div className="mt-6 max-w-3xl">
          <QuickAnswer answer="BonusFoundry researches provider pages by checking official provider sources first: referral terms, promotion pages, help centers, FAQ pages, legal documents, support articles, and app-facing instructions when available." />
        </div>
        <div className="mt-10 max-w-3xl space-y-6">
          <HowItWorks
            title="Research workflow"
            steps={[
              {
                label: "Identify official sources",
                description:
                  "Start with the provider's own website, referral terms, promotion pages, help center, FAQ, legal terms, support articles, and app-facing instructions when available."
              },
              {
                label: "Extract structured facts",
                description:
                  "Update structured provider data for rewards, eligibility, verification, countries, payment methods, referral rules, troubleshooting, support, FAQ, and official-source notes whenever possible."
              },
              {
                label: "Check variation",
                description:
                  "Flag differences by country, corridor, customer type, campaign, transfer amount, payment method, and payout method instead of reducing them to a single universal rule."
              },
              {
                label: "Record gaps",
                description:
                  "If official documentation does not verify a detail, leave the answer cautious and describe the unanswered question rather than inventing missing information."
              },
              {
                label: "Review and update",
                description:
                  "Refresh pages when official provider information changes, when a user reports a possible issue, or during periodic review of high-impact pages."
              }
            ]}
          />
          <KeyFacts
            title="Official sources reviewed"
            facts={[
              { label: "Referral terms", value: "Used to verify reward type, qualifying actions, new-user rules, inviter/invitee treatment, and exclusions." },
              { label: "Promotion pages", value: "Used to verify current campaign wording, time limits, country-specific offers, and reward variation." },
              { label: "Help centers and FAQ", value: "Used to verify identity checks, transfer problems, reward troubleshooting, payment methods, payout methods, and support paths." },
              { label: "Legal documents", value: "Used to verify service availability, account requirements, prohibited use, and provider-specific limitations when relevant." },
              { label: "Provider websites", value: "Used to verify supported send countries, receive countries, app availability, and official provider positioning." }
            ]}
          />
          <KeyTakeaways
            title="How pages handle uncertainty"
            items={[
              "Provider pages should identify what official sources verified and when those sources were last checked.",
              "Country or promotion variation should be explained directly when official sources show different rules.",
              "Unverified details should remain cautious, especially for rewards, eligibility, supported countries, and payment methods.",
              "BonusFoundry does not use coupon sites, referral marketplaces, or user-submitted codes as proof of provider referral rules."
            ]}
          />
        </div>
        <div className="mt-10 max-w-3xl">
          <RelatedResources
            links={[
              { href: "/editorial-policy", label: "Editorial policy" },
              { href: "/about", label: "About BonusFoundry" },
              { href: "/providers", label: "Provider bonus guides" },
              { href: "/guides", label: "Referral and bonus guides" },
              { href: "/faq", label: "Referral FAQ" },
              { href: "/contact", label: "Report an update" }
            ]}
          />
        </div>
      </Container>
    </>
  );
}
