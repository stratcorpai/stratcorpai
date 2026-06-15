
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";

const Framework = lazy(() => import("./pages/Framework"));
const WarRoom = lazy(() => import("./pages/WarRoom"));
const Speaking = lazy(() => import("./pages/Speaking"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={
          <div className="min-h-screen bg-[#030712] flex items-center justify-center text-muted-foreground text-sm font-medium">
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/war-room" element={<WarRoom />} />
            <Route path="/speaking" element={<Speaking />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
