import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import LanguageMarquee from "@/components/LanguageMarquee";
import WhyEwanSection from "@/components/WhyEwanSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <LanguageMarquee />
      <SectionDivider variant="wave" fromDark />
      <AboutSection />
      <StatsSection />
      <SectionDivider variant="curve" />
      <ServicesSection />
      <SectionDivider variant="wave" fromDark flip />
      <WhyEwanSection />
      <SectionDivider variant="slant" />
      <TestimonialsSection />
      <SectionDivider variant="curve" fromDark flip />
      <ContactSection />
      <SectionDivider variant="wave" />
      <Footer />
    </div>
  );
};

export default Index;
