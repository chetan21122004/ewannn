/** Canonical origin per AEO specification (Organization / JSON-LD). */
export const SITE_URL = "https://www.ewan.co.in";

export const SITE_LOGO = "/uvanLogo.png";
export const SITE_LOGO_ALT = "UVAN - Asia Market Entry";

export const SOHAM_LINKEDIN = "https://www.linkedin.com/in/soham-kakade-77b2819b/";
export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/ewan-business-solutions/";

/** E.164 without + — used for wa.me links */
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
