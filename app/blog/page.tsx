import Link from "next/link";
import { Container } from "@/components/container";
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
          <article key={post.slug} className="rounded-md border bg-card p-5">
            <p className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</p>
            <h2 className="mt-2 text-xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
