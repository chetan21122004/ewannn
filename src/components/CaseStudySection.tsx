import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Lightbulb, Trophy } from "lucide-react";
import factoryImg from "@/assets/case-study-factory.jpg";

const steps = [
  { icon: AlertCircle, label: "Problem", text: "Japanese manufacturer faced regulatory complexity and a critical language gap entering India.", color: "text-primary" },
  { icon: Lightbulb, label: "Solution", text: "Ewan handled full market entry — entity setup, compliance, liaison, and on-the-ground language support.", color: "text-accent" },
  { icon: Trophy, label: "Outcome", text: "End-to-end execution. Operational launch within months, not years.", color: "text-primary" },
];

const CaseStudySection = () => {
  return (
    <section id="media" className="py-10 lg:py-32 relative overflow-hidden section-navy-purple">
      <span id="case-study" className="sr-only">Case Study</span>
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-10 -right-40" />
      <div className="absolute inset-0 dots-pattern-purple opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card-purple text-accent text-xs font-medium tracking-wider uppercase mb-5">
            Success Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Japanese Manufacturer <span className="gradient-text italic">Entered India</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-primary/10 shadow-gold-lg">
              <img src={factoryImg} alt="Manufacturing facility in India" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-5 p-6 rounded-2xl glass-card border border-primary/10"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl glass-card-gold flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </motion.div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary/80 font-semibold mb-1">{step.label}</p>
                    <p className="text-foreground/80 leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, x: 4 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gold-gradient text-background font-semibold text-sm tracking-wider uppercase card-shine shadow-gold-md"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
