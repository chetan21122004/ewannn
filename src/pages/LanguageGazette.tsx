import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import LanguageGazetteMagazineLayout, { GazetteMasthead } from "@/components/language-gazette/LanguageGazetteMagazineLayout";
import GazetteCoverImage from "@/components/language-gazette/GazetteCoverImage";
import { latestGazetteIssue } from "@/data/languageGazetteIssues";

const issue = latestGazetteIssue;
const issuePath = issue.path.replace(/\/$/, "");

const briefs = [
  {
    tag: "Trade Corridor",
    title: "India-Vietnam trade corridor: what businesses need to know in 2026",
    cta: "Read Brief",
    to: "/insights/how-to-enter-indian-market" as const,
  },
  {
    tag: "Career Guide",
    title: "Is a career in Asian languages worth it in India? An honest guide",
    cta: "Explore Guide",
    to: "/insights" as const,
  },
  {
    tag: "Best Practices",
    title: "How to choose a translation partner - what most buyers get wrong",
    cta: "Get Checklist",
    to: "/insights/how-to-choose-translation-partner-india" as const,
  },
];

const LanguageGazette = () => (
  <PageLayout
    title="Language Gazette | UVAN"
    description="The Language Gazette by UVAN: editorial intelligence on language, culture, and international business execution."
    canonicalPath="/language-gazette/"
  >
    <LanguageGazetteMagazineLayout
      issue={issue}
      showHero
      articles={issue.articles}
      articleGridTitle={`${issue.label} Issue`}
      articleGridSubtitle={issue.description}
    >
      <section className="gazette-paper-section border-t border-[hsl(var(--brand-navy-950)/0.06)] px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <GazetteMasthead issueLabel="From the editors" />
            <Link to="/media" className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
              Back to Media Hub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </LanguageGazetteMagazineLayout>

    <section className="theme-section-soft px-6 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {briefs.map((brief, index) => (
            <Link
              key={brief.title}
              to={brief.to}
              className="theme-card-light block rounded-[1.25rem] border-l-4 p-6 transition hover:-translate-y-0.5"
              style={{ borderLeftColor: index % 2 === 0 ? "hsl(var(--brand-gold-500))" : "hsl(var(--brand-purple-700))" }}
            >
              <article>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">{brief.tag}</p>
                <h4 className="mt-3 text-lg font-bold leading-tight text-[hsl(var(--brand-navy-950))]">{brief.title}</h4>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                  {brief.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </article>
            </Link>
          ))}
        </div>

        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-light-muted">Media</p>
          <h2 className="mt-2 font-serif text-3xl font-extrabold text-[hsl(var(--brand-navy-950))]">In Action</h2>
          <p className="mt-2 text-sm text-on-light-secondary">Watch Soham and the UVAN team driving global discourse.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-[1.5rem] lg:col-span-8">
            <GazetteCoverImage src="/stitch/language-gazette/video-keynote.jpg" alt="Keynote talk preview" className="aspect-video w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/25">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Play className="h-8 w-8 text-white" />
              </span>
            </div>
          </article>
          <div className="grid gap-6 lg:col-span-4">
            <article className="relative overflow-hidden rounded-[1.5rem]">
              <GazetteCoverImage src="/stitch/language-gazette/video-podcast.jpg" alt="Podcast session preview" className="aspect-video w-full object-cover" />
            </article>
            <article className="relative overflow-hidden rounded-[1.5rem]">
              <GazetteCoverImage src="/stitch/language-gazette/video-events.jpg" alt="Event highlights preview" className="aspect-video w-full object-cover" />
            </article>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LanguageGazette;
