import { ArrowRight, Sparkles } from "lucide-react";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesWithFeatured.map((category: CategoryMetadata) => {
            const Icon = iconMap[category.icon];

            return (
              <div
                key={category.id}
                className="group relative bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.15)] overflow-hidden"
                data-testid={`card-featured-category-${category.id}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-white">
                      {category.displayName}
                    </h3>
                  </div>

                  <div className="space-y-3 mb-5">
                    {category.featuredCommands?.map((cmd, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm group/cmd"
                        data-testid={`item-featured-command-${cmd.name}`}
                      >
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/cmd:bg-primary transition-colors flex-shrink-0" />
                        <div>
                          <code className="text-primary font-semibold">
                            {cmd.name}
                          </code>
                          <p className="text-muted-foreground mt-0.5">
                            {cmd.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleViewCategory(category.id)}
                    className="group/btn flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    data-testid={`button-view-category-${category.id}`}
                  >
                    View all commands
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
