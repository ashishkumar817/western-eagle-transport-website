import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check, ChevronRight, MapPin, Clock, Wrench, TrendingUp, Shield, Building2, Factory, HardHat, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EquipmentVariantCard from "@/components/EquipmentVariantCard";
import ImageStatsLayout from "@/components/equipment/ImageStatsLayout";
import FullwidthImageLayout from "@/components/equipment/FullwidthImageLayout";
import SplitPanelsLayout from "@/components/equipment/SplitPanelsLayout";
import CenteredMinimalLayout from "@/components/equipment/CenteredMinimalLayout";
import { getEquipmentBySlug, equipmentData } from "@/lib/equipmentData";

const phoneNumber = "971505567467";

const EquipmentDetail = () => {
  const { slug } = useParams();
  const equipment = slug ? getEquipmentBySlug(slug) : null;

  if (!equipment) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 text-center">
          <h1 className="heading-secondary text-foreground">Equipment Not Found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Go back to home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: equipment.name,
    description: equipment.metaDescription,
    brand: { "@type": "Brand", name: "Western Eagle Transport" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      availability: "https://schema.org/InStock"
    }
  };

  const relatedEquipment = equipment.relatedEquipment || [];

  const renderLayout = () => {
    switch (equipment.layoutType) {
      case 'image-stats':
        return <ImageStatsLayout equipment={equipment} slug={slug!} phoneNumber={phoneNumber} />;
      case 'fullwidth-image':
        return <FullwidthImageLayout equipment={equipment} slug={slug!} phoneNumber={phoneNumber} />;
      case 'split-panels':
        return <SplitPanelsLayout equipment={equipment} slug={slug!} phoneNumber={phoneNumber} />;
      case 'centered-minimal':
        return <CenteredMinimalLayout equipment={equipment} slug={slug!} phoneNumber={phoneNumber} />;
      default:
        return <DefaultLayout equipment={equipment} slug={slug!} phoneNumber={phoneNumber} relatedEquipment={relatedEquipment} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{equipment.heroTitle} | Western Eagle Transport</title>
        <meta name="description" content={equipment.metaDescription} />
        <meta name="keywords" content={`${equipment.name} rental, ${equipment.name} for rent UAE, ${equipment.name} rental Dubai, ${equipment.name} rental Abu Dhabi, heavy equipment rental UAE, ${equipment.name} hire`} />
        <link rel="canonical" href={`https://westerneagle.ae/equipment/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-28">
          {renderLayout()}

          {/* CTA Section - Common for all layouts */}
          <section className="bg-gradient-to-r from-primary to-primary/80 py-20">
            <div className="container-custom px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Rent {equipment.name}?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-3xl mx-auto">
                Contact Western Eagle Transport today for competitive rates and immediate availability. Our team is ready to support your project with reliable equipment and professional service.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90" size="lg" asChild>
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="w-5 h-5 mr-2" /> +971 50 556 7467
                  </a>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white border-0" size="lg" asChild>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

// Default Layout Component (for forklift, wheel-loader, backhoe-loader)
const DefaultLayout = ({ equipment, slug, phoneNumber, relatedEquipment }: any) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-background py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={equipment.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-transparent" />
        
        <div className="container-custom px-4 relative z-10">
          <nav className="mb-8">
            <Link to="/#equipment" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Equipment
            </Link>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {equipment.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {equipment.heroSubtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Dubai, Abu Dhabi & All UAE</span>
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
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img 
                  src={equipment.image} 
                  alt={equipment.name}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:hidden relative rounded-xl overflow-hidden shadow-xl border border-border/50">
              <img 
                src={equipment.image} 
                alt={equipment.name}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 mt-2">
                What is a {equipment.name}?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {equipment.overview.description}
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
                <div className="grid gap-3">
                  {equipment.overview.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {equipment.overview.industries.map((industry: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {index % 6 === 0 && <Building2 className="w-5 h-5 text-primary" />}
                      {index % 6 === 1 && <Factory className="w-5 h-5 text-primary" />}
                      {index % 6 === 2 && <HardHat className="w-5 h-5 text-primary" />}
                      {index % 6 === 3 && <Truck className="w-5 h-5 text-primary" />}
                      {index % 6 === 4 && <Wrench className="w-5 h-5 text-primary" />}
                      {index % 6 === 5 && <Shield className="w-5 h-5 text-primary" />}
                    </div>
                    <span className="text-sm font-medium text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Applications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
              Real-World Use Cases
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {equipment.applications.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.applications.useCases.map((useCase: string, index: number) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-foreground font-medium">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rent Section */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
              Why Rent {equipment.name} from Western Eagle?
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
              {equipment.whyChoose.intro}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Cost-Effective Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">{equipment.whyChoose.costEffective}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Latest Models & Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">{equipment.whyChoose.latestModels}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">No Maintenance Hassles</h3>
                  <p className="text-muted-foreground leading-relaxed">{equipment.whyChoose.noMaintenance}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">UAE-Wide Coverage</h3>
                  <p className="text-muted-foreground leading-relaxed">{equipment.whyChoose.flexibility}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Options Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Fleet</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
              Available {equipment.name} Options
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our premium selection of {equipment.name.toLowerCase()} equipment.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.variants.map((variant: any) => (
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

      {/* Related Equipment */}
      {relatedEquipment.length > 0 && (
        <section className="section-padding">
          <div className="container-custom px-4">
            <div className="text-center mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Related Equipment</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                You May Also Need
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEquipment.map((related: any) => {
                const relatedData = equipmentData[related.slug];
                return (
                  <Link
                    key={related.slug}
                    to={`/equipment/${related.slug}`}
                    className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    {relatedData && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedData.heroSubtitle}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EquipmentDetail;
