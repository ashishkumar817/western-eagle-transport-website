import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Shield, Users, Award, Truck, Clock, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-equipment.webp";

const About = () => {
  const features = [
    { icon: Shield, title: "Safety First", description: "All equipment undergoes rigorous safety checks and maintenance." },
    { icon: Users, title: "Expert Team", description: "Skilled operators and support staff with years of experience." },
    { icon: Award, title: "ICV Certified", description: "Compliant with the UAE In-Country Value Program." },
    { icon: Truck, title: "Modern Fleet", description: "Well-maintained, state-of-the-art heavy machinery." },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock customer service for all your needs." },
  ];

  const highlights = [
    "Reliable Machinery",
    "Certified Operators",
    "24/7 Support",
    "Competitive Rates",
    "On-time Delivery",
    "Professional Service",
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Western Eagle Transport Company</title>
        <meta name="description" content="Learn about Western Eagle Transport Company - UAE's trusted heavy equipment rental partner. ICV certified, modern fleet, professional service." />
        <link rel="canonical" href="https://westerneagle.ae/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary font-heading uppercase tracking-[0.2em] mb-2">
                About Us
              </p>
              <h1 className="heading-primary text-foreground mb-6">
                Your Trusted Heavy Equipment Partner in UAE
              </h1>
              <p className="text-muted-foreground text-lg">
                Western Eagle Transport Company has been serving the UAE construction and industrial sectors with reliable heavy equipment rental services for over a decade.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg shadow-dark">
                  <img
                    src={aboutImage}
                    alt="Western Eagle Heavy Equipment Fleet"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="heading-secondary text-foreground mb-6">
                  Heavy Equipment Rental Company
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Western Eagle Transport Company is based in the Mussafah Industrial Area, Abu Dhabi. The company has one of the largest fleets of lifting equipment, including forklifts, telehandlers, cranes, and manlifts, for rent on a daily, weekly, or monthly basis. The company's motto is to serve the industry with passion and a professional approach, using state of-the-art technology and providing tailor-made services at competitive prices.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our commitment to safety, quality, and customer satisfaction has made us a trusted partner for contractors, developers, and construction companies across Dubai, Abu Dhabi, and Sharjah. We maintain a modern fleet of well-maintained equipment operated by skilled and certified professionals.
                </p>

                {/* ICV Certification Badge */}
                <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ICV Certified (UAE)</p>
                    <p className="text-sm text-muted-foreground">Compliant with the UAE In-Country Value Program</p>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="btn-primary"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="/western-eagle-profile.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="w-5 h-5 mr-2" />
                      Download Company Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-secondary text-foreground mb-4">
                Why Choose Western Eagle?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're dedicated to providing reliable heavy equipment and exceptional service to power your projects across the UAE.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="feature-icon mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg uppercase tracking-wide text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
