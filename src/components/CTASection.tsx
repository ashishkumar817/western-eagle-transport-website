import { Button } from "@/components/ui/button";

// ============================================
// CTA BACKGROUND IMAGE PATH - Add your image to public/assets/
// ============================================
const ctaBgImage = "/assets/cta-bg.webp";

const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBgImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85" />

      {/* Content */}
      <div className="container-custom px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-secondary text-foreground mb-4">
            Smarter & More Affordable Access to{" "}
            <span className="text-primary">Heavy Equipment</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get the right equipment for your project. With our extensive fleet and flexible rental options, we make heavy equipment accessible and affordable.
          </p>
          <Button size="lg" className="btn-primary" onClick={scrollToContact}>
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;