import { ArrowRight, Download, Image as ImageIcon, Play, Radio } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const pressItems = [
  {
    date: "2024",
    year: "CASE STUDY",
    title: "Building Strong International Ties: Ewan Business Solutions' Successful Partnership with SHOWA Gloves Japan",
    desc: "How Ewan served as the single point of coordination for SHOWA's complete India market entry mandate.",
  },
  {
    date: "2024",
    year: "INSIGHTS",
    title: "Harvesting Asian Prosperity Together",
    desc: "The agricultural sector was a highlight of the government work report - exploring opportunities for Indo-Asian collaboration.",
  },
  {
    date: "2024",
    year: "ANALYSIS",
    title: "Can we truly boycott Chinese products in India?",
    desc: "A business-oriented analysis of China's trade history and India's economic dependency on Chinese goods.",
  },
  {
    date: "2023",
    year: "TRADE",
    title: "India's import from China: raw material to finished goods",
    desc: "A deep dive into India's trade and technology dependency on China across key sectors.",
  },
  {
    date: "2023",
    year: "GLOBAL",
    title: "US-China trade war can benefit India",
    desc: "How the evolving trade dynamics between the US and China can open new corridors for Indian exporters.",
  },
  {
    date: "2023",
    year: "INVESTMENT",
    title: "How much money China has invested in India?",
    desc: "Tracking Chinese FDI in India and the policy changes that followed after tightening of FDI norms.",
  },
];

const Media = () => {
  return (
    <PageLayout
      title="Media Coverage | Ewan Business Solutions"
      description="Media coverage, case studies, insights, and articles from Ewan Business Solutions. Stay updated on India-Asia trade, business expansion, and language localization trends."
      canonicalPath="/media/"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-28 pt-14 text-white lg:pb-36 lg:pt-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[hsl(var(--brand-gold-500)/0.18)] to-transparent" />
        <div className="container relative mx-auto grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-7 inline-flex rounded-full bg-[hsl(var(--brand-gold-500)/0.2)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
              Media Hub
            </span>
            <h1 className="font-serif text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
              Our <br />
              <span className="text-[hsl(var(--brand-gold-500))]">Coverage.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/80">
              Case studies, insights, trade analysis, and press coverage from Ewan Business Solutions - building strong international ties across India, Japan, and the Orient.
            </p>
            <Link
              to="/language-gazette"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-7 py-3.5 text-sm font-bold text-[hsl(var(--brand-navy-950))]"
            >
              Read The Language Gazette
              <Radio className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-[420px] lg:h-[500px]">
            <div className="absolute right-0 top-0 w-80 rounded-[2rem] bg-white p-6 text-[hsl(var(--brand-navy-950))] shadow-2xl transition duration-500 hover:rotate-0 lg:rotate-6">
              <img
                src="/page-assets/Building-Strong-International-Ties-Header-img-V2.jpg"
                alt="Building Strong International Ties - SHOWA Gloves Japan & Ewan case study"
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">Featured Case Study</span>
              <h3 className="mt-2 text-base font-bold leading-snug">Ewan × SHOWA Gloves Japan</h3>
            </div>
            <div className="absolute bottom-0 left-0 w-80 rounded-[2rem] bg-[hsl(var(--brand-purple-700))] p-6 shadow-2xl transition duration-500 hover:rotate-0 lg:-rotate-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-gold-500))]">On We Are On</span>
              <p className="mt-4 text-2xl font-bold italic text-white">"Harvesting Asian Prosperity Together"</p>
              <p className="mt-10 text-xs text-white/65">Agricultural sector highlights - Government work report</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-y border-white/10 bg-white/5 py-4">
          <div className="container mx-auto flex flex-wrap gap-x-10 gap-y-2 px-6 text-xs font-mono tracking-widest text-white/60">
            <span>📰 Case Studies & Insights</span>
            <span>🌏 India–Asia Trade Analysis</span>
            <span>🎬 Videos & Press</span>
            <span>📖 The Language Gazette</span>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section id="case-study" className="theme-section-light px-6 py-24">
        <div className="container mx-auto">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-4xl font-extrabold tracking-tight text-[hsl(var(--brand-navy-950))] lg:text-5xl">
                Our Featured Story
              </h2>
              <p className="mt-4 text-lg text-[#4b4566]">
                Our biggest case study - a complete India market entry mandate for a leading Japanese manufacturer.
              </p>
            </div>
            <Link to="/market-entry" className="inline-flex items-center gap-2 font-semibold text-[hsl(var(--brand-navy-950))]">
              Explore Market Entry Services
              <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-12">
            <article className="relative overflow-hidden rounded-[2.5rem] md:col-span-8">
              <img
                src="/page-assets/Building-Strong-International-Ties-Header-img-V2.jpg"
                alt="Building Strong International Ties - Ewan & SHOWA Gloves Japan"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.75)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="rounded-full bg-[hsl(var(--brand-purple-700))] px-4 py-1 text-xs font-bold text-white">Featured Case Study</span>
                <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-white">
                  Building Strong International Ties: Ewan's Successful Partnership with SHOWA Gloves Japan
                </h3>
                <button className="mt-5 border-b-2 border-[hsl(var(--brand-gold-500))] pb-1 font-semibold text-[hsl(var(--brand-gold-500))]">
                  View More
                </button>
              </div>
            </article>
            <div className="space-y-6 md:col-span-4">
              <article className="theme-card-light rounded-[2rem] p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">Insights</span>
                <h4 className="mt-2 text-xl font-bold text-[hsl(var(--brand-navy-950))]">Harvesting Asian Prosperity Together</h4>
                <p className="mt-4 text-sm text-[#4b4566]">The agricultural sector was a highlight of the government work report on India-Asia trade.</p>
              </article>
              <article className="theme-card-light rounded-[2rem] p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">Analysis</span>
                <h4 className="mt-2 text-xl font-bold text-[hsl(var(--brand-navy-950))]">Can we truly boycott Chinese products in India?</h4>
                <p className="mt-4 text-sm text-[#4b4566]">A business-oriented mentality and history of China - examining the reality of India's trade dependency.</p>
              </article>
              <article className="rounded-[2rem] bg-[hsl(var(--brand-gold-500)/0.15)] p-7 text-center">
                <p className="text-lg font-bold text-[hsl(var(--brand-navy-950))]">Stay Updated</p>
                <p className="mt-2 text-sm text-[#4b4566]">Read the latest from The Language Gazette</p>
                <Link
                  to="/language-gazette"
                  className="mt-5 inline-block rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2 text-sm font-semibold text-white"
                >
                  Go to Gazette
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-insights" className="theme-section-soft scroll-mt-28 px-6 py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-extrabold text-[hsl(var(--brand-navy-950))]">Video Insights</h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-[hsl(var(--brand-gold-500))]" />
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <article className="group relative aspect-video overflow-hidden rounded-[2.5rem]">
              <img
                src="/page-assets/Building-Strong-International-Ties-Header-img-V2.jpg"
                alt="SHOWA Gloves Japan - Ewan's successful India entry partnership"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.5)] transition group-hover:bg-[hsl(var(--brand-navy-950)/0.3)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@EWAN-SSK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 hover:bg-white/40 transition"
                >
                  <Play className="h-9 w-9 text-white" />
                </a>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold">Ewan on YouTube</h3>
                <p className="mt-2 text-sm text-white/80">Watch our full video series on India-Asia business expansion - @EWAN-SSK</p>
              </div>
            </article>
            <div className="space-y-5">
              {[
                { title: "China's story of overcoming COVID-19 pandemic", tag: "Economy", desc: "An in-depth look at how China's manufacturing sector rebounded and what it means for global supply chains." },
                { title: "India can increase export of agro products to China", tag: "Trade", desc: "Exploring the untapped potential of Indian agro exports and the path to stronger bilateral trade." },
                { title: "From an Agriculture economy to the 'World factory'", tag: "History", desc: "How China transformed its economic model and the lessons for emerging market players." },
              ].map((item) => (
                <article key={item.title} className="theme-card-light flex gap-5 rounded-[2rem] p-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">{item.tag}</span>
                    <h4 className="mt-1 text-base font-bold text-[hsl(var(--brand-navy-950))]">{item.title}</h4>
                    <p className="mt-2 text-sm text-[#4b4566]">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press / Articles Section */}
      <section id="press" className="theme-section-light px-6 py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="font-serif text-4xl font-extrabold text-[hsl(var(--brand-navy-950))]">Press & Insights</h2>
            <p className="mt-4 text-[#4b4566]">Read our analysis, case studies, and thought leadership on India-Asia trade and business expansion.</p>
            <div className="mt-8 space-y-4">
              <a
                href="https://www.facebook.com/EwanBusinessSolutions?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-card-light flex w-full items-center justify-between rounded-2xl p-5"
              >
                <span className="flex items-center gap-3 text-[hsl(var(--brand-navy-950))]">
                  <Download className="h-5 w-5" />
                  <span className="font-semibold">Media Kit</span>
                </span>
                <span className="text-xs text-[#4b4566]">Contact Us</span>
              </a>
              <a
                href="mailto:info@ewan.co.in?subject=Brand%20Assets%20Request"
                className="theme-card-light flex w-full items-center justify-between rounded-2xl p-5"
              >
                <span className="flex items-center gap-3 text-[hsl(var(--brand-navy-950))]">
                  <ImageIcon className="h-5 w-5" />
                  <span className="font-semibold">Brand Assets</span>
                </span>
                <span className="text-xs text-[#4b4566]">Request via Email</span>
              </a>
            </div>
          </div>
          <div className="space-y-8 lg:col-span-2">
            {pressItems.map((item) => (
              <article key={item.title} className="flex flex-col gap-6 border-b border-[hsl(var(--border-light))] pb-8 md:flex-row md:items-center">
                <div className="w-24 shrink-0">
                  <p className="text-2xl font-black text-[hsl(var(--brand-gold-600))]">{item.date}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#4b4566]">{item.year}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[hsl(var(--brand-navy-950))]">{item.title}</h4>
                  <p className="mt-2 text-sm text-[#4b4566]">{item.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-purple-500))]" />
              </article>
            ))}
          </div>
        </div>
        <div className="container mx-auto mt-16">
          <a
            href="mailto:info@ewan.co.in?subject=Media%20or%20Press%20Inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
          >
            Contact Us for Media Inquiries
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;
