import { useState } from "react";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, type CategoryMetadata } from "@shared/categoryConfig";
import {
  Shield,
  Info,
  Wrench,
  Ticket,
  Mic,
  Gamepad2,
  Gavel,
  TrendingUp,
  Rocket,
  Crosshair,
  MessageSquare,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Shield,
  Info,
  Wrench,
  Ticket,
  Mic,
  Gamepad2,
  Gavel,
  TrendingUp,
  Rocket,
  Crosshair,
  MessageSquare,
};

export function FeaturedCommandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewCategory = (categoryId: string) => {
    const event = new CustomEvent("categoryChange", {
      detail: { categoryId },
    });
    window.dispatchEvent(event);

    const commandsSection = document.getElementById("commands");
    if (commandsSection) {
      commandsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const categoriesWithFeatured = CATEGORIES.filter(
    (cat: CategoryMetadata) => cat.featuredCommands && cat.featuredCommands.length > 0
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + categoriesWithFeatured.length) % categoriesWithFeatured.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categoriesWithFeatured.length);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/[0.02] to-background/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Commands</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Explore Premium Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most powerful commands across all categories
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 shadow-lg group"
            data-testid="button-carousel-previous"
            aria-label="Previous category"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 shadow-lg group"
            data-testid="button-carousel-next"
            aria-label="Next category"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {categoriesWithFeatured.map((category: CategoryMetadata) => {
                const Icon = iconMap[category.icon];

                return (
                  <div
                    key={category.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div
                      className="group relative bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.15)] overflow-hidden max-w-2xl mx-auto"
                      data-testid={`card-featured-category-${category.id}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          {Icon && (
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-7 h-7 text-primary" />
                            </div>
                          )}
                          <h3 className="text-2xl md:text-3xl font-semibold text-white">
                            {category.displayName}
                          </h3>
                        </div>

                        <div className="space-y-4 mb-6">
                          {category.featuredCommands?.map((cmd, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 text-base group/cmd"
                              data-testid={`item-featured-command-${cmd.name}`}
                            >
                              <div className="mt-1.5 w-2 h-2 rounded-full bg-primary/60 group-hover/cmd:bg-primary transition-colors flex-shrink-0" />
                              <div>
                                <code className="text-primary font-semibold text-lg">
                                  {cmd.name}
                                </code>
                                <p className="text-muted-foreground mt-1">
                                  {cmd.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => handleViewCategory(category.id)}
                          className="group/btn flex items-center gap-2 text-base font-medium text-primary hover:text-primary/80 transition-colors"
                          data-testid={`button-view-category-${category.id}`}
                        >
                          View all commands
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {categoriesWithFeatured.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                data-testid={`indicator-slide-${idx}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
