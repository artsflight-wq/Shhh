import { useState, useEffect } from "react";
import { Shield, AlertCircle, Info, Wrench, Ticket, Mic, Users, Gamepad2, Laugh, Settings, Moon, Users2, MessageCircle, Music, Sliders, LayoutGrid, Gavel, TrendingUp, Rocket, Crosshair, MessageSquare } from "lucide-react";
import { CATEGORIES, type CategoryMetadata } from "@shared/categoryConfig";

const iconMap: Record<string, any> = {
  Shield,
  AlertCircle,
  Info,
  Wrench,
  Ticket,
  Mic,
  Users,
  Gamepad2,
  Laugh,
  Settings,
  Moon,
  Users2,
  MessageCircle,
  Music,
  Sliders,
  LayoutGrid,
  Gavel,
  TrendingUp,
  Rocket,
  Crosshair,
  MessageSquare
};

export function NavigationRail() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Listen for category changes from CommandList
  useEffect(() => {
    const handleCategoryChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ categoryId: string }>;
      setActiveCategory(customEvent.detail.categoryId);
    };

    window.addEventListener('categoryChange', handleCategoryChange);
    return () => window.removeEventListener('categoryChange', handleCategoryChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show rail after scrolling past hero
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const button = document.querySelector(`[data-testid="button-category-${categoryId}"]`);
    if (button) {
      button.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Simulate click to activate category
      (button as HTMLElement).click();
    }
  };

  const categories = CATEGORIES.filter((cat: CategoryMetadata) => cat.id !== 'all');

  return (
    <>
      {/* Desktop Rail */}
      <div className={`hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
      }`}>
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] max-h-[70vh] overflow-y-auto scrollbar-hide">
          {/* Progress Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-l-2xl overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-primary to-primary/50 transition-all duration-300"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Category Icons */}
          <div className="flex flex-col gap-2 ml-2">
            {categories.map((cat: CategoryMetadata) => {
              const Icon = iconMap[cat.icon];
              const isActive = activeCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`group relative p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/20 border border-primary/30 text-primary'
                      : 'bg-white/5 border border-white/10 text-muted-foreground hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                  data-testid={`rail-category-${cat.id}`}
                  title={cat.displayName}
                >
                  {Icon && <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />}
                  
                  {/* Tooltip */}
                  <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                    <span className="font-medium">{cat.displayName}</span>
                    <span className="ml-2 text-xs text-muted-foreground">({cat.commandCount})</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
