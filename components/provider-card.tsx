import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Provider } from "@/data/providers";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <article className="rounded-md border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{provider.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{provider.description}</p>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium">{provider.welcomeBonus}</p>
      <Link
        href={`/providers/${provider.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        Read guide
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
