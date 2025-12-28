import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/hooks/useTheme";
import ScrollToTop from "@/components/ScrollToTop";

// Eagerly load the main page for best LCP
import Index from "./pages/Index";

// Lazy load non-critical routes to reduce initial bundle size
const About = lazy(() => import("./pages/About"));
const EquipmentDetail = lazy(() => import("./pages/EquipmentDetail"));
const EquipmentVariant = lazy(() => import("./pages/EquipmentVariant"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<Suspense fallback={<div className="min-h-screen" />}><About /></Suspense>} />
              <Route path="/equipment/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><EquipmentDetail /></Suspense>} />
              <Route path="/equipment/:slug/:variantSlug" element={<Suspense fallback={<div className="min-h-screen" />}><EquipmentVariant /></Suspense>} />
              <Route path="/services/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><ServiceDetail /></Suspense>} />
              <Route path="/services" element={<Suspense fallback={<div className="min-h-screen" />}><Services /></Suspense>} />
              <Route path="/blog" element={<Suspense fallback={<div className="min-h-screen" />}><Blog /></Suspense>} />
              <Route path="/blog/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><BlogPost /></Suspense>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<Suspense fallback={<div className="min-h-screen" />}><NotFound /></Suspense>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
