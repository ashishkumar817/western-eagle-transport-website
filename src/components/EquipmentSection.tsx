import { Button } from "@/components/ui/button";
import excavatorImg from "@/assets/equipment/excavator.jpg";
import forkliftImg from "@/assets/equipment/forklift.jpg";
import wheelLoaderImg from "@/assets/equipment/wheel-loader.jpg";
import craneImg from "@/assets/equipment/crane.jpg";
import boomLiftImg from "@/assets/equipment/boom-lift.jpg";
import scissorLiftImg from "@/assets/equipment/scissor-lift.jpg";
import generatorImg from "@/assets/equipment/generator.jpg";
import skidSteerImg from "@/assets/equipment/skid-steer.jpg";
import backhoeImg from "@/assets/equipment/backhoe.jpg";
import busImg from "@/assets/equipment/bus.jpg";

interface EquipmentCardProps {
  name: string;
  image: string;
}

const EquipmentCard = ({ name, image }: EquipmentCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-gold hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg text-foreground uppercase tracking-wide mb-3">
          {name}
        </h3>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 text-xs">
            View Details
          </Button>
          <Button size="sm" className="flex-1 text-xs">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const EquipmentSection = () => {
  const equipment = [
    { name: "Forklift for Rent", image: forkliftImg },
    { name: "Wheel Loader for Rent", image: wheelLoaderImg },
    { name: "Excavator for Rent", image: excavatorImg },
    { name: "Crane for Rent", image: craneImg },
    { name: "Boom Lift for Rent", image: boomLiftImg },
    { name: "Scissor Lift for Rent", image: scissorLiftImg },
    { name: "Generator for Rent", image: generatorImg },
    { name: "Skid Steer Loader for Rent", image: skidSteerImg },
    { name: "Backhoe Loader for Rent", image: backhoeImg },
    { name: "Passenger Bus for Rent", image: busImg },
  ];

  return (
    <section id="equipment" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-heading uppercase tracking-[0.2em] mb-2">
            Our Fleet
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Equipment Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of heavy equipment available for rent. All machinery is well-maintained and ready for your project.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipment.map((item) => (
            <EquipmentCard key={item.name} name={item.name} image={item.image} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button size="lg" className="btn-primary">
            View All Equipment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
