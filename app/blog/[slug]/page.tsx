import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Disclosure } from "@/components/disclosure";
import { JsonLd } from "@/components/json-ld";
import { articleJsonLd, breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { blogSlugs, getBlogPost } from "@/lib/content";
import { formatDate } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${post.meta.slug}`,
    type: "article",
    publishedTime: post.meta.publishedAt,
    modifiedTime: post.meta.updatedAt
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const { Content, meta } = post;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: meta.title, item: `/blog/${meta.slug}` }
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: meta.title,
          description: meta.description,
          path: `/blog/${meta.slug}`,
          publishedAt: meta.publishedAt,
          updatedAt: meta.updatedAt,
          author: meta.author
        })}
      />
      <Container className="py-10">
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: `/blog/${meta.slug}`, label: meta.title }
          ]}
        />
        <article className="max-w-3xl">
          <p className="text-sm text-muted-foreground">
            Published {formatDate(meta.publishedAt)} · Updated {formatDate(meta.updatedAt)} · {meta.author}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal">{meta.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{meta.description}</p>
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
