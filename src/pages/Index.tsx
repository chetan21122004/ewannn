import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { ENTITY_PARAGRAPH_A, HOMEPAGE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, webSiteWithSearchAction } from "@/lib/schemaHelpers";
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
  const homeJsonLd = [webSiteWithSearchAction(), faqPageSchema(absoluteUrl("/"), HOMEPAGE_FAQS)];

  return (
    <div className="min-h-screen relative">
      <Seo
        title="Cross-Border Market Partner for India & Asia | Ewan Business Solutions"
        description="Ewan helps foreign companies enter India and Indian companies expand into Asia. Language services, market entry, and on-ground operations — one trusted partner."
        keywords="India market entry partner, cross-border business India, language services India, translation interpretation India"
        canonicalPath="/"
        jsonLd={homeJsonLd}
      />
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
      <section className="theme-section-soft px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] md:text-3xl">About Ewan Business Solutions</h2>
          <p className="mt-6 text-base leading-relaxed text-on-light-secondary md:text-lg">{ENTITY_PARAGRAPH_A}</p>
        </div>
      </section>
      <AeoFrequentlyAskedQuestions items={HOMEPAGE_FAQS} className="theme-section-light px-6 py-16 md:py-20" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
