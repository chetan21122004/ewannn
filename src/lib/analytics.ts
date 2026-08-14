import { GA_MEASUREMENT_ID } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackPageView(path: string) {
  if (typeof navigator !== "undefined" && /HeadlessChrome/i.test(navigator.userAgent)) {
    return;
  }

  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
}
