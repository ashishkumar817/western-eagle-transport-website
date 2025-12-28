import excavatorImg from "@/assets/equipment/excavator.webp";
import craneImg from "@/assets/equipment/crane.webp";
import forkliftImg from "@/assets/equipment/forklift.webp";
import wheelLoaderImg from "@/assets/equipment/wheel-loader.webp";
import boomLiftImg from "@/assets/equipment/boom-lift.webp";
import backhoeImg from "@/assets/equipment/backhoe.webp";

const GallerySection = () => {
  const images = [
    { src: excavatorImg, alt: "Excavator in action" },
    { src: craneImg, alt: "Mobile crane" },
    { src: forkliftImg, alt: "Forklift operation" },
    { src: wheelLoaderImg, alt: "Wheel loader" },
    { src: boomLiftImg, alt: "Boom lift platform" },
    { src: backhoeImg, alt: "Backhoe loader" },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-heading uppercase tracking-[0.2em] mb-2">
            Our Work
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Equipment in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See our heavy equipment at work across various construction sites in the UAE.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                <span className="text-foreground font-heading uppercase tracking-wide text-xs md:text-sm text-center leading-tight">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
