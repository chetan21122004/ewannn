import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarClock } from "lucide-react";

const AskSohamFloatingButton = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  if (pathname === "/ask-soham" || pathname.startsWith("/ask-soham/")) {
    return null;
  }

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-[47] right-4 bottom-[calc(9.5rem+env(safe-area-inset-bottom,0px))] lg:bottom-[6.25rem] lg:right-8"
    >
      <motion.div whileHover={reduceMotion ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.96 }}>
        <Link
          to="/ask-soham"
          aria-label={t("askSohamFloating.ariaLabel")}
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-[hsl(var(--brand-gold-600)/0.35)] bg-[hsl(var(--brand-gold-500))] text-[hsl(var(--brand-navy-950))] shadow-[0_10px_28px_-8px_hsl(var(--brand-gold-500)/0.55)] transition-[box-shadow,filter] duration-300 hover:brightness-105 hover:shadow-[0_14px_32px_-8px_hsl(var(--brand-gold-500)/0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-gold-500)/0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--surface-light-50))]"
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[hsl(var(--brand-navy-950)/0.08)]"
            aria-hidden
          />
          <CalendarClock className="h-[1.55rem] w-[1.55rem]" strokeWidth={2.25} aria-hidden />
          <span className="pointer-events-none absolute bottom-full right-0 mb-2.5 hidden whitespace-nowrap rounded-xl border border-[hsl(var(--border-light))] bg-white px-3 py-2 text-xs font-semibold leading-none text-[hsl(var(--brand-navy-950))] opacity-0 shadow-[0_12px_28px_-12px_rgba(15,23,42,0.22)] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 lg:block">
            {t("askSohamFloating.tooltip")}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AskSohamFloatingButton;
