import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { equipmentList, servicesList } from "@/lib/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.webp";

const phoneNumber = "9108291462";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Western Eagle Transport Company" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="nav-link">Home</Link>
            <a href="/#about" className="nav-link">About Us</a>
            
            {/* Equipment Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center gap-1 focus:outline-none">
                Equipment <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border w-56 max-h-80 overflow-y-auto">
                {equipmentList.map((item) => (
                  <DropdownMenuItem key={item.slug} asChild>
                    <Link
                      to={`/equipment/${item.slug}`}
                      className="cursor-pointer hover:bg-muted hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center gap-1 focus:outline-none">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border w-72 max-h-80 overflow-y-auto">
                {servicesList.map((item) => (
                  <DropdownMenuItem key={item.slug} asChild>
                    <Link
                      to={`/services/${item.slug}`}
                      className="cursor-pointer hover:bg-muted hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="/#gallery" className="nav-link">Gallery</a>
            <Link to="/blog" className="nav-link">Blogs</Link>
            <a href="/#contact" className="nav-link">Contact</a>
          </nav>

          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={`tel:+91${phoneNumber}`}>
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call Now</span>
              </a>
            </Button>
            <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
              <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container-custom py-4 flex flex-col gap-2">
            <Link to="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <a href="/#about" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            
            {/* Mobile Equipment */}
            <details className="group">
              <summary className="nav-link py-2 cursor-pointer flex items-center justify-between">
                Equipment <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 flex flex-col gap-1 mt-2">
                {equipmentList.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/equipment/${item.slug}`}
                    className="text-muted-foreground hover:text-primary py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>
            
            {/* Mobile Services */}
            <details className="group">
              <summary className="nav-link py-2 cursor-pointer flex items-center justify-between">
                Services <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 flex flex-col gap-1 mt-2">
                {servicesList.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="text-muted-foreground hover:text-primary py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>
            
            <a href="/#gallery" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </a>
            <Link to="/blog" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <a href="/#contact" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            
            <div className="flex gap-3 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                <a href={`tel:+91${phoneNumber}`}>
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" className="gap-2 flex-1 bg-green-600 hover:bg-green-700" asChild>
                <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
