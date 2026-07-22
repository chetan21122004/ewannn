import { Link } from "react-router-dom";
import { SOHAM_EMAIL } from "@/lib/site";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import InsightsArticleShell from "@/components/insights/InsightsArticleShell";
import {
  ArticleClosing,
  ArticleHighlight,
  ArticleLead,
  ArticleSection,
  ArticleSteps,
} from "@/components/language-gazette/GazetteArticleBlocks";
import { TRANSLATION_PARTNER_ARTICLE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, howToSchema } from "@/lib/schemaHelpers";

const CANONICAL = "/insights/how-to-choose-translation-partner-india/";
const TITLE = "How to Choose a Translation Partner in India - What Buyers Need to Know";
const DESCRIPTION =
  "Practical HowTo for procurement and marketing buyers: clarify scope, certify outputs, judge sector depth, align SLAs - then request a grounded quote.";

const steps = [
  {
    title: "Define scope and modality",
    body: "Decide whether you need translation only, localization (UX, tone, and layout), simultaneous or consecutive interpretation, or certified/legal outputs so vendors quote the same mandate.",
  },
  {
    title: "Verify quality governance",
    body: "Confirm ISO-aligned workflows, dual native review, glossary and TM discipline, secure file handling for confidential materials, and how disputes or rework requests are escalated.",
  },
  {
    title: "Match sector terminology",
    body: "Demand evidence of translators and interpreters who routinely work in your industry - automotive technical, pharma regulatory, legal contracts, aerospace standards, media subtitling, and more.",
  },
  {
    title: "Negotiate SLA and escalation",
    body: "Anchor turnaround by content type (rush versus standard), designate sign-off personas in your organisation, specify format handoffs, and put commercial penalties or credits for misses in writing.",
  },
  {
    title: "Pilot with bounded risk",
    body: "Commission a statistically representative pilot (high complexity slice plus edge cases), inspect reviewer comments, judge consistency between batches, then scale once outputs meet contractual acceptance criteria.",
  },
];

const relatedArticles = [
  {
    title: "How to Enter the Indian Market as a Foreign Company",
    href: "/insights/how-to-enter-indian-market",
    category: "Market Entry",
    excerpt: "Structured India market entry - readiness, roadmap, execution, and ongoing on-ground support.",
  },
  {
    title: "What Is Simultaneous Interpretation?",
    href: "/insights/what-is-simultaneous-interpretation",
    category: "Language",
    excerpt: "When live interpretation matters, how it works, and what to specify before high-stakes meetings.",
  },
];

const InsightsArticleChooseTranslationPartner = () => (
  <InsightsArticleShell
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Language"
    breadcrumbLabel="Choose a Translation Partner"
    datePublished="2024-09-02"
    readTime="7 min read"
    heroImage="/stitch/insights/article-strategy.jpg"
    heroImageAlt="Procurement team evaluating translation partner proposals"
    relatedArticles={relatedArticles}
    additionalJsonLd={[
      howToSchema({
        name: TITLE,
        description: DESCRIPTION,
        steps: steps.map((step) => `${step.title} - ${step.body}`),
      }),
      faqPageSchema(absoluteUrl(CANONICAL), TRANSLATION_PARTNER_ARTICLE_FAQS),
    ]}
    afterArticle={
      <AeoFrequentlyAskedQuestions
        items={TRANSLATION_PARTNER_ARTICLE_FAQS}
        className="border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-16"
      />
    }
  >
    <ArticleLead>
      India offers depth in Asian-European multilingual teams, accelerated turnaround across time zones when orchestrated correctly,
      ISO-grade process controls in serious providers - and variability you must deliberately filter before you outsource critical
      revenue or litigation-adjacent content. The steps below equip buyers to procure once, cleanly, rather than patching quality
      issues after reputational hits.
    </ArticleLead>

    <ArticleSection title="Why partner selection fails quietly">
      <p>
        Most translation RFPs compare unit rates without aligning on modality, review depth, or sector terminology. The result is
        inconsistent batches, rework cycles, and escalating project management overhead on your side.
      </p>
      <p>
        A strong partner should quote the same mandate you intend to buy - not a stripped-down translation-only scope that unravels
        once layout, legal certification, or interpretation enters the workflow.
      </p>
    </ArticleSection>

    <ArticleHighlight>
      Procure language services like operational infrastructure, not commodity word-count. The cheapest per-word rate rarely survives
      the first high-stakes deliverable.
    </ArticleHighlight>

    <ArticleSection title="Five steps for a clean procurement">
      <ArticleSteps steps={steps} />
    </ArticleSection>

    <ArticleSection title="Get a language quote from UVAN">
      <p>
        Attach sample files plus glossaries where available - we prioritise corridors where native expertise and sector density matter
        most.
      </p>
      <a
        href={`mailto:${SOHAM_EMAIL}?subject=${encodeURIComponent("Translation quote request")}`}
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
      >
        Email {SOHAM_EMAIL} for a quote
      </a>
    </ArticleSection>

    <ArticleClosing>
      A bounded pilot costs less than reversing a vendor relationship after your brand voice, regulatory wording, or board materials
      have already been compromised.
    </ArticleClosing>

    <p className="mt-6 text-center sm:mt-8">
      <Link
        to="/language-localization/"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:border-[hsl(var(--brand-purple-500)/0.35)]"
      >
        Explore Language &amp; Localization services
      </Link>
    </p>
  </InsightsArticleShell>
);

export default InsightsArticleChooseTranslationPartner;
