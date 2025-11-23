import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CommandList } from "@/components/CommandList";
import { Footer } from "@/components/Footer";
import liquidGlassUrl from "@assets/generated_images/dark_subtle_liquid_glass_texture_overlay.png";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* Liquid Glass Texture Overlay using React to handle the import correctly */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none opacity-30 mix-blend-overlay bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${liquidGlassUrl})` }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <CommandList />
      </main>
      <Footer />
    </div>
  );
}
