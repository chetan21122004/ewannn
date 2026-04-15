import { useEffect, useState } from "react";
import { ArrowRight, Globe, Languages, Mic } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { GlobeAnimation, PulseRingAnimation } from "./LottieAnimations";

const typingTexts = ["Translation", "Interpretation", "Voiceovers", "Localization"];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, textIndex]);

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </motion.div>

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }}
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-3/4 h-3/4 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, hsl(var(--gold-light)) 0%, transparent 70%)" }}
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating particles with jitter */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              opacity: 0.15 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, -(20 + Math.random() * 40), 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Lottie globe animation */}
      <div className="absolute right-10 top-1/4 hidden lg:block pointer-events-none opacity-20">
        <GlobeAnimation className="w-64 h-64" />
      </div>
      <div className="absolute left-20 bottom-1/4 hidden lg:block pointer-events-none opacity-15">
        <PulseRingAnimation className="w-40 h-40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <motion.div
          className="max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Globe className="w-4 h-4 text-gold" />
            </motion.div>
            <span className="text-sm text-primary-foreground/70">Bridging Languages Since 2020</span>
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6"
          >
            <span className="text-primary-foreground">Empowering Global</span>
            <br />
            <span className="text-primary-foreground">Communication with</span>
            <br />
            <span className="gradient-text min-h-[1.2em] inline-block">
              {displayed}
              <motion.span
                className="inline-block w-[3px] h-[0.8em] bg-gold ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="text-lg sm:text-xl text-primary-foreground/60 max-w-2xl mb-10"
          >
            Expert language solutions connecting businesses across cultures.
            From precise translations to real-time interpretation — we are your bridge to the world.
          </motion.p>

          <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(208,170,55,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full gold-gradient text-navy font-semibold text-base transition-all duration-300"
            >
              Explore Services
              <motion.span className="inline-block" whileHover={{ x: 5 }}>
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card text-primary-foreground font-medium transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Floating service icons */}
          <motion.div
            variants={fadeUpItem}
            className="hidden lg:flex gap-6 mt-16"
          >
            {[
              { icon: Languages, label: "50+ Languages" },
              { icon: Mic, label: "Live Interpretation" },
              { icon: Globe, label: "Global Reach" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card cursor-default"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.15, duration: 0.6 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  <item.icon className="w-5 h-5 text-gold" />
                </motion.div>
                <span className="text-sm text-primary-foreground/70">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-primary-foreground/40 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-primary-foreground/20 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-gold"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
