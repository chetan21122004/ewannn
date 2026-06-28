import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { HOMEPAGE_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, webSiteWithSearchAction } from "@/lib/schemaHelpers";
import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import CaseStudySection from "@/components/CaseStudySection";
import WhyEwanSection from "@/components/WhyEwanSection";
import InstitutionalTrustSection from "@/components/InstitutionalTrustSection";
import PartnersSection from "@/components/PartnersSection";
import SectorsSection from "@/components/SectorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import ScrollScene from "@/components/ScrollScene";
import EntityParagraphHomeBand from "@/components/EntityParagraphHomeBand";

const Index = () => {
  const homeJsonLd = [webSiteWithSearchAction(), faqPageSchema(absoluteUrl("/"), HOMEPAGE_FAQS)];
  const sections = [
    { key: "hero", component: <HeroSection />, intensity: 1.15 },
    { key: "about-uvan", component: <HomeAboutSection />, intensity: 0.8 },
    { key: "services", component: <ServicesSection />, intensity: 0.95 },
    { key: "clients", component: <ClientLogosSection />, intensity: 0.65 },
    { key: "case-study", component: <CaseStudySection />, intensity: 1 },
    { key: "why-ewan", component: <WhyEwanSection />, intensity: 0.9 },
    { key: "trust", component: <InstitutionalTrustSection />, intensity: 0.8 },
    { key: "partners", component: <PartnersSection />, intensity: 0.9 },
    { key: "sectors", component: <SectorsSection />, intensity: 0.75 },
    { key: "testimonials", component: <TestimonialsSection />, intensity: 0.8 },
    {
      key: "faqs",
      component: <AeoFrequentlyAskedQuestions items={HOMEPAGE_FAQS} className="theme-section-light px-6 py-10 md:py-14" />,
      intensity: 0.65,
    },
    { key: "contact", component: <ContactSection />, intensity: 1 },
    { key: "entity-paragraph", component: <EntityParagraphHomeBand />, intensity: 0.55 },
  ];

  return (
    <div className="homepage-ambient min-h-screen relative pb-[calc(4rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      <Seo
        title="Cross-Border Market Partner for India & Asia | UVAN"
        description="UVAN helps foreign companies enter India and Indian companies expand into Asia. Language services, market entry, and on-ground operations - one trusted partner."
        keywords="India market entry partner, cross-border business India, language services India, translation interpretation India"
        canonicalPath="/"
        jsonLd={homeJsonLd}
      />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <div className="homepage-ambient__veil" aria-hidden />
        {sections.map((section, index) => (
          <ScrollScene key={section.key} index={index} intensity={section.intensity}>
            {section.component}
          </ScrollScene>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
