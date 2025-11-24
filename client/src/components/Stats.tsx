import { useEffect, useRef, useState } from "react";
import { Users, Zap, Shield, Activity } from "lucide-react";

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  const stats = [
    {
      value: 264,
      label: "Total Commands",
      icon: Activity,
      suffix: ""
    },
    {
      value: 8,
      label: "Response Time",
      icon: Zap,
      suffix: "ms"
    },
    {
      value: 12,
      label: "Command Categories",
      icon: Shield,
      suffix: ""
    },
    {
      value: 99.9,
      label: "Uptime",
      icon: Users,
      suffix: "%"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {suffix === "%" ? count.toFixed(1) : Math.floor(count)}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={statsRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Glass Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stats-card group relative overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/10 p-8 rounded-3xl transition-all duration-700 hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3),0_20px_40px_-12px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-105 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] after:content-[''] after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.03] after:pointer-events-none"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Glass Reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Shimmer Animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl text-primary transition-all duration-500 group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110 group-hover:rotate-6 backdrop-blur-sm border border-primary/10">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 transition-all duration-300 group-hover:text-primary" data-testid={`text-stat-value-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {isVisible ? <AnimatedNumber value={stat.value} suffix={stat.suffix} /> : "0"}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium transition-colors duration-300 group-hover:text-foreground/80">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Glass Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-16" />
      </div>
    </section>
  );
}
