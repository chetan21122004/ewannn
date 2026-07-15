import { useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
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
      </div>

      <div
        className={cn(
          "absolute inset-0 flex flex-col bg-white p-4 transition duration-300 sm:p-6",
          revealed ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <div className="flex items-start gap-2.5">
          <span className="inline-flex h-7 min-w-[1.75rem] shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700)/0.1)] px-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
            <Icon className="h-4 w-4" aria-hidden />
          </div>
          <h3 className="min-w-0 flex-1 font-serif text-base font-bold leading-snug text-on-light sm:text-lg">
            {service.title}
          </h3>
        </div>
        <p className="mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain text-sm leading-relaxed text-on-light-secondary sm:text-[0.9375rem]">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
};

export default LanguageServiceCard;
