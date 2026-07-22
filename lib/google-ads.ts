const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

type TrackGoogleAdsConversionInput = {
  conversionLabel: string;
  callback?: () => void;
};

export function trackGoogleAdsConversion({
  conversionLabel,
  callback
}: TrackGoogleAdsConversionInput) {
  if (typeof window === "undefined" || !googleAdsId || typeof window.gtag !== "function") {
    callback?.();
    return false;
  }

  window.gtag("event", "conversion", {
    send_to: `${googleAdsId}/${conversionLabel}`,
    event_callback: callback
  });

  return true;
}
