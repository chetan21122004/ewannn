import { ArrowRight, Calendar, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-40 relative section-dark overflow-hidden">
      {/* Faint gold radial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(44 65% 52%), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          className="eyebrow justify-center mb-8 inline-flex"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's talk
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-7xl font-serif font-semibold text-on-dark mb-8 leading-[1.1] max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to expand your
          <br />
          <span className="italic" style={{ color: "hsl(var(--gold))" }}>global footprint?</span>
        </motion.h2>

        <motion.p
          className="text-on-dark-muted text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Book a 15-minute consultation with Soham — no obligation,
          no sales pitch. Just a conversation about your next market.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="mailto:soham@ewan.co.in?subject=15 Min Consultation" className="btn-gold">
            <Calendar className="w-4 h-4" />
            Ask Soham — 15 Min Free
          </a>
          <a href="mailto:info@ewan.co.in" className="btn-outline-light">
            <Mail className="w-4 h-4" />
            info@ewan.co.in
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
