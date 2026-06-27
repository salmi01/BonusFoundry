import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { faqs, getFaq } from "@/data/faqs";
import { breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

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
        </article>
      </Container>
    </>
  );
}
