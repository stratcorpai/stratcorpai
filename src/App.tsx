import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Framework from "./pages/Framework";
import WarRoom from "./pages/WarRoom";
import Speaking from "./pages/Speaking";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/war-room" element={<WarRoom />} />
          <Route path="/speaking" element={<Speaking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
