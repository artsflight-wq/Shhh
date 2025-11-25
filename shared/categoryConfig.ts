export interface FeaturedCommand {
  name: string;
  description: string;
}

export interface CategoryMetadata {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  description: string;
  featuredCommands?: FeaturedCommand[];
}

export const CATEGORIES: CategoryMetadata[] = [
  {
    id: "all",
    name: "all",
    displayName: "All",
    icon: "LayoutGrid",
    description: "All available commands"
  },
  {
    id: "moderation",
    name: "moderation",
    displayName: "Moderation",
    icon: "Gavel",
    description: "Kick, ban, timeout, purge, and role management",
    featuredCommands: [
      { name: "strip", description: "Strip all roles from a member" },
      { name: "raid", description: "RAID protection with two modes" },
      { name: "jail", description: "Jail a member with optional duration" }
    ]
  },
  {
    id: "security",
    name: "security",
    displayName: "Security",
    icon: "Shield",
    description: "Anti-nuke, anti-raid, filters, and fake permissions",
    featuredCommands: [
      { name: "an", description: "Antinuke configuration system" },
      { name: "filter", description: "Configure message filters and spam detection" },
      { name: "fakepermissions", description: "Grant fake permissions to users" }
    ]
  },
  {
    id: "info",
    name: "info",
    displayName: "Info",
    icon: "Info",
    description: "User, server, channel, and role information",
    featuredCommands: [
      { name: "userinfo", description: "Get detailed information about a user" },
      { name: "serverinfo", description: "View server statistics and details" },
      { name: "roleinfo", description: "Get information about a role" }
    ]
  },
  {
    id: "utility",
    name: "utility",
    displayName: "Utility",
    icon: "Wrench",
    description: "Server utilities including welcoming, giveaways, birthdays, AFK, logging, backups, and customization",
    featuredCommands: [
      { name: "afk", description: "Set yourself as AFK with a custom status" },
      { name: "giveaway", description: "Create interactive giveaways" },
      { name: "welcome", description: "Configure welcome messages" }
    ]
  },
  {
    id: "ticket",
    name: "ticket",
    displayName: "Ticket",
    icon: "Ticket",
    description: "Support ticket system",
    featuredCommands: [
      { name: "ticket", description: "Create or manage support tickets" },
      { name: "ticket add", description: "Add a user to a ticket" },
      { name: "ticket close", description: "Close a support ticket" }
    ]
  },
  {
    id: "autoresponder",
    name: "autoresponder",
    displayName: "Autoresponder",
    icon: "MessageSquare",
    description: "Auto-responses and reactions to triggers",
    featuredCommands: [
      { name: "ar", description: "Create custom auto-responses" },
      { name: "ar add", description: "Add a new auto-responder trigger" },
      { name: "ar list", description: "View all configured auto-responders" }
    ]
  },
  {
    id: "booster",
    name: "booster",
    displayName: "Booster",
    icon: "Rocket",
    description: "Custom booster roles and perks",
    featuredCommands: [
      { name: "boosterrole", description: "Claim your custom booster role" },
      { name: "boosterrole color", description: "Change your booster role color" },
      { name: "boosterrole name", description: "Set your booster role name" }
    ]
  },
  {
    id: "engagement",
    name: "engagement",
    displayName: "Engagement",
    icon: "TrendingUp",
    description: "Levels, streaks, pledges, and friend groups",
    featuredCommands: [
      { name: "level", description: "View your server level and rank" },
      { name: "streak", description: "Check your daily activity streak" },
      { name: "pledge", description: "View and manage server pledges" }
    ]
  },
  {
    id: "voice",
    name: "voice",
    displayName: "Voice",
    icon: "Mic",
    description: "VoiceMaster and voice channel controls",
    featuredCommands: [
      { name: "voice", description: "VoiceMaster setup and configuration" },
      { name: "voice lock", description: "Lock your voice channel" },
      { name: "voice claim", description: "Claim ownership of a voice channel" }
    ]
  },
  {
    id: "fun",
    name: "fun",
    displayName: "Fun",
    icon: "Gamepad2",
    description: "Games, family system, and entertainment",
    featuredCommands: [
      { name: "family", description: "Create and manage your server family" },
      { name: "media", description: "Media manipulation commands" },
      { name: "blacktea", description: "Make a cup of virtual blacktea" }
    ]
  },
  {
    id: "snipe",
    name: "snipe",
    displayName: "Snipe",
    icon: "Crosshair",
    description: "View deleted and edited messages",
    featuredCommands: [
      { name: "snipe", description: "View the last deleted message" },
      { name: "editsnipe", description: "View the last edited message" },
      { name: "clearsnipe", description: "Clear sniped messages" }
    ]
  }
];

export function getCategoryById(id: string): CategoryMetadata | undefined {
  return CATEGORIES.find(cat => cat.id === id);
}

export function getCategoryByName(name: string): CategoryMetadata | undefined {
  return CATEGORIES.find(cat => cat.name === name);
}
