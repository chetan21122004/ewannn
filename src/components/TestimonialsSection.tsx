import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import StitchScrollSection from "./StitchScrollSection";

const testimonials = [
  { text: "Ewan's translation accuracy is unmatched. They understood the cultural nuances of our Japanese documentation perfectly.", author: "Marketing Director", company: "Global Tech Corp", rating: 5 },
  { text: "Their interpretation services during our international conference were flawless. Highly professional team.", author: "Event Manager", company: "International Events Ltd", rating: 5 },
  { text: "Website localization by Ewan helped us increase our Asian market presence by 40%. Incredible work.", author: "CEO", company: "Digital Commerce Co.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dots-pattern-dark pointer-events-none opacity-40" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Glow orbs */}
      <div className="glow-orb w-72 h-72 bg-gold/6 top-10 right-10" />
      <div className="glow-orb w-48 h-48 bg-purple-500/4 bottom-20 left-20" />

      {/* Floating decorative quote */}
      <motion.div
        className="absolute top-20 left-10 hidden lg:block pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Quote className="w-32 h-32 text-gold/3" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 hidden lg:block pointer-events-none"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Quote className="w-24 h-24 text-gold/3 rotate-180" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <StitchScrollSection direction="up">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full frosted-glass text-gold text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Trusted by <span className="gradient-text">Businesses</span> Worldwide
            </h2>
          </motion.div>
        </StitchScrollSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0 30px 60px -15px rgba(208,170,55,0.12)",
              }}
              className="relative p-8 rounded-2xl frosted-glass hover:bg-primary-foreground/5 transition-all duration-500 card-shine"
            >
              {/* Decorative top stitch */}
              <motion.div
                className="absolute top-0 left-[15%] right-[15%] h-[2px]"
                style={{
                  background: "repeating-linear-gradient(90deg, hsl(40 85% 58% / 0.15) 0px, hsl(40 85% 58% / 0.15) 6px, transparent 6px, transparent 14px)",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
              />

              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
              >
                <Quote className="w-8 h-8 text-gold/25 mb-4" />
              </motion.div>

              {/* Star ratings with sparkle */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15 + 0.4 + j * 0.08,
                      type: "spring",
                      stiffness: 300,
                    }}
                    whileHover={{ scale: 1.4 }}
                  >
                    <Star className="w-4 h-4 fill-gold text-gold drop-shadow-sm" />
                  </motion.div>
                ))}
              </div>

              <p className="text-primary-foreground/65 mb-6 leading-relaxed">{t.text}</p>

              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-gold-sm text-navy font-bold text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {t.author[0]}
                </motion.div>
                <div>
                  <p className="font-semibold text-primary-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-primary-foreground/35">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
