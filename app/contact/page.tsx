import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Bonus Foundry",
  description: "Contact Bonus Foundry about content corrections, provider information, or referral disclosure questions.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Contact", item: "/contact" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Contact Bonus Foundry",
          description:
            "Contact Bonus Foundry about content corrections, provider information, or referral disclosure questions.",
          path: "/contact",
          updatedAt: "2026-06-27"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/contact", label: "Contact" }]} />
        <LastUpdated date="2026-06-27" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Contact</h1>
        <div className="mt-6 max-w-3xl space-y-5 text-muted-foreground">
          <p>
            For corrections, disclosure questions, or provider-content updates, contact Bonus Foundry at{" "}
            <a className="font-medium text-primary underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
          <p>
            Do not send passwords, full card numbers, identity documents, or support requests meant for a transfer
            provider. Contact the provider directly for account-specific issues.
          </p>
        </div>
      </Container>
    </>
  );
}
