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
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-6">
        <StitchScrollSection direction="up">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-gold text-sm font-medium mb-4">Testimonials</span>
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
                y: -10,
                scale: 1.03,
                boxShadow: "0 30px 60px -15px rgba(208,170,55,0.15)",
              }}
              className="p-8 rounded-2xl glass-card hover:bg-primary-foreground/5 transition-colors duration-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
              >
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
              </motion.div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.4 + j * 0.08, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">{t.text}</p>
              <div>
                <p className="font-semibold text-primary-foreground">{t.author}</p>
                <p className="text-sm text-primary-foreground/40">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
