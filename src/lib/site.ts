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
