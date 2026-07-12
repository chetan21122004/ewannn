import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe2,
  PackageSearch,
  Sparkles,
  Sprout,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { absoluteUrl, serviceSchema } from "@/lib/schemaHelpers";

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
    icon: PackageSearch,
    doodle: "/doodles/House searching-cuate.svg",
    doodleAlt: "Local vendor sourcing illustration",
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
    icon: Globe2,
    doodle: "/doodles/International trade-bro.svg",
    doodleAlt: "Export support illustration",
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
    icon: ArrowDownToLine,
    doodle: "/doodles/Download-amico.svg",
    doodleAlt: "Import facilitation illustration",
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
    icon: Sprout,
    doodle: "/doodles/International trade-rafiki.svg",
    doodleAlt: "Agricultural export illustration",
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
    icon: FileText,
    doodle: "/doodles/Mail-amico.svg",
    doodleAlt: "Trade documentation illustration",
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
                  href="mailto:info@ewan.co.in?subject=Trade%20Requirements"
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
      <section className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-20 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-14">
            <motion.div
              className="order-2 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_18px_50px_rgba(26,22,51,0.08)] sm:rounded-[1.75rem] lg:order-1"
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.1)}
            >
              <img
                src={stitch.philosophy}
                alt="Cross-border trade liaison and cultural intelligence"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.article
              className="order-1 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 shadow-[0_14px_40px_rgba(26,22,51,0.06)] sm:rounded-[1.75rem] sm:p-8 lg:order-2 lg:p-10"
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0)}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Where UVAN Adds Value in Trade
              </span>
              <div className="mt-4 space-y-4 text-xs leading-relaxed text-on-light-secondary sm:mt-6 sm:space-y-5 sm:text-sm lg:text-base">
                <p>
                  Most cross-border trade breakdowns happen not in logistics but in communication - a misunderstood
                  specification, a cultural misread in a negotiation, a documentation error that delays clearance, a vendor
                  who presented well but delivered poorly. UVAN sits at every one of these points, providing the language
                  and cultural intelligence that keeps trade moving cleanly.
                </p>
                <p>
                  Our track record includes supporting agricultural export from India to China and Taiwan (the Seasonz
                  International grape export - recognised in our client testimonials), industrial procurement across the
                  India-Japan corridor, and supply chain establishment for foreign manufacturers entering India. We have
                  been in the room when these deals were made.
                </p>
              </div>
            </motion.article>
          </div>
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
              <p className="mt-2 text-xs text-on-light-secondary md:hidden">Tap a service to expand details.</p>
            </div>
            <motion.img
              src="/doodles/International trade-rafiki.svg"
              alt="Import and export services illustration"
              className="mx-auto hidden h-40 w-full max-w-[240px] object-contain lg:block lg:max-w-none"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

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
                    <p>{service.description}</p>
                    <ul className="mt-3 space-y-2 border-t border-[hsl(var(--border-light))] pt-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="hidden gap-5 md:grid md:grid-cols-2">
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
                  className="group theme-card-light card-shine scroll-mt-28 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-5 sm:rounded-3xl sm:p-7 lg:p-8"
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
                    className="mx-auto mb-4 h-24 w-full max-w-[150px] object-contain sm:h-28 sm:max-w-[170px]"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                  />

                  <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-gold-500))] opacity-80 transition group-hover:w-16" />
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{service.description}</p>
                  <div className="mt-5 space-y-2 border-t border-[hsl(var(--border-light))] pt-5">
                    {service.points.map((point) => (
                      <p key={point} className="flex items-start gap-2 text-sm text-on-light-secondary">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                        <span>{point}</span>
                      </p>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:text-xs sm:tracking-[0.2em]">
              Who This Is For
            </p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-on-light sm:text-3xl lg:text-4xl">Who This Is For</h2>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
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
          <h3 className="mt-3 font-serif text-[1.55rem] font-bold text-on-light sm:text-3xl lg:text-4xl">
            Discuss Your Import / Export Requirements
          </h3>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <motion.a
              href="mailto:info@ewan.co.in?subject=Import%20Export%20Requirements"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Discuss Your Requirements
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

export default ImportExport;
