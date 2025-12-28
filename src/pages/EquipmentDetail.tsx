import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getEquipmentBySlug } from "@/lib/equipmentData";

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

  return (
    <>
      <Helmet>
        <title>{equipment.heroTitle} | Western Eagle Transport</title>
        <meta name="description" content={equipment.metaDescription} />
        <meta name="keywords" content={`${equipment.name} rental, ${equipment.name} for rent UAE, heavy equipment rental Dubai, ${equipment.name} Abu Dhabi`} />
        <link rel="canonical" href={`https://westerneagle.ae/equipment/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-28">
          {/* Hero Section */}
          <section className="bg-secondary py-16 md:py-24">
            <div className="container-custom px-4">
              <Link to="/#equipment" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Equipment
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{equipment.heroTitle}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">{equipment.heroSubtitle}</p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary" size="lg" asChild>
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="w-5 h-5 mr-2" /> Request Rental Quote
                  </a>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Inquiry
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{equipment.overview.title}</h2>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{equipment.overview.description}</p>
                  <div className="space-y-3">
                    {equipment.overview.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Industries Served</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {equipment.overview.industries.map((industry, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        {industry}
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{equipment.applications.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-3xl">{equipment.applications.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {equipment.applications.useCases.map((useCase, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border border-border flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Rent Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Why Rent {equipment.name} from Western Eagle?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment.whyRent.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Available Options Section */}
          <section className="section-padding bg-secondary">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Available {equipment.name} Options</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment.variants.map((variant) => (
                  <Link
                    key={variant.slug}
                    to={`/equipment/${slug}/${variant.slug}`}
                    className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-colors group"
                  >
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <img src={equipment.image} alt={variant.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {variant.name} for Rent
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{variant.description}</p>
                      <span className="inline-flex items-center text-primary text-sm mt-3 font-medium">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Need Help CTA Section */}
          <section className="bg-primary py-16">
            <div className="container-custom px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Need Help Choosing?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our equipment specialists are here to help you find the right {equipment.name.toLowerCase()} for your project. Get expert advice and competitive quotes.
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

export default EquipmentDetail;