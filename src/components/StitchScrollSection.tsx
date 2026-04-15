import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface StitchScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  rotateAmount?: number;
}

const StitchScrollSection = ({ children, className = "", direction = "up", rotateAmount = 1.5 }: StitchScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Spring physics for smoother motion
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const rawY = useTransform(scrollYProgress, [0, 1], direction === "up" ? [80, -80] : [0, 0]);
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [60, -60] : direction === "right" ? [-60, 60] : [0, 0]
  );
  const rawRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-rotateAmount, 0, rotateAmount]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.95]);

  const y = useSpring(rawY, springConfig);
  const x = useSpring(rawX, springConfig);
  const rotate = useSpring(rawRotate, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);
  const scale = useSpring(rawScale, springConfig);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, x, rotate, opacity, scale }}>
        {children}
      </motion.div>
    </div>
  );
};

export default StitchScrollSection;
