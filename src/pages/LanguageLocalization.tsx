import { ArrowRight, CheckCircle2, Globe2, Languages, Mic2, ShieldCheck, Subtitles } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: "translation",
    title: "Translation",
    description:
      "Legal, technical, medical, and commercial documents handled by native experts for accurate, validated outcomes.",
    icon: Languages,
  },
  {
    id: "interpretation",
    title: "Interpretation",
    description:
      "Simultaneous and consecutive interpretation for boardrooms, conferences, exhibitions, and government meetings, backed by 60,000+ hours.",
    icon: Globe2,
  },
  {
    id: "localization",
    title: "Localization",
    description:
      "Website, software, and marketing localization that feels native, with cultural adaptation built into delivery.",
    icon: ShieldCheck,
  },
  {
    id: "transcription",
    title: "Transcription",
    description:
      "Accurate multilingual transcription for meetings, interviews, and recordings, including timestamped formatting.",
    icon: Subtitles,
  },
  {
    id: "voiceover",
    title: "Voiceover",
    description:
      "100+ language voiceover and dubbing for corporate videos, training modules, and media production.",
    icon: Mic2,
  },
  {
    id: "proofreading",
    title: "Proofreading & QA",
    description:
      "Final linguistic quality checks with native-language review before content goes live.",
    icon: CheckCircle2,
  },
];

const industryFocus = [
  { title: "Automotive", description: "Simultaneous interpretation and technical documentation for global OEMs and suppliers." },
  { title: "Pharmaceuticals", description: "Regulatory document translation and product literature localization for life sciences." },
  { title: "Aerospace", description: "Specialist technical translation and high-stakes negotiation support for aerospace leaders." },
  { title: "Manufacturing", description: "Operational setup and multilingual language support for cross-border production hubs." },
  { title: "Exhibitions", description: "On-site interpretation and booth localization for international trade fairs across India." },
  { title: "Technology", description: "Software localization and technical UI/UX translation for global tech firms." },
  { title: "Agriculture", description: "Export documentation and buyer communication support for international agri-trade." },
  { title: "Legal & Compliance", description: "Certified translation of contracts, agreements, and regulatory filings." },
  { title: "Education", description: "Curriculum localization and international board materials for educational institutions." },
  { title: "Media & OTT", description: "Subtitling, dubbing, and content localization for global streaming platforms." },
];

const corridors = [
  {
    market: "Japan",
    majorSectors: "Automotive & Electronics",
  },
  {
    market: "China",
    majorSectors: "Manufacturing & Logistics",
  },
  {
    market: "SE Asia",
    majorSectors: "Tech Hubs & Agriculture",
  },
  {
    market: "Korea",
    majorSectors: "Semiconductors & Entertainment",
  },
  {
    market: "Middle East & Africa",
    majorSectors: "Energy, Oil & Healthcare",
  },
  {
    market: "Latin America",
    majorSectors: "Mining & Trade Policy",
  },
];

const LanguageLocalization = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title="Professional Translation, Interpretation & Localization Services India | Ewan Business Solutions"
      description="ISO 9001:2015 certified language service provider offering translation, interpretation, and localization in 125+ languages. Specialist in technical, legal, and pharmaceutical sectors."
      canonicalPath="/language-localization/"
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-24 pt-12 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 20%, hsl(var(--brand-purple-500)/0.22) 0%, transparent 34%), radial-gradient(circle at 15% 80%, hsl(var(--brand-cyan-500)/0.14) 0%, transparent 40%)",
          }}
        />
        <div className="container relative mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            125+ Languages. Every Sector. ISO 9001:2015 Certified.
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Language That <span className="text-[hsl(var(--brand-gold-500))]">Goes Beyond Words.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            Ewan provides high-precision language services for companies navigating complex global corridors. Whether
            it&apos;s simultaneous interpretation in a high-stakes boardroom or technical translation for a
            manufacturing manual, we deliver with the accuracy and cultural intelligence your business demands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:info@ewan.co.in?subject=Language%20Services%20Quote"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Get a Quote in 24 Hours
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f0fa] px-6 py-14">
        <div className="container mx-auto">
          <article className="rounded-3xl border border-[#e7e3f1] bg-white p-8 text-center shadow-[0_10px_26px_rgba(20,16,45,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">Brand Positioning</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#1a1633]">Because Being Understood Changes Everything.</h2>
            <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-[#3d3859]">
              In cross-border execution, language is credibility and risk management, not a generic translation step.
              Cultural intelligence and accuracy protect outcomes.
            </p>
          </article>
        </div>
      </section>

      <section id="services" className="bg-[#f8f7fc] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">Our Capabilities</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#1a1633]">Six Language Disciplines</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  id={service.id}
                  className="group scroll-mt-28 rounded-3xl border border-[#e7e3f1] bg-white p-7 shadow-[0_10px_26px_rgba(20,16,45,0.06)] transition hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-[#f1eefe] p-3 transition group-hover:scale-105">
                    <Icon className="h-5 w-5 text-[hsl(var(--brand-purple-500))]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1a1633]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3d3859]">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] px-6 py-10">
        <div className="container mx-auto rounded-3xl border border-[#e7e3f1] bg-[#f8f7fc] p-8 text-center shadow-[0_10px_26px_rgba(20,16,45,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">Ready to Execute</p>
          <h3 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">Need language support for your next market move?</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@ewan.co.in?subject=Language%20Services%20Quote"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Get a Quote in 24 Hours
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[hsl(var(--brand-navy-950))] py-24 text-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 space-y-5">
            <span className="font-label inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-500))]">
              Sector Expertise
            </span>
            <h2 className="font-serif text-5xl font-bold leading-tight tracking-tight">
              Precision at the Core of Every Sector
            </h2>
            <p className="max-w-2xl text-base font-light leading-relaxed text-white/75">
              Domain-first language operations designed for technical sectors where precision, context, and trust
              directly affect outcomes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industryFocus.map((item, index) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-gold-500)/0.3)] hover:bg-white/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-white/10 group-hover:text-[hsl(var(--brand-gold-500)/0.2)] transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--brand-gold-500))] opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-white group-hover:text-[hsl(var(--brand-gold-500))] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 rounded-3xl bg-white/5 p-12 border border-white/10">
            <div className="relative z-10 space-y-6 text-center">
              <p className="text-secondary text-8xl">✦</p>
              <p className="text-2xl font-light italic">
                &quot;Context is everything. We don&apos;t just translate words; we translate the technical intent of
                an entire industry.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#fcf8ff] px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4">
              <span className="font-label text-xs font-bold uppercase tracking-[0.3em] text-[hsl(var(--brand-purple-500))]">Network</span>
              <h2 className="font-display text-5xl font-bold tracking-tight text-[#1a1633]">Strategic Corridors</h2>
            </div>
            <p className="max-w-md font-light leading-relaxed text-[#4b4763]">
              Specialized linguistic infrastructure bridging India with the world&apos;s most influential trade hubs.
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            {corridors.map((corridor, index) => (
              <div
                key={corridor.market}
                className="group flex cursor-pointer items-center justify-between border-b border-[#d9d3e7] py-12 transition-all duration-500 hover:bg-[#f8f3ff] hover:px-8"
              >
                <div className="flex items-center space-x-12">
                  <span className="font-display text-5xl font-light text-[#b5aec8] transition-colors group-hover:text-[hsl(var(--brand-purple-500))]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-headline text-4xl font-bold text-[#1a1633]">
                    India <span className="mx-4 text-[hsl(var(--brand-purple-500))]">↔</span> {corridor.market}
                  </h3>
                </div>
                <div className="hidden text-right md:block">
                  <p className="font-label text-xs uppercase tracking-widest text-[#7a7392]">Major Sectors</p>
                  <p className="text-lg font-light text-[#2e2946]">{corridor.majorSectors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="global-talkies" className="bg-[#ffffff] px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[#e7e3f1] bg-[#f8f7fc] p-8 shadow-[0_10px_26px_rgba(20,16,45,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">Global Talkies</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-[#1a1633]">Great Content Deserves an Audience in Every Language.</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#3d3859]">
            Media and OTT localization support for content creators, distributors, and studios crossing language borders
            without losing emotional and cultural fidelity.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Subtitling (SRT, VTT, TTML) and SDH",
              "Dubbing and voice direction with native talent",
              "Multilingual voiceover for media and corporate content",
              "Script translation and cultural adaptation",
              "Film distribution localization support",
              "OTT metadata and pipeline localization",
            ].map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm text-[#332f4f]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--brand-navy-950))] px-6 py-16 text-white">
        <div className="container mx-auto rounded-3xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Next Step</p>
          <h3 className="mt-2 font-serif text-4xl font-bold">Move Faster Across Languages and Markets</h3>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@ewan.co.in?subject=Language%20Services%20Quote"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Get a Quote in 24 Hours
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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

export default LanguageLocalization;
