
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslationProvider } from "@/hooks/useTranslation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PartyVibes from "./pages/PartyVibes";
import CuratedExperiences from "./pages/CuratedExperiences";
import PackageDetail from "./pages/PackageDetail";
import Events from "./pages/Events";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import VacationRentals from "./pages/VacationRentals";
import VacationRentalDetail from "./pages/VacationRentalDetail";
import RealEstateServices from "./pages/RealEstateServices";
import VIPExperience from "./pages/VIPExperience";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TranslationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/party-vibes" element={<PartyVibes />} />
          <Route path="/curated-experiences" element={<CuratedExperiences />} />
          <Route path="/events" element={<Events />} />
          <Route path="/vacation-rentals" element={<VacationRentals />} />
          <Route path="/vacation-rental/:rentalId" element={<VacationRentalDetail />} />
          <Route path="/real-estate-services" element={<RealEstateServices />} />
          <Route path="/vip" element={<VIPExperience />} />
          <Route path="/package/:packageId" element={<PackageDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/intake-form" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TranslationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
