import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EquipmentVariantCard from "@/components/EquipmentVariantCard";
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
          {/* Hero Section with Background */}
          <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src={equipment.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="container-custom px-4 relative z-10">
              <nav className="mb-6">
                <Link to="/#equipment" className="inline-flex items-center text-primary hover:underline">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Home / {equipment.name}
                </Link>
              </nav>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">{equipment.heroTitle}</h1>
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

          {/* Main Content Section - Image + Text */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Equipment Image */}
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Equipment Description */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{equipment.name} Rental</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{equipment.overview.description}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    If your company is looking for a cost-effective and efficient solution, {equipment.name.toLowerCase()} rental in Abu Dhabi and Dubai offers a flexible, budget-friendly alternative to purchasing these machines outright.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="btn-primary" asChild>
                      <a href={`tel:+${phoneNumber}`}>
                        <Phone className="w-5 h-5 mr-2" /> Call Now
                      </a>
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                      <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="section-padding bg-secondary">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Why Choose {equipment.name} Rental Service?
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto mb-12">
                Abu Dhabi is a global hub for heavy machinery and equipment services. Whether you're managing a bustling warehouse or a construction site, {equipment.name.toLowerCase()} rental in Dubai ensures you have the right equipment to handle your material handling needs efficiently.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Cost-Effective Solution */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-bold text-2xl">1.</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Cost-Effective Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {equipment.name} rental can be a significant investment especially for businesses with short-term needs. By opting for {equipment.name.toLowerCase()} rental in Abu Dhabi, companies can avoid the high initial purchase cost, maintenance expense, and storage fees. Renting allows businesses to pay only for what they need when they need it, helping them optimize their budget and maximize their revenue.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Latest Models */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-bold text-2xl">2.</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Access to the Latest Models and Technology</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The rental industry in UAE offers access to a wide range of modern {equipment.name.toLowerCase()} equipped with advanced technology, ensuring optimal performance and safety. Businesses that rent can use any of our state of the art equipment without having to worry about maintenance or technological obsolescence.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* No Maintenance */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-bold text-2xl">3.</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">No Maintenance Hassles</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When renting {equipment.name.toLowerCase()}, the responsibility for maintenance and repairs rests on the rental company. This eliminates downtime and ensures your team is always working with well-maintained operational machinery. Additionally, many {equipment.name.toLowerCase()} rental services offer immediate support so you can resolve any issues quickly.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Flexibility */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-bold text-2xl">4.</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Flexibility to Scale Up or Down</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {equipment.name} rental in Abu Dhabi offers flexibility, allowing businesses to scale the number of units they need based on project demand. Whether it's a large construction project or a temporary warehousing solution, our rental service provides the flexibility to adjust equipment count as required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industries Served */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                {equipment.name} Rental in Abu Dhabi - A Perfect Fit for Dynamic Businesses
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto mb-12">
                As one of the largest and most diverse commercial hubs in the Middle East, Dubai attracts numerous businesses across various industries, including logistics, manufacturing, retail, and construction. Whether you're managing a bustling warehouse or a construction site, {equipment.name.toLowerCase()} rental ensures you have the right equipment to handle your material handling needs efficiently.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment.applications.useCases.map((useCase, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border border-border flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience the Advantages */}
          <section className="section-padding bg-secondary">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Experience the Advantages of {equipment.name} Rental
              </h2>
              <p className="text-muted-foreground text-lg text-center max-w-4xl mx-auto mb-12">
                Our extensive assortment of {equipment.name.toLowerCase()} for rent features a variety of renowned manufacturers and specifications. Our {equipment.name.toLowerCase()} are equipped with the latest technology, ensuring optimal performance and efficiency for your operations. We provide quality equipment with regular maintenance and inspections, providing you with equipment that follows the highest safety standards.
              </p>
              
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

          {/* Why Us Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Why {equipment.name} is Your One-Stop Solution for Material Handling Equipment?
              </h2>
              <div className="bg-card p-8 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our services extend across Dubai and Abu Dhabi, covering the entire UAE. No matter where your project is located, we will always be ready to help you. Whether you need multiple {equipment.name.toLowerCase()} for a small medium-sized facility or want inventory operators available for your work, our team at Western Eagle Transport makes the {equipment.name.toLowerCase()} rental in the UAE a cost-effective choice for your business.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You can be sure that you will get {equipment.name.toLowerCase()} that are well-maintained and consistently function because of our dedication to quality and dependability. At Western Eagle Transport, we put a high focus on customer satisfaction. We guarantee that your rental experience surpasses your expectations; we go above and beyond.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us CTA */}
          <section className="bg-primary py-16">
            <div className="container-custom px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Contact Us Now!</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
                Ready to elevate your material handling capabilities? Choose Western Eagle Transport for reliable {equipment.name} Rental in Dubai & Abu Dhabi. Explore our diverse range of {equipment.name.toLowerCase()}, request a quote and experience the difference of working with a trusted partner in equipment rental.
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

          {/* Available Options Section */}
          <section className="section-padding bg-background">
            <div className="container-custom px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Available {equipment.name} Options
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {equipment.variants.map((variant) => (
                  <EquipmentVariantCard
                    key={variant.slug}
                    name={variant.name}
                    slug={variant.slug}
                    parentSlug={slug!}
                    image={equipment.image}
                  />
                ))}
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
