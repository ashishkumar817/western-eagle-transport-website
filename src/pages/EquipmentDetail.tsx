import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { equipmentList } from "@/lib/data";

const phoneNumber = "9108291462";

const equipmentDetails: Record<string, { varieties: string[]; features: string[]; applications: string[] }> = {
  forklift: {
    varieties: ["Electric Forklift", "Diesel Forklift", "LPG Forklift", "Reach Truck", "Pallet Jack"],
    features: ["High lifting capacity", "Ergonomic design", "Fuel efficient", "Easy maintenance"],
    applications: ["Warehouses", "Construction sites", "Manufacturing plants", "Logistics centers"],
  },
  "wheel-loader": {
    varieties: ["Compact Wheel Loader", "Medium Wheel Loader", "Large Wheel Loader", "Articulated Wheel Loader"],
    features: ["Powerful engine", "Large bucket capacity", "All-terrain capability", "Operator comfort"],
    applications: ["Construction", "Mining", "Quarries", "Material handling"],
  },
  "jcb-backhoe-3cx": {
    varieties: ["JCB 3CX Standard", "JCB 3CX Sitemaster", "JCB 3CX Eco", "JCB 3CX Compact"],
    features: ["Dual functionality", "4-wheel drive", "Extendable dipper", "High breakout force"],
    applications: ["Excavation", "Trenching", "Loading", "Road construction"],
  },
  boomloader: {
    varieties: ["Telescopic Handler", "Rotating Telehandler", "Compact Telehandler", "Heavy-Duty Telehandler"],
    features: ["Extended reach", "High lifting height", "Multiple attachments", "Stability system"],
    applications: ["Construction sites", "Agriculture", "Industrial work", "Warehousing"],
  },
  "mini-excavator": {
    varieties: ["1-Ton Mini Excavator", "3-Ton Mini Excavator", "5-Ton Mini Excavator", "Zero Tail Swing"],
    features: ["Compact size", "Easy transport", "Low fuel consumption", "Precise control"],
    applications: ["Urban construction", "Landscaping", "Utilities", "Indoor demolition"],
  },
  cranes: {
    varieties: ["Mobile Crane", "Tower Crane", "Crawler Crane", "All-Terrain Crane", "Rough Terrain Crane"],
    features: ["High lifting capacity", "Long boom reach", "Safety systems", "GPS monitoring"],
    applications: ["High-rise construction", "Industrial plants", "Infrastructure", "Heavy machinery installation"],
  },
  manlifts: {
    varieties: ["Articulating Boom Lift", "Telescopic Boom Lift", "Spider Lift", "Truck-Mounted Lift"],
    features: ["High working height", "360° rotation", "Safe work platform", "Easy controls"],
    applications: ["Building maintenance", "Electrical work", "Tree trimming", "Film production"],
  },
  "scissor-lift": {
    varieties: ["Electric Scissor Lift", "Diesel Scissor Lift", "Rough Terrain Scissor Lift", "Compact Scissor Lift"],
    features: ["Stable platform", "Indoor/outdoor use", "Easy operation", "Safety rails"],
    applications: ["Warehouse work", "Construction", "Maintenance", "Installation work"],
  },
  roller: {
    varieties: ["Vibratory Roller", "Static Roller", "Pneumatic Roller", "Tandem Roller", "Single Drum Roller"],
    features: ["High compaction force", "Variable frequency", "Water spray system", "Operator cabin"],
    applications: ["Road construction", "Asphalt compaction", "Soil compaction", "Landscaping"],
  },
  "recovery-trucks-10-ton": {
    varieties: ["Flatbed Recovery", "Wheel Lift Recovery", "Boom Recovery", "Integrated Tow Truck"],
    features: ["10-ton capacity", "Hydraulic system", "Safety winch", "GPS tracking"],
    applications: ["Vehicle recovery", "Machinery transport", "Emergency towing", "Fleet services"],
  },
  generators: {
    varieties: ["Diesel Generator", "Portable Generator", "Industrial Generator", "Silent Generator"],
    features: ["Reliable power output", "Fuel efficient", "Low noise", "Auto start"],
    applications: ["Construction sites", "Events", "Emergency backup", "Industrial use"],
  },
  compressors: {
    varieties: ["Portable Compressor", "Stationary Compressor", "Oil-Free Compressor", "High-Pressure Compressor"],
    features: ["High CFM output", "Energy efficient", "Low maintenance", "Reliable performance"],
    applications: ["Pneumatic tools", "Sandblasting", "Painting", "Industrial processes"],
  },
  "skid-steer-bobcat": {
    varieties: ["Wheeled Skid Steer", "Tracked Skid Steer", "Compact Skid Steer", "Large Frame Skid Steer"],
    features: ["Versatile attachments", "Compact size", "High maneuverability", "Powerful hydraulics"],
    applications: ["Landscaping", "Construction", "Demolition", "Snow removal"],
  },
  "passenger-bus": {
    varieties: ["25-Seater Bus", "35-Seater Bus", "50-Seater Bus", "Luxury Coach", "Mini Bus"],
    features: ["AC equipped", "Comfortable seating", "Safety features", "Experienced drivers"],
    applications: ["Staff transport", "Site visits", "Corporate events", "Tours"],
  },
};

const EquipmentDetail = () => {
  const { slug } = useParams();
  const equipment = equipmentList.find((e) => e.slug === slug);
  const details = slug ? equipmentDetails[slug] : null;

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

  return (
    <>
      <Helmet>
        <title>{equipment.name} for Rent in UAE | Western Eagle Transport</title>
        <meta name="description" content={`${equipment.description} Rent ${equipment.name} in Dubai, Abu Dhabi, Sharjah. Quality equipment, professional service.`} />
        <meta name="keywords" content={`${equipment.name} rental, ${equipment.name} for rent UAE, heavy equipment rental Dubai`} />
        <link rel="canonical" href={`https://westerneagle.ae/equipment/${slug}`} />
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
              <h1 className="heading-primary text-foreground mb-4">{equipment.name}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{equipment.description}</p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="btn-primary" asChild>
                  <a href={`tel:+91${phoneNumber}`}>
                    <Phone className="w-4 h-4 mr-2" /> Call for Quote
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
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Varieties */}
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h2 className="heading-tertiary text-foreground mb-4">Available Varieties</h2>
                    <ul className="space-y-3">
                      {details.varieties.map((variety, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          {variety}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h2 className="heading-tertiary text-foreground mb-4">Key Features</h2>
                    <ul className="space-y-3">
                      {details.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h2 className="heading-tertiary text-foreground mb-4">Applications</h2>
                    <ul className="space-y-3">
                      {details.applications.map((app, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-primary py-16">
            <div className="container-custom px-4 text-center">
              <h2 className="heading-secondary text-primary-foreground mb-4">
                Ready to Rent {equipment.name}?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get in touch with us for competitive pricing and reliable service across UAE.
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

export default EquipmentDetail;
