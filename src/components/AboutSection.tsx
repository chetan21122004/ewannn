import { Target, Globe, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import teamMale from "@/assets/team-male.jpg";
import teamFemale from "@/assets/team-female.jpg";

const features = [
  { icon: Target, title: "Strategically oriented", desc: "Direct access to seasoned partners for high-level market entry." },
  { icon: Globe, title: "Global network", desc: "836+ specialist linguists across every continent." },
  { icon: Users, title: "Client-centric", desc: "Tailored engagements with dedicated project leadership." },
  { icon: Award, title: "Award-winning", desc: "Recognized for excellence in cross-border consulting." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative section-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - photos */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-sm shadow-soft-lg aspect-[3/4] mt-8">
                <img src={teamMale} alt="Co-founder" className="w-full h-full object-cover grayscale-[0.2]" loading="lazy" width={400} height={533} />
              </div>
              <div className="relative overflow-hidden rounded-sm shadow-soft-lg aspect-[3/4]">
                <img src={teamFemale} alt="Co-founder" className="w-full h-full object-cover grayscale-[0.2]" loading="lazy" width={400} height={533} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-gold/40 rounded-sm pointer-events-none" />
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="eyebrow mb-5">About EWAN</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 leading-[1.15]">
              Built by industry forerunners.
              <br />
              <span className="italic gradient-text">Trusted by global leaders.</span>
            </h2>
            <p className="text-body text-lg leading-relaxed mb-10 max-w-2xl">
              Founded by deep experts in cross-border trade and linguistics, EWAN was built
              on the principle that global success is local at its core — earned one
              market, one relationship at a time.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="flex gap-4 p-5 border border-border rounded-sm hover:border-gold/40 transition-colors duration-500"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div className="w-9 h-9 rounded-full bg-foreground/[0.04] flex items-center justify-center shrink-0 group">
                    <f.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm tracking-wide">{f.title}</h4>
                    <p className="text-body text-xs leading-relaxed">{f.desc}</p>
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
