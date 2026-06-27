import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Provider } from "@/data/providers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="h-full overflow-hidden transition-colors hover:border-primary/40">
      <article className="flex h-full flex-col">
        <CardHeader>
          <CardTitle className="text-lg">{provider.name}</CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">{provider.description}</p>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <p className="text-sm font-medium leading-6">{provider.welcomeBonus}</p>
          <p className="mt-4 inline-flex w-fit rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {provider.referralCode ? `Code listed: ${provider.referralCode}` : "No known code listed"}
          </p>
          <Link
            href={`/providers/${provider.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Read guide
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </CardContent>
      </article>
    </Card>
  );
}
