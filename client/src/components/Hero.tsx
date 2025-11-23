import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">System Operational</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              YELL
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The premier Discord utility. <span className="text-white font-medium">Exclusive. Powerful. Private.</span>
            <br />
            Streamline server management with advanced automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a href="#commands">
              <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 font-semibold text-base">
                View Commands
              </Button>
            </a>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white text-muted-foreground backdrop-blur-sm" disabled>
              Restricted Access <Lock className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Floating features */}
        <div className="hidden md:block absolute top-1/2 left-10 -translate-y-1/2 animate-in fade-in slide-in-from-left-10 duration-1000 delay-500">
          <div className="bg-card/50 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl shadow-primary/10">
            <div className="p-2 bg-primary/20 rounded-lg text-primary">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold">Anti-Nuke</div>
              <div className="text-xs text-muted-foreground">Active Protection</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-2/3 right-10 -translate-y-1/2 animate-in fade-in slide-in-from-right-10 duration-1000 delay-700">
          <div className="bg-card/50 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl shadow-primary/10">
            <div className="p-2 bg-primary/20 rounded-lg text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold">Auto-Mod</div>
              <div className="text-xs text-muted-foreground">0ms Latency</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
    </section>
  );
}
