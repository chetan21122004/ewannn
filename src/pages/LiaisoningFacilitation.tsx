import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Handshake,
  Scale,
  ShieldAlert,
  Sparkles,
  Quote,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { LIAISONING_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, serviceSchema } from "@/lib/schemaHelpers";

/** Stitch screen assets (`public/stitch/liaisoning-facilitation/`); replace via `curl -L` from Stitch export when available */
const stitch = {
  heroBg: "/stitch/liaisoning-facilitation/hero-bg.jpg",
  heroVisual: "/stitch/liaisoning-facilitation/hero-visual.jpg",
  executive: "/stitch/liaisoning-facilitation/executive.jpg",
} as const;

const heroCapabilities = [
  "Executive boardrooms",
  "Government corridors",
  "Negotiation tables",
];

const heroStats = [
  { value: "60,000+", label: "Boardroom hours" },
  { value: "Consulate", label: "Gov. recognition" },
  { value: "4 corridors", label: "Japan · China · Korea · ASEAN" },
];

const executiveProofPoints = [
  { value: "60,000+", label: "Boardroom hours", detail: "Simultaneous interpretation in sensitive executive settings" },
  { value: "Consulate", label: "Recognised liaison", detail: "Formal government and institutional relationships" },
  { value: "4 corridors", label: "Asia coverage", detail: "Japan · China · Korea · ASEAN language depth" },
];

const executiveHighlights = [
  "Boardroom interpretation in Mandarin, Japanese, Korean, and ASEAN languages",
  "Government and institutional liaison with formal recognition",
  "Negotiation facilitation when intent - not just words - must align",
];

const services = [
  {
    id: "executive-liaison",
    title: "Executive Business Liaison",
    description:
      "High-stakes boardroom and executive-level liaison for cross-border business. We don't just translate words; we translate authority, intent, and nuance. Our practitioners have spent a decade in the rooms where global leaders and Fortune 500 boards make decisions.",
    points: [
      "Boardroom interpretation and meeting facilitation",
      "Executive communication strategy for Asian markets",
      "Strategic partner relationship management",
      "Cross-cultural management advisory",
    ],
    icon: Briefcase,
    doodle: "/doodles/Group discussion-bro.svg",
    doodleAlt: "Executive liaison illustration",
  },
  {
    id: "government-liaison",
    title: "Government & Regulatory Liaison",
    description:
      "Navigating government departments and regulatory bodies requires a specific kind of liaison - one built on institutional trust and professional standing. UVAN has formal recognition and experience with the Consulate General of the PRC, MSAMB, and the Bhashini Initiative (MeitY).",
    points: [
      "Government department and official liaison",
      "Regulatory and compliance communication",
      "Institutional partner relationship building",
      "Public sector project coordination",
    ],
    icon: Building2,
    doodle: "/doodles/Call center-amico.svg",
    doodleAlt: "Government liaison illustration",
  },
  {
    id: "negotiation-facilitation",
    title: "Negotiation Facilitation",
    description:
      "Negotiations in the India-Asia corridor often stall not because of the numbers, but because of how they are presented. We facilitate negotiations in Mandarin, Japanese, Korean, and ASEAN languages - ensuring that both sides are operating with the same understanding of intent.",
    points: [
      "Bilingual negotiation support",
      "Conflict mediation and bridge-building",
      "Contract and term-sheet negotiation liaison",
      "Cultural negotiation advisory",
    ],
    icon: Scale,
    doodle: "/doodles/International trade-bro.svg",
    doodleAlt: "Negotiation facilitation illustration",
  },
  {
    id: "crisis-resolution",
    title: "Crisis & Conflict Resolution",
    description:
      "When cross-border relationships break down, miscommunication is almost always at the center. UVAN provides neutral, professional mediation and liaison to resolve conflicts, clarify intent, and rebuild the communication bridge.",
    points: [
      "Communication breakdown mediation",
      "Dispute resolution facilitation",
      "Relationship recovery and turnaround",
      "Crisis communication support",
    ],
    icon: ShieldAlert,
    doodle: "/doodles/Happy announcement-cuate.svg",
    doodleAlt: "Crisis resolution illustration",
  },
];

const whoThisIsFor = [
  "CEOs and Directors leading cross-border expansion or procurement",
  "Foreign companies navigating Indian government or regulatory bodies",
  "Indian companies in complex negotiations with Japanese, Chinese, or Korean partners",
  "Government agencies and trade bodies requiring high-stakes institutional liaison",
];

const liaisonLd = [
  faqPageSchema(absoluteUrl("/liaisoning-facilitation/"), LIAISONING_FAQS),
  serviceSchema({
    name: "Business liaisoning & facilitation",
    description:
      "Government, institutional, executive, negotiation, coordination, exhibition, and trade-fair liaison with native-language fluency across the India-Asia corridor.",
    canonicalPath: "/liaisoning-facilitation/",
    serviceType: "Liaisoning services",
  }),
];

const LiaisoningFacilitation = () => {
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <PageLayout
      title="Executive Liaison & Negotiation Facilitation India | UVAN"
      description="High-stakes executive liaison, government relations, and negotiation facilitation for the India-Asia corridor. 60,000+ hours of boardroom experience in Mandarin, Japanese, and Korean."
      canonicalPath="/liaisoning-facilitation/"
      jsonLd={liaisonLd}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-12 pt-10 text-white md:pb-14 md:pt-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.24] md:opacity-[0.3]"
          style={{
            backgroundImage: `url('${stitch.heroBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.14] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('/bg-blobs/abstract-background-purple-dark-blue-gradient-wave-modern-background-combination-curve-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_52%_at_78%_8%,hsl(var(--brand-purple-700)/0.38),transparent_52%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_88%,hsl(var(--brand-cyan-500)/0.1),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.55)] via-[hsl(var(--brand-navy-950)/0.88)] to-[hsl(var(--brand-navy-950))]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -bottom-24 -left-20 h-[280px] w-[280px] opacity-[0.07]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-14">
            <motion.div
              className="lg:col-span-7"
              initial={hidden}
              animate={show}
              transition={transition(0)}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm"
              >
                <Handshake className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-gold-500))]" aria-hidden />
                High-Stakes Liaison
              </motion.span>

              <h1 className="max-w-2xl font-serif text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[0.96] xl:text-[3.5rem]">
                When the Room Is{" "}
                <span className="text-[hsl(var(--brand-gold-500))]">Tense,</span>
                <br className="hidden sm:block" />
                {" "}the Right Partner{" "}
                <span className="relative inline-block italic text-[hsl(var(--brand-gold-500))]">
                  Makes the Difference.
                  {!reduceMotion ? (
                    <motion.span
                      className="absolute -bottom-1.5 left-0 h-[4px] w-full rounded-full bg-[hsl(var(--brand-gold-500)/0.35)]"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.45, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      aria-hidden
                    />
                  ) : null}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/76 sm:text-lg">
                UVAN provides executive liaison and negotiation support for cross-border business - sitting between you
                and your partners, government officials, or vendors so intent is never lost in translation.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {heroCapabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/62 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 sm:max-w-2xl">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={hidden}
                    animate={show}
                    transition={transition(0.14 + index * 0.05)}
                    className="min-w-0 rounded-xl bg-white/[0.05] px-3 py-3 sm:px-4 sm:py-3.5"
                  >
                    <p className="font-serif text-lg font-bold leading-none text-[hsl(var(--brand-gold-500))] sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[9px] font-bold uppercase leading-snug tracking-[0.08em] text-white/52 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="mailto:info@ewan.co.in?subject=Liaisoning%20Requirement"
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] shadow-[0_14px_36px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105"
                >
                  Discuss Your Requirement
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </motion.a>
                <Link
                  to="/ask-soham"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/22 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12"
                >
                  Ask Soham - 15 Min Free
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.figure
              className="flex flex-col items-center lg:col-span-5 lg:items-end lg:justify-center"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={transition(0.12)}
            >
              <motion.img
                src="/doodles/Group discussion-bro.svg"
                alt="Executive liaison and negotiation illustration"
                className="h-48 w-full max-w-[340px] object-contain sm:h-52 lg:h-60 lg:max-w-[380px]"
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <figcaption className="mt-5 max-w-[320px] text-center lg:max-w-[340px] lg:text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))]">
                  Representation, not interpretation
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/68">
                  Boardroom-grade liaison across the India-Asia corridor.
                </p>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      {/* Executive Liaison */}
      <section
        id="executive-liaison"
        className="theme-section-soft relative scroll-mt-28 overflow-hidden px-6 py-16 md:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 14% 12%, hsl(var(--brand-purple-700)/0.08) 0%, transparent 42%), radial-gradient(circle at 92% 88%, hsl(var(--brand-gold-500)/0.06) 0%, transparent 38%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.07]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-10 grid items-end gap-8 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(200px,240px)]"
          >
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Handshake className="h-3.5 w-3.5" aria-hidden />
                Executive Liaison
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
                Liaison Is Not Just Interpretation. It Is{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">Representation.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-on-light-secondary">
                Professional standing and cultural intelligence for the rooms where cross-border deals, audits, and
                disputes are decided.
              </p>
            </div>
            <motion.img
              src="/doodles/Group discussion-bro.svg"
              alt="Executive liaison illustration"
              className="mx-auto h-36 w-full max-w-[220px] object-contain lg:mx-0 lg:ml-auto"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.08)}
            className="overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_56px_rgba(26,22,51,0.08)] lg:rounded-[2.5rem]"
          >
            <div className="grid lg:grid-cols-12">
              <div className="relative lg:col-span-5">
                <img
                  src={stitch.executive}
                  alt="UVAN executive liaison practitioner in a boardroom setting"
                  className="aspect-[16/11] w-full object-cover object-[center_18%] sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.55)] via-transparent to-transparent lg:from-[hsl(var(--brand-navy-950)/0.35)]" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-6 sm:left-6 sm:right-6">
                  {executiveProofPoints.slice(0, 2).map((point) => (
                    <div
                      key={point.label}
                      className="rounded-xl border border-white/15 bg-[hsl(var(--brand-navy-950)/0.72)] px-3 py-2 backdrop-blur-md sm:px-4 sm:py-2.5"
                    >
                      <p className="font-serif text-sm font-bold text-[hsl(var(--brand-gold-500))] sm:text-base">
                        {point.value}
                      </p>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                        {point.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-7 lg:p-12">
                <p className="text-sm leading-relaxed text-on-light-secondary md:text-base">
                  In high-stakes business environments - whether it&apos;s a joint venture negotiation, a government audit, or
                  a supplier dispute - what you say is as important as how it is understood. UVAN provides the
                  professional standing and cultural intelligence to represent your interests accurately.
                </p>

                <blockquote className="relative mt-6 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-5 md:p-6">
                  <Quote
                    className="absolute right-4 top-4 h-8 w-8 text-[hsl(var(--brand-purple-700)/0.12)]"
                    aria-hidden
                  />
                  <p className="relative text-sm leading-relaxed text-on-light-secondary md:text-base">
                    Our founder, Soham Kakade, brings over{" "}
                    <span className="font-semibold text-[hsl(var(--brand-navy-950))]">60,000 hours</span> of simultaneous
                    interpretation experience in the most sensitive boardroom environments - the foundation of our ability
                    to read a room, manage expectations, and keep cross-border relationships clear.
                  </p>
                </blockquote>

                <ul className="mt-6 space-y-3 border-t border-[hsl(var(--border-light))] pt-6">
                  {executiveHighlights.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={hidden}
                      whileInView={show}
                      viewport={{ once: true }}
                      transition={transition(0.12 + index * 0.05)}
                      className="flex items-start gap-3 text-sm leading-relaxed text-on-light-secondary"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700)/0.1)]">
                        <CheckCircle2 className="h-3 w-3 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.16)}
            className="mt-6 grid gap-4 sm:grid-cols-3"
          >
            {executiveProofPoints.map((point, index) => (
              <motion.div
                key={point.label}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(0.18 + index * 0.05)}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="theme-card-light rounded-2xl border border-[hsl(var(--border-light))] p-5"
              >
                <p className="font-serif text-2xl font-bold text-[hsl(var(--brand-purple-700))]">{point.value}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-on-light-muted">
                  {point.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">{point.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="theme-section-light relative scroll-mt-28 overflow-hidden px-6 py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:72%_40%] opacity-[0.1] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/beautiful-purple-color-gradient-background-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-10 grid items-center gap-8 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)]"
          >
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                Our Liaisoning Services
              </span>
              <h2 className="font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
                Four Liaisoning{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">Capabilities</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-light-secondary">
                From executive boardrooms to government corridors - liaison support built on institutional trust and
                native-language fluency across the India-Asia corridor.
              </p>
            </div>
            <motion.img
              src="/doodles/Charts-cuate.svg"
              alt="Liaison services illustration"
              className="mx-auto h-40 w-full max-w-[240px] object-contain lg:max-w-none"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.id}
                  id={service.id}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition((index % 2) * 0.08)}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  className="group theme-card-light card-shine scroll-mt-28 overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] p-6 sm:p-7"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700)/0.75)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>
                  <motion.img
                    src={service.doodle}
                    alt={service.doodleAlt}
                    className="mx-auto mb-4 h-24 w-full max-w-[140px] object-contain"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  />
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{service.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-[hsl(var(--border-light))] pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-on-light-secondary">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="theme-section-soft relative overflow-hidden px-6 py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:10%_80%] opacity-[0.11] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/purple-abstract-background-luxury-elements-260nw-2723588695.webp')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 22%, hsl(var(--brand-purple-700)/0.09) 0%, transparent 38%), radial-gradient(circle at 18% 78%, hsl(var(--brand-gold-500)/0.07) 0%, transparent 34%)",
          }}
          aria-hidden
        />
        <div className="glow-orb glow-orb-gold pointer-events-none -left-20 bottom-0 h-[280px] w-[280px] opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="grid items-center gap-10 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)]"
          >
            <motion.figure
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.08)}
              className="order-2 lg:order-1"
            >
              <motion.img
                src="/doodles/Address-cuate.svg"
                alt="Stakeholders for liaison services illustration"
                className="mx-auto h-44 w-full max-w-[260px] object-contain lg:mx-0"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>

            <div className="order-1 theme-card-light card-shine rounded-3xl border border-[hsl(var(--border-light))] p-8 sm:p-10 lg:order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Users className="h-3.5 w-3.5" aria-hidden />
                Who This Is For
              </span>
              <h2 className="font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                Built for High-Stakes{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">Communication</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base">
                When the outcome depends on how you are understood - not just what you say - UVAN liaison support is
                built for leaders operating at the intersection of business, government, and culture.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {whoThisIsFor.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={hidden}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition(0.1 + index * 0.04)}
                    className="flex items-start gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                    <span className="text-sm leading-relaxed text-on-light-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={LIAISONING_FAQS} className="theme-section-light px-6 py-16 md:py-20" />
    </PageLayout>
  );
};

export default LiaisoningFacilitation;
