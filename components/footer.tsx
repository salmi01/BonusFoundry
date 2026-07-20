import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { navItems, siteConfig, trustLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-card/90">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
        <div>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={2172}
            height={724}
            className="h-9 w-auto"
          />
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Independent guidance on referral programs and welcome bonuses for money transfer and fintech apps.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-foreground" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Trust</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {trustLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-foreground" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
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
