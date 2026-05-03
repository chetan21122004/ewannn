import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { SIMULTANEOUS_INTERPRETATION_ARTICLE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, articleSchema, breadcrumbSchema, faqPageSchema, howToSchema, personSoham } from "@/lib/schemaHelpers";

const CANONICAL = "/insights/what-is-simultaneous-interpretation/";
const TITLE = "What Is Simultaneous Interpretation? A Plain-English Guide";
const DESCRIPTION =
  "Understand real-time multilingual communication for conferences, boardrooms, and government engagements — plus when to escalate to specialised interpretation teams.";

const steps = [
  "Clarify event format and risk — identify whether your setting is a conference, board meeting, negotiation, or government engagement where speed and precision are critical.",
  "Choose interpretation mode — use simultaneous interpretation when real-time flow is essential; use consecutive interpretation for smaller sessions where pauses are acceptable.",
  "Define language pairs and relay logic — map source and target languages, including any relay path needed for multi-country delegations.",
  "Coordinate delivery infrastructure — align interpreters, AV, booth/headset setup, and handoff protocols so the room runs without communication breakdowns.",
  "Brief interpreters on context — share agenda, terminology, stakeholder profiles, and sector background before the session to preserve nuance and decision quality.",
];

const InsightsArticleSimultaneousInterpretation = () => {
  const pageUrl = absoluteUrl(CANONICAL);
  const jsonLd = [
    personSoham(),
    breadcrumbSchema(pageUrl, [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights/" },
      { name: "What Is Simultaneous Interpretation", path: CANONICAL },
    ]),
    articleSchema({
      headline: TITLE,
      description: DESCRIPTION,
      canonicalPath: CANONICAL,
      datePublished: "2024-08-21",
      dateModified: "2026-01-15",
    }),
    howToSchema({
      name: TITLE,
      description:
        "A plain-English decision framework for planning simultaneous interpretation in high-stakes multilingual settings.",
      steps,
    }),
    faqPageSchema(pageUrl, SIMULTANEOUS_INTERPRETATION_ARTICLE_FAQS),
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
              Simultaneous interpretation is often what executives experience first entering Asia-facing negotiations: headphones, glass booths when scale demands
              ISO-grade conference infrastructure, discreet handoffs between relay languages, choreography with AV teams. Consecutive interpreting still matters
              for smaller rooms where pausing for segmented delivery preserves nuance — but simultaneous becomes non-negotiable when pace, reputational optics,
              or multi-country delegations disallow stop-start dialogue.
            </p>
            <p>
              Ewan aggregates 60,000+ hours across Mandarin, Japanese, Cantonese, and ASEAN corridors — aligning linguists who already understand your sectors
              rather than parachuting generic resources that slow board decisions.
            </p>
            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Book Ask Soham for interpretation mandates</h2>
            <p className="mt-3">
              If simultaneous versus consecutive trade-offs feel unclear — or corridor-specific sensitivities loom — fifteen minutes eliminates guesswork.
            </p>
            <Link
              to="/ask-soham/"
              className="mt-4 inline-flex rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
            >
              Book the Ask Soham call
            </Link>
          </div>
        </div>
      </article>

      <AeoFrequentlyAskedQuestions items={SIMULTANEOUS_INTERPRETATION_ARTICLE_FAQS} className="theme-section-soft px-6 py-16" />

      <section className="theme-section-light px-6 pb-16 text-center">
        <Link to="/language-localization/" className="text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          Language &amp; Localization services →
        </Link>
      </section>
    </PageLayout>
  );
};

export default InsightsArticleSimultaneousInterpretation;
