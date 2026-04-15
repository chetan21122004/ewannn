import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ClientNetworkSection from "@/components/ClientNetworkSection";
import CaseStudySection from "@/components/CaseStudySection";
import SectorsSection from "@/components/SectorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ClientNetworkSection />
      <CaseStudySection />
      <SectorsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
