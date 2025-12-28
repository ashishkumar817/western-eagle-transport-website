import { Phone, Truck, Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ============================================
// ABOUT IMAGE PATH - Add your image to public/assets/
// ============================================
const aboutImage = "/assets/about-equipment.webp";

const AboutSection = () => {
  const highlights = [
    "Reliable Machinery",
    "Certified Operators",
    "24/7 Support",
    "Competitive Rates",
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-on-scroll">
            <div className="relative overflow-hidden rounded-lg shadow-dark">
              <img
                src={aboutImage}
                alt="Heavy Equipment in Action"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-label">
              About Us
            </p>
            <h2 className="heading-secondary text-foreground mb-6">
              Heavy Equipment Rental Company
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Western Eagle Transport Company is based in the Mussafah Industrial Area, Abu Dhabi. The company has one of the largest fleets of lifting equipment, including forklifts, telehandlers, cranes, and manlifts, for rent on a daily, weekly, or monthly basis. The company's motto is to serve the industry with passion and a professional approach, using state of-the-art technology and providing tailor-made services at competitive prices.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to safety, quality, and customer satisfaction has made us a trusted partner for contractors, developers, and construction companies across Dubai, Abu Dhabi, and Sharjah. We maintain a modern fleet of well-maintained equipment operated by skilled and certified professionals.
            </p>

            {/* ICV Certification Badge */}
            <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20 mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">ICV Certified (UAE)</p>
                <p className="text-sm text-muted-foreground">Compliant with the UAE In-Country Value Program</p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/western-eagle-profile.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Company Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;