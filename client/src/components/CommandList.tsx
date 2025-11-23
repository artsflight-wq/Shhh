import { useState } from "react";
import { Search, ChevronRight, Command as CommandIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = ["All", "General", "Moderation", "Utility", "Social", "Economy", "Music"];

const COMMANDS = [
  { name: "ban", description: "Bans a user from the server.", category: "Moderation", usage: "/ban [user] [reason]" },
  { name: "kick", description: "Kicks a user from the server.", category: "Moderation", usage: "/kick [user] [reason]" },
  { name: "mute", description: "Times out a user for a specified duration.", category: "Moderation", usage: "/mute [user] [duration]" },
  { name: "purge", description: "Deletes a specified number of messages.", category: "Moderation", usage: "/purge [amount]" },
  { name: "lock", description: "Locks the current channel.", category: "Moderation", usage: "/lock" },
  { name: "unlock", description: "Unlocks the current channel.", category: "Moderation", usage: "/unlock" },
  { name: "avatar", description: "Displays a user's avatar.", category: "Utility", usage: "/avatar [user]" },
  { name: "userinfo", description: "Displays information about a user.", category: "Utility", usage: "/userinfo [user]" },
  { name: "serverinfo", description: "Displays information about the server.", category: "Utility", usage: "/serverinfo" },
  { name: "ping", description: "Checks the bot's latency.", category: "General", usage: "/ping" },
  { name: "help", description: "Displays a list of commands.", category: "General", usage: "/help" },
  { name: "afk", description: "Sets your status to AFK.", category: "General", usage: "/afk [message]" },
  { name: "play", description: "Plays a song from YouTube or Spotify.", category: "Music", usage: "/play [query]" },
  { name: "skip", description: "Skips the current song.", category: "Music", usage: "/skip" },
  { name: "stop", description: "Stops the music and clears the queue.", category: "Music", usage: "/stop" },
  { name: "queue", description: "Displays the current music queue.", category: "Music", usage: "/queue" },
  { name: "balance", description: "Checks your current balance.", category: "Economy", usage: "/balance" },
  { name: "pay", description: "Transfers money to another user.", category: "Economy", usage: "/pay [user] [amount]" },
  { name: "rank", description: "Displays your current level and rank.", category: "Social", usage: "/rank" },
  { name: "leaderboard", description: "Displays the server leaderboard.", category: "Social", usage: "/leaderboard" },
];

export function CommandList() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCommands = COMMANDS.filter((cmd) => {
    const matchesSearch = cmd.name.toLowerCase().includes(search.toLowerCase()) || 
                          cmd.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || cmd.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="commands" className="py-8 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">System Commands</h2>
          <p className="text-muted-foreground">Explore the full capabilities of YELL.</p>
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
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/25" 
                    : "bg-secondary/30 text-muted-foreground hover:bg-secondary/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filteredCommands.map((cmd) => (
            <div 
              key={cmd.name} 
              className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-1 after:content-[''] after:absolute after:inset-0 after:bg-[url('/noise.svg')] after:opacity-[0.15] after:pointer-events-none"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="font-mono text-primary font-bold text-lg flex items-center gap-2">
                  <CommandIcon className="w-4 h-4 text-primary" />
                  {cmd.name}
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {cmd.category}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {cmd.description}
              </p>
              <div className="pt-4 border-t border-white/5">
                <code className="text-xs font-mono text-muted-foreground/70 bg-black/20 px-2 py-1 rounded">
                  {cmd.usage}
                </code>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No commands found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
