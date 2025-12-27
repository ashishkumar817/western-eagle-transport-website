import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phoneNumber = "9108291462";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 text-foreground shadow-lg animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
      
      <Button
        asChild
        size="icon"
        className="w-14 h-14 rounded-full bg-primary hover:bg-gold-dark text-primary-foreground shadow-gold animate-fade-in"
        aria-label="Call us"
      >
        <a href={`tel:+91${phoneNumber}`}>
          <Phone className="w-6 h-6" />
        </a>
      </Button>
      
      <Button
        asChild
        size="icon"
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg animate-fade-in"
        aria-label="WhatsApp"
      >
        <a
          href={`https://wa.me/91${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
