import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { faqs } from "@/data/faqs";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Money transfer referral code FAQ",
  description:
    "Answers to common questions about referral codes, promo codes, welcome bonuses, expiry, verification, and country-specific rules.",
  path: "/faq"
});

export default function FAQIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "FAQ", item: "/faq" }])} />
      <JsonLd data={faqJsonLd(faqs.map(({ question, answer }) => ({ question, answer })))} />
      <JsonLd
        data={webPageJsonLd({
          title: "Money transfer referral code FAQ",
          description:
            "Answers to common questions about referral codes, promo codes, welcome bonuses, expiry, verification, and country-specific rules.",
          path: "/faq",
          updatedAt: "2026-06-27"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/faq", label: "FAQ" }]} />
        <LastUpdated date="2026-06-27" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Referral code FAQ</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          These answers cover high-intent questions about money transfer referral codes and welcome bonuses. Provider
          rules vary, so use each answer as general guidance and confirm the live terms in the provider app.
        </p>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <article key={faq.slug} className="rounded-md border bg-card p-5">
              <h2 className="text-xl font-semibold">
                <Link href={`/faq/${faq.slug}`}>{faq.question}</Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
