import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Ewan bridged language and operations seamlessly. They were our hands, ears, and voice in India.",
    author: "Operations Director",
    company: "Japanese Manufacturing Client",
  },
  {
    quote: "Reliable, precise, and deeply professional. Ewan understood both our business and the local context.",
    author: "Procurement Lead",
    company: "Tata Autocomp",
  },
  {
    quote: "Ewan's interpretation team made our cross-border meetings effortless. Strategic value beyond translation.",
    author: "Senior Executive",
    company: "Groupo Antolin",
  },
  {
    quote: "Speed, accuracy, and cultural depth. Ewan delivered exactly what we needed for global market research.",
    author: "Research Director",
    company: "Markets & Markets",
  },
  {
    quote: "From negotiations to documentation, Ewan handled every detail with care and precision.",
    author: "Founder",
    company: "Seasonz International",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-10 lg:py-32 relative overflow-hidden theme-section-soft">
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[300px] h-[300px] -top-16 right-10 opacity-8" />
      <div className="absolute inset-0 theme-grid-overlay-light opacity-14 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-on-light">
            Voices from{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-700))] via-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-cyan-500))] bg-clip-text text-transparent italic">
              Across Borders
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative rounded-3xl theme-card-light border border-[hsl(var(--border-light))] px-6 py-10 sm:px-10 lg:px-14">
          <Quote className="w-16 h-16 text-[hsl(var(--brand-purple-700)/0.22)] mx-auto mb-6" />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-[hsl(var(--text-on-light))] leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <footer>
                <p className="text-base font-semibold text-[hsl(var(--brand-purple-700))]">{t.author}</p>
                <p className="text-sm text-[hsl(var(--text-on-light-muted))] tracking-wide">{t.company}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.92)] flex items-center justify-center text-[hsl(var(--brand-purple-700))] hover:text-white hover:bg-[hsl(var(--brand-purple-700))] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-8 bg-[hsl(var(--brand-purple-700))]"
                      : "w-2 bg-[hsl(var(--brand-purple-700)/0.3)]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.92)] flex items-center justify-center text-[hsl(var(--brand-purple-700))] hover:text-white hover:bg-[hsl(var(--brand-purple-700))] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
