import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Globe2,
  Languages,
  Linkedin,
  MailPlus,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { absoluteUrl, breadcrumbSchema, collectionPageSchema } from "@/lib/schemaHelpers";

const NEWSLETTER_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7211685542705467393";

const editionTopics = [
  {
    icon: Globe2,
    title: "Market entry intelligence",
    copy: "India entry playbooks, corridor updates, and regulatory context for operators expanding across Asia.",
  },
  {
    icon: Languages,
    title: "Language & interpretation",
    copy: "Translation strategy, interpretation modes, and when language decisions affect deal outcomes.",
  },
  {
    icon: BookOpen,
    title: "Executive liaisoning",
    copy: "Government engagement, stakeholder navigation, and on-ground facilitation for foreign investors.",
  },
  {
    icon: Sparkles,
    title: "Cross-border operations",
    copy: "Practical notes from UVAN teams on trade, culture, and execution across India–Asia corridors.",
  },
] as const;

const previewItems = [
  "India entry: what to sequence before your first visit",
  "Choosing interpretation for high-stakes negotiations",
  "Corridor watch: India–Vietnam trade infrastructure",
] as const;

const Newsletter = () => {
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0.35 : 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true } as const,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
      };

  const jsonLd = [
    collectionPageSchema(
      "UVAN Newsletter",
      "Subscribe to UVAN's LinkedIn newsletter for cross-border market entry and language services insights.",
      absoluteUrl("/newsletter/"),
    ),
    breadcrumbSchema(absoluteUrl("/newsletter/"), [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights/" },
      { name: "Newsletter", path: "/newsletter/" },
    ]),
  ];

  return (
    <PageLayout
      title="Newsletter | UVAN"
      description="Subscribe to UVAN's LinkedIn newsletter for market entry, language services, and cross-border business insights."
      canonicalPath="/newsletter/"
      keywords="UVAN newsletter, market entry newsletter, language services newsletter"
      jsonLd={jsonLd}
    >
      {/* Hero */}
      <section className="relative isolate overflow-hidden section-pad-hero sm:px-6">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 52% 44% at 92% 8%, hsl(var(--brand-gold-500) / 0.13) 0%, transparent 50%), radial-gradient(ellipse 58% 48% at 8% 88%, hsl(var(--brand-purple-500) / 0.08) 0%, transparent 52%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.16]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -right-16 top-1/4 h-[220px] w-[220px] opacity-[0.07] lg:-right-20 lg:h-[300px] lg:w-[300px] lg:opacity-[0.09]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div initial={hidden} animate={show} transition={transition(0)} className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] shadow-sm sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                <MailPlus className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Newsletter
              </span>

              <h1 className="mt-5 max-w-xl font-serif text-[1.85rem] font-bold leading-[1.06] text-on-light sm:text-4xl lg:text-5xl">
                Market entry and language intelligence,{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">straight from UVAN.</span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-on-light-secondary sm:mt-5 sm:text-base lg:text-lg">
                Follow the UVAN newsletter on LinkedIn for practical notes on India entry, executive liaisoning,
                translation, interpretation, and cross-border corridors — written for business leaders and operators.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={NEWSLETTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] shadow-[0_16px_36px_hsl(var(--brand-gold-500)/0.22)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
                >
                  <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
                  Subscribe on LinkedIn
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                </a>
                <Link
                  to="/insights"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto"
                >
                  Browse articles
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2 text-sm font-semibold text-[hsl(var(--brand-navy-950)] shadow-sm backdrop-blur-sm">
                  <Users className="h-4 w-4 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                  2,000+ subscribers
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-on-light-muted">
                  Free on LinkedIn
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={transition(0.1)}
              className="lg:col-span-6"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, hsl(var(--brand-purple-500) / 0.18) 0%, transparent 55%), radial-gradient(circle at 80% 80%, hsl(var(--brand-gold-500) / 0.14) 0%, transparent 50%)",
                  }}
                  aria-hidden
                />

                <div className="relative overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_24px_64px_hsl(var(--brand-navy-950)/0.1)] sm:rounded-[2rem]">
                  <div className="border-b border-[hsl(var(--border-light))] bg-[linear-gradient(135deg,hsl(var(--brand-navy-950))_0%,hsl(var(--brand-purple-800))_100%)] px-6 py-5 text-white">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
                          UVAN Newsletter
                        </p>
                        <p className="mt-1 font-serif text-lg font-bold leading-snug sm:text-xl">
                          Cross-Border Brief
                        </p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                        <Linkedin className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                  </div>

                  <div className="px-6 py-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
                      Recent edition preview
                    </p>
                    <ul className="mt-4 space-y-3">
                      {previewItems.map((item, index) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-4 py-3"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700)/0.1)] text-[10px] font-bold text-[hsl(var(--brand-purple-700))]">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-snug text-on-light">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={NEWSLETTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[hsl(var(--brand-purple-700)/0.2)] bg-[hsl(var(--brand-purple-700)/0.04)] px-4 py-3 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:border-[hsl(var(--brand-purple-700)/0.35)] hover:bg-[hsl(var(--brand-purple-700)/0.08)]"
                    >
                      Read on LinkedIn
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="theme-section-light px-6 section-pad">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...motionProps} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              What you&apos;ll receive
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl">
              Practical intelligence for cross-border leaders
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-light-secondary">
              Each edition distills field experience from UVAN&apos;s language, liaisoning, and market entry teams —
              no fluff, no generic thought leadership.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {editionTopics.map((topic, index) => (
              <motion.article
                key={topic.title}
                {...motionProps}
                transition={{ ...motionProps.transition, delay: index * 0.06 }}
                className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_8px_28px_hsl(var(--brand-navy-950)/0.04)] transition hover:border-[hsl(var(--brand-purple-700)/0.2)] hover:shadow-[0_12px_36px_hsl(var(--brand-navy-950)/0.06)] sm:rounded-[1.35rem] sm:p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.08)] text-[hsl(var(--brand-purple-700))]">
                  <topic.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))]">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">{topic.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden border-t border-[hsl(var(--border-light))] theme-section-soft px-6 section-pad-cta">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -left-12 -bottom-12 h-[180px] w-[180px] opacity-[0.05] lg:h-[220px] lg:w-[220px] lg:opacity-[0.07]" />

        <div className="container relative z-10 mx-auto max-w-4xl">
          <motion.div
            {...motionProps}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 text-center shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.07)] sm:rounded-[1.75rem] sm:p-10"
          >
            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-3xl">
              Join 2,000+ operators and leaders on LinkedIn
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-on-light-secondary sm:text-base">
              Subscribe in one click — editions arrive in your LinkedIn feed alongside UVAN&apos;s market and language
              updates.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-8 py-3 text-sm font-bold text-white shadow-[0_12px_32px_hsl(var(--brand-navy-950)/0.2)] transition hover:brightness-110 sm:w-auto"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                Subscribe on LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                to="/language-gazette"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto"
              >
                Read The Language Gazette
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Newsletter;
