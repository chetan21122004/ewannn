import { useCallback, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type LiaisonServiceCardProps = {
  id: string;
  index: number;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  doodle: string;
  doodleAlt: string;
  crossRef?: { label: string; href: string };
  className?: string;
};

const LiaisonServiceCard = ({
  id,
  index,
  title,
  description,
  points,
  icon: Icon,
  doodle,
  crossRef,
  className,
}: LiaisonServiceCardProps) => {
  const [open, setOpen] = useState(false);
  const serial = String(index + 1).padStart(2, "0");

  const openPopup = useCallback(() => setOpen(true), []);
  const closePopup = useCallback(() => setOpen(false), []);

  const handlePointerEnter = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) openPopup();
  };

  const handlePointerLeave = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) closePopup();
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          id={id}
          className={cn(
            "theme-card-light card-shine scroll-mt-28 relative block w-full min-h-[12.5rem] cursor-pointer overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white text-left transition-shadow duration-300 sm:min-h-[13rem] sm:rounded-3xl",
            open && "border-[hsl(var(--brand-purple-500)/0.28)] shadow-[0_18px_40px_rgba(26,22,51,0.1)]",
            "hover:border-[hsl(var(--brand-purple-500)/0.28)] hover:shadow-[0_18px_40px_rgba(26,22,51,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.4)] focus-visible:ring-offset-2",
            className,
          )}
          onMouseEnter={handlePointerEnter}
          onMouseLeave={handlePointerLeave}
          aria-expanded={open}
          aria-label={title}
        >
          <div className="relative flex h-full flex-col p-5 sm:p-6">
            <div
              className="pointer-events-none absolute -right-2 -top-3 select-none font-mono text-[4.5rem] font-bold leading-none tracking-tight text-[hsl(var(--brand-purple-700)/0.07)] sm:text-[5rem]"
              aria-hidden
            >
              {serial}
            </div>

            <img
              src={doodle}
              alt=""
              aria-hidden
              className="pointer-events-none absolute bottom-4 right-2 h-20 w-20 object-contain opacity-[0.14] sm:h-24 sm:w-24"
              loading="lazy"
            />

            <div className="relative z-[1] flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-[0_8px_20px_hsl(var(--brand-purple-700)/0.25)]">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <span className="font-mono text-xl font-bold tracking-[0.06em] text-[hsl(var(--brand-purple-700))] sm:text-2xl">
                {serial}
              </span>
            </div>

            <h3 className="relative z-[1] mt-5 line-clamp-3 font-serif text-lg font-bold leading-snug text-on-light sm:text-xl">
              {title}
            </h3>
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="center"
        sideOffset={10}
        collisionPadding={16}
        className="z-[100] w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-0 shadow-[0_24px_64px_hsl(var(--brand-navy-950)/0.16)]"
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
      >
        <div className="relative shrink-0 overflow-hidden bg-[linear-gradient(135deg,hsl(var(--brand-navy-950))_0%,hsl(var(--brand-purple-800))_100%)] px-5 py-4">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light" aria-hidden />
          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-mono text-sm font-bold tracking-[0.12em] text-[hsl(var(--brand-gold-500))]">{serial}</p>
              <h3 className="mt-1 font-serif text-base font-bold leading-snug text-white">{title}</h3>
            </div>
            <button
              type="button"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
              onClick={closePopup}
              aria-label="Close details"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>

        <div className="max-h-[min(18rem,50vh)] overflow-y-auto overscroll-contain px-5 py-4">
          <p className="text-sm leading-relaxed text-on-light-secondary">{description}</p>

          <ul className="mt-4 space-y-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-3 py-2.5 text-xs leading-snug text-on-light-secondary sm:text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {crossRef ? (
            <a
              href={crossRef.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--brand-purple-700))] underline-offset-4 hover:underline sm:text-sm"
            >
              {crossRef.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : null}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LiaisonServiceCard;
