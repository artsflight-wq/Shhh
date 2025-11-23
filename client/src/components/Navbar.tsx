import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Search, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/generated_images/a_minimal_abstract_sound_wave_icon_in_blue.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
            <span className="font-heading text-2xl font-bold tracking-tight">YELL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#commands" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Commands
          </a>
          <span className="text-sm font-medium text-muted-foreground/50 cursor-not-allowed">
            Status
          </span>
          <span className="text-sm font-medium text-muted-foreground/50 cursor-not-allowed">
            Docs
          </span>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white" disabled>
            Dashboard
          </Button>
          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_hsl(var(--primary))]">
            Invite Only
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b border-white/5 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#commands" className="text-lg font-medium text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>
            Commands
          </a>
          <span className="text-lg font-medium text-muted-foreground/50">
            Status
          </span>
          <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
            Invite Only
          </Button>
        </div>
      )}
    </nav>
  );
}
