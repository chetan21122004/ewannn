/** Canonical origin per AEO specification (Organization / JSON-LD). */
export const SITE_URL = "https://www.ewan.co.in";

export const SITE_LOGO = "/uvanLogo.png";
export const SITE_LOGO_ALT = "UVAN - Asia Market Entry";

export const SOHAM_LINKEDIN = "https://www.linkedin.com/in/soham-kakade-77b2819b/";
export const SUKHADA_LINKEDIN = "https://www.linkedin.com/in/cma-sukhada-kakade-bhalerao-5b3789401/";
export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/ewan-business-solutions/";

export const COMPANY_EMAIL = "info@ewan.co.in";
export const SOHAM_EMAIL = "soham.kakade@ewan.co.in";
export const COMPANY_PHONE = "+91-8275744740";
export const COMPANY_ADDRESS =
  "Flat no 14, Fourth Floor, Asmant Apartment, near Quantum Works, Erandwane, Karve Road, Pune - 411004";

export const ORGANIZATION_SAME_AS = [
  "https://www.facebook.com/EwanBusinessSolutions?mibextid=ZbWKwL",
  COMPANY_LINKEDIN,
  "https://www.instagram.com/ewanbizsolution/",
  "https://x.com/ewanbusiness",
] as const;

/** E.164 without + - used for wa.me links */
export const WHATSAPP_NUMBER = "918275744740";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Set `VITE_CALENDLY_SCHEDULING_URL` to your Calendly event URL (e.g. https://calendly.com/name/15min) */
export const CALENDLY_SCHEDULING_URL =
  (import.meta.env.VITE_CALENDLY_SCHEDULING_URL as string | undefined)?.trim() ?? "";

export const getCalendlyEmbedUrl = () => {
  if (!CALENDLY_SCHEDULING_URL || CALENDLY_SCHEDULING_URL === "https://calendly.com") return null;
  return `${CALENDLY_SCHEDULING_URL.replace(/\?.*$/, "").replace(/\/$/, "")}?embed=true`;
};
