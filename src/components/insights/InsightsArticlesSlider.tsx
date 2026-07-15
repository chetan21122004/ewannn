import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";

export type InsightArticle = {
  tag: string;
  category: string;
  date: string;
  title: string;
  copy: string;
  image: string;
  authorImage: string;
  to: string;
};

type InsightsArticlesSliderProps = {
  articles: InsightArticle[];
};

const InsightsArticlesSlider = ({ articles }: InsightsArticlesSliderProps) => {
  if (articles.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-[hsl(var(--border-light))] bg-white/70 px-6 py-12 text-center text-sm text-on-light-secondary">
        No articles in this category yet. Try another filter.
      </p>
    );
  }

  const slides = articles.map((card) => (
    <Link key={card.title} to={card.to} className="group block h-full">
      <article className="theme-card-light card-shine flex h-full min-h-[380px] flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_hsl(var(--brand-navy-950)/0.08)] sm:min-h-[400px] sm:rounded-3xl">
        <div className="relative overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[hsl(var(--brand-gold-500))] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-navy-950))] sm:text-[10px]">
            {card.tag}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-on-light-muted">{card.date}</span>
          <h3 className="mt-2 line-clamp-2 font-serif text-base font-bold leading-snug text-[hsl(var(--brand-navy-950))] transition group-hover:text-[hsl(var(--brand-purple-700))] sm:text-lg">
            {card.title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-on-light-secondary">{card.copy}</p>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-[hsl(var(--border-light))] pt-4">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src={card.authorImage}
                alt=""
                aria-hidden
                className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-[hsl(var(--border-light))]"
              />
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-[hsl(var(--brand-navy-950))]">Soham</p>
                <p className="truncate text-[10px] text-on-light-muted">UVAN Editorial</p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-[hsl(var(--brand-purple-700))]">
              Read
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </div>
        </div>
      </article>
    </Link>
  ));

  return (
    <AutoHorizontalSlider
      ariaLabel="Insights articles"
      items={slides}
      slideClassName="basis-[86%] sm:basis-[54%] md:basis-[42%] lg:basis-[32%] xl:basis-[28%]"
      autoplayMs={5200}
      edgeFadeFromClass="from-[hsl(var(--surface-light-50))]"
      className="px-1 sm:px-2"
    />
  );
};

export default InsightsArticlesSlider;
