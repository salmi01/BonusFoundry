import Link from "next/link";
import {
  getMoroccoProvider,
  moroccoBonuses,
  moroccoProviderSlugs,
  moroccoRoutes,
  type MoroccoProviderSlug
} from "@/data/morocco-guide";
import { formatDate } from "@/lib/utils";

function ReferralMethod({ slug }: { slug: MoroccoProviderSlug }) {
  const { referral, method } = getMoroccoProvider(slug);
  return referral.code || referral.link ? (
    <Link href={`/providers/${slug}/referral-code`}>{method}</Link>
  ) : (
    <span>{method}</span>
  );
}

function ProviderName({ slug, name }: { slug: string; name: string }) {
  return slug === "xoom" ? (
    <a href="https://www.xoom.com/morocco/send-money?languagecode=en">{name}</a>
  ) : (
    <Link href={`/providers/${slug}`}>{name}</Link>
  );
}

export function MoroccoAppsAtGlanceTable() {
  return (
    <div
      role="region"
      aria-label="Morocco service comparison, scroll horizontally for all columns"
      tabIndex={0}
      className="mt-5 min-w-0 w-full max-w-full overflow-x-auto rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    >
      <table className="w-full min-w-[900px] border-collapse text-left text-sm">
        <caption className="border-b bg-muted/40 px-4 py-3 text-left">
          Morocco services: official documentation checked November 15, 2026.
          Sender routes and live quotes control availability. Scroll
          horizontally on a small screen.{" "}
          <a href="#morocco-bonuses">Compare bonuses separately</a>.
        </caption>
        <thead className="bg-muted text-foreground">
          <tr>
            {[
              "Provider",
              "Best use case",
              "Morocco payout",
              "Where verified",
              "Fee / FX approach",
              "Provider last checked"
            ].map((label) => (
              <th
                key={label}
                scope="col"
                className="border-b px-4 py-3 font-semibold"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {moroccoRoutes.map((route) => (
            <tr key={route.slug} className="border-b align-top last:border-b-0">
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-3 font-medium text-foreground"
              >
                <ProviderName slug={route.slug} name={route.name} />
                <br />
                <a
                  className="text-xs font-normal"
                  href={`#morocco-${route.slug}`}
                >
                  Details and sources
                </a>
              </th>
              <td className="px-4 py-3">{route.bestFor}</td>
              <td className="px-4 py-3">{route.delivery}</td>
              <td className="px-4 py-3">{route.senders}</td>
              <td className="px-4 py-3">{route.fees}</td>
              <td className="px-4 py-3">
                <time dateTime={route.checkedAt}>
                  {formatDate(route.checkedAt)}
                </time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MoroccoReferralBonusesTable() {
  return (
    <div
      role="region"
      aria-label="Morocco invitation comparison, scroll horizontally for all columns"
      tabIndex={0}
      className="mt-5 min-w-0 w-full max-w-full overflow-x-auto rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    >
      <table className="w-full min-w-[800px] border-collapse text-left text-sm">
        <caption className="border-b bg-muted/40 px-4 py-3 text-left">
          Invitation evidence is separate from service availability. A November
          source check does not re-date historical app evidence or prove
          successful redemption.
        </caption>
        <thead className="bg-muted text-foreground">
          <tr>
            {[
              "Provider / invitation",
              "New-user benefit and referrer distinction",
              "Qualifying transfer",
              "Evidence, dates and terms"
            ].map((label) => (
              <th
                key={label}
                scope="col"
                className="border-b px-4 py-3 font-semibold"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {moroccoProviderSlugs.map((slug) => {
            const { provider, referral } = getMoroccoProvider(slug);
            const bonus = moroccoBonuses[slug];
            return (
              <tr
                key={slug}
                id={`morocco-bonus-${slug}`}
                className="border-b align-top last:border-b-0"
              >
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-foreground"
                >
                  <Link
                    className="whitespace-nowrap"
                    href={`/providers/${slug}`}
                  >
                    {provider.name}
                  </Link>
                  <div className="mt-2 font-normal">
                    <ReferralMethod slug={slug} />
                  </div>
                  {referral.link && (
                    <div className="mt-2 font-normal">
                      <a href={referral.link} rel="sponsored nofollow">
                        Open invitation
                      </a>
                    </div>
                  )}
                </th>
                <td className="px-4 py-3">{bonus.offer}</td>
                <td className="px-4 py-3">{bonus.minimum}</td>
                <td className="px-4 py-3">
                  {bonus.evidence}
                  <ul className="mt-2 space-y-1">
                    {bonus.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url}>{source.label}</a>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/providers/${slug}/referral-code`}>
                    Provider offer details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function MoroccoProviderReviews() {
  return moroccoRoutes.map((route) => (
    <section
      key={route.slug}
      id={`morocco-${route.slug}`}
      className="mt-8 scroll-mt-6"
    >
      <h3 className="text-xl font-semibold">{route.name}</h3>
      <dl className="mt-4 space-y-3 leading-7 text-muted-foreground">
        {[
          ["Best for", route.bestFor],
          ["Where verified", route.senders],
          ["Morocco payout methods", route.delivery],
          ["Fee / FX approach", route.fees],
          ["Delivery timing (estimate)", route.timing],
          ["Limitations", route.limitations]
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="inline font-semibold text-foreground">{label}: </dt>
            <dd className="inline">{value}</dd>
          </div>
        ))}
        <div>
          <dt className="inline font-semibold text-foreground">
            Referral offer:{" "}
          </dt>
          <dd className="inline">
            {route.slug === "xoom" ? (
              "No BonusFoundry offer verified; included for its transfer service."
            ) : (
              <>
                <a href={`#morocco-bonus-${route.slug}`}>
                  See the {route.name} invitation evidence and conditions
                </a>
                .{" "}
                <Link href={`/providers/${route.slug}/referral-code`}>
                  Full referral guide
                </Link>
                .
              </>
            )}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Official sources:</dt>
          <dd>
            <ul className="list-disc pl-6">
              {route.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url}>{source.label}</a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="inline font-semibold text-foreground">
            Provider last checked:{" "}
          </dt>
          <dd className="inline">
            <time dateTime={route.checkedAt}>
              {formatDate(route.checkedAt)}
            </time>{" "}
            (documentation review; no test transfer).
          </dd>
        </div>
      </dl>
    </section>
  ));
}
