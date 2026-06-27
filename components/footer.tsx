import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-card">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Independent guidance on referral programs and welcome bonuses for money transfer and fintech apps.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/providers/taptap-send">Providers</Link>
            </li>
            <li>
              <Link href="/corridors/france-to-morocco">Corridors</Link>
            </li>
            <li>
              <Link href="/guides/how-referral-codes-work">Guides</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Disclosure</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Referral links or codes on this site may generate a reward for us if you qualify and use them.
          </p>
        </div>
      </Container>
    </footer>
  );
}
