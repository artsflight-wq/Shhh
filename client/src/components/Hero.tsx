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
    <section className="relative pt-20 pb-8 md:pt-32 md:pb-12 overflow-hidden">
      {/* Subtle Blue Light Bursts reflecting on grid - behind content */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-[5]">
        {/* Small light bursts at various positions - more intense blue */}
        <div className="absolute top-20 left-[15%] w-36 h-36 bg-primary/25 rounded-full blur-3xl opacity-70 animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute top-48 right-[20%] w-28 h-28 bg-primary/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-32 left-[65%] w-32 h-32 bg-primary/18 rounded-full blur-3xl opacity-75 animate-pulse" style={{animationDuration: '5s'}} />
        <div className="absolute top-64 left-[40%] w-24 h-24 bg-primary/15 rounded-full blur-2xl opacity-55" />
        
        {/* Light reflections on grid intersections */}
        <div className="absolute top-32 left-1/4 w-3 h-3 rounded-full bg-primary/50 blur-sm shadow-[0_0_25px_rgba(88,101,242,0.5)]" />
        <div className="absolute top-48 right-1/3 w-3 h-3 rounded-full bg-primary/60 blur-sm animate-pulse shadow-[0_0_30px_rgba(88,101,242,0.6)]" style={{animationDuration: '3s'}} />
        <div className="absolute top-56 left-[45%] w-2 h-2 rounded-full bg-primary/40 blur-sm shadow-[0_0_20px_rgba(88,101,242,0.3)]" />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 rounded-full bg-white/30 blur-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
      </div>
      
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
            The premier Discord utility. <span className="text-white font-medium">Advanced. Powerful. Private.</span>
            <br />
            Streamline server management with advanced automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a href="#commands">
              <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 font-semibold text-base">
                View Commands
              </Button>
            </a>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white text-muted-foreground backdrop-blur-sm" disabled>
              Restricted Access <Lock className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
            {features.map((feature, i) => (
              <div 
                key={feature.title}
                className="relative overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-500 group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-1 after:content-[''] after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.03] after:pointer-events-none"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className="text-base font-bold text-white mb-1">{feature.title}</div>
                  <div className="text-xs text-muted-foreground font-medium">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle background ambient glow - slightly more intense */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-primary/12 rounded-full blur-[110px] -z-10 pointer-events-none opacity-50"></div>
    </section>
  );
}
