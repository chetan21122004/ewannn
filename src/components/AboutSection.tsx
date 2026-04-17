import { Globe, Target, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import teamMale from "@/assets/team-male.jpg";
import teamFemale from "@/assets/team-female.jpg";

const features = [
  { icon: Target, title: "Strategic Oriented", desc: "Direct access to seasoned partners for high-level market entry strategies." },
  { icon: Globe, title: "Global Network", desc: "A curated network of 836+ specialist linguists across every continent." },
  { icon: Users, title: "Client-Centric", desc: "Tailored solutions with dedicated project leads for every engagement." },
  { icon: Award, title: "Award-Winning", desc: "Recognized for excellence in cross-border consulting and translation." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-10 lg:py-32 relative overflow-hidden section-navy">
      {/* Grid bg */}
      <div className="absolute inset-0 dots-pattern pointer-events-none" />

      {/* Glow */}
      <div className="glow-orb glow-orb-purple w-[300px] h-[300px] top-20 -right-20" />
      <div className="glow-orb glow-orb-gold w-[200px] h-[200px] bottom-10 left-10" />

      {/* Corner brackets */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-primary/20 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 border-b-2 border-r-2 border-accent/20 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Team photos */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-accent/10 blur-2xl" />

            {/* Male photo */}
            <motion.div
              className="relative z-10 w-44 h-56 lg:w-52 lg:h-64 rounded-xl overflow-hidden shadow-gold-lg border-2 border-primary/20 -rotate-3"
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <img src={teamMale} alt="Co-founder" className="w-full h-full object-cover" loading="lazy" width={512} height={640} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>

            {/* Female photo */}
            <motion.div
              className="relative z-20 w-44 h-56 lg:w-52 lg:h-64 rounded-xl overflow-hidden shadow-gold-lg border-2 border-accent/20 rotate-3 -ml-8 mt-8"
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <img src={teamFemale} alt="Co-founder" className="w-full h-full object-cover" loading="lazy" width={512} height={640} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Leadership & <span className="gradient-text-purple">Vision</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded by industry forerunners and deep experts in cross-border trade and linguistics, EWAN was built on the principle that global success is local at its core.
            </p>

            {/* Feature items with animations */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="flex gap-4 p-4 rounded-xl glass-card hover:glass-card-gold transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <f.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-serif font-bold text-foreground mb-1 text-sm">{f.title}</h4>
                    <p className="text-muted-foreground text-xs">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;