import Link from "next/link";
import { notFound } from "next/navigation";
import { BonusCard } from "@/components/bonus-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { faqs, getFaq } from "@/data/faqs";
import { getProvider } from "@/data/providers";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, webPageJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return faqs.map((faq) => ({ slug: faq.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const faq = getFaq(slug);
  if (!faq) return {};

  return createMetadata({
    title: faq.question,
    description: faq.answer,
    path: `/faq/${faq.slug}`
  });
}

export default async function FAQPage({ params }: PageProps) {
  const { slug } = await params;
  const faq = getFaq(slug);
  if (!faq) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: faq.question, item: `/faq/${faq.slug}` }
        ])}
      />
      <JsonLd data={faqJsonLd([{ question: faq.question, answer: faq.answer }])} />
      <JsonLd
        data={webPageJsonLd({
          title: faq.question,
          description: faq.answer,
          path: `/faq/${faq.slug}`,
          updatedAt: faq.lastUpdated
        })}
      />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/faq/${faq.slug}`, label: faq.question }
          ]}
        />
        <article className="max-w-3xl">
          <LastUpdated date={faq.lastUpdated} />
          <h1 className="mt-4 text-4xl font-bold tracking-normal">{faq.question}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{faq.answer}</p>
          <div className="mt-8 grid gap-5">
            <BonusCard title="Practical examples">
              <ul className="list-disc space-y-2 pl-5">
                {faq.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </BonusCard>
            <BonusCard title="Provider rules vary">
              <p>
                Treat this as general educational guidance, not legal or financial advice. Money transfer providers can
                set different rules by country, corridor, account type, payment method, and campaign.
              </p>
            </BonusCard>
            <BonusCard title="Related provider pages">
              <ul className="list-disc space-y-2 pl-5">
                {faq.providerLinks.map((slug) => {
                  const provider = getProvider(slug);
                  if (!provider) return null;
                  return (
                    <li key={slug}>
                      <Link href={`/providers/${provider.slug}`} className="font-medium text-primary">
                        {provider.name} bonus guide
                      </Link>
                      {" and "}
                      <Link href={`/providers/${provider.slug}/referral-code`} className="font-medium text-primary">
                        referral code page
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </BonusCard>
          </div>
        </article>
      </Container>
    </>
  );
}
