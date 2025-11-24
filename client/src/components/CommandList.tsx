import { useState, useEffect } from "react";
import { Search, ChevronRight, Command as CommandIcon, AlertCircle, LayoutGrid, Shield, Info, Gavel, TrendingUp, Gift, HandMetal, Wrench, MessageSquare, Rocket, Ticket, Gamepad2, Mic, Crosshair, Cake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

interface Command {
  id: string;
  name: string;
  description: string;
  category: string;
  usage: string;
  arguments: string;
  aliases: string[];
}

interface Category {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  description: string;
  commandCount: number;
}

const iconMap: Record<string, any> = {
  LayoutGrid,
  Shield,
  Info,
  Gavel,
  TrendingUp,
  Gift,
  HandMetal,
  Wrench,
  MessageSquare,
  Rocket,
  Ticket,
  Gamepad2,
  Mic,
  Crosshair,
  Cake
};

async function fetchCommands(): Promise<Command[]> {
  const response = await fetch("/api/commands");
  if (!response.ok) throw new Error("Failed to fetch commands");
  return response.json();
}

async function fetchCategories(): Promise<Category[]> {
  const response = await fetch("/api/categories");
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
}

export function CommandList() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const { data: commands = [], isLoading, error } = useQuery({
    queryKey: ["commands"],
    queryFn: fetchCommands,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  // Set first category ("all") as default once loaded
  useEffect(() => {
    if (categories.length > 0 && activeCategory === null) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  const filteredCommands = commands.filter((cmd: Command) => {
    // Enhanced search: trim and split search query into terms
    const searchTerms = search.trim().toLowerCase().split(/\s+/).filter(term => term.length > 0);
    
    // If no search terms, show all (based on category)
    if (searchTerms.length === 0) {
      const matchesCategory = activeCategory === null || activeCategory === "all" || cmd.category === activeCategory;
      return matchesCategory;
    }
    
    // Create searchable text from multiple fields
    const searchableText = [
      cmd.name,
      cmd.description,
      cmd.arguments,
      cmd.usage,
      cmd.category,
      ...cmd.aliases
    ].join(' ').toLowerCase();
    
    // Check if ALL search terms match (AND logic)
    const matchesSearch = searchTerms.every(term => searchableText.includes(term));
    
    // "all" category shows all commands, otherwise filter by category name
    const matchesCategory = activeCategory === null || activeCategory === "all" || cmd.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (error) {
    return (
      <section id="commands" className="py-8 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 p-6 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span>Failed to load commands. Please try again later.</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="commands" className="py-8 bg-card/30 relative overflow-hidden">
      {/* Decorative Glass Elements - Floating shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">System Commands</h2>
          <p className="text-muted-foreground">Explore the full capabilities of YELL. ({commands.length} commands available)</p>
        </div>

        {/* Glass Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-6 space-y-6">
          {/* Enhanced Glassmorphic Search Bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-2xl p-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300 z-10" />
              <Input 
                className="pl-12 h-12 bg-transparent border-0 focus-visible:ring-0 text-lg placeholder:text-muted-foreground/50 relative z-10"
                placeholder="Search by name, description, category, or usage..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                data-testid="input-search-commands"
              />
            </div>
          </div>

          <div className="flex md:flex-wrap md:justify-center gap-3 overflow-x-auto md:overflow-visible pb-3 md:pb-0 scrollbar-hide scroll-smooth snap-x snap-mandatory md:snap-none">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`category-button group relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-500 whitespace-nowrap flex-shrink-0 snap-start backdrop-blur-xl border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] after:content-[''] after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.03] after:pointer-events-none ${
                    activeCategory === cat.id 
                      ? "bg-gradient-to-br from-primary via-primary to-primary/80 text-white border-primary/20 md:scale-105 shadow-lg shadow-primary/20" 
                      : "bg-gradient-to-br from-white/10 via-white/5 to-transparent text-muted-foreground border-white/10 hover:from-white/20 hover:via-white/10 hover:to-white/5 hover:text-white hover:border-white/20 md:hover:scale-110 hover:-translate-y-0.5"
                  }`}
                  data-testid={`button-category-${cat.id}`}
                >
                  {/* Glass shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                  
                  {/* Ripple effect container */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="ripple-effect" />
                  </div>
                  
                  {Icon && <Icon className="w-4 h-4 flex-shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110" />}
                  <span className="leading-none relative z-10">{cat.displayName}</span>
                  <Badge variant="secondary" className={`ml-1 text-xs leading-none relative z-10 transition-all duration-300 group-hover:scale-105 ${activeCategory === cat.id ? "bg-white/20" : "bg-white/10"}`}>
                    {cat.commandCount}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-muted-foreground">Loading commands...</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {filteredCommands.map((cmd: Command) => (
                <div 
                  key={cmd.id} 
                  className="command-card group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 transition-all duration-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3),0_20px_40px_-12px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-[1.02] hover:border-white/20 after:content-[''] after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.03] after:pointer-events-none"
                  data-testid={`card-command-${cmd.id}`}
                >
                  {/* Glass Reflection Layer */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Shimmer Animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
                  </div>
                  
                  {/* Hover Glow with enhanced glass effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="font-mono text-primary font-bold text-lg flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
                        <CommandIcon className="w-4 h-4 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                        <span data-testid={`text-command-name-${cmd.id}`}>{cmd.name}</span>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105" data-testid={`badge-category-${cmd.id}`}>
                        {cmd.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed transition-colors duration-300 group-hover:text-foreground/80" data-testid={`text-description-${cmd.id}`}>
                      {cmd.description}
                    </p>
                    <div className="pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
                      <code className="text-xs font-mono text-muted-foreground/70 bg-black/20 px-2 py-1 rounded block break-words transition-all duration-300 group-hover:bg-black/30 group-hover:text-muted-foreground/90" data-testid={`code-usage-${cmd.id}`}>
                        {cmd.usage}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCommands.length === 0 && (
              <div className="text-center py-20 text-muted-foreground" data-testid="text-no-commands">
                No commands found matching your search.
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
