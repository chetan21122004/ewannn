import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import ServiceHoverCard from "@/components/ServiceHoverCard";
import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";
import { MARKET_RESEARCH_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, serviceSchema } from "@/lib/schemaHelpers";

/** Stitch-aligned imagery (`public/stitch/market-research/`) */
const stitch = {
  heroBg: "/stitch/market-research/hero-bg.jpg",
  intelData: "/stitch/market-research/intel-data.jpg",
  benchmarking: "/stitch/market-research/benchmarking.jpg",
  worldMap: "/stitch/market-research/world-map.jpg",
} as const;

const services = [
  {
    id: "distributor-intelligence",
    title: "Distributor & Partner Intelligence",
    description:
      "Before committing to a distribution partner or vendor relationship, you need to know who they actually are - not just what their credentials say. UVAN conducts in-person distributor research that goes beyond document review: physical site visits, local reputation checks, operational capacity assessment, and stakeholder interviews. We separate genuine operational partners from paper entities.",
    points: [
      "Physical site verification of distributor premises",
      "Local reputation and reference checks",
      "Operational capacity and workforce assessment",
      "Credit and financial standing (where available)",
      "Existing client and supplier relationship mapping",
    ],
    image: stitch.intelData,
    imageAlt: "On-ground distributor and partner verification research",
  },
  {
    id: "competitor-analysis",
    title: "Competitor Analysis",
    description:
      "Understanding your competitive landscape in a new market requires more than reading annual reports. UVAN conducts on-ground competitor intelligence - visiting retail and trade channels, speaking to buyers and distributors, and assessing positioning, pricing, and distribution reach in the local language and context.",
    points: [
      "Competitor product and pricing analysis",
      "Distribution channel mapping",
      "Buyer and trade channel interviews",
      "Positioning and perception research",
    ],
    image: stitch.benchmarking,
    imageAlt: "Competitive benchmarking and market intelligence analysis",
  },
  {
    id: "consumer-buyer-research",
    title: "Consumer & Buyer Research",
    description:
      "Multilingual qualitative and quantitative research with target consumers, procurement managers, and business buyers. Conducted in the respondent's native language - with analysis that reflects cultural context, not just response data.",
    points: [
      "In-depth interviews (IDIs) in native language",
      "Focus groups - multilingual facilitation",
      "Quantitative surveys with native-language questionnaire design",
      "Buyer persona development for Indian and Asian markets",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Consumer and buyer research focus group session",
  },
  {
    id: "sector-assessment",
    title: "Sector & Industry Assessment",
    description:
      "Entry-level sector intelligence for companies evaluating a new market. We map the regulatory environment, key industry players, trade body landscape, and sector-specific risks - giving you a clear picture of what you're walking into before you commit.",
    points: [
      "Regulatory and compliance landscape overview",
      "Key player and stakeholder mapping",
      "Market sizing and growth assessment",
      "Entry opportunity and risk analysis",
    ],
    image: stitch.worldMap,
    imageAlt: "Global sector and industry market assessment",
  },
  {
    id: "government-programs",
    title: "Primary Market Research for Government Programs",
    description:
      "UVAN has designed and conducted primary market research for export promotion programs under MSAMB (Government of Maharashtra) - giving us direct experience with government-commissioned research methodology and reporting standards. This background gives UVAN credibility with institutional clients and government-linked research requirements.",
    points: [] as string[],
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a78e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Government and institutional market research program",
  },
];

const howWeDeliver = [
  { step: "01", title: "Research Brief & Methodology Design" },
  { step: "02", title: "Respondent Identification & Screening" },
  { step: "03", title: "On-Ground Fieldwork (native language)" },
  { step: "04", title: "Data Analysis & Cultural Interpretation" },
  { step: "05", title: "Report Delivery with Findings & Recommendations" },
];

const whoThisIsFor = [
  "Foreign companies evaluating India entry - need ground-truth intelligence before committing",
  "Indian companies assessing export markets in Japan, Southeast Asia, or China",
  "Manufacturers evaluating distributor or partner options before signing agreements",
  "Companies requiring multilingual primary research that desk-based agencies cannot deliver",
];

const marketResearchLd = [
  faqPageSchema(absoluteUrl("/market-research/"), MARKET_RESEARCH_FAQS),
  serviceSchema({
    name: "Primary market research",
    description:
      "Native-language distributor intelligence, competitor analysis, buyer and consumer studies, sector assessments, physical verification fieldwork - primary research grounded in corridor context.",
    canonicalPath: "/market-research/",
    serviceType: "Market research",
  }),
];

const MarketResearchPage = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay });

  return (
    <PageLayout
      title={t("seo.marketResearch.title")}
      description={t("seo.marketResearch.description")}
      keywords={t("seo.marketResearch.keywords")}
      canonicalPath="/market-research/"
      jsonLd={marketResearchLd}
    >
      {/* Hero */}
      <section className="relative overflow-hidden theme-section-soft px-5 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:pb-28 md:pt-14 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <motion.div
              className="lg:col-span-7"
              initial={hidden}
              animate={show}
              transition={transition(0)}
            >
              <p className="mb-4 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                On-Ground Intelligence. Native Language. Real Answers.
              </p>
              <h1 className="font-serif text-[1.85rem] font-bold leading-[1.08] text-on-light sm:text-4xl sm:leading-[1.05] lg:text-6xl xl:text-[3.35rem] xl:leading-[1.02]">
                Market Research That <span className="text-[hsl(var(--brand-purple-700))]">Goes Beyond the Report.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:mt-6 sm:text-base lg:text-lg">
                Most market research for India is desk-based, English-language, and built on secondary data. UVAN&apos;s market
                research is different - conducted on the ground, in the local language, by people who understand what
                they&apos;re actually hearing. The difference is not methodological. It is the difference between data and
                intelligence.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
                <motion.a
                  href="/contact"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
                  whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                >
                  Discuss Your Research Brief
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </motion.a>
                <motion.div whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} className="w-full sm:w-auto">
                  <Link
                    to="/ask-soham"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12 sm:w-auto sm:px-6"
                  >
                    Ask Soham - 15 Min Free
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[340px] sm:max-w-[440px] lg:col-span-5 lg:mx-0 lg:max-w-none"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={show}
              transition={transition(0.12)}
            >
              <div className="pointer-events-none absolute -right-6 top-1/4 hidden h-28 w-28 rounded-full border border-dashed border-[hsl(var(--brand-purple-500)/0.35)] sm:block" />
              <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-100))] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.12)] sm:rounded-[2rem]">
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.55)] via-transparent to-transparent" />
                <img
                  src={stitch.intelData}
                  alt="On-ground market research and field intelligence"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* The UVAN Difference */}
      <section className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-20 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-14">
            <motion.article
              className="order-1 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 shadow-[0_14px_40px_rgba(26,22,51,0.06)] sm:rounded-[1.75rem] sm:p-8 lg:order-2 lg:p-10"
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0)}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                The UVAN Difference in Market Research
              </span>
              <div className="mt-4 space-y-4 text-xs leading-relaxed text-on-light-secondary sm:mt-6 sm:space-y-5 sm:text-sm lg:text-base">
                <p>
                  When a foreign company wants to understand the Indian market - or when an Indian company wants to
                  understand Southeast Asia or East Asia - the biggest risk is not a lack of data. It is the wrong data.
                  Secondary reports, translated surveys, and English-language interviews with urban respondents give you a
                  picture of the market that looks clean but often misses the reality on the ground.
                </p>
                <p>
                  UVAN conducts primary market research using native-language researchers across India and Asia. We speak
                  to distributors, buyers, government officials, industry experts, and end consumers in their own language
                  - and we interpret what we hear with the cultural and sector intelligence to tell you what it actually
                  means.
                </p>
              </div>
            </motion.article>

            <motion.div
              className="order-2 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_18px_50px_rgba(26,22,51,0.08)] sm:rounded-[1.75rem] lg:order-1"
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.1)}
            >
              <img
                src={stitch.benchmarking}
                alt="On-ground benchmarking and market intelligence"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="hidden border-t border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 sm:block sm:p-5">
                <motion.img
                  src="/doodles/International trade-bro.svg"
                  alt="Cross-border market research illustration"
                  className="mx-auto h-28 w-full max-w-[220px] object-contain sm:h-32"
                  animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* Services */}
      <section
        id="services"
        className="theme-section-light relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-20 stitch-line stitch-line-bottom"
      >
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            className="mb-6 grid items-center gap-5 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)] lg:gap-8"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Our Market Research Services
              </span>
              <p className="mt-2 text-xs text-on-light-secondary sm:text-sm">
                Tap or hover a service card to explore scope and deliverables.
              </p>
            </div>
            <motion.img
              src="/doodles/Charts-cuate.svg"
              alt="Market research disciplines illustration"
              className="mx-auto hidden h-40 w-full max-w-[240px] object-contain lg:block lg:max-w-none"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <AutoHorizontalSlider
            ariaLabel="Market research services"
            slideClassName="basis-[88%] sm:basis-[62%] md:basis-[46%] lg:basis-[38%] xl:basis-[32%]"
            autoplayMs={5200}
            edgeFadeFromClass="from-[hsl(var(--surface-light-50))]"
            items={services.map((service, index) => (
              <ServiceHoverCard key={service.id} {...service} index={index} />
            ))}
          />
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* How We Deliver */}
      <section
        id="process"
        className="relative scroll-mt-24 overflow-hidden theme-section-soft px-5 py-8 sm:px-6 lg:py-20"
      >
        <div className="pointer-events-none absolute right-[-8%] top-1/2 max-h-[520px] w-[min(55%,620px)] -translate-y-1/2 opacity-[0.1] lg:opacity-20">
          <img src={stitch.worldMap} alt="" aria-hidden="true" className="h-full w-full object-contain object-center" loading="lazy" />
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            className="mb-6 lg:mb-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,260px)] lg:items-center lg:gap-8"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:text-xs sm:tracking-[0.2em]">
                Process
              </p>
              <h2 className="mt-2 font-serif text-[1.55rem] font-bold leading-tight text-on-light sm:text-3xl lg:text-4xl">How We Deliver</h2>
              <p className="mt-3 max-w-3xl text-xs leading-relaxed text-on-light-secondary sm:mt-4 sm:text-sm lg:text-[0.9375rem]">
                Every research engagement begins with a structured brief - aligning on objectives, geography, target
                respondents, timeline, and output format. We then assign native-language researchers with sector familiarity,
                conduct fieldwork on the ground, and deliver findings in a structured report with our own interpretation and
                recommendations - not just raw data.
              </p>
            </div>
            <motion.img
              src="/doodles/Schedule-amico.svg"
              alt="Research delivery process illustration"
              className="mx-auto mt-4 hidden h-32 w-full max-w-[220px] object-contain opacity-90 lg:mt-0 lg:block lg:max-w-none"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="relative md:hidden">
            <div
              className="pointer-events-none absolute bottom-4 left-4 top-4 w-px bg-gradient-to-b from-[hsl(var(--brand-gold-500)/0.55)] via-[hsl(var(--brand-gold-500)/0.25)] to-transparent"
              aria-hidden
            />
            <ol className="space-y-3">
              {howWeDeliver.map((item, index) => (
                <motion.li
                  key={item.step}
                  className="relative flex gap-3"
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] text-xs font-bold text-[hsl(var(--brand-navy-950))] ring-4 ring-[hsl(var(--surface-light-100))]">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1 rounded-xl border border-[hsl(var(--border-light))] bg-white px-3.5 py-3">
                    <h3 className="text-sm font-semibold leading-snug text-on-light">
                      Step {index + 1} - {item.title}
                    </h3>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {howWeDeliver.map((item, index) => (
              <motion.article
                key={item.step}
                className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-4 sm:p-5"
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(index * 0.08)}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-500))] sm:text-xs sm:tracking-[0.16em]">
                    Step {item.step}
                  </p>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] text-[11px] font-bold text-[hsl(var(--brand-navy-950))]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-sm font-semibold leading-snug text-on-light sm:text-base">{item.title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            className="theme-card-light card-shine overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-5 sm:rounded-[1.75rem] sm:p-8 lg:p-10"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <div className="mb-5 lg:mb-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(200px,240px)] lg:items-center lg:gap-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:text-xs sm:tracking-[0.2em]">
                  Who This Is For
                </p>
                <h2 className="mt-3 font-serif text-2xl font-bold text-on-light sm:text-3xl lg:text-4xl">Who This Is For</h2>
              </div>
              <motion.img
                src="/doodles/Business growth-cuate.svg"
                alt="Companies needing ground-truth market research"
                className="mx-auto mt-4 hidden h-32 w-full max-w-[220px] object-contain lg:mt-0 lg:block"
                animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {whoThisIsFor.map((item, index) => (
                <motion.p
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 text-xs leading-relaxed text-on-light-secondary sm:gap-4 sm:p-5 sm:text-sm"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.1 }}
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                  <span>{item}</span>
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={MARKET_RESEARCH_FAQS} className="theme-section-soft px-5 py-10 sm:px-6 sm:py-16" />

      <SectionDivider variant="slant" />

      {/* CTA */}
      <section className="theme-section-soft px-5 py-10 sm:px-6 sm:py-16 lg:py-20">
        <motion.div
          className="container mx-auto max-w-4xl rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 text-center shadow-[0_24px_60px_rgba(26,22,51,0.06)] sm:rounded-[2rem] sm:p-10 lg:p-12"
          initial={hidden}
          whileInView={show}
          viewport={{ once: true }}
          transition={transition(0)}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:text-xs sm:tracking-[0.2em]">
            Next Step
          </p>
          <h3 className="mt-3 font-serif text-[1.55rem] font-bold text-on-light sm:text-3xl lg:text-4xl">Send Your Research Brief</h3>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-on-light-secondary sm:mt-4 sm:text-sm lg:text-[0.9375rem]">
            Tell us your objectives, target market, and timeline. We'll define a methodology and get back to you within 24
            hours.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <motion.a
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Send Your Research Brief
              <ArrowRight className="h-4 w-4 shrink-0" />
            </motion.a>
            <motion.div whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                to="/ask-soham"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
              >
                Ask Soham - 15 Min Free
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default MarketResearchPage;
