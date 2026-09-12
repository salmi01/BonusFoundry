import Link from "next/link";
import {
  getMoroccoProvider,
  type MoroccoProviderSlug
} from "@/data/morocco-guide";
import { formatDate } from "@/lib/utils";

// These route-specific observations were reviewed separately from provider offers.
const moroccoRoutes: {
  slug: MoroccoProviderSlug;
  bestFor: string;
  delivery: string;
  senders: string;
  fees: string;
}[] = [
  {
    slug: "taptap-send",
    bestFor: "Morocco cash pickup and route-specific referral offer",
    delivery: "Bank deposit, Cash Plus and Wafacash cash pickup",
    senders:
      "Check sending-country guides; selected European countries and US state restrictions apply",
    fees: "Bank transfers are described as no-fee; cash pickup has small fees on the official Morocco page"
  },
  {
    slug: "remitly",
    bestFor: "Broad Morocco payout options from the US route",
    delivery:
      "Bank deposit, cash pickup and mobile wallet on the US-to-Morocco page",
    senders:
      "US route verified; other sender countries must be checked in Remitly",
    fees: "Live quote; Remitly says cost varies by amount, payment method and delivery option"
  },
  {
    slug: "wise",
    bestFor: "Transparent bank-account pricing",
    delivery: "Local bank account in Morocco",
    senders:
      "US-to-Morocco page verified; Wise has route-specific availability",
    fees: "Upfront Wise fee plus mid-market exchange rate; live calculator controls current cost"
  },
  {
    slug: "lemfi",
    bestFor: "Verified referral code where the sender country is supported",
    delivery:
      "Direct bank account, mobile money and more options described by LemFi; Morocco destination verified",
    senders:
      "Canada, Europe, UK and US sender availability described by LemFi help",
    fees: "Live app rate and fees; LemFi says rates change and users should check the app"
  },
  {
    slug: "ria",
    bestFor: "Agent network, cash pickup and bank deposit",
    delivery:
      "Cash pickup, bank deposit and mobile wallet on the US-to-Morocco page",
    senders:
      "US route verified; Ria also supports online, app and agent transfers where available",
    fees: "Live quote; payment can include bank, card, wallet payments or cash depending on route"
  },
  {
    slug: "sendwave",
    bestFor: "Cash pickup only from listed sender countries",
    delivery: "Cash pickup only for Morocco",
    senders: "US, Canada, France and UK listed by Sendwave for Morocco",
    fees: "Small percentage in the exchange rate; charges shown before checkout in the app"
  },
  {
    slug: "paysend",
    bestFor: "Card, bank-account and wallet delivery",
    delivery: "Mastercard cards, bank accounts and digital wallets",
    senders:
      "US-to-Morocco page verified; route availability varies by sender country",
    fees: "Live quote; official route page shows fee, rate and expected arrival before sending"
  },
  {
    slug: "worldremit",
    bestFor: "Multiple payout methods and cash pickup",
    delivery:
      "Bank transfer, cash pickup, mobile money, airtime top-up and debit-card deposit where available",
    senders:
      "US-to-Morocco page verified; debit-card deposit source lists selected European senders",
    fees: "Live quote; WorldRemit shows fees and exchange rate upfront"
  }
];

function ReferralMethod({ slug }: { slug: MoroccoProviderSlug }) {
  const { referral, method } = getMoroccoProvider(slug);
  return referral.code || referral.link ? (
    <Link href={`/providers/${slug}/referral-code`}>{method}</Link>
  ) : (
    <span>{method}</span>
  );
}

export function MoroccoAppsAtGlanceTable() {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[980px] border-collapse text-left text-sm">
        <thead className="bg-muted text-foreground">
          <tr>
            {[
              "Provider",
              "Best for",
              "Morocco delivery methods",
              "Sending countries",
              "Fee model",
              "Referral or promo code",
              "Bonus",
              "Provider review"
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
          {moroccoRoutes.map((route) => {
            const { provider, referral, authority } = getMoroccoProvider(
              route.slug
            );
            return (
              <tr
                key={route.slug}
                className="border-b align-top last:border-b-0"
              >
                <td className="px-4 py-3">
                  <Link href={`/providers/${route.slug}`}>{provider.name}</Link>
                </td>
                <td className="px-4 py-3">{route.bestFor}</td>
                <td className="px-4 py-3">{route.delivery}</td>
                <td className="px-4 py-3">{route.senders}</td>
                <td className="px-4 py-3">{route.fees}</td>
                <td className="px-4 py-3">
                  <ReferralMethod slug={route.slug} />
                </td>
                <td className="px-4 py-3">{referral.welcomeBonus}</td>
                <td className="px-4 py-3">
                  {formatDate(authority.lastManualReview)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function MoroccoReferralBonusesTable() {
  const slugs: MoroccoProviderSlug[] = [
    "taptap-send",
    "lemfi",
    "ria",
    "sendwave",
    "wise",
    "remitly",
    "paysend",
    "worldremit"
  ];
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead className="bg-muted text-foreground">
          <tr>
            {[
              "Provider",
              "Referral or promo code",
              "Bonus",
              "Minimum transfer",
              "Evidence and terms",
              "Provider review"
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
          {slugs.map((slug) => {
            const { provider, referral, authority, minimum } =
              getMoroccoProvider(slug);
            return (
              <tr key={slug} className="border-b align-top last:border-b-0">
                <td className="px-4 py-3">
                  <Link href={`/providers/${slug}`}>{provider.name}</Link>
                </td>
                <td className="px-4 py-3">
                  <ReferralMethod slug={slug} />
                </td>
                <td className="px-4 py-3">{referral.welcomeBonus}</td>
                <td className="px-4 py-3">{minimum}</td>
                <td className="px-4 py-3">
                  {provider.proprietaryVerification?.verificationMethod ||
                    "Provider's current offer and help pages"}
                  .{" "}
                  <Link href={`/providers/${slug}/referral-code`}>
                    Sources and conditions
                  </Link>
                </td>
                <td className="px-4 py-3">
                  {formatDate(authority.lastManualReview)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function MoroccoProviderReferralFacts({
  slug
}: {
  slug: MoroccoProviderSlug;
}) {
  const { provider, referral, authority, minimum } = getMoroccoProvider(slug);
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>
        Referral method: <ReferralMethod slug={slug} />.
      </li>
      <li>Welcome offer: {referral.welcomeBonus}</li>
      <li>Eligibility: {provider.eligibleUsers}</li>
      <li>Minimum qualifying transfer: {minimum}</li>
      {slug === "ria" && (
        <li>
          Canadian residents are included in eligibility; confirm the Canadian
          reward and minimum in the Ria app.
        </li>
      )}
      {referral.payoutTiming && <li>Reward timing: {referral.payoutTiming}</li>}
      <li>
        Provider review: {formatDate(authority.lastManualReview)}.{" "}
        <Link
          className="font-medium text-primary underline"
          href={`/providers/${slug}/referral-code`}
        >
          Full {provider.name} offer conditions and sources
        </Link>
        .
      </li>
    </ul>
  );
}
