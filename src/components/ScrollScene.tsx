import { ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ScrollSceneProps = {
  children: ReactNode;
  index: number;
  intensity?: number;
};

const ScrollScene = ({ children, index, intensity = 1 }: ScrollSceneProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "end 8%"],
  });

  const y = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], prefersReducedMotion ? [0, 0, 0, 0] : [34 * intensity, 0, 0, -18 * intensity]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.82, 1], prefersReducedMotion ? [1, 1, 1, 1] : [0.99, 1, 1, 0.995]);
  const opacity = useTransform(scrollYProgress, [0, 0.14, 0.88, 1], [0.84, 1, 1, 0.94]);
  const haloY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [36 * intensity, -46 * intensity]);
  const haloX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [index % 2 === 0 ? -18 : 18, index % 2 === 0 ? 18 : -18]);

  return (
    <div ref={ref} className="homepage-scroll-scene relative isolate overflow-hidden">
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 z-0 hidden h-56 w-56 rounded-full blur-3xl lg:block ${
          index % 2 === 0 ? "left-[-7rem] bg-[hsl(var(--brand-purple-500)/0.1)]" : "right-[-7rem] bg-[hsl(var(--brand-gold-500)/0.11)]"
        }`}
        style={{ x: haloX, y: haloY }}
      />
      <motion.div className="relative z-10 will-change-transform" style={{ y, scale, opacity }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollScene;
