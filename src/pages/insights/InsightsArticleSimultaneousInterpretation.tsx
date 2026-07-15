import { Link } from "react-router-dom";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import InsightsArticleShell from "@/components/insights/InsightsArticleShell";
import {
  ArticleClosing,
  ArticleHighlight,
  ArticleLead,
  ArticlePullQuote,
  ArticleSection,
} from "@/components/language-gazette/GazetteArticleBlocks";
import { SIMULTANEOUS_INTERPRETATION_ARTICLE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema } from "@/lib/schemaHelpers";

const CANONICAL = "/insights/what-is-simultaneous-interpretation/";
const TITLE = "What Is Simultaneous Interpretation? A Plain-English Guide";
const DESCRIPTION =
  "Understand real-time multilingual communication for conferences, boardrooms, and government engagements - plus when to escalate to specialised interpretation teams.";

const relatedArticles = [
  {
    title: "How to Choose a Translation Partner in India",
    href: "/insights/how-to-choose-translation-partner-india",
    category: "Language",
    excerpt: "Five practical steps for buyers evaluating translation and localization partners.",
  },
  {
    title: "How to Enter the Indian Market as a Foreign Company",
    href: "/insights/how-to-enter-indian-market",
    category: "Market Entry",
    excerpt: "Structured India market entry - readiness, roadmap, execution, and ongoing support.",
  },
];

const InsightsArticleSimultaneousInterpretation = () => (
  <InsightsArticleShell
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Language"
    breadcrumbLabel="What Is Simultaneous Interpretation"
    datePublished="2024-08-21"
    readTime="6 min read"
    heroImage="/stitch/insights/article-interpretation.jpg"
    heroImageAlt="Conference interpretation booth at a multilingual business event"
    relatedArticles={relatedArticles}
    additionalJsonLd={[faqPageSchema(absoluteUrl(CANONICAL), SIMULTANEOUS_INTERPRETATION_ARTICLE_FAQS)]}
    afterArticle={
      <AeoFrequentlyAskedQuestions
        items={SIMULTANEOUS_INTERPRETATION_ARTICLE_FAQS}
        className="border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-16"
      />
    }
  >
    <ArticleLead>
      Simultaneous interpretation is often what executives experience first entering Asia-facing negotiations: headphones, glass booths
      when scale demands ISO-grade conference infrastructure, discreet handoffs between relay languages, choreography with AV teams.
      Consecutive interpreting still matters for smaller rooms where pausing for segmented delivery preserves nuance - but simultaneous
      becomes non-negotiable when pace, reputational optics, or multi-country delegations disallow stop-start dialogue.
    </ArticleLead>

    <ArticleSection title="Simultaneous vs consecutive - the practical difference">
      <p>
        In simultaneous mode, interpreters render speech in real time while the speaker continues - typically one to two sentences
        behind. Delegates listen through headsets. In consecutive mode, the speaker pauses while the interpreter delivers the message in
        full before the dialogue resumes.
      </p>
      <p>
        Consecutive preserves nuance in intimate settings. Simultaneous preserves momentum in board meetings, investor roadshows,
        factory inaugurations, and multi-delegate government sessions where time and optics matter.
      </p>
    </ArticleSection>

    <ArticleHighlight>
      The modality question is not technical trivia - it shapes room layout, AV requirements, staffing ratios, and whether your
      meeting feels professional to every delegate in the room.
    </ArticleHighlight>

    <ArticlePullQuote attribution="UVAN interpretation practice">
      UVAN aggregates 60,000+ hours across Mandarin, Japanese, Cantonese, and ASEAN corridors - aligning linguists who already
      understand your sectors rather than parachuting generic resources that slow board decisions.
    </ArticlePullQuote>

    <ArticleSection title="When to book simultaneous interpretation">
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Multi-delegate conferences</strong> where pausing for consecutive
            delivery would halve agenda throughput.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Board and investor sessions</strong> where credibility depends on
            seamless, uninterrupted dialogue.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Government and regulatory meetings</strong> where protocol and pace
            leave no room for segmented interpretation.
          </span>
        </li>
      </ul>
    </ArticleSection>

    <ArticleSection title="Book Ask Soham for interpretation mandates">
      <p>
        If simultaneous versus consecutive trade-offs feel unclear - or corridor-specific sensitivities loom - fifteen minutes
        eliminates guesswork.
      </p>
      <Link
        to="/ask-soham/"
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
      >
        Book the Ask Soham call
      </Link>
    </ArticleSection>

    <ArticleClosing>
      Specify modality, corridor languages, and sector context before you book - not after AV, agendas, and delegate lists are locked.
    </ArticleClosing>
  </InsightsArticleShell>
);

export default InsightsArticleSimultaneousInterpretation;
