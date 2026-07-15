import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type GazetteHeroAsideProps = {
  reduceMotion: boolean | null;
  hidden: { opacity: number; y?: number } | false;
  show: { opacity: number; y?: number };
  transition: (delay?: number) => { duration: number; delay: number; ease: readonly [number, number, number, number] };
  eyebrow: string;
  title: string;
  meta?: string;
  linkTo: string;
  linkLabel?: string;
  thumb?: ReactNode;
  doodleAlt?: string;
};

const GazetteHeroAside = ({
  reduceMotion,
  hidden,
  show,
  transition,
  eyebrow,
  title,
  meta,
  linkTo,
  linkLabel = "Read issue",
  thumb,
  doodleAlt = "Publication illustration",
}: GazetteHeroAsideProps) => (
  <motion.div
    initial={hidden}
    animate={show}
    transition={transition(0.1)}
    className="relative mx-auto w-full max-w-[min(100%,380px)] lg:mx-0 lg:max-w-none lg:justify-self-end"
  >
    <motion.img
      src="/doodles/Bookmarks-pana.svg"
      alt={doodleAlt}
      className="relative z-10 mx-auto h-40 w-full max-w-[260px] object-contain sm:h-48 lg:mx-0 lg:h-52 lg:max-w-[300px]"
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      initial={hidden}
      animate={show}
      transition={transition(0.18)}
      className="relative z-20 mx-auto mt-3 max-w-[280px] overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-3.5 shadow-[0_18px_44px_rgba(26,22,51,0.1)] sm:max-w-[300px] lg:absolute lg:-bottom-2 lg:-left-4 lg:mt-0 lg:max-w-[260px]"
    >
      <div className="flex gap-3">
        {thumb}
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
            {eyebrow}
          </p>
          <p className="mt-1 line-clamp-2 text-xs font-semibold leading-snug text-on-light">{title}</p>
          {meta ? <p className="mt-0.5 text-[11px] text-on-light-muted">{meta}</p> : null}
          <Link
            to={linkTo}
            className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[hsl(var(--brand-gold-600))] hover:underline"
          >
            {linkLabel}
            <ArrowUpRight className="h-3 w-3" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default GazetteHeroAside;
