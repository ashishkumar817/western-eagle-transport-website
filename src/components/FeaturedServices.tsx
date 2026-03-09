import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { servicesList } from "@/lib/data";
import { serviceImages } from "@/lib/serviceImages";


// ============================================
// SERVICE IMAGE PATHS - Add your images to public/assets/services/
// ============================================


const FeaturedServices = () => {
  // Show only first 6 services
  const displayedServices = servicesList.slice(0, 6);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="section-label">
            What We Offer
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Featured Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
            Professional heavy equipment rental services tailored to meet your project requirements.
          </p>
        </div>

        {/* Services Grid - 2 per row on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {displayedServices.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] block animate-on-scroll"
            >
              <img
                src={serviceImages[service.slug]}
                alt={service.name}
                loading="lazy"
                width={280}
                height={210}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="font-heading font-medium text-xs sm:text-sm md:text-base text-white">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-8 md:mt-10">
          <Button size="lg" className="btn-primary" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;