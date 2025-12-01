import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import DataProcessing from "./pages/DataProcessing";
import Proiecte from "./pages/Proiecte";
import DespreNoi from "./pages/DespreNoi";
import ImplicaTe from "./pages/ImplicaTe";
import SkillSociale from "./pages/programs/SkillSociale";
import EducatieFinanciara from "./pages/programs/EducatieFinanciara";
import Leadership from "./pages/programs/Leadership";
import LucruInEchipa from "./pages/programs/LucruInEchipa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proiecte" element={<Proiecte />} />
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/implica-te" element={<ImplicaTe />} />
          <Route path="/programe/skill-uri-sociale" element={<SkillSociale />} />
          <Route path="/programe/educatie-financiara" element={<EducatieFinanciara />} />
          <Route path="/programe/leadership" element={<Leadership />} />
          <Route path="/programe/lucru-in-echipa" element={<LucruInEchipa />} />
          <Route path="/politica-de-confidentialitate" element={<PrivacyPolicy />} />
          <Route path="/termeni-si-conditii" element={<TermsAndConditions />} />
          <Route path="/prelucrarea-datelor-personale" element={<DataProcessing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
