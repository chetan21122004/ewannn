import { Link } from "react-router-dom";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import InsightsArticleShell from "@/components/insights/InsightsArticleShell";
import MarketEntryAuditInlineCta from "@/components/MarketEntryAuditInlineCta";
import {
  ArticleClosing,
  ArticleHighlight,
  ArticleLead,
  ArticleSection,
  ArticleTable,
} from "@/components/language-gazette/GazetteArticleBlocks";
import { INDIA_ENTITY_STRUCTURE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema } from "@/lib/schemaHelpers";

const CANONICAL = "/insights/india-entity-structure-liaison-branch-subsidiary/";
const TITLE = "Liaison Office vs Branch Office vs Subsidiary: Choosing the Right India Entity Structure";
const DESCRIPTION =
  "Liaison office, branch office, or subsidiary? Compare control, permitted activities, tax, and liability to choose the right India entity structure for your business.";

const relatedArticles = [
  {
    title: "How to Expand Your Business into India: A Complete Market Entry Guide",
    href: "/insights/market-entry-guide-india",
    category: "Market Entry",
    excerpt: "Step-by-step market entry covering entity setup, compliance, and localization.",
  },
  {
    title: "Top 10 Challenges Foreign Companies Face When Entering the Indian Market",
    href: "/insights/challenges-foreign-companies-india",
    category: "Market Entry",
    excerpt: "Common hurdles and how to navigate regulatory and cultural complexity.",
  },
];

const InsightsArticleIndiaEntityStructure = () => (
  <InsightsArticleShell
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Market Entry"
    breadcrumbLabel="India Entity Structure Guide"
    datePublished="2026-02-10"
    readTime="12 min read"
    heroImage="/stitch/insights/insight-asset-05.jpg"
    heroImageAlt="Legal documents for India entity structure comparison"
    relatedArticles={relatedArticles}
    additionalJsonLd={[faqPageSchema(absoluteUrl(CANONICAL), INDIA_ENTITY_STRUCTURE_FAQS)]}
    afterArticle={
      <AeoFrequentlyAskedQuestions
        items={INDIA_ENTITY_STRUCTURE_FAQS}
        className="border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-16"
      />
    }
  >
    <ArticleLead>
      The entity structure you choose is the first real decision of your India entry, and it quietly shapes everything that
      follows: how much you can do, how much tax you pay, how exposed your parent company is, and how much compliance you
      carry. Get it right and the rest of the setup falls into place.
    </ArticleLead>

    <ArticleSection title="Start with the question that matters most">
      <p>
        Before comparing forms, answer one thing honestly: do you intend to earn revenue in India in the near term, or are you
        here first to understand the market and build relationships? That single answer removes half the options.
      </p>
    </ArticleSection>

    <ArticleSection title="Liaison office: a presence without operations">
      <p>
        A liaison office lets a foreign company hold a presence in India without carrying out commercial or revenue-generating
        activity. It cannot sign revenue contracts, raise invoices, or trade. Because it earns nothing in India, it is funded
        entirely by inward remittance from the parent and generally pays no Indian income tax.
      </p>
      <p className="mt-4">
        <strong className="text-[hsl(var(--brand-navy-950))]">Best for:</strong> market research, brand representation, and
        relationship-building before you commit to operations. See{" "}
        <Link to="/market-research/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          market research services
        </Link>
        .
      </p>
      <p className="mt-2">
        <strong className="text-[hsl(var(--brand-navy-950))]">Watch out for:</strong> activity restrictions are strict.
        Stepping over them is a FEMA contravention, not a grey area.
      </p>
    </ArticleSection>

    <ArticleSection title="Branch office: limited operations under the parent's name">
      <p>
        A branch office lets an established foreign company carry out a defined set of commercial activities while remaining an
        extension of the parent. Permitted activities include export/import, professional services, research, and technical
        support. It can earn income and is taxed at the foreign-company rate — reduced from 40% to 35% (plus surcharge and
        cess) from the 2024 financial year.
      </p>
      <p className="mt-4">
        <strong className="text-[hsl(var(--brand-navy-950))]">Best for:</strong> established firms wanting a real operational
        footprint without incorporating a separate company.
      </p>
      <p className="mt-2">
        <strong className="text-[hsl(var(--brand-navy-950))]">Watch out for:</strong> the parent carries the liability, and
        the tax rate sits above what a domestic company pays.
      </p>
    </ArticleSection>

    <ArticleSection title="Wholly owned subsidiary: full control as a separate company">
      <p>
        A wholly owned subsidiary is a separate Indian company, usually a private limited company, owned entirely by the
        foreign parent. It can do everything a domestic company can do. It is taxed as a domestic company — a subsidiary
        opting into the concessional regime pays a base rate of roughly 22% (plus surcharge and cess). Liability is
        ring-fenced to the capital invested.
      </p>
      <p className="mt-4">
        <strong className="text-[hsl(var(--brand-navy-950))]">Best for:</strong> companies serious about long-term,
        revenue-generating operations. See our{" "}
        <Link to="/insights/market-entry-guide-india" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          market entry guide
        </Link>
        .
      </p>
    </ArticleSection>

    <ArticleSection title="Joint venture: a subsidiary with a local partner">
      <p>
        A joint venture is an Indian company incorporated with a local partner who holds a share of the equity. Companies pick
        it when sector caps require an Indian partner, or when a partner brings distribution, licences, or market knowledge
        that would take years to build alone.
      </p>
    </ArticleSection>

    <ArticleSection title="Comparison at a glance">
      <ArticleTable
        caption="General comparison. Sector-specific FDI rules, tax positions, and treaty benefits should be validated for your own case."
        headers={["Factor", "Liaison Office", "Branch Office", "Wholly Owned Subsidiary", "Joint Venture"]}
        rows={[
          ["Revenue activity", "Not permitted", "Permitted (defined scope)", "Full", "Full"],
          ["Legal status", "Extension of parent", "Extension of parent", "Separate Indian company", "Separate Indian company"],
          ["Liability on parent", "Yes", "Yes", "Limited to shareholding", "Shared, per shareholding"],
          ["Income tax", "None (no income earned)", "Foreign-company rate (35% + surcharge)", "Domestic rate (from 22% + surcharge)", "Domestic rate"],
          ["Approval route", "RBI via AD bank (FEMA)", "RBI via AD bank (FEMA)", "MCA incorporation", "MCA incorporation"],
          ["Best suited to", "Market study, representation", "Limited operations", "Full operations, long term", "Shared or regulated entry"],
        ]}
      />
    </ArticleSection>

    <ArticleSection title="A regulatory change worth knowing about">
      <p>
        Under the current FEMA framework, a liaison office generally requires the parent to show a profit-making track record
        over the preceding three years and net worth of at least USD 50,000, while a branch office requires a five-year track
        record and net worth of at least USD 100,000. In October 2025 the RBI published draft regulations proposing to remove
        these thresholds — as of now those changes remain in draft. Confirm the current position when you file.
      </p>
    </ArticleSection>

    <ArticleHighlight>
      The most expensive mistake is choosing for speed. A structure that is quick to register but wrong for your goals costs
      far more to unwind later than it ever saved at setup. If you are still weighing India against other markets, see our{" "}
      <Link to="/insights/best-countries-market-entry-2026" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
        2026 market entry comparison
      </Link>
      .
    </ArticleHighlight>

    <MarketEntryAuditInlineCta />

    <ArticleSection title="How UVAN helps">
      <p>
        UVAN helps foreign companies choose and set up the right India entity structure through{" "}
        <Link to="/market-entry/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          market entry consulting
        </Link>
        , weighing control, tax, liability, and compliance against your growth plans. From RBI approvals and incorporation
        through document translation and notarisation via{" "}
        <Link to="/language-localization/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          language services
        </Link>
        , we run the structure and the paperwork as one process.
      </p>
    </ArticleSection>

    <ArticleClosing>
      Not sure which structure fits? Try our{" "}
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

export default InsightsArticleIndiaEntityStructure;
