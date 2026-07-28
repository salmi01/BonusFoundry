import Link from "next/link";

export function MoroccoAppsAtGlanceTable() {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[980px] border-collapse text-left text-sm">
        <thead className="bg-muted text-foreground">
          <tr>
            <th className="border-b px-4 py-3 font-semibold">Provider</th>
            <th className="border-b px-4 py-3 font-semibold">Best for</th>
            <th className="border-b px-4 py-3 font-semibold">Morocco delivery methods</th>
            <th className="border-b px-4 py-3 font-semibold">Sending countries</th>
            <th className="border-b px-4 py-3 font-semibold">Fee model</th>
            <th className="border-b px-4 py-3 font-semibold">Referral or promo code</th>
            <th className="border-b px-4 py-3 font-semibold">Bonus</th>
            <th className="border-b px-4 py-3 font-semibold">Last verified</th>
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          <tr className="border-b align-top">
            <td className="px-4 py-3">
              <Link href="/providers/taptap-send">TapTap Send</Link>
            </td>
            <td className="px-4 py-3">Verified referral code and Morocco cash pickup</td>
            <td className="px-4 py-3">Bank deposit, Cash Plus and Wafacash cash pickup</td>
            <td className="px-4 py-3">EU, UK, US, Canada, UAE, Brazil and Australia listed on the official Morocco page</td>
            <td className="px-4 py-3">Bank transfers are described as no-fee; cash pickup has small fees on the official Morocco page</td>
            <td className="px-4 py-3">
              <Link href="/providers/taptap-send/referral-code">SALAHEDD1933</Link>
            </td>
            <td className="px-4 py-3">EUR10 or $10 after a qualifying first transfer of at least EUR100 or $100, manually verified by BonusFoundry</td>
            <td className="px-4 py-3">July 21, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">
              <Link href="/providers/remitly">Remitly</Link>
            </td>
            <td className="px-4 py-3">Broad Morocco payout options from the US route</td>
            <td className="px-4 py-3">Bank deposit, cash pickup and mobile wallet on the US-to-Morocco page</td>
            <td className="px-4 py-3">US route verified; other sender countries must be checked in Remitly</td>
            <td className="px-4 py-3">Live quote; Remitly says cost varies by amount, payment method and delivery option</td>
            <td className="px-4 py-3">
              <Link href="/providers/remitly/referral-code">Referral method: Personal referral link</Link>
            </td>
            <td className="px-4 py-3">Variable first-transfer or referral offer controlled by Remitly</td>
            <td className="px-4 py-3">July 21, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">
              <Link href="/providers/wise">Wise</Link>
            </td>
            <td className="px-4 py-3">Transparent bank-account pricing</td>
            <td className="px-4 py-3">Local bank account in Morocco</td>
            <td className="px-4 py-3">US-to-Morocco page verified; Wise has route-specific availability</td>
            <td className="px-4 py-3">Upfront Wise fee plus mid-market exchange rate; live calculator controls current cost</td>
            <td className="px-4 py-3">
              <Link href="/providers/wise/referral-code">Referral method: Personal referral link</Link>
            </td>
            <td className="px-4 py-3">Wise invite benefits vary by account, country and current invitation flow</td>
            <td className="px-4 py-3">July 21, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">
              <Link href="/providers/lemfi">LemFi</Link>
            </td>
            <td className="px-4 py-3">Verified referral code where the sender country is supported</td>
            <td className="px-4 py-3">Direct bank account, mobile money and more options described by LemFi; Morocco destination verified</td>
            <td className="px-4 py-3">Canada, Europe, UK and US sender availability described by LemFi help</td>
            <td className="px-4 py-3">Live app rate and fees; LemFi says rates change and users should check the app</td>
            <td className="px-4 py-3">
              <Link href="/providers/lemfi/referral-code">SALABGWQ</Link>
            </td>
            <td className="px-4 py-3">EUR10 or $10 after a qualifying first transfer of at least EUR100 or $100, manually verified by BonusFoundry</td>
            <td className="px-4 py-3">July 21, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">
              <Link href="/providers/ria">Ria</Link>
            </td>
            <td className="px-4 py-3">Agent network, cash pickup and bank deposit</td>
            <td className="px-4 py-3">Cash pickup, bank deposit and mobile wallet on the US-to-Morocco page</td>
            <td className="px-4 py-3">US route verified; Ria also supports online, app and agent transfers where available</td>
            <td className="px-4 py-3">Live quote; payment can include bank, card, wallet payments or cash depending on route</td>
            <td className="px-4 py-3">
              <Link href="/providers/ria/referral-code">9RMU-ENB7</Link>
            </td>
            <td className="px-4 py-3">BonusFoundry lists 9RMU-ENB7 as the Ria referral code; live eligibility must be checked in Ria</td>
            <td className="px-4 py-3">July 21, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">
              <Link href="/providers/sendwave">Sendwave</Link>
            </td>
            <td className="px-4 py-3">Cash pickup only from listed sender countries</td>
            <td className="px-4 py-3">Cash pickup only for Morocco</td>
            <td className="px-4 py-3">US, Canada, France and UK listed by Sendwave for Morocco</td>
            <td className="px-4 py-3">Small percentage in the exchange rate; charges shown before checkout in the app</td>
            <td className="px-4 py-3">
              <Link href="/providers/sendwave/referral-code">I4H9G</Link>
            </td>
            <td className="px-4 py-3">BonusFoundry lists I4H9G as the Sendwave referral code; live eligibility must be checked in Sendwave</td>
            <td className="px-4 py-3">July 21, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">
              <Link href="/providers/paysend">Paysend</Link>
            </td>
            <td className="px-4 py-3">Card, bank-account and wallet delivery</td>
            <td className="px-4 py-3">Mastercard cards, bank accounts and digital wallets</td>
            <td className="px-4 py-3">US-to-Morocco page verified; route availability varies by sender country</td>
            <td className="px-4 py-3">Live quote; official route page shows fee, rate and expected arrival before sending</td>
            <td className="px-4 py-3">
              <Link href="/providers/paysend/referral-code">Referral method: Personal referral link</Link>
            </td>
            <td className="px-4 py-3">Paysend referral program may reward invited transfers; terms and country equivalents vary</td>
            <td className="px-4 py-3">July 21, 2026</td>
          </tr>
          <tr className="align-top">
            <td className="px-4 py-3">
              <Link href="/providers/worldremit">WorldRemit</Link>
            </td>
            <td className="px-4 py-3">Multiple payout methods and cash pickup</td>
            <td className="px-4 py-3">Bank transfer, cash pickup, mobile money, airtime top-up and debit-card deposit where available</td>
            <td className="px-4 py-3">US-to-Morocco page verified; debit-card deposit source lists selected European senders</td>
            <td className="px-4 py-3">Live quote; WorldRemit shows fees and exchange rate upfront</td>
            <td className="px-4 py-3">No verified code listed</td>
            <td className="px-4 py-3">No verified BonusFoundry referral code is currently listed for this provider.</td>
            <td className="px-4 py-3">July 21, 2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function MoroccoReferralBonusesTable() {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead className="bg-muted text-foreground">
          <tr>
            <th className="border-b px-4 py-3 font-semibold">Provider</th>
            <th className="border-b px-4 py-3 font-semibold">Referral or promo code</th>
            <th className="border-b px-4 py-3 font-semibold">Bonus</th>
            <th className="border-b px-4 py-3 font-semibold">Minimum transfer</th>
            <th className="border-b px-4 py-3 font-semibold">Verified source</th>
            <th className="border-b px-4 py-3 font-semibold">Last verified</th>
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          <tr className="border-b align-top">
            <td className="px-4 py-3">TapTap Send</td>
            <td className="px-4 py-3">SALAHEDD1933</td>
            <td className="px-4 py-3">EUR10 or $10</td>
            <td className="px-4 py-3">EUR100 or $100 first qualifying transfer</td>
            <td className="px-4 py-3">
              Manual BonusFoundry verification in the TapTap Send app; full instructions on the{" "}
              <Link href="/providers/taptap-send/referral-code">TapTap Send referral page</Link>
            </td>
            <td className="px-4 py-3">July 20, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">LemFi</td>
            <td className="px-4 py-3">SALABGWQ</td>
            <td className="px-4 py-3">EUR10 or $10</td>
            <td className="px-4 py-3">EUR100 or $100 first qualifying transfer</td>
            <td className="px-4 py-3">
              Manual BonusFoundry verification in the LemFi app; full instructions on the{" "}
              <Link href="/providers/lemfi/referral-code">LemFi referral page</Link>
            </td>
            <td className="px-4 py-3">July 20, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">Ria</td>
            <td className="px-4 py-3">9RMU-ENB7</td>
            <td className="px-4 py-3">Varies by live Ria flow</td>
            <td className="px-4 py-3">Check Ria during signup or transfer</td>
            <td className="px-4 py-3">Existing BonusFoundry structured provider data</td>
            <td className="px-4 py-3">July 20, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">Sendwave</td>
            <td className="px-4 py-3">I4H9G</td>
            <td className="px-4 py-3">Varies by live Sendwave flow</td>
            <td className="px-4 py-3">Check Sendwave during signup or transfer</td>
            <td className="px-4 py-3">Existing BonusFoundry structured provider data</td>
            <td className="px-4 py-3">July 20, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">Wise</td>
            <td className="px-4 py-3">Referral method: Personal referral link</td>
            <td className="px-4 py-3">Varies by Wise invite/account flow</td>
            <td className="px-4 py-3">Depends on Wise invitation terms</td>
            <td className="px-4 py-3">Existing BonusFoundry structured provider data and Wise invite flow</td>
            <td className="px-4 py-3">July 20, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">Remitly</td>
            <td className="px-4 py-3">Referral method: Personal referral link</td>
            <td className="px-4 py-3">Varies by Remitly offer</td>
            <td className="px-4 py-3">Depends on Remitly referral terms</td>
            <td className="px-4 py-3">Existing BonusFoundry structured provider data and Remitly referral terms</td>
            <td className="px-4 py-3">July 20, 2026</td>
          </tr>
          <tr className="border-b align-top">
            <td className="px-4 py-3">Paysend</td>
            <td className="px-4 py-3">Referral method: Personal referral link</td>
            <td className="px-4 py-3">Paysend says referrers can earn per eligible friend transfer, up to local-equivalent caps</td>
            <td className="px-4 py-3">Depends on Paysend program terms</td>
            <td className="px-4 py-3">Existing BonusFoundry structured provider data and Paysend official bonus page</td>
            <td className="px-4 py-3">July 20, 2026</td>
          </tr>
          <tr className="align-top">
            <td className="px-4 py-3">WorldRemit</td>
            <td className="px-4 py-3">No verified BonusFoundry referral code is currently listed for this provider.</td>
            <td className="px-4 py-3">None listed by BonusFoundry</td>
            <td className="px-4 py-3">Not applicable</td>
            <td className="px-4 py-3">BonusFoundry provider data</td>
            <td className="px-4 py-3">July 20, 2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
