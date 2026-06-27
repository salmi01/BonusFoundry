import Link from "next/link";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { ProviderCard } from "@/components/provider-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { corridors, getCorridorProviders } from "@/data/corridors";
import { faqs } from "@/data/faqs";
import { providers } from "@/data/providers";
import { createMetadata, faqJsonLd } from "@/lib/seo";
import { getGuides } from "@/lib/content";

export const metadata = createMetadata({
  title: "Welcome bonus and referral program guides",
  description:
    "Independent guides to money transfer and fintech welcome bonuses, referral codes, eligibility rules, and first-transfer offers.",
  path: "/"
});

export default async function HomePage() {
  const guides = await getGuides();

  return (
    <>
      <JsonLd data={faqJsonLd(faqs.slice(0, 2).map(({ question, answer }) => ({ question, answer })))} />
      <section className="border-b bg-card/70">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <p className="inline-flex rounded-full border bg-background px-3 py-1 text-sm font-semibold text-primary shadow-sm">
              Independent bonus guides
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-normal sm:text-5xl">
              Understand welcome bonuses before you sign up.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Bonus Foundry explains referral programs, signup offers, and first-transfer rewards for money transfer and
              fintech apps. We answer the practical questions first, then show our referral code when it is relevant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/providers/taptap-send">Browse providers</CTAButton>
              <Link
                href="/guides/how-referral-codes-work"
                className={buttonStyles({ variant: "outline" })}
              >
                Learn how referral codes work
              </Link>
            </div>
          </div>
          <Card className="self-start">
            <CardHeader>
              <CardTitle>What this site helps with</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                <li>Check whether a welcome bonus is likely to apply.</li>
                <li>Understand referral code requirements before a first transfer.</li>
                <li>Find provider and corridor pages with current update dates.</li>
                <li>See clear disclosure when a link may reward us.</li>
              </ul>
            </CardContent>
          </Card>
        </Container>
      </section>

      <Container className="space-y-16 py-16">
        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Featured providers</h2>
              <p className="mt-2 text-sm text-muted-foreground">Start with the providers people search for most.</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {providers.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Popular corridors</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {corridors.map((corridor) => (
              <Card key={corridor.slug} className="transition-colors hover:border-primary/40">
                <article>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {corridor.from} to {corridor.to}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{corridor.summary}</p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Providers: {getCorridorProviders(corridor).map((provider) => provider.name).join(", ")}
                    </p>
                    <Link
                      href={`/corridors/${corridor.slug}`}
                      className="mt-4 inline-block text-sm font-semibold text-primary"
                    >
                      Compare bonus options
                    </Link>
                  </CardContent>
                </article>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Latest guides</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {guides.map((guide) => (
              <Card key={guide.slug} className="transition-colors hover:border-primary/40">
                <article>
                  <CardHeader>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{guide.description}</p>
                    <Link href={`/guides/${guide.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary">
                      Read guide
                    </Link>
                  </CardContent>
                </article>
              </Card>
            ))}
          </div>
        </section>

        <FAQ items={faqs.slice(0, 2).map(({ question, answer }) => ({ question, answer }))} />
      </Container>
    </>
  );
}
