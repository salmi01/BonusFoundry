import Link from "next/link";
import { LastVerified, QuickAnswer, RelatedResources } from "@/components/ai-content";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";
import { getBlogPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Bonus Foundry blog",
  description: "Updates and practical notes about money transfer welcome bonuses and referral terms.",
  path: "/blog"
});

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();
  const lastUpdated = posts[0]?.updatedAt ?? "2026-07-09";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Blog", item: "/blog" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Bonus Foundry blog",
          description: "Updates and practical notes about money transfer welcome bonuses and referral terms.",
          path: "/blog",
          updatedAt: lastUpdated
        })}
      />
      <Container className="py-10">
        <LastVerified date={formatDate(lastUpdated)} />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Blog</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
          Practical updates and checks for people comparing referral and welcome bonus terms.
        </p>
        <div className="mt-8">
          <QuickAnswer answer="Use the Bonus Foundry blog for practical notes about money transfer bonus terms, Referral Code conditions, Promo Code checks, and provider offer review habits." />
        </div>
        <div className="mt-8 grid gap-5">
          {posts.map((post) => (
            <Card key={post.slug} className="transition-colors hover:border-primary/40">
              <article>
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</p>
                  <CardTitle>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{post.description}</p>
                </CardContent>
              </article>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <RelatedResources
            links={[
              { href: "/guides", label: "Referral and bonus guides" },
              { href: "/providers", label: "Provider bonus guides" },
              { href: "/faq", label: "Referral code FAQ" },
              { href: "/disclosure", label: "Referral disclosure" }
            ]}
          />
        </div>
      </Container>
    </>
  );
}
