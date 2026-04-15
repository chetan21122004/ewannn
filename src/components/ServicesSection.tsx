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
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Lottie accent */}
      <div className="absolute left-5 bottom-20 hidden lg:block pointer-events-none opacity-15">
        <TranslateDocAnimation className="w-56 h-56" />
      </div>

      <div className="container mx-auto px-6">
        <StitchScrollSection direction="up">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-gold text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Comprehensive Language <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
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
                y: -8,
                scale: 1.02,
                boxShadow: "0 30px 60px -15px rgba(208,170,55,0.2)",
              }}
              className="group relative p-8 rounded-2xl glass-card hover:bg-primary-foreground/10 transition-colors duration-500 cursor-pointer"
              style={{ perspective: "800px" }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/5 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-7 h-7 text-navy" />
                  </motion.div>
                  <motion.div whileHover={{ x: 3, y: -3 }}>
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground/30 group-hover:text-gold transition-colors duration-300" />
                  </motion.div>
                </div>

                <h3 className="font-serif font-bold text-xl text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed mb-5">{service.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold/80">{f}</span>
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
