import { useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type PartnerRevealCardProps = {
  type: string;
  name: string;
  description: string;
  logo: string;
  logoAlt: string;
  link?: string;
  accent?: "purple" | "gold" | "none";
  featured?: boolean;
  className?: string;
};

const PartnerLogo = ({
  src,
  alt,
  name,
  className,
}: {
  src: string;
  alt: string;
  name: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={className}
    onError={(event) => {
      if (!event.currentTarget.dataset.fallbackApplied) {
        event.currentTarget.dataset.fallbackApplied = "true";
        event.currentTarget.src = "/placeholder.svg";
        event.currentTarget.alt = name;
      }
    }}
  />
);

const accentBarClass = {
  purple: "bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))]",
  gold: "bg-gradient-to-r from-[hsl(var(--brand-gold-500))] to-[hsl(var(--brand-gold-600))]",
  none: "bg-[hsl(var(--border-light))]",
} as const;

const TypeBadge = ({ type, className }: { type: string; className?: string }) => (
  <span
    className={cn(
      "inline-flex w-fit rounded-full bg-[hsl(var(--brand-purple-700)/0.08)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]",
      className,
    )}
  >
    {type}
  </span>
);

const PartnerRevealCard = ({
  type,
  name,
  description,
  logo,
  logoAlt,
  link,
  accent = "purple",
  featured = false,
  className,
}: PartnerRevealCardProps) => {
  const [revealed, setRevealed] = useState(false);

  const open = () => setRevealed(true);
  const close = () => setRevealed(false);
  const toggle = () => setRevealed((value) => !value);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
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
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_12px_40px_rgba(20,18,47,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(20,18,47,0.1)]",
        featured && "rounded-[2rem] shadow-[0_24px_70px_rgba(20,18,47,0.08)]",
        className,
      )}
    >
      {accent !== "none" ? <div className={cn("h-1.5 w-full", accentBarClass[accent])} aria-hidden /> : null}

      <div
        role="button"
        tabIndex={0}
        aria-expanded={revealed}
        aria-label={`${logoAlt} - ${revealed ? "hide details" : "show details"}`}
        className={cn(
          "relative block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] focus-visible:ring-offset-2",
          featured ? "min-h-[240px] lg:min-h-[220px]" : "min-h-[220px] sm:min-h-[240px]",
        )}
        onClick={toggle}
        onKeyDown={onKeyDown}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <div
          className={cn(
            "flex h-full transition duration-300",
            featured ? "min-h-[220px] flex-col lg:min-h-[220px] lg:flex-row lg:items-stretch" : "flex-col items-center justify-center",
            revealed ? "opacity-0" : "opacity-100",
          )}
        >
          <div
            className={cn(
              "flex flex-1 items-center justify-center",
              featured
                ? "min-h-[140px] w-full border-b border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-8 py-8 lg:min-h-0 lg:w-[280px] lg:shrink-0 lg:border-b-0 lg:border-r"
                : "min-h-[120px] w-full px-8 py-7",
            )}
          >
            <PartnerLogo
              src={logo}
              alt={logoAlt}
              name={name}
              className={cn(
                "w-full object-contain transition duration-300 group-hover:scale-[1.03]",
                featured ? "max-h-20 max-w-[220px]" : "max-h-16 max-w-[220px]",
              )}
            />
          </div>

          <div
            className={cn(
              "flex flex-col justify-center",
              featured ? "px-6 py-6 lg:flex-1 lg:px-10 lg:py-8" : "w-full px-6 pb-7 pt-1 text-center",
            )}
          >
            <TypeBadge type={type} className={featured ? undefined : "mx-auto"} />
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[hsl(var(--brand-navy-950))] via-[hsl(var(--brand-navy-950)/0.96)] to-[hsl(var(--brand-navy-950)/0.88)] p-6 text-white transition duration-300 sm:p-7",
            featured && "lg:justify-center lg:p-10",
            revealed ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
          )}
        >
          <span className="inline-flex w-fit rounded-full bg-[hsl(var(--brand-gold-500)/0.18)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-500))]">
            {type}
          </span>
          <p className="mt-4 max-h-[40vh] overflow-y-auto text-sm leading-relaxed text-white/88 sm:text-[0.9375rem]">
            {description}
          </p>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-[hsl(var(--brand-gold-500))] transition hover:text-white"
            >
              Visit Website
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default PartnerRevealCard;
