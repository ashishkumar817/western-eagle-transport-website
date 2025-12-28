import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowLeft, Check, MapPin, Clock, Wrench, TrendingUp, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EquipmentData } from "@/lib/equipmentData";
import EquipmentVariantCard from "@/components/EquipmentVariantCard";

interface SplitPanelsLayoutProps {
  equipment: EquipmentData;
  slug: string;
  phoneNumber: string;
}

const SplitPanelsLayout = forwardRef<HTMLDivElement, SplitPanelsLayoutProps>(
  ({ equipment, slug, phoneNumber }, ref) => {
    return (
      <div ref={ref}>
      {/* Hero - Split Screen */}
      <section className="min-h-[90vh] grid lg:grid-cols-2">
        {/* Left - Content */}
        <div className="bg-secondary flex items-center p-8 md:p-16 order-2 lg:order-1">
          <div>
            <nav className="mb-8">
              <Link to="/#equipment" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Equipment
              </Link>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {equipment.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {equipment.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>All UAE Emirates</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" size="lg" asChild>
                <a href={`tel:+${phoneNumber}`}>
                  <Phone className="w-5 h-5 mr-2" /> Get Free Quote
                </a>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right - Image */}
        <div className="relative h-72 lg:h-auto order-1 lg:order-2">
          <img 
            src={equipment.image} 
            alt={equipment.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary/30 lg:block hidden" />
        </div>
      </section>

      {/* Overview - Split with Image Left */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={equipment.image} 
                alt={equipment.name}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary p-6 rounded-2xl hidden md:block">
                <p className="text-primary-foreground font-bold text-lg">Premium</p>
                <p className="text-primary-foreground/80 text-sm">Equipment</p>
              </div>
            </div>
            
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 mt-2">
                What is a {equipment.name}?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {equipment.overview.description}
              </p>
              
              <div className="space-y-4">
                {equipment.overview.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 bg-secondary p-4 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Dark Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom px-4">
          <h2 className="text-2xl font-bold text-primary-foreground text-center mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {equipment.overview.industries.map((industry, index) => (
              <span key={index} className="bg-primary-foreground/10 border border-primary-foreground/20 px-6 py-3 rounded-full text-primary-foreground">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Cards with Hover */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Applications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Versatile Use Cases
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {equipment.applications.description}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.applications.useCases.map((useCase, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border border-border group hover:bg-primary hover:border-primary transition-all duration-300 cursor-default">
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-3xl group-hover:text-primary-foreground transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-foreground mt-4 group-hover:text-primary-foreground transition-colors">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Image Break */}
      <section className="grid md:grid-cols-2 h-96">
        <div className="bg-primary p-12 flex items-center justify-center">
          <div className="text-center">
            <p className="text-6xl font-bold text-primary-foreground">15+</p>
            <p className="text-primary-foreground/80 mt-2">Years of Excellence</p>
          </div>
        </div>
        <div className="relative">
          <img 
            src={equipment.image} 
            alt={equipment.name}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Why Choose - Two Column */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              The Western Eagle Difference
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
              {equipment.whyChoose.intro}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-2xl transition-all h-full">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Cost-Effective Solution</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.costEffective}</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-2xl transition-all h-full">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Latest Models & Technology</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.latestModels}</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-2xl transition-all h-full">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">No Maintenance Hassles</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.noMaintenance}</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-2xl transition-all h-full">
                <MapPin className="w-12 h-12 text-primary mb-4" />
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
                image={equipment.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

SplitPanelsLayout.displayName = "SplitPanelsLayout";

export default SplitPanelsLayout;
