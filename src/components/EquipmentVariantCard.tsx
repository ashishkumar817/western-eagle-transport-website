import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface EquipmentVariantCardProps {
  name: string;
  slug: string;
  parentSlug: string;
  image: string;
  showForRent?: boolean;
}

const EquipmentVariantCard = ({ name, slug, parentSlug, image, showForRent = true }: EquipmentVariantCardProps) => {
  const displayName = showForRent ? `${name}` : name;
  
  return (
    <Link
      to={`/equipment/${parentSlug}/${slug}`}
      className="group relative block rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={displayName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Title on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-primary mb-1">{displayName}</h3>
          
          {/* View Details - appears on hover */}
          <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">View Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EquipmentVariantCard;
