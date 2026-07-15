import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { COMPANY_EMAIL } from "@/lib/site";

type ContactInquiryContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const ContactInquiryContext = createContext<ContactInquiryContextValue | null>(null);

const CONTACT_FORM_PATH = "/contact#contact-form";

const normalizeContactPath = (href: string) => {
  const [path, hash = ""] = href.split("#");
  const pathname = path?.split("?")[0]?.replace(/\/$/, "") ?? "";
  return { pathname, hash };
};

export const isContactInquiryHref = (href: string) => {
  const { pathname, hash } = normalizeContactPath(href);
  if (pathname !== "/contact") return false;
  return hash.length === 0;
};

export const isContactInquiryMailto = (href: string) => {
  const lower = href.toLowerCase();
  if (!lower.startsWith("mailto:")) return false;

  const address = lower.slice("mailto:".length).split("?")[0]?.trim();
  if (address !== COMPANY_EMAIL.toLowerCase()) return false;

  return lower.includes("subject=");
};

export const useContactInquiry = () => {
  const context = useContext(ContactInquiryContext);
  if (!context) {
    throw new Error("useContactInquiry must be used within ContactInquiryProvider");
  }
  return context;
};

const scrollToContactForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const ContactInquiryProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContactForm = useCallback(() => {
    const onContactPage = location.pathname.replace(/\/$/, "") === "/contact";

    if (onContactPage) {
      scrollToContactForm();
      return;
    }

    navigate(CONTACT_FORM_PATH);
  }, [location.pathname, navigate]);

  const value = useMemo(
    () => ({
      open: goToContactForm,
      close: () => {},
      isOpen: false,
    }),
    [goToContactForm],
  );

  return <ContactInquiryContext.Provider value={value}>{children}</ContactInquiryContext.Provider>;
};

export default ContactInquiryProvider;
