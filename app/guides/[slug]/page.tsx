import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { getGuide, guideSlugs } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = await getGuide(slug);
  if (!guide) return {};

  return createMetadata({
    title: guide.meta.title,
    description: guide.meta.description,
    path: `/guides/${guide.meta.slug}`
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = await getGuide(slug);
  if (!guide) notFound();
  const { Content, meta } = guide;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: "Guides", item: `/guides/${meta.slug}` },
          { name: meta.title, item: `/guides/${meta.slug}` }
        ])}
      />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: `/guides/${meta.slug}`, label: meta.title }
          ]}
        />
        <article className="max-w-3xl">
          <LastUpdated date={meta.updatedAt} />
          <h1 className="mt-4 text-4xl font-bold tracking-normal">{meta.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{meta.description}</p>
          <div className="mt-8 rounded-md border bg-card p-5">
            <h2 className="text-lg font-semibold">On this page</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Direct answer</li>
              <li>How it works</li>
              <li>What to check before using a code</li>
            </ul>
          </div>
          <div className="mt-8">
            <Content />
          </div>
          <div className="mt-10">
            <Disclosure />
          </div>
        </article>
      </Container>
    </>
  );
}
