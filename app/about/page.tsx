import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Bonus Foundry",
  description:
    "Learn how Bonus Foundry researches and explains money transfer referral programs and welcome bonuses.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "About", item: "/about" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "About Bonus Foundry",
          description:
            "Learn how Bonus Foundry researches and explains money transfer referral programs and welcome bonuses.",
          path: "/about",
          updatedAt: "2026-06-27"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]} />
        <LastUpdated date="2026-06-27" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">About Bonus Foundry</h1>
        <div className="mt-6 max-w-3xl space-y-5 text-muted-foreground">
          <p>
            Bonus Foundry is an independent knowledge base for welcome bonuses and referral programs from money transfer
            and fintech apps. The goal is to answer practical user questions before showing any referral code.
          </p>
          <p>
            We focus on eligibility, timing, country-specific limitations, common mistakes, and missing-bonus scenarios.
            We do not accept user-submitted codes, paid listings, or referral marketplace submissions.
          </p>
        </div>
      </Container>
    </>
  );
}
