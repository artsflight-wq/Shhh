import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { CommandList } from "@/components/CommandList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CommandList />
      </main>
      <Footer />
    </div>
  );
}
