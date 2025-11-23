import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
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

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_hsl(var(--primary))]">
            Contact Us
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
          <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
}
