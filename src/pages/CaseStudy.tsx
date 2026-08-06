import PageLayout from "@/components/PageLayout";
import CaseStudyPageContent from "@/components/case-study/CaseStudyPageContent";
import { useTranslation } from "react-i18next";
import { caseStudyCatalog, getCaseStudyFullHeadline } from "@/data/caseStudyCatalog";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const CaseStudy = () => {
  const { t } = useTranslation();
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
      title={t("seo.caseStudy.title")}
      description={t("seo.caseStudy.description")}
      canonicalPath="/case-study/"
      keywords="UVAN case study, SHOWA Japan India market entry, Airattix Japan investors, Singapore market entry case study"
      jsonLd={jsonLd}
    >
      <CaseStudyPageContent />
    </PageLayout>
  );
};

export default CaseStudy;
