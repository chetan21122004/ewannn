import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useAskSohamInquiry } from "@/components/AskSohamInquiryProvider";
import { PROJECTS_EMAIL, SOHAM_EMAIL } from "@/lib/site";

type ContactInquiryContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const ContactInquiryContext = createContext<ContactInquiryContextValue | null>(null);

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
  const inquiryEmails = [PROJECTS_EMAIL, SOHAM_EMAIL].map((email) => email.toLowerCase());
  if (!inquiryEmails.includes(address)) return false;

  return lower.includes("subject=");
};

export const useContactInquiry = () => {
  const context = useContext(ContactInquiryContext);
  if (!context) {
    throw new Error("useContactInquiry must be used within ContactInquiryProvider");
  }
  return context;
};

export const ContactInquiryProvider = ({ children }: { children: ReactNode }) => {
  const { open: openSohamInquiry, close: closeSohamInquiry, isOpen } = useAskSohamInquiry();

  const open = useCallback(() => {
    openSohamInquiry();
  }, [openSohamInquiry]);

  const value = useMemo(
    () => ({
      open,
      close: closeSohamInquiry,
      isOpen,
    }),
    [open, closeSohamInquiry, isOpen],
  );

  return <ContactInquiryContext.Provider value={value}>{children}</ContactInquiryContext.Provider>;
};

export default ContactInquiryProvider;
