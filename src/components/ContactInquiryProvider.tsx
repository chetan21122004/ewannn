import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import { COMPANY_EMAIL } from "@/lib/site";

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

const ContactInquiryDialog = ({
  open,
  onOpenChange,
  formKey,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formKey: number;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-h-[min(92vh,860px)] max-w-xl overflow-y-auto rounded-[1.5rem] border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-0 shadow-[0_28px_80px_hsl(var(--brand-navy-950)/0.18)] sm:max-w-xl">
      <div className="border-b border-[hsl(var(--border-light))] bg-white px-6 pb-5 pt-6 sm:px-7">
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="font-serif text-2xl font-bold text-on-light sm:text-[1.65rem]">
            Send Us a Message
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-on-light-secondary">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
      </div>

      <div className="px-6 py-5 sm:px-7">
        <ContactInquiryForm key={formKey} showMeta={false} />

        <div className="mt-5 border-t border-[hsl(var(--border-light))] pt-4">
          <p className="text-xs leading-relaxed text-on-light-muted">
            Need full contact details?{" "}
            <Link
              to="/contact#contact-form"
              className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
            >
              Visit the contact page
            </Link>
          </p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export const ContactInquiryProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const openInquiry = useCallback(() => setOpen(true), []);
  const closeInquiry = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      setFormKey((value) => value + 1);
    }
  }, [open]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || (!isContactInquiryHref(href) && !isContactInquiryMailto(href))) return;

      event.preventDefault();
      event.stopPropagation();
      openInquiry();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [openInquiry]);

  const value = useMemo(
    () => ({
      open: openInquiry,
      close: closeInquiry,
      isOpen: open,
    }),
    [open, openInquiry, closeInquiry],
  );

  return (
    <ContactInquiryContext.Provider value={value}>
      {children}
      <ContactInquiryDialog open={open} onOpenChange={setOpen} formKey={formKey} />
    </ContactInquiryContext.Provider>
  );
};

export default ContactInquiryProvider;
