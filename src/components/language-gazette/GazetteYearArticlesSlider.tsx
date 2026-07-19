import { useEffect, useState } from "react";
import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";
import GazetteArticleBannerCard from "@/components/language-gazette/GazetteArticleBannerCard";
import { resolveGazetteMonthFromHash, gazetteMonthHash, type GazetteWebArticle } from "@/data/languageGazetteIssues";
import { cn } from "@/lib/utils";

type GazetteYearArticlesSliderProps = {
  year: string;
  months: string[];
  articles: GazetteWebArticle[];
};

const monthBadgeLabel = (month: string) => month.replace(/\s+\d{4}$/, "");

const GazetteYearArticlesSlider = ({ year, months, articles }: GazetteYearArticlesSliderProps) => {
  const [activeMonth, setActiveMonth] = useState(
    () => resolveGazetteMonthFromHash(window.location.hash, months) ?? months[0] ?? "",
  );

  useEffect(() => {
    const applyHash = () => {
      const month = resolveGazetteMonthFromHash(window.location.hash, months);
      if (!month) return;

      setActiveMonth(month);
      document.getElementById("latest-issue")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [months]);

  const filteredArticles = articles.filter((article) => article.month === activeMonth);

  const slides = filteredArticles.map((article) => (
    <GazetteArticleBannerCard
      key={`${article.month}-${article.title}`}
      href={article.href}
      title={article.title}
      excerpt={article.excerpt}
      image={article.image}
      imageAlt={`${article.title} - ${article.month}`}
      readTime={article.readTime}
      badge={article.category}
      meta={article.month}
    />
  ));

  if (months.length === 0) return null;

  return (
    <div>
      <div
        className="mb-6 flex flex-wrap gap-2"
        role="tablist"
        aria-label={`${year} Language Gazette months`}
      >
        {months.map((month) => {
          const isActive = month === activeMonth;
          const count = articles.filter((article) => article.month === month).length;

          return (
            <button
              key={month}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`gazette-${year}-${monthBadgeLabel(month).toLowerCase()}-panel`}
              onClick={() => {
                setActiveMonth(month);
                window.history.replaceState(null, "", `#${gazetteMonthHash(month)}`);
              }}
              className={cn(
                "inline-flex min-h-9 items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] transition",
                isActive
                  ? "bg-[hsl(var(--brand-navy-950))] text-white shadow-[0_8px_20px_rgba(26,22,51,0.18)]"
                  : "border border-[hsl(var(--border-light))] bg-white text-on-light-secondary hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:text-[hsl(var(--brand-navy-950))]",
              )}
            >
              {monthBadgeLabel(month)}
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[9px] font-semibold tabular-nums",
                  isActive ? "bg-white/15 text-white" : "bg-[hsl(var(--surface-light-100))] text-on-light-muted",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`gazette-${year}-${monthBadgeLabel(activeMonth).toLowerCase()}-panel`}
        role="tabpanel"
        aria-label={`${activeMonth} articles`}
      >
        <AutoHorizontalSlider
          key={activeMonth}
          ariaLabel={`${year} Language Gazette articles - ${activeMonth}`}
          items={slides}
          slideClassName="basis-[88%] sm:basis-[58%] md:basis-[44%] lg:basis-[34%]"
          autoplayMs={5000}
          edgeFadeFromClass="from-white"
        />
      </div>
    </div>
  );
};

export default GazetteYearArticlesSlider;
