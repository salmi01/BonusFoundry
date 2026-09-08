import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Provider } from "@/data/providers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="h-full min-w-0 overflow-hidden transition-colors hover:border-primary/40">
      <article className="flex h-full min-w-0 flex-col">
        <CardHeader className="p-4 pb-3 sm:p-5 sm:pb-3">
          <CardTitle className="text-lg">{provider.name}</CardTitle>
          <p className="break-words text-sm leading-6 text-muted-foreground">{provider.description}</p>
        </CardHeader>
        <CardContent className="flex min-w-0 flex-1 flex-col p-4 pt-2 sm:p-5 sm:pt-2">
          <p className="break-words text-sm font-medium leading-6">{provider.welcomeBonus}</p>
          <p className="mt-4 inline-flex max-w-full w-fit break-words whitespace-normal rounded-full bg-muted px-3 py-1 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {provider.referralCode ? `Code listed: ${provider.referralCode}` : "Check referral details"}
          </p>
          <Link
            href={`/providers/${provider.slug}/referral-code`}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primary"
          >
            {provider.name} referral details
          </Link>
          <Link
            href={`/providers/${provider.slug}`}
            className="-ml-2 mt-4 inline-flex min-h-11 w-fit max-w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-primary transition-colors hover:bg-muted sm:mt-5"
          >
            Read guide
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </CardContent>
      </article>
    </Card>
  );
}
