import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/generated_images/a_minimal_abstract_sound_wave_icon_in_blue.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "border-b border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]" 
        : "border-b border-white/5 bg-background/40 backdrop-blur-xl"
    }`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with enhanced glass effect */}
        <Link href="/" className="flex items-center gap-3 group relative" data-testid="link-home">
          <div className="relative">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative font-heading text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 group-hover:from-primary group-hover:via-white group-hover:to-primary transition-all duration-500">
              YELL
            </span>
          </div>
        </Link>

        {/* CTA with enhanced glassmorphism */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Button 
            className="relative rounded-full px-6 h-10 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white shadow-[0_0_24px_-5px_hsl(var(--primary))] hover:shadow-[0_0_32px_-3px_hsl(var(--primary))] border border-primary/20 transition-all duration-500 hover:scale-105"
            data-testid="button-contact"
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Bottom glass reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </nav>
  );
}
