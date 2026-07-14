import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";
import GazetteCoverImage from "@/components/language-gazette/GazetteCoverImage";
import type { GazetteWebArticle } from "@/data/languageGazetteIssues";

type GazetteArticlesSliderProps = {
  year: string;
  articles: GazetteWebArticle[];
};

const GazetteArticlesSlider = ({ year, articles }: GazetteArticlesSliderProps) => {
  const slides = articles.map((article) => (
    <Link
      key={`${article.month}-${article.title}`}
      to={article.href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-white shadow-[0_8px_28px_-12px_rgba(26,22,51,0.12)] transition hover:-translate-y-1 hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:shadow-[0_20px_48px_-16px_rgba(26,22,51,0.18)] sm:rounded-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[hsl(var(--surface-light-100))]">
        <GazetteCoverImage
          src={article.image}
          alt={`${article.title} — ${article.month}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.72)] via-[hsl(var(--brand-navy-950)/0.12)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
          <span className="rounded-full bg-[hsl(var(--brand-gold-500))] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-navy-950))] sm:px-3 sm:text-[10px]">
            {article.category}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-[11px]">
            {article.month}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))] sm:text-xl">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-on-light-secondary">{article.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-on-light-muted">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
            Read article
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  ));

  return (
    <AutoHorizontalSlider
      ariaLabel={`${year} Language Gazette articles`}
      items={slides}
      slideClassName="basis-[88%] sm:basis-[58%] md:basis-[44%] lg:basis-[34%]"
      autoplayMs={5000}
      edgeFadeFromClass="from-[hsl(40_30%_97%)]"
    />
  );
};

export default GazetteArticlesSlider;
