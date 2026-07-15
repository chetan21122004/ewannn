import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { HASH_TARGET_EVENT, getHashId } from "@/lib/hashNavigation";

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

const HASH_ANIM_MS = 2400;

const LanguageServiceCard = ({
  service,
  index,
  reduceMotion: reduceMotionProp,
  hidden,
  show,
  transition,
}: LanguageServiceCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const hashTimerRef = useRef<number | null>(null);
  const reduceMotionHook = useReducedMotion();
  const reduceMotion = reduceMotionProp || !!reduceMotionHook;
  const { hash } = useLocation();
  const hashId = getHashId(hash);
  const [revealed, setRevealed] = useState(false);
  const [hashAnimating, setHashAnimating] = useState(false);
  const Icon = service.icon;

  const clearHashTimer = () => {
    if (hashTimerRef.current !== null) {
      window.clearTimeout(hashTimerRef.current);
      hashTimerRef.current = null;
    }
  };

  const playHashAnimation = () => {
    clearHashTimer();
    setHashAnimating(true);
    hashTimerRef.current = window.setTimeout(() => setHashAnimating(false), HASH_ANIM_MS);
  };

  useEffect(() => {
    clearHashTimer();

    if (hashId !== service.id) {
      setHashAnimating(false);
      return;
    }

    playHashAnimation();
    return clearHashTimer;
  }, [hashId, service.id]);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ id: string }>).detail;
      if (detail?.id === service.id) {
        playHashAnimation();
      }
    };

    window.addEventListener(HASH_TARGET_EVENT, handler);
    return () => window.removeEventListener(HASH_TARGET_EVENT, handler);
  }, [service.id]);

  useEffect(() => {
    if (!revealed) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!cardRef.current?.contains(event.target as Node)) {
        setRevealed(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [revealed]);

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
      ref={cardRef}
      data-section-anchor={service.id}
      initial={hidden}
      whileInView={show}
      viewport={{ once: true, margin: "-48px" }}
      animate={
        hashAnimating && !reduceMotion
          ? {
              scale: [1, 1.04, 0.992, 1.012, 1],
              y: [0, -10, 4, -2, 0],
            }
          : undefined
      }
      transition={
        hashAnimating && !reduceMotion
          ? { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
          : transition((index % 3) * 0.08)
      }
      role="button"
      tabIndex={0}
      aria-expanded={revealed}
      aria-label={`${service.title} - ${revealed ? "hide details" : "show details"}`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      onMouseEnter={open}
      onMouseLeave={close}
      className={cn(
        "group relative scroll-mt-28 min-h-[220px] cursor-pointer overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_10px_28px_hsl(var(--brand-navy-950)/0.05)] transition-[border-color,box-shadow] duration-300 hover:border-[hsl(var(--brand-purple-500)/0.28)] hover:shadow-[0_18px_40px_hsl(var(--brand-navy-950)/0.10)] sm:min-h-[240px] sm:rounded-3xl",
        hashAnimating && "hash-target-highlight border-[hsl(var(--brand-purple-500)/0.55)]",
        revealed && "border-[hsl(var(--brand-purple-500)/0.35)]",
      )}
    >
      {hashAnimating ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(105deg,transparent_38%,hsl(var(--brand-gold-500)/0.22)_50%,transparent_62%)]"
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: ["-120%", "120%"], opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : null}

      <div
        className={cn(
          "relative z-10 flex h-full flex-col p-4 transition duration-300 sm:p-6",
          revealed ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <motion.span
            animate={hashAnimating && !reduceMotion ? { scale: [1, 1.12, 1] } : { scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700)/0.75)] sm:text-[11px] sm:tracking-[0.18em]"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm sm:h-11 sm:w-11">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </div>
        </div>

        <motion.img
          src={service.doodle}
          alt={service.doodleAlt}
          className="mx-auto mb-3 h-24 w-full max-w-[140px] object-contain sm:mb-4 sm:h-28 sm:max-w-[160px]"
          animate={
            hashAnimating && !reduceMotion
              ? { y: [0, -10, 0], scale: [1, 1.06, 1] }
              : reduceMotion
                ? undefined
                : { y: [0, -5, 0] }
          }
          transition={
            hashAnimating && !reduceMotion
              ? { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
              : { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }
          }
        />

        <h3 className="font-serif text-lg font-bold leading-snug text-on-light sm:text-xl">{service.title}</h3>
      </div>

      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col bg-white p-4 transition duration-300 sm:p-6",
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
