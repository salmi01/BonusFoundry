import { LastVerified, QuickAnswer, RelatedResources } from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy policy",
  description: "Privacy policy for BonusFoundry.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Privacy policy", item: "/privacy-policy" }])}
      />
      <JsonLd
        data={webPageJsonLd({
          title: "Privacy policy",
          description: "Privacy policy for BonusFoundry.",
          path: "/privacy-policy",
          updatedAt: "2026-06-27"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/privacy-policy", label: "Privacy policy" }]} />
        <LastVerified date="June 27, 2026" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Privacy policy</h1>
        <div className="mt-6 max-w-3xl">
          <QuickAnswer answer="BonusFoundry is a static content website. The current site does not provide user accounts, user submissions, comments, or a database for visitor-submitted referral codes." />
        </div>
        <div className="mt-6 max-w-3xl space-y-5 text-muted-foreground">
          <p>
            BonusFoundry is a static content website. The MVP does not include user accounts, user submissions,
            comments, or a database for storing visitor-provided referral codes.
          </p>
          <p>
            If analytics, hosting logs, or contact forms are added later, this page should be updated to explain what
            data is collected, why it is used, and how users can contact the site owner.
          </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <RelatedResources
            links={[
              { href: "/terms", label: "Terms of use" },
              { href: "/disclosure", label: "Referral disclosure" },
              { href: "/contact", label: "Contact BonusFoundry" }
            ]}
          />
        </div>
      </Container>
    </>
  );
}
