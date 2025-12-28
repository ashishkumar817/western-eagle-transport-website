import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
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
        <link rel="canonical" href={`https://westerneagle.ae/equipment/${slug}/${variantSlug}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-28">
          {/* Hero Section */}
          <section className="bg-secondary py-16 md:py-24">
            <div className="container-custom px-4">
              <Link to={`/equipment/${slug}`} className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to {equipment.name} Options
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{variant.name} for Rent in UAE</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                Professional {variant.capacity} {equipment.name.toLowerCase()} rental services in Dubai, Abu Dhabi & Sharjah
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
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About {variant.name}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{variant.description}</p>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key Specifications</h3>
                  <div className="space-y-3 mb-8">
                    {variant.specifications.map((spec, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="bg-card p-6 rounded-lg border border-border mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Typical Applications</h3>
                    <div className="space-y-3">
                      {variant.applications.map((app, index) => (
                        <div key={index} className="flex items-center gap-3 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Why Rent from Western Eagle?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-1" /> ICV Certified Company</li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-1" /> Trained operators available</li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-1" /> UAE-wide delivery</li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-1" /> 24/7 support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Options Section */}
          {otherVariants.length > 0 && (
            <section className="section-padding bg-secondary">
              <div className="container-custom px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Other {equipment.name} Options</h2>
                <div className="flex flex-wrap gap-3">
                  {otherVariants.map((v) => (
                    <Link
                      key={v.slug}
                      to={`/equipment/${slug}/${v.slug}`}
                      className="px-4 py-2 bg-card border border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {v.name}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-primary py-16">
            <div className="container-custom px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Rent {variant.name}?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get competitive pricing and fast delivery across Dubai, Abu Dhabi, Sharjah and all UAE locations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" size="lg" asChild>
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="w-5 h-5 mr-2" /> Contact Our Team
                  </a>
                </Button>
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" size="lg" asChild>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
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

export default EquipmentVariant;
