import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// ============================================
// HERO IMAGE PATH - Add your image to public/assets/
// ============================================
const heroImage = "/assets/hero-bg.webp";



const HeroSection = () => {
  return (
    <section
  id="home"
  className="relative min-h-[100svh] flex items-center justify-center pt-16 sm:pt-20"
>

      {/* Background Image - using img for LCP optimization */}
      <img
        src={heroImage}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay - works for both light and dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 dark:from-background/80 dark:via-background/60 dark:to-background" />

      {/* Content */}
      <div className="container-custom px-6 relative z-10 text-center py-12 md:py-20">
        <p className="text-white/80 md:text-white/60 text-xs md:text-base font-medium tracking-wide mb-2 md:mb-4 animate-fade-up">
          Western Eagle Transport LLC
        </p>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white dark:text-foreground mb-3 md:mb-4 animate-fade-up delay-100 leading-tight">
          Heavy Equipment{" "}
          <span className="text-primary block md:inline">Rental Company</span>
        </h1>
        
<p className="text-white/75 md:text-white/60 text-xs md:text-sm mb-6 md:mb-10 animate-fade-up delay-300">
          Powering Projects with Reliable Machinery
        </p>
        
<p className="text-white/75 md:text-white/60 text-xs md:text-sm mb-6 md:mb-10 animate-fade-up delay-300">
          Serving UAE – Dubai – Abu Dhabi – Sharjah
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up delay-400 pb-20 md:pb-0">
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => document.getElementById('equipment')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Equipment
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            onClick={() => {
  const el = document.getElementById("contact");
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}}

          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;