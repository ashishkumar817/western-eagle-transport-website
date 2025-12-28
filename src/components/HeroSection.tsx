import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

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
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-20">
        <p className="text-primary font-heading uppercase tracking-[0.3em] mb-4 animate-fade-up">
          Welcome to
        </p>
        
        <h1 className="heading-primary text-foreground mb-2 animate-fade-up delay-100">
          Heavy Equipment
        </h1>
        
        <h1 className="heading-primary text-primary mb-8 animate-fade-up delay-200">
          Rental Company
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up delay-300">
          Powering Projects with Reliable Machinery
        </p>
        
        <p className="text-muted-foreground mb-10 animate-fade-up delay-400">
          Serving UAE – Dubai – Abu Dhabi – Sharjah
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-500">
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
            className="btn-outline"
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
