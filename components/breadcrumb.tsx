import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="size-4" aria-hidden="true" /> : null}
            <Link href={item.href} className="rounded-sm hover:text-foreground">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
