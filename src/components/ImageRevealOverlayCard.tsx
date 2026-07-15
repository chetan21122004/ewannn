import { useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowRight, Plus, type LucideIcon } from "lucide-react";
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
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--brand-navy-950))] shadow-[0_10px_28px_hsl(var(--brand-navy-950)/0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.3)] hover:shadow-[0_18px_40px_hsl(var(--brand-navy-950)/0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] focus-visible:ring-offset-2",
        compact ? "h-[212px] sm:h-[224px] lg:h-[236px]" : "h-[240px] sm:h-[256px] lg:h-[272px]",
        className,
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition duration-700",
          revealed ? "scale-105 opacity-30" : "scale-100 opacity-85 group-hover:scale-105",
        )}
      />

      <div
        className={cn(
          "absolute inset-0 transition duration-300",
          revealed
            ? "bg-[hsl(var(--brand-navy-950)/0.08)]"
            : "bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.94)] via-[hsl(var(--brand-navy-950)/0.55)] to-[hsl(var(--brand-navy-950)/0.18)]",
        )}
        aria-hidden
      />

      <span
        className="pointer-events-none absolute top-2.5 left-2.5 h-2.5 w-2.5 border-t border-l border-white/30 transition-colors duration-300 group-hover:border-[hsl(var(--brand-gold-500)/0.65)]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute top-2.5 right-2.5 h-2.5 w-2.5 border-t border-r border-white/30 transition-colors duration-300 group-hover:border-[hsl(var(--brand-gold-500)/0.65)]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-2.5 left-2.5 h-2.5 w-2.5 border-b border-l border-white/30 transition-colors duration-300 group-hover:border-[hsl(var(--brand-gold-500)/0.65)]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-2.5 bottom-2.5 h-2.5 w-2.5 border-r border-b border-white/30 transition-colors duration-300 group-hover:border-[hsl(var(--brand-gold-500)/0.65)]"
        aria-hidden
      />

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col justify-between p-4 transition duration-300 sm:p-4",
          revealed ? "pointer-events-none invisible opacity-0" : "visible opacity-100",
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[hsl(var(--brand-gold-500))]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white backdrop-blur-sm">
            <Icon className="h-3.5 w-3.5" aria-hidden />
          </div>
        </div>

        <div>
          <h3
            className={cn(
              "line-clamp-2 font-serif font-bold leading-snug text-white",
              compact ? "text-sm sm:text-[0.9375rem]" : "text-base sm:text-lg",
            )}
          >
            {title}
          </h3>
          <p className="mt-2 flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55 [@media(hover:hover)]:hidden">
            <Plus className="h-2.5 w-2.5" aria-hidden />
            Tap for details
          </p>
          <p className="mt-2 hidden items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55 [@media(hover:hover)]:flex">
            Hover for details
          </p>
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col bg-[hsl(var(--brand-navy-950)/0.94)] p-4 backdrop-blur-[2px] transition duration-300 sm:p-4",
          revealed ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-1 opacity-0",
        )}
      >
        <div className="flex items-start gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--brand-gold-500)/0.15)] text-[hsl(var(--brand-gold-500))]">
            <Icon className="h-3.5 w-3.5" aria-hidden />
          </div>
          <h3
            className={cn(
              "min-w-0 font-serif font-bold leading-snug text-white",
              compact ? "text-sm" : "text-base sm:text-[1.05rem]",
            )}
          >
            {title}
          </h3>
        </div>

        <p
          className={cn(
            "mt-2.5 min-h-0 flex-1 overflow-y-auto overscroll-contain leading-relaxed text-white/88",
            compact ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm",
          )}
        >
          {description}
        </p>

        {href ? (
          <Link
            to={href}
            className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-gold-500)] hover:underline sm:text-[11px]"
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
