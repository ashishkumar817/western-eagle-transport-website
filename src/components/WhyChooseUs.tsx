import { Package, Users, Settings, Shield, Truck, Headphones, Award } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 animate-on-scroll">
      <div className="feature-icon mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-heading font-semibold text-lg uppercase tracking-wide text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: Package,
      title: "Extensive Equipment Inventory",
      description: "Wide selection of heavy machinery to meet all your project requirements.",
    },
    {
      icon: Users,
      title: "Skilled & Certified Operators",
      description: "Professional operators trained to handle equipment safely and efficiently.",
    },
    {
      icon: Settings,
      title: "Customized Rental Solutions",
      description: "Flexible rental plans tailored to your specific project needs and timeline.",
    },
    {
      icon: Shield,
      title: "Quality & Safety Assurance",
      description: "All equipment undergoes rigorous maintenance and safety checks.",
    },
    {
      icon: Truck,
      title: "Wide Range of Machinery",
      description: "From excavators to generators, we have everything you need.",
    },
    {
      icon: Headphones,
      title: "Reliable Customer Support",
      description: "24/7 support to ensure your project runs smoothly without interruptions.",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-heading uppercase tracking-[0.2em] mb-2">
            Why Us
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Your Trusted Equipment Partner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're dedicated to providing reliable heavy equipment and exceptional service to power your projects across the UAE.
          </p>
          
          {/* ICV Certification Badge */}
          <div className="inline-flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">ICV Certified (UAE)</p>
              <p className="text-xs text-muted-foreground">Compliant with the UAE In-Country Value Program</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
