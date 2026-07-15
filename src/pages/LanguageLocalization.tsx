import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle2,
  Cpu,
  Factory,
  Film,
  Globe2,
  GraduationCap,
  Languages,
  MessageCircle,
  Mic2,
  Pill,
  Plane,
  Scale,
  ShieldCheck,
  Sparkles,
  Subtitles,
  Wheat,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import LanguageServiceCard from "@/components/language-localization/LanguageServiceCard";
import LanguageSectorCard from "@/components/language-localization/LanguageSectorCard";
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
      "Translation is the conversion of written content from one language to another while preserving meaning, tone, and intent. UVAN provides certified translation for legal, technical, medical, and commercial documents across 125+ languages - by native-language experts with sector-specific knowledge.",
    icon: Languages,
    doodle: "/doodles/Mail-amico.svg",
    doodleAlt: "Document translation illustration",
  },
  {
    id: "interpretation",
    title: "Interpretation",
    description:
      "Interpretation is the oral conversion of spoken language in real time - simultaneous interpretation delivers this as the speaker speaks; consecutive interpretation follows after each segment. UVAN has 60,000+ hours of interpretation experience across Mandarin, Japanese, ASEAN languages and more, across boardroom negotiations, conferences, exhibitions, and government meetings.",
    icon: Globe2,
    doodle: "/doodles/Calling-amico.svg",
    doodleAlt: "Interpretation illustration",
  },
  {
    id: "localization",
    title: "Localization",
    description:
      "Localization is the adaptation of a product, website, or content for a specific target market - going beyond translation to adjust tone, cultural references, imagery, layout, and user experience. UVAN localizes websites, software, marketing materials, and product content across 125+ languages, with cultural adaptation built in from the start so the result feels native, not translated.",
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
    id: "automotive",
    title: "Automotive",
    description:
      "Technical manuals, supplier communications, negotiation interpretation and localization for automotive manufacturers and tier-1 suppliers across India-Japan and India-Korea corridors.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Automotive engineering and vehicle manufacturing",
  },
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    description:
      "Regulatory documents, clinical trial materials, product literature and labelling localization with full compliance awareness.",
    icon: Pill,
    image: "https://images.unsplash.com/photo-1584308666744-24f5ef4743af?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pharmaceutical research and medicine production",
  },
  {
    id: "aerospace",
    title: "Aerospace",
    description:
      "Technical documentation, standards translation and specialist interpretation for aerospace sector engagements.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Aircraft wing above the clouds",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "End-to-end language support for manufacturers entering India or expanding abroad - from technical documentation and supplier liaison to on-site interpretation and operational setup.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern manufacturing facility and industrial equipment",
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Software localization, UI/UX translation, technical documentation and multilingual customer support content.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Technology hardware and digital innovation",
  },
  {
    id: "exhibitions",
    title: "Exhibitions & Trade Fairs",
    description:
      "On-site interpretation, booth materials localization and real-time communication support for international exhibitions across India.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    imageAlt: "International exhibition hall and trade fair event",
  },
  {
    id: "agriculture",
    title: "Agriculture & Food",
    description:
      "Export documentation, buyer communication and product localization for agricultural exporters entering Asian markets.",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Agricultural fields and food production",
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    description:
      "Certified translation of contracts, agreements, court documents and regulatory filings. Validated and legally precise.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Legal documents and compliance review",
  },
  {
    id: "education",
    title: "Education",
    description:
      "Curriculum translation, IB and international board materials, institutional communication and multilingual e-learning content.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    imageAlt: "University campus and international education",
  },
  {
    id: "media",
    title: "Media & OTT",
    description:
      "Subtitling, dubbing, voiceover and content localization for film, television and streaming platforms.",
    icon: Film,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cinema seating and media production",
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
      <section className="relative isolate overflow-hidden theme-section-soft section-pad-hero sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <motion.div
              className="lg:col-span-7"
              initial={hidden}
              animate={show}
              transition={transition(0)}
            >
              <p className="mb-4 inline-flex max-w-full rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                125+ Languages. Every Sector. ISO 9001:2015 Certified.
              </p>
              <h1 className="font-serif text-[1.85rem] font-bold leading-[1.08] text-on-light sm:text-4xl lg:text-5xl xl:text-7xl xl:leading-tight">
                Language That{" "}
                <span className="text-[hsl(var(--brand-purple-700))]">Goes Beyond Words.</span>
              </h1>
              <p className="language-speakable mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:mt-6 sm:text-base lg:text-lg">
                {SPEAKABLE_LANGUAGE}
              </p>
              <div className="mt-6 sm:mt-8">
                <motion.a
                  href="/contact"
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
      <section id="services" className="relative scroll-mt-24 overflow-hidden section-pad theme-section-light sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-6 grid items-center gap-5 lg:mb-8 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)] lg:gap-8"
          >
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Six Services
              </span>
              <h2 className="font-serif text-2xl font-bold leading-tight text-on-light sm:text-3xl lg:text-4xl">
                Language disciplines, one integrated partner.
              </h2>
              <p className="mt-2 text-xs text-on-light-secondary md:hidden">Tap a service to expand details.</p>
              <p className="mt-2 hidden text-sm text-on-light-muted md:block">Hover or click a card to read the full service scope.</p>
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

          {/* Tablet/desktop: reveal cards */}
          <div className="hidden gap-4 md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {services.map((service, index) => (
              <LanguageServiceCard
                key={service.id}
                service={service}
                index={index}
                reduceMotion={!!reduceMotion}
                hidden={hidden}
                show={show}
                transition={transition}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sector expertise */}
      <section id="sectors" className="relative scroll-mt-24 overflow-hidden theme-section-soft px-5 py-10 sm:px-6 lg:py-24">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-6 grid items-end gap-5 lg:mb-8 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)] lg:gap-8"
          >
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.24em]">
                Sector Expertise
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
                Language Services Across Every Major Industry
              </h2>
              <p className="mt-2 text-xs text-on-light-secondary md:hidden">Tap a sector to read how we support it.</p>
              <p className="mt-2 hidden text-sm text-on-light-muted md:block">Hover or click a sector card to explore how UVAN supports that industry.</p>
            </div>
            <motion.img
              src="/doodles/International trade-bro.svg"
              alt="Industry sector expertise illustration"
              className="mx-auto hidden h-36 w-full max-w-[220px] object-contain lg:block lg:max-w-none"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Mobile: accordion with image headers */}
          <Accordion type="single" collapsible className="flex flex-col gap-2.5 md:hidden">
            {industryFocus.map((item, index) => {
              const Icon = item.icon;
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] border-b-0 bg-white shadow-sm data-[state=open]:border-[hsl(var(--brand-purple-500)/0.35)] data-[state=open]:ring-1 data-[state=open]:ring-[hsl(var(--brand-purple-500)/0.15)]"
                >
                  <AccordionTrigger className="relative min-h-[88px] gap-0 overflow-hidden p-0 hover:no-underline [&[data-state=open]>svg]:text-[hsl(var(--brand-gold-500))]">
                    <img src={item.image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-navy-950)/0.88)] via-[hsl(var(--brand-navy-950)/0.72)] to-[hsl(var(--brand-navy-950)/0.45)]" aria-hidden />
                    <span className="relative z-10 flex min-w-0 flex-1 items-center gap-3 px-4 py-4 text-left text-white">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-500))]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="block font-serif text-base font-bold leading-snug">{item.title}</span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-xs leading-relaxed text-on-light-secondary">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Tablet/desktop: compact sector grid */}
          <div className="hidden gap-2.5 md:grid md:grid-cols-3 md:gap-3 lg:grid-cols-5">
            {industryFocus.map((sector, index) => (
              <LanguageSectorCard
                key={sector.id}
                sector={sector}
                index={index}
                hidden={hidden}
                show={show}
                transition={transition}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Language corridors */}
      <section id="corridors" className="relative scroll-mt-24 overflow-hidden section-pad theme-section-light sm:px-6">
        <div className="glow-orb glow-orb-gold pointer-events-none h-[220px] w-[220px] -left-20 bottom-0 opacity-[0.06] lg:h-[360px] lg:w-[360px] lg:-left-32 lg:opacity-[0.08]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-6 grid items-end gap-5 lg:mb-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:gap-8">
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

      <AeoFrequentlyAskedQuestions
        items={LANGUAGE_LOCALIZATION_FAQS}
        className="theme-section-light px-5 section-pad sm:px-6"
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden theme-section-soft px-5 section-pad-cta sm:px-6">
        <div className="glow-orb glow-orb-gold pointer-events-none -right-12 -bottom-12 h-[180px] w-[180px] opacity-[0.06] lg:-right-6 lg:-bottom-16 lg:h-[240px] lg:w-[240px] lg:opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.14]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.07)] sm:rounded-[1.75rem] lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,380px)] lg:items-stretch"
          >
            <div className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(var(--brand-navy-950))_0%,hsl(var(--brand-purple-800))_52%,hsl(var(--brand-purple-700))_100%)] cta-panel-navy text-white">
              <div className="pointer-events-none absolute inset-0 opacity-[0.14] theme-grid-overlay-light" aria-hidden />
              <motion.img
                src="/doodles/Group discussion-bro.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-8 hidden h-40 w-40 opacity-[0.12] sm:block lg:h-48 lg:w-48"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))] backdrop-blur-sm sm:text-[11px] sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3" aria-hidden />
                Next Step
              </span>

              <h2 className="relative mt-3 max-w-xl font-serif text-[1.65rem] font-bold leading-tight sm:text-2xl lg:text-3xl">
                Ready to scope your language project?
              </h2>
              <p className="relative mt-2 max-w-xl text-sm leading-relaxed text-white/78 sm:text-[0.9375rem]">
                Share your files, languages, and timeline - UVAN returns a grounded quote within 24 hours, or book a
                free 15-minute call with Soham to align scope first.
              </p>

              <ul className="relative mt-4 flex flex-wrap gap-2">
                {[
                  { icon: ShieldCheck, label: "ISO 9001:2015 certified" },
                  { icon: Languages, label: "125+ languages" },
                  { icon: Globe2, label: "Corridor-native experts" },
                ].map(({ icon: ItemIcon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[10px] font-semibold text-white/88 backdrop-blur-sm sm:text-[11px]"
                  >
                    <ItemIcon className="h-3 w-3 shrink-0 text-[hsl(var(--brand-gold-500))]" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-panel-actions">
              <motion.a
                href="/contact"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-[hsl(var(--brand-gold-500))] px-5 py-3.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_12px_32px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105"
              >
                <Languages className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                Get a Quote in 24 Hours
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </motion.a>

              <Link
                to="/ask-soham"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-[hsl(var(--brand-purple-500)/0.22)] bg-white px-5 py-3.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:bg-[hsl(var(--brand-purple-700)/0.04)]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                Ask Soham - 15 Min Free
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>

              <p className="text-center text-[11px] leading-relaxed text-on-light-muted">
                No obligation. Typical response within one business day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageLocalization;
