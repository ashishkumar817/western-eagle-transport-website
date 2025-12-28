import { Link } from "react-router-dom";
import { equipmentList } from "@/lib/data";
import { ArrowRight } from "lucide-react";
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

const equipmentImages: Record<string, string> = {
  "forklift": forkliftImg,
  "wheel-loader": wheelLoaderImg,
  "backhoe-loader": backhoeImg,
  "boom-loader": boomLiftImg,
  "excavator": excavatorImg,
  "crane": craneImg,
  "manlift": boomLiftImg,
  "scissor-lift": scissorLiftImg,
  "roller": wheelLoaderImg,
  "recovery-truck": busImg,
  "generator": generatorImg,
  "compressor": generatorImg,
  "skid-steer": skidSteerImg,
  "passenger-bus": busImg,
};

interface EquipmentCardProps {
  name: string;
  image: string;
  slug: string;
}

const EquipmentCard = ({ name, image, slug }: EquipmentCardProps) => {
  return (
    <Link 
      to={`/equipment/${slug}`}
      className="group relative overflow-hidden rounded-lg aspect-[4/3] block animate-on-scroll"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-300" />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <h3 className="font-heading font-semibold text-sm md:text-base text-foreground uppercase tracking-wide">
          {name}
        </h3>
        
        {/* View Options - visible on hover */}
        <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-primary text-xs md:text-sm font-medium">View Options</span>
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary" />
        </div>
      </div>
    </Link>
  );
};

const EquipmentSection = () => {
  return (
    <section id="equipment" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Fleet</span>
          <h2 className="heading-secondary text-foreground mb-4 mt-2">
            Equipment Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
            Browse our extensive range of heavy machinery available for rent. All equipment is well-maintained and ready for your project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {equipmentList.map((item) => (
            <EquipmentCard 
              key={item.slug} 
              name={item.name} 
              image={equipmentImages[item.slug] || excavatorImg} 
              slug={item.slug} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
