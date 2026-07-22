import Script from "next/script";

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function GoogleAdsTag() {
  if (!googleAdsId) return null;

  return (
    <>
      <Script
        id="google-ads-global-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          window.gtag('js', new Date());
          window.gtag('config', '${googleAdsId}');
        `}
      </Script>
    </>
  );
}
