import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PdfFlipbookViewer from "@/components/language-gazette/PdfFlipbookViewer";
import { getTlgPdfIssue } from "@/data/tlgPdfCatalog";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const LanguageGazettePdfIssue = () => {
  const { slug } = useParams<{ slug: string }>();
  const issue = slug ? getTlgPdfIssue(slug) : undefined;

  if (!issue) {
    return <Navigate to="/language-gazette" replace />;
  }

  const canonicalPath = `/language-gazette/read/${issue.slug}/`;
  const title = `The Language Gazette - ${issue.label}`;
  const description = `Read the ${issue.label} issue of The Language Gazette.`;

  const jsonLd = [
    breadcrumbSchema(absoluteUrl(canonicalPath), [
      { name: "Home", path: "/" },
      { name: "The Language Gazette", path: "/language-gazette/" },
      { name: issue.label, path: canonicalPath },
    ]),
  ];

  return (
    <PageLayout title={`${title} | UVAN`} description={description} canonicalPath={canonicalPath} jsonLd={jsonLd}>
      <section className="theme-section-soft px-4 pb-12 pt-8 sm:px-5 sm:pb-16 sm:pt-10 lg:pb-24 lg:pt-14">
        <div className="container mx-auto max-w-6xl">
          <nav className="mb-5 text-xs text-on-light-muted sm:mb-6 sm:text-sm">
            <Link to="/language-gazette" className="inline-flex items-center gap-1.5 hover:text-[hsl(var(--brand-purple-700))]">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              The Language Gazette
            </Link>
            <span className="mx-1.5 sm:mx-2">/</span>
            <span className="text-on-light">{issue.label}</span>
          </nav>

          <div className="mb-6 max-w-3xl sm:mb-8">
            <h1 className="font-serif text-2xl font-bold leading-tight text-on-light sm:text-3xl md:text-4xl lg:text-5xl">
              {issue.label}
            </h1>
          </div>

          <PdfFlipbookViewer pdfUrl={issue.pdfUrl} title={issue.label} />
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageGazettePdfIssue;
