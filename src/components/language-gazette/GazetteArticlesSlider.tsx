import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";

type GazetteArticleSlide = {
  month: string;
  title: string;
  href: string;
};

type GazetteArticlesSliderProps = {
  year: string;
  articles: GazetteArticleSlide[];
};

const GazetteArticlesSlider = ({ year, articles }: GazetteArticlesSliderProps) => {
  const slides = articles.map((article) => (
    <Link
      key={`${article.month}-${article.title}`}
      to={article.href}
      className="group flex h-full min-h-[220px] flex-col rounded-xl border border-[hsl(var(--border-light))] bg-white p-4 transition hover:-translate-y-1 hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:shadow-[0_18px_42px_rgba(26,22,51,0.08)] sm:min-h-[240px] sm:rounded-2xl sm:p-5"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">{article.month}</p>
      <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))] sm:text-xl">
        {article.title}
      </h3>
      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
        Read article
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  ));

  return (
    <AutoHorizontalSlider
      ariaLabel={`${year} Language Gazette articles`}
      items={slides}
      slideClassName="basis-[88%] sm:basis-[62%] md:basis-[48%] lg:basis-[38%]"
      autoplayMs={5000}
      edgeFadeFromClass="from-[hsl(40_30%_97%)]"
    />
  );
};

export default GazetteArticlesSlider;
