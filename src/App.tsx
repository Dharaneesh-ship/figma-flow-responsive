
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BirthdaysPage from "./pages/categories/Birthdays";
import WeddingsPage from "./pages/categories/Weddings";
import BabyShowersPage from "./pages/categories/BabyShowers";
import CorporateEventsPage from "./pages/categories/CorporateEvents";
import VendorListPage from "./pages/vendors/VendorListPage";
import VendorDetail from "./pages/vendors/VendorDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories/birthdays" element={<BirthdaysPage />} />
          <Route path="/categories/weddings" element={<WeddingsPage />} />
          <Route path="/categories/baby-showers" element={<BabyShowersPage />} />
          <Route path="/categories/corporate-events" element={<CorporateEventsPage />} />
          <Route path="/vendors" element={<VendorListPage />} />
          <Route path="/vendors/:vendorId" element={<VendorDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
