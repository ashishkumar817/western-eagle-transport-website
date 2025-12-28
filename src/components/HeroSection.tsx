import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay - works for both light and dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 dark:from-background/80 dark:via-background/60 dark:to-background" />

      {/* Content */}
      <div className="container-custom px-6 relative z-10 text-center py-20">
        <p className="text-white/80 dark:text-muted-foreground text-sm md:text-base font-medium tracking-wide mb-6 animate-fade-up">
          Western Eagle Transport Company
        </p>
        
        <h1 className="heading-primary text-white dark:text-foreground mb-4 animate-fade-up delay-100">
          Heavy Equipment <span className="text-primary">Rental Company</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 dark:text-muted-foreground max-w-2xl mx-auto mb-4 font-light animate-fade-up delay-200">
          Powering Projects with Reliable Machinery
        </p>
        
        <p className="text-white/60 dark:text-muted-foreground text-sm mb-10 animate-fade-up delay-300">
          Serving UAE – Dubai – Abu Dhabi – Sharjah
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
