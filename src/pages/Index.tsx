import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { HOMEPAGE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, webSiteWithSearchAction } from "@/lib/schemaHelpers";
import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAboutSection";
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
import EntityParagraphHomeBand from "@/components/EntityParagraphHomeBand";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  const homeJsonLd = [webSiteWithSearchAction(), faqPageSchema(absoluteUrl("/"), HOMEPAGE_FAQS)];

  return (
    <div className="min-h-screen relative">
      <Seo
        title="Cross-Border Market Partner for India & Asia | Ewan Business Solutions"
        description="Ewan helps foreign companies enter India and Indian companies expand into Asia. Language services, market entry, and on-ground operations - one trusted partner."
        keywords="India market entry partner, cross-border business India, language services India, translation interpretation India"
        canonicalPath="/"
        jsonLd={homeJsonLd}
      />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <HomeAboutSection />
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
      <AeoFrequentlyAskedQuestions items={HOMEPAGE_FAQS} className="theme-section-light px-6 py-16 md:py-20" />
      <ContactSection />
      <EntityParagraphHomeBand />
      <Footer />
    </div>
  );
};

export default Index;
