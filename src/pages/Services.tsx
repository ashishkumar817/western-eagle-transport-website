import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { servicesList } from "@/lib/data";
import { Button } from "@/components/ui/button";
import excavatorImg from "@/assets/equipment/excavator.webp";
import forkliftImg from "@/assets/equipment/forklift.webp";
import wheelLoaderImg from "@/assets/equipment/wheel-loader.webp";
import craneImg from "@/assets/equipment/crane.webp";
import generatorImg from "@/assets/equipment/generator.webp";
import boomLiftImg from "@/assets/equipment/boom-lift.webp";
import scissorLiftImg from "@/assets/equipment/scissor-lift.webp";
import backhoeImg from "@/assets/equipment/backhoe.webp";
import skidSteerImg from "@/assets/equipment/skid-steer.webp";

const serviceImages: Record<string, string> = {
  "leasing-machineries-equipments": excavatorImg,
  "supply-trained-operators": forkliftImg,
  "equipment-repair-maintenance": wheelLoaderImg,
  "quality-assured-equipment": craneImg,
  "welding-cutting-equipment": generatorImg,
  "heavy-duty-construction": boomLiftImg,
  "scaffolding": scissorLiftImg,
  "logistic-operator-support": backhoeImg,
  "workshop-maintenance": skidSteerImg,
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Western Eagle Transport Company</title>
        <meta name="description" content="Explore our comprehensive range of equipment rental services including leasing, trained operators, maintenance, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        <main className="pt-20">
          <section className="section-padding bg-background">
            <div className="container-custom px-6">
              <div className="text-center mb-12">
                <p className="text-primary font-heading uppercase tracking-[0.2em] mb-2">
                  What We Offer
                </p>
                <h1 className="heading-secondary text-foreground mb-4">
                  All Services
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive heavy equipment rental services tailored to meet your project requirements.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {servicesList.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
                  >
                    <img
                      src={serviceImages[service.slug] || excavatorImg}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <h3 className="font-heading font-semibold text-sm md:text-base text-white uppercase tracking-wide">
                        {service.name}
                      </h3>
                    </div>
                  </Link>
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

export default Services;
