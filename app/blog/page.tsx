import Link from "next/link";
import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Bonus Foundry blog",
  description: "Updates and practical notes about money transfer welcome bonuses and referral terms.",
  path: "/blog"
});

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <Container className="py-10">
      <h1 className="text-4xl font-bold tracking-normal">Blog</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        Practical updates and checks for people comparing referral and welcome bonus terms.
      </p>
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
    </Container>
  );
}
