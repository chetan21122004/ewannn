import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getHashId, isNonScrollHash } from "@/lib/hashNavigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { submitFormViaMailto } from "@/lib/formSubmit";
import { CALENDLY_SCHEDULING_URL, SOHAM_EMAIL } from "@/lib/site";

type AskSohamInquiryContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const AskSohamInquiryContext = createContext<AskSohamInquiryContextValue | null>(null);

export const ASK_SOHAM_MESSAGE_HASH = "send-message";

export type AskSohamLocationState = {
  openInquiry?: boolean;
};

export const isAskSohamPage = (pathname: string) => pathname.replace(/\/$/, "") === "/ask-soham";

export const askSohamMessageLink = {
  pathname: "/ask-soham",
  state: { openInquiry: true } satisfies AskSohamLocationState,
};

export const handleAskSohamNavClick = (
  event: { preventDefault: () => void },
  pathname: string,
) => {
  if (isAskSohamPage(pathname)) {
    event.preventDefault();
  }
};

export const isAskSohamInquiryHref = (href: string) => {
  const [path, hash = ""] = href.split("#");
  const pathname = path?.split("?")[0]?.replace(/\/$/, "") ?? "";
  if (pathname !== "/ask-soham") return false;
  return hash.length === 0;
};

export const useAskSohamInquiry = () => {
  const context = useContext(AskSohamInquiryContext);
  if (!context) {
    throw new Error("useAskSohamInquiry must be used within AskSohamInquiryProvider");
  }
  return context;
};

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]";

const AskSohamInquiryDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
    }
  }, [open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitFormViaMailto(event.currentTarget, SOHAM_EMAIL, "Ask Soham - Website Inquiry");
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(92vh,820px)] max-w-xl overflow-y-auto rounded-[1.5rem] border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-0 shadow-[0_28px_80px_hsl(var(--brand-navy-950)/0.18)] sm:max-w-xl">
        <div className="border-b border-[hsl(var(--border-light))] bg-white px-6 pb-5 pt-6 sm:px-7">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="font-serif text-2xl font-bold text-on-light sm:text-[1.65rem]">
              Send a message to Soham
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-on-light-secondary">
              Prefer to write first? Share the same details Calendly would ask for and Soham&apos;s team will follow up.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-5 sm:px-7">
          {submitted ? (
            <p className="rounded-xl border border-[hsl(var(--brand-gold-500)/0.3)] bg-[hsl(var(--brand-gold-500)/0.12)] px-4 py-3 text-sm font-medium leading-relaxed text-on-light">
              Thank you - your email client should open with the message addressed to {SOHAM_EMAIL}. Send it to complete your
              inquiry.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block text-sm font-medium text-on-light">
                Name and company / institution
                <input required name="nameAndCompany" type="text" className={inputClassName} />
              </label>
              <label className="block text-sm font-medium text-on-light">
                Your email
                <input required name="email" type="email" className={inputClassName} />
              </label>
              <label className="block text-sm font-medium text-on-light">
                Which track applies?
                <select required name="track" defaultValue="" className={inputClassName}>
                  <option value="" disabled>
                    Select a track
                  </option>
                  <option value="Market Entry">Market Entry</option>
                  <option value="Language Strategy">Language Strategy</option>
                  <option value="Career Guidance">Career Guidance</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-on-light">
                Corridor or region
                <input required name="corridor" type="text" className={inputClassName} />
              </label>
              <label className="block text-sm font-medium text-on-light">
                Biggest challenge or question
                <textarea required name="question" rows={4} className={inputClassName} />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-purple-700))] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
              >
                Send to Soham
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
          )}

          <div className="mt-5 border-t border-[hsl(var(--border-light))] pt-4">
            <p className="text-xs leading-relaxed text-on-light-muted">
              Prefer to pick a time now?{" "}
              {CALENDLY_SCHEDULING_URL ? (
                <a
                  href={CALENDLY_SCHEDULING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
                >
                  Book on Calendly
                </a>
              ) : (
                <Link to="/ask-soham#book-call" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
                  View booking options
                </Link>
              )}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const AskSohamInquiryProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openInquiry = useCallback(() => setOpen(true), []);
  const closeInquiry = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (location.pathname.replace(/\/$/, "") !== "/ask-soham") return;

    const state = location.state as AskSohamLocationState | null;
    if (state?.openInquiry) {
      openInquiry();
      navigate({ pathname: location.pathname, search: location.search, hash: "" }, { replace: true, state: null });
      return;
    }

    const hashId = getHashId(location.hash);
    if (!isNonScrollHash(hashId) || hashId !== ASK_SOHAM_MESSAGE_HASH) return;

    openInquiry();
    navigate({ pathname: location.pathname, search: location.search, hash: "" }, { replace: true, state: null });
  }, [location.pathname, location.hash, location.search, location.state, navigate, openInquiry]);

  const value = useMemo(
    () => ({
      open: openInquiry,
      close: closeInquiry,
      isOpen: open,
    }),
    [open, openInquiry, closeInquiry],
  );

  return (
    <AskSohamInquiryContext.Provider value={value}>
      {children}
      <AskSohamInquiryDialog open={open} onOpenChange={setOpen} />
    </AskSohamInquiryContext.Provider>
  );
};

export default AskSohamInquiryProvider;
