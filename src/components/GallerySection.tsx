const GallerySection = () => {
  // ============================================
  // GALLERY IMAGE PATHS - Add your images to public/assets/gallery/
  // ============================================
  const images = [
    { src: "/assets/gallery/gallery-1.webp", alt: "Excavator in action" },
    { src: "/assets/gallery/gallery-2.webp", alt: "Mobile crane" },
    { src: "/assets/gallery/gallery-3.webp", alt: "Forklift operation" },
    { src: "/assets/gallery/gallery-4.webp", alt: "Wheel loader" },
    { src: "/assets/gallery/gallery-5.webp", alt: "Boom lift platform" },
    { src: "/assets/gallery/gallery-6.webp", alt: "Backhoe loader" },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-custom px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">
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
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                <span className="text-white font-heading text-xs md:text-sm text-center leading-relaxed">
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
