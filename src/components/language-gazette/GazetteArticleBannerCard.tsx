import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import GazetteCoverImage from "@/components/language-gazette/GazetteCoverImage";

type GazetteArticleBannerCardProps = {
  href: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readTime: string;
  /** Shown on the banner - e.g. category or source */
  badge: string;
  /** Secondary label on banner - e.g. month or target keyword */
  meta?: string;
  /** Footer label above title area - e.g. SEO target phrase */
  eyebrow?: string;
};

const GazetteArticleBannerCard = ({
  href,
  title,
  excerpt,
  image,
  imageAlt,
  readTime,
  badge,
  meta,
  eyebrow,
}: GazetteArticleBannerCardProps) => (
  <Link
    to={href}
    className="group flex h-full flex-col overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-white shadow-[0_8px_28px_-12px_rgba(26,22,51,0.12)] transition hover:-translate-y-1 hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:shadow-[0_20px_48px_-16px_rgba(26,22,51,0.18)] sm:rounded-2xl"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-white">
      <GazetteCoverImage
        src={image}
        alt={imageAlt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.72)] via-[hsl(var(--brand-navy-950)/0.12)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
        <span className="rounded-full bg-[hsl(var(--brand-gold-500))] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-navy-950))] sm:px-3 sm:text-[10px]">
          {badge}
        </span>
        {meta ? (
          <span className="max-w-[55%] truncate text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 sm:text-[11px]">
            {meta}
          </span>
        ) : null}
      </div>
    </div>

    <div className="flex flex-1 flex-col p-4 sm:p-5">
      {eyebrow ? (
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]">
          Targets &ldquo;{eyebrow}&rdquo;
        </p>
      ) : null}
      <h3
        className={`font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))] sm:text-xl ${eyebrow ? "mt-2" : ""}`}
      >
        {title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-on-light-secondary">{excerpt}</p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-on-light-muted">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {readTime}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
          Read article
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </div>
  </Link>
);

export default GazetteArticleBannerCard;
