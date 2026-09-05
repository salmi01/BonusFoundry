import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 shadow-sm backdrop-blur">
      <Container className="flex min-h-16 flex-col items-stretch gap-2 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:py-0">
        <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} home`}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={2172}
            height={724}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/80 p-1 text-sm shadow-sm sm:justify-end"
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
