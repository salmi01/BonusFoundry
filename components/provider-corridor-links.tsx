import Link from "next/link";
import { getProviderCorridors } from "@/data/corridors";
import type { Provider } from "@/data/providers";

export function ProviderCorridorLinks({
  provider
}: {
  provider: Pick<Provider, "slug" | "name">;
}) {
  const corridors = getProviderCorridors(provider.slug);
  if (!corridors.length) return null;

  const sendingCountries = [
    ...new Set(corridors.map((corridor) => corridor.from))
  ];
  const headingId = `${provider.slug}-corridor-comparisons`;

  return (
    <section
      className="min-w-0 rounded-lg border bg-card p-5 shadow-sm"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="text-xl font-semibold leading-tight">
        Compare {provider.name} by transfer route
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        These corridor guides include {provider.name} in their provider
        comparisons. Compare costs, delivery options and referral conditions for
        your route, then confirm availability in the provider&apos;s live quote.
      </p>
      <div className="mt-4 grid gap-5 sm:grid-cols-2">
        {sendingCountries.map((country) => (
          <div key={country} className="min-w-0">
            <h3 className="text-sm font-semibold">Sending from {country}</h3>
            <ul className="mt-2 space-y-1">
              {corridors
                .filter((corridor) => corridor.from === country)
                .map((corridor) => (
                  <li key={corridor.slug}>
                    <Link
                      href={`/corridors/${corridor.slug}`}
                      className="inline-flex min-h-11 items-center rounded-md py-2 text-sm font-medium leading-6 text-primary underline [overflow-wrap:anywhere]"
                    >
                      {corridor.from} to {corridor.to} transfers
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
