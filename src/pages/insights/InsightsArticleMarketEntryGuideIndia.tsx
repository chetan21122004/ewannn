import { Link } from "react-router-dom";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import InsightsArticleShell from "@/components/insights/InsightsArticleShell";
import MarketEntryAuditInlineCta from "@/components/MarketEntryAuditInlineCta";
import {
  ArticleClosing,
  ArticleHighlight,
  ArticleLead,
  ArticleSection,
  ArticleSteps,
} from "@/components/language-gazette/GazetteArticleBlocks";
import { MARKET_ENTRY_GUIDE_ARTICLE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, howToSchema } from "@/lib/schemaHelpers";

const CANONICAL = "/insights/market-entry-guide-india/";
const TITLE = "How to Expand Your Business into India: A Complete Market Entry Guide";
const DESCRIPTION =
  "Planning to expand into India? A step-by-step market entry guide covering entity setup, compliance, localization, and on-ground execution from UVAN's experts.";

const steps = [
  {
    title: "Choose the right market entry strategy",
    body: "Decide whether a liaison office, branch office, wholly owned subsidiary, or joint venture best matches your revenue goals, control needs, and timeline before registering anything.",
  },
  {
    title: "Understand regulatory and compliance requirements",
    body: "Map RBI approvals, Companies Act registration, GST obligations, and sector-specific FDI caps against your entity type and industry.",
  },
  {
    title: "Localize product, messaging, and documentation",
    body: "Translate and adapt legal, marketing, and product materials for India's linguistic and regional diversity so customer-facing content resonates locally.",
  },
  {
    title: "Build your local operational foundation",
    body: "Open a local bank account, set up payroll and HR compliance, secure office or registered address space, and establish local accounting practices.",
  },
  {
    title: "Launch, monitor, and adapt",
    body: "Track regulatory changes, monitor competitor activity, and revisit localization as you scale into new Indian states or sectors.",
  },
];

const relatedArticles = [
  {
    title: "Top 10 Challenges Foreign Companies Face When Entering the Indian Market",
    href: "/insights/challenges-foreign-companies-india",
    category: "Market Entry",
    excerpt: "The most common operational and cultural hurdles - and how to navigate each one.",
  },
  {
    title: "Liaison Office vs Branch Office vs Subsidiary in India",
    href: "/insights/india-entity-structure-liaison-branch-subsidiary",
    category: "Market Entry",
    excerpt: "Compare control, tax, liability, and permitted activities before you register.",
  },
];

const InsightsArticleMarketEntryGuideIndia = () => (
  <InsightsArticleShell
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Market Entry"
    breadcrumbLabel="India Market Entry Guide"
    datePublished="2026-01-15"
    readTime="10 min read"
    heroImage="/stitch/insights/article-asian-market.jpg"
    heroImageAlt="Business leaders reviewing India market entry strategy"
    relatedArticles={relatedArticles}
    additionalJsonLd={[
      howToSchema({
        name: TITLE,
        description: DESCRIPTION,
        steps: steps.map((step) => `${step.title} - ${step.body}`),
      }),
      faqPageSchema(absoluteUrl(CANONICAL), MARKET_ENTRY_GUIDE_ARTICLE_FAQS),
    ]}
    afterArticle={
      <AeoFrequentlyAskedQuestions
        items={MARKET_ENTRY_GUIDE_ARTICLE_FAQS}
        className="border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-16"
      />
    }
  >
    <ArticleLead>
      India is one of the fastest-growing consumer and business markets in the world, but entering it successfully requires
      more than ambition - it demands the right legal structure, local partnerships, and cultural understanding. This guide
      walks you through the practical steps of a successful India market entry.
    </ArticleLead>

    <ArticleSection title="Why India is a priority market in 2026">
      <p>
        India&apos;s expanding middle class, digital-first economy, and ongoing regulatory and digital-infrastructure reforms
        make it an attractive destination for foreign companies. However, regulatory complexity, regional diversity, and
        language barriers remain common stumbling blocks for businesses entering without local guidance.
      </p>
    </ArticleSection>

    <ArticleSection title="Step 1: Choose the right market entry strategy">
      <p>Before registering an entity, decide how you want to operate in India:</p>
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Liaison Office</strong> - for market research and brand
            representation only (no revenue-generating activity)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Branch Office</strong> - for existing foreign companies
            wanting limited operational presence
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Wholly Owned Subsidiary</strong> - for full operational and
            revenue control
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Joint Venture</strong> - for companies wanting a local
            partner to navigate market nuances
          </span>
        </li>
      </ul>
      <p className="mt-4">
        Each option has different compliance, tax, and liability implications. See our{" "}
        <Link to="/insights/india-entity-structure-liaison-branch-subsidiary" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          entity structure comparison
        </Link>{" "}
        for a detailed breakdown.
      </p>
    </ArticleSection>

    <ArticleSection title="Steps 2–5: From compliance to launch">
      <ArticleSteps steps={steps.slice(1)} />
    </ArticleSection>

    <ArticleHighlight>
      Market entry and language services intersect - a technically correct business setup can still fail if your
      customer-facing content doesn&apos;t resonate locally.{" "}
      <Link to="/language-localization/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
        Localization
      </Link>{" "}
      is not an afterthought; it is part of the mandate.
    </ArticleHighlight>

    <MarketEntryAuditInlineCta />

    <ArticleSection title="How UVAN helps">
      <p>
        UVAN combines end-to-end{" "}
        <Link to="/market-entry/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          market entry consulting
        </Link>{" "}
        with professional language and localization services, so businesses get both the legal/operational foundation and
        the cultural fluency needed to succeed in India - under one roof.
      </p>
    </ArticleSection>

    <ArticleClosing>
      Not sure where you stand? Start with a{" "}
      <Link to="/market-entry-audit/" className="text-[hsl(var(--brand-purple-700))] hover:underline">
        market entry audit
      </Link>{" "}
      or{" "}
      <Link to="/contact/" className="text-[hsl(var(--brand-purple-700))] hover:underline">
        get in touch
      </Link>
      .
    </ArticleClosing>
  </InsightsArticleShell>
);

export default InsightsArticleMarketEntryGuideIndia;
