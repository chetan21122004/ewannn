import { useEffect, useRef, useState, type KeyboardEvent } from "react";
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
  logoClassName?: string;
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
  logoClassName,
  className,
}: PartnerRevealCardProps) => {
  const [revealed, setRevealed] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const open = () => setRevealed(true);
  const close = () => setRevealed(false);
  const toggle = () => setRevealed((value) => !value);

  useEffect(() => {
    if (!revealed) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target;
      if (!(target instanceof Node) || !cardRef.current?.contains(target)) {
        close();
      }
    };

    const handleKeyDown = (event: Event) => {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [revealed]);

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
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_10px_28px_hsl(var(--brand-navy-950)/0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.28)] hover:shadow-[0_18px_40px_hsl(var(--brand-navy-950)/0.1)] sm:rounded-[1.35rem]",
        revealed && "border-[hsl(var(--brand-purple-500)/0.35)]",
        className,
      )}
    >
      {accent !== "none" ? <div className={cn("h-1.5 w-full", accentBarClass[accent])} aria-hidden /> : null}

      <div
        role="button"
        tabIndex={0}
        aria-expanded={revealed}
        aria-label={`${logoAlt} — ${revealed ? "hide" : "show"} partnership details`}
        onClick={toggle}
        onKeyDown={onKeyDown}
        onMouseEnter={open}
        onMouseLeave={close}
        className="relative flex min-h-[200px] w-full cursor-pointer flex-col items-center justify-center px-5 py-6 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] focus-visible:ring-offset-2 sm:min-h-[220px] sm:px-6 sm:py-7"
      >
        <div
          className={cn(
            "flex w-full flex-col items-center transition duration-300",
            revealed ? "pointer-events-none invisible opacity-0" : "visible opacity-100",
          )}
        >
          <div className="flex h-[88px] w-full max-w-[300px] items-center justify-center sm:h-[96px]">
            <PartnerLogo
              src={logo}
              alt={logoAlt}
              name={name}
              className={cn(
                "max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.03]",
                logoClassName ?? "max-h-14 w-auto sm:max-h-16",
              )}
            />
          </div>

          <TypeBadge type={type} className="mt-4" />
        </div>

        <div
          className={cn(
            "absolute inset-0 z-20 flex flex-col overflow-hidden border border-transparent bg-white p-4 text-left transition duration-300 sm:p-5",
            revealed ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-1 opacity-0",
          )}
        >
          <div className="flex min-h-0 flex-1 flex-col">
            <TypeBadge type={type} />

            <h3 className="mt-3 font-serif text-base font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-lg">
              {name}
            </h3>

            <p className="mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain text-xs leading-relaxed text-on-light-secondary sm:text-sm">
              {description}
            </p>
          </div>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[hsl(var(--brand-purple-700))] hover:underline sm:text-xs"
            >
              Visit Website
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default PartnerRevealCard;
