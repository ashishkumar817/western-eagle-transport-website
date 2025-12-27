import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EquipmentSection from "@/components/EquipmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import FeaturedServices from "@/components/FeaturedServices";
import GallerySection from "@/components/GallerySection";
import SupportCTA from "@/components/SupportCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Western Eagle Transport Company | Heavy Equipment Rental UAE</title>
        <meta name="description" content="Western Eagle Transport Company offers heavy equipment rental in UAE - Dubai, Abu Dhabi, Sharjah. Excavators, cranes, forklifts, generators & more. Call now!" />
        <meta name="keywords" content="heavy equipment rental UAE, construction equipment Dubai, crane rental Abu Dhabi, forklift rental Sharjah, excavator rental" />
        <link rel="canonical" href="https://westerneagle.ae/" />
        <meta property="og:title" content="Western Eagle Transport Company | Heavy Equipment Rental UAE" />
        <meta property="og:description" content="Professional heavy equipment rental services in UAE. Modern fleet, trained operators, competitive pricing." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        <main>
          <HeroSection />
          <AboutSection />
          <EquipmentSection />
          <WhyChooseUs />
          <StatsSection />
          <CTASection />
          <FeaturedServices />
          <GallerySection />
          <SupportCTA />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
