import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HashScrollHandler from "@/components/HashScrollHandler";
import Index from "./pages/Index.tsx";
import AskSoham from "./pages/AskSoham.tsx";
import MarketEntry from "./pages/MarketEntry.tsx";
import LanguageLocalization from "./pages/LanguageLocalization.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Media from "./pages/Media.tsx";
import Contact from "./pages/Contact.tsx";
import GlobalTalkies from "./pages/globalTalkies.tsx";
import ImportExport from "./pages/importExport.tsx";
import MarketResearchPage from "./pages/MarketResearchPage.tsx";
import LiaisoningFacilitation from "./pages/LiaisoningFacilitation.tsx";
import JoinUs from "./pages/JoinUs.tsx";
import Industries from "./pages/Industries.tsx";
import MarketEntryAudit from "./pages/MarketEntryAudit.tsx";
import Insights from "./pages/Insights.tsx";
import LanguageGazette from "./pages/LanguageGazette.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashScrollHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ask-soham" element={<AskSoham />} />
          <Route path="/market-entry" element={<MarketEntry />} />
          <Route path="/language-localization" element={<LanguageLocalization />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/global-talkies" element={<GlobalTalkies />} />
          <Route path="/import-export" element={<ImportExport />} />
          <Route path="/market-research" element={<MarketResearchPage />} />
          <Route path="/market-entry-audit" element={<MarketEntryAudit />} />
          <Route path="/liaisoning-facilitation" element={<LiaisoningFacilitation />} />
          <Route path="/import-procurement-export" element={<Navigate to="/import-export" replace />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/language-gazette" element={<LanguageGazette />} />
          <Route path="/insights" element={<Insights />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
