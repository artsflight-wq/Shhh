export interface CategoryMetadata {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  description: string;
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
    id: "security",
    name: "security",
    displayName: "Security",
    icon: "Shield",
    description: "Anti-nuke, anti-raid, filters, and fake permissions"
  },
  {
    id: "info",
    name: "info",
    displayName: "Info",
    icon: "Info",
    description: "User, server, channel, and role information"
  },
  {
    id: "moderation",
    name: "moderation",
    displayName: "Moderation",
    icon: "Gavel",
    description: "Kick, ban, timeout, purge, and role management"
  },
  {
    id: "engagement",
    name: "engagement",
    displayName: "Engagement",
    icon: "TrendingUp",
    description: "Levels, streaks, pledges, and friend groups"
  },
  {
    id: "giveaway",
    name: "giveaway",
    displayName: "Giveaway",
    icon: "Gift",
    description: "Create and manage giveaways"
  },
  {
    id: "welcoming",
    name: "welcoming",
    displayName: "Welcoming",
    icon: "HandMetal",
    description: "Welcome messages and DM on join"
  },
  {
    id: "utility",
    name: "utility",
    displayName: "Utility",
    icon: "Wrench",
    description: "AFK, logging, backups, timers, and server customization"
  },
  {
    id: "autoresponder",
    name: "autoresponder",
    displayName: "Autoresponder",
    icon: "MessageSquare",
    description: "Auto-responses and reactions to triggers"
  },
  {
    id: "booster",
    name: "booster",
    displayName: "Booster",
    icon: "Rocket",
    description: "Custom booster roles and perks"
  },
  {
    id: "ticket",
    name: "ticket",
    displayName: "Ticket",
    icon: "Ticket",
    description: "Support ticket system"
  },
  {
    id: "fun",
    name: "fun",
    displayName: "Fun",
    icon: "Gamepad2",
    description: "Games, family system, and entertainment"
  },
  {
    id: "voice",
    name: "voice",
    displayName: "Voice",
    icon: "Mic",
    description: "VoiceMaster and voice channel controls"
  },
  {
    id: "snipe",
    name: "snipe",
    displayName: "Snipe",
    icon: "Crosshair",
    description: "View deleted and edited messages"
  },
  {
    id: "birthday",
    name: "birthday",
    displayName: "Birthday",
    icon: "Cake",
    description: "Birthday tracking and celebrations"
  }
];

export function getCategoryById(id: string): CategoryMetadata | undefined {
  return CATEGORIES.find(cat => cat.id === id);
}

export function getCategoryByName(name: string): CategoryMetadata | undefined {
  return CATEGORIES.find(cat => cat.name === name);
}
