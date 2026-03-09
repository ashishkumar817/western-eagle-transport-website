import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowLeft, Check, MapPin, Wrench, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EquipmentData } from "@/lib/equipmentData";
import EquipmentVariantCard from "@/components/EquipmentVariantCard";

interface CenteredMinimalLayoutProps {
  equipment: EquipmentData;
  slug: string;
  phoneNumber: string;
}

const CenteredMinimalLayout = forwardRef<HTMLDivElement, CenteredMinimalLayoutProps>(
  ({ equipment, slug, phoneNumber }, ref) => {
    return (
      <div ref={ref}>
      {/* Hero - Minimal Centered */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={equipment.image} 
            alt=""
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        
        <div className="container-custom px-4 relative z-10 text-center py-20">
          <nav className="mb-12">
            <Link to="/equipment" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Equipment
            </Link>
          </nav>
          
          <div className="w-32 h-32 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <img 
              src={equipment.image} 
              alt={equipment.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight max-w-3xl mx-auto">
            {equipment.heroTitle}
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            {equipment.heroSubtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="btn-primary" size="lg" asChild>
              <a href={`tel:+${phoneNumber}`}>
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Large Featured Image */}
      <section className="container-custom px-4 -mt-10 relative z-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
          <img 
            src={equipment.image} 
            alt={equipment.name}
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* Overview - Clean Typography */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 mt-2">
              What is a {equipment.name}?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              {equipment.overview.description}
            </p>
            
            <div className="inline-flex flex-wrap justify-center gap-3">
              {equipment.overview.benefits.map((benefit, index) => (
                <span key={index} className="bg-secondary px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  <Check className="w-4 h-4 inline-block mr-2 text-primary" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Minimal List */}
      <section className="py-12 border-y border-border">
        <div className="container-custom px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {equipment.overview.industries.map((industry, index) => (
              <span key={index} className="text-muted-foreground hover:text-foreground transition-colors">
                {industry}
                {index < equipment.overview.industries.length - 1 && 
                  <span className="text-border ml-8">•</span>
                }
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Simple List */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Applications</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Common Use Cases
              </h2>
            </div>
            
            <div className="space-y-4">
              {equipment.applications.useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - Alternating */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Rent from Western Eagle?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Cost-Effective Solution</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.costEffective}</p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-primary">50%</p>
                <p className="text-muted-foreground">Cost Savings vs Buying</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-secondary rounded-2xl p-8 text-center order-2 md:order-1">
                <p className="text-4xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground">Modern Equipment</p>
              </div>
              <div className="order-1 md:order-2">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Latest Models & Technology</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.latestModels}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">No Maintenance Hassles</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.noMaintenance}</p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-primary">24/7</p>
                <p className="text-muted-foreground">Technical Support</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-secondary rounded-2xl p-8 text-center order-2 md:order-1">
                <p className="text-4xl font-bold text-primary">7</p>
                <p className="text-muted-foreground">Emirates Covered</p>
              </div>
              <div className="order-1 md:order-2">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">UAE-Wide Coverage</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.flexibility}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Options */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Fleet</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Available Options
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {equipment.variants.map((variant) => (
              <EquipmentVariantCard
                key={variant.slug}
                name={variant.name}
                slug={variant.slug}
                parentSlug={slug}
                image={variant.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

CenteredMinimalLayout.displayName = "CenteredMinimalLayout";

export default CenteredMinimalLayout;
