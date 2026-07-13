import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HashScrollHandler from "@/components/HashScrollHandler";
import AskSohamFloatingButton from "@/components/AskSohamFloatingButton";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import Index from "./pages/Index.tsx";
import AskSoham from "./pages/AskSoham.tsx";
import MarketEntry from "./pages/MarketEntry.tsx";
import LanguageLocalization from "./pages/LanguageLocalization.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Media from "./pages/Media.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import Newsletter from "./pages/Newsletter.tsx";
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
import LanguageGazetteIssueApr25 from "./pages/language-gazette/LanguageGazetteIssueApr25.tsx";
import LanguageGazetteWhenSadnessGaveMeJoy from "./pages/language-gazette/LanguageGazetteWhenSadnessGaveMeJoy.tsx";
import LanguageGazetteMotherTongueComfort from "./pages/language-gazette/LanguageGazetteMotherTongueComfort.tsx";
import LanguageGazetteBeBraveYouWomen from "./pages/language-gazette/LanguageGazetteBeBraveYouWomen.tsx";

const LanguageGazettePdfIssue = lazy(() => import("./pages/language-gazette/LanguageGazettePdfIssue.tsx"));
import InsightsArticleHowToEnterIndia from "./pages/insights/InsightsArticleHowToEnterIndia.tsx";
import InsightsArticleChooseTranslationPartner from "./pages/insights/InsightsArticleChooseTranslationPartner.tsx";
import InsightsArticleSimultaneousInterpretation from "./pages/insights/InsightsArticleSimultaneousInterpretation.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <HashScrollHandler />
          <AskSohamFloatingButton />
          <WhatsAppFloatingButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ask-soham" element={<AskSoham />} />
            <Route path="/market-entry" element={<MarketEntry />} />
            <Route path="/language-localization" element={<LanguageLocalization />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/press" element={<Navigate to="/newsletter" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/global-talkies" element={<GlobalTalkies />} />
            <Route path="/import-export" element={<ImportExport />} />
            <Route path="/market-research" element={<MarketResearchPage />} />
            <Route path="/market-entry-audit" element={<MarketEntryAudit />} />
            <Route path="/liaisoning-facilitation" element={<LiaisoningFacilitation />} />
            <Route path="/import-procurement-export" element={<Navigate to="/import-export" replace />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/language-gazette" element={<LanguageGazette />} />
            <Route
              path="/language-gazette/read/:slug"
              element={
                <Suspense
                  fallback={
                    <div className="flex min-h-[50vh] items-center justify-center text-sm text-on-light-secondary">
                      Loading flipbook…
                    </div>
                  }
                >
                  <LanguageGazettePdfIssue />
                </Suspense>
              }
            />
            <Route path="/language-gazette/apr-25" element={<LanguageGazetteIssueApr25 />} />
            <Route path="/language-gazette/aug-25" element={<Navigate to="/language-gazette/apr-25" replace />} />
            <Route path="/language-gazette/when-sadness-gave-me-joy" element={<LanguageGazetteWhenSadnessGaveMeJoy />} />
            <Route path="/language-gazette/mother-tongue-greatest-comfort" element={<LanguageGazetteMotherTongueComfort />} />
            <Route path="/language-gazette/be-brave-you-women" element={<LanguageGazetteBeBraveYouWomen />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/how-to-enter-indian-market" element={<InsightsArticleHowToEnterIndia />} />
            <Route path="/insights/how-to-choose-translation-partner-india" element={<InsightsArticleChooseTranslationPartner />} />
            <Route path="/insights/what-is-simultaneous-interpretation" element={<InsightsArticleSimultaneousInterpretation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export default App;
