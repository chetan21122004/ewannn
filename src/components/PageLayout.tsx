import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Seo from "@/components/Seo";
import type { JsonLdObject } from "@/lib/schemaHelpers";

type JsonLdProp = JsonLdObject | JsonLdObject[] | undefined;

type PageLayoutProps = {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string;
  jsonLd?: JsonLdProp;
  children: ReactNode;
};

const PageLayout = ({ title, description, canonicalPath, keywords, jsonLd, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative bg-[hsl(var(--surface-light-50))]">
      <Seo title={title} description={description} canonicalPath={canonicalPath} keywords={keywords} jsonLd={jsonLd} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="bg-[hsl(var(--surface-light-50))] pt-14 pb-[calc(4rem+env(safe-area-inset-bottom,0px))] lg:pt-24 lg:pb-0">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
