import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import CaseStudySection from "@/components/CaseStudySection";
import WhyEwanSection from "@/components/WhyEwanSection";
import InstitutionalTrustSection from "@/components/InstitutionalTrustSection";
import PartnersSection from "@/components/PartnersSection";
import SectorsSection from "@/components/SectorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FoundersSection from "@/components/FoundersSection";
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
      <StatsSection />
      <ServicesSection />
      <ClientLogosSection />
      <CaseStudySection />
      <WhyEwanSection />
      <InstitutionalTrustSection />
      <PartnersSection />
      <SectorsSection />
      <TestimonialsSection />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
