import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";
import { getGuides } from "@/lib/content";

export const metadata = createMetadata({
  title: "Referral code and welcome bonus guides",
  description:
    "Detailed guides explaining how money transfer referral codes, welcome bonuses, promo codes, and first-transfer offers usually work.",
  path: "/guides"
});

export default async function GuidesIndexPage() {
  const guides = await getGuides();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Guides", item: "/guides" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Referral code and welcome bonus guides",
          description:
            "Detailed guides explaining how money transfer referral codes, welcome bonuses, promo codes, and first-transfer offers usually work.",
          path: "/guides",
          updatedAt: "2026-07-08"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/guides", label: "Guides" }]} />
        <LastUpdated date="2026-07-08" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Referral code and bonus guides</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          These guides explain practical rules behind money transfer signup bonuses, including how to claim an offer,
          what can make a bonus fail, and what to compare before using a referral link.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Card key={guide.slug} className="transition-colors hover:border-primary/40">
              <article>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{guide.description}</p>
                </CardContent>
              </article>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
