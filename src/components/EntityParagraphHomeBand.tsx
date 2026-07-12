import { ENTITY_PARAGRAPH_A } from "@/data/aeoContent";

/** Verbatim AEO entity paragraph (Section 02) - visible footer-adjacent placement on the homepage. */
const EntityParagraphHomeBand = () => (
  <section
    aria-label="About UVAN"
    className="theme-section-soft relative overflow-hidden border-t border-[hsl(var(--border-light)/0.85)] px-5 py-8 sm:px-6 md:py-16"
  >
    <div className="pointer-events-none absolute inset-0 opacity-[0.1] theme-grid-overlay-light lg:opacity-[0.16]" aria-hidden />
    <div className="pointer-events-none absolute -right-24 bottom-0 hidden h-80 w-80 rounded-full bg-[hsl(var(--brand-gold-500)/0.12)] blur-3xl lg:block" aria-hidden />

    <div className="container relative z-10 mx-auto max-w-6xl">
      <div className="rounded-[1.25rem] border border-[hsl(var(--border-light-strong))] bg-white/[0.82] p-5 shadow-[0_18px_46px_hsl(var(--brand-navy-950)/0.08)] backdrop-blur-md sm:rounded-[2rem] md:p-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-700)/0.16)] bg-[hsl(var(--surface-light-card)/0.94)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))] shadow-sm">
          Entity profile
        </span>
        <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:mt-5 md:text-4xl">
          About UVAN
        </h2>
        <p className="mt-4 text-sm leading-[1.7] text-on-light-secondary md:mt-5 md:text-base md:leading-[1.8]">
          {ENTITY_PARAGRAPH_A}
        </p>
      </div>
    </div>
  </section>
);

export default EntityParagraphHomeBand;
