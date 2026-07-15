import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";
import GazetteArticleBannerCard from "@/components/language-gazette/GazetteArticleBannerCard";
import type { GazetteWebArticle } from "@/data/languageGazetteIssues";

type GazetteArticlesSliderProps = {
  year: string;
  articles: GazetteWebArticle[];
};

const GazetteArticlesSlider = ({ year, articles }: GazetteArticlesSliderProps) => {
  const slides = articles.map((article) => (
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

  return (
    <AutoHorizontalSlider
      ariaLabel={`${year} Language Gazette articles`}
      items={slides}
      slideClassName="basis-[88%] sm:basis-[58%] md:basis-[44%] lg:basis-[34%]"
      autoplayMs={5000}
      edgeFadeFromClass="from-white"
    />
  );
};

export default GazetteArticlesSlider;
