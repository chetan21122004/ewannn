import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import {
  absoluteUrl,
  articleSchema,
  breadcrumbSchema,
  howToSchema,
  personSoham,
} from "@/lib/schemaHelpers";

const CANONICAL = "/insights/how-to-enter-indian-market/";
const TITLE = "How to Enter the Indian Market as a Foreign Company — A Step-by-Step Guide";
const DESCRIPTION =
  "Structured India market entry: readiness call, roadmap, execution, and ongoing support — aligned with Ewan's proven four-step mandate.";

const steps = [
  "India Entry Readiness Call — 30 minutes to assess expansion goals, identify risk gaps, and define what must be in place before you move.",
  "Custom Entry Roadmap — A sequenced plan covering regulatory, operational, language, and cultural requirements for your sector and corridor.",
  "Execution — Ewan manages the full mandate on the ground. Regular updates. We handle the complexity.",
  "Ongoing Operations Support — Once established, Ewan continues as your on-ground liaison, operations manager, and language partner.",
];

const InsightsArticleHowToEnterIndia = () => {
  const pageUrl = absoluteUrl(CANONICAL);
  const jsonLd = [
    personSoham(),
    breadcrumbSchema(pageUrl, [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights/" },
      { name: "How to Enter the Indian Market", path: CANONICAL },
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
      description:
        "How foreign companies establish and operate in India using a single accountable partner covering regulatory navigation, execution, language, and culture.",
      steps,
    }),
  ];

  return (
    <PageLayout title={`${TITLE} | Ewan`} description={DESCRIPTION} canonicalPath={CANONICAL} jsonLd={jsonLd}>
      <article className="theme-section-light px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Insights · Market Entry</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] md:text-5xl">{TITLE}</h1>
          <p className="mt-6 text-lg leading-relaxed text-on-light-secondary">{DESCRIPTION}</p>

          <div className="prose prose-neutral mt-10 max-w-none text-on-light-secondary">
            <p>
              Foreign companies approaching India routinely underestimate regulatory sequencing, distributor integrity, coordination overhead across workstreams,
              on-ground liaison for government and negotiation settings, and the language layer threaded through each step. Treating India as translation plus
              legal misses how decisions are negotiated in practice — which is precisely why Ewan runs market entry language and operational execution together.
            </p>
            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">The four-step process</h2>
            <ol className="mt-4 list-decimal space-y-4 ps-6">
              {steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <h2 className="mt-12 font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Download the 2026 Market Entry Audit</h2>
            <p className="mt-3">
              Midway through planning, sanity-check readiness against five operational gaps before you accelerate spend. Grab the audit here:
            </p>
            <Link
              to="/market-entry-audit"
              className="mt-4 inline-flex rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
            >
              Download the 2026 Market Entry Audit
            </Link>
            <p className="mt-8">
              <Link to="/market-entry/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
                Explore the full Market Entry mandate →
              </Link>
            </p>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default InsightsArticleHowToEnterIndia;
