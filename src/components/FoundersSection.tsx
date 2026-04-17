import { motion } from "framer-motion";
import { Linkedin, Award, Briefcase, GraduationCap } from "lucide-react";
import maleImg from "@/assets/team-male.jpg";
import femaleImg from "@/assets/team-female.jpg";

const founders = [
  {
    name: "Soham Kakade",
    role: "Co-Founder & CEO",
    img: maleImg,
    bullets: [
      { icon: Briefcase, text: "60,000+ hours of professional interpretation" },
      { icon: GraduationCap, text: "Government of China scholarship recipient" },
      { icon: Award, text: "Boardroom-level cross-border experience" },
    ],
    linkedin: "#",
    accent: "gold",
  },
  {
    name: "Sukhada Kakade",
    role: "Co-Founder & Director",
    img: femaleImg,
    bullets: [
      { icon: Briefcase, text: "15+ years finance & compliance leadership" },
      { icon: Award, text: "Corporate governance expert" },
      { icon: GraduationCap, text: "Operations & regulatory strategist" },
    ],
    linkedin: "#",
    accent: "purple",
  },
];

const FoundersSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden section-navy-deep">
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] top-10 -left-40" />
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] bottom-10 -right-40" />
      <div className="absolute inset-0 dots-pattern opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-primary text-xs font-medium tracking-wider uppercase mb-5">
            The Founders
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Built by <span className="gradient-text italic">Cross-Border Operators</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Decades of combined experience in language, operations, finance, and compliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((f, i) => {
            const isGold = f.accent === "gold";
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-3xl ${isGold ? "glass-card-gold" : "glass-card-purple"} card-shine overflow-hidden`}
              >
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full border-[20px] ${isGold ? "border-primary/10" : "border-accent/10"}`} />

                <div className="relative flex items-start gap-5 mb-6">
                  <motion.div
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 ${isGold ? "border-primary/30" : "border-accent/30"} shadow-gold-md shrink-0`}
                    whileHover={{ scale: 1.05, rotate: -3 }}
                  >
                    <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{f.name}</h3>
                    <p className={`text-sm font-medium uppercase tracking-wider ${isGold ? "text-primary/90" : "text-accent/90"}`}>{f.role}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {f.bullets.map((b, bi) => {
                    const Icon = b.icon;
                    return (
                      <motion.li
                        key={bi}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + bi * 0.08 + 0.3 }}
                      >
                        <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${isGold ? "text-primary" : "text-accent"}`} />
                        <span>{b.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.a
                  href={f.linkedin}
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border ${
                    isGold ? "border-primary/30 text-primary hover:bg-primary/10" : "border-accent/30 text-accent hover:bg-accent/10"
                  } transition-colors`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
