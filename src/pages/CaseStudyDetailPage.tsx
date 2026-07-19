import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import CaseStudyDetailContent from "@/components/case-study/CaseStudyDetailContent";
import { getCaseStudyById, getCaseStudyFullHeadline } from "@/data/caseStudyCatalog";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const CaseStudyDetailPage = () => {
  const { studyId = "" } = useParams();
  const study = getCaseStudyById(studyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [studyId]);

  if (!study) {
    return <Navigate to="/case-study" replace />;
  }

  const fullHeadline = getCaseStudyFullHeadline(study);

  const jsonLd = [
    breadcrumbSchema(absoluteUrl(`/case-study/${study.id}/`), [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us/" },
      { name: "Case Studies", path: "/case-study/" },
      { name: fullHeadline, path: `/case-study/${study.id}/` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: fullHeadline,
      name: study.title,
      description: study.summary,
      url: absoluteUrl(`/case-study/${study.id}/`),
      author: { "@type": "Organization", name: "UVAN" },
      about: study.sector,
    },
  ];

  return (
    <PageLayout
      title={`${fullHeadline} | UVAN Case Study`}
      description={study.summary}
      canonicalPath={`/case-study/${study.id}/`}
      keywords={`UVAN case study, ${study.corridor}, ${study.sector ?? "cross-border business"}`}
      jsonLd={jsonLd}
    >
      <CaseStudyDetailContent key={study.id} study={study} />
    </PageLayout>
  );
};

export default CaseStudyDetailPage;
