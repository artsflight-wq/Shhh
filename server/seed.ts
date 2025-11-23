import { storage } from "./storage";

const allCommands = [
  { name: "8ball", aliases: [], arguments: "[question]", description: "Ask magic 8ball a yes/no question", category: "games", usage: ",8ball [question]" },
  { name: "afk", aliases: [], arguments: "[message]", description: "Set AFK status with optional custom message", category: "afk", usage: ",afk [message]" },
  { name: "autorole add", aliases: [], arguments: "[@role]", description: "Add auto-assigned role for new members", category: "roles", usage: ",autorole add [@role]" },
  { name: "autorole remove", aliases: [], arguments: "[@role]", description: "Remove auto-assigned role", category: "roles", usage: ",autorole remove [@role]" },
  { name: "ban", aliases: [], arguments: "[@user] [reason]", description: "Permanently ban member from server", category: "moderation", usage: ",ban [@user] [reason]" },
  { name: "blackjack", aliases: [], arguments: "[bet]", description: "Play blackjack card game with betting", category: "games", usage: ",blackjack [bet]" },
  { name: "blacktea", aliases: [], arguments: "[]", description: "Start interactive word battle royale game", category: "games", usage: ",blacktea []" },
  { name: "boosts", aliases: [], arguments: "[]", description: "Display list of all server boosters", category: "info", usage: ",boosts []" },
  { name: "channelinfo", aliases: [], arguments: "[#channel]", description: "Display detailed channel information", category: "info", usage: ",channelinfo [#channel]" },
  { name: "coinflip", aliases: [], arguments: "[]", description: "Flip a coin and get heads or tails", category: "games", usage: ",coinflip []" },
  { name: "credits", aliases: [], arguments: "[]", description: "Display bot credits and contributors", category: "info", usage: ",credits []" },
  { name: "define", aliases: [], arguments: "[word]", description: "Get dictionary definition of word with pronunciation", category: "media", usage: ",define [word]" },
  { name: "dice", aliases: [], arguments: "[sides]", description: "Roll dice with optional number of sides (default 6)", category: "games", usage: ",dice [sides]" },
  { name: "embed", aliases: [], arguments: "[title|description]", description: "Create custom embed with title and description", category: "chat", usage: ",embed [title|description]" },
  { name: "emoji add", aliases: [], arguments: "[emojis...]", description: "Add emojis to server from attachments or URLs", category: "emoji", usage: ",emoji add [emojis...]" },
  { name: "emoji info", aliases: [], arguments: "[emoji]", description: "Display detailed information about emoji", category: "emoji", usage: ",emoji info [emoji]" },
  { name: "emoji remove", aliases: [], arguments: "[emojis...]", description: "Remove emojis from server by name or emoji", category: "emoji", usage: ",emoji remove [emojis...]" },
  { name: "emojis", aliases: [], arguments: "[]", description: "List all custom emojis in server with IDs", category: "emoji", usage: ",emojis []" },
  { name: "gw end", aliases: [], arguments: "[message_link]", description: "Manually end giveaway early and select winners", category: "giveaways", usage: ",gw end [message_link]" },
  { name: "gw history", aliases: [], arguments: "[]", description: "Show giveaway history from last 6 hours", category: "giveaways", usage: ",gw history []" },
  { name: "gw reroll", aliases: [], arguments: "[message_link]", description: "Reroll winners for already ended giveaway", category: "giveaways", usage: ",gw reroll [message_link]" },
  { name: "gw start", aliases: [], arguments: "[duration] [#channel] [winners] [prize]", description: "Start new giveaway with optional requirement flags", category: "giveaways", usage: ",gw start [duration] [#channel] [winners] [prize]" },
  { name: "hack ban", aliases: [], arguments: "[user_id] [reason]", description: "Preemptive ban before user joins server", category: "moderation", usage: ",hack ban [user_id] [reason]" },
  { name: "help", aliases: [], arguments: "[query]", description: "Hierarchical help system with pagination and subcommand display", category: "info", usage: ",help [query]" },
  { name: "hide", aliases: [], arguments: "[]", description: "Hide current channel from @everyone", category: "channels", usage: ",hide []" },
  { name: "hide all", aliases: [], arguments: "[]", description: "Hide all channels from @everyone", category: "channels", usage: ",hide all []" },
  { name: "invite", aliases: [], arguments: "[]", description: "Display bot invite link", category: "utility", usage: ",invite []" },
  { name: "jail", aliases: [], arguments: "[@user] [duration] [reason]", description: "Jail member by removing all roles for specified duration", category: "management", usage: ",jail [@user] [duration] [reason]" },
  { name: "kick", aliases: [], arguments: "[@user] [reason]", description: "Kick member from server with optional reason", category: "moderation", usage: ",kick [@user] [reason]" },
  { name: "leaderboard", aliases: [], arguments: "[voice|message]", description: "View activity leaderboard for voice or messages", category: "leveling", usage: ",leaderboard [voice|message]" },
  { name: "levels add", aliases: [], arguments: "[@role] [level]", description: "Add level role reward at specified level", category: "leveling", usage: ",levels add [@role] [level]" },
  { name: "levels ignore", aliases: [], arguments: "[#channel/@role]", description: "Toggle ignore status for channel or role in XP tracking", category: "leveling", usage: ",levels ignore [#channel/@role]" },
  { name: "levels leaderboard", aliases: [], arguments: "[]", description: "Show top 10 users by XP with ranks", category: "leveling", usage: ",levels leaderboard []" },
  { name: "levels list", aliases: [], arguments: "[]", description: "Show all ignored channels and roles for XP tracking", category: "leveling", usage: ",levels list []" },
  { name: "levels lock", aliases: [], arguments: "[]", description: "Disable XP tracking system in server", category: "leveling", usage: ",levels lock []" },
  { name: "levels message", aliases: [], arguments: "[template]", description: "Set custom level-up message template with variables", category: "leveling", usage: ",levels message [template]" },
  { name: "levels rank", aliases: [], arguments: "[@user]", description: "Show user's rank and level progress with XP bar", category: "leveling", usage: ",levels rank [@user]" },
  { name: "levels remove", aliases: [], arguments: "[level]", description: "Remove level role reward at specified level", category: "leveling", usage: ",levels remove [level]" },
  { name: "levels setlevel", aliases: [], arguments: "[@user] [level]", description: "Set user's level directly (admin only)", category: "leveling", usage: ",levels setlevel [@user] [level]" },
  { name: "levels setrate", aliases: [], arguments: "[multiplier]", description: "Set XP multiplier rate for server", category: "leveling", usage: ",levels setrate [multiplier]" },
  { name: "levels sync", aliases: [], arguments: "[]", description: "Award level roles to all users based on current XP", category: "leveling", usage: ",levels sync []" },
  { name: "lock", aliases: [], arguments: "[]", description: "Lock current channel from @everyone", category: "management", usage: ",lock []" },
  { name: "lock all", aliases: [], arguments: "[]", description: "Lock all channels in server from @everyone", category: "management", usage: ",lock all []" },
  { name: "massmute", aliases: [], arguments: "[]", description: "Server mute everyone in author's current voice channel", category: "voice", usage: ",massmute []" },
  { name: "media caption", aliases: [], arguments: "[caption]", description: "Add text caption to replied image", category: "media", usage: ",media caption [caption]" },
  { name: "media quote", aliases: [], arguments: "[]", description: "Create quote card from replied message with avatar", category: "media", usage: ",media quote []" },
  { name: "membercount", aliases: [], arguments: "[]", description: "Display server member count breakdown by category", category: "info", usage: ",membercount []" },
  { name: "nick", aliases: [], arguments: "[@user] [nickname]", description: "Change member's nickname", category: "roles", usage: ",nick [@user] [nickname]" },
  { name: "ping", aliases: [], arguments: "[mode]", description: "Display bot latency and optional advanced diagnostics", category: "utility", usage: ",ping [mode]" },
  { name: "poll", aliases: [], arguments: "[question|option1|option2...]", description: "Create poll with question and options", category: "chat", usage: ",poll [question|option1|option2...]" },
  { name: "purge", aliases: [], arguments: "[amount]", description: "Delete specified number of messages in channel", category: "moderation", usage: ",purge [amount]" },
  { name: "purge bots", aliases: [], arguments: "[amount]", description: "Delete only bot messages", category: "moderation", usage: ",purge bots [amount]" },
  { name: "purge contains", aliases: [], arguments: "[text] [amount]", description: "Delete messages containing specific text", category: "moderation", usage: ",purge contains [text] [amount]" },
  { name: "rank", aliases: [], arguments: "[@user]", description: "View XP rank, level, and progress for user", category: "leveling", usage: ",rank [@user]" },
  { name: "rate", aliases: [], arguments: "[thing]", description: "Rate something out of 10 randomly", category: "games", usage: ",rate [thing]" },
  { name: "roles", aliases: [], arguments: "[]", description: "Display all server roles in hierarchical order", category: "info", usage: ",roles []" },
  { name: "rps", aliases: [], arguments: "[@user] [rock|paper|scissors]", description: "Play rock paper scissors against user", category: "games", usage: ",rps [@user] [rock|paper|scissors]" },
  { name: "search", aliases: [], arguments: "[query]", description: "Search the web using Google with 10s server cooldown", category: "media", usage: ",search [query]" },
  { name: "serverinfo", aliases: [], arguments: "[]", description: "Display detailed server information and statistics", category: "info", usage: ",serverinfo []" },
  { name: "slowmode", aliases: [], arguments: "[duration|off]", description: "Set or disable slowmode for current channel", category: "management", usage: ",slowmode [duration|off]" },
  { name: "softban", aliases: [], arguments: "[@user] [reason]", description: "Ban user, delete their messages, then instantly unban", category: "moderation", usage: ",softban [@user] [reason]" },
  { name: "stats", aliases: [], arguments: "[]", description: "Display bot statistics and performance metrics", category: "utility", usage: ",stats []" },
  { name: "sticker add", aliases: [], arguments: "[args...]", description: "Add stickers to server from attachments", category: "emoji", usage: ",sticker add [args...]" },
  { name: "sticker info", aliases: [], arguments: "[sticker_name]", description: "Display detailed information about sticker", category: "emoji", usage: ",sticker info [sticker_name]" },
  { name: "sticker remove", aliases: [], arguments: "[sticker_names...]", description: "Remove stickers from server by name", category: "emoji", usage: ",sticker remove [sticker_names...]" },
  { name: "timeout", aliases: [], arguments: "[@user] [duration] [reason]", description: "Timeout member for specified duration", category: "moderation", usage: ",timeout [@user] [duration] [reason]" },
  { name: "ttt", aliases: [], arguments: "[@user]", description: "Play tic-tac-toe game against another user", category: "games", usage: ",ttt [@user]" },
  { name: "unban", aliases: [], arguments: "[user_id] [reason]", description: "Unban user by their Discord ID", category: "moderation", usage: ",unban [user_id] [reason]" },
  { name: "unjail", aliases: [], arguments: "[@user]", description: "Remove member from jail and restore their roles", category: "management", usage: ",unjail [@user]" },
  { name: "unlock", aliases: [], arguments: "[#channel]", description: "Unlock specified channel for @everyone", category: "management", usage: ",unlock [#channel]" },
  { name: "unhide", aliases: [], arguments: "[#channel]", description: "Unhide channel from @everyone", category: "channels", usage: ",unhide [#channel]" },
  { name: "userinfo", aliases: [], arguments: "[@user]", description: "Display detailed user information and avatar", category: "info", usage: ",userinfo [@user]" },
  { name: "weather", aliases: [], arguments: "[location]", description: "Check current weather for specified location", category: "media", usage: ",weather [location]" },
];

export async function seedDatabase() {
  try {
    const existing = await storage.getAllCommands();
    if (existing.length > 0) {
      console.log("✓ Database already seeded");
      return;
    }

    console.log("Seeding database with initial commands...");
    for (const cmd of allCommands) {
      await storage.createCommand(cmd);
    }
    console.log(`✓ Seeded ${allCommands.length} commands`);
  } catch (error) {
    console.error("Seed warning:", error instanceof Error ? error.message : "Unknown error");
  }
}
