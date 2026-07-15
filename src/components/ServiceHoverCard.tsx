import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceHoverCardProps = {
  id: string;
  index: number;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

const ServiceHoverCard = ({
  id,
  index,
  title,
  description,
  points,
  image,
  imageAlt,
}: ServiceHoverCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const revealDefault = cn(
    "transition-opacity duration-300",
    expanded && "pointer-events-none invisible opacity-0",
    "lg:group-hover/card:pointer-events-none lg:group-hover/card:invisible lg:group-hover/card:opacity-0",
  );

  const revealPanel = cn(
    "absolute inset-0 z-10 flex flex-col overflow-y-auto overscroll-contain border-t border-[hsl(var(--border-light))] bg-white p-5 transition-opacity duration-300 sm:p-6",
    expanded ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
    "lg:pointer-events-none lg:invisible lg:opacity-0 lg:group-hover/card:pointer-events-auto lg:group-hover/card:visible lg:group-hover/card:opacity-100",
  );

  const revealImageDim = cn(
    "pointer-events-none absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.5)] transition-opacity duration-300",
    expanded ? "opacity-100" : "opacity-0",
    "lg:opacity-0 lg:group-hover/card:opacity-100",
  );

  return (
    <article
      id={id}
      className={cn(
        "theme-card-light card-shine group/card scroll-mt-28 relative flex h-full flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white transition-shadow duration-300 sm:rounded-3xl",
        expanded && "border-[hsl(var(--brand-purple-500)/0.28)] shadow-[0_18px_40px_rgba(26,22,51,0.1)]",
        "lg:hover:border-[hsl(var(--brand-purple-500)/0.28)] lg:hover:shadow-[0_18px_40px_rgba(26,22,51,0.1)]",
      )}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover/card:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.72)] via-[hsl(var(--brand-navy-950)/0.18)] to-transparent" />
        <div className={revealImageDim} aria-hidden />
        <span className="absolute left-4 top-4 z-[1] inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] px-2.5 font-mono text-[11px] font-bold tracking-[0.16em] text-[hsl(var(--brand-navy-950))]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative min-h-[11rem] flex-shrink-0 sm:min-h-[12rem]">
        <div className={cn("p-5 sm:p-6", revealDefault)}>
          <h3 className="line-clamp-2 font-serif text-xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-[1.35rem]">
            {title}
          </h3>

          <button
            type="button"
            className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-on-light-muted lg:hidden"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-label={`${expanded ? "Hide" : "Show"} details for ${title}`}
          >
            {expanded ? "Hide details" : "View details"}
            <ChevronDown className={cn("h-3.5 w-3.5 transition", expanded && "rotate-180")} aria-hidden />
          </button>

          <span className="mt-3 hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-on-light-muted lg:inline-flex">
            Hover for details
          </span>
        </div>

        <div className={revealPanel} aria-hidden={!expanded}>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{description}</p>
          {points.length > 0 ? (
            <ul className="mt-4 space-y-2.5 border-t border-[hsl(var(--border-light))] pt-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-snug text-on-light-secondary">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-1.5 self-start text-[10px] font-semibold uppercase tracking-[0.16em] text-on-light-muted lg:hidden"
            onClick={() => setExpanded(false)}
          >
            Close
            <ChevronDown className="h-3.5 w-3.5 rotate-180" aria-hidden />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceHoverCard;
