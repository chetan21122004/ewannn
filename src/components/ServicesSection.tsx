import { Languages, Mic, Volume2, Globe, FileText, Headphones, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import StitchScrollSection from "./StitchScrollSection";
import { TranslateDocAnimation } from "./LottieAnimations";

const services = [
  { icon: Languages, title: "Translation", desc: "Deliver your products and services with precise information for your target audience. Legal, technical, and creative translations in 50+ languages.", features: ["Legal & Technical", "Marketing Copy", "50+ Languages"] },
  { icon: Mic, title: "Interpretation", desc: "Real-time spoken language services — transmitting words, tone, inflection, and intent instantly with native-level fluency.", features: ["Simultaneous", "Consecutive", "Remote/On-site"] },
  { icon: Volume2, title: "Voiceover Services", desc: "Professional multilingual voiceover recordings with native speakers for e-learning, ads, documentaries, and corporate content.", features: ["Native Speakers", "Studio Quality", "Multi-format"] },
  { icon: Globe, title: "Website Localization", desc: "Adapt your website for global markets. Beyond translation — cultural adaptation of content, images, and user experience.", features: ["UI/UX Adaptation", "SEO Optimization", "Cultural Nuance"] },
  { icon: FileText, title: "Transcription", desc: "Convert audio and video content into accurate text across multiple languages with fast turnaround times.", features: ["Audio/Video", "Multi-language", "Fast Delivery"] },
  { icon: Headphones, title: "Subtitling & Captioning", desc: "Professional subtitle and caption services for video content, ensuring accessibility and global reach.", features: ["SDH & CC", "Time-coded", "Multi-format"] },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 dots-pattern-dark pointer-events-none opacity-50" />

      {/* Glow orbs */}
      <motion.div
        className="glow-orb w-80 h-80 bg-gold/8 top-20 left-0 -translate-x-1/3"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="glow-orb w-64 h-64 bg-purple-500/5 bottom-20 right-0 translate-x-1/4"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Lottie accent */}
      <div className="absolute left-5 bottom-20 hidden lg:block pointer-events-none opacity-10">
        <TranslateDocAnimation className="w-56 h-56" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <StitchScrollSection direction="up">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full frosted-glass text-gold text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Comprehensive Language <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-primary-foreground/55 max-w-2xl mx-auto text-lg">
              From document translation to live interpretation, we offer end-to-end language services tailored to your business needs.
            </p>
          </motion.div>
        </StitchScrollSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 30px 60px -15px rgba(208,170,55,0.15)",
              }}
              className="group relative p-8 rounded-2xl frosted-glass hover:bg-primary-foreground/5 transition-all duration-500 cursor-pointer card-shine"
              style={{ perspective: "800px" }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/5 via-transparent to-purple-500/3" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center shadow-gold-sm"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-7 h-7 text-navy" />
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-foreground/5 group-hover:bg-gold/10 transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4 text-primary-foreground/25 group-hover:text-gold transition-colors duration-300" />
                  </motion.div>
                </div>

                <h3 className="font-serif font-bold text-xl text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/45 text-sm leading-relaxed mb-5">{service.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, fi) => (
                    <motion.span
                      key={f}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + fi * 0.05 + 0.3 }}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gold/8 text-gold/80 border border-gold/10"
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
