import { ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ScrollSceneProps = {
  children: ReactNode;
  index: number;
  intensity?: number;
  /** Skip scroll transforms - required for nested `position: sticky` layouts */
  preserveLayout?: boolean;
};

const ScrollScene = ({ children, index, intensity = 1, preserveLayout = false }: ScrollSceneProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "end 8%"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    prefersReducedMotion ? [0, 0, 0, 0] : [55 * intensity, 0, 0, -28 * intensity],
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    prefersReducedMotion ? [0, 0, 0, 0] : index % 2 === 0 ? [8 * intensity, 0, 0, -6] : [-8 * intensity, 0, 0, 6],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.82, 1],
    prefersReducedMotion ? [1, 1, 1, 1] : [0.985, 1, 1, 0.992],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.14, 0.88, 1], [0.72, 1, 1, 0.9]);
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    prefersReducedMotion ? [0, 0, 0, 0] : [2 * intensity, 0, 0, 0],
  );
  const haloY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [60 * intensity, -80 * intensity],
  );
  const haloX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [index % 2 === 0 ? -18 : 18, index % 2 === 0 ? 18 : -18],
  );

  if (preserveLayout) {
    return (
      <div ref={ref} className="homepage-scroll-scene relative isolate overflow-visible">
        <motion.div
          aria-hidden="true"
          className={`pointer-events-none absolute top-1/2 z-0 hidden h-56 w-56 rounded-full blur-3xl lg:block ${
            index % 2 === 0 ? "left-[-7rem] bg-[hsl(var(--brand-gold-500)/0.09)]" : "right-[-7rem] bg-[hsl(var(--brand-gold-500)/0.11)]"
          }`}
          style={{ x: haloX, y: haloY }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className="homepage-scroll-scene relative isolate overflow-hidden" style={{ perspective: "1200px" }}>
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 z-0 hidden h-56 w-56 rounded-full blur-3xl lg:block ${
          index % 2 === 0 ? "left-[-7rem] bg-[hsl(var(--brand-gold-500)/0.09)]" : "right-[-7rem] bg-[hsl(var(--brand-gold-500)/0.11)]"
        }`}
        style={{ x: haloX, y: haloY }}
      />
      <motion.div
        className="relative z-10 will-change-transform"
        style={{ y, x, scale, opacity, rotateX, transformOrigin: "center top" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollScene;
