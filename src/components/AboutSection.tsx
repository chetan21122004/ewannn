import { BookOpen, Award, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import StitchScrollSection from "./StitchScrollSection";
import { ChatBubbleAnimation } from "./LottieAnimations";

const values = [
  { icon: BookOpen, title: "E – 良い (Good)", desc: "From Japanese, representing excellence in every translation" },
  { icon: Target, title: "WAN – 万 (Bridge)", desc: "From Chinese, connecting cultures and bridging communication" },
  { icon: Award, title: "Founded 2020", desc: "Born in Pune, serving globally with passion and precision" },
  { icon: Users, title: "Expert Team", desc: "Native linguists ensuring cultural accuracy and nuance" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef } = useScrollReveal();

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(40 25% 95%) 100%)`,
      }}
    >
      {/* Background image & pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url('/about-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 dots-pattern pointer-events-none opacity-40" />

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 bg-gold/10 -top-20 right-0 translate-x-1/3" />
      <div className="glow-orb w-64 h-64 bg-purple-400/5 bottom-10 left-10" />

      {/* Lottie accent */}
      <div className="absolute right-10 top-20 hidden lg:block pointer-events-none opacity-10">
        <ChatBubbleAnimation className="w-48 h-48" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <StitchScrollSection direction="up">
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4 border border-gold/15"
            >
              About Ewan
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Where Language Is a <span className="gradient-text">Bridge</span>, Not a Barrier
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The word "Ewan" is the amalgamation of the Japanese letter "E" meaning good and the Traditional Chinese word "WAN" meaning bridge — connecting two good things.
            </p>
          </div>
        </StitchScrollSection>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            Ewan Business Solutions is a team of language professionals and enthusiasts who are passionate about their language. Headquartered in Pune, Maharashtra, India with presence in the Philippines, we provide translation, interpretation, multilingual voiceovers, and website localization services across Oriental, Indian, African, and European languages.
          </p>
        </motion.div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                rotateY: 5,
                boxShadow: "0 30px 60px -12px rgba(208,170,55,0.12)",
              }}
              className="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gold/8 hover:border-gold/25 transition-all duration-500 card-shine-light shadow-premium"
            >
              <motion.div
                className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 shadow-gold-sm"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-6 h-6 text-navy" />
              </motion.div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
