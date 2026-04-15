import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StitchScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  rotateAmount?: number;
}

const StitchScrollSection = ({ children, className = "", direction = "up", rotateAmount = 2 }: StitchScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], direction === "up" ? [100, -100] : [0, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [80, -80] : direction === "right" ? [-80, 80] : [0, 0]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-rotateAmount, 0, rotateAmount]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, x, rotate, opacity, scale }}>
        {children}
      </motion.div>
    </div>
  );
};

export default StitchScrollSection;
