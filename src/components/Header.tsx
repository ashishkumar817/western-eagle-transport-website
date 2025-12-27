import { useState } from "react";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
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

const phoneNumber = "9108291462";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
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
                <MessageCircle className="w-4 h-4" />
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
                  <MessageCircle className="w-4 h-4" />
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
