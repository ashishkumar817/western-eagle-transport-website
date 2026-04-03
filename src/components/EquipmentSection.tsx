import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { equipmentData } from "@/lib/equipmentData";

const EquipmentSection = () => {
  return (
    <section
  id="equipment"
  className="section-padding bg-background relative z-10 pt-24 md:pt-32"
>

      <div className="container-custom px-2 sm:px-6">
        <div className="text-center mb-12">
          <span className="section-label">Our Fleet</span>
          <h2 className="heading-secondary mt-2">Heavy Equipment Rental in Abu Dhabi & UAE</h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
              Western Eagle Transport LLC is a trusted provider of heavy equipment rental
    in Abu Dhabi, serving Mussafah, Dubai, Sharjah, and across the UAE.
    We offer a modern fleet of construction and industrial machinery
    to support small, medium, and large-scale projects.
    
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Object.values(equipmentData).map((item) => (
            <Link
              key={item.slug}
              to={`/equipment/${item.slug}`}
              className="
                    group relative overflow-hidden rounded-lg block
                   aspect-[3/2] md:aspect-[4/3]
                        sm:aspect-[16/11] sm:aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain md:object-cover bg-black"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                <h3 className="
                    text-white font-heading
                    text-sm sm:text-base md:text-lg
                    leading-tight
                    line-clamp-2
                  ">
                    <span className="block sm:hidden">
                      {item.name.replace(" in Abu Dhabi", "")}
                    </span>
                    <span className="hidden sm:block">
                      {item.name}
                    </span>
                  </h3>
                                  <div className="flex items-center gap-1 mt-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">View Options</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* SEO Content Block */}
<div className="mt-12 max-w-4xl mx-auto text-left space-y-4">
  <h2 className="text-xl md:text-2xl font-heading text-foreground">
    Heavy Equipment Rental in Abu Dhabi & Mussafah
  </h2>

  <p className="text-muted-foreground text-sm md:text-base">
    Western Eagle Transport LLC provides reliable heavy equipment rental services
    in Abu Dhabi, Mussafah, Dubai, and across the UAE. Our fleet includes forklifts,
    excavators, cranes, wheel loaders, manlifts, and construction machinery for
    industrial, commercial, and infrastructure projects.
  </p>

  <p className="text-muted-foreground text-sm md:text-base">
    If you are searching for <strong>forklift rental in Abu Dhabi</strong>,
    <strong> excavator for rent in Mussafah</strong>, or heavy equipment rental
    with fast delivery and flexible terms, Western Eagle Transport is your trusted partner.
  </p>

  <p className="text-muted-foreground text-sm md:text-base">
    We offer daily, weekly, and monthly rental options with well-maintained machines
    and experienced operators, ensuring safety, productivity, and cost efficiency
    for every project across the UAE.
  </p>
</div>

      </div>


        {/* SEO Content Block – ADD BELOW GRID */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <h2 className="heading-secondary mb-4">
            Forklift, Excavator & Heavy Equipment Rental in Abu Dhabi
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Western Eagle Transport LLC offers reliable heavy equipment rental in Abu Dhabi,
            Mussafah, Dubai, Sharjah, and across the UAE. Our fleet includes forklifts,
            excavators, cranes, wheel loaders, JCB backhoe loaders, manlifts,
            scissor lifts, road rollers, generators, and compressors.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-4">
            If you are searching for <strong>forklift for rent in Abu Dhabi</strong>,
            <strong> excavator rental in Mussafah</strong>, or affordable construction
            equipment rental anywhere in the UAE, we provide flexible rental plans,
            certified operators, and well-maintained machinery.
          </p>
        </div>

      
      {/* 👆 THIS closes container-custom */}


    </section>
  );
};

export default EquipmentSection;
