import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CommandList } from "@/components/CommandList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CommandList />
      </main>
      <Footer />
    </div>
  );
}
