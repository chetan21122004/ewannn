import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import LanguageGazetteMagazineLayout, { GazetteMasthead } from "@/components/language-gazette/LanguageGazetteMagazineLayout";
import GazetteCoverImage from "@/components/language-gazette/GazetteCoverImage";
import { latestGazetteIssue } from "@/data/languageGazetteIssues";

const issue = latestGazetteIssue;

const briefs = [
  {
    tag: "Trade Corridor",
    title: "India-Vietnam trade corridor: what businesses need to know in 2026",
    cta: "Read Brief",
    to: "/insights/how-to-enter-indian-market" as const,
    doodle: "/doodles/International trade-bro.svg",
    accent: "gold" as const,
  },
  {
    tag: "Career Guide",
    title: "Is a career in Asian languages worth it in India? An honest guide",
    cta: "Explore Guide",
    to: "/insights" as const,
    doodle: "/doodles/Business growth-cuate.svg",
    accent: "purple" as const,
  },
  {
    tag: "Best Practices",
    title: "How to choose a translation partner - what most buyers get wrong",
    cta: "Get Checklist",
    to: "/insights/how-to-choose-translation-partner-india" as const,
    doodle: "/doodles/Preferences-bro.svg",
    accent: "purple" as const,
  },
];

const mediaItems = [
  {
    title: "Keynote: Language as Strategic Infrastructure",
    tag: "Keynote",
    image: "/stitch/language-gazette/video-keynote.jpg",
    featured: true,
  },
  {
    title: "Podcast: Cross-Border Communication",
    tag: "Podcast",
    image: "/stitch/language-gazette/video-podcast.jpg",
    featured: false,
  },
  {
    title: "Event Highlights: Global Discourse",
    tag: "Events",
    image: "/stitch/language-gazette/video-events.jpg",
    featured: false,
  },
];

const LanguageGazette = () => {
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  return (
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
            <div className="mb-2 flex flex-wrap items-end justify-between gap-5">
              <GazetteMasthead issueLabel="From the editors" />
              <Link
                to="/media"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:-translate-y-0.5"
              >
                Back to Media Hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </LanguageGazetteMagazineLayout>

      <section className="relative overflow-hidden theme-section-soft px-6 py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/beautiful-purple-color-gradient-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />
        <div className="glow-orb glow-orb-purple pointer-events-none -left-24 top-10 h-[360px] w-[360px] opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-10 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Editorial Briefs
            </span>
            <h2 className="mt-4 font-serif text-3xl font-extrabold text-on-light sm:text-4xl">
              Intelligence Beyond the{" "}
              <span className="italic text-[hsl(var(--brand-purple-700))]">Quarterly Issue</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-light-secondary">
              Practical guides on trade corridors, language careers, and partner selection - curated for teams executing across borders.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {briefs.map((brief, index) => (
              <motion.div
                key={brief.title}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(0.08 + index * 0.08)}
              >
                <Link
                  to={brief.to}
                  className="group theme-card-light card-shine flex h-full flex-col overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] transition hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 border-b border-[hsl(var(--border-light))] p-6 pb-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                        brief.accent === "gold"
                          ? "bg-[hsl(var(--brand-gold-500)/0.14)]"
                          : "bg-[hsl(var(--brand-purple-700)/0.1)]"
                      }`}
                    >
                      <img src={brief.doodle} alt="" className="h-10 w-10 object-contain" aria-hidden />
                    </div>
                    <div>
                      <p
                        className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                          brief.accent === "gold"
                            ? "text-[hsl(var(--brand-gold-600))]"
                            : "text-[hsl(var(--brand-purple-700))]"
                        }`}
                      >
                        {brief.tag}
                      </p>
                      <h3 className="mt-2 text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))]">
                        {brief.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-auto p-6 pt-4">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                      {brief.cta}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.2)}
            className="mt-20"
          >
            <div className="mb-10 grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-on-light-muted">Media</p>
                <h2 className="mt-2 font-serif text-3xl font-extrabold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                  UVAN in Action
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-on-light-secondary">
                  Watch Soham and the UVAN team driving global discourse on language, culture, and market execution.
                </p>
              </div>
              <motion.img
                src="/doodles/Video tutorial-rafiki (1).svg"
                alt="Video and media illustration"
                className="mx-auto h-36 w-full max-w-[240px] object-contain lg:mx-0 lg:ml-auto"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              <motion.article
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(0.24)}
                className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] lg:col-span-8"
              >
                <GazetteCoverImage
                  src={mediaItems[0].image}
                  alt={mediaItems[0].title}
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.82)] via-[hsl(var(--brand-navy-950)/0.2)] to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-sm transition group-hover:scale-105">
                    <Play className="ml-1 h-8 w-8 text-white" fill="currentColor" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="rounded-full bg-[hsl(var(--brand-gold-500))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-navy-950))]">
                    {mediaItems[0].tag}
                  </span>
                  <h3 className="mt-3 max-w-xl font-serif text-2xl font-bold text-white sm:text-3xl">{mediaItems[0].title}</h3>
                </div>
              </motion.article>

              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
                {mediaItems.slice(1).map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={hidden}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition(0.3 + index * 0.08)}
                    className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
                  >
                    <GazetteCoverImage
                      src={item.image}
                      alt={item.title}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.78)] to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      {item.tag}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-serif text-lg font-bold leading-snug text-white">{item.title}</h3>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/media"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-purple-700))] shadow-sm transition hover:-translate-y-0.5"
              >
                Explore Media Hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageGazette;
