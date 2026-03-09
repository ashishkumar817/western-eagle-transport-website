import { useEffect, useState, useRef } from "react";
import statsBg from "@/assets/cta-bg.webp";

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
}

const StatItem = ({ value, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading font-semibold text-4xl md:text-5xl text-primary mb-3">
        {count}{suffix}
      </div>
      <p className="text-white/90 text-sm font-medium">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "10", suffix: "+", label: "Years Experience" },
    { value: "100", suffix: "+", label: "Equipment Fleet" },
    { value: "500", suffix: "+", label: "Happy Clients" },
    { value: "", suffix: "", label: "Wide Coverage" },
  ];

  return (
    <section 
      className="py-16 relative border-y border-border overflow-hidden"
      style={{
        backgroundImage: `url(${statsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-charcoal/90" />
      
      <div className="container-custom px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              {stat.value ? (
                <StatItem value={stat.value} label={stat.label} suffix={stat.suffix} />
              ) : (
                <div className="text-center">
                  <div className="font-heading font-semibold text-4xl md:text-5xl text-primary mb-3">
                    UAE
                  </div>
                  <p className="text-white/90 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
