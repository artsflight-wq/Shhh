import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCommandsSection } from "@/components/FeaturedCommandsSection";
import { NavigationRail } from "@/components/NavigationRail";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { CommandList } from "@/components/CommandList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <ParallaxBackground />
      <Navbar />
      <NavigationRail />
      <main>
        <Hero />
        <FeaturedCommandsSection />
        <CommandList />
      </main>
      <Footer />
    </div>
  );
}
