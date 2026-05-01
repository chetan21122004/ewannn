import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";

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
      "Identifying and verifying the right vendors, suppliers, and manufacturers in India for foreign companies requires more than a supplier directory. Ewan conducts on-ground vendor sourcing - with physical verification, quality pre-assessment, and direct negotiation support in the local language.",
    points: [
      "Vendor identification and long-listing",
      "Physical premises and capacity verification",
      "Supplier negotiation support - native language",
      "Sampling and quality pre-assessment coordination",
      "Supplier agreement facilitation",
    ],
  },
  {
    id: "export-support",
    title: "Export Support for Indian Companies",
    description:
      "For Indian companies exporting to Japan, China, Southeast Asia, Latin America or Africa, Ewan provides the language and liaison support that turns export ambition into export execution - from buyer-ready communication materials to facilitating introductions with overseas buyers.",
    points: [
      "Product documentation in target language (Japanese, Mandarin, Korean, ASEAN, Spanish, Portuguese)",
      "Buyer communication and negotiation facilitation",
      "Export documentation review and translation",
      "Overseas buyer introduction and relationship management",
      "APEDA and government export program liaison",
    ],
  },
  {
    id: "import-facilitation",
    title: "Import Facilitation for Foreign Companies",
    description:
      "Companies importing goods or components into India face regulatory requirements, customs procedures, and supplier communication challenges that are significantly easier to navigate with a partner already embedded in the market. Ewan provides coordinated import facilitation - working with your logistics provider and managing local supplier communication.",
    points: [
      "Import documentation translation and review",
      "Customs and regulatory requirement guidance",
      "Local supplier and logistics coordination",
      "Quality inspection and delivery follow-up",
    ],
  },
  {
    id: "agricultural-export",
    title: "Agricultural & Food Export",
    description:
      "India's agricultural export sector - particularly into China, Japan, and Southeast Asian markets - involves a specific combination of APEDA compliance, phytosanitary certification, buyer communication, and cultural relationship management. Our work in this sector is backed by formal recognition from the Consulate General of the People's Republic of China.",
    points: [
      "Buyer communication in Mandarin, Japanese, Korean, Vietnamese",
      "APEDA compliance and documentation support",
      "Phytosanitary and food safety documentation review",
      "Importer and distributor introduction",
      "Trade fair and buyer-seller meeting facilitation",
    ],
  },
  {
    id: "trade-documentation",
    title: "Trade Documentation & Compliance",
    description:
      "Every cross-border transaction generates paperwork - and every piece needs to be accurate, compliant, and understood by both sides. Ewan provides multilingual review and translation of trade documentation - contracts, letters of credit, inspection reports, certificates of origin, and customs filings.",
    points: [
      "Contract and trade agreement translation",
      "Certificate of origin and compliance documentation",
      "Letters of credit and banking document support",
      "Customs and regulatory filing review",
    ],
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

const ImportExport = () => {
  return (
    <PageLayout
      title="Import, Procurement & Export Support India | Ewan Business Solutions"
      description="Ewan provides multilingual import, procurement and export support for companies operating between India, Japan, Southeast Asia and beyond - from vendor identification and negotiation to documentation and logistics liaison."
      canonicalPath="/import-export/"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-20 pt-10 text-white md:pb-28 md:pt-14 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_-10%,hsl(var(--brand-purple-700)/0.35),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_70%,hsl(var(--brand-cyan-500)/0.12),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.2)] via-transparent to-[hsl(var(--brand-navy-950))]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                India to Asia. Asia to India. End-to-End.
              </p>
              <h1 className="font-serif text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[3.35rem] xl:leading-[1.02]">
                Cross-Border Trade Is Complex.{" "}
                <span className="text-[hsl(var(--brand-gold-500))]">The Language Around It Even More So.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
                Whether you are sourcing products from India for Asian markets, or importing goods and components into India
                from abroad, Ewan provides the language, liaison, and operational support that makes cross-border trade flow
                - from vendor identification and negotiation to documentation, customs coordination and delivery.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="mailto:info@ewan.co.in?subject=Trade%20Requirements"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Discuss Your Trade Requirements
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/ask-soham"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12"
                >
                  Ask Soham - 15 Min Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute -left-6 top-1/4 h-32 w-32 rounded-full border border-dashed border-[hsl(var(--brand-gold-500)/0.25)] opacity-60" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[hsl(var(--brand-navy-900))] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                <div className="absolute inset-0 z-[1] bg-gradient-to-tr from-[hsl(var(--brand-navy-950)/0.75)] via-transparent to-[hsl(var(--brand-purple-700)/0.2)]" />
                <img
                  src={stitch.heroCircle}
                  alt=""
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
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      {/* Where Ewan Adds Value */}
      <section className="theme-section-soft relative overflow-hidden px-6 py-16 md:py-20 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,hsl(var(--brand-purple-500)/0.12),transparent_70%)]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_18px_50px_rgba(26,22,51,0.08)] lg:order-1">
              <img
                src={stitch.philosophy}
                alt=""
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <article className="order-1 rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_14px_40px_rgba(26,22,51,0.06)] md:p-10 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">
                Where Ewan Adds Value in Trade
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">
                Most Trade Breakdowns Happen in Communication, Not Logistics.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-on-light-secondary md:text-base">
                <p>
                  A misunderstood specification, a cultural misread in a negotiation, a documentation error that delays
                  clearance, a vendor who presented well but delivered poorly. Ewan sits at every one of these points,
                  providing the language and cultural intelligence that keeps trade moving cleanly.
                </p>
                <p>
                  Our track record includes supporting agricultural export from India to China and Taiwan (the Seasonz
                  International grape export - recognised in our client testimonials), industrial procurement across the
                  India-Japan corridor, and supply chain establishment for foreign manufacturers entering India.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="theme-section-light px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
              Our Import, Procurement & Export Services
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">Five Trade Capabilities</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group scroll-mt-28 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-7 shadow-[0_12px_36px_rgba(26,22,51,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(26,22,51,0.09)] md:p-8"
              >
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-gold-500))] opacity-80 transition group-hover:w-16" />
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem]">{service.description}</p>
                <div className="mt-5 space-y-2 border-t border-[hsl(var(--border-light))] pt-5">
                  {service.points.map((point) => (
                    <p key={point} className="flex items-start gap-2 text-sm text-on-light-secondary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Corridors We Know Best */}
      <section className="relative overflow-hidden bg-[hsl(var(--surface-light-50))] px-6 py-12">
        <div className="pointer-events-none absolute right-0 top-1/2 max-w-[min(48%,520px)] -translate-y-1/2 opacity-[0.14] lg:opacity-25">
          <img src={stitch.corridorsMap} alt="" className="h-auto w-full object-contain" loading="lazy" />
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row mb-4 md:items-end">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand-purple-700))]">Corridors</span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[hsl(var(--brand-navy-950))] md:text-4xl lg:text-5xl">
                Corridors We Know Best
              </h2>
            </div>
            <p className="max-w-md text-sm font-light leading-relaxed text-on-light-secondary md:text-base">
              Our deepest trade expertise sits in the corridors that mirror our broader market entry and language work.
            </p>
          </div>
          <div className="flex flex-col divide-y divide-[hsl(var(--border-light))] rounded-2xl border border-[hsl(var(--border-light))] bg-white/90 shadow-[0_14px_40px_rgba(26,22,51,0.06)] backdrop-blur-sm">
            {corridors.map((corridor, index) => (
              <div
                key={`${corridor.from}-${corridor.to}`}
                className="group flex cursor-pointer flex-col gap-4 px-5 py-8 transition-colors duration-300 hover:bg-[hsl(var(--surface-light-100))] sm:flex-row sm:items-center sm:justify-between sm:px-8 md:py-10"
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="font-serif text-3xl font-light text-[hsl(var(--brand-purple-500)/0.35)] transition-colors group-hover:text-[hsl(var(--brand-purple-500))] md:text-4xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] md:text-3xl">
                    {corridor.from} <span className="mx-2 text-[hsl(var(--brand-purple-500))] md:mx-3">↔</span> {corridor.to}
                  </h3>
                </div>
                <div className="sm:max-w-sm sm:text-right">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-on-light-muted">Focus Sectors</p>
                  <p className="mt-1 text-sm font-medium text-on-light-secondary md:text-base">{corridor.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="theme-section-soft px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_14px_40px_rgba(26,22,51,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Who This Is For</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-[2rem]">
              Companies Moving Goods Across Borders
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whoThisIsFor.map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 text-sm text-on-light-secondary"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[hsl(var(--brand-navy-950))] px-6 py-12 text-white">
        <div className="container mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Next Step</p>
          <h3 className="mt-3 font-serif text-3xl font-bold md:text-4xl">Discuss Your Import / Export Requirements</h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@ewan.co.in?subject=Import%20Export%20Requirements"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ask Soham - 15 Min Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ImportExport;
