import { Link } from "react-router-dom";
import { equipmentList } from "@/lib/data";
import { ArrowRight } from "lucide-react";

// ============================================
// EQUIPMENT IMAGE PATHS - Add your images to public/assets/equipment/
// ============================================
const equipmentImages: Record<string, string> = {
  "forklift": "/assets/equipment/forklift.webp",
  "wheel-loader": "/assets/equipment/wheel-loader.webp",
  "backhoe-loader": "/assets/equipment/backhoe.webp",
  "boom-loader": "/assets/equipment/telehandler.webp",
  "excavator": "/assets/equipment/excavator.webp",
  "crane": "/assets/equipment/crane.webp",
  "manlift": "/assets/equipment/manlift.webp",
  "scissor-lift": "/assets/equipment/scissor-lift.webp",
  "roller": "/assets/equipment/roller.webp",
  "recovery-truck": "/assets/equipment/recovery-truck.webp",
  "generator": "/assets/equipment/generator.webp",
  "compressor": "/assets/equipment/compressor.webp",
  "skid-steer": "/assets/equipment/skid-steer.webp",
  "passenger-bus": "/assets/equipment/bus.webp",
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
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300" />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <h3 className="font-heading font-medium text-sm md:text-base text-white">
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
      <div className="container-custom px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="section-label">Our Fleet</span>
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
              image={equipmentImages[item.slug] || "/assets/equipment/excavator.webp"} 
              slug={item.slug} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;