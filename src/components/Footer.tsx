import { forwardRef } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";
import { equipmentList, servicesList } from "@/lib/data";

const Footer = forwardRef<HTMLElement, {}>((_props, ref) => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Equipment", href: "/#equipment" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/#contact" },
  ];

  const equipment = equipmentList.slice(0, 5).map((item) => ({
    name: `${item.name} Rental`,
    slug: item.slug,
  }));

  const services = servicesList.slice(0, 5).map((item) => ({
    name: item.name,
    slug: item.slug,
  }));

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer ref={ref} className="bg-secondary border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="Western Eagle Transport Company" className="h-20 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Your trusted partner for heavy equipment rental across UAE.
            </p>
            
            {/* ICV Badge */}
            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20 mb-6">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">ICV Certified (UAE)</span>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
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
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
                <li key={item.slug}>
                  <Link
                    to={`/equipment/${item.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-tertiary text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
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
                <span className="text-muted-foreground text-sm">
                  Mussafah-44, Building ELITE Business Zone Investment, Office No.58, Abu Dhabi - U.A.E.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a 
                    href="tel:+971505567467" 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    +971 50 556 7467
                  </a>
                  <a 
                    href="tel:+971565881099" 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    +971 56 588 1099
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:sales@westerneagletransportllc.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                >
                  sales@westerneagletransportllc.com
                </a>
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
});

Footer.displayName = "Footer";

export default Footer;
