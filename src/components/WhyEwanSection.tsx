import { Shield, Clock, Zap, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import StitchScrollSection from "./StitchScrollSection";
import { CheckmarkAnimation } from "./LottieAnimations";

const reasons = [
  { icon: Shield, title: "Accuracy Guaranteed", desc: "Our native linguists ensure every word captures the intended meaning with cultural precision." },
  { icon: Clock, title: "Fast Turnaround", desc: "Efficient processes and a global team ensure your projects are delivered on time, every time." },
  { icon: Zap, title: "Tech-Powered", desc: "We combine human expertise with cutting-edge language technology for superior results." },
  { icon: Heart, title: "Dedicated Support", desc: "A dedicated project manager for every engagement, ensuring seamless communication." },
];

const checklist = [
  "Oriental, Indian, African & European languages",
  "ISO-certified quality processes",
  "Confidential & secure handling",
  "Competitive pricing",
];

const WhyEwanSection = () => {
  return (
    <section
      id="why-ewan"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(38 28% 95%) 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dots-pattern pointer-events-none opacity-30" />

      {/* Glow orbs */}
      <div className="glow-orb w-80 h-80 bg-gold/8 bottom-0 left-0 translate-y-1/2 -translate-x-1/3" />
      <div className="glow-orb w-64 h-64 bg-purple-400/4 top-20 right-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <StitchScrollSection direction="left">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4 border border-gold/15">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Your Trusted Partner in <span className="gradient-text">Global Communication</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At Ewan, we don't just translate words — we bridge cultures. Our team of expert linguists brings deep understanding of language nuances to every project.
              </p>

              <ul className="space-y-4">
                {checklist.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-navy" />
                    </motion.div>
                    <span className="font-medium">{item}</span>

                    {/* Animated connecting line */}
                    {i < checklist.length - 1 && (
                      <motion.div
                        className="absolute left-[13px] mt-10 w-[2px] h-6"
                        style={{
                          background: "repeating-linear-gradient(180deg, hsl(40 85% 58% / 0.2) 0px, hsl(40 85% 58% / 0.2) 3px, transparent 3px, transparent 6px)",
                        }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StitchScrollSection>

          <div className="grid sm:grid-cols-2 gap-5 relative">
            {/* Lottie accent */}
            <div className="absolute -right-10 -top-10 pointer-events-none opacity-15 hidden lg:block">
              <CheckmarkAnimation className="w-32 h-32" />
            </div>

            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 30px 60px -12px rgba(208,170,55,0.12)",
                  borderColor: "rgba(208,170,55,0.25)",
                }}
                className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gold/8 transition-all duration-500 card-shine-light shadow-premium"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 shadow-gold-sm"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <reason.icon className="w-6 h-6 text-navy" />
                </motion.div>
                <h3 className="font-serif font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEwanSection;
