import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getServiceData, getAllServices } from "@/lib/serviceData";

// ============================================
// SERVICE IMAGE PATHS - Add your images to public/assets/services/
// ============================================
const serviceImages: Record<string, string> = {
  "leasing-machineries-equipments": "/assets/services/leasing-machineries.webp",
  "supply-trained-operators": "/assets/services/trained-operators.webp",
  "equipment-repair-maintenance": "/assets/services/repair-maintenance.webp",
  "quality-assured-equipment": "/assets/services/quality-assured.webp",
  "welding-cutting-equipment": "/assets/services/welding-cutting.webp",
  "heavy-duty-construction": "/assets/services/heavy-duty-construction.webp",
  "scaffolding": "/assets/services/scaffolding.webp",
  "logistic-operator-support": "/assets/services/logistic-support.webp",
  "workshop-maintenance": "/assets/services/workshop-maintenance.webp",
};

const phoneNumber = "971505567467";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getServiceData(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 text-center">
          <h1 className="heading-secondary text-foreground">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Go back to home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;
  const heroImage = serviceImages[slug || ""] || "/assets/services/default.webp";

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.metaKeywords} />
        <link rel="canonical" href={`https://westerneagle.ae/services/${slug}`} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
              <img src={heroImage} alt={service.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
            </div>
            <div className="container-custom px-4 relative z-10 py-16 pr-20 md:pr-4">
              <Link to="/#services" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
              </Link>
              <div className="max-w-3xl">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h1 className="heading-primary text-white mb-6">{service.heroTitle}</h1>
                <p className="text-lg text-white/80 mb-8">{service.heroSubtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-primary" asChild>
                    <a href={`tel:+${phoneNumber}`}>
                      <Phone className="w-4 h-4 mr-2" /> Call Now
                    </a>
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Inquiry
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="section-padding bg-card">
            <div className="container-custom px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="heading-secondary text-foreground mb-6">{service.overview.title}</h2>
                  {service.overview.content.map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                {service.overview.highlights && (
                  <div className="bg-secondary p-8 rounded-lg">
                    <h3 className="heading-tertiary text-foreground mb-6">Key Highlights</h3>
                    <ul className="space-y-4">
                      {service.overview.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-12">How This Service Helps You</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.benefits.map((benefit, idx) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <BenefitIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="section-padding bg-secondary">
            <div className="container-custom px-4 pr-20 md:pr-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="heading-secondary text-foreground mb-6">{service.whyChooseUs.title}</h2>
                  <ul className="space-y-4">
                    {service.whyChooseUs.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <img src={heroImage} alt={service.name} className="rounded-lg shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="text-center relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                    {idx < service.process.length - 1 && (
                      <ChevronRight className="hidden lg:block absolute top-6 -right-3 w-6 h-6 text-primary" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="section-padding bg-card">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-8">Industries We Serve</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {service.industries.map((industry, idx) => (
                  <span key={idx} className="px-6 py-3 bg-secondary rounded-full text-foreground font-medium">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`} className="bg-card border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="section-padding bg-secondary">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-12">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {service.relatedServices.map((related, idx) => (
                  <Link
                    key={idx}
                    to={`/services/${related.slug}`}
                    className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all group"
                  >
                    <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{related.description}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary py-16">
            <div className="container-custom px-4 text-center">
              <h2 className="heading-secondary text-primary-foreground mb-4">
                Need {service.name} in UAE?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Contact our team for professional service and competitive pricing across Dubai, Abu Dhabi, Sharjah, and all Emirates.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-background text-foreground hover:bg-background/90 border border-background" asChild>
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white border-0" asChild>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
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

export default ServiceDetail;