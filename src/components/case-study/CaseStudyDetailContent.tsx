import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Download, FileText, Quote } from "lucide-react";
import CaseStudyPdfDialog from "@/components/case-study/CaseStudyPdfDialog";
import CaseStudyPdfThumbnail from "@/components/case-study/CaseStudyPdfThumbnail";
import { getCaseStudyFullHeadline, type CaseStudyEntry } from "@/data/caseStudyCatalog";
import { cn } from "@/lib/utils";

type CaseStudyDetailContentProps = {
  study: CaseStudyEntry;
};

const SectionHeading = ({ eyebrow, title }: { eyebrow?: string; title: string }) => (
  <div className="border-l-[3px] border-[hsl(var(--brand-gold-500))] pl-4 sm:pl-5">
    {eyebrow ? (
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">{eyebrow}</p>
    ) : null}
    <h2 className={cn("font-serif text-xl font-bold text-on-light sm:text-2xl", eyebrow && "mt-1")}>{title}</h2>
  </div>
);

const CaseStudyDetailContent = ({ study }: CaseStudyDetailContentProps) => {
  const reduceMotion = useReducedMotion() ?? false;
  const [pdfOpen, setPdfOpen] = useState(false);
  const fullHeadline = getCaseStudyFullHeadline(study);
  const deliveredFact = study.quickFacts.find((row) => row.label === "Delivered");

  useEffect(() => {
    setPdfOpen(false);
  }, [study.id]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[hsl(var(--border-light)/0.85)] theme-section-soft px-5 sm:px-6">
        <div className="container relative z-10 mx-auto max-w-6xl py-8 sm:py-10">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All case studies
          </Link>

          <motion.div
            key={study.id}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.35 : 0.55 }}
            className="mt-6"
          >
            <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_8px_28px_-12px_rgba(26,22,51,0.12)] sm:rounded-3xl">
              <div className="relative overflow-hidden bg-[hsl(var(--surface-light-50))]">
                <CaseStudyPdfThumbnail
                  key={study.pdfUrl}
                  pdfUrl={study.pdfUrl}
                  title={fullHeadline}
                  fullWidth
                  paginated
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-2 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.55)] to-transparent p-4 sm:p-5">
                  <div className="flex flex-wrap gap-2">
                    {study.featured ? (
                      <span className="rounded-full bg-[hsl(var(--brand-gold-500))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-navy-950))]">
                        Featured
                      </span>
                    ) : null}
                    <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                      {study.corridor}
                    </span>
                    {study.sector ? (
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/90 backdrop-blur-sm">
                        {study.sector}
                      </span>
                    ) : null}
                  </div>
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] shadow-sm">
                    16:9 PDF
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50)/0.6)] px-5 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-on-light-muted">Slide deck PDF</p>
                  <p className="mt-0.5 truncate text-sm font-medium text-on-light">{study.pdfFileName}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setPdfOpen(true)}
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                  >
                    <FileText className="h-3.5 w-3.5" aria-hidden />
                    View PDF
                  </button>
                  <a
                    href={study.pdfUrl}
                    download={study.pdfFileName}
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-4 py-2 text-xs font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden />
                    Download
                  </a>
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-8">
                {study.subjectLine ? (
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-600))] sm:text-[11px]">
                    {study.subjectLine}
                  </p>
                ) : null}

                <h1
                  className={cn(
                    "font-serif font-bold leading-tight text-on-light",
                    study.subjectLine ? "mt-3 text-2xl sm:text-3xl lg:text-4xl" : "text-2xl sm:text-3xl lg:text-4xl",
                  )}
                >
                  {study.headline}
                  {study.headlineSub ? (
                    <>
                      <br />
                      <span className="text-[hsl(var(--brand-purple-700))]">{study.headlineSub}</span>
                    </>
                  ) : null}
                </h1>

                <p className="mt-4 max-w-3xl text-sm leading-[1.85] text-on-light-secondary sm:text-base">{study.summary}</p>

                {deliveredFact ? (
                  <p className="mt-4 max-w-3xl rounded-xl border border-[hsl(var(--brand-purple-700)/0.12)] bg-[hsl(var(--brand-purple-700)/0.04)] px-4 py-3 text-sm font-medium leading-snug text-on-light-secondary">
                    <span className="font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-purple-700))]">
                      Delivered{" "}
                    </span>
                    {deliveredFact.value}
                  </p>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden section-pad theme-section-light px-5 sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.05]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_19rem] xl:gap-12">
            <article className="min-w-0 space-y-12 sm:space-y-14">
              <section className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                <div className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 sm:p-6">
                  <SectionHeading eyebrow="Context" title="The Situation" />
                  <p className="mt-4 text-sm leading-[1.85] text-on-light-secondary sm:text-base">{study.situation}</p>
                </div>
                <div className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 sm:p-6">
                  <SectionHeading eyebrow="Constraint" title="The Challenge" />
                  <p className="mt-4 text-sm leading-[1.85] text-on-light-secondary sm:text-base">{study.challenge}</p>
                </div>
              </section>

              <section>
                <SectionHeading eyebrow="Approach" title="What Ewan Did" />
                {study.deliveredIntro ? (
                  <p className="mt-4 max-w-3xl text-sm leading-[1.85] text-on-light-secondary sm:text-base">{study.deliveredIntro}</p>
                ) : null}
                <ul className="mt-5 divide-y divide-[hsl(var(--border-light))] overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white">
                  {study.delivered.map((item, index) => (
                    <li key={item} className="flex gap-4 px-5 py-4 sm:px-6 sm:py-5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700)/0.08)] text-[11px] font-bold text-[hsl(var(--brand-purple-700))]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-0.5 text-sm leading-relaxed text-on-light-secondary sm:text-base">{item}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading eyebrow="Outcome" title="Results" />
                {study.resultGroups ? (
                  <div className="mt-5 grid gap-4 sm:gap-5">
                    {study.resultGroups.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 sm:p-6"
                      >
                        <h3 className="font-serif text-base font-bold text-[hsl(var(--brand-purple-700))] sm:text-lg">
                          {group.title}
                        </h3>
                        <ul className="mt-3 space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-on-light-secondary">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" aria-hidden />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-5 divide-y divide-[hsl(var(--border-light))] overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white">
                    {study.results.map((item, index) => (
                      <li key={item} className="flex gap-4 px-5 py-4 sm:px-6 sm:py-5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500)/0.15)] text-[11px] font-bold text-[hsl(var(--brand-gold-600))]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="pt-0.5 text-sm leading-relaxed text-on-light-secondary sm:text-base">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {study.quote ? (
                <blockquote className="relative overflow-hidden rounded-2xl border border-[hsl(var(--brand-purple-700)/0.15)] bg-[linear-gradient(135deg,hsl(var(--brand-purple-700)/0.06)_0%,hsl(var(--brand-gold-500)/0.08)_100%)] px-5 py-6 sm:px-7 sm:py-7">
                  <Quote className="h-8 w-8 text-[hsl(var(--brand-purple-700)/0.2)]" aria-hidden />
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]">
                    Client Testimonial
                  </p>
                  <p className="mt-3 font-serif text-lg italic leading-relaxed text-on-light sm:text-xl">
                    &ldquo;{study.quote.text}&rdquo;
                  </p>
                  <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.08em] text-on-light-muted sm:text-sm">
                    - {study.quote.attribution}
                  </footer>
                </blockquote>
              ) : null}

              {study.tags?.length ? (
                <div className="flex flex-wrap gap-2 border-t border-[hsl(var(--border-light))] pt-8">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-on-light-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>

            <aside className="lg:sticky lg:top-[5.5rem] lg:self-start">
              <div className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 shadow-[0_8px_28px_-12px_rgba(26,22,51,0.08)] sm:p-6">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                  Quick Facts
                </h2>
                <dl className="mt-4 space-y-4">
                  {study.quickFacts.map((row) => (
                    <div key={row.label} className="border-b border-[hsl(var(--border-light))] pb-4 last:border-0 last:pb-0">
                      <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-gold-600))]">
                        {row.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-on-light-secondary">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                {study.quickFactsTagline ? (
                  <p className="mt-4 rounded-xl bg-[hsl(var(--surface-light-50))] px-3 py-3 text-sm font-semibold leading-snug text-on-light">
                    {study.quickFactsTagline}
                  </p>
                ) : null}

                <div className="mt-5 space-y-2 border-t border-[hsl(var(--border-light))] pt-5">
                  <button
                    type="button"
                    onClick={() => setPdfOpen(true)}
                    className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                  >
                    <FileText className="h-3.5 w-3.5" aria-hidden />
                    View slide deck
                  </button>
                  <a
                    href={study.pdfUrl}
                    download={study.pdfFileName}
                    className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-4 py-2 text-xs font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden />
                    Download PDF
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CaseStudyPdfDialog key={study.id} study={study} open={pdfOpen} onOpenChange={setPdfOpen} />
    </>
  );
};

export default CaseStudyDetailContent;
