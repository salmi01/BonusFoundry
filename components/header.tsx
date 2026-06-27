import Link from "next/link";
import { Landmark } from "lucide-react";
import { Container } from "@/components/container";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold" aria-label={`${siteConfig.name} home`}>
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Landmark className="size-5" aria-hidden="true" />
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
