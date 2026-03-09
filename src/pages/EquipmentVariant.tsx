import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check, ChevronRight, Shield, Clock, Truck, Settings, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EquipmentVariantCard from "@/components/EquipmentVariantCard";
import { getEquipmentBySlug, getVariantBySlug } from "@/lib/equipmentData";

const phoneNumber = "971505567467";

const EquipmentVariant = () => {
  const { slug, variantSlug } = useParams();
  const equipment = slug ? getEquipmentBySlug(slug) : null;
  const variant = slug && variantSlug ? getVariantBySlug(slug, variantSlug) : null;

  if (!equipment || !variant) {
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

  const otherVariants = equipment.variants.filter(v => v.slug !== variantSlug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${variant.name} for Rent in UAE`,
    description: variant.description,
    brand: { "@type": "Brand", name: "Western Eagle Transport" },
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>{variant.name} for Rent in UAE | Western Eagle Transport</title>
        <meta name="description" content={`${variant.description} Rent ${variant.name} in Dubai, Abu Dhabi, Sharjah. Professional service, competitive rates.`} />
        <meta name="keywords" content={`${variant.name} rental UAE, ${variant.capacity} ${equipment.name} for rent Dubai, heavy equipment rental Abu Dhabi`} />
        <link rel="canonical" href={`https://westerneagletransportllc.com/equipment/${slug}/${variantSlug}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-28">
          {/* Hero Section */}
          <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src={equipment.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="container-custom px-4 relative z-10">
              <nav className="mb-6">
                <Link to={`/equipment/${slug}`} className="inline-flex items-center text-primary hover:underline">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Home / {equipment.name} / {variant.name}
                </Link>
              </nav>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {variant.name} 
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                Professional {variant.capacity} {equipment.name.toLowerCase()} rental services across Dubai, Abu Dhabi & Sharjah
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary" size="lg" asChild>
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="w-5 h-5 mr-2" /> Call for Quote
                  </a>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                  </a>
                </Button>
                {variant.brochure && (
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" size="lg" asChild>
                    <a href={variant.brochure} download target="_blank" rel="noopener noreferrer">
                      <Download className="w-5 h-5 mr-2" /> Download Brochure
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Equipment Image */}
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={variant.image || equipment.image} 
                    alt={variant.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Equipment Details */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    About {variant.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {variant.description}
                  </p>
                  
                  <div className="space-y-6">
                    {/* Key Specifications */}
                    <div className="bg-card p-6 rounded-lg border border-border">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-primary" />
                        Key Specifications
                      </h3>
                      <div className="space-y-3">
                        {variant.specifications.map((spec, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="section-padding bg-secondary">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Typical Applications for {variant.name}
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto mb-12">
                The {variant.capacity} {equipment.name.toLowerCase()} is engineered to excel in a variety of demanding applications across the UAE. Whether you're working on construction, logistics, or industrial projects, this equipment delivers reliable performance.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {variant.applications.map((app, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg border border-border flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Rent Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Why Rent {variant.name} from Western Eagle?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">ICV Certified</h3>
                  <p className="text-muted-foreground text-sm">Fully compliant with UAE government standards and procurement requirements</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Trained Operators</h3>
                  <p className="text-muted-foreground text-sm">Skilled and certified operators available to ensure safe operation</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">UAE-wide Delivery</h3>
                  <p className="text-muted-foreground text-sm">Fast delivery across Dubai, Abu Dhabi, Sharjah and all Emirates</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground text-sm">Round-the-clock technical support and breakdown assistance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="bg-primary py-16">
            <div className="container-custom px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Rent {variant.name}?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get competitive pricing and fast delivery across Dubai, Abu Dhabi, Sharjah and all UAE locations. Contact our equipment specialists today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background" size="lg" asChild>
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="w-5 h-5 mr-2" /> Contact Our Team
                  </a>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Other Available Options Section */}
          {otherVariants.length > 0 && (
            <section className="section-padding bg-background">
              <div className="container-custom px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Other Available Options
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {otherVariants.map((v) => (
                    <EquipmentVariantCard
                      key={v.slug}
                      name={v.name}
                      slug={v.slug}
                      parentSlug={slug!}
                      image={v.image || equipment.image}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default EquipmentVariant;
