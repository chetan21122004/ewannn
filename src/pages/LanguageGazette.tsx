import { ArrowRight, Download, Play } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const featureArticles = [
  {
    category: "Market Entry",
    readTime: "8 min read",
    title: "Why Japanese companies struggle entering India - and what to do differently",
    excerpt: "Navigating the cultural friction between structured methodology and dynamic market agility.",
    image: "/stitch/language-gazette/article-market-entry.jpg",
  },
  {
    category: "Operations",
    readTime: "5 min read",
    title: "The 5 operational gaps that quietly kill cross-border expansion",
    excerpt: "Identifying the invisible bottlenecks in global logistics and local talent acquisition.",
    image: "/stitch/language-gazette/article-operations.jpg",
  },
  {
    category: "Cultural IQ",
    readTime: "12 min read",
    title: "What 60,000 hours of interpretation taught me about cross-cultural business",
    excerpt: "The silent signals that determine the success of high-stakes international negotiations.",
    image: "/stitch/language-gazette/article-cultural-iq.jpg",
  },
];

const briefs = [
  {
    tag: "Trade Corridor",
    title: "India-Vietnam trade corridor: what businesses need to know in 2026",
    cta: "Read Brief",
  },
  {
    tag: "Career Guide",
    title: "Is a career in Asian languages worth it in India? An honest guide",
    cta: "Explore Guide",
  },
  {
    tag: "Best Practices",
    title: "How to choose a translation partner - what most buyers get wrong",
    cta: "Get Checklist",
  },
];

const LanguageGazette = () => {
  return (
    <PageLayout
      title="Language Gazette | Ewan Business Solutions"
      description="The Language Gazette by EWAN: editorial intelligence on language, culture, and international business execution."
      canonicalPath="/language-gazette/"
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-20 pt-14 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-purple-700)/0.2)] to-transparent" />
        <div className="container relative mx-auto grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
              Featured Publication
            </span>
            <h1 className="mt-6 font-serif text-5xl font-extrabold leading-[0.95] md:text-7xl">
              The Language
              <br />
              <span className="italic text-[hsl(var(--brand-gold-500))]">Gazette</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              EWAN&apos;s quarterly publication exploring the intersection of language, cultural intelligence, and international business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#intelligence-hub"
                className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))]"
              >
                Browse All Articles
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@ewan.co.in?subject=Language%20Gazette%20Latest%20Issue"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90"
              >
                Download Latest Issue
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-white/15">
              <img src="/stitch/language-gazette/hero-cover.jpg" alt="Language Gazette editorial cover" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="intelligence-hub" className="theme-section-light px-6 py-20">
        <div className="container mx-auto">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="font-serif text-4xl font-extrabold text-[hsl(var(--brand-navy-950))]">Intelligence Hub</h2>
              <p className="mt-3 text-on-light-secondary">Strategic perspectives for the cross-border executive.</p>
            </div>
            <Link to="/media" className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
              Back to Media Hub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {featureArticles.map((article) => (
              <article key={article.title} className="theme-card-light overflow-hidden rounded-[1.5rem]">
                <img src={article.image} alt={article.title} className="aspect-video w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">
                    {article.category} <span className="text-on-light-muted">- {article.readTime}</span>
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[hsl(var(--brand-navy-950))]">{article.title}</h3>
                  <p className="mt-3 text-sm text-on-light-secondary">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {briefs.map((brief, index) => (
              <article key={brief.title} className="theme-card-light rounded-[1.25rem] border-l-4 p-6" style={{ borderLeftColor: index % 2 === 0 ? "hsl(var(--brand-gold-500))" : "hsl(var(--brand-purple-700))" }}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">{brief.tag}</p>
                <h4 className="mt-3 text-lg font-bold leading-tight text-[hsl(var(--brand-navy-950))]">{brief.title}</h4>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                  {brief.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-soft px-6 py-20">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-extrabold text-[hsl(var(--brand-navy-950))]">In Action</h2>
            <p className="mt-3 text-on-light-secondary">Watch Soham and the EWAN team driving global discourse.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-12">
            <article className="relative overflow-hidden rounded-[1.5rem] lg:col-span-8">
              <img src="/stitch/language-gazette/video-keynote.jpg" alt="Keynote talk preview" className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-white" />
                </span>
              </div>
            </article>
            <div className="grid gap-6 lg:col-span-4">
              <article className="relative overflow-hidden rounded-[1.5rem]">
                <img src="/stitch/language-gazette/video-podcast.jpg" alt="Podcast session preview" className="aspect-video w-full object-cover" />
              </article>
              <article className="relative overflow-hidden rounded-[1.5rem]">
                <img src="/stitch/language-gazette/video-events.jpg" alt="Event highlights preview" className="aspect-video w-full object-cover" />
              </article>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageGazette;
