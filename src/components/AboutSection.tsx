import { CheckCircle, Phone, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-equipment.jpg";

const AboutSection = () => {
  const features = [
    "On-time Delivery",
    "Professional Service",
    "Modern Fleet",
    "Safety Certified",
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-dark">
              <img
                src={aboutImage}
                alt="Heavy Equipment in Action"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-primary px-6 py-4 rounded-lg">
                <p className="font-heading font-bold text-3xl text-primary-foreground">10+</p>
                <p className="text-sm text-primary-foreground/80 uppercase tracking-wide">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-heading uppercase tracking-[0.2em] mb-2">
              About Us
            </p>
            <h2 className="heading-secondary text-foreground mb-6">
              Heavy Equipment Rental Company
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Western Eagle Transport Company is your premier partner for heavy equipment rental across the UAE. With over a decade of experience, we provide reliable, well-maintained machinery to power your construction, industrial, and transport projects.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to safety, quality, and customer satisfaction has made us a trusted name in the industry. From excavators to cranes, forklifts to generators, we have the equipment you need to get the job done right.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+971 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fleet Size</p>
                  <p className="font-semibold text-foreground">100+ Equipment</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="btn-primary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
