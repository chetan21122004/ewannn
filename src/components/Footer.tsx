import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles } from "lucide-react";

const navColumns = [
  {
    title: "Services",
    links: ["Market Entry", "Language & Localization", "Industries", "Case Studies"],
  },
  {
    title: "Company",
    links: ["About Us", "Founders", "Media", "Careers"],
  },
  {
    title: "Contact",
    links: ["Ask Soham — 15 Min Free", "hello@ewan.com", "+91 · India HQ"],
  },
];

const certifications = [
  { name: "ISO Certified", icon: ShieldCheck },
  { name: "CITLoB Member", icon: Award },
  { name: "Bhashini Empanelled", icon: Sparkles },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 section-navy-deep">
      <div className="absolute inset-0 dots-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Top: brand + nav */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <motion.span
              className="text-3xl font-serif font-bold gradient-text tracking-wider block mb-3"
              whileHover={{ scale: 1.05 }}
            >
              EWAN
            </motion.span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your cross-border market partner — combining market entry expertise with 125+ language capabilities.
            </p>
          </div>

          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary/80 font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-primary/10 pt-8 mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60 mb-4 text-center">Certifications & Ecosystem</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold text-sm text-foreground/80"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  {cert.name}
                </motion.div>
              );
            })}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card-purple text-sm text-foreground/80"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              Bhashik Skill Development
            </motion.div>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/50">
          <span>© 2024 EWAN Business Solutions. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
