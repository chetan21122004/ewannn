import PageLayout from "@/components/PageLayout";
import CaseStudySection from "@/components/CaseStudySection";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const CaseStudy = () => {
  const jsonLd = [
    breadcrumbSchema(absoluteUrl("/case-study/"), [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us/" },
      { name: "Case Study", path: "/case-study/" },
    ]),
  ];

  return (
    <PageLayout
      title="Case Study | Japanese Manufacturer India Market Entry | UVAN"
      description="Read how UVAN supported a Japanese manufacturer with India market entry, liaisoning, language support, and operational execution."
      canonicalPath="/case-study/"
      keywords="UVAN case study, Japanese manufacturer India market entry, India market entry case study"
      jsonLd={jsonLd}
    >
      <CaseStudySection />
    </PageLayout>
  );
};

export default CaseStudy;
