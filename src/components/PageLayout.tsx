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
  mainClassName?: string;
  children: ReactNode;
};

const PageLayout = ({ title, description, canonicalPath, keywords, jsonLd, mainClassName, children }: PageLayoutProps) => {
  const mainBg = mainClassName ?? "bg-[hsl(var(--surface-light-50))]";

  return (
    <div className={`min-h-screen relative ${mainBg}`}>
      <Seo title={title} description={description} canonicalPath={canonicalPath} keywords={keywords} jsonLd={jsonLd} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main
        className={`${mainBg} pt-14 pb-[calc(4rem+env(safe-area-inset-bottom,0px))] lg:pt-[4.25rem] lg:pb-0`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
