import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { LastUpdated } from "@/components/last-updated";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { corridors, getCorridorProviders } from "@/data/corridors";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Money transfer corridor guides with bonus opportunities",
  description:
    "Browse corridor pages that compare providers, payment methods, delivery options, referral bonuses, promo offers, and first-transfer checks by route.",
  path: "/corridors"
});

export default function CorridorsIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", item: "/" }, { name: "Corridors", item: "/corridors" }])} />
      <JsonLd
        data={webPageJsonLd({
          title: "Money transfer corridor guides with bonus opportunities",
          description:
            "Browse corridor pages that compare providers, payment methods, delivery options, referral bonuses, promo offers, and first-transfer checks by route.",
          path: "/corridors",
          updatedAt: "2026-07-09"
        })}
      />
      <Container className="py-10">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { href: "/corridors", label: "Corridors" }]} />
        <LastUpdated date="2026-07-09" />
        <h1 className="mt-4 text-4xl font-bold tracking-normal">Money transfer corridor guides</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          Corridor pages explain which providers to check for a route, which referral or promo opportunities may apply,
          what payment and delivery methods matter, and what to verify before sending money.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {corridors.map((corridor) => (
            <Card key={corridor.slug} className="transition-colors hover:border-primary/40">
              <article>
                <CardHeader>
                  <CardTitle>
                    {corridor.from} to {corridor.to}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{corridor.summary}</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Related providers: {getCorridorProviders(corridor).map((provider) => provider.name).join(", ")}
                  </p>
                  <Link
                    href={`/corridors/${corridor.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-primary"
                  >
                    Read corridor guide
                  </Link>
                </CardContent>
              </article>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
