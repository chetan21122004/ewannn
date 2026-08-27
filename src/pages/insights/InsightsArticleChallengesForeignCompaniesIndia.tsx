import { Link } from "react-router-dom";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import InsightsArticleShell from "@/components/insights/InsightsArticleShell";
import MarketEntryAuditInlineCta from "@/components/MarketEntryAuditInlineCta";
import {
  ArticleClosing,
  ArticleHighlight,
  ArticleLead,
  ArticleSection,
} from "@/components/language-gazette/GazetteArticleBlocks";
import { CHALLENGES_FOREIGN_COMPANIES_INDIA_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, itemListFromTitles } from "@/lib/schemaHelpers";

const CANONICAL = "/insights/challenges-foreign-companies-india/";
const TITLE = "Top 10 Challenges Foreign Companies Face When Entering the Indian Market";
const DESCRIPTION =
  "Discover the top 10 challenges foreign businesses face when entering the Indian market - and practical strategies to overcome each one, from UVAN.";

const challenges = [
  {
    title: "Regulatory complexity",
    body: "India's regulatory environment includes central, state, and sector-specific rules that can overlap or conflict. Working with local compliance experts reduces delays significantly.",
  },
  {
    title: "Choosing the wrong entity structure",
    body: "Many companies default to a subsidiary when a branch or liaison office would better suit their initial goals, leading to unnecessary tax and compliance burden.",
    link: { href: "/insights/india-entity-structure-liaison-branch-subsidiary", label: "Compare entity structures" },
  },
  {
    title: "Language and communication barriers",
    body: "With 22 officially recognized languages and hundreds of dialects, English-only materials often fail to connect with regional audiences.",
    link: { href: "/language-localization/", label: "Language & localization services" },
  },
  {
    title: "Cultural misalignment in marketing",
    body: "Messaging that works in Western markets can misfire in India without cultural adaptation - not just translation.",
  },
  {
    title: "Talent acquisition and retention",
    body: "Competitive hiring markets in major Indian cities require localized compensation benchmarking and employer branding.",
  },
  {
    title: "Taxation and GST compliance",
    body: "India's Goods and Services Tax (GST) system requires ongoing filing discipline; errors can trigger penalties.",
  },
  {
    title: "Banking and financial setup delays",
    body: "Opening corporate bank accounts as a foreign entity often takes longer than expected without the right documentation prepared in advance.",
  },
  {
    title: "Regional market diversity",
    body: "A strategy that works in Mumbai may not work in Bengaluru or Delhi - India is best treated as several markets, not one.",
  },
  {
    title: "Intellectual property protection",
    body: "Registering trademarks, patents, and copyrights early is essential, as enforcement processes can be slow.",
  },
  {
    title: "Underestimating localization needs",
    body: "Companies that treat localization as an afterthought - rather than a core part of market entry - often see weaker adoption and trust from local customers.",
    link: { href: "/insights/localization-vs-translation-difference", label: "Localization vs translation" },
  },
];

const relatedArticles = [
  {
    title: "How to Expand Your Business into India: A Complete Market Entry Guide",
    href: "/insights/market-entry-guide-india",
    category: "Market Entry",
    excerpt: "A step-by-step walkthrough of entity setup, compliance, and localization.",
  },
  {
    title: "Best Countries for Market Entry in 2026",
    href: "/insights/best-countries-market-entry-2026",
    category: "Market Entry",
    excerpt: "Compare India against other high-potential expansion markets.",
  },
];

const InsightsArticleChallengesForeignCompaniesIndia = () => (
  <InsightsArticleShell
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Market Entry"
    breadcrumbLabel="Challenges Entering India"
    datePublished="2026-02-01"
    readTime="9 min read"
    heroImage="/stitch/insights/gazette-market-insight.jpg"
    heroImageAlt="Foreign executives navigating India market entry challenges"
    relatedArticles={relatedArticles}
    additionalJsonLd={[
      itemListFromTitles(
        challenges.map((item) => item.title),
        absoluteUrl(CANONICAL),
      ),
      faqPageSchema(absoluteUrl(CANONICAL), CHALLENGES_FOREIGN_COMPANIES_INDIA_FAQS),
    ]}
    afterArticle={
      <AeoFrequentlyAskedQuestions
        items={CHALLENGES_FOREIGN_COMPANIES_INDIA_FAQS}
        className="border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-16"
      />
    }
  >
    <ArticleLead>
      Entering the Indian market offers huge opportunity, but foreign companies routinely underestimate the operational and
      cultural hurdles involved. Here are the ten most common challenges - and how to navigate them.
    </ArticleLead>

    {challenges.map((challenge, index) => (
      <ArticleSection key={challenge.title} title={`${index + 1}. ${challenge.title.charAt(0).toUpperCase()}${challenge.title.slice(1)}`}>
        <p>{challenge.body}</p>
        {challenge.link ? (
          <p className="mt-3">
            <Link to={challenge.link.href} className="text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
              {challenge.link.label} →
            </Link>
          </p>
        ) : null}
      </ArticleSection>
    ))}

    <ArticleHighlight>
      Most of these challenges come down to not having integrated legal, operational, and localization expertise from day one.
      That&apos;s the gap UVAN is built to close - combining{" "}
      <Link to="/market-entry/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
        market entry consulting
      </Link>{" "}
      with professional{" "}
      <Link to="/language-localization/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
        language services
      </Link>{" "}
      so nothing falls through the cracks.
    </ArticleHighlight>

    <MarketEntryAuditInlineCta />

    <ArticleClosing>
      See our{" "}
      <Link to="/insights/market-entry-guide-india" className="text-[hsl(var(--brand-purple-700))] hover:underline">
        complete market entry guide
      </Link>{" "}
      for a step-by-step walkthrough.
    </ArticleClosing>
  </InsightsArticleShell>
);

export default InsightsArticleChallengesForeignCompaniesIndia;
