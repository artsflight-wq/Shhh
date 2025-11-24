export function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/10 bg-black/30 backdrop-blur-xl overflow-hidden">
      {/* Background Glass Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl opacity-15 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Typography with Glass Card */}
        <div className="text-center mb-16">
          <div className="inline-block relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/10 px-12 py-8 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.2),0_16px_32px_-8px_rgba(0,0,0,0.4)] transition-all duration-700 hover:scale-105 after:content-[''] after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.03] after:pointer-events-none">
              <h2 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter select-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 group-hover:from-primary group-hover:via-white group-hover:to-primary transition-all duration-700">
                  YELL
                </span>
              </h2>
            </div>
          </div>
          
          <p className="mt-6 text-muted-foreground max-w-md mx-auto">
            Premium Discord utility for exclusive server management and automation
          </p>
        </div>

        {/* Footer Links and Copyright with Glass Effect */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
            &copy; 2024 YELL. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110" data-testid="link-terms">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110" data-testid="link-privacy">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110" data-testid="link-contact">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Glass Reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
}
