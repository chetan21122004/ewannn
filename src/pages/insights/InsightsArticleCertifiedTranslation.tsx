import { Link } from "react-router-dom";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import InsightsArticleShell from "@/components/insights/InsightsArticleShell";
import {
  ArticleClosing,
  ArticleHighlight,
  ArticleLead,
  ArticleSection,
} from "@/components/language-gazette/GazetteArticleBlocks";
import { CERTIFIED_TRANSLATION_ARTICLE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema } from "@/lib/schemaHelpers";

const CANONICAL = "/insights/certified-translation-services-legal-requirements/";
const TITLE = "Certified Translation Services: When Do You Legally Need Them?";
const DESCRIPTION =
  "Not sure if you need certified translation? Learn when certified translations are legally required for business, immigration, and legal documents.";

const relatedArticles = [
  {
    title: "Localization vs. Translation: What's the Difference?",
    href: "/insights/localization-vs-translation-difference",
    category: "Language",
    excerpt: "When translation is enough — and when you need full localization.",
  },
  {
    title: "How to Choose a Translation Partner in India",
    href: "/insights/how-to-choose-translation-partner-india",
    category: "Language",
    excerpt: "Five practical steps before you outsource critical content.",
  },
];

const InsightsArticleCertifiedTranslation = () => (
  <InsightsArticleShell
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Language"
    breadcrumbLabel="Certified Translation Requirements"
    datePublished="2026-02-18"
    readTime="7 min read"
    heroImage="/stitch/insights/article-strategy.jpg"
    heroImageAlt="Certified legal document translation for business compliance"
    relatedArticles={relatedArticles}
    additionalJsonLd={[faqPageSchema(absoluteUrl(CANONICAL), CERTIFIED_TRANSLATION_ARTICLE_FAQS)]}
    afterArticle={
      <AeoFrequentlyAskedQuestions
        items={CERTIFIED_TRANSLATION_ARTICLE_FAQS}
        className="border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-16"
      />
    }
  >
    <ArticleLead>
      Not every translation needs to be certified — but for many legal, government, and business processes, an uncertified
      translation simply won&apos;t be accepted. Here&apos;s how to know the difference.
    </ArticleLead>

    <ArticleSection title="What is a certified translation?">
      <p>
        A certified translation is a translation accompanied by a signed statement from the translator or translation agency
        confirming it is a complete and accurate representation of the original document. Unlike standard translation, it
        carries legal weight.
      </p>
    </ArticleSection>

    <ArticleSection title="When you legally need certified translation">
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Business incorporation documents</strong> submitted to
            government authorities — see our{" "}
            <Link to="/insights/india-entity-structure-liaison-branch-subsidiary" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
              entity structure guide
            </Link>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Immigration and visa applications</strong> (birth
            certificates, marriage certificates, academic records)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Court and legal proceedings</strong> requiring
            foreign-language evidence or contracts
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Regulatory filings</strong> for foreign companies entering
            a new market — see our{" "}
            <Link to="/insights/market-entry-guide-india" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
              India market entry guide
            </Link>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Academic credential evaluation</strong> for study or work
            permits
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Notarized agreements</strong> intended for use in a foreign
            jurisdiction
          </span>
        </li>
      </ul>
    </ArticleSection>

    <ArticleSection title="When standard translation is sufficient">
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>Internal business communications</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            Marketing and website content — often requiring{" "}
            <Link to="/insights/localization-vs-translation-difference" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
              localization
            </Link>{" "}
            rather than certification
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>Product descriptions and user guides</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>Social media and general correspondence</span>
        </li>
      </ul>
    </ArticleSection>

    <ArticleSection title="Certified vs. notarized vs. apostilled translation">
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Certified</strong> — confirms translation accuracy
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Notarized</strong> — a notary verifies the translator&apos;s
            identity and signature (not the translation&apos;s accuracy)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Apostilled</strong> — international certification for use in
            another country under the Hague Convention
          </span>
        </li>
      </ul>
      <p className="mt-4">
        Some processes require more than one — for example, immigration authorities may require both certification and
        notarization.
      </p>
    </ArticleSection>

    <ArticleHighlight>
      Many companies assume any bilingual employee or free online tool can produce a &ldquo;certified&rdquo; translation. Most
      government and legal bodies require translations from accredited professional translators or agencies — and rejecting
      improperly certified documents can cost weeks of delay.
    </ArticleHighlight>

    <ArticleSection title="How UVAN helps">
      <p>
        UVAN provides certified translation services through{" "}
        <Link to="/language-localization/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          language &amp; localization
        </Link>
        , with documentation formatted to meet the specific legal and regulatory standards of the receiving country or
        authority. For interpretation and voiceover needs, see{" "}
        <Link to="/global-talkies/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          Global Talkies
        </Link>
        .
      </p>
    </ArticleSection>

    <ArticleClosing>
      Unsure whether your documents need certification?{" "}
      <Link to="/ask-soham/" className="text-[hsl(var(--brand-purple-700))] hover:underline">
        Book a 15-minute call
      </Link>{" "}
      and we&apos;ll clarify requirements before you submit.
    </ArticleClosing>
  </InsightsArticleShell>
);

export default InsightsArticleCertifiedTranslation;
