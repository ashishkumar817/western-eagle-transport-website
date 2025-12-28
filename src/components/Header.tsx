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

const phoneNumber1 = "971505567467";
const phoneNumber2 = "971565881099";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <img src={logo} alt="Western Eagle Transport Company" className="h-10 md:h-14 w-auto" />
            <div>
              <p className="font-heading font-bold text-[10px] xs:text-xs sm:text-sm md:text-lg text-foreground leading-tight">WESTERN EAGLE</p>
              <p className="text-[7px] xs:text-[8px] sm:text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Transport Company</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide">Home</Link>
            <Link to="/#about" className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide">About Us</Link>
            
            {/* Equipment Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link 
                  to="/#equipment" 
                  className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide flex items-center gap-1 focus:outline-none cursor-pointer"
                >
                  Equipment <ChevronDown className="w-4 h-4" />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border-border/50 w-56 max-h-96 overflow-y-auto p-1 rounded-none shadow-xl">
                {equipmentList.map((item, index) => (
                  <DropdownMenuItem key={item.slug} asChild className="p-0">
                    <Link
                      to={`/equipment/${item.slug}`}
                      className={`block w-full px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                        index === 0 ? 'text-primary bg-muted/50' : 'text-foreground hover:text-primary hover:bg-muted/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link 
                  to="/#services" 
                  className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide flex items-center gap-1 focus:outline-none cursor-pointer"
                >
                  Services <ChevronDown className="w-4 h-4" />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border-border/50 w-72 max-h-96 overflow-y-auto p-1 rounded-none shadow-xl">
                {servicesList.map((item, index) => (
                  <DropdownMenuItem key={item.slug} asChild className="p-0">
                    <Link
                      to={`/services/${item.slug}`}
                      className={`block w-full px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                        index === 0 ? 'text-primary bg-muted/50' : 'text-foreground hover:text-primary hover:bg-muted/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/#gallery" className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide">Gallery</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide">Blog</Link>
            <Link to="/#contact" className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide">Contact</Link>
          </nav>

          {/* Phone Numbers & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a href={`tel:+${phoneNumber1}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium">
              <Phone className="w-4 h-4" />
              <span>+971 50 556 7467</span>
            </a>
            <a href={`tel:+${phoneNumber2}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium">
              <Phone className="w-4 h-4" />
              <span>+971 56 588 1099</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-1">
            <ThemeToggle />
            <button
              className="p-1.5 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container-custom px-6 py-4 flex flex-col gap-2">
            <Link to="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/#about" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            
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
            
            <Link to="/#gallery" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/blog" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link to="/#contact" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <a href={`tel:+${phoneNumber1}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium py-2">
                <Phone className="w-4 h-4" />
                <span>+971 50 556 7467</span>
              </a>
              <a href={`tel:+${phoneNumber2}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium py-2">
                <Phone className="w-4 h-4" />
                <span>+971 56 588 1099</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
