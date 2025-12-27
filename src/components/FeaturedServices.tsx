import excavatorImg from "@/assets/equipment/excavator.jpg";
import generatorImg from "@/assets/equipment/generator.jpg";
import forkliftImg from "@/assets/equipment/forklift.jpg";
import wheelLoaderImg from "@/assets/equipment/wheel-loader.jpg";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg animate-on-scroll">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-heading font-semibold text-xl uppercase tracking-wide text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeaturedServices = () => {
  const services = [
    {
      title: "Excavator Rental",
      description: "Powerful excavators for all earthmoving and construction needs.",
      image: excavatorImg,
    },
    {
      title: "Generator Rental",
      description: "Reliable power solutions for construction sites and events.",
      image: generatorImg,
    },
    {
      title: "Forklift Rental",
      description: "Material handling equipment for warehouses and construction.",
      image: forkliftImg,
    },
    {
      title: "Complete Equipment Solutions",
      description: "Full range of machinery for comprehensive project support.",
      image: wheelLoaderImg,
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-heading uppercase tracking-[0.2em] mb-2">
            What We Offer
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Featured Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional heavy equipment rental services tailored to meet your project requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
