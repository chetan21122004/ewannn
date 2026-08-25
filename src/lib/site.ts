/** Canonical origin per AEO specification (Organization / JSON-LD). Override with `VITE_SITE_URL`. */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() || "https://www.uvan.co.in";

export const SITE_OG_IMAGE = `${SITE_URL.replace(/\/$/, "")}/uvanLogo.png`;

export const SITE_LOGO = "/uvanLogo.png";
export const SITE_LOGO_ALT = "UVAN logo";

/** Google Analytics 4 measurement ID. Override with `VITE_GA_MEASUREMENT_ID`. */
export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() || "G-QQVY5K2K48";

export const SOHAM_LINKEDIN = "https://www.linkedin.com/in/soham-kakade-77b2819b/";
export const SUKHADA_LINKEDIN = "https://www.linkedin.com/in/cma-sukhada-kakade-bhalerao-5b3789401/";
export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/ewan-business-solutions/";
export const COMPANY_FACEBOOK = "https://www.facebook.com/uvan.international";
export const COMPANY_INSTAGRAM = "https://www.instagram.com/uvan.international";
export const COMPANY_X = "https://x.com/uvan__";
export const COMPANY_X_HANDLE = "@uvan__";
export const COMPANY_YOUTUBE = "https://www.youtube.com/@EWAN-SSK";

export const PROJECTS_EMAIL = "projects@uvan.co.in";
export const SOHAM_EMAIL = "soham@uvan.co.in";
/** Alias for org/legal/schema display and primary company inbox */
export const COMPANY_EMAIL = PROJECTS_EMAIL;
export const COMPANY_LEGAL_NAME = "Uvan International Liaisoning Private Limited";
export const COMPANY_ALTERNATE_NAME = "Ewan Business Solutions Private Limited";
export const COMPANY_DESCRIPTION =
  "UVAN helps foreign companies enter India and Indian companies expand into Asia - market entry, liaisoning, and language services in 125+ languages.";
export const COMPANY_PHONE = "+91-8275744740";
export const COMPANY_ADDRESS =
  "Flat no 14, Fourth Floor, Asmant Apartment, near Quantum Works, Erandwane, Karve Road, Pune - 411004";
export const COMPANY_SCHEMA_STREET_ADDRESS =
  "Flat No. 14, Asmant Apartments, Karve Rd, near Quantum works, behind SBI, Pandurang Colony, Erandwane";

export const ORGANIZATION_SAME_AS = [
  COMPANY_LINKEDIN,
  COMPANY_X,
  COMPANY_YOUTUBE,
  COMPANY_FACEBOOK,
  COMPANY_INSTAGRAM,
] as const;

/** E.164 without + - used for wa.me links */
export const WHATSAPP_NUMBER = "918275744740";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Set `VITE_CALENDLY_SCHEDULING_URL` to override the default Calendly event URL */
export const CALENDLY_SCHEDULING_URL =
  (import.meta.env.VITE_CALENDLY_SCHEDULING_URL as string | undefined)?.trim() ||
  "https://calendly.com/soham-uvan/30min";

export const getCalendlyEmbedUrl = () => {
  if (!CALENDLY_SCHEDULING_URL || CALENDLY_SCHEDULING_URL === "https://calendly.com") return null;
  return `${CALENDLY_SCHEDULING_URL.replace(/\?.*$/, "").replace(/\/$/, "")}?embed=true`;
};
