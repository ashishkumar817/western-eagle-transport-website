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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
  );
};

export default Index;
