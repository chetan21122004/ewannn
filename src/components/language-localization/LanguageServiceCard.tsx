import { useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type LanguageServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  doodle: string;
  doodleAlt: string;
};

type LanguageServiceCardProps = {
  service: LanguageServiceItem;
  index: number;
  reduceMotion: boolean;
  hidden: { opacity: number; y?: number };
  show: { opacity: number; y?: number };
  transition: (delay?: number) => { duration: number; delay: number; ease: readonly [number, number, number, number] };
};

const LanguageServiceCard = ({
  service,
  index,
  reduceMotion,
  hidden,
  show,
  transition,
}: LanguageServiceCardProps) => {
  const [revealed, setRevealed] = useState(false);
  const Icon = service.icon;

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
    <motion.article
      id={service.id}
      initial={hidden}
      whileInView={show}
      viewport={{ once: true, margin: "-48px" }}
      transition={transition((index % 3) * 0.08)}
      role="button"
      tabIndex={0}
      aria-expanded={revealed}
      aria-label={`${service.title} - ${revealed ? "hide details" : "show details"}`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      onMouseEnter={open}
      onMouseLeave={close}
      className="group relative scroll-mt-28 min-h-[220px] cursor-pointer overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_10px_28px_hsl(var(--brand-navy-950)/0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_hsl(var(--brand-navy-950)/0.1)] sm:min-h-[240px] sm:rounded-3xl"
    >
      <div
        className={cn(
          "flex h-full flex-col p-4 transition duration-300 sm:p-6",
          revealed ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700)/0.75)] sm:text-[11px] sm:tracking-[0.18em]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm sm:h-11 sm:w-11">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </div>
        </div>

        <motion.img
          src={service.doodle}
          alt={service.doodleAlt}
          className="mx-auto mb-3 h-24 w-full max-w-[140px] object-contain sm:mb-4 sm:h-28 sm:max-w-[160px]"
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
        />

        <h3 className="font-serif text-lg font-bold leading-snug text-on-light sm:text-xl">{service.title}</h3>

        <p className="mt-auto flex items-center gap-1.5 pt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--brand-purple-700))] [@media(hover:hover)]:hidden">
          <Plus className="h-3.5 w-3.5" aria-hidden />
          Tap for details
        </p>
        <p className="mt-auto hidden items-center gap-1.5 pt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-on-light-muted [@media(hover:hover)]:flex">
          Hover for details
        </p>
      </div>

      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[hsl(var(--brand-navy-950))] via-[hsl(var(--brand-navy-950)/0.97)] to-[hsl(var(--brand-navy-950)/0.9)] p-4 text-white transition duration-300 sm:p-6",
          revealed ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
          {String(index + 1).padStart(2, "0")} · {service.title}
        </span>
        <p className="mt-3 max-h-[min(42vh,220px)] overflow-y-auto text-sm leading-relaxed text-white/88 sm:text-[0.9375rem]">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[hsl(var(--brand-gold-500))]">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </motion.article>
  );
};

export default LanguageServiceCard;
