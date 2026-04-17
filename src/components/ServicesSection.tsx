import { Globe, Languages, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Market Entry",
    desc: "Strategic counsel for entering complex regulatory landscapes — from feasibility to commercial launch in emerging and established markets.",
    points: ["Regulatory Compliance", "Partner Sourcing", "Cultural Strategy"],
  },
  {
    icon: Languages,
    title: "Language & Localization",
    desc: "Beyond translation: localization that resonates with multilingual audiences and meets industry-grade technical standards.",
    points: ["Technical Communication", "Creative Transcreation", "Learning & Development"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative section-light">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mb-5">What We Do</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-5">
            Two practices.<br />
            <span className="italic gradient-text">One global standard.</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            We work at the intersection of strategy and language — helping enterprises
            move into new markets with the precision their reputation demands.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card-luxury p-8 lg:p-10 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                  <s.icon className="w-5 h-5 text-background" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-foreground/30 group-hover:text-gold group-hover:rotate-45 transition-all duration-500" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-foreground mb-4">
                {s.title}
              </h3>
              <p className="text-body leading-relaxed mb-8">{s.desc}</p>

              <ul className="space-y-3 pt-6 border-t border-border">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span className="font-medium">{p}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="link-gold mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
