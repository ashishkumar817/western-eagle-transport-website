import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowLeft, Check, MapPin, Clock, Wrench, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EquipmentData } from "@/lib/equipmentData";
import EquipmentVariantCard from "@/components/EquipmentVariantCard";

interface FullwidthImageLayoutProps {
  equipment: EquipmentData;
  slug: string;
  phoneNumber: string;
}

const FullwidthImageLayout = forwardRef<HTMLDivElement, FullwidthImageLayoutProps>(
  ({ equipment, slug, phoneNumber }, ref) => {
    return (
      <div ref={ref}>
      {/* Hero - Text Centered Over Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={equipment.image} 
            alt={equipment.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40" />
        </div>
        
        <div className="container-custom px-4 relative z-10 text-center py-20">
          <nav className="mb-8">
            <Link to="/equipment" className="inline-flex items-center text-primary hover:underline text-sm font-medium justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Equipment
            </Link>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {equipment.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            {equipment.heroSubtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="btn-primary" size="lg" asChild>
              <a href={`tel:+${phoneNumber}`}>
                <Phone className="w-5 h-5 mr-2" /> Get Free Quote
              </a>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="relative h-72 md:h-96">
        <img 
          src={equipment.image} 
          alt={equipment.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </section>

      {/* Overview - Clean & Simple */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 mt-2">
              What is a {equipment.name}?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {equipment.overview.description}
            </p>
            
            <div className="bg-secondary p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {equipment.overview.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Inline Tags */}
      <section className="py-12 bg-secondary">
        <div className="container-custom px-4">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="text-foreground font-semibold">Industries We Serve:</span>
            {equipment.overview.industries.map((industry, index) => (
              <span key={index} className="bg-card px-4 py-2 rounded-full text-sm text-muted-foreground border border-border">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Large Cards with Numbers */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Applications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              How Our Clients Use This Equipment
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {equipment.applications.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {equipment.applications.useCases.map((useCase, index) => (
              <div key={index} className="relative bg-card p-8 rounded-2xl border border-border group hover:border-primary/50 transition-all">
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </span>
                <p className="text-foreground text-lg pl-4">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Break 2 */}
      <section className="relative h-64 md:h-80">
        <img 
          src={equipment.image} 
          alt={equipment.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-2xl md:text-4xl font-bold">Trusted by 500+ Companies</p>
            <p className="text-white/80 mt-2">Across Dubai, Abu Dhabi & All Emirates</p>
          </div>
        </div>
      </section>

      {/* Why Choose - Timeline Style */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              The Western Eagle Advantage
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">Cost-Effective Solution</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.costEffective}</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">Latest Models & Technology</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.latestModels}</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">No Maintenance Hassles</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.noMaintenance}</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">UAE-Wide Coverage</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.flexibility}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Options */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Fleet</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Available {equipment.name} Options
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

FullwidthImageLayout.displayName = "FullwidthImageLayout";

export default FullwidthImageLayout;
