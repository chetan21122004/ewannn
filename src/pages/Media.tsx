import { ArrowRight, Download, Image as ImageIcon, Play, Radio, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const defaultPressItems = [
  {
    date: "FEB 12",
    year: "2024",
    title: "EWAN Unveils 'Prism' - The Future of Context-Aware Language AI",
    desc: "A revolutionary leap in linguistic computation designed for enterprise-scale global operations.",
  },
  {
    date: "JAN 28",
    year: "2024",
    title: "Annual Market Report: Localization Trends for Sustainable Growth",
    desc: "Comprehensive data analysis revealing the shift toward value-based market entry strategies.",
  },
  {
    date: "DEC 15",
    year: "2023",
    title: "New Executive Appointment: Dr. Elena Vance as Chief Strategy Officer",
    desc: "Bringing two decades of global trade experience to the EWAN leadership cabinet.",
  },
];

const Media = () => {
  const { t } = useTranslation();
  const pressItems = t("media.press.items", {
    returnObjects: true,
    defaultValue: defaultPressItems,
  }) as Array<{ date: string; year: string; title: string; desc: string }>;

  return (
    <PageLayout
      title={t("seo.media.title")}
      description={t("seo.media.description")}
      canonicalPath="/media/"
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-28 pt-14 text-white lg:pb-36 lg:pt-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[hsl(var(--brand-gold-500)/0.18)] to-transparent" />
        <div className="container relative mx-auto grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-7 inline-flex rounded-full bg-[hsl(var(--brand-gold-500)/0.2)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
              {t("media.hero.badge")}
            </span>
            <h1 className="font-serif text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
              {t("media.hero.titleLine1")}
              <br />
              <span className="text-[hsl(var(--brand-gold-500))]">{t("media.hero.titleLine2")}</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/80">
              {t("media.hero.subtitle")}
            </p>
            <Link
              to="/language-gazette"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-7 py-3.5 text-sm font-bold text-[hsl(var(--brand-navy-950))]"
            >
              {t("media.hero.cta")}
              <Radio className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-[420px] lg:h-[500px]">
            <div className="absolute right-0 top-0 w-80 rounded-[2rem] bg-white p-6 text-[hsl(var(--brand-navy-950))] shadow-2xl transition duration-500 hover:rotate-0 lg:rotate-6">
              <img src="/stitch/media/hero-card-network.jpg" alt="Featured network intelligence visual" className="mb-4 h-48 w-full rounded-2xl object-cover" />
              <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">{t("media.hero.featuredTag")}</span>
              <h3 className="mt-2 text-xl font-bold">{t("media.hero.featuredTitle")}</h3>
            </div>
            <div className="absolute bottom-0 left-0 w-80 rounded-[2rem] bg-[hsl(var(--brand-purple-700))] p-6 shadow-2xl transition duration-500 hover:rotate-0 lg:-rotate-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-gold-500))]">{t("media.hero.flashTag")}</span>
              <p className="mt-4 text-2xl font-bold italic text-white">{t("media.hero.flashQuote")}</p>
              <p className="mt-10 text-xs text-white/65">{t("media.hero.flashMeta")}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-y border-white/10 bg-white/5 py-4">
          <div className="container mx-auto flex flex-wrap gap-x-10 gap-y-2 px-6 text-xs font-mono tracking-widest text-white/60">
            <span>{t("media.hero.ticker.0")}</span>
            <span>{t("media.hero.ticker.1")}</span>
            <span>{t("media.hero.ticker.2")}</span>
            <span>{t("media.hero.ticker.3")}</span>
          </div>
        </div>
      </section>

      <section id="language-gazette" className="theme-section-light px-6 py-24">
        <div className="container mx-auto">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-4xl font-extrabold tracking-tight text-[hsl(var(--brand-navy-950))] lg:text-5xl">{t("media.gazette.title")}</h2>
              <p className="text-on-light-secondary mt-4 text-lg">{t("media.gazette.subtitle")}</p>
            </div>
            <Link to="/language-gazette" className="inline-flex items-center gap-2 font-semibold text-[hsl(var(--brand-navy-950))]">
              {t("media.gazette.viewAll")}
              <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-12">
            <article className="theme-card-light relative overflow-hidden rounded-[2.5rem] p-10 md:col-span-8 lg:p-12">
              <img src="/stitch/media/gazette-feature.jpg" alt="Global Gazette feature visual" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 hover:opacity-20" />
              <div className="relative">
                <span className="rounded-full bg-[hsl(var(--brand-purple-700))] px-4 py-1 text-xs font-bold text-white">{t("media.gazette.featureTag")}</span>
                <h3 className="mt-6 max-w-xl font-serif text-4xl font-bold leading-tight text-[hsl(var(--brand-navy-950))]">{t("media.gazette.featureTitle")}</h3>
                <p className="text-on-light-secondary mt-7 max-w-md">
                  {t("media.gazette.featureCopy")}
                </p>
                <button className="mt-7 border-b-2 border-[hsl(var(--brand-navy-950))] pb-1 font-semibold text-[hsl(var(--brand-navy-950))]">{t("media.gazette.featureButton")}</button>
              </div>
            </article>
            <div className="space-y-6 md:col-span-4">
              <article className="theme-card-light rounded-[2rem] p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">{t("media.gazette.card1.tag")}</span>
                <h4 className="mt-2 text-xl font-bold text-[hsl(var(--brand-navy-950))]">{t("media.gazette.card1.title")}</h4>
                <p className="text-on-light-secondary mt-4 text-sm">{t("media.gazette.card1.copy")}</p>
              </article>
              <article className="theme-card-light rounded-[2rem] p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">{t("media.gazette.card2.tag")}</span>
                <h4 className="mt-2 text-xl font-bold text-[hsl(var(--brand-navy-950))]">{t("media.gazette.card2.title")}</h4>
                <p className="text-on-light-secondary mt-4 text-sm">{t("media.gazette.card2.copy")}</p>
              </article>
              <article className="rounded-[2rem] bg-[hsl(var(--brand-gold-500)/0.2)] p-7 text-center">
                <Send className="mx-auto h-7 w-7 text-[hsl(var(--brand-navy-950))]" />
                <p className="mt-4 text-lg font-bold text-[hsl(var(--brand-navy-950))]">{t("media.gazette.signup.title")}</p>
                <button className="mt-5 rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2 text-sm font-semibold text-white">{t("media.gazette.signup.button")}</button>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="video-insights" className="theme-section-soft scroll-mt-28 px-6 py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-extrabold text-[hsl(var(--brand-navy-950))]">{t("media.videos.title")}</h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-[hsl(var(--brand-gold-500))]" />
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <article className="group relative aspect-video overflow-hidden rounded-[2.5rem]">
              <img src="/stitch/media/video-main.jpg" alt="Video insight keynote visual" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.35)] transition group-hover:bg-[hsl(var(--brand-navy-950)/0.2)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20">
                  <Play className="h-9 w-9 text-white" />
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold">{t("media.videos.mainTitle")}</h3>
                <p className="mt-2 text-sm text-white/80">{t("media.videos.mainMeta")}</p>
              </div>
            </article>
            <div className="space-y-5">
              <article className="theme-card-light flex gap-5 rounded-[2rem] p-5">
                <img src="/stitch/media/video-thumb-eu.jpg" alt="Localization pitfalls thumbnail" className="h-28 w-40 rounded-xl object-cover" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">{t("media.videos.card1.tag")}</span>
                  <h4 className="mt-1 text-lg font-bold text-[hsl(var(--brand-navy-950))]">{t("media.videos.card1.title")}</h4>
                  <p className="text-on-light-secondary mt-2 text-sm">{t("media.videos.card1.copy")}</p>
                </div>
              </article>
              <article className="theme-card-light flex gap-5 rounded-[2rem] p-5">
                <img src="/stitch/media/video-thumb-sustainability.jpg" alt="Sustainability supply chain thumbnail" className="h-28 w-40 rounded-xl object-cover" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">{t("media.videos.card2.tag")}</span>
                  <h4 className="mt-1 text-lg font-bold text-[hsl(var(--brand-navy-950))]">{t("media.videos.card2.title")}</h4>
                  <p className="text-on-light-secondary mt-2 text-sm">{t("media.videos.card2.copy")}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="press" className="theme-section-light px-6 py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="font-serif text-4xl font-extrabold text-[hsl(var(--brand-navy-950))]">{t("media.press.title")}</h2>
            <p className="text-on-light-secondary mt-4">{t("media.press.subtitle")}</p>
            <div className="mt-8 space-y-4">
              <button className="theme-card-light flex w-full items-center justify-between rounded-2xl p-5">
                <span className="flex items-center gap-3 text-[hsl(var(--brand-navy-950))]">
                  <Download className="h-5 w-5" />
                  <span className="font-semibold">{t("media.press.mediaKit")}</span>
                </span>
                <span className="text-on-light-muted text-xs">PDF - 12MB</span>
              </button>
              <button className="theme-card-light flex w-full items-center justify-between rounded-2xl p-5">
                <span className="flex items-center gap-3 text-[hsl(var(--brand-navy-950))]">
                  <ImageIcon className="h-5 w-5" />
                  <span className="font-semibold">{t("media.press.brandAssets")}</span>
                </span>
                <span className="text-on-light-muted text-xs">ZIP - 45MB</span>
              </button>
            </div>
          </div>
          <div className="space-y-8 lg:col-span-2">
            {pressItems.map((item) => (
              <article key={item.title} className="flex flex-col gap-6 border-b border-[hsl(var(--border-light))] pb-8 md:flex-row md:items-center">
                <div className="w-24 shrink-0">
                  <p className="text-2xl font-black text-[hsl(var(--brand-gold-600))]">{item.date}</p>
                  <p className="text-on-light-muted mt-1 text-xs uppercase tracking-wider">{item.year}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[hsl(var(--brand-navy-950))]">{item.title}</h4>
                  <p className="text-on-light-secondary mt-2 text-sm">{item.desc}</p>
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
            {t("media.press.cta")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;
