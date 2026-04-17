import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Languages } from "lucide-react";

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: x, top: y, width: size, height: size, background: "hsl(70 100% 50% / 0.35)" }}
    animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 lg:py-32 relative overflow-hidden hero-gradient">
      <div className="glow-orb glow-orb-gold w-[500px] h-[500px] -top-40 left-1/4" />
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] -bottom-40 right-1/4" />

      <FloatingParticle delay={0} x="15%" y="30%" size={5} />
      <FloatingParticle delay={1.5} x="80%" y="40%" size={4} />
      <FloatingParticle delay={2.5} x="60%" y="70%" size={6} />
      <FloatingParticle delay={0.8} x="30%" y="80%" size={4} />
      <FloatingParticle delay={3} x="85%" y="20%" size={3} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(212,255,0,0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(212,255,0,0.24) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-block text-xs uppercase tracking-[0.4em] text-primary/80 font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ◆ Let's Begin ◆
          </motion.span>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to <span className="gradient-text italic">Cross the Border?</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether you're entering India, expanding globally, or need world-class language services — let's talk.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="mailto:hello@ewan.com?subject=Market Entry"
              whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(212,255,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full gold-gradient text-background font-semibold text-sm tracking-wider uppercase card-shine shadow-gold-md"
            >
              <Sparkles className="w-4 h-4" />
              Start Market Entry
            </motion.a>
            <motion.a
              href="mailto:hello@ewan.com?subject=Language Quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-accent/40 text-foreground font-semibold text-sm tracking-wider uppercase hover:bg-accent/10 transition-colors"
            >
              <Languages className="w-4 h-4" />
              Get Language Quote
            </motion.a>
            <motion.a
              href="mailto:soham@ewan.com?subject=15 Min Free Call"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-primary font-semibold text-sm tracking-wider uppercase group"
            >
              <MessageCircle className="w-4 h-4" />
              Ask Soham
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 pt-8 border-t border-primary/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
              India · Southeast Asia · East Asia · Latin America · Africa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
