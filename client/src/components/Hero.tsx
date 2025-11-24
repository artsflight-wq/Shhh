import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Lock, Terminal, Palette, Database, Cpu } from "lucide-react";

export function Hero() {
  const features = [
    {
      title: "Fast",
      description: "8ms Latency",
      icon: Zap
    },
    {
      title: "Capable",
      description: "300+ Commands",
      icon: Terminal
    },
    {
      title: "Stylish",
      description: "Dynamic Embed Structure",
      icon: Palette
    },
    {
      title: "Strong",
      description: "3-layer Caching",
      icon: Database
    }
  ];

  return (
    <section className="relative pt-20 pb-8 md:pt-32 md:pb-12 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex flex-col items-stretch">
            <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">System Operational</span>
            </div>
            
            <h1 className="text-8xl md:text-[10rem] lg:text-[16rem] leading-[0.8] font-heading font-bold tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20">
                YELL
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The premier Discord utility. <span className="text-white font-medium">Exclusive. Powerful. Private.</span>
            <br />
            Streamline server management with advanced automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 w-full sm:w-auto px-4 sm:px-0">
            <a href="#commands" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 font-semibold text-base shadow-[0_8px_24px_-8px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.4)] transition-all duration-500 hover:scale-105 active:scale-95"
                data-testid="button-view-commands"
              >
                View Commands
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto h-12 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white text-muted-foreground backdrop-blur-sm transition-all duration-500"
              disabled
              data-testid="button-restricted"
            >
              Restricted Access <Lock className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Feature Grid with Enhanced Glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
            {features.map((feature, i) => (
              <div 
                key={feature.title}
                className="feature-card relative overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-700 group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3),0_20px_40px_-12px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-105 hover:border-white/20 after:content-[''] after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.03] after:pointer-events-none"
                data-testid={`card-feature-${feature.title.toLowerCase()}`}
              >
                {/* Glass Reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Shimmer Animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
                
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl text-primary group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 backdrop-blur-sm border border-primary/10">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-center relative z-10">
                  <div className="text-base font-bold text-white mb-1 transition-all duration-300 group-hover:text-primary">{feature.title}</div>
                  <div className="text-xs text-muted-foreground font-medium transition-colors duration-300 group-hover:text-foreground/80">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-[150px] -z-10 pointer-events-none opacity-60 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-[80px] -z-10 pointer-events-none opacity-30"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </section>
  );
}
