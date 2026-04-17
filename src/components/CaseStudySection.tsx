import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import caseStudyImg from "@/assets/case-study-factory.jpg";

const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const CaseStudySection = () => {
  return (
    <section id="case-study" className="py-24 lg:py-32 relative section-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-sm" />
              <div className="relative overflow-hidden rounded-sm shadow-soft-lg">
                <img
                  src={caseStudyImg}
                  alt="Japanese Heavy Industries — manufacturing facility"
                  className="w-full h-[420px] lg:h-[520px] object-cover grayscale-[0.2]"
                  loading="lazy"
                  width={800}
                  height={520}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="eyebrow mb-5">Case Study</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 leading-[1.15]">
              Scale-up: Japanese
              <br />
              <span className="italic gradient-text">Heavy Industries.</span>
            </h2>
            <p className="text-body text-lg leading-relaxed mb-10 max-w-xl">
              EWAN partnered with a top-tier Japanese manufacturer on EMEA expansion —
              streamlining operations across 5 countries in 6 months while preserving
              brand integrity in every market.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-border">
              <div>
                <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  <AnimatedCounter target={40} suffix="%" />
                </div>
                <div className="text-[11px] tracking-[0.18em] text-foreground/50 uppercase mt-2 font-semibold">
                  Time Saved
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  <AnimatedCounter target={12} suffix="M" prefix="€" />
                </div>
                <div className="text-[11px] tracking-[0.18em] text-foreground/50 uppercase mt-2 font-semibold">
                  Annual Revenue
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  <AnimatedCounter target={5} />
                </div>
                <div className="text-[11px] tracking-[0.18em] text-foreground/50 uppercase mt-2 font-semibold">
                  Countries
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-outline-dark">
              Read full case study
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
