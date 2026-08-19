import { Link } from "react-router-dom";
import InsightsArticleShell from "@/components/insights/InsightsArticleShell";
import {
  ArticleClosing,
  ArticleHighlight,
  ArticleLead,
  ArticlePullQuote,
  ArticleSection,
  ArticleSteps,
} from "@/components/language-gazette/GazetteArticleBlocks";

const CANONICAL = "/insights/career-in-asian-languages-india/";
const TITLE = "Is a career in Asian languages worth it in India? An honest guide";
const DESCRIPTION =
  "Beyond translation desks - how language professionals in India can build strategic consultancy careers in cross-border business, interpretation, and market entry.";

const careerPaths = [
  {
    title: "Translation and localization operations",
    body: "Strong entry point for building terminology depth, quality discipline, and client exposure - but long-term growth often requires moving toward account ownership or sector specialisation.",
  },
  {
    title: "Interpretation for business and government",
    body: "High-stakes boardrooms, factory visits, and delegation meetings reward interpreters who understand sector context - not only linguistic accuracy.",
  },
  {
    title: "Cross-border liaison and market entry",
    body: "Language skill combined with corridor intelligence, partner coordination, and cultural navigation - the path UVAN's practitioners often grow into.",
  },
  {
    title: "Strategic language consultancy",
    body: "Advising companies on language architecture across markets - glossaries, modality choices, vendor governance, and executive briefing - rather than only delivering line-item translation.",
  },
];

const relatedArticles = [
  {
    title: "What Is Simultaneous Interpretation?",
    href: "/insights/what-is-simultaneous-interpretation",
    category: "Language",
    excerpt: "When live interpretation matters, how it works in practice, and what to specify before high-stakes meetings.",
  },
  {
    title: "How to Choose a Translation Partner in India",
    href: "/insights/how-to-choose-translation-partner-india",
    category: "Language",
    excerpt: "Five practical steps for buyers evaluating translation and localization partners.",
  },
];

const InsightsArticleCareerAsianLanguages = () => (
  <InsightsArticleShell
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Career"
    breadcrumbLabel="Career in Asian Languages"
    datePublished="2024-09-15"
    readTime="8 min read"
    heroImage="/stitch/insights/article-career-guide.jpg"
    heroImageAlt="Language professional working on cross-border business materials"
    relatedArticles={relatedArticles}
  >
    <ArticleLead>
      India&apos;s trade corridors with Japan, China, ASEAN, Korea, and the Middle East create sustained demand for Asian
      language capability - but the career question is rarely &quot;can I find work translating?&quot; It is whether you are
      building skills that compound into strategic value for cross-border operators, or staying on a rate-per-word treadmill
      with limited upside.
    </ArticleLead>

    <ArticleSection title="Where the honest opportunity is">
      <p>
        Mandarin, Japanese, Korean, Vietnamese, Bahasa, Thai, and Arabic each map to active commercial corridors - automotive,
        pharma, electronics, infrastructure, media, and government engagement. Demand is real. The gap is rarely raw language
        supply; it is professionals who can operate inside business context.
      </p>
      <p>
        Companies expanding across borders need people who can interpret a negotiation, localise a product launch, brief an
        executive before a factory visit, and coordinate follow-through - not only convert documents.
      </p>
    </ArticleSection>

    <ArticleHighlight>
      The highest-leverage language careers in India combine linguistic depth with sector fluency, client stewardship, and
      comfort in rooms where decisions are made under time pressure.
    </ArticleHighlight>

    <ArticleSection title="Four paths that scale beyond the translation desk">
      <ArticleSteps steps={careerPaths} />
    </ArticleSection>

    <ArticlePullQuote attribution="UVAN practice">
      UVAN&apos;s senior linguists often arrive through interpretation and translation - then deepen into corridor-specific
      market entry, liaison, and executive support as they accumulate sector and client context.
    </ArticlePullQuote>

    <ArticleSection title="What to build early">
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Sector vocabulary:</strong> pick one industry cluster and
            learn how contracts, compliance, and operations actually sound in the room.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Modality range:</strong> written translation, consecutive,
            and simultaneous each have different career economics - know when each applies.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Professional conduct:</strong> confidentiality, preparation
            discipline, and calm delivery matter as much as grammar in executive settings.
          </span>
        </li>
      </ul>
    </ArticleSection>

    <ArticleClosing>
      A career in Asian languages in India is worth it when you treat language as infrastructure for cross-border business -
      not as a side skill. The market rewards practitioners who can stay in the thread from first meeting to operational
      follow-through.
    </ArticleClosing>

    <p className="mt-6 text-center sm:mt-8">
      <Link
        to="/join-us/"
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
      >
        Explore careers at UVAN
      </Link>
    </p>
  </InsightsArticleShell>
);

export default InsightsArticleCareerAsianLanguages;
