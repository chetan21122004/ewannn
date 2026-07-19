import PageLayout from "@/components/PageLayout";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";
import { caseStudyCatalog, getCaseStudyFullHeadline } from "@/data/caseStudyCatalog";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const CaseStudy = () => {
  const jsonLd = [
    breadcrumbSchema(absoluteUrl("/case-study/"), [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us/" },
      { name: "Case Studies", path: "/case-study/" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "UVAN Case Studies",
      itemListElement: caseStudyCatalog.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: getCaseStudyFullHeadline(study),
        url: absoluteUrl(`/case-study/${study.id}/`),
      })),
    },
  ];

  return (
    <PageLayout
      title="Case Studies | UVAN Market Entry, Liaisoning & Cross-Border Mandates"
      description="Browse UVAN case studies: SHOWA Japan India market entry, Airattix Japan investor outreach, and Satellite US-Singapore partner search. Read online or download PDFs."
      canonicalPath="/case-study/"
      keywords="UVAN case study, SHOWA Japan India market entry, Airattix Japan investors, Singapore market entry case study"
      jsonLd={jsonLd}
    >
      <CaseStudyPageContent />
    </PageLayout>
  );
};

export default CaseStudy;
