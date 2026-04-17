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
    <section className="py-10 lg:py-32 relative overflow-hidden section-navy">
      <div className="glow-orb glow-orb-gold w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
      <div className="absolute inset-0 dots-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-primary text-xs font-medium tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Voices from <span className="gradient-text italic">Across Borders</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="w-20 h-20 text-primary/15 mx-auto mb-6" />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-foreground leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <footer>
                <p className="text-base font-semibold text-primary">{t.author}</p>
                <p className="text-sm text-muted-foreground tracking-wide">{t.company}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass-card-gold flex items-center justify-center text-primary hover:text-background hover:bg-primary transition-all"
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
                    i === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass-card-gold flex items-center justify-center text-primary hover:text-background hover:bg-primary transition-all"
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
