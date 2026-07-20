import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 shadow-sm backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} home`}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={2172}
            height={724}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-end gap-1 rounded-lg border bg-card/80 p-1 text-sm shadow-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
