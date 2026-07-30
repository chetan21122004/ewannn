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
import { COMPANY_PHONE, PROJECTS_EMAIL } from "@/lib/site";

const CANONICAL = "/insights/ewan-to-uvan-rebrand/";
const TITLE = "Ewan Business Solutions is Now Uvan International Liaisoning Private Limited";
const DESCRIPTION =
  "Effective 25 July 2026, Ewan Business Solutions becomes Uvan International Liaisoning Private Limited — same team and standards, with a name that reflects our Asia market entry and representation work.";

const serviceSteps = [
  {
    title: "Market Intelligence",
    body: "Understand a market before investing in it.",
  },
  {
    title: "Market Validation",
    body: "Test your assumptions with real stakeholders.",
  },
  {
    title: "Partner Search and Engagement",
    body: "Identify and connect with partners worth trusting.",
  },
  {
    title: "Market Entry Programs",
    body: "Build and execute a practical entry strategy.",
  },
  {
    title: "Country Representation",
    body: "Establish a trusted local presence without opening an office first.",
  },
];

const relatedArticles = [
  {
    title: "How to Enter the Indian Market as a Foreign Company",
    href: "/insights/how-to-enter-indian-market",
    category: "Market Entry",
    excerpt: "Structured India market entry — readiness, roadmap, execution, and ongoing on-ground support.",
  },
  {
    title: "How to Choose a Translation Partner in India",
    href: "/insights/how-to-choose-translation-partner-india",
    category: "Language",
    excerpt: "Five practical steps for procurement and marketing buyers evaluating translation partners.",
  },
];

const InsightsArticleEwanToUvanRebrand = () => (
  <InsightsArticleShell
    title={TITLE}
    description={DESCRIPTION}
    canonicalPath={CANONICAL}
    category="Insights"
    breadcrumbLabel="Ewan to UVAN Rebrand"
    datePublished="2026-07-25"
    readTime="10 min read"
    heroImage="/stitch/insights/article-uvan-rebrand.jpg"
    heroImageAlt="Business professionals connecting across international markets"
    relatedArticles={relatedArticles}
  >
    <ArticleLead>
      After five years of building, learning, and growing alongside our clients, we are proud to announce a new chapter.
      Ewan Business Solutions is now Uvan International Liaisoning Private Limited, effective 25th July 2026. The name on
      the door has changed. Everything that earned your trust — the people, the standards, and the way we work — has not.
      This is not a departure from who we are. It is a clearer expression of who we have become.
    </ArticleLead>

    <ArticleSection title="The story behind the change">
      <p>
        We began in 2020 as Ewan Business Solutions. For years, people knew us as a language company, and many simply
        called us translators. It was an easy label, and in the early days it was close enough to the truth. Our work
        started with translation, interpretation, and localization, helping businesses in India and across Asia understand
        one another clearly.
      </p>
      <p>
        But something kept happening. Projects that started with language quickly turned into much bigger conversations.
        Clients did not only want a document translated. They wanted to know whether a market was worth entering, who they
        could trust on the ground, and how to build a presence in a country before committing to an office. We found
        ourselves advising on market strategy, finding and vetting partners, and representing companies locally long
        before they set up on their own.
      </p>
      <p>
        Language, we came to realise, was never the destination. It was the bridge. The real value we create is helping
        companies enter and grow in new markets with clarity and confidence.
      </p>
      <p>
        Over time, the word &ldquo;translator&rdquo; stopped describing what we do. Our old name captured only a small part
        of it. It was time for a change, and time to give our company a name that reflects the work as it is today.
      </p>
    </ArticleSection>

    <ArticlePullQuote attribution="UVAN">
      Language was never the destination. It was the bridge — the real value is helping companies enter and grow in new
      markets with clarity and confidence.
    </ArticlePullQuote>

    <ArticleSection title="Why Ewan became Uvan">
      <p>
        Uvan International Liaisoning Private Limited reflects what our company has become: an Asia market entry and
        representation partner. The word &ldquo;liaisoning&rdquo; sits at the heart of our work. We connect international
        companies with the right markets, partners, and opportunities across Asia, and we represent their interests on the
        ground when they cannot be there themselves.
      </p>
      <p>
        Our new identity, including the bridge in our logo, captures this idea directly. A bridge is what we have always
        been for our clients. It is how a business in one country reaches another with trust intact and risk understood.
      </p>
    </ArticleSection>

    <ArticleSection title="What Uvan does today">
      <p>
        Our work now follows a clear, structured path that takes a company from first curiosity to a real presence in
        market:
      </p>
      <ArticleSteps steps={serviceSteps} />
      <p className="mt-6">
        We deliver this across the India-Japan, India-China, and India-ASEAN corridors, combining market knowledge, local
        networks, cross-cultural expertise, and language capability in a single partnership.
      </p>
    </ArticleSection>

    <ArticleSection title="What has changed">
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Our name.</strong> Ewan Business Solutions is now Uvan
            International Liaisoning Private Limited.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Our logo.</strong> We have introduced a new visual
            identity built around the bridge — a symbol of connection across markets.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Our website.</strong> Our new home online is{" "}
            <a
              href="https://www.uvan.co.in"
              className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.uvan.co.in
            </a>
            .
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Our branding.</strong> Our look, tone, and materials now
            reflect our focus on market entry and representation across Asia.
          </span>
        </li>
      </ul>
    </ArticleSection>

    <ArticleSection title="What has not changed">
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">The team.</strong> The same people who have delivered for
            you continue to lead the work.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Our services.</strong> Everything we offered before is
            still here, including our translation, interpretation, and localization capabilities. They are now part of a
            broader offering rather than the whole of it.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Our commitment.</strong> Our standards, our attention to
            detail, and our dedication to your success remain exactly as they were. Uvan is ISO 9001:2015 certified and
            recognised under the Startup India initiative — the same foundations we have always held.
          </span>
        </li>
      </ul>
    </ArticleSection>

    <ArticleHighlight>
      You can now find us at{" "}
      <a
        href="https://www.uvan.co.in"
        className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.uvan.co.in
      </a>
      . During the transition period, our previous website will automatically redirect to our new one, so you will always
      reach the right place. We recommend updating your bookmarks and saved records with our new name and details at your
      convenience.
    </ArticleHighlight>

    <ArticleSection title="A thank you to our clients and partners">
      <p>
        To every client, partner, and colleague who has trusted us over the years, thank you. You shaped this journey, and
        you are the reason for it. This new chapter is not the start of something unfamiliar. It is the natural next step
        of everything we have built together.
      </p>
      <p>
        Uvan International Liaisoning Private Limited, formerly Ewan Business Solutions, remains the same trusted team you
        have always worked with, now with a name that fully reflects what we do. We look forward to continuing to serve
        you, and to helping many more companies find their way into and across Asia.
      </p>
    </ArticleSection>

    <ArticleSection title="Reach us">
      <ul className="mt-4 space-y-3">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Website:</strong>{" "}
            <a
              href="https://www.uvan.co.in"
              className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.uvan.co.in
            </a>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Email:</strong>{" "}
            <a href={`mailto:${PROJECTS_EMAIL}`} className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
              {PROJECTS_EMAIL}
            </a>
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-gold-500))]" />
          <span>
            <strong className="text-[hsl(var(--brand-navy-950))]">Phone:</strong>{" "}
            <a href={`tel:${COMPANY_PHONE.replace(/-/g, "")}`} className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
              +91 82757 44740
            </a>
          </span>
        </li>
      </ul>
      <p className="mt-6 text-sm text-on-light-muted">
        Uvan International Liaisoning Private Limited (formerly Ewan Business Solutions)
        <br />
        CIN: U74999PN2020PTC191146 · Pune, India
      </p>
    </ArticleSection>

    <ArticleClosing>
      The name has changed. The bridge has not. We look forward to continuing this work with you under Uvan.
    </ArticleClosing>

    <p className="mt-6 text-center sm:mt-8">
      <Link
        to="/market-entry/"
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
      >
        Explore our Market Entry mandate
      </Link>
    </p>
  </InsightsArticleShell>
);

export default InsightsArticleEwanToUvanRebrand;
