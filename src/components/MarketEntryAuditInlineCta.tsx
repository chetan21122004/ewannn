import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/** Mid-article inline CTA for market entry blog posts */
const MarketEntryAuditInlineCta = () => (
  <aside className="my-8 rounded-xl border border-[hsl(var(--brand-purple-500)/0.2)] bg-[hsl(var(--surface-light-100))] p-4 not-prose sm:my-10 sm:rounded-2xl sm:p-6">
    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
      Free Resource
    </p>
    <h2 className="mt-2 font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-2xl">
      Download the 2026 Market Entry Audit
    </h2>
    <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
      The 2026 Global Market Entry Audit is UVAN&apos;s proprietary 3-page diagnostic framework. It presents five
      operational gaps that commonly derail international expansion — framed as a self-assessment checklist. Use it to
      assess your expansion readiness before you commit.
    </p>
    <Link
      to="/market-entry-audit"
      className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:mt-5 sm:w-auto sm:px-6"
    >
      Download the 2026 Market Entry Audit
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  </aside>
);

export default MarketEntryAuditInlineCta;
