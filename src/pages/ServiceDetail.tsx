import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check, Shield, Clock, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { servicesList } from "@/lib/data";

const phoneNumber = "9108291462";

const serviceDetails: Record<string, { benefits: string[]; process: string[]; icon: React.ElementType }> = {
  "leasing-machineries-equipments": {
    benefits: ["Flexible lease terms", "No large capital investment", "Latest equipment models", "Maintenance included", "Quick delivery"],
    process: ["Contact us with requirements", "Receive custom quote", "Agree on terms", "Equipment delivered on-site"],
    icon: Wrench,
  },
  "supply-trained-operators": {
    benefits: ["Certified professionals", "Safety trained", "Experience across industries", "Flexible scheduling", "Background verified"],
    process: ["Specify equipment type", "Define project duration", "Operator assigned", "On-site deployment"],
    icon: Users,
  },
  "equipment-repair-maintenance": {
    benefits: ["24/7 emergency support", "Genuine spare parts", "Experienced technicians", "Preventive maintenance", "Quick turnaround"],
    process: ["Report issue", "Technician dispatch", "Diagnosis & repair", "Quality testing"],
    icon: Wrench,
  },
  "quality-assured-equipment": {
    benefits: ["Regular inspections", "Safety certifications", "Performance tested", "Clean and maintained", "Documentation provided"],
    process: ["Equipment selection", "Quality check", "Documentation review", "Delivery & handover"],
    icon: Shield,
  },
  "welding-cutting-equipment": {
    benefits: ["Industrial grade equipment", "Various welding types", "Safety gear included", "Operator training", "Consumables available"],
    process: ["Requirement assessment", "Equipment selection", "Safety briefing", "On-site setup"],
    icon: Wrench,
  },
  "heavy-duty-construction": {
    benefits: ["Large fleet available", "Latest models", "GPS tracking", "Operator included", "Project-based pricing"],
    process: ["Project consultation", "Equipment recommendation", "Contract signing", "Mobilization"],
    icon: Wrench,
  },
  scaffolding: {
    benefits: ["Certified scaffolding", "Various configurations", "Safety compliant", "Quick installation", "Rental or purchase"],
    process: ["Site assessment", "Design proposal", "Installation", "Safety inspection"],
    icon: Shield,
  },
  "logistic-operator-support": {
    benefits: ["End-to-end logistics", "Equipment transport", "Site coordination", "Real-time tracking", "Insurance covered"],
    process: ["Logistics planning", "Transport arrangement", "Delivery coordination", "On-site support"],
    icon: Clock,
  },
  "workshop-maintenance": {
    benefits: ["Fully equipped workshop", "All equipment types", "Skilled technicians", "Genuine parts", "Warranty on repairs"],
    process: ["Equipment drop-off", "Inspection & diagnosis", "Repair quotation", "Repair & testing"],
    icon: Wrench,
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesList.find((s) => s.slug === slug);
  const details = slug ? serviceDetails[slug] : null;

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

  const IconComponent = details?.icon || Wrench;

  return (
    <>
      <Helmet>
        <title>{service.name} | Western Eagle Transport Company UAE</title>
        <meta name="description" content={`${service.description} Professional services in Dubai, Abu Dhabi, Sharjah.`} />
        <meta name="keywords" content={`${service.name}, heavy equipment services UAE, construction services Dubai`} />
        <link rel="canonical" href={`https://westerneagle.ae/services/${slug}`} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-28">
          {/* Hero Section */}
          <section className="bg-secondary py-16 md:py-24">
            <div className="container-custom px-4">
              <Link to="/#services" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
              </Link>
              
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="heading-primary text-foreground mb-4">{service.name}</h1>
                  <p className="text-lg text-muted-foreground max-w-2xl">{service.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="btn-primary" asChild>
                  <a href={`tel:+91${phoneNumber}`}>
                    <Phone className="w-4 h-4 mr-2" /> Call for Details
                  </a>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Inquiry
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Details Section */}
          {details && (
            <section className="section-padding">
              <div className="container-custom px-4">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Benefits */}
                  <div className="bg-card p-8 rounded-lg border border-border">
                    <h2 className="heading-secondary text-foreground mb-6">Why Choose This Service</h2>
                    <ul className="space-y-4">
                      {details.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <Check className="w-6 h-6 text-primary flex-shrink-0" />
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="bg-card p-8 rounded-lg border border-border">
                    <h2 className="heading-secondary text-foreground mb-6">How It Works</h2>
                    <ol className="space-y-4">
                      {details.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-lg text-muted-foreground pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-primary py-16">
            <div className="container-custom px-4 text-center">
              <h2 className="heading-secondary text-primary-foreground mb-4">
                Need {service.name}?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Contact our team for professional service and competitive pricing across UAE.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href={`tel:+91${phoneNumber}`}>
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </Button>
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                  <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer">
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
