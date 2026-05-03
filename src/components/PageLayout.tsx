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
  jsonLd?: JsonLdProp;
  children: ReactNode;
};

const PageLayout = ({ title, description, canonicalPath, jsonLd, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <Seo title={title} description={description} canonicalPath={canonicalPath} jsonLd={jsonLd} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
