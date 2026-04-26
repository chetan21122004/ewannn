import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Seo from "@/components/Seo";

type PageLayoutProps = {
  title: string;
  description: string;
  canonicalPath: string;
  children: ReactNode;
};

const PageLayout = ({ title, description, canonicalPath, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <Seo title={title} description={description} canonicalPath={canonicalPath} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
