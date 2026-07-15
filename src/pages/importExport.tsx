import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ServiceHoverCard from "@/components/ServiceHoverCard";
import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";
import { serviceSchema } from "@/lib/schemaHelpers";

/** Stitch-aligned imagery (hosted under `public/stitch/import-export/`) */
const stitch = {
  heroCircle: "/stitch/import-export/hero-circle.jpg",
  heroOverlay: "/stitch/import-export/hero-overlay.jpg",
  philosophy: "/stitch/import-export/philosophy.jpg",
  corridorsMap: "/stitch/import-export/corridors-map.jpg",
} as const;

const services = [
  {
    id: "vendor-sourcing",
    title: "Local Vendor Sourcing & Procurement",
    description:
      "Identifying and verifying the right vendors, suppliers, and manufacturers in India for foreign companies requires more than a supplier directory. UVAN conducts on-ground vendor sourcing - with physical verification, quality pre-assessment, and direct negotiation support in the local language - ensuring you commit to suppliers who can actually deliver.",
    points: [
      "Vendor identification and long-listing",
      "Physical premises and capacity verification",
      "Supplier negotiation support - native language",
      "Sampling and quality pre-assessment coordination",
      "Supplier agreement facilitation",
    ],
    image: stitch.philosophy,
    imageAlt: "Local vendor sourcing and procurement in India",
  },
  {
    id: "export-support",
    title: "Export Support for Indian Companies",
    description:
      "For Indian companies exporting to Japan, China, Southeast Asia, Latin America or Africa, UVAN provides the language and liaison support that turns export ambition into export execution. From preparing buyer-ready communication materials and product documentation in the target language, to facilitating introductions with overseas buyers and managing post-sale communication - we keep your export relationships moving forward.",
    points: [
      "Product documentation in target language (Japanese, Mandarin, Korean, ASEAN, Spanish, Portuguese, etc.)",
      "Buyer communication and negotiation facilitation",
      "Export documentation review and translation",
      "Overseas buyer introduction and relationship management",
      "APEDA and government export program liaison",
    ],
    image: stitch.corridorsMap,
    imageAlt: "Export support across international trade corridors",
  },
  {
    id: "import-facilitation",
    title: "Import Facilitation for Foreign Companies",
    description:
      "Companies importing goods or components into India face a combination of regulatory requirements, customs procedures, and supplier communication challenges that are significantly easier to navigate with a partner already embedded in the market. UVAN provides coordinated import facilitation - working with your logistics provider, managing local supplier communication, and ensuring nothing is lost between your purchase order and your warehouse.",
    points: [
      "Import documentation translation and review",
      "Customs and regulatory requirement guidance",
      "Local supplier and logistics coordination",
      "Quality inspection and delivery follow-up",
    ],
    image: stitch.heroOverlay,
    imageAlt: "Import facilitation and logistics coordination",
  },
  {
    id: "agricultural-export",
    title: "Agricultural & Food Export",
    description:
      "India's agricultural export sector - particularly into China, Japan, and Southeast Asian markets - involves a specific combination of APEDA compliance, phytosanitary certification, buyer communication, and cultural relationship management that UVAN is uniquely positioned to support. Our work in this sector is backed by formal recognition from the Consulate General of the People's Republic of China for our contribution to India-China agricultural trade.",
    points: [
      "Buyer communication in Mandarin, Japanese, Korean, Vietnamese",
      "APEDA compliance and documentation support",
      "Phytosanitary and food safety documentation review",
      "Importer and distributor introduction",
      "Trade fair and buyer-seller meeting facilitation",
    ],
    image: "https://images.unsplash.com/photo-1625246333193-b7836c833f94?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Agricultural and food export from India",
  },
  {
    id: "trade-documentation",
    title: "Trade Documentation & Compliance",
    description:
      "Every cross-border transaction generates paperwork - and every piece of that paperwork needs to be accurate, compliant, and understood by both sides. UVAN provides multilingual review and translation of trade documentation - contracts, letters of credit, inspection reports, certificates of origin, and customs filings - ensuring nothing is misread on either side of the border.",
    points: [
      "Contract and trade agreement translation",
      "Certificate of origin and compliance documentation",
      "Letters of credit and banking document support",
      "Customs and regulatory filing review",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Trade documentation and compliance review",
  },
];

const corridors = [
  { from: "India", to: "Japan", focus: "Manufacturing, automotive components, food and agriculture" },
  { from: "India", to: "China", focus: "Agriculture, pharmaceuticals, industrial goods" },
  { from: "India", to: "Southeast Asia", focus: "FMCG, agricultural products, manufacturing inputs" },
  { from: "India", to: "Korea", focus: "Manufacturing, beauty and wellness, electronics" },
  { from: "India", to: "Latin America", focus: "Pharmaceuticals, agriculture, chemicals" },
];

const whoThisIsFor = [
  "Foreign manufacturers sourcing components or raw materials from India",
  "Indian agricultural exporters entering Asian markets",
  "Indian SMEs expanding exports to Japan, China, or ASEAN",
  "Foreign companies needing local procurement managed by a single partner",
];

const tradeFrictionPoints = [
  {
    icon: MessageCircle,
    title: "Communication gaps",
    copy: "Misread specifications and cultural nuance lost in negotiation.",
  },
  {
    icon: FileText,
    title: "Documentation errors",
    copy: "Paperwork mistakes that delay clearance and erode trust.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor risk",
    copy: "Suppliers who present well but fail on delivery or quality.",
  },
] as const;

const importExportLd = [
  serviceSchema({
    name: "Import, procurement and export support",
    description:
      "Multilingual import, procurement and export support for companies operating between India, Japan, Southeast Asia and beyond - vendor identification, negotiation, documentation, and logistics liaison.",
    canonicalPath: "/import-export/",
    serviceType: "Import and export services",
  }),
];

const ImportExport = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay });

  return (
    <PageLayout
      title={t("seo.importExport.title")}
      description={t("seo.importExport.description")}
      keywords={t("seo.importExport.keywords")}
      canonicalPath="/import-export/"
      jsonLd={importExportLd}
    >
      {/* Hero */}
      <section className="relative overflow-hidden theme-section-soft px-5 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:pb-28 md:pt-14 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <motion.img
          src="/doodles/International trade-bro.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-4 hidden h-64 w-64 opacity-[0.12] lg:block"
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <motion.div
              className="lg:col-span-7"
              initial={hidden}
              animate={show}
              transition={transition(0)}
            >
              <p className="mb-4 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                India to Asia. Asia to India. End-to-End.
              </p>
              <h1 className="font-serif text-[1.85rem] font-bold leading-[1.08] text-on-light sm:text-4xl sm:leading-[1.05] lg:text-6xl xl:text-[3.35rem] xl:leading-[1.02]">
                Cross-Border Trade Is Complex.{" "}
                <span className="text-[hsl(var(--brand-purple-700))]">The Language Around It Even More So.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:mt-6 sm:text-base lg:text-lg">
                Whether you are sourcing products from India for Asian markets, or importing goods and components into India
                from abroad, UVAN provides the language, liaison, and operational support that makes cross-border trade flow
                - from vendor identification and negotiation to documentation, customs coordination and delivery.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
                <motion.a
                  href="/contact"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
                  whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                >
                  Discuss Your Trade Requirements
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </motion.a>
                <motion.div whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} className="w-full sm:w-auto">
                  <Link
                    to="/ask-soham"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                  >
                    Ask Soham - 15 Min Free
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:col-span-5 lg:mx-0 lg:max-w-none"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={show}
              transition={transition(0.12)}
            >
              <div className="pointer-events-none absolute -left-6 top-1/4 hidden h-32 w-32 rounded-full border border-dashed border-[hsl(var(--brand-gold-500)/0.25)] opacity-60 sm:block" />
              <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-100))] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.1)] sm:rounded-[2rem]">
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.55)] via-transparent to-transparent" />
                <img
                  src={stitch.heroCircle}
                  alt="Cross-border import and export trade"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                  loading="eager"
                  decoding="async"
                />
                <img
                  src={stitch.heroOverlay}
                  alt=""
                  className="pointer-events-none absolute inset-0 z-[2] h-full w-full object-cover opacity-35 mix-blend-soft-light"
                  aria-hidden
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      {/* Where UVAN Adds Value */}
      <section className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 py-14 sm:px-6 lg:py-20 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -left-20 top-1/3 h-[240px] w-[240px] opacity-[0.06] lg:h-[320px] lg:w-[320px] lg:opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.07)] sm:rounded-[1.75rem] lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch"
          >
            <div className="relative min-h-[240px] overflow-hidden sm:min-h-[280px] lg:min-h-full">
              <img
                src={stitch.philosophy}
                alt="Cross-border trade liaison and cultural intelligence"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.92)] via-[hsl(var(--brand-navy-950)/0.45)] to-[hsl(var(--brand-navy-950)/0.15)]" aria-hidden />

              <div className="relative flex h-full flex-col justify-between p-5 text-white sm:p-7 lg:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))] backdrop-blur-sm">
                  <Globe2 className="h-3 w-3" aria-hidden />
                  Trade intelligence
                </span>

                <div>
                  <p className="max-w-sm font-serif text-xl font-bold leading-snug sm:text-2xl">
                    Where communication makes or breaks cross-border trade.
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/78">
                    UVAN sits at the friction points — language, culture, documentation, and vendor verification — so
                    deals keep moving.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[hsl(var(--border-light))] p-5 sm:p-7 lg:border-t-0 lg:border-l lg:p-8 xl:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:text-[11px] sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Where UVAN Adds Value in Trade
              </span>

              <p className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-[0.9375rem]">
                Most cross-border trade breakdowns happen not in logistics but in communication — a misunderstood
                specification, a cultural misread in a negotiation, a documentation error that delays clearance, or a
                vendor who presented well but delivered poorly.
              </p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
                {tradeFrictionPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <motion.li
                      key={point.title}
                      initial={hidden}
                      whileInView={show}
                      viewport={{ once: true }}
                      transition={transition(0.06 + index * 0.05)}
                      className="rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-3.5 sm:rounded-2xl sm:p-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--brand-purple-700)/0.08)] text-[hsl(var(--brand-purple-700))]">
                        <Icon className="h-4 w-4" aria-hidden />
                      </div>
                      <h3 className="mt-2.5 font-serif text-sm font-bold text-[hsl(var(--brand-navy-950))]">{point.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-on-light-secondary">{point.copy}</p>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-5 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 sm:mt-6 sm:rounded-2xl sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]">
                  Track record
                </p>
                <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">
                  Agricultural export from India to China and Taiwan (Seasonz International grape export), industrial
                  procurement across the India–Japan corridor, and supply chain establishment for foreign manufacturers
                  entering India. We have been in the room when these deals were made.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* Services */}
      <section
        id="services"
        className="theme-section-light relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-20"
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
                Our Import, Procurement & Export Services
              </span>
              <p className="mt-2 text-xs text-on-light-secondary sm:text-sm">
                Tap or hover a service card to explore scope and deliverables.
              </p>
            </div>
            <motion.img
              src="/doodles/International trade-rafiki.svg"
              alt="Import and export services illustration"
              className="mx-auto hidden h-40 w-full max-w-[240px] object-contain lg:block lg:max-w-none"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <AutoHorizontalSlider
            ariaLabel="Import, procurement and export services"
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

      {/* Corridors We Know Best */}
      <section id="corridors" className="relative scroll-mt-24 overflow-hidden bg-[hsl(var(--surface-light-50))] px-5 py-8 sm:px-6 lg:py-20">
        <div className="pointer-events-none absolute right-0 top-1/2 max-w-[min(48%,520px)] -translate-y-1/2 opacity-[0.08] lg:opacity-20">
          <img src={stitch.corridorsMap} alt="" aria-hidden className="h-auto w-full object-contain" loading="lazy" />
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            className="mb-6 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))] sm:text-xs sm:tracking-[0.28em]">
                Corridors
              </span>
              <h2 className="mt-2 font-serif text-[1.65rem] font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-3xl lg:text-4xl">
                Corridors We Know Best
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-on-light-secondary sm:text-sm lg:text-base">
              Our deepest trade expertise sits in the corridors that mirror our broader market entry and language work.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3 lg:gap-0 lg:divide-y lg:divide-[hsl(var(--border-light))] lg:rounded-2xl lg:border lg:border-[hsl(var(--border-light))] lg:bg-white/90 lg:shadow-[0_14px_40px_rgba(26,22,51,0.06)] lg:backdrop-blur-sm">
            {corridors.map((corridor, index) => (
              <motion.article
                key={`${corridor.from}-${corridor.to}`}
                className="rounded-xl border border-[hsl(var(--border-light))] bg-white p-4 shadow-sm lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:transition-colors lg:hover:bg-[hsl(var(--surface-light-100))]"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:gap-4 lg:px-6 lg:py-8 xl:px-8 xl:py-10">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-serif text-2xl font-light text-[hsl(var(--brand-purple-500)/0.45)] sm:text-3xl lg:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-2xl lg:text-3xl">
                      {corridor.from}{" "}
                      <span className="mx-1 text-[hsl(var(--brand-purple-500))] sm:mx-2">↔</span> {corridor.to}
                    </h3>
                  </div>
                  <div className="sm:max-w-sm sm:text-right lg:pl-4">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-on-light-muted">Focus Sectors</p>
                    <p className="mt-1 text-xs font-medium leading-relaxed text-on-light-secondary sm:text-sm lg:text-base">
                      {corridor.focus}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 py-6 sm:px-6 lg:py-10">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            className="theme-card-light card-shine overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-4 sm:rounded-[1.5rem] sm:p-5 lg:p-6"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <div className="flex flex-col gap-3 border-b border-[hsl(var(--border-light))] pb-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pb-4">
              <h2 className="font-serif text-xl font-bold leading-tight text-on-light sm:text-2xl lg:text-[1.75rem]">
                Who This Is For
              </h2>
              <p className="max-w-md text-xs leading-relaxed text-on-light-secondary sm:text-right sm:text-sm">
                Importers, exporters, and procurement teams moving goods across India and Asia.
              </p>
            </div>

            <ul className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
              {whoThisIsFor.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-3 sm:gap-3 sm:p-3.5"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 + 0.08 }}
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-navy-950))] font-mono text-[10px] font-bold text-[hsl(var(--brand-gold-500))]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs leading-snug text-on-light-secondary sm:text-sm sm:leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* CTA */}
      <section className="theme-section-soft px-5 py-8 sm:px-6 lg:py-12">
        <motion.div
          className="container mx-auto max-w-4xl rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 shadow-[0_20px_50px_rgba(26,22,51,0.06)] sm:rounded-[1.75rem] sm:p-7 lg:p-8"
          initial={hidden}
          whileInView={show}
          viewport={{ once: true }}
          transition={transition(0)}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="text-center lg:max-w-xl lg:text-left">
              <h3 className="font-serif text-2xl font-bold leading-tight text-on-light sm:text-3xl">
                Discuss Your Import / Export Requirements
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">
                Share your corridor, product, and timeline - we&apos;ll advise on the right next step.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:shrink-0">
              <motion.div whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/ask-soham"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-2.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto"
                >
                  Ask Soham - 15 Min Free
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </motion.div>
              <motion.a
                href="/contact"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-2.5 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto"
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              >
                Email UVAN
                <ArrowRight className="h-4 w-4 shrink-0" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default ImportExport;
