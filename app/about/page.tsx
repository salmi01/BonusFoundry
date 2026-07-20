import Image from "next/image";
import { KeyFacts, LastVerified, QuickAnswer, RelatedResources } from "@/components/ai-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About BonusFoundry",
  description:
    "Learn how BonusFoundry researches and explains money transfer referral programs and welcome bonuses.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "About", item: "/about" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "About BonusFoundry",
          description:
            "Learn how BonusFoundry researches and explains money transfer referral programs and welcome bonuses.",
          path: "/about",
          updatedAt: "2026-07-14"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]} />
        <LastVerified date="July 14, 2026" />
        <Image
          src={siteConfig.logo}
          alt="BonusFoundry"
          width={2172}
          height={724}
          priority
          className="mt-6 h-auto w-full max-w-md"
        />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">About BonusFoundry</h1>
        <div className="mt-6 max-w-3xl">
          <QuickAnswer answer="BonusFoundry is an independent knowledge base for money transfer Referral Program, Referral Code, Referral Link, Promo Code, Welcome Bonus, and Signup Bonus research. Pages are reviewed by the BonusFoundry Editorial Team using official provider sources whenever those sources are available." />
        </div>
        <div className="mt-6 max-w-3xl space-y-5 text-muted-foreground">
          <p>
            BonusFoundry is an independent knowledge base for welcome bonuses and referral programs from money transfer
            and fintech apps. The goal is to answer practical user questions before showing any referral code.
          </p>
          <p>
            The BonusFoundry Editorial Team focuses on eligibility, timing, country-specific limitations, verification
            requirements, payment methods, common mistakes, and missing-bonus scenarios. We do not present the team as
            licensed financial advisers, and BonusFoundry is not an official website of any listed provider.
          </p>
          <p>
            Research starts with official provider websites, referral terms, promotion pages, help centers, FAQ pages,
            legal documents, support articles, and app-facing instructions when they are available. If a provider varies
            an offer by country, customer type, corridor, payment method, or time-limited promotion, the page should
            explain that variation instead of simplifying it into a single guaranteed reward.
          </p>
          <p>
            BonusFoundry is referral-supported. We do not accept user-submitted codes, paid listings, or referral
            marketplace submissions, and pages should only display BonusFoundry-owned referral codes or referral links.
          </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <KeyFacts
            title="Editorial trust signals"
            facts={[
              { label: "Editorial identity", value: "BonusFoundry Editorial Team" },
              { label: "Source preference", value: "Official provider sources over blogs, coupon pages, forums, or marketplaces." },
              { label: "Independence", value: "BonusFoundry is independent and is not an official provider website." },
              { label: "Disclosure", value: "Referral rewards may be earned when provider requirements are met." },
              { label: "Corrections", value: "Readers can report outdated or incorrect information through the contact page." }
            ]}
          />
        </div>
        <div className="mt-10 max-w-3xl">
          <RelatedResources
            links={[
              { href: "/editorial-policy", label: "Editorial policy" },
              { href: "/research-methodology", label: "Research methodology" },
              { href: "/providers", label: "Provider bonus guides" },
              { href: "/guides", label: "Referral and bonus guides" },
              { href: "/disclosure", label: "Referral disclosure" },
              { href: "/contact", label: "Contact BonusFoundry" }
            ]}
          />
        </div>
      </Container>
    </>
  );
}
