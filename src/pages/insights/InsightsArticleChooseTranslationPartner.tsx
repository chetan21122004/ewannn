import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import {
  TRANSLATION_PARTNER_ARTICLE_FAQS,
} from "@/data/aeoContent";
import {
  absoluteUrl,
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  howToSchema,
  personSoham,
} from "@/lib/schemaHelpers";

const CANONICAL = "/insights/how-to-choose-translation-partner-india/";
const TITLE = "How to Choose a Translation Partner in India — What Buyers Need to Know";
const DESCRIPTION =
  "Practical HowTo for procurement and marketing buyers: clarify scope, certify outputs, judge sector depth, align SLAs — then request a grounded quote.";

const steps = [
  "Define scope and modality — Decide whether you need translation only, localization (UX, tone, and layout), simultaneous or consecutive interpretation, or certified/legal outputs so vendors quote the same mandate.",
  "Verify quality governance — Confirm ISO-aligned workflows, dual native review, glossary and TM discipline, secure file handling for confidential materials, and how disputes or rework requests are escalated.",
  "Match sector terminology — Demand evidence of translators and interpreters who routinely work in your industry (automotive technical, pharma regulatory, legal contracts, aerospace standards, media subtitling, etc.).",
  "Negotiate SLA and escalation — Anchor turnaround by content type (rush versus standard), designate sign-off personas in your organisation, specify format handoffs, and put commercial penalties or credits for misses in writing.",
  "Pilot with bounded risk — commission a statistically representative pilot (high complexity slice + edge cases), inspect reviewer comments, judge consistency between batches, then scale once outputs meet contractual acceptance criteria.",
];

const InsightsArticleChooseTranslationPartner = () => {
  const pageUrl = absoluteUrl(CANONICAL);
  const jsonLd = [
    personSoham(),
    breadcrumbSchema(pageUrl, [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights/" },
      { name: "Choose a Translation Partner", path: CANONICAL },
    ]),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      canonicalPath: CANONICAL,
      datePublished: "2024-09-02",
      dateModified: "2026-01-15",
    }),
    howToSchema({
      name: TITLE,
      description: DESCRIPTION,
      steps,
    }),
    faqPageSchema(pageUrl, TRANSLATION_PARTNER_ARTICLE_FAQS),
  ];

  return (
    <PageLayout title={`${TITLE} | Ewan`} description={DESCRIPTION} canonicalPath={CANONICAL} jsonLd={jsonLd}>
      <article className="theme-section-light px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Insights · Language</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] md:text-5xl">{TITLE}</h1>
          <p className="mt-6 text-lg leading-relaxed text-on-light-secondary">{DESCRIPTION}</p>

          <div className="prose prose-neutral mt-10 max-w-none text-on-light-secondary">
            <p>
              India offers depth in Asian-European multilingual teams, accelerated turnaround across time zones when orchestrated correctly, ISO-grade process
              controls in serious providers — and variability you must deliberately filter before you outsource critical revenue or litigation-adjacent content.
              The HowTo steps below equip buyers to procure once, cleanly, rather than patching quality issues after reputational hits.
            </p>
            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Steps</h2>
            <ol className="mt-4 list-decimal space-y-4 ps-6">
              {steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <h2 className="mt-12 font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Get a Language Quote from Ewan</h2>
            <p className="mt-3">
              Attach sample files plus glossaries where available — we prioritise corridors where native expertise and sector density matter most.
            </p>
            <a
              href="mailto:info@ewan.co.in?subject=Language%20Services%20Quote"
              className="mt-4 inline-flex rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
            >
              Email info@ewan.co.in for a quote
            </a>
          </div>
        </div>
      </article>

      <AeoFrequentlyAskedQuestions items={TRANSLATION_PARTNER_ARTICLE_FAQS} className="theme-section-soft px-6 py-16" />

      <section className="theme-section-light px-6 pb-16 text-center">
        <Link to="/language-localization/" className="text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          Back to Language &amp; Localization services →
        </Link>
      </section>
    </PageLayout>
  );
};

export default InsightsArticleChooseTranslationPartner;
