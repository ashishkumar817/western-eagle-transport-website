import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowLeft, Check, MapPin, Clock, Shield, Award, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EquipmentData } from "@/lib/equipmentData";
import EquipmentVariantCard from "@/components/EquipmentVariantCard";

interface ImageStatsLayoutProps {
  equipment: EquipmentData;
  slug: string;
  phoneNumber: string;
}

const ImageStatsLayout = forwardRef<HTMLDivElement, ImageStatsLayoutProps>(
  ({ equipment, slug, phoneNumber }, ref) => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Truck, value: "24/7", label: "Support" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Shield, value: "100%", label: "Safety Certified" },
  ];

  return (
    <div ref={ref}>
      {/* Hero with Large Image & Stats */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={equipment.image} 
            alt={equipment.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        </div>
        
        <div className="container-custom px-4 relative z-10 py-20">
          <nav className="mb-8">
            <Link to="/#equipment" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Equipment
            </Link>
          </nav>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {equipment.heroTitle}
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {equipment.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
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
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview with Side Image */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 mt-2">
                What is a {equipment.name}?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {equipment.overview.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 mt-8">
                {equipment.overview.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <img 
                  src={equipment.image} 
                  alt={equipment.name}
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served - Cards Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Industries We Serve
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {equipment.overview.industries.map((industry, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Horizontal Scroll */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Applications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {equipment.applications.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.applications.useCases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border hover:shadow-lg transition-all">
                <span className="text-3xl font-bold text-primary/30">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-foreground">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - Alternating Rows */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Rent from Western Eagle?
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto mt-4">
              {equipment.whyChoose.intro}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Cost-Effective Solution</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.costEffective}</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Latest Models & Technology</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.latestModels}</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">No Maintenance Hassles</h3>
                <p className="text-muted-foreground">{equipment.whyChoose.noMaintenance}</p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">UAE-Wide Coverage</h3>
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
                image={equipment.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

ImageStatsLayout.displayName = "ImageStatsLayout";

export default ImageStatsLayout;
