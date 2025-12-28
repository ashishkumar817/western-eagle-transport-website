import { useEffect, useState, useRef } from "react";

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
      <div className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">
        {count}{suffix}
      </div>
      <p className="text-foreground uppercase tracking-wider font-medium">
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
    { value: "", suffix: "", label: "Trusted Across UAE" },
  ];

  return (
    <section className="py-16 bg-charcoal border-y border-border">
      <div className="container-custom px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              {stat.value ? (
                <StatItem value={stat.value} label={stat.label} suffix={stat.suffix} />
              ) : (
                <div className="text-center">
                  <div className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">
                    UAE
                  </div>
                  <p className="text-foreground uppercase tracking-wider font-medium">
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
