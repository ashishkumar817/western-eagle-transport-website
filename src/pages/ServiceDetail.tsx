import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getServiceData, getAllServices } from "@/lib/serviceData";
import { serviceImages } from "@/lib/serviceImages";


// ============================================
// SERVICE IMAGE PATHS - Add your images to public/assets/services/
// ============================================

const phoneNumber = "971505567467";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getServiceData(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 text-center">
          <h1 className="heading-secondary text-foreground">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Go back to home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;
  const heroImage = serviceImages[slug || ""] ;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.metaKeywords} />
        <link rel="canonical" href={`https://westerneagletransportllc.com/services/${slug}`} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
              <img src={heroImage} alt={service.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
            </div>
            <div className="container-custom px-4 relative z-10 py-16 pr-20 md:pr-4">
              <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
              </Link>
              <div className="max-w-3xl">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h1 className="heading-primary text-white mb-6">{service.heroTitle}</h1>
                <p className="text-lg text-white/80 mb-8">{service.heroSubtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-primary" asChild>
                    <a href={`tel:+${phoneNumber}`}>
                      <Phone className="w-4 h-4 mr-2" /> Call Now
                    </a>
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Inquiry
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="section-padding bg-card">
            <div className="container-custom px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="heading-secondary text-foreground mb-6">{service.overview.title}</h2>
                  {service.overview.content.map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                {service.overview.highlights && (
                  <div className="bg-secondary p-8 rounded-lg">
                    <h3 className="heading-tertiary text-foreground mb-6">Key Highlights</h3>
                    <ul className="space-y-4">
                      {service.overview.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-12">How This Service Helps You</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.benefits.map((benefit, idx) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <BenefitIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="section-padding bg-secondary">
            <div className="container-custom px-4 pr-20 md:pr-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="heading-secondary text-foreground mb-6">{service.whyChooseUs.title}</h2>
                  <ul className="space-y-4">
                    {service.whyChooseUs.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <img src={heroImage} alt={service.name} className="rounded-lg shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="text-center relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                    {idx < service.process.length - 1 && (
                      <ChevronRight className="hidden lg:block absolute top-6 -right-3 w-6 h-6 text-primary" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="section-padding bg-card">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-8">Industries We Serve</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {service.industries.map((industry, idx) => (
                  <span key={idx} className="px-6 py-3 bg-secondary rounded-full text-foreground font-medium">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`} className="bg-card border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="section-padding bg-secondary">
            <div className="container-custom px-4">
              <h2 className="heading-secondary text-foreground text-center mb-12">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {service.relatedServices.map((related, idx) => (
                  <Link
                    key={idx}
                    to={`/services/${related.slug}`}
                    className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all group"
                  >
                    <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{related.description}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
{slug === "leasing-machineries-equipments" && (
  <section className="seo-section bg-background py-16">
    <div className="container-custom max-w-4xl mx-auto text-left">

      {/* H2 */}
      <h2 className="heading-secondary mb-4">
        Leasing Machineries & Equipments in Abu Dhabi
      </h2>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC provides professional leasing services for
        machineries and equipment in Abu Dhabi, Mussafah, Dubai, and across the UAE.
        Our machinery leasing solutions are designed to support construction,
        industrial, logistics, and infrastructure projects that require reliable
        equipment without the burden of ownership.
      </p>

      <p className="text-muted-foreground mb-6">
        We offer short-term and long-term leasing options for a wide range of heavy
        machinery and industrial equipment, allowing businesses to scale operations
        efficiently while controlling costs. Our leasing plans are flexible and
        tailored to meet project-specific requirements.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Machinery & Equipment Leasing Solutions
      </h3>

      <p className="text-muted-foreground mb-4">
        Leasing machineries and equipment in Abu Dhabi is an ideal solution for
        companies involved in construction, oil & gas, manufacturing, warehousing,
        and infrastructure development. Our leased equipment is suitable for earthmoving,
        material handling, lifting operations, power generation, and site support.
      </p>

      <p className="text-muted-foreground mb-6">
        From excavators, forklifts, cranes, and loaders to generators, compressors,
        and access equipment, we provide dependable leasing solutions that ensure
        operational continuity across the UAE.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Benefits of Leasing Machineries & Equipments
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Reduced capital investment and improved cash flow</li>
        <li>Access to modern and well-maintained equipment</li>
        <li>Flexible leasing periods – short-term & long-term</li>
        <li>No ownership or depreciation concerns</li>
        <li>Maintenance and technical support included</li>
        <li>Scalable solutions for growing project demands</li>
      </ul>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Why Choose Western Eagle for Machinery Leasing?
      </h3>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC is a trusted partner for machinery and equipment
        leasing in Abu Dhabi and the UAE. Our commitment to quality, safety, and
        timely service ensures that our clients receive reliable equipment backed
        by professional support.
      </p>

      <p className="text-muted-foreground">
        Whether you require equipment leasing for a single project or long-term
        operational support, our team delivers cost-effective solutions aligned
        with UAE industry standards and project timelines.
      </p>

    </div>
  </section>
)}
{slug === "supply-trained-operators" && (
  <section className="seo-section bg-background py-16">
    <div className="container-custom max-w-4xl mx-auto text-left">

      {/* H2 */}
      <h2 className="heading-secondary mb-4">
        Supply of Trained Operators in Abu Dhabi & UAE
      </h2>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC provides professional supply of trained operators
        in Abu Dhabi, Mussafah, Dubai, and across the UAE. Our certified and experienced
        operators are available for a wide range of heavy equipment and machinery,
        ensuring safe, efficient, and productive site operations.
      </p>

      <p className="text-muted-foreground mb-6">
        We supply skilled operators for construction, industrial, infrastructure,
        logistics, and maintenance projects. All operators are trained to work in
        compliance with UAE safety regulations and industry best practices.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Trained Equipment Operators We Supply
      </h3>

      <p className="text-muted-foreground mb-4">
        Our operator supply services in Abu Dhabi include trained professionals
        for excavators, cranes, forklifts, wheel loaders, backhoe loaders, manlifts,
        scissor lifts, road rollers, generators, and other construction equipment.
      </p>

      <p className="text-muted-foreground mb-6">
        Whether you require operators for short-term site work or long-term project
        deployment, we provide reliable manpower solutions tailored to your operational
        needs across the UAE.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Benefits of Hiring Trained Operators
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Improved safety and reduced site risks</li>
        <li>Efficient machine handling and productivity</li>
        <li>Compliance with UAE safety and operational standards</li>
        <li>Reduced equipment downtime and operational errors</li>
        <li>Flexible deployment for short-term and long-term projects</li>
        <li>Cost-effective manpower solutions</li>
      </ul>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Why Choose Western Eagle for Operator Supply?
      </h3>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC is a trusted provider of trained operator supply
        services in Abu Dhabi and the UAE. Our operators are professionally trained,
        experienced, and familiar with a wide range of heavy machinery and site
        conditions.
      </p>

      <p className="text-muted-foreground">
        By choosing our operator supply services, clients benefit from dependable
        manpower, improved site efficiency, and professional support aligned with
        project timelines and safety requirements.
      </p>

    </div>
  </section>
)}
{slug === "equipment-repair-maintenance" && (
  <section className="seo-section bg-background py-16">
    <div className="container-custom max-w-4xl mx-auto text-left">

      {/* H2 */}
      <h2 className="heading-secondary mb-4">
        Equipment Repair & Maintenance Services in Abu Dhabi
      </h2>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC provides professional equipment repair and
        maintenance services in Abu Dhabi, Mussafah, Dubai, and across the UAE.
        Our maintenance solutions are designed to keep heavy machinery operating
        efficiently, safely, and with minimal downtime.
      </p>

      <p className="text-muted-foreground mb-6">
        We specialize in servicing construction, industrial, and material handling
        equipment, offering both scheduled preventive maintenance and emergency
        repair support. Our experienced technicians ensure all equipment meets
        UAE safety and operational standards.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Heavy Equipment Repair & Maintenance Solutions
      </h3>

      <p className="text-muted-foreground mb-4">
        Our equipment repair and maintenance services in Abu Dhabi cover excavators,
        cranes, forklifts, wheel loaders, backhoe loaders, manlifts, generators,
        air compressors, and other heavy machinery. We support construction sites,
        industrial facilities, warehouses, and infrastructure projects across
        the UAE.
      </p>

      <p className="text-muted-foreground mb-6">
        From routine inspections and oil changes to hydraulic, electrical, and
        mechanical repairs, our team delivers reliable maintenance solutions
        that extend equipment lifespan and reduce unexpected breakdowns.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Benefits of Professional Equipment Maintenance
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Reduced equipment downtime and operational delays</li>
        <li>Improved safety and compliance with UAE regulations</li>
        <li>Extended equipment lifespan and reliability</li>
        <li>Lower long-term repair and replacement costs</li>
        <li>Preventive maintenance to avoid major failures</li>
        <li>On-site service support available when required</li>
      </ul>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Why Choose Western Eagle for Equipment Repair & Maintenance?
      </h3>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC is a trusted provider of equipment repair and
        maintenance services in Abu Dhabi and the UAE. Our skilled technicians,
        modern tools, and responsive service approach ensure reliable performance
        for every machine we service.
      </p>

      <p className="text-muted-foreground">
        Whether you require regular maintenance contracts or urgent repair services,
        we deliver cost-effective solutions tailored to your project requirements,
        helping you maintain productivity and operational efficiency.
      </p>

    </div>
  </section>
)}
{slug === "welding-cutting-equipment" && (
  <section className="seo-section bg-background py-16">
    <div className="container-custom max-w-4xl mx-auto text-left">

      {/* H2 */}
      <h2 className="heading-secondary mb-4">
        Welding & Cutting Equipment Rental in Abu Dhabi
      </h2>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC provides reliable welding and cutting equipment
        rental services in Abu Dhabi, Mussafah, Dubai, and across the UAE. Our
        equipment is widely used in construction, fabrication, industrial
        maintenance, and infrastructure projects requiring precision metal
        joining and cutting operations.
      </p>

      <p className="text-muted-foreground mb-6">
        We supply a complete range of welding and cutting machines suitable for
        on-site and workshop applications. Flexible daily, weekly, and monthly
        rental options are available to support short-term tasks and long-term
        industrial projects.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Welding & Cutting Equipment We Supply
      </h3>

      <p className="text-muted-foreground mb-4">
        Our welding and cutting equipment rental services in Abu Dhabi include
        arc welding machines, MIG welding machines, gas cutting sets, oxy-acetylene
        cutting equipment, plasma cutting machines, and related accessories.
        All equipment is maintained to ensure safety, accuracy, and consistent
        performance.
      </p>

      <p className="text-muted-foreground mb-6">
        These machines are commonly used for steel fabrication, pipeline works,
        structural welding, repair jobs, and industrial plant maintenance across
        the UAE.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Benefits of Renting Welding & Cutting Equipment
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Cost-effective alternative to equipment purchase</li>
        <li>Access to modern and well-maintained machines</li>
        <li>Flexible rental periods for project-based work</li>
        <li>Reduced maintenance and storage responsibility</li>
        <li>Reliable performance for industrial applications</li>
        <li>Compliance with UAE safety and operational standards</li>
      </ul>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Why Choose Western Eagle for Welding & Cutting Equipment?
      </h3>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC is a trusted supplier of welding and cutting
        equipment rental services in Abu Dhabi and the UAE. Our focus on equipment
        quality, safety, and timely delivery ensures smooth execution of welding
        and fabrication work on every project.
      </p>

      <p className="text-muted-foreground">
        Whether you require welding equipment for construction sites, industrial
        facilities, or maintenance operations, we provide dependable solutions
        tailored to your operational requirements.
      </p>

    </div>
  </section>
)}
{slug === "scaffolding" && (
  <section className="seo-section bg-background py-16">
    <div className="container-custom max-w-4xl mx-auto text-left">

      {/* H2 */}
      <h2 className="heading-secondary mb-4">
        Scaffolding Rental & Services in Abu Dhabi
      </h2>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC provides professional scaffolding rental and
        scaffolding services in Abu Dhabi, Mussafah, Dubai, and across the UAE.
        Our scaffolding solutions support safe access for construction,
        maintenance, industrial, and infrastructure projects of all sizes.
      </p>

      <p className="text-muted-foreground mb-6">
        We offer high-quality scaffolding systems designed to meet UAE safety
        standards, ensuring stability, load capacity, and worker protection.
        Flexible short-term and long-term scaffolding rental options are available
        to suit project-specific requirements.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Scaffolding Systems We Provide
      </h3>

      <p className="text-muted-foreground mb-4">
        Our scaffolding rental services in Abu Dhabi include supported scaffolding,
        suspended scaffolding, mobile scaffolding towers, and access scaffolding
        systems suitable for residential, commercial, and industrial applications.
      </p>

      <p className="text-muted-foreground mb-6">
        These scaffolding solutions are widely used for building construction,
        façade works, painting, maintenance, steel fabrication, and industrial
        plant operations across the UAE.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Benefits of Professional Scaffolding Services
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Safe and stable access for work at height</li>
        <li>Compliance with UAE safety regulations</li>
        <li>Flexible configurations for different site conditions</li>
        <li>Cost-effective alternative to permanent access structures</li>
        <li>Quick installation and dismantling support</li>
        <li>Suitable for short-term and long-term projects</li>
      </ul>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Why Choose Western Eagle for Scaffolding Rental?
      </h3>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC is a trusted provider of scaffolding rental
        services in Abu Dhabi and the UAE. Our focus on safety, quality materials,
        and reliable service ensures efficient site operations and reduced
        project risks.
      </p>

      <p className="text-muted-foreground">
        Whether you require scaffolding for construction, maintenance, or
        industrial work, our team delivers dependable solutions tailored to
        your operational and safety requirements.
      </p>

    </div>
  </section>
)}
{slug === "logistic-operator-support" && (
  <section className="seo-section bg-background py-16">
    <div className="container-custom max-w-4xl mx-auto text-left">

      {/* H2 */}
      <h2 className="heading-secondary mb-4">
        Logistic Operator Support Services in Abu Dhabi
      </h2>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC provides professional logistic operator support
        services in Abu Dhabi, Mussafah, Dubai, and across the UAE. Our logistics
        support solutions are designed to enhance efficiency in warehousing,
        transportation, material handling, and supply chain operations.
      </p>

      <p className="text-muted-foreground mb-6">
        We supply trained logistics operators and support staff for short-term
        and long-term assignments, helping businesses manage loading, unloading,
        sorting, packing, and movement of goods efficiently and safely.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Logistics Operator Support Solutions
      </h3>

      <p className="text-muted-foreground mb-4">
        Our logistic operator support services in Abu Dhabi include manpower
        assistance for warehouses, distribution centers, ports, industrial sites,
        and construction projects. Operators are trained to work with forklifts,
        pallet jacks, containers, and material handling systems.
      </p>

      <p className="text-muted-foreground mb-6">
        Whether you require logistics support for daily operations or peak demand
        periods, we provide reliable manpower solutions tailored to your operational
        needs across the UAE.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Benefits of Logistic Operator Support
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Improved efficiency in logistics and supply chain operations</li>
        <li>Reduced operational delays and handling errors</li>
        <li>Flexible manpower deployment for peak periods</li>
        <li>Trained operators familiar with safety procedures</li>
        <li>Cost-effective alternative to permanent staffing</li>
        <li>Support for warehousing, transport, and site logistics</li>
      </ul>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Why Choose Western Eagle for Logistic Operator Support?
      </h3>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC is a trusted provider of logistic operator
        support services in Abu Dhabi and the UAE. Our experienced personnel,
        structured processes, and commitment to reliability ensure smooth
        logistics operations for our clients.
      </p>

      <p className="text-muted-foreground">
        By choosing our logistics operator support services, businesses gain
        dependable manpower that enhances productivity, safety, and overall
        operational performance across logistics and supply chain activities.
      </p>

    </div>
  </section>
)}
{slug === "workshop-maintenance" && (
  <section className="seo-section bg-background py-16">
    <div className="container-custom max-w-4xl mx-auto text-left">

      {/* H2 */}
      <h2 className="heading-secondary mb-4">
        Workshop Maintenance Services in Abu Dhabi
      </h2>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC provides professional workshop maintenance
        services in Abu Dhabi, Mussafah, Dubai, and across the UAE. Our workshop
        maintenance solutions are designed to support industrial facilities,
        construction companies, and logistics operations by ensuring equipment
        reliability and operational efficiency.
      </p>

      <p className="text-muted-foreground mb-6">
        We offer structured preventive and corrective maintenance services
        within workshop environments, helping businesses reduce breakdowns,
        improve safety, and extend the service life of machinery and equipment.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Industrial Workshop Maintenance Solutions
      </h3>

      <p className="text-muted-foreground mb-4">
        Our workshop maintenance services in Abu Dhabi include mechanical,
        electrical, and hydraulic maintenance for heavy equipment, material
        handling machinery, power tools, and industrial systems. We support
        workshops serving construction, manufacturing, logistics, and
        infrastructure projects across the UAE.
      </p>

      <p className="text-muted-foreground mb-6">
        From routine inspections and servicing to fault diagnosis and repair,
        our maintenance team ensures smooth and uninterrupted workshop
        operations.
      </p>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Benefits of Professional Workshop Maintenance
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>Reduced equipment downtime and operational disruptions</li>
        <li>Improved workshop safety and compliance</li>
        <li>Extended machinery and equipment lifespan</li>
        <li>Preventive maintenance to avoid major failures</li>
        <li>Improved productivity and workflow efficiency</li>
        <li>Cost-effective maintenance planning</li>
      </ul>

      {/* H3 */}
      <h3 className="heading-tertiary mt-10 mb-3">
        Why Choose Western Eagle for Workshop Maintenance?
      </h3>

      <p className="text-muted-foreground mb-4">
        Western Eagle Transport LLC is a trusted provider of workshop maintenance
        services in Abu Dhabi and the UAE. Our experienced technicians, systematic
        maintenance approach, and commitment to quality ensure reliable support
        for workshop operations of all sizes.
      </p>

      <p className="text-muted-foreground">
        Whether you require ongoing workshop maintenance or scheduled servicing
        support, we deliver dependable solutions aligned with your operational
        and safety requirements.
      </p>

    </div>
  </section>
)}

          {/* CTA Section */}
          <section className="bg-primary py-16">
            <div className="container-custom px-4 text-center">
              <h2 className="heading-secondary text-primary-foreground mb-4">
                Need {service.name} in UAE?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Contact our team for professional service and competitive pricing across Dubai, Abu Dhabi, Sharjah, and all Emirates.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-background text-foreground hover:bg-background/90 border border-background" asChild>
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white border-0" asChild>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServiceDetail;