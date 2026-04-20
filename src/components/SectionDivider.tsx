import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "slant" | "curve";
  flip?: boolean;
  fromDark?: boolean;
  className?: string;
  showStitch?: boolean;
}

const SectionDivider = ({
  variant = "wave",
  flip = false,
  fromDark = false,
  className = "",
  showStitch = true,
}: SectionDividerProps) => {
  const fillColor = fromDark ? "hsl(var(--surface-light-100))" : "hsl(var(--brand-navy-900))";
  const stitchColor = fromDark
    ? "hsl(var(--brand-purple-500) / 0.22)"
    : "hsl(var(--brand-purple-500) / 0.2)";

  const wavePath =
    "M0,64 C320,120 640,0 960,64 C1280,128 1600,20 1920,80 L1920,160 L0,160 Z";
  const slantPath = "M0,128 L1920,0 L1920,160 L0,160 Z";
  const curvePath =
    "M0,96 Q480,160 960,96 Q1440,32 1920,96 L1920,160 L0,160 Z";

  const pathMap = { wave: wavePath, slant: slantPath, curve: curvePath };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        marginTop: "-1px",
        marginBottom: "-1px",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      {/* Stitch line above divider */}
      {showStitch && (
        <motion.div
          className="absolute top-0 left-[8%] right-[8%] h-[2px] z-10"
          style={{
            background: `repeating-linear-gradient(90deg, ${stitchColor} 0px, ${stitchColor} 8px, transparent 8px, transparent 18px)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      <svg
        viewBox="0 0 1920 160"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: "80px" }}
      >
        <motion.path
          d={pathMap[variant]}
          fill={fillColor}
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
