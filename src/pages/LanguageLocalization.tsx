import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Languages,
  Mic2,
  ShieldCheck,
  Sparkles,
  Subtitles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LANGUAGE_LOCALIZATION_FAQS, SPEAKABLE_LANGUAGE } from "@/data/aeoContent";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  speakableWebPage,
} from "@/lib/schemaHelpers";

const services = [
  {
    id: "translation",
    title: "Translation",
    description:
      "Translation is the conversion of written content from one language to another while preserving meaning, tone, and intent. UVAN provides certified translation for legal, technical, medical, and commercial documents across 125+ languages — by native-language experts with sector-specific knowledge.",
    icon: Languages,
    doodle: "/doodles/Mail-amico.svg",
    doodleAlt: "Document translation illustration",
  },
  {
    id: "interpretation",
    title: "Interpretation",
    description:
      "Interpretation is the oral conversion of spoken language in real time — simultaneous interpretation delivers this as the speaker speaks; consecutive interpretation follows after each segment. UVAN has 60,000+ hours of interpretation experience across Mandarin, Japanese, ASEAN languages and more, across boardroom negotiations, conferences, exhibitions, and government meetings.",
    icon: Globe2,
    doodle: "/doodles/Calling-amico.svg",
    doodleAlt: "Interpretation illustration",
  },
  {
    id: "localization",
    title: "Localization",
    description:
      "Localization is the adaptation of a product, website, or content for a specific target market — going beyond translation to adjust tone, cultural references, imagery, layout, and user experience. UVAN localizes websites, software, marketing materials, and product content across 125+ languages, with cultural adaptation built in from the start so the result feels native, not translated.",
    icon: ShieldCheck,
    doodle: "/doodles/Preferences-bro.svg",
    doodleAlt: "Localization illustration",
  },
  {
    id: "transcription",
    title: "Transcription",
    description:
      "Accurate multilingual transcription for meetings, interviews, recordings and media content. Timestamped and formatted to your requirements.",
    icon: Subtitles,
    doodle: "/doodles/Video tutorial-rafiki (1).svg",
    doodleAlt: "Transcription illustration",
  },
  {
    id: "voiceover",
    title: "Voiceover",
    description:
      "Multilingual voiceover and dubbing in 100+ languages for corporate videos, training content, explainers and media productions.",
    icon: Mic2,
    doodle: "/doodles/Cloud sync-amico.svg",
    doodleAlt: "Voiceover illustration",
  },
  {
    id: "proofreading",
    title: "Proofreading & QA",
    description:
      "Expert review and quality assurance for translated content. Native eyes on every final deliverable before it goes live.",
    icon: CheckCircle2,
    doodle: "/doodles/Bookmarks-pana.svg",
    doodleAlt: "Proofreading illustration",
  },
];

const industryFocus = [
  {
    title: "Automotive",
    description:
      "Technical manuals, supplier communications, negotiation interpretation and localization for automotive manufacturers and tier-1 suppliers across India-Japan and India-Korea corridors.",
  },
  {
    title: "Pharmaceuticals",
    description:
      "Regulatory documents, clinical trial materials, product literature and labelling localization with full compliance awareness.",
  },
  {
    title: "Aerospace",
    description:
      "Technical documentation, standards translation and specialist interpretation for aerospace sector engagements.",
  },
  {
    title: "Manufacturing",
    description:
      "End-to-end language support for manufacturers entering India or expanding abroad - from technical documentation and supplier liaison to on-site interpretation and operational setup.",
  },
  {
    title: "Technology",
    description:
      "Software localization, UI/UX translation, technical documentation and multilingual customer support content.",
  },
  {
    title: "Exhibitions & Trade Fairs",
    description:
      "On-site interpretation, booth materials localization and real-time communication support for international exhibitions across India.",
  },
  {
    title: "Agriculture & Food",
    description:
      "Export documentation, buyer communication and product localization for agricultural exporters entering Asian markets.",
  },
  {
    title: "Legal & Compliance",
    description:
      "Certified translation of contracts, agreements, court documents and regulatory filings. Validated and legally precise.",
  },
  {
    title: "Education",
    description:
      "Curriculum translation, IB and international board materials, institutional communication and multilingual e-learning content.",
  },
  {
    title: "Media & OTT",
    description:
      "Subtitling, dubbing, voiceover and content localization for film, television and streaming platforms.",
  },
];

const corridors = [
  {
    market: "Japan",
    detail:
      "Mandarin, Cantonese, Japanese - Automotive, Manufacturing, Technology. 10 years of boardroom interpretation experience in this corridor.",
  },
  {
    market: "China",
    detail:
      "Mandarin, Cantonese, Taiwanese - Trade, Agriculture, Manufacturing. Formally recognised by the Consulate General of the People's Republic of China.",
  },
  {
    market: "Southeast Asia",
    detail:
      "Bahasa Indonesia, Vietnamese, Thai, Tagalog, Malay - all sectors. India's fastest growing trade corridor.",
  },
  {
    market: "Korea",
    detail: "Korean - Manufacturing, Technology, Beauty & Wellness.",
  },
  {
    market: "Middle East & Africa",
    detail: "Arabic, Swahili, French - Trade, Infrastructure, Energy.",
  },
  {
    market: "Latin America",
    detail: "Spanish, Portuguese - Pharmaceuticals, Agriculture, Technology.",
  },
];

const globalTalkiesFeatures = [
  "Subtitling (SRT, VTT, TTML) and SDH",
  "Dubbing and voice direction with native talent",
  "Multilingual voiceover for media and corporate content",
  "Script translation and cultural adaptation",
  "Film distribution localization support",
  "OTT metadata and pipeline localization",
];

const languageLd = [
  speakableWebPage(absoluteUrl("/language-localization/"), [".language-speakable"]),
  faqPageSchema(absoluteUrl("/language-localization/"), LANGUAGE_LOCALIZATION_FAQS),
  serviceSchema({
    name: "Translation, interpretation & localization services",
    description:
      "ISO 9001:2015 certified multilingual translation, interpretation, localization, transcription, voiceover, and QA - 125+ languages with corridor-native intelligence.",
    canonicalPath: "/language-localization/",
    serviceType: "Language service provider",
  }),
  breadcrumbSchema(absoluteUrl("/language-localization/"), [
    { name: "Home", path: "/" },
    { name: "Language & Localization", path: "/language-localization/" },
  ]),
];

const LanguageLocalization = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0.35 : 0.72, delay, ease });

  return (
    <PageLayout
      title={t("seo.languageLocalization.title")}
      description={t("seo.languageLocalization.description")}
      canonicalPath="/language-localization/"
      keywords={t("seo.languageLocalization.keywords")}
      jsonLd={languageLd}
    >
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[hsl(var(--brand-navy-950))] px-5 pb-14 pt-8 text-white sm:px-6 lg:pb-24 lg:pt-12">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 mix-blend-color-dodge"
          style={{
            backgroundImage:
              "url('/bg-blobs/abstract-background-purple-dark-blue-gradient-wave-modern-background-combination-curve-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:70%_20%] opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('/bg-blobs/purple-luxury-wave-background-design-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 20%, hsl(var(--brand-purple-500)/0.28) 0%, transparent 34%), radial-gradient(circle at 15% 80%, hsl(var(--brand-cyan-500)/0.16) 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.15)] via-transparent to-[hsl(var(--brand-navy-950))]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <motion.div
              className="lg:col-span-7"
              initial={hidden}
              animate={show}
              transition={transition(0)}
            >
              <p className="mb-4 inline-flex max-w-full rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                125+ Languages. Every Sector. ISO 9001:2015 Certified.
              </p>
              <h1 className="font-serif text-[1.85rem] font-bold leading-[1.08] sm:text-4xl lg:text-5xl xl:text-7xl xl:leading-tight">
                Language That{" "}
                <span className="text-[hsl(var(--brand-gold-500))]">Goes Beyond Words.</span>
              </h1>
              <p className="language-speakable mt-4 max-w-2xl text-sm leading-relaxed text-white/78 sm:mt-6 sm:text-base lg:text-lg">
                {SPEAKABLE_LANGUAGE}
              </p>
              <div className="mt-6 sm:mt-8">
                <motion.a
                  href="mailto:info@ewan.co.in?subject=Language%20Services%20Quote"
                  whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_16px_40px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105 sm:w-auto sm:px-6"
                >
                  Get a Quote in 24 Hours
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </motion.a>
              </div>
            </motion.div>

            <motion.figure
              className="relative mx-auto hidden w-full max-w-[440px] lg:col-span-5 lg:block lg:max-w-none"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={transition(0.12)}
            >
              <motion.img
                src="/doodles/Group discussion-bro.svg"
                alt="Multilingual group discussion illustration"
                className="h-auto w-full object-contain"
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Six disciplines */}
      <section id="services" className="relative scroll-mt-24 overflow-hidden px-5 py-8 theme-section-light sm:px-6 lg:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-6 grid items-center gap-5 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)] lg:gap-8"
          >
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Six Services
              </span>
              <p className="mt-2 text-xs text-on-light-secondary md:hidden">Tap a service to expand details.</p>
            </div>
            <motion.img
              src="/doodles/Advantages-bro.svg"
              alt="Language disciplines illustration"
              className="mx-auto hidden h-40 w-full max-w-[240px] object-contain lg:block lg:max-w-none"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Mobile: tap to expand */}
          <Accordion type="single" collapsible className="flex flex-col gap-2 md:hidden">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AccordionItem
                  key={service.id}
                  id={service.id}
                  value={service.id}
                  className="scroll-mt-28 overflow-hidden rounded-xl border border-[hsl(var(--border-light))] border-b-0 bg-white px-3.5 shadow-sm data-[state=open]:border-[hsl(var(--brand-purple-500)/0.35)] data-[state=open]:ring-1 data-[state=open]:ring-[hsl(var(--brand-purple-500)/0.15)]"
                >
                  <AccordionTrigger className="gap-3 py-3.5 hover:no-underline [&[data-state=open]>svg]:text-[hsl(var(--brand-purple-700))]">
                    <span className="flex min-w-0 flex-1 items-center gap-3 text-left">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700)/0.75)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="block font-serif text-base font-bold leading-snug text-on-light">
                          {service.title}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3.5 text-xs leading-relaxed text-on-light-secondary">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Tablet/desktop: card grid */}
          <div className="hidden gap-3 md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  id={service.id}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition((index % 3) * 0.08)}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  className="group theme-card-light card-shine scroll-mt-28 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-4 sm:rounded-3xl sm:p-6 lg:p-7"
                >
                  <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700)/0.75)] sm:text-[11px] sm:tracking-[0.18em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm sm:h-11 sm:w-11">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                    </div>
                  </div>
                  <motion.img
                    src={service.doodle}
                    alt={service.doodleAlt}
                    className="mx-auto mb-3 hidden h-28 w-full max-w-[160px] object-contain md:block md:mb-4"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                  />
                  <h3 className="font-serif text-lg font-bold text-on-light sm:text-xl lg:text-2xl">{service.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-on-light-secondary sm:mt-3 sm:text-sm">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sector expertise */}
      <section id="sectors" className="relative scroll-mt-24 overflow-hidden bg-[hsl(var(--brand-navy-950))] px-5 py-10 text-white sm:px-6 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--brand-purple-500)/0.3),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay opacity-[0.06] lg:opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-6 max-w-3xl lg:mb-12"
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.24em]">
              Sector Expertise
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Language Services Across Every Major Industry
            </h2>
            <p className="mt-2 text-xs text-white/55 md:hidden">Tap a sector to read how we support it.</p>
          </motion.div>

          {/* Mobile: accordion */}
          <Accordion
            type="single"
            collapsible
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] md:hidden"
          >
            {industryFocus.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={item.title}
                className="border-white/10 px-4 last:border-b-0 data-[state=open]:bg-white/[0.06]"
              >
                <AccordionTrigger className="gap-3 py-3.5 text-white hover:no-underline [&[data-state=open]>svg]:text-[hsl(var(--brand-gold-500))]">
                  <span className="flex min-w-0 flex-1 items-center gap-3 text-left">
                    <span className="shrink-0 font-serif text-sm font-bold text-white/25">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-base font-bold leading-snug">{item.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-3.5 pl-9 text-xs leading-relaxed text-white/70">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Tablet/desktop: sector grid */}
          <div className="hidden gap-2.5 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {industryFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition((index % 3) * 0.06)}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm transition hover:border-[hsl(var(--brand-gold-500)/0.35)] hover:bg-white/10 sm:rounded-2xl sm:p-5 lg:p-6"
              >
                <span className="font-serif text-lg font-bold text-white/15 transition group-hover:text-[hsl(var(--brand-gold-500)/0.35)] sm:text-2xl lg:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 font-serif text-sm font-bold text-white transition group-hover:text-[hsl(var(--brand-gold-500))] sm:mt-2 sm:text-lg lg:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-white/68 sm:mt-2 sm:text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language corridors */}
      <section id="corridors" className="relative scroll-mt-24 overflow-hidden px-5 py-8 theme-section-light sm:px-6 lg:py-20">
        <div className="glow-orb glow-orb-gold pointer-events-none h-[220px] w-[220px] -left-20 bottom-0 opacity-[0.06] lg:h-[360px] lg:w-[360px] lg:-left-32 lg:opacity-[0.08]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-6 grid items-end gap-5 lg:mb-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:gap-8">
            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0)}
            >
              <span className="mb-3 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                Language Corridors
              </span>
              <h2 className="font-serif text-[1.65rem] font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
                The Ones We Know Best
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-on-light-secondary sm:mt-4 sm:text-base">
                Our deepest expertise sits at the intersection of Indian business and Asian markets - the corridors
                where language and culture are the difference between a deal that closes and one that doesn&apos;t.
              </p>
            </motion.div>
            <motion.figure
              className="hidden lg:block"
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.1)}
            >
              <motion.img
                src="/doodles/International trade-bro.svg"
                alt="Strategic trade corridors illustration"
                className="mx-auto h-40 w-full max-w-[260px] object-contain lg:max-w-none"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>
          </div>

          <div className="space-y-2">
            {corridors.map((corridor, index) => (
              <motion.div
                key={corridor.market}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(index * 0.06)}
                className="group flex items-center gap-3 rounded-xl border border-[hsl(var(--border-light))] bg-white/80 px-3.5 py-3 transition hover:border-[hsl(var(--brand-purple-700)/0.3)] hover:bg-white sm:gap-5 sm:rounded-2xl sm:px-6 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:py-6"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="flex min-w-0 items-center gap-3 sm:gap-5 lg:gap-8">
                    <span className="shrink-0 font-serif text-lg font-bold text-[hsl(var(--brand-purple-700)/0.35)] transition group-hover:text-[hsl(var(--brand-purple-700))] sm:text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-sm font-bold leading-snug text-on-light sm:text-lg lg:text-2xl">
                      India <span className="mx-1 text-[hsl(var(--brand-purple-700))] sm:mx-2">↔</span> {corridor.market}
                    </h3>
                  </div>
                  <p className="min-w-0 text-xs leading-relaxed text-on-light-secondary sm:max-w-xl sm:text-sm lg:text-right">
                    {corridor.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Talkies */}
      <section id="global-talkies" className="relative scroll-mt-24 overflow-hidden px-5 py-8 theme-section-soft sm:px-6 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply lg:opacity-[0.1]"
          style={{
            backgroundImage:
              "url('/bg-blobs/banner-background-colorful-bright-purple-gradient-geometric-effect-eps-10-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="theme-card-light card-shine overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-4 sm:rounded-3xl sm:p-6 lg:p-10"
          >
            <div className="grid items-start gap-5 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <span className="mb-3 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                  Global Talkies
                </span>
                <h2 className="font-serif text-[1.5rem] font-bold leading-tight text-on-light sm:text-3xl lg:text-4xl">
                  Great Content Deserves an Audience in{" "}
                  <span className="italic text-[hsl(var(--brand-purple-700))]">Every Language.</span>
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-on-light-secondary sm:mt-4 sm:text-sm lg:text-base">
                  Media and OTT localization support for content creators, distributors, and studios crossing language
                  borders without losing emotional and cultural fidelity.
                </p>
                <Link
                  to="/global-talkies"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[hsl(var(--brand-purple-700))] underline-offset-4 hover:underline sm:mt-6"
                >
                  Explore Global Talkies <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
              <motion.figure
                className="hidden sm:block"
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(0.1)}
              >
                <motion.img
                  src="/doodles/Video tutorial-rafiki (1).svg"
                  alt="Media and OTT localization illustration"
                  className="mx-auto h-36 w-full max-w-[240px] object-contain lg:h-52 lg:max-w-[280px]"
                  animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.figure>
            </div>
            <div className="mt-5 grid gap-2 border-t border-[hsl(var(--border-light))] pt-5 sm:mt-8 sm:grid-cols-2 sm:gap-3 sm:pt-8">
              {globalTalkiesFeatures.map((item) => (
                <p key={item} className="flex items-start gap-2 text-xs text-on-light-secondary sm:gap-2.5 sm:text-sm">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))] sm:h-4 sm:w-4" aria-hidden />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions
        items={LANGUAGE_LOCALIZATION_FAQS}
        className="theme-section-light px-5 py-10 sm:px-6 sm:py-16"
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-5 py-10 text-white sm:px-6 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-color-dodge"
          style={{
            backgroundImage:
              "url('/bg-blobs/purple-luxury-wave-background-design-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--brand-purple-500)/0.35),transparent_45%)]" />

        <div className="container relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur-sm sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))] sm:text-[11px] sm:tracking-[0.24em]">
              Next Step
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <motion.a
                href="mailto:info@ewan.co.in?subject=Language%20Services%20Quote"
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
              >
                Get a Quote in 24 Hours
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </motion.a>
              <Link
                to="/ask-soham"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18 sm:w-auto sm:px-6"
              >
                Ask Soham - 15 Min Free
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageLocalization;
