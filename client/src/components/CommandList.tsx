import { useState, useEffect } from "react";
import { Search, ChevronRight, Command as CommandIcon, AlertCircle, Shield, Info, Gavel, TrendingUp, Gift, HandMetal, Wrench, MessageSquare, Rocket, Ticket, Gamepad2, Mic, Crosshair } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

const categoryIcons: Record<string, React.ComponentType<{className?: string}>> = {
  security: Shield,
  info: Info,
  moderation: Gavel,
  levels: TrendingUp,
  giveaway: Gift,
  welcoming: HandMetal,
  utility: Wrench,
  autoresponder: MessageSquare,
  booster: Rocket,
  ticket: Ticket,
  fun: Gamepad2,
  voice: Mic,
  snipe: Crosshair
};

interface Command {
  id: string;
  name: string;
  description: string;
  category: string;
  usage: string;
  arguments: string;
  aliases: string[];
}

async function fetchCommands(): Promise<Command[]> {
  const response = await fetch("/api/commands");
  if (!response.ok) throw new Error("Failed to fetch commands");
  return response.json();
}

async function fetchCategories(): Promise<string[]> {
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

  // Set first category as default once loaded
  useEffect(() => {
    if (categories.length > 0 && activeCategory === null) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const filteredCommands = commands.filter((cmd: Command) => {
    const matchesSearch = cmd.name.toLowerCase().includes(search.toLowerCase()) || 
                          cmd.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === null || cmd.category === activeCategory;
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
    <section id="commands" className="py-8 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-glow">System Commands</h2>
          <p className="text-muted-foreground">Explore the full capabilities of YELL. ({commands.length} commands available)</p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              className="pl-12 h-12 bg-secondary/50 border-white/5 focus-visible:ring-primary/50 text-lg placeholder:text-muted-foreground/50"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              data-testid="input-search-commands"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat];
              const count = commands.filter((cmd: Command) => cmd.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`glass-reflection shimmer flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat 
                      ? "bg-primary text-white shadow-lg shadow-primary/25 light-spot" 
                      : "bg-secondary/30 text-muted-foreground hover:bg-secondary/60 hover:text-white hover:light-spot"
                  }`}
                  data-testid={`button-category-${cat}`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="capitalize">{cat}</span>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 ml-1">{count}</Badge>
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
                  className="glass-reflection shimmer group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-1 light-spot after:content-[''] after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.03] after:pointer-events-none after:z-10"
                  data-testid={`card-command-${cmd.id}`}
                >
                  <div className="flex items-start justify-between mb-4 relative z-20">
                    <div className="font-mono text-primary font-bold text-lg flex items-center gap-2">
                      <CommandIcon className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(74,144,226,0.6)]" />
                      <span data-testid={`text-command-name-${cmd.id}`} className="drop-shadow-[0_0_8px_rgba(74,144,226,0.4)]">{cmd.name}</span>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 shimmer" data-testid={`badge-category-${cmd.id}`}>
                      {cmd.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed relative z-20" data-testid={`text-description-${cmd.id}`}>
                    {cmd.description}
                  </p>
                  <div className="pt-4 border-t border-white/5 relative z-20">
                    <code className="text-xs font-mono text-muted-foreground/70 bg-black/20 px-2 py-1 rounded block break-words" data-testid={`code-usage-${cmd.id}`}>
                      {cmd.usage}
                    </code>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
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
