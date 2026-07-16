import { useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export type ImageRevealOverlayCardProps = {
  id?: string;
  index: number;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  icon: LucideIcon;
  href?: string;
  linkLabel?: string;
  className?: string;
  compact?: boolean;
  footer?: ReactNode;
};

const ImageRevealOverlayCard = ({
  id,
  index,
  title,
  description,
  image,
  imageAlt = "",
  icon: Icon,
  href,
  linkLabel = "Explore",
  className,
  compact = false,
  footer,
}: ImageRevealOverlayCardProps) => {
  const [revealed, setRevealed] = useState(false);

  const open = () => setRevealed(true);
  const close = () => setRevealed(false);
  const toggle = () => setRevealed((value) => !value);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
    if (event.key === "Escape") {
      close();
    }
  };

  return (
    <article
      id={id}
      role="button"
      tabIndex={0}
      aria-expanded={revealed}
      aria-label={`${title} - ${revealed ? "hide details" : "show details"}`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      onMouseEnter={open}
      onMouseLeave={close}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_10px_28px_hsl(var(--brand-navy-950)/0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.28)] hover:shadow-[0_18px_40px_hsl(var(--brand-navy-950)/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] focus-visible:ring-offset-2",
        compact ? "h-[228px] sm:h-[240px] lg:h-[252px]" : "h-[240px] sm:h-[256px] lg:h-[272px]",
        revealed && "border-[hsl(var(--brand-purple-500)/0.35)]",
        className,
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition duration-500",
          revealed ? "scale-105 opacity-[0.12]" : "scale-100 opacity-100 group-hover:scale-[1.03]",
        )}
      />

      <div
        className={cn(
          "absolute inset-0 transition duration-300",
          revealed
            ? "bg-white"
            : compact
              ? "bg-gradient-to-t from-black/80 from-0% via-black/35 via-[30%] to-transparent"
              : "bg-gradient-to-t from-white from-35% via-white/75 via-55% to-white/10",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col justify-between p-4 transition duration-300 sm:p-4",
          revealed ? "pointer-events-none invisible opacity-0" : "visible opacity-100",
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] px-2 font-mono text-[10px] font-bold tracking-[0.16em] text-[hsl(var(--brand-navy-950))]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
            <Icon className="h-3.5 w-3.5" aria-hidden />
          </div>
        </div>

        <h3
          className={cn(
            "font-serif font-bold leading-snug",
            compact
              ? "line-clamp-2 text-sm text-white drop-shadow-sm sm:text-[0.9375rem]"
              : "line-clamp-3 text-base text-[hsl(var(--brand-navy-950))] sm:text-lg",
          )}
        >
          {title}
        </h3>
      </div>

      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col border border-transparent bg-white p-4 transition duration-300 sm:p-5",
          revealed ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-1 opacity-0",
        )}
      >
        <div className="flex items-start gap-2.5">
          <span className="inline-flex h-7 min-w-[1.75rem] shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700)/0.1)] px-2 font-mono text-[10px] font-bold tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
            <Icon className="h-3.5 w-3.5" aria-hidden />
          </div>
          <h3
            className={cn(
              "min-w-0 flex-1 font-serif font-bold leading-snug text-[hsl(var(--brand-navy-950))]",
              compact ? "text-sm sm:text-[0.9375rem]" : "text-base sm:text-[1.05rem]",
            )}
          >
            {title}
          </h3>
        </div>

        <p
          className={cn(
            "mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain leading-relaxed text-on-light-secondary",
            compact ? "text-xs sm:text-[0.8125rem] sm:leading-relaxed" : "text-sm sm:leading-relaxed",
          )}
        >
          {description}
        </p>

        {href ? (
          <Link
            to={href}
            className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-purple-700))] hover:underline sm:text-[11px]"
            onClick={(event) => event.stopPropagation()}
          >
            {linkLabel}
            <ArrowRight className="h-3 w-3" aria-hidden />
          </Link>
        ) : null}

        {footer}
      </div>
    </article>
  );
};

export default ImageRevealOverlayCard;
