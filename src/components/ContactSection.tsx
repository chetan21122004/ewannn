import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-40 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(40 25% 97%) 0%, hsl(40 20% 96%) 100%)" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Decorative dashed arc */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.06]" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="280" fill="none" stroke="hsl(230 40% 14%)" strokeWidth="1" strokeDasharray="8 8" />
      </svg>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Top nav links */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-12 text-xs tracking-[0.15em] text-muted-foreground/60 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#" className="hover:text-foreground transition-colors">New Article</a>
          <span className="text-muted-foreground/20">|</span>
          <a href="#" className="hover:text-foreground transition-colors">Follow Us</a>
          <span className="text-muted-foreground/20">|</span>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Expand Your<br />Global Footprint?
        </motion.h2>

        {/* Underline swish + badge */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <svg width="120" height="20" viewBox="0 0 120 20" className="text-foreground/30">
            <path d="M5,15 Q60,0 115,15" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="px-3 py-1 rounded-full border border-gold/20 text-gold text-xs font-medium">INSIGHTS</span>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Join the world's leading brands in navigating the future of cross-border business.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <motion.a
            href="mailto:info@ewan.co.in"
            className="px-10 py-4 rounded-2xl bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-colors shadow-premium-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Strategy
          </motion.a>
          <a
            href="mailto:info@ewan.co.in?subject=15 Min Consultation"
            className="text-foreground font-bold text-base underline underline-offset-4 hover:text-gold transition-colors"
          >
            Ask EWAN — 15 Min Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
