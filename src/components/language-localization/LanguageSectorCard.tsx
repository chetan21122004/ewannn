import { useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Plus, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type LanguageSectorItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

type LanguageSectorCardProps = {
  sector: LanguageSectorItem;
  index: number;
  hidden: { opacity: number; y?: number };
  show: { opacity: number; y?: number };
  transition: (delay?: number) => { duration: number; delay: number; ease: readonly [number, number, number, number] };
};

const LanguageSectorCard = ({
  sector,
  index,
  hidden,
  show,
  transition,
}: LanguageSectorCardProps) => {
  const [revealed, setRevealed] = useState(false);
  const Icon = sector.icon;

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

  const defaultState = cn(
    "flex flex-1 flex-col p-3 transition duration-300 sm:p-3.5",
    revealed ? "pointer-events-none invisible opacity-0" : "visible opacity-100",
  );

  const revealPanel = cn(
    "absolute inset-0 z-10 flex flex-col overflow-hidden border-t border-[hsl(var(--border-light))] bg-white p-3 transition duration-300 sm:p-3.5",
    revealed ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
  );

  return (
    <motion.article
      id={sector.id}
      initial={hidden}
      whileInView={show}
      viewport={{ once: true, margin: "-32px" }}
      transition={transition((index % 5) * 0.05)}
      role="button"
      tabIndex={0}
      aria-expanded={revealed}
      aria-label={`${sector.title} - ${revealed ? "hide details" : "show details"}`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      onMouseEnter={open}
      onMouseLeave={close}
      className={cn(
        "group relative flex h-[228px] cursor-pointer flex-col overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-white shadow-[0_8px_24px_hsl(var(--brand-navy-950)/0.06)] transition-shadow duration-300 hover:shadow-[0_14px_32px_hsl(var(--brand-navy-950)/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] focus-visible:ring-offset-2 sm:h-[240px] lg:h-[252px]",
        revealed && "border-[hsl(var(--brand-purple-500)/0.28)]",
      )}
    >
      <div className="relative h-[88px] shrink-0 overflow-hidden sm:h-[96px]">
        <img
          src={sector.image}
          alt=""
          aria-hidden
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition duration-500",
            revealed ? "scale-105" : "group-hover:scale-105",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.72)] via-[hsl(var(--brand-navy-950)/0.28)] to-[hsl(var(--brand-navy-950)/0.08)]" />

        <span
          className="pointer-events-none absolute top-2 left-2 h-2.5 w-2.5 border-t border-l border-white/35 transition-colors duration-300 group-hover:border-[hsl(var(--brand-gold-500)/0.7)]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute top-2 right-2 h-2.5 w-2.5 border-t border-r border-white/35 transition-colors duration-300 group-hover:border-[hsl(var(--brand-gold-500)/0.7)]"
          aria-hidden
        />

        <span className="absolute left-2.5 top-2.5 font-mono text-[9px] font-bold tracking-[0.18em] text-[hsl(var(--brand-gold-500))]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/12 text-white backdrop-blur-sm">
          <Icon className="h-3.5 w-3.5" aria-hidden />
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col bg-white">
        <div className={defaultState}>
          <h3 className="line-clamp-2 font-serif text-sm font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-[0.9375rem]">
            {sector.title}
          </h3>
          <p className="mt-auto flex items-center gap-1 pt-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-on-light-muted [@media(hover:hover)]:hidden">
            <Plus className="h-2.5 w-2.5" aria-hidden />
            Tap for details
          </p>
          <p className="mt-auto hidden items-center gap-1 pt-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-on-light-muted [@media(hover:hover)]:flex">
            Hover for details
          </p>
        </div>

        <div className={revealPanel}>
          <div className="flex items-start gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--brand-purple-700)/0.08)] text-[hsl(var(--brand-purple-700))]">
              <Icon className="h-3.5 w-3.5" aria-hidden />
            </div>
            <h3 className="min-w-0 font-serif text-xs font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-sm">
              {sector.title}
            </h3>
          </div>
          <p className="mt-2 min-h-0 flex-1 overflow-y-auto overscroll-contain text-xs leading-relaxed text-on-light-secondary sm:text-[13px] sm:leading-relaxed">
            {sector.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default LanguageSectorCard;
