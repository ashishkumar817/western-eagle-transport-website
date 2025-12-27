import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Equipment", href: "#equipment" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-xl">WE</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-lg uppercase tracking-wide text-foreground">
                Western Eagle
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Transport Company
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Call Now</span>
            </Button>
            <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="gap-2 flex-1">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button size="sm" className="gap-2 flex-1 bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
