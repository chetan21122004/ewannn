import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PRESS_ARTICLE_DEFAULT_IMAGE,
  PRESS_ARTICLES_CATALOG,
  type PressArticleEntry,
} from "@/data/pressArticlesCatalog";

const PressArticleCard = ({ article }: { article: PressArticleEntry }) => {
  const image = article.image ?? PRESS_ARTICLE_DEFAULT_IMAGE;
  const cardClass =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-700)/0.25)] hover:shadow-[0_16px_40px_hsl(var(--brand-navy-950)/0.08)]";

  const body = (
    <>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[hsl(var(--brand-navy-950)/0.82)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:text-[10px]">
          {article.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="line-clamp-3 font-serif text-base font-bold leading-snug text-[hsl(var(--brand-navy-950))] transition group-hover:text-[hsl(var(--brand-purple-700))] sm:text-lg">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-on-light-secondary">{article.copy}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
          View article
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </>
  );

  if (article.external) {
    return (
      <a href={article.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {body}
      </a>
    );
  }

  return (
    <Link to={article.href} className={cardClass}>
      {body}
    </Link>
  );
};

const PressArticlesGrid = () => {
  const featured = PRESS_ARTICLES_CATALOG.filter((article) => article.featured);
  const rest = PRESS_ARTICLES_CATALOG.filter((article) => !article.featured);

  return (
    <div className="space-y-8">
      {featured.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((article) => (
            <PressArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((article) => (
          <PressArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default PressArticlesGrid;
