import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/** Mid-article inline CTA for market entry blog posts */
const MarketEntryAuditInlineCta = () => (
  <aside className="my-10 rounded-2xl border border-[hsl(var(--brand-purple-500)/0.2)] bg-[hsl(var(--surface-light-100))] p-6 not-prose">
    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
      Free Resource
    </p>
    <h2 className="mt-2 font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">
      Download the 2026 Market Entry Audit
    </h2>
    <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
      The 2026 Global Market Entry Audit is UVAN&apos;s proprietary 3-page diagnostic framework. It presents five
      operational gaps that commonly derail international expansion — framed as a self-assessment checklist. Use it to
      assess your expansion readiness before you commit.
    </p>
    <Link
      to="/market-entry-audit"
      className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
    >
      Download the 2026 Market Entry Audit
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  </aside>
);

export default MarketEntryAuditInlineCta;
