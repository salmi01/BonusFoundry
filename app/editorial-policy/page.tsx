import { KeyFacts, KeyTakeaways, LastVerified, QuickAnswer, RelatedResources } from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Editorial Policy",
  description:
    "Bonus Foundry editorial policy for provider referral guides, official-source research, corrections, independence, and disclosure.",
  path: "/editorial-policy"
});

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Editorial Policy", item: "/editorial-policy" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Editorial Policy",
          description:
            "Bonus Foundry editorial policy for provider referral guides, official-source research, corrections, independence, and disclosure.",
          path: "/editorial-policy",
          updatedAt: "2026-07-14"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/editorial-policy", label: "Editorial Policy" }]} />
        <LastVerified date="July 14, 2026" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Editorial Policy</h1>
        <div className="mt-6 max-w-3xl">
          <QuickAnswer answer="Bonus Foundry pages are reviewed by the BonusFoundry Editorial Team. The editorial standard is to use official provider sources first, explain country and promotion variation, and avoid presenting referral rewards as guaranteed." />
        </div>
        <div className="mt-10 max-w-3xl space-y-6">
          <KeyFacts
            title="Source hierarchy"
            facts={[
              { label: "Primary sources", value: "Provider websites, referral terms, promotion pages, help centers, FAQ pages, legal terms, support articles, and app-facing instructions." },
              { label: "Secondary sources", value: "Used only for context and not as proof for referral rewards, eligibility, verification rules, or supported countries." },
              { label: "Excluded sources", value: "Coupon sites, referral marketplaces, forum posts, and user-submitted codes are not used to verify provider offer terms." },
              { label: "Unknown details", value: "If official documentation does not answer a question, the page should say what remains unanswered instead of filling the gap." }
            ]}
          />
          <KeyTakeaways
            title="Verification process"
            items={[
              "Review official provider documentation before describing a referral reward, promo rule, payment method, country list, or verification step.",
              "Document provider-specific variation when terms differ by country, corridor, customer type, time-limited campaign, or payment method.",
              "Avoid guarantees: referral codes, promo codes, welcome bonuses, and signup rewards can depend on provider eligibility checks.",
              "Use only Bonus Foundry-owned referral codes or referral links when a page displays a code or link."
            ]}
          />
          <KeyFacts
            title="Independence and disclosure"
            facts={[
              { label: "Independence", value: "Bonus Foundry is independent and is not an official website of any listed money transfer or fintech provider." },
              { label: "Referral support", value: "Bonus Foundry may receive a referral reward if a user signs up or transfers through a listed Bonus Foundry-owned referral code or link and meets provider requirements." },
              { label: "No paid listings", value: "Bonus Foundry does not accept paid provider rankings, user-submitted referral codes, or referral marketplace submissions." },
              { label: "No fake expertise", value: "The site does not claim licenses, certifications, or individual expert credentials that have not been verified." }
            ]}
          />
          <KeyFacts
            title="Updates and corrections"
            facts={[
              { label: "Update frequency", value: "High-impact provider, corridor, and referral pages are reviewed when official terms change or during periodic content review." },
              { label: "Last reviewed", value: "Pages display a reviewed-by line and a last reviewed date when the shared review module is used." },
              { label: "Corrections", value: "Readers can report outdated, unclear, or incorrect information through the contact page." },
              { label: "Change handling", value: "When a provider changes terms by country or promotion, the page should preserve that nuance rather than flattening it into one universal rule." }
            ]}
          />
        </div>
        <div className="mt-10 max-w-3xl">
          <RelatedResources
            links={[
              { href: "/about", label: "About Bonus Foundry" },
              { href: "/research-methodology", label: "Research methodology" },
              { href: "/disclosure", label: "Referral disclosure" },
              { href: "/providers", label: "Provider bonus guides" },
              { href: "/guides", label: "Referral and bonus guides" },
              { href: "/faq", label: "Referral FAQ" }
            ]}
          />
        </div>
      </Container>
    </>
  );
}
