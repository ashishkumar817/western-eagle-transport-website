import { lazy, Suspense, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "@/hooks/useTheme";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ScrollToTop from "@/components/ScrollToTop";

// Eager load home page
import Index from "./pages/Index";

// Lazy pages
const About = lazy(() => import("./pages/About"));
const Equipment = lazy(() => import("./pages/Equipment"));
const EquipmentDetail = lazy(() => import("./pages/EquipmentDetail"));
const EquipmentVariant = lazy(() => import("./pages/EquipmentVariant"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const GlobalSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Western Eagle Transport LLC",
        url: "https://westerneagletransportllc.com",
        telephone: "+971505567467",
        description:
          "Western Eagle Transport LLC is a UAE-based heavy equipment rental company serving Abu Dhabi, Dubai, Sharjah, and Mussafah.",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Mussafah-44, Elite Business Zone Investment, Office No.58",
          addressLocality: "Abu Dhabi",
          addressCountry: "AE",
        },
        areaServed: [
          "Mussafah",
          "ICAD",
          "KIZAD",
          "Abu Dhabi",
          "Dubai",
          "Sharjah",
        ],
        sameAs: [
          "https://www.instagram.com/westerneagletransportllc",
          "https://facebook.com/westerneagletransport",
          "https://www.linkedin.com/in/western-eagle-transport-6894853a3",
        ],
      })}
    </script>
  </Helmet>
);

export const AppRoutes = () => {
  useScrollAnimation();

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />

      {/* Equipment */}
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/equipment/:slug" element={<EquipmentDetail />} />
      <Route
        path="/equipment/:slug/:variantSlug"
        element={<EquipmentVariant />}
      />

      {/* Services */}
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />

      {/* Others */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export const AppProviders = ({
  children,
  helmetContext,
}: {
  children: ReactNode;
  helmetContext?: Record<string, unknown>;
}) => (
  <HelmetProvider context={helmetContext}>
    <GlobalSchema />
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
