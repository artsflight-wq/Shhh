import { storage } from "./storage";

const allCommands = [
  {
    "id": "an",
    "name": "an",
    "aliases": [],
    "arguments": "[<module> <on/off> [flags]]",
    "description": "Antinuke configuration system",
    "category": "security",
    "usage": ",an [<module> <on/off> [flags]]"
  },
  {
    "id": "an-admin",
    "name": "an admin",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Add a member to antinuke admins",
    "category": "security",
    "usage": ",an admin [@user]"
  },
  {
    "id": "an-config",
    "name": "an config",
    "aliases": [],
    "arguments": "[]",
    "description": "Show antinuke configuration",
    "category": "security",
    "usage": ",an config []"
  },
  {
    "id": "an-list",
    "name": "an list",
    "aliases": [],
    "arguments": "[]",
    "description": "Show antinuke admins and whitelist",
    "category": "security",
    "usage": ",an list []"
  },
  {
    "id": "an-unadmin",
    "name": "an unadmin",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Remove a member from antinuke admins",
    "category": "security",
    "usage": ",an unadmin [@user]"
  },
  {
    "id": "an-unwhitelist",
    "name": "an unwhitelist",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Remove a member, bot, or role from antinuke whitelist",
    "category": "security",
    "usage": ",an unwhitelist [@user/@role]"
  },
  {
    "id": "an-whitelist",
    "name": "an whitelist",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Add a member, bot, or role to antinuke whitelist",
    "category": "security",
    "usage": ",an whitelist [@user/@role]"
  },
  {
    "id": "filter",
    "name": "filter",
    "aliases": [],
    "arguments": "[<invites|spam> <on|off>]",
    "description": "Configure message filters for invite links and spam detection",
    "category": "security",
    "usage": ",filter [<invites|spam> <on|off>]"
  },
  {
    "id": "filter-exempt",
    "name": "filter exempt",
    "aliases": [],
    "arguments": "[<add|remove> <@user|@role>]",
    "description": "Manage filter exemptions for users and roles",
    "category": "security",
    "usage": ",filter exempt [<add|remove> <@user|@role>]"
  },
  {
    "id": "filter-exempt-add",
    "name": "filter exempt add",
    "aliases": [],
    "arguments": "[<@user|@role>]",
    "description": "Add a user or role to filter exemptions. Exempt users/roles will bypass all filters",
    "category": "security",
    "usage": ",filter exempt add [<@user|@role>]"
  },
  {
    "id": "filter-exempt-remove",
    "name": "filter exempt remove",
    "aliases": [],
    "arguments": "[<@user|@role>]",
    "description": "Remove a user or role from filter exemptions",
    "category": "security",
    "usage": ",filter exempt remove [<@user|@role>]"
  },
  {
    "id": "filter-invites",
    "name": "filter invites",
    "aliases": [],
    "arguments": "[<on|off>]",
    "description": "Enable or disable invite link filter. Deletes messages with Discord invites and times out offenders for 1 minute",
    "category": "security",
    "usage": ",filter invites [<on|off>]"
  },
  {
    "id": "filter-spam",
    "name": "filter spam",
    "aliases": [],
    "arguments": "[<on|off>]",
    "description": "Enable or disable spam filter. Detects spam using frequency (5+ msgs in 10s) and similarity (0.8+ match). Times out offenders for 1 minute and purges their last 50 messages",
    "category": "security",
    "usage": ",filter spam [<on|off>]"
  },
  {
    "id": "panick",
    "name": "panick",
    "aliases": [],
    "arguments": "[<on/off> [reason]]",
    "description": "Emergency server lockdown mode",
    "category": "security",
    "usage": ",panick [<on/off> [reason]]"
  },
  {
    "id": "nuke",
    "name": "nuke",
    "aliases": [],
    "arguments": "[Example: ,nuke]",
    "description": "Nuke and recreate current channel",
    "category": "security",
    "usage": ",nuke [Example: ,nuke]"
  },
  {
    "id": "nuke-arm",
    "name": "nuke arm",
    "aliases": [],
    "arguments": "[<duration> [channel]]",
    "description": "Arm automatic nuke timer",
    "category": "security",
    "usage": ",nuke arm [<duration> [channel]]"
  },
  {
    "id": "nuke-disarm",
    "name": "nuke disarm",
    "aliases": [],
    "arguments": "[[channel]]",
    "description": "Disarm automatic nuke timer",
    "category": "security",
    "usage": ",nuke disarm [[channel]]"
  },
  {
    "id": "ec",
    "name": "ec",
    "aliases": [],
    "arguments": "[<feature> <on/off>]",
    "description": "Event Control - manage server events and restrictions",
    "category": "security",
    "usage": ",ec [<feature> <on/off>]"
  },
  {
    "id": "timerlist",
    "name": "timerlist",
    "aliases": [],
    "arguments": "[]",
    "description": "View all active nuke timers",
    "category": "security",
    "usage": ",timerlist []"
  },
  {
    "id": "fp",
    "name": "fp",
    "aliases": [],
    "arguments": "[<grant/remove/list/reset> [args]]",
    "description": "Manage fake permissions for users and roles",
    "category": "security",
    "usage": ",fp [<grant/remove/list/reset> [args]]"
  },
  {
    "id": "fp-grant",
    "name": "fp grant",
    "aliases": [],
    "arguments": "[<user/role> <permission(s)>]",
    "description": "Grant fake permissions to user or role",
    "category": "security",
    "usage": ",fp grant [<user/role> <permission(s)>]"
  },
  {
    "id": "fp-list",
    "name": "fp list",
    "aliases": [],
    "arguments": "[[user/role]]",
    "description": "List permissions for a specific target or all permissions in guild",
    "category": "security",
    "usage": ",fp list [[user/role]]"
  },
  {
    "id": "fp-remove",
    "name": "fp remove",
    "aliases": [],
    "arguments": "[<user/role> <permission(s)>]",
    "description": "Remove fake permissions from user or role",
    "category": "security",
    "usage": ",fp remove [<user/role> <permission(s)>]"
  },
  {
    "id": "fp-reset",
    "name": "fp reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset all fake permissions in the guild",
    "category": "security",
    "usage": ",fp reset []"
  },
  {
    "id": "perms",
    "name": "perms",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Display fake and native permissions for a user",
    "category": "security",
    "usage": ",perms [[@user]]"
  },
  {
    "id": "ui",
    "name": "ui",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Display detailed user information",
    "category": "info",
    "usage": ",ui [[@user]]"
  },
  {
    "id": "ri",
    "name": "ri",
    "aliases": [],
    "arguments": "[<role>]",
    "description": "Display detailed role information",
    "category": "info",
    "usage": ",ri [<role>]"
  },
  {
    "id": "si",
    "name": "si",
    "aliases": [],
    "arguments": "[]",
    "description": "Display detailed server information",
    "category": "info",
    "usage": ",si []"
  },
  {
    "id": "ci",
    "name": "ci",
    "aliases": [],
    "arguments": "[[#channel]]",
    "description": "Display detailed channel information",
    "category": "info",
    "usage": ",ci [[#channel]]"
  },
  {
    "id": "ii",
    "name": "ii",
    "aliases": [],
    "arguments": "[<invite>]",
    "description": "Display detailed Discord invite information",
    "category": "info",
    "usage": ",ii [<invite>]"
  },
  {
    "id": "mc",
    "name": "mc",
    "aliases": [],
    "arguments": "[]",
    "description": "Display server member count breakdown",
    "category": "info",
    "usage": ",mc []"
  },
  {
    "id": "credits",
    "name": "credits",
    "aliases": [],
    "arguments": "[]",
    "description": "Display bot credits and contributors",
    "category": "info",
    "usage": ",credits []"
  },
  {
    "id": "roles",
    "name": "roles",
    "aliases": [],
    "arguments": "[]",
    "description": "Display all server roles in order",
    "category": "info",
    "usage": ",roles []"
  },
  {
    "id": "boosts",
    "name": "boosts",
    "aliases": [],
    "arguments": "[]",
    "description": "Show a list of all server boosters",
    "category": "info",
    "usage": ",boosts []"
  },
  {
    "id": "define",
    "name": "define",
    "aliases": [],
    "arguments": "[<word>]",
    "description": "Get the dictionary definition of a word",
    "category": "info",
    "usage": ",define [<word>]"
  },
  {
    "id": "ud",
    "name": "ud",
    "aliases": [],
    "arguments": "[<word>]",
    "description": "Get Urban Dictionary definition of a word/phrase",
    "category": "info",
    "usage": ",ud [<word>]"
  },
  {
    "id": "kick",
    "name": "kick",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Kick a member from the server",
    "category": "moderation",
    "usage": ",kick [@member [reason]]"
  },
  {
    "id": "ban",
    "name": "ban",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Permanently ban a member from the server",
    "category": "moderation",
    "usage": ",ban [@member [reason]]"
  },
  {
    "id": "unban",
    "name": "unban",
    "aliases": [],
    "arguments": "[<user_id> [reason]]",
    "description": "Unban a user by their ID",
    "category": "moderation",
    "usage": ",unban [<user_id> [reason]]"
  },
  {
    "id": "unbanall",
    "name": "unbanall",
    "aliases": [],
    "arguments": "[Example: ,unban all]",
    "description": "Mass unban all banned members except hardbanned users",
    "category": "moderation",
    "usage": ",unbanall [Example: ,unban all]"
  },
  {
    "id": "timeout",
    "name": "timeout",
    "aliases": [],
    "arguments": "[@member [duration] [reason]]",
    "description": "Timeout a member (default: 5 minutes)",
    "category": "moderation",
    "usage": ",timeout [@member [duration] [reason]]"
  },
  {
    "id": "untimeout",
    "name": "untimeout",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Remove timeout from a member",
    "category": "moderation",
    "usage": ",untimeout [@member [reason]]"
  },
  {
    "id": "softban",
    "name": "softban",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Softban a member (ban + delete messages + instant unban)",
    "category": "moderation",
    "usage": ",softban [@member [reason]]"
  },
  {
    "id": "hackban",
    "name": "hackban",
    "aliases": [],
    "arguments": "[<user_id> [reason]]",
    "description": "Ban a user before they join (preemptive ban). Cannot be unbanned except by antinuke admins.",
    "category": "moderation",
    "usage": ",hackban [<user_id> [reason]]"
  },
  {
    "id": "purge",
    "name": "purge",
    "aliases": [],
    "arguments": "[<amount> | bots/humans/@user/reactions/contains/mentions/links [amount]]",
    "description": "Purge messages with various filters",
    "category": "moderation",
    "usage": ",purge [<amount> | bots/humans/@user/reactions/contains/mentions/links [amount]]"
  },
  {
    "id": "purge-bots",
    "name": "purge bots",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete only bot messages",
    "category": "moderation",
    "usage": ",purge bots [amount]"
  },
  {
    "id": "purge-humans",
    "name": "purge humans",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete only human messages",
    "category": "moderation",
    "usage": ",purge humans [amount]"
  },
  {
    "id": "purge-@user",
    "name": "purge @user",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete messages from specific user",
    "category": "moderation",
    "usage": ",purge @user [amount]"
  },
  {
    "id": "purge-contains",
    "name": "purge contains",
    "aliases": [],
    "arguments": "[text] [amount]",
    "description": "Delete messages containing specific text",
    "category": "moderation",
    "usage": ",purge contains [text] [amount]"
  },
  {
    "id": "purge-reactions",
    "name": "purge reactions",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete messages with reactions",
    "category": "moderation",
    "usage": ",purge reactions [amount]"
  },
  {
    "id": "purge-mentions",
    "name": "purge mentions",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete messages with @mentions",
    "category": "moderation",
    "usage": ",purge mentions [amount]"
  },
  {
    "id": "purge-links",
    "name": "purge links",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete messages containing links",
    "category": "moderation",
    "usage": ",purge links [amount]"
  },
  {
    "id": "bc",
    "name": "bc",
    "aliases": [],
    "arguments": "[[amount]]",
    "description": "Clean bot messages (legacy alias for purge bots)",
    "category": "moderation",
    "usage": ",bc [[amount]]"
  },
  {
    "id": "raid",
    "name": "raid",
    "aliases": [],
    "arguments": "[<duration> <action> | <on|off>]",
    "description": "RAID protection with two modes:",
    "category": "moderation",
    "usage": ",raid [<duration> <action> | <on|off>]"
  },
  {
    "id": "raid-on",
    "name": "raid on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable full server lockdown mode (locks channels, disables joins, deletes webhooks)",
    "category": "moderation",
    "usage": ",raid on []"
  },
  {
    "id": "raid-off",
    "name": "raid off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable server lockdown mode and restore permissions",
    "category": "moderation",
    "usage": ",raid off []"
  },
  {
    "id": "r",
    "name": "r",
    "aliases": [],
    "arguments": "[<subcommand> [args] (see ,r for full usage)]",
    "description": "Role management (toggle/restore/rename/delete/create/dump/etc)",
    "category": "moderation",
    "usage": ",r [<subcommand> [args] (see ,r for full usage)]"
  },
  {
    "id": "r-toggle",
    "name": "r toggle",
    "aliases": [],
    "arguments": "[@user] [@role]",
    "description": "Toggle role on or off for user",
    "category": "moderation",
    "usage": ",r toggle [@user] [@role]"
  },
  {
    "id": "r-restore",
    "name": "r restore",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Restore all removed roles to user",
    "category": "moderation",
    "usage": ",r restore [@user]"
  },
  {
    "id": "r-rename",
    "name": "r rename",
    "aliases": [],
    "arguments": "[@role] [name]",
    "description": "Rename existing role",
    "category": "moderation",
    "usage": ",r rename [@role] [name]"
  },
  {
    "id": "r-delete",
    "name": "r delete",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Delete role from server",
    "category": "moderation",
    "usage": ",r delete [@role]"
  },
  {
    "id": "r-create",
    "name": "r create",
    "aliases": [],
    "arguments": "[name] [color]",
    "description": "Create new role with name and optional color",
    "category": "moderation",
    "usage": ",r create [name] [color]"
  },
  {
    "id": "r-dump",
    "name": "r dump",
    "aliases": [],
    "arguments": "[@role]",
    "description": "List all members who have specific role",
    "category": "moderation",
    "usage": ",r dump [@role]"
  },
  {
    "id": "r-humans",
    "name": "r humans",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Add role to all human members (not bots)",
    "category": "moderation",
    "usage": ",r humans [@role]"
  },
  {
    "id": "r-has",
    "name": "r has",
    "aliases": [],
    "arguments": "[@user] [@role]",
    "description": "Check if user has specific role",
    "category": "moderation",
    "usage": ",r has [@user] [@role]"
  },
  {
    "id": "r-color",
    "name": "r color",
    "aliases": [],
    "arguments": "[@role] [color]",
    "description": "Change role color using hex or name",
    "category": "moderation",
    "usage": ",r color [@role] [color]"
  },
  {
    "id": "r-icon",
    "name": "r icon",
    "aliases": [],
    "arguments": "[@role] [emoji/url]",
    "description": "Set role icon using emoji or image URL",
    "category": "moderation",
    "usage": ",r icon [@role] [emoji/url]"
  },
  {
    "id": "autorole",
    "name": "autorole",
    "aliases": [],
    "arguments": "[<add|remove> <role>]",
    "description": "Auto-assign roles to new members",
    "category": "moderation",
    "usage": ",autorole [<add|remove> <role>]"
  },
  {
    "id": "ir",
    "name": "ir",
    "aliases": [],
    "arguments": "[<role>]",
    "description": "List all members with a specific role",
    "category": "moderation",
    "usage": ",ir [<role>]"
  },
  {
    "id": "strip",
    "name": "strip",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Remove all roles from a member",
    "category": "moderation",
    "usage": ",strip [@member [reason]]"
  },
  {
    "id": "lock",
    "name": "lock",
    "aliases": [],
    "arguments": "[[all]]",
    "description": "Lock current channel or all channels",
    "category": "moderation",
    "usage": ",lock [[all]]"
  },
  {
    "id": "lock-all",
    "name": "lock all",
    "aliases": [],
    "arguments": "[]",
    "description": "Lock all channels in server from @everyone",
    "category": "moderation",
    "usage": ",lock all []"
  },
  {
    "id": "unlock",
    "name": "unlock",
    "aliases": [],
    "arguments": "[[#channel]]",
    "description": "Unlock specified channel (or current)",
    "category": "moderation",
    "usage": ",unlock [[#channel]]"
  },
  {
    "id": "jail",
    "name": "jail",
    "aliases": [],
    "arguments": "[@member [duration] [reason]]",
    "description": "Jail a member with optional duration",
    "category": "moderation",
    "usage": ",jail [@member [duration] [reason]]"
  },
  {
    "id": "unjail",
    "name": "unjail",
    "aliases": [],
    "arguments": "[@member]",
    "description": "Remove jailed role from a member",
    "category": "moderation",
    "usage": ",unjail [@member]"
  },
  {
    "id": "imute",
    "name": "imute",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Mute a member from sending images/attachments",
    "category": "moderation",
    "usage": ",imute [@member [reason]]"
  },
  {
    "id": "iunmute",
    "name": "iunmute",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Unmute a member from image/attachment restrictions",
    "category": "moderation",
    "usage": ",iunmute [@member [reason]]"
  },
  {
    "id": "rmute",
    "name": "rmute",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Mute a member from adding reactions",
    "category": "moderation",
    "usage": ",rmute [@member [reason]]"
  },
  {
    "id": "runmute",
    "name": "runmute",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Unmute a member from reaction restrictions",
    "category": "moderation",
    "usage": ",runmute [@member [reason]]"
  },
  {
    "id": "hide",
    "name": "hide",
    "aliases": [],
    "arguments": "[[all]]",
    "description": "Hide channel(s) from @everyone",
    "category": "moderation",
    "usage": ",hide [[all]]"
  },
  {
    "id": "unhide",
    "name": "unhide",
    "aliases": [],
    "arguments": "[]",
    "description": "Unhide current channel from @everyone",
    "category": "moderation",
    "usage": ",unhide []"
  },
  {
    "id": "pin",
    "name": "pin",
    "aliases": [],
    "arguments": "[<message_id/link> | (reply)]",
    "description": "Pin a message by ID, link, or reply",
    "category": "moderation",
    "usage": ",pin [<message_id/link> | (reply)]"
  },
  {
    "id": "unpin",
    "name": "unpin",
    "aliases": [],
    "arguments": "[<message_id/link> | (reply)]",
    "description": "Unpin a message by ID, link, or reply",
    "category": "moderation",
    "usage": ",unpin [<message_id/link> | (reply)]"
  },
  {
    "id": "slowmode",
    "name": "slowmode",
    "aliases": [],
    "arguments": "[<duration|off> (e.g., 5s, 2m, 1h)]",
    "description": "Set slowmode for current channel",
    "category": "moderation",
    "usage": ",slowmode [<duration|off> (e.g., 5s, 2m, 1h)]"
  },
  {
    "id": "talk",
    "name": "talk",
    "aliases": [],
    "arguments": "[<role>]",
    "description": "Give a role permission to send messages in current channel",
    "category": "moderation",
    "usage": ",talk [<role>]"
  },
  {
    "id": "untalk",
    "name": "untalk",
    "aliases": [],
    "arguments": "[<role>]",
    "description": "Remove a role's permission to send messages in current channel",
    "category": "moderation",
    "usage": ",untalk [<role>]"
  },
  {
    "id": "setup",
    "name": "setup",
    "aliases": [],
    "arguments": "[<mute>]",
    "description": "Setup server systems (mute/jail)",
    "category": "moderation",
    "usage": ",setup [<mute>]"
  },
  {
    "id": "setupmute",
    "name": "setupmute",
    "aliases": [],
    "arguments": "[]",
    "description": "Set up mute role system (hidden alias)",
    "category": "moderation",
    "usage": ",setupmute []"
  },
  {
    "id": "sync",
    "name": "sync",
    "aliases": [],
    "arguments": "[mute|jail]",
    "description": "Synchronize mute or jail role permissions across all channels",
    "category": "moderation",
    "usage": ",sync [mute|jail]"
  },
  {
    "id": "setme",
    "name": "setme",
    "aliases": [],
    "arguments": "[]",
    "description": "Set up jail system (hidden command)",
    "category": "moderation",
    "usage": ",setme []"
  },
  {
    "id": "mh",
    "name": "mh",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "View moderation history for a user",
    "category": "moderation",
    "usage": ",mh [[@user]]"
  },
  {
    "id": "nick",
    "name": "nick",
    "aliases": [],
    "arguments": "[@user <nickname>]",
    "description": "Change a user's nickname",
    "category": "moderation",
    "usage": ",nick [@user <nickname>]"
  },
  {
    "id": "fn",
    "name": "fn",
    "aliases": [],
    "arguments": "[@user <nickname>]",
    "description": "Force a user's nickname (prevents changes)",
    "category": "moderation",
    "usage": ",fn [@user <nickname>]"
  },
  {
    "id": "levels",
    "name": "levels",
    "aliases": [],
    "arguments": "[<subcommand> [args]]",
    "description": "Levels/XP system commands",
    "category": "levels",
    "usage": ",levels [<subcommand> [args]]"
  },
  {
    "id": "levels-add",
    "name": "levels add",
    "aliases": [],
    "arguments": "[@role <level>]",
    "description": "Add a role reward for a specific level",
    "category": "levels",
    "usage": ",levels add [@role <level>]"
  },
  {
    "id": "levels-ignore",
    "name": "levels ignore",
    "aliases": [],
    "arguments": "[#channel/@role]",
    "description": "Toggle ignore status for a channel or role",
    "category": "levels",
    "usage": ",levels ignore [#channel/@role]"
  },
  {
    "id": "levels-leaderboard",
    "name": "levels leaderboard",
    "aliases": [],
    "arguments": "[]",
    "description": "Show top 10 users by XP",
    "category": "levels",
    "usage": ",levels leaderboard []"
  },
  {
    "id": "levels-list",
    "name": "levels list",
    "aliases": [],
    "arguments": "[]",
    "description": "Show all ignored channels and roles",
    "category": "levels",
    "usage": ",levels list []"
  },
  {
    "id": "levels-lock",
    "name": "levels lock",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable XP tracking in this server",
    "category": "levels",
    "usage": ",levels lock []"
  },
  {
    "id": "levels-message",
    "name": "levels message",
    "aliases": [],
    "arguments": "[<template>]",
    "description": "Set custom level-up message template",
    "category": "levels",
    "usage": ",levels message [<template>]"
  },
  {
    "id": "levels-messagemode",
    "name": "levels messagemode",
    "aliases": [],
    "arguments": "[<pm/context/#channel/none>]",
    "description": "Set where level-up messages are sent",
    "category": "levels",
    "usage": ",levels messagemode [<pm/context/#channel/none>]"
  },
  {
    "id": "levels-rank",
    "name": "levels rank",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Show user's rank and level progress",
    "category": "levels",
    "usage": ",levels rank [[@user]]"
  },
  {
    "id": "levels-remove",
    "name": "levels remove",
    "aliases": [],
    "arguments": "[<level>]",
    "description": "Remove a role reward for a specific level",
    "category": "levels",
    "usage": ",levels remove [<level>]"
  },
  {
    "id": "levels-roles",
    "name": "levels roles",
    "aliases": [],
    "arguments": "[]",
    "description": "Show level rewards with your progress",
    "category": "levels",
    "usage": ",levels roles []"
  },
  {
    "id": "levels-setlevel",
    "name": "levels setlevel",
    "aliases": [],
    "arguments": "[@user <level>]",
    "description": "Set a user's level",
    "category": "levels",
    "usage": ",levels setlevel [@user <level>]"
  },
  {
    "id": "levels-setrate",
    "name": "levels setrate",
    "aliases": [],
    "arguments": "[<multiplier>]",
    "description": "Set XP multiplier rate",
    "category": "levels",
    "usage": ",levels setrate [<multiplier>]"
  },
  {
    "id": "levels-setxp",
    "name": "levels setxp",
    "aliases": [],
    "arguments": "[@user <xp>]",
    "description": "Set a user's XP",
    "category": "levels",
    "usage": ",levels setxp [@user <xp>]"
  },
  {
    "id": "levels-stackroles",
    "name": "levels stackroles",
    "aliases": [],
    "arguments": "[<on|off>]",
    "description": "Toggle role stacking (on/off)",
    "category": "levels",
    "usage": ",levels stackroles [<on|off>]"
  },
  {
    "id": "levels-sync",
    "name": "levels sync",
    "aliases": [],
    "arguments": "[]",
    "description": "Award roles to all users based on their current XP",
    "category": "levels",
    "usage": ",levels sync []"
  },
  {
    "id": "levels-unlock",
    "name": "levels unlock",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable XP tracking in this server",
    "category": "levels",
    "usage": ",levels unlock []"
  },
  {
    "id": "streak",
    "name": "streak",
    "aliases": [],
    "arguments": "[<admin/on/off/dm/check> [args]]",
    "description": "Streak system management",
    "category": "levels",
    "usage": ",streak [<admin/on/off/dm/check> [args]]"
  },
  {
    "id": "streak-admin",
    "name": "streak admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Open streak system admin panel",
    "category": "levels",
    "usage": ",streak admin []"
  },
  {
    "id": "streak-check",
    "name": "streak check",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Check streak progress",
    "category": "levels",
    "usage": ",streak check [[@user]]"
  },
  {
    "id": "streak-dm",
    "name": "streak dm",
    "aliases": [],
    "arguments": "[]",
    "description": "Toggle DM notifications for streak updates",
    "category": "levels",
    "usage": ",streak dm []"
  },
  {
    "id": "streak-off",
    "name": "streak off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable streak system",
    "category": "levels",
    "usage": ",streak off []"
  },
  {
    "id": "streak-on",
    "name": "streak on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable streak system",
    "category": "levels",
    "usage": ",streak on []"
  },
  {
    "id": "pledge",
    "name": "pledge",
    "aliases": [],
    "arguments": "[<admin/status/leave/help>]",
    "description": "Pledge system management",
    "category": "levels",
    "usage": ",pledge [<admin/status/leave/help>]"
  },
  {
    "id": "pledge-admin",
    "name": "pledge admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Open pledge system admin panel",
    "category": "levels",
    "usage": ",pledge admin []"
  },
  {
    "id": "pledge-help",
    "name": "pledge help",
    "aliases": [],
    "arguments": "[]",
    "description": "Show pledge system help",
    "category": "levels",
    "usage": ",pledge help []"
  },
  {
    "id": "pledge-leave",
    "name": "pledge leave",
    "aliases": [],
    "arguments": "[]",
    "description": "Leave your current pledge",
    "category": "levels",
    "usage": ",pledge leave []"
  },
  {
    "id": "pledge-status",
    "name": "pledge status",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Check pledge progress",
    "category": "levels",
    "usage": ",pledge status [[@user]]"
  },
  {
    "id": "fg",
    "name": "fg",
    "aliases": [],
    "arguments": "[<admin/create/delete/assign/unassign> [args]]",
    "description": "Friend Group system management",
    "category": "levels",
    "usage": ",fg [<admin/create/delete/assign/unassign> [args]]"
  },
  {
    "id": "fg-admin",
    "name": "fg admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Show Friend Group admin panel",
    "category": "levels",
    "usage": ",fg admin []"
  },
  {
    "id": "fg-challenge",
    "name": "fg challenge",
    "aliases": [],
    "arguments": "[]",
    "description": "View or manage FG challenges",
    "category": "levels",
    "usage": ",fg challenge []"
  },
  {
    "id": "fg-daily",
    "name": "fg daily",
    "aliases": [],
    "arguments": "[]",
    "description": "Show daily message leaderboard",
    "category": "levels",
    "usage": ",fg daily []"
  },
  {
    "id": "fg-mvp",
    "name": "fg mvp",
    "aliases": [],
    "arguments": "[]",
    "description": "Show MVP of a Friend Group",
    "category": "levels",
    "usage": ",fg mvp []"
  },
  {
    "id": "fg-rank",
    "name": "fg rank",
    "aliases": [],
    "arguments": "[]",
    "description": "Check your rank in your Friend Groups",
    "category": "levels",
    "usage": ",fg rank []"
  },
  {
    "id": "fg-top",
    "name": "fg top",
    "aliases": [],
    "arguments": "[]",
    "description": "Show top members in a Friend Group",
    "category": "levels",
    "usage": ",fg top []"
  },
  {
    "id": "gw",
    "name": "gw",
    "aliases": [],
    "arguments": "[<start/end/edit/reroll> [args]]",
    "description": "Giveaway system - create and manage giveaways",
    "category": "giveaway",
    "usage": ",gw [<start/end/edit/reroll> [args]]"
  },
  {
    "id": "gw-edit",
    "name": "gw edit",
    "aliases": [],
    "arguments": "[{message_link} <host/duration/prize> {value}]",
    "description": "Edit giveaway host, duration, or prize",
    "category": "giveaway",
    "usage": ",gw edit [{message_link} <host/duration/prize> {value}]"
  },
  {
    "id": "gw-end",
    "name": "gw end",
    "aliases": [],
    "arguments": "[{message_link}]",
    "description": "Manually end an active giveaway",
    "category": "giveaway",
    "usage": ",gw end [{message_link}]"
  },
  {
    "id": "gw-history",
    "name": "gw history",
    "aliases": [],
    "arguments": "[]",
    "description": "Show giveaway history from the last 6 hours",
    "category": "giveaway",
    "usage": ",gw history []"
  },
  {
    "id": "gw-reroll",
    "name": "gw reroll",
    "aliases": [],
    "arguments": "[[message_link]]",
    "description": "Reroll winners for an ended giveaway",
    "category": "giveaway",
    "usage": ",gw reroll [[message_link]]"
  },
  {
    "id": "gw-start",
    "name": "gw start",
    "aliases": [],
    "arguments": "[{duration} [#channel] {winners} {prize} [--invc_start/--invc_end/--invc_full/--inchat/--rep/--streak N/--has_role ID/--top_voice N/--top_msg N/--pledge]]",
    "description": "Start a new giveaway with optional requirements",
    "category": "giveaway",
    "usage": ",gw start [{duration} [#channel] {winners} {prize} [--invc_start/--invc_end/--invc_full/--inchat/--rep/--streak N/--has_role ID/--top_voice N/--top_msg N/--pledge]]"
  },
  {
    "id": "welc",
    "name": "welc",
    "aliases": [],
    "arguments": "[<channel/edit/preview>]",
    "description": "Welcoming system management",
    "category": "welcoming",
    "usage": ",welc [<channel/edit/preview>]"
  },
  {
    "id": "welc-channel",
    "name": "welc channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set the welcome channel for new member messages",
    "category": "welcoming",
    "usage": ",welc channel [#channel]"
  },
  {
    "id": "welc-edit",
    "name": "welc edit",
    "aliases": [],
    "arguments": "[<message>]",
    "description": "Edit the welcome message template",
    "category": "welcoming",
    "usage": ",welc edit [<message>]"
  },
  {
    "id": "welc-preview",
    "name": "welc preview",
    "aliases": [],
    "arguments": "[]",
    "description": "Send a preview welcome message to the welcome channel",
    "category": "welcoming",
    "usage": ",welc preview []"
  },
  {
    "id": "doj",
    "name": "doj",
    "aliases": [],
    "arguments": "[<preview/set/on/off>]",
    "description": "DM On Join system - Send DMs to new members",
    "category": "welcoming",
    "usage": ",doj [<preview/set/on/off>]"
  },
  {
    "id": "doj-off",
    "name": "doj off",
    "aliases": [],
    "arguments": "[Turn off automated DMs for new members]",
    "description": "Disable the DOJ system",
    "category": "welcoming",
    "usage": ",doj off [Turn off automated DMs for new members]"
  },
  {
    "id": "doj-on",
    "name": "doj on",
    "aliases": [],
    "arguments": "[Turn on automated DMs for new members]",
    "description": "Enable the DOJ system",
    "category": "welcoming",
    "usage": ",doj on [Turn on automated DMs for new members]"
  },
  {
    "id": "doj-preview",
    "name": "doj preview",
    "aliases": [],
    "arguments": "[Sends the configured DOJ message to you as a test]",
    "description": "Send a test DM with the DOJ message",
    "category": "welcoming",
    "usage": ",doj preview [Sends the configured DOJ message to you as a test]"
  },
  {
    "id": "doj-set",
    "name": "doj set",
    "aliases": [],
    "arguments": "[Reply with the message to send to new members (max 2000 characters)]",
    "description": "Set the DOJ message interactively",
    "category": "welcoming",
    "usage": ",doj set [Reply with the message to send to new members (max 2000 characters)]"
  },
  {
    "id": "poj",
    "name": "poj",
    "aliases": [],
    "arguments": "[]",
    "description": "Ping On Join admin panel for ghost pinging new members",
    "category": "welcoming",
    "usage": ",poj []"
  },
  {
    "id": "afk",
    "name": "afk",
    "aliases": [],
    "arguments": "[[message]]",
    "description": "Set your AFK status with an optional message",
    "category": "utility",
    "usage": ",afk [[message]]"
  },
  {
    "id": "log",
    "name": "log",
    "aliases": [],
    "arguments": "[<add/remove/ignore>]",
    "description": "Manage server logging system",
    "category": "utility",
    "usage": ",log [<add/remove/ignore>]"
  },
  {
    "id": "log-add",
    "name": "log add",
    "aliases": [],
    "arguments": "[<channel> <message/voice/members>]",
    "description": "Add a log channel for a specific type",
    "category": "utility",
    "usage": ",log add [<channel> <message/voice/members>]"
  },
  {
    "id": "log-ignore",
    "name": "log ignore",
    "aliases": [],
    "arguments": "[<add/remove> <target>]",
    "description": "Manage logging ignore list",
    "category": "utility",
    "usage": ",log ignore [<add/remove> <target>]"
  },
  {
    "id": "log-ignore-add",
    "name": "log ignore add",
    "aliases": [],
    "arguments": "[<#channel/@user/@role>]",
    "description": "Add channel/user/role to logging ignore list",
    "category": "utility",
    "usage": ",log ignore add [<#channel/@user/@role>]"
  },
  {
    "id": "log-ignore-remove",
    "name": "log ignore remove",
    "aliases": [],
    "arguments": "[<#channel/@user/@role>]",
    "description": "Remove channel/user/role from logging ignore list",
    "category": "utility",
    "usage": ",log ignore remove [<#channel/@user/@role>]"
  },
  {
    "id": "log-remove",
    "name": "log remove",
    "aliases": [],
    "arguments": "[<channel> <message/voice/members>]",
    "description": "Remove a log channel for a specific type",
    "category": "utility",
    "usage": ",log remove [<channel> <message/voice/members>]"
  },
  {
    "id": "backup",
    "name": "backup",
    "aliases": [],
    "arguments": "[create | load]",
    "description": "Advanced server backup and restoration system - only server owner/bot owner",
    "category": "utility",
    "usage": ",backup [create | load]"
  },
  {
    "id": "backup-create",
    "name": "backup create",
    "aliases": [],
    "arguments": "[]",
    "description": "Create a complete backup of the current server",
    "category": "utility",
    "usage": ",backup create []"
  },
  {
    "id": "backup-load",
    "name": "backup load",
    "aliases": [],
    "arguments": "[]",
    "description": "Load your backup into the current server",
    "category": "utility",
    "usage": ",backup load []"
  },
  {
    "id": "tz",
    "name": "tz",
    "aliases": [],
    "arguments": "[[set <location>] [@user]]",
    "description": "View or set timezone",
    "category": "utility",
    "usage": ",tz [[set <location>] [@user]]"
  },
  {
    "id": "setpfp",
    "name": "setpfp",
    "aliases": [],
    "arguments": "[[image URL or attach image]]",
    "description": "Set server media (icon/banner/splash)",
    "category": "utility",
    "usage": ",setpfp [[image URL or attach image]]"
  },
  {
    "id": "setbanner",
    "name": "setbanner",
    "aliases": [],
    "arguments": "[[image URL or attach image]]",
    "description": "Set server banner",
    "category": "utility",
    "usage": ",setbanner [[image URL or attach image]]"
  },
  {
    "id": "setsplash",
    "name": "setsplash",
    "aliases": [],
    "arguments": "[[image URL or attach image]]",
    "description": "Set server splash image",
    "category": "utility",
    "usage": ",setsplash [[image URL or attach image]]"
  },
  {
    "id": "lb",
    "name": "lb",
    "aliases": [],
    "arguments": "[<global/fg> [#channel]]",
    "description": "Leaderboard system management",
    "category": "utility",
    "usage": ",lb [<global/fg> [#channel]]"
  },
  {
    "id": "lb-fg",
    "name": "lb fg",
    "aliases": [],
    "arguments": "[[#channel]]",
    "description": "Set Friend Group leaderboard channel",
    "category": "utility",
    "usage": ",lb fg [[#channel]]"
  },
  {
    "id": "lb-global",
    "name": "lb global",
    "aliases": [],
    "arguments": "[[#channel]]",
    "description": "Set activity leaderboard channel (voice/messages)",
    "category": "utility",
    "usage": ",lb global [[#channel]]"
  },
  {
    "id": "lb-reset",
    "name": "lb reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset activity leaderboard data to 0",
    "category": "utility",
    "usage": ",lb reset []"
  },
  {
    "id": "timer",
    "name": "timer",
    "aliases": [],
    "arguments": "[<add/remove/list/view>]",
    "description": "Manage automated message timers",
    "category": "utility",
    "usage": ",timer [<add/remove/list/view>]"
  },
  {
    "id": "timer-add",
    "name": "timer add",
    "aliases": [],
    "arguments": "[<#channel> <interval> <message...>]",
    "description": "Add an automated message timer",
    "category": "utility",
    "usage": ",timer add [<#channel> <interval> <message...>]"
  },
  {
    "id": "timer-list",
    "name": "timer list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all automated timers",
    "category": "utility",
    "usage": ",timer list []"
  },
  {
    "id": "timer-remove",
    "name": "timer remove",
    "aliases": [],
    "arguments": "[<#channel>]",
    "description": "Remove an automated timer",
    "category": "utility",
    "usage": ",timer remove [<#channel>]"
  },
  {
    "id": "timer-view",
    "name": "timer view",
    "aliases": [],
    "arguments": "[<#channel>]",
    "description": "View details of a specific timer",
    "category": "utility",
    "usage": ",timer view [<#channel>]"
  },
  {
    "id": "autoresponder",
    "name": "autoresponder",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage autoresponder triggers that send custom messages",
    "category": "autoresponder",
    "usage": ",autoresponder []"
  },
  {
    "id": "autoresponder-add",
    "name": "autoresponder add",
    "aliases": [],
    "arguments": "[<trigger>, <response>]",
    "description": "Add a new autoresponder trigger",
    "category": "autoresponder",
    "usage": ",autoresponder add [<trigger>, <response>]"
  },
  {
    "id": "autoresponder-list",
    "name": "autoresponder list",
    "aliases": [],
    "arguments": "[]",
    "description": "View all autoresponder triggers",
    "category": "autoresponder",
    "usage": ",autoresponder list []"
  },
  {
    "id": "autoresponder-remove",
    "name": "autoresponder remove",
    "aliases": [],
    "arguments": "[<trigger>]",
    "description": "Remove an autoresponder trigger",
    "category": "autoresponder",
    "usage": ",autoresponder remove [<trigger>]"
  },
  {
    "id": "autoresponder-reset",
    "name": "autoresponder reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove all autoresponder triggers",
    "category": "autoresponder",
    "usage": ",autoresponder reset []"
  },
  {
    "id": "autoresponder-update",
    "name": "autoresponder update",
    "aliases": [],
    "arguments": "[<trigger>, <new response>]",
    "description": "Update an existing autoresponder trigger",
    "category": "autoresponder",
    "usage": ",autoresponder update [<trigger>, <new response>]"
  },
  {
    "id": "reaction",
    "name": "reaction",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage auto-reaction triggers for messages",
    "category": "autoresponder",
    "usage": ",reaction []"
  },
  {
    "id": "reaction-add",
    "name": "reaction add",
    "aliases": [],
    "arguments": "[<emoji> <trigger>]",
    "description": "Add an emoji reaction to a trigger word",
    "category": "autoresponder",
    "usage": ",reaction add [<emoji> <trigger>]"
  },
  {
    "id": "reaction-list",
    "name": "reaction list",
    "aliases": [],
    "arguments": "[]",
    "description": "View all reaction triggers",
    "category": "autoresponder",
    "usage": ",reaction list []"
  },
  {
    "id": "reaction-owner",
    "name": "reaction owner",
    "aliases": [],
    "arguments": "[<trigger>]",
    "description": "View who added a reaction trigger",
    "category": "autoresponder",
    "usage": ",reaction owner [<trigger>]"
  },
  {
    "id": "reaction-remove",
    "name": "reaction remove",
    "aliases": [],
    "arguments": "[<emoji> <trigger>]",
    "description": "Remove a specific emoji from a trigger",
    "category": "autoresponder",
    "usage": ",reaction remove [<emoji> <trigger>]"
  },
  {
    "id": "reaction-removeall",
    "name": "reaction removeall",
    "aliases": [],
    "arguments": "[<trigger>]",
    "description": "Remove all emoji reactions from a trigger",
    "category": "autoresponder",
    "usage": ",reaction removeall [<trigger>]"
  },
  {
    "id": "reaction-reset",
    "name": "reaction reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove all reaction triggers",
    "category": "autoresponder",
    "usage": ",reaction reset []"
  },
  {
    "id": "boosterrole",
    "name": "boosterrole",
    "aliases": [],
    "arguments": "[<create/color/icon/delete> [args]]",
    "description": "Booster role system - create and customize booster roles",
    "category": "booster",
    "usage": ",boosterrole [<create/color/icon/delete> [args]]"
  },
  {
    "id": "boosterrole-award",
    "name": "boosterrole award",
    "aliases": [],
    "arguments": "[]",
    "description": "Set auto-assign role for all boosters",
    "category": "booster",
    "usage": ",boosterrole award []"
  },
  {
    "id": "boosterrole-award-remove",
    "name": "boosterrole award remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove award role",
    "category": "booster",
    "usage": ",boosterrole award remove []"
  },
  {
    "id": "boosterrole-award-view",
    "name": "boosterrole award view",
    "aliases": [],
    "arguments": "[]",
    "description": "View current award role",
    "category": "booster",
    "usage": ",boosterrole award view []"
  },
  {
    "id": "boosterrole-base",
    "name": "boosterrole base",
    "aliases": [],
    "arguments": "[]",
    "description": "Set base role position for booster roles",
    "category": "booster",
    "usage": ",boosterrole base []"
  },
  {
    "id": "boosterrole-cleanup",
    "name": "boosterrole cleanup",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove orphaned booster roles",
    "category": "booster",
    "usage": ",boosterrole cleanup []"
  },
  {
    "id": "boosterrole-color",
    "name": "boosterrole color",
    "aliases": [],
    "arguments": "[]",
    "description": "Change your booster role color",
    "category": "booster",
    "usage": ",boosterrole color []"
  },
  {
    "id": "boosterrole-icon",
    "name": "boosterrole icon",
    "aliases": [],
    "arguments": "[]",
    "description": "Set your booster role icon",
    "category": "booster",
    "usage": ",boosterrole icon []"
  },
  {
    "id": "boosterrole-list",
    "name": "boosterrole list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all booster roles in the server",
    "category": "booster",
    "usage": ",boosterrole list []"
  },
  {
    "id": "boosterrole-remove",
    "name": "boosterrole remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Delete your booster role",
    "category": "booster",
    "usage": ",boosterrole remove []"
  },
  {
    "id": "boosterrole-rename",
    "name": "boosterrole rename",
    "aliases": [],
    "arguments": "[]",
    "description": "Rename your booster role",
    "category": "booster",
    "usage": ",boosterrole rename []"
  },
  {
    "id": "boosterrole-share",
    "name": "boosterrole share",
    "aliases": [],
    "arguments": "[]",
    "description": "Share your role with another user",
    "category": "booster",
    "usage": ",boosterrole share []"
  },
  {
    "id": "boosterrole-unshare",
    "name": "boosterrole unshare",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove your role from a user",
    "category": "booster",
    "usage": ",boosterrole unshare []"
  },
  {
    "id": "ticket",
    "name": "ticket",
    "aliases": [],
    "arguments": "[]",
    "description": "Ticket system management",
    "category": "ticket",
    "usage": ",ticket []"
  },
  {
    "id": "ticket-add",
    "name": "ticket add",
    "aliases": [],
    "arguments": "[@user/role]",
    "description": "Add a user or role to the ticket",
    "category": "ticket",
    "usage": ",ticket add [@user/role]"
  },
  {
    "id": "ticket-button",
    "name": "ticket button",
    "aliases": [],
    "arguments": "[(text) --message | (emoji) --icon]",
    "description": "Customize the ticket panel button",
    "category": "ticket",
    "usage": ",ticket button [(text) --message | (emoji) --icon]"
  },
  {
    "id": "ticket-channel",
    "name": "ticket channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set the channel for the ticket panel",
    "category": "ticket",
    "usage": ",ticket channel [#channel]"
  },
  {
    "id": "ticket-close",
    "name": "ticket close",
    "aliases": [],
    "arguments": "[--delete yes/no]",
    "description": "Close the current ticket",
    "category": "ticket",
    "usage": ",ticket close [--delete yes/no]"
  },
  {
    "id": "ticket-log",
    "name": "ticket log",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set the transcript log channel",
    "category": "ticket",
    "usage": ",ticket log [#channel]"
  },
  {
    "id": "ticket-open",
    "name": "ticket open",
    "aliases": [],
    "arguments": "[]",
    "description": "Reopen a closed ticket",
    "category": "ticket",
    "usage": ",ticket open []"
  },
  {
    "id": "ticket-refresh",
    "name": "ticket refresh",
    "aliases": [],
    "arguments": "[]",
    "description": "Refresh the ticket panel",
    "category": "ticket",
    "usage": ",ticket refresh []"
  },
  {
    "id": "ticket-remove",
    "name": "ticket remove",
    "aliases": [],
    "arguments": "[@user/role]",
    "description": "Remove a user or role from the ticket",
    "category": "ticket",
    "usage": ",ticket remove [@user/role]"
  },
  {
    "id": "ticket-rename",
    "name": "ticket rename",
    "aliases": [],
    "arguments": "[(name)]",
    "description": "Rename the ticket channel",
    "category": "ticket",
    "usage": ",ticket rename [(name)]"
  },
  {
    "id": "ticket-reset",
    "name": "ticket reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset all ticket settings",
    "category": "ticket",
    "usage": ",ticket reset []"
  },
  {
    "id": "ticket-setup",
    "name": "ticket setup",
    "aliases": [],
    "arguments": "[]",
    "description": "Interactive ticket system setup",
    "category": "ticket",
    "usage": ",ticket setup []"
  },
  {
    "id": "ticket-support",
    "name": "ticket support",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage support roles for ticket system",
    "category": "ticket",
    "usage": ",ticket support []"
  },
  {
    "id": "ticket-support-add",
    "name": "ticket support add",
    "aliases": [],
    "arguments": "[<role_id>]",
    "description": "Add a support role to ticket system",
    "category": "ticket",
    "usage": ",ticket support add [<role_id>]"
  },
  {
    "id": "ticket-support-list",
    "name": "ticket support list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all support roles",
    "category": "ticket",
    "usage": ",ticket support list []"
  },
  {
    "id": "ticket-support-remove",
    "name": "ticket support remove",
    "aliases": [],
    "arguments": "[<role_id>]",
    "description": "Remove a support role from ticket system",
    "category": "ticket",
    "usage": ",ticket support remove [<role_id>]"
  },
  {
    "id": "blacktea",
    "name": "blacktea",
    "aliases": [],
    "arguments": "[]",
    "description": "Start a word battle royale game",
    "category": "fun",
    "usage": ",blacktea []"
  },
  {
    "id": "search",
    "name": "search",
    "aliases": [],
    "arguments": "[<query>]",
    "description": "Search the web using Google (10s server cooldown)",
    "category": "fun",
    "usage": ",search [<query>]"
  },
  {
    "id": "image",
    "name": "image",
    "aliases": [],
    "arguments": "[<query>]",
    "description": "Search for images using Google (10s server cooldown)",
    "category": "fun",
    "usage": ",image [<query>]"
  },
  {
    "id": "media",
    "name": "media",
    "aliases": [],
    "arguments": "[<caption/quote> [args]]",
    "description": "Media manipulation commands",
    "category": "fun",
    "usage": ",media [<caption/quote> [args]]"
  },
  {
    "id": "media-caption",
    "name": "media caption",
    "aliases": [],
    "arguments": "[<caption> or <caption1>, <caption2>]",
    "description": "Add bold caption(s) to an image with high quality",
    "category": "fun",
    "usage": ",media caption [<caption> or <caption1>, <caption2>]"
  },
  {
    "id": "media-quote",
    "name": "media quote",
    "aliases": [],
    "arguments": "[]",
    "description": "Create a high-quality quote card from a replied message",
    "category": "fun",
    "usage": ",media quote []"
  },
  {
    "id": "quote",
    "name": "quote",
    "aliases": [],
    "arguments": "[]",
    "description": "Create a high-quality quote card from a replied message",
    "category": "fun",
    "usage": ",quote []"
  },
  {
    "id": "family",
    "name": "family",
    "aliases": [],
    "arguments": "[<subcommand>]",
    "description": "Family tree management system",
    "category": "fun",
    "usage": ",family [<subcommand>]"
  },
  {
    "id": "family-admin",
    "name": "family admin",
    "aliases": [],
    "arguments": "[family admin <wipe|reset>]",
    "description": "[ADMIN] Family admin commands",
    "category": "fun",
    "usage": ",family admin [family admin <wipe|reset>]"
  },
  {
    "id": "family-admin-reset",
    "name": "family admin reset",
    "aliases": [],
    "arguments": "[family admin reset <user>]",
    "description": "[ADMIN] Reset user's family data",
    "category": "fun",
    "usage": ",family admin reset [family admin reset <user>]"
  },
  {
    "id": "family-admin-wipe",
    "name": "family admin wipe",
    "aliases": [],
    "arguments": "[family admin wipe]",
    "description": "[ADMIN] Wipe all family data",
    "category": "fun",
    "usage": ",family admin wipe [family admin wipe]"
  },
  {
    "id": "family-adopt",
    "name": "family adopt",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Adopt another user as your child",
    "category": "fun",
    "usage": ",family adopt [@user]"
  },
  {
    "id": "family-cuck",
    "name": "family cuck",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Cheat on your partner with another user",
    "category": "fun",
    "usage": ",family cuck [@user]"
  },
  {
    "id": "family-disown",
    "name": "family disown",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Disown one of your children",
    "category": "fun",
    "usage": ",family disown [@user]"
  },
  {
    "id": "family-divorce",
    "name": "family divorce",
    "aliases": [],
    "arguments": "[]",
    "description": "Divorce your partner",
    "category": "fun",
    "usage": ",family divorce []"
  },
  {
    "id": "family-game",
    "name": "family game",
    "aliases": [],
    "arguments": "[<game>]",
    "description": "Play family games with your partner",
    "category": "fun",
    "usage": ",family game [<game>]"
  },
  {
    "id": "family-marry",
    "name": "family marry",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Propose marriage to another user",
    "category": "fun",
    "usage": ",family marry [@user]"
  },
  {
    "id": "family-parent",
    "name": "family parent",
    "aliases": [],
    "arguments": "[[user]]",
    "description": "Check your or another user's parent",
    "category": "fun",
    "usage": ",family parent [[user]]"
  },
  {
    "id": "family-partner",
    "name": "family partner",
    "aliases": [],
    "arguments": "[[user]]",
    "description": "Check your or another user's partner",
    "category": "fun",
    "usage": ",family partner [[user]]"
  },
  {
    "id": "family-relate",
    "name": "family relate",
    "aliases": [],
    "arguments": "[@user1 [user2]]",
    "description": "Check how two users are related",
    "category": "fun",
    "usage": ",family relate [@user1 [user2]]"
  },
  {
    "id": "family-runaway",
    "name": "family runaway",
    "aliases": [],
    "arguments": "[]",
    "description": "Run away from your parent",
    "category": "fun",
    "usage": ",family runaway []"
  },
  {
    "id": "family-ship",
    "name": "family ship",
    "aliases": [],
    "arguments": "[@user1 [user2]]",
    "description": "Check compatibility between two users",
    "category": "fun",
    "usage": ",family ship [@user1 [user2]]"
  },
  {
    "id": "family-test",
    "name": "family test",
    "aliases": [],
    "arguments": "[family test <married|full>]",
    "description": "Generate sample family trees for testing",
    "category": "fun",
    "usage": ",family test [family test <married|full>]"
  },
  {
    "id": "family-test-full",
    "name": "family test full",
    "aliases": [],
    "arguments": "[family test full]",
    "description": "Generate full sample family tree",
    "category": "fun",
    "usage": ",family test full [family test full]"
  },
  {
    "id": "family-test-married",
    "name": "family test married",
    "aliases": [],
    "arguments": "[family test married]",
    "description": "Generate sample married couple tree",
    "category": "fun",
    "usage": ",family test married [family test married]"
  },
  {
    "id": "family-tree",
    "name": "family tree",
    "aliases": [],
    "arguments": "[[user]]",
    "description": "Display family tree image",
    "category": "fun",
    "usage": ",family tree [[user]]"
  },
  {
    "id": "vc",
    "name": "vc",
    "aliases": [],
    "arguments": "[<setup/category/name/bypass/kick/ban/lock> [args]]",
    "description": "VoiceMaster system - temporary voice channels",
    "category": "voice",
    "usage": ",vc [<setup/category/name/bypass/kick/ban/lock> [args]]"
  },
  {
    "id": "vc-ban",
    "name": "vc ban",
    "aliases": [],
    "arguments": "[]",
    "description": "Ban user from your voice channel",
    "category": "voice",
    "usage": ",vc ban []"
  },
  {
    "id": "vc-bypass",
    "name": "vc bypass",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage roles that can bypass channel locks",
    "category": "voice",
    "usage": ",vc bypass []"
  },
  {
    "id": "vc-category",
    "name": "vc category",
    "aliases": [],
    "arguments": "[]",
    "description": "Change VoiceMaster category",
    "category": "voice",
    "usage": ",vc category []"
  },
  {
    "id": "vc-claim",
    "name": "vc claim",
    "aliases": [],
    "arguments": "[]",
    "description": "Claim ownership of empty channel",
    "category": "voice",
    "usage": ",vc claim []"
  },
  {
    "id": "vc-hide",
    "name": "vc hide",
    "aliases": [],
    "arguments": "[]",
    "description": "Hide your voice channel",
    "category": "voice",
    "usage": ",vc hide []"
  },
  {
    "id": "vc-intr",
    "name": "vc intr",
    "aliases": [],
    "arguments": "[]",
    "description": "Show VoiceMaster admin interface",
    "category": "voice",
    "usage": ",vc intr []"
  },
  {
    "id": "vc-kick",
    "name": "vc kick",
    "aliases": [],
    "arguments": "[]",
    "description": "Kick user from your voice channel",
    "category": "voice",
    "usage": ",vc kick []"
  },
  {
    "id": "vc-limit",
    "name": "vc limit",
    "aliases": [],
    "arguments": "[]",
    "description": "Set user limit for your channel",
    "category": "voice",
    "usage": ",vc limit []"
  },
  {
    "id": "vc-lock",
    "name": "vc lock",
    "aliases": [],
    "arguments": "[]",
    "description": "Lock your voice channel",
    "category": "voice",
    "usage": ",vc lock []"
  },
  {
    "id": "vc-name",
    "name": "vc name",
    "aliases": [],
    "arguments": "[]",
    "description": "Change default channel name format",
    "category": "voice",
    "usage": ",vc name []"
  },
  {
    "id": "vc-permit",
    "name": "vc permit",
    "aliases": [],
    "arguments": "[]",
    "description": "Allow user to join your locked channel",
    "category": "voice",
    "usage": ",vc permit []"
  },
  {
    "id": "vc-rename",
    "name": "vc rename",
    "aliases": [],
    "arguments": "[]",
    "description": "Rename your voice channel",
    "category": "voice",
    "usage": ",vc rename []"
  },
  {
    "id": "vc-setup",
    "name": "vc setup",
    "aliases": [],
    "arguments": "[]",
    "description": "Setup VoiceMaster system with interface channel",
    "category": "voice",
    "usage": ",vc setup []"
  },
  {
    "id": "vc-transfer",
    "name": "vc transfer",
    "aliases": [],
    "arguments": "[]",
    "description": "Transfer ownership to another user",
    "category": "voice",
    "usage": ",vc transfer []"
  },
  {
    "id": "vc-unban",
    "name": "vc unban",
    "aliases": [],
    "arguments": "[]",
    "description": "Unban user from your voice channel",
    "category": "voice",
    "usage": ",vc unban []"
  },
  {
    "id": "vc-unhide",
    "name": "vc unhide",
    "aliases": [],
    "arguments": "[]",
    "description": "Unhide your voice channel",
    "category": "voice",
    "usage": ",vc unhide []"
  },
  {
    "id": "vc-unlock",
    "name": "vc unlock",
    "aliases": [],
    "arguments": "[]",
    "description": "Unlock your voice channel",
    "category": "voice",
    "usage": ",vc unlock []"
  },
  {
    "id": "massmute",
    "name": "massmute",
    "aliases": [],
    "arguments": "[]",
    "description": "Mute everyone in your current VC except admins/mute_members holders",
    "category": "voice",
    "usage": ",massmute []"
  },
  {
    "id": "massdeafen",
    "name": "massdeafen",
    "aliases": [],
    "arguments": "[]",
    "description": "Deafen everyone in your current VC except admins/mute_members holders",
    "category": "voice",
    "usage": ",massdeafen []"
  },
  {
    "id": "d",
    "name": "d",
    "aliases": [],
    "arguments": "[<@user> <voice channel>]",
    "description": "Move a user from their current VC to a new VC",
    "category": "voice",
    "usage": ",d [<@user> <voice channel>]"
  },
  {
    "id": "s",
    "name": "s",
    "aliases": [],
    "arguments": "[[index]]",
    "description": "Display deleted messages from the current channel",
    "category": "snipe",
    "usage": ",s [[index]]"
  },
  {
    "id": "es",
    "name": "es",
    "aliases": [],
    "arguments": "[[index]]",
    "description": "Display edited messages from the current channel",
    "category": "snipe",
    "usage": ",es [[index]]"
  },
  {
    "id": "rs",
    "name": "rs",
    "aliases": [],
    "arguments": "[[index]]",
    "description": "Display removed reactions from the current channel",
    "category": "snipe",
    "usage": ",rs [[index]]"
  },
  {
    "id": "cs",
    "name": "cs",
    "aliases": [],
    "arguments": "[[channel|server]]",
    "description": "Clear snipe data for current channel or entire server",
    "category": "snipe",
    "usage": ",cs [[channel|server]]"
  }
];

export async function seed() {
  try {
    const existingCategories = new Set();
    
    for (const cmd of allCommands) {
      existingCategories.add(cmd.category);
      
      const existing = await storage.getCommand(cmd.name);
      if (!existing) {
        await storage.createCommand(cmd);
      }
    }

    console.log(`Seeded ${allCommands.length} commands`);
    console.log(`Categories: ${Array.from(existingCategories).sort().join(", ")}`);
  } catch (error) {
    console.error("Seeding failed:", error);
    throw error;
  }
}
