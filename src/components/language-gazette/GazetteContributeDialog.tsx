import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, PenLine, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormHoneypot from "@/components/FormHoneypot";
import { submitForm } from "@/lib/formSubmit";
import { SOHAM_EMAIL } from "@/lib/site";
import { cn } from "@/lib/utils";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]";

type GazetteContributeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const GazetteContributeDialog = ({ open, onOpenChange }: GazetteContributeDialogProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [usedMailtoFallback, setUsedMailtoFallback] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
    }
  }, [open]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const result = await submitForm(event.currentTarget, SOHAM_EMAIL, "Language Gazette - Article Contribution");
    event.currentTarget.reset();
    setUsedMailtoFallback(result === "mailto_fallback");
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(92vh,820px)] max-w-xl overflow-y-auto rounded-[1.5rem] border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-0 shadow-[0_28px_80px_hsl(var(--brand-navy-950)/0.18)] sm:max-w-xl">
        <div className="border-b border-[hsl(var(--border-light))] bg-white px-6 pb-5 pt-6 sm:px-7">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="font-serif text-2xl font-bold text-on-light sm:text-[1.65rem]">
              Contribute to The Language Gazette
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-on-light-secondary">
              Share your poem, essay, or bilingual piece for a future UVAN quarterly edition. We welcome writing on
              language, culture, and cross-border business.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-5 sm:px-7">
          {submitted ? (
            <p className="rounded-xl border border-[hsl(var(--brand-gold-500)/0.3)] bg-[hsl(var(--brand-gold-500)/0.12)] px-4 py-3 text-sm font-medium leading-relaxed text-on-light">
              {usedMailtoFallback
                ? `Thank you — your email client should open with your submission addressed to ${SOHAM_EMAIL}. Send it to complete your contribution.`
                : "Thank you! We've received your contribution pitch and will be in touch if it fits a future edition."}
            </p>
          ) : (
            <form className="relative space-y-4" onSubmit={handleSubmit}>
              <FormHoneypot />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-on-light">
                  Your name
                  <input required name="fullName" type="text" className={inputClassName} />
                </label>
                <label className="block text-sm font-medium text-on-light">
                  Your email
                  <input required name="email" type="email" className={inputClassName} />
                </label>
              </div>

              <label className="block text-sm font-medium text-on-light">
                Article type
                <select required name="articleType" defaultValue="" className={inputClassName}>
                  <option value="" disabled>
                    Select a type
                  </option>
                  <option value="Poem">Poem</option>
                  <option value="Essay">Essay</option>
                  <option value="Translation">Translation</option>
                  <option value="Interview or profile">Interview or profile</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-on-light">
                Proposed title
                <input required name="title" type="text" className={inputClassName} />
              </label>

              <label className="block text-sm font-medium text-on-light">
                Language(s)
                <input
                  name="languages"
                  type="text"
                  placeholder="e.g. English, Hindi, Japanese"
                  className={inputClassName}
                />
              </label>

              <label className="block text-sm font-medium text-on-light">
                Summary or pitch
                <textarea
                  required
                  name="summary"
                  rows={4}
                  placeholder="Briefly describe your piece and why it fits The Language Gazette."
                  className={inputClassName}
                />
              </label>

              <label className="block text-sm font-medium text-on-light">
                Draft file (optional)
                <input
                  name="draftFile"
                  type="file"
                  accept=".doc,.docx,.pdf,.txt,.md"
                  className="mt-1.5 block w-full text-sm text-on-light-secondary file:mr-3 file:rounded-lg file:border-0 file:bg-[hsl(var(--brand-purple-700))] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white"
                />
                <span className="mt-1 block text-xs text-on-light-muted">
                  File name is included in your submission; we may follow up by email if we need the draft.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-purple-700))] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send contribution"}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const GazetteContributeButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Contribute an article to The Language Gazette"
    className={cn(
      "group relative inline-flex w-full min-h-[3.25rem] items-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(135deg,hsl(var(--brand-purple-800))_0%,hsl(var(--brand-purple-700))_52%,hsl(var(--brand-purple-500))_100%)] px-4 py-2.5 text-left shadow-[0_14px_36px_hsl(var(--brand-purple-700)/0.34)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_hsl(var(--brand-purple-700)/0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-gold-500))] focus-visible:ring-offset-2 sm:w-auto sm:min-h-12 sm:gap-3.5 sm:px-5 sm:py-3",
      className,
    )}
  >
    <span
      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
      aria-hidden
      style={{
        background:
          "radial-gradient(circle at 18% 50%, hsl(var(--brand-gold-500) / 0.22) 0%, transparent 42%), radial-gradient(circle at 88% 18%, hsl(var(--brand-cyan-500) / 0.16) 0%, transparent 38%)",
      }}
    />

    <span
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--brand-gold-500)/0.45)] bg-[hsl(var(--brand-gold-500)/0.16)] text-[hsl(var(--brand-gold-500))] shadow-[inset_0_1px_0_hsl(var(--brand-gold-500)/0.25)] transition duration-300 group-hover:scale-105 group-hover:border-[hsl(var(--brand-gold-500)/0.65)] sm:h-10 sm:w-10"
      aria-hidden
    >
      <PenLine className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" />
    </span>

    <span className="relative min-w-0 flex-1">
      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))] sm:text-[11px]">
        <Sparkles className="h-3 w-3 shrink-0 opacity-90" aria-hidden />
        Open call for writers
      </span>
      <span className="mt-0.5 block font-serif text-base font-bold leading-tight text-white sm:text-[1.05rem]">
        Contribute an Article
      </span>
    </span>

    <ArrowUpRight
      className="relative h-4 w-4 shrink-0 text-white/85 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[hsl(var(--brand-gold-500))] sm:h-[1.125rem] sm:w-[1.125rem]"
      aria-hidden
    />
  </button>
);

export default GazetteContributeDialog;
