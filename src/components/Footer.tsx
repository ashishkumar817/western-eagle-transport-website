import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Equipment", href: "/#equipment" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/#contact" },
  ];

  const equipment = [
    "Excavator Rental",
    "Crane Rental",
    "Forklift Rental",
    "Generator Rental",
    "Boom Lift Rental",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="Western Eagle Transport Company" className="h-20 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for heavy equipment rental across UAE. We deliver reliable machinery for all your construction and industrial needs.
            </p>
            
            {/* ICV Badge */}
            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20 mb-6">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">ICV Certified (UAE)</span>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-tertiary text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="heading-tertiary text-foreground mb-6">Our Equipment</h4>
            <ul className="space-y-3">
              {equipment.map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-tertiary text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Mussafah Industrial Area, Abu Dhabi, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+971 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">sales@westerneagletransportllc.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Western Eagle Transport Company. All Rights Reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Designed & Developed by <span className="text-primary font-medium">Ashish Kumar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
