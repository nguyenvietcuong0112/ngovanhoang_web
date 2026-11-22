import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ADS_CONVERSION_SEND_TO, PHONE_TEL, ZALO_URL } from "@/constants/contact";
import { trackAdsConversion } from "@/utils/gtag";

type TrackedAnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

/** Phone link that fires Google Ads conversion tracking on click. */
export const TelLink = ({ children, onClick, ...props }: TrackedAnchorProps) => (
  <a
    href={`tel:${PHONE_TEL}`}
    onClick={(e) => {
      trackAdsConversion({ sendTo: ADS_CONVERSION_SEND_TO });
      onClick?.(e);
    }}
    {...props}
  >
    {children}
  </a>
);

/** Zalo link that opens in a new tab and fires Google Ads conversion tracking on click. */
export const ZaloLink = ({ children, onClick, ...props }: TrackedAnchorProps) => (
  <a
    href={ZALO_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      trackAdsConversion({ sendTo: ADS_CONVERSION_SEND_TO });
      onClick?.(e);
    }}
    {...props}
  >
    {children}
  </a>
);
