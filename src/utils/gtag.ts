type ConversionParams = {
  sendTo: string;
  eventName?: string;
};

export function trackAdsConversion({ sendTo, eventName = "conversion" }: ConversionParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    send_to: sendTo,
  });
}

