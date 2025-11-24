import { storage } from "./storage";

const allCommands = [
  // ========== SECURITY (24 commands) ==========
  {
    "name": "an",
    "aliases": [],
    "arguments": "[<module> <on/off> [flags]]",
    "description": "Antinuke configuration system",
    "category": "security",
    "usage": ",an [<module> <on/off> [flags]]"
  },
  {
    "name": "an admin",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Add a member to antinuke admins",
    "category": "security",
    "usage": ",an admin [@user]"
  },
  {
    "name": "an config",
    "aliases": [],
    "arguments": "[]",
    "description": "Show antinuke configuration",
    "category": "security",
    "usage": ",an config []"
  },
  {
    "name": "an list",
    "aliases": [],
    "arguments": "[]",
    "description": "Show antinuke admins and whitelist",
    "category": "security",
    "usage": ",an list []"
  },
  {
    "name": "an unadmin",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Remove a member from antinuke admins",
    "category": "security",
    "usage": ",an unadmin [@user]"
  },
  {
    "name": "an unwhitelist",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Remove a member, bot, or role from antinuke whitelist",
    "category": "security",
    "usage": ",an unwhitelist [@user/@role]"
  },
  {
    "name": "an whitelist",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Add a member, bot, or role to antinuke whitelist",
    "category": "security",
    "usage": ",an whitelist [@user/@role]"
  },
  {
    "name": "filter",
    "aliases": [],
    "arguments": "[<invites|spam> <on|off>]",
    "description": "Configure message filters for invite links and spam detection",
    "category": "security",
    "usage": ",filter [<invites|spam> <on|off>]"
  },
  {
    "name": "filter exempt",
    "aliases": [],
    "arguments": "[<add|remove> <@user|@role>]",
    "description": "Manage filter exemptions for users and roles",
    "category": "security",
    "usage": ",filter exempt [<add|remove> <@user|@role>]"
  },
  {
    "name": "filter exempt add",
    "aliases": [],
    "arguments": "[<@user|@role>]",
    "description": "Add a user or role to filter exemptions. Exempt users/roles will bypass all filters",
    "category": "security",
    "usage": ",filter exempt add [<@user|@role>]"
  },
  {
    "name": "filter exempt remove",
    "aliases": [],
    "arguments": "[<@user|@role>]",
    "description": "Remove a user or role from filter exemptions",
    "category": "security",
    "usage": ",filter exempt remove [<@user|@role>]"
  },
  {
    "name": "filter invites",
    "aliases": [],
    "arguments": "[<on|off>]",
    "description": "Enable or disable invite link filter. Deletes messages with Discord invites and times out offenders for 1 minute",
    "category": "security",
    "usage": ",filter invites [<on|off>]"
  },
  {
    "name": "filter spam",
    "aliases": [],
    "arguments": "[<on|off>]",
    "description": "Enable or disable spam filter. Detects spam using frequency (5+ msgs in 10s) and similarity (0.8+ match). Times out offenders for 1 minute and purges their last 50 messages",
    "category": "security",
    "usage": ",filter spam [<on|off>]"
  },
  {
    "name": "panick",
    "aliases": [],
    "arguments": "[<on/off> [reason]]",
    "description": "Emergency server lockdown mode",
    "category": "security",
    "usage": ",panick [<on/off> [reason]]"
  },
  {
    "name": "nuke",
    "aliases": [],
    "arguments": "[]",
    "description": "Nuke and recreate current channel",
    "category": "security",
    "usage": ",nuke []"
  },
  {
    "name": "nuke arm",
    "aliases": [],
    "arguments": "[<duration> [channel]]",
    "description": "Arm automatic nuke timer",
    "category": "security",
    "usage": ",nuke arm [<duration> [channel]]"
  },
  {
    "name": "nuke disarm",
    "aliases": [],
    "arguments": "[[channel]]",
    "description": "Disarm automatic nuke timer",
    "category": "security",
    "usage": ",nuke disarm [[channel]]"
  },
  {
    "name": "ec",
    "aliases": [],
    "arguments": "[<feature> <on/off>]",
    "description": "Event Control - manage server events and restrictions",
    "category": "security",
    "usage": ",ec [<feature> <on/off>]"
  },
  {
    "name": "timerlist",
    "aliases": [],
    "arguments": "[]",
    "description": "View all active nuke timers",
    "category": "security",
    "usage": ",timerlist []"
  },
  {
    "name": "fp",
    "aliases": [],
    "arguments": "[<grant/remove/list/reset> [args]]",
    "description": "Manage fake permissions for users and roles",
    "category": "security",
    "usage": ",fp [<grant/remove/list/reset> [args]]"
  },
  {
    "name": "fp grant",
    "aliases": [],
    "arguments": "[<user/role> <permission(s)>]",
    "description": "Grant fake permissions to user or role",
    "category": "security",
    "usage": ",fp grant [<user/role> <permission(s)>]"
  },
  {
    "name": "fp list",
    "aliases": [],
    "arguments": "[[user/role]]",
    "description": "List permissions for a specific target or all permissions in guild",
    "category": "security",
    "usage": ",fp list [[user/role]]"
  },
  {
    "name": "fp remove",
    "aliases": [],
    "arguments": "[<user/role> <permission(s)>]",
    "description": "Remove fake permissions from user or role",
    "category": "security",
    "usage": ",fp remove [<user/role> <permission(s)>]"
  },
  {
    "name": "fp reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset all fake permissions in the guild",
    "category": "security",
    "usage": ",fp reset []"
  },

  // ========== INFO (11 commands) ==========
  {
    "name": "ui",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Display detailed user information",
    "category": "info",
    "usage": ",ui [[@user]]"
  },
  {
    "name": "ri",
    "aliases": [],
    "arguments": "[<role>]",
    "description": "Display detailed role information",
    "category": "info",
    "usage": ",ri [<role>]"
  },
  {
    "name": "si",
    "aliases": [],
    "arguments": "[]",
    "description": "Display detailed server information",
    "category": "info",
    "usage": ",si []"
  },
  {
    "name": "ci",
    "aliases": [],
    "arguments": "[[#channel]]",
    "description": "Display detailed channel information",
    "category": "info",
    "usage": ",ci [[#channel]]"
  },
  {
    "name": "ii",
    "aliases": [],
    "arguments": "[<invite>]",
    "description": "Display detailed Discord invite information",
    "category": "info",
    "usage": ",ii [<invite>]"
  },
  {
    "name": "mc",
    "aliases": [],
    "arguments": "[]",
    "description": "Display server member count breakdown",
    "category": "info",
    "usage": ",mc []"
  },
  {
    "name": "credits",
    "aliases": [],
    "arguments": "[]",
    "description": "Display bot credits and contributors",
    "category": "info",
    "usage": ",credits []"
  },
  {
    "name": "roles",
    "aliases": [],
    "arguments": "[]",
    "description": "Display all server roles in order",
    "category": "info",
    "usage": ",roles []"
  },
  {
    "name": "define",
    "aliases": [],
    "arguments": "[<word>]",
    "description": "Get the dictionary definition of a word",
    "category": "info",
    "usage": ",define [<word>]"
  },
  {
    "name": "ud",
    "aliases": [],
    "arguments": "[<word>]",
    "description": "Get Urban Dictionary definition of a word/phrase",
    "category": "info",
    "usage": ",ud [<word>]"
  },
  {
    "name": "perms",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Display fake and native permissions for a user",
    "category": "info",
    "usage": ",perms [[@user]]"
  },
  // ========== MODERATION (35 commands) ==========
  {
    "name": "kick",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Kick a member from the server",
    "category": "moderation",
    "usage": ",kick [@member [reason]]"
  },
  {
    "name": "ban",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Permanently ban a member from the server",
    "category": "moderation",
    "usage": ",ban [@member [reason]]"
  },
  {
    "name": "unban",
    "aliases": [],
    "arguments": "[<user_id> [reason]]",
    "description": "Unban a user by their ID",
    "category": "moderation",
    "usage": ",unban [<user_id> [reason]]"
  },
  {
    "name": "unbanall",
    "aliases": [],
    "arguments": "[]",
    "description": "Mass unban all banned members except hardbanned users",
    "category": "moderation",
    "usage": ",unbanall []"
  },
  {
    "name": "timeout",
    "aliases": [],
    "arguments": "[@member [duration] [reason]]",
    "description": "Timeout a member (default: 5 minutes)",
    "category": "moderation",
    "usage": ",timeout [@member [duration] [reason]]"
  },
  {
    "name": "untimeout",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Remove timeout from a member",
    "category": "moderation",
    "usage": ",untimeout [@member [reason]]"
  },
  {
    "name": "softban",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Softban a member (ban + delete messages + instant unban)",
    "category": "moderation",
    "usage": ",softban [@member [reason]]"
  },
  {
    "name": "hackban",
    "aliases": [],
    "arguments": "[<user_id> [reason]]",
    "description": "Ban a user before they join (preemptive ban). Cannot be unbanned except by antinuke admins",
    "category": "moderation",
    "usage": ",hackban [<user_id> [reason]]"
  },
  {
    "name": "purge",
    "aliases": [],
    "arguments": "[<amount> | bots/humans/@user/reactions/contains/mentions/links [amount]]",
    "description": "Purge messages with various filters",
    "category": "moderation",
    "usage": ",purge [<amount> | bots/humans/@user/reactions/contains/mentions/links [amount]]"
  },
  {
    "name": "bc",
    "aliases": [],
    "arguments": "[[amount]]",
    "description": "Clean bot messages (legacy alias for purge bots)",
    "category": "moderation",
    "usage": ",bc [[amount]]"
  },
  {
    "name": "raid",
    "aliases": [],
    "arguments": "[<duration> <action> | <on|off>]",
    "description": "RAID protection with two modes",
    "category": "moderation",
    "usage": ",raid [<duration> <action> | <on|off>]"
  },
  {
    "name": "r",
    "aliases": [],
    "arguments": "[<subcommand> [args] (see ,r for full usage)]",
    "description": "Role management (toggle/restore/rename/delete/create/dump/etc)",
    "category": "moderation",
    "usage": ",r [<subcommand> [args] (see ,r for full usage)]"
  },
  {
    "name": "ir",
    "aliases": [],
    "arguments": "[<role>]",
    "description": "List all members with a specific role",
    "category": "moderation",
    "usage": ",ir [<role>]"
  },
  {
    "name": "strip",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Remove all roles from a member",
    "category": "moderation",
    "usage": ",strip [@member [reason]]"
  },
  {
    "name": "lock",
    "aliases": [],
    "arguments": "[[all]]",
    "description": "Lock current channel or all channels",
    "category": "moderation",
    "usage": ",lock [[all]]"
  },
  {
    "name": "unlock",
    "aliases": [],
    "arguments": "[[#channel]]",
    "description": "Unlock specified channel (or current)",
    "category": "moderation",
    "usage": ",unlock [[#channel]]"
  },
  {
    "name": "jail",
    "aliases": [],
    "arguments": "[@member [duration] [reason]]",
    "description": "Jail a member with optional duration",
    "category": "moderation",
    "usage": ",jail [@member [duration] [reason]]"
  },
  {
    "name": "unjail",
    "aliases": [],
    "arguments": "[@member]",
    "description": "Remove jailed role from a member",
    "category": "moderation",
    "usage": ",unjail [@member]"
  },
  {
    "name": "imute",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Mute a member from sending images/attachments",
    "category": "moderation",
    "usage": ",imute [@member [reason]]"
  },
  {
    "name": "iunmute",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Unmute a member from image/attachment restrictions",
    "category": "moderation",
    "usage": ",iunmute [@member [reason]]"
  },
  {
    "name": "rmute",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Mute a member from adding reactions",
    "category": "moderation",
    "usage": ",rmute [@member [reason]]"
  },
  {
    "name": "runmute",
    "aliases": [],
    "arguments": "[@member [reason]]",
    "description": "Unmute a member from reaction restrictions",
    "category": "moderation",
    "usage": ",runmute [@member [reason]]"
  },
  {
    "name": "hide",
    "aliases": [],
    "arguments": "[[all]]",
    "description": "Hide channel(s) from @everyone",
    "category": "moderation",
    "usage": ",hide [[all]]"
  },
  {
    "name": "unhide",
    "aliases": [],
    "arguments": "[]",
    "description": "Unhide current channel from @everyone",
    "category": "moderation",
    "usage": ",unhide []"
  },
  {
    "name": "pin",
    "aliases": [],
    "arguments": "[<message_id/link> | (reply)]",
    "description": "Pin a message by ID, link, or reply",
    "category": "moderation",
    "usage": ",pin [<message_id/link> | (reply)]"
  },
  {
    "name": "unpin",
    "aliases": [],
    "arguments": "[<message_id/link> | (reply)]",
    "description": "Unpin a message by ID, link, or reply",
    "category": "moderation",
    "usage": ",unpin [<message_id/link> | (reply)]"
  },
  {
    "name": "slowmode",
    "aliases": [],
    "arguments": "[<duration|off>]",
    "description": "Set slowmode for current channel",
    "category": "moderation",
    "usage": ",slowmode [<duration|off>]"
  },
  {
    "name": "talk",
    "aliases": [],
    "arguments": "[<role>]",
    "description": "Give a role permission to send messages in current channel",
    "category": "moderation",
    "usage": ",talk [<role>]"
  },
  {
    "name": "untalk",
    "aliases": [],
    "arguments": "[<role>]",
    "description": "Remove a role's permission to send messages in current channel",
    "category": "moderation",
    "usage": ",untalk [<role>]"
  },
  {
    "name": "setup",
    "aliases": [],
    "arguments": "[<mute>]",
    "description": "Setup server systems (mute/jail)",
    "category": "moderation",
    "usage": ",setup [<mute>]"
  },
  {
    "name": "sync",
    "aliases": [],
    "arguments": "[]",
    "description": "Sync role permissions across channels",
    "category": "moderation",
    "usage": ",sync []"
  },
  {
    "name": "setme",
    "aliases": [],
    "arguments": "[]",
    "description": "Set yourself as bot owner (one-time setup)",
    "category": "moderation",
    "usage": ",setme []"
  },
  {
    "name": "nick",
    "aliases": [],
    "arguments": "[@user <nickname>]",
    "description": "Change a user's nickname",
    "category": "moderation",
    "usage": ",nick [@user <nickname>]"
  },
  {
    "name": "fn",
    "aliases": [],
    "arguments": "[@user <nickname>]",
    "description": "Force a user's nickname (prevents changes)",
    "category": "moderation",
    "usage": ",fn [@user <nickname>]"
  },
  {
    "name": "mh",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "View moderation history for a user",
    "category": "moderation",
    "usage": ",mh [[@user]]"
  },

  // ========== ENGAGEMENT (36 commands) ==========
  {
    "name": "levels",
    "aliases": [],
    "arguments": "[<subcommand> [args]]",
    "description": "Levels/XP system commands",
    "category": "engagement",
    "usage": ",levels [<subcommand> [args]]"
  },
  {
    "name": "levels add",
    "aliases": [],
    "arguments": "[@role <level>]",
    "description": "Add a role reward for a specific level",
    "category": "engagement",
    "usage": ",levels add [@role <level>]"
  },
  {
    "name": "levels ignore",
    "aliases": [],
    "arguments": "[#channel/@role]",
    "description": "Toggle ignore status for a channel or role",
    "category": "engagement",
    "usage": ",levels ignore [#channel/@role]"
  },
  {
    "name": "levels leaderboard",
    "aliases": [],
    "arguments": "[]",
    "description": "Show top 10 users by XP",
    "category": "engagement",
    "usage": ",levels leaderboard []"
  },
  {
    "name": "levels list",
    "aliases": [],
    "arguments": "[]",
    "description": "Show all ignored channels and roles",
    "category": "engagement",
    "usage": ",levels list []"
  },
  {
    "name": "levels lock",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable XP tracking in this server",
    "category": "engagement",
    "usage": ",levels lock []"
  },
  {
    "name": "levels message",
    "aliases": [],
    "arguments": "[<template>]",
    "description": "Set custom level-up message template",
    "category": "engagement",
    "usage": ",levels message [<template>]"
  },
  {
    "name": "levels messagemode",
    "aliases": [],
    "arguments": "[<pm/context/#channel/none>]",
    "description": "Set where level-up messages are sent",
    "category": "engagement",
    "usage": ",levels messagemode [<pm/context/#channel/none>]"
  },
  {
    "name": "levels rank",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Show user's rank and level progress",
    "category": "engagement",
    "usage": ",levels rank [[@user]]"
  },
  {
    "name": "levels remove",
    "aliases": [],
    "arguments": "[<level>]",
    "description": "Remove a role reward for a specific level",
    "category": "engagement",
    "usage": ",levels remove [<level>]"
  },
  {
    "name": "levels roles",
    "aliases": [],
    "arguments": "[]",
    "description": "Show level rewards with your progress",
    "category": "engagement",
    "usage": ",levels roles []"
  },
  {
    "name": "levels setlevel",
    "aliases": [],
    "arguments": "[@user <level>]",
    "description": "Set a user's level",
    "category": "engagement",
    "usage": ",levels setlevel [@user <level>]"
  },
  {
    "name": "levels setrate",
    "aliases": [],
    "arguments": "[<multiplier>]",
    "description": "Set XP multiplier rate",
    "category": "engagement",
    "usage": ",levels setrate [<multiplier>]"
  },
  {
    "name": "levels setxp",
    "aliases": [],
    "arguments": "[@user <xp>]",
    "description": "Set a user's XP",
    "category": "engagement",
    "usage": ",levels setxp [@user <xp>]"
  },
  {
    "name": "levels stackroles",
    "aliases": [],
    "arguments": "[<on/off>]",
    "description": "Toggle role stacking (on/off)",
    "category": "engagement",
    "usage": ",levels stackroles [<on/off>]"
  },
  {
    "name": "levels sync",
    "aliases": [],
    "arguments": "[]",
    "description": "Award roles to all users based on their current XP",
    "category": "engagement",
    "usage": ",levels sync []"
  },
  {
    "name": "levels unlock",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable XP tracking in this server",
    "category": "engagement",
    "usage": ",levels unlock []"
  },
  {
    "name": "streak",
    "aliases": [],
    "arguments": "[<admin/on/off/dm/check> [args]]",
    "description": "Streak system management",
    "category": "engagement",
    "usage": ",streak [<admin/on/off/dm/check> [args]]"
  },
  {
    "name": "streak admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Open streak system admin panel",
    "category": "engagement",
    "usage": ",streak admin []"
  },
  {
    "name": "streak check",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Check streak progress",
    "category": "engagement",
    "usage": ",streak check [[@user]]"
  },
  {
    "name": "streak dm",
    "aliases": [],
    "arguments": "[]",
    "description": "Toggle DM notifications for streak updates",
    "category": "engagement",
    "usage": ",streak dm []"
  },
  {
    "name": "streak off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable streak system",
    "category": "engagement",
    "usage": ",streak off []"
  },
  {
    "name": "streak on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable streak system",
    "category": "engagement",
    "usage": ",streak on []"
  },
  {
    "name": "pledge",
    "aliases": [],
    "arguments": "[<admin/status/leave/help>]",
    "description": "Pledge system management",
    "category": "engagement",
    "usage": ",pledge [<admin/status/leave/help>]"
  },
  {
    "name": "pledge admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Open pledge system admin panel",
    "category": "engagement",
    "usage": ",pledge admin []"
  },
  {
    "name": "pledge help",
    "aliases": [],
    "arguments": "[]",
    "description": "Show pledge system help",
    "category": "engagement",
    "usage": ",pledge help []"
  },
  {
    "name": "pledge leave",
    "aliases": [],
    "arguments": "[]",
    "description": "Leave your current pledge",
    "category": "engagement",
    "usage": ",pledge leave []"
  },
  {
    "name": "pledge status",
    "aliases": [],
    "arguments": "[[@user]]",
    "description": "Check pledge progress",
    "category": "engagement",
    "usage": ",pledge status [[@user]]"
  },
  {
    "name": "fg",
    "aliases": [],
    "arguments": "[<admin/create/delete/assign/unassign> [args]]",
    "description": "Friend Group system management",
    "category": "engagement",
    "usage": ",fg [<admin/create/delete/assign/unassign> [args]]"
  },
  {
    "name": "fg admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Show Friend Group admin panel",
    "category": "engagement",
    "usage": ",fg admin []"
  },
  {
    "name": "fg challenge",
    "aliases": [],
    "arguments": "[]",
    "description": "View or manage FG challenges",
    "category": "engagement",
    "usage": ",fg challenge []"
  },
  {
    "name": "fg daily",
    "aliases": [],
    "arguments": "[]",
    "description": "Show daily message leaderboard",
    "category": "engagement",
    "usage": ",fg daily []"
  },
  {
    "name": "fg mvp",
    "aliases": [],
    "arguments": "[]",
    "description": "Show MVP of a Friend Group",
    "category": "engagement",
    "usage": ",fg mvp []"
  },
  {
    "name": "fg rank",
    "aliases": [],
    "arguments": "[]",
    "description": "Check your rank in your Friend Groups",
    "category": "engagement",
    "usage": ",fg rank []"
  },
  {
    "name": "fg top",
    "aliases": [],
    "arguments": "[]",
    "description": "Show top members in a Friend Group",
    "category": "engagement",
    "usage": ",fg top []"
  },
  {
    "name": "lb",
    "aliases": [],
    "arguments": "[<global/fg> [#channel]]",
    "description": "Leaderboard system management",
    "category": "engagement",
    "usage": ",lb [<global/fg> [#channel]]"
  },

  // ========== GIVEAWAY (6 commands) ==========
  {
    "name": "gw",
    "aliases": [],
    "arguments": "[<start/end/edit/reroll> [args]]",
    "description": "Giveaway system - create and manage giveaways",
    "category": "giveaway",
    "usage": ",gw [<start/end/edit/reroll> [args]]"
  },
  {
    "name": "gw edit",
    "aliases": [],
    "arguments": "[{message_link} <host/duration/prize> {value}]",
    "description": "Edit giveaway host, duration, or prize",
    "category": "giveaway",
    "usage": ",gw edit [{message_link} <host/duration/prize> {value}]"
  },
  {
    "name": "gw end",
    "aliases": [],
    "arguments": "[{message_link}]",
    "description": "Manually end an active giveaway",
    "category": "giveaway",
    "usage": ",gw end [{message_link}]"
  },
  {
    "name": "gw history",
    "aliases": [],
    "arguments": "[]",
    "description": "Show giveaway history from the last 6 hours",
    "category": "giveaway",
    "usage": ",gw history []"
  },
  {
    "name": "gw reroll",
    "aliases": [],
    "arguments": "[[message_link]]",
    "description": "Reroll winners for an ended giveaway",
    "category": "giveaway",
    "usage": ",gw reroll [[message_link]]"
  },
  {
    "name": "gw start",
    "aliases": [],
    "arguments": "[{duration} [#channel] {winners} {prize} [--requirements]]",
    "description": "Start a new giveaway with optional requirements",
    "category": "giveaway",
    "usage": ",gw start [{duration} [#channel] {winners} {prize} [--requirements]]"
  },

  // ========== WELCOMING (10 commands) ==========
  {
    "name": "welc",
    "aliases": [],
    "arguments": "[<channel/edit/preview>]",
    "description": "Welcoming system management",
    "category": "welcoming",
    "usage": ",welc [<channel/edit/preview>]"
  },
  {
    "name": "welc channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set the welcome channel for new member messages",
    "category": "welcoming",
    "usage": ",welc channel [#channel]"
  },
  {
    "name": "welc edit",
    "aliases": [],
    "arguments": "[<message>]",
    "description": "Edit the welcome message template",
    "category": "welcoming",
    "usage": ",welc edit [<message>]"
  },
  {
    "name": "welc preview",
    "aliases": [],
    "arguments": "[]",
    "description": "Send a preview welcome message to the welcome channel",
    "category": "welcoming",
    "usage": ",welc preview []"
  },
  {
    "name": "doj",
    "aliases": [],
    "arguments": "[<preview/set/on/off>]",
    "description": "DM On Join system - Send DMs to new members",
    "category": "welcoming",
    "usage": ",doj [<preview/set/on/off>]"
  },
  {
    "name": "doj off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable the DOJ system",
    "category": "welcoming",
    "usage": ",doj off []"
  },
  {
    "name": "doj on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable the DOJ system",
    "category": "welcoming",
    "usage": ",doj on []"
  },
  {
    "name": "doj preview",
    "aliases": [],
    "arguments": "[]",
    "description": "Send a test DM with the DOJ message",
    "category": "welcoming",
    "usage": ",doj preview []"
  },
  {
    "name": "doj set",
    "aliases": [],
    "arguments": "[]",
    "description": "Set the DOJ message interactively",
    "category": "welcoming",
    "usage": ",doj set []"
  },
  {
    "name": "poj",
    "aliases": [],
    "arguments": "[]",
    "description": "Ping On Join admin panel for ghost pinging new members",
    "category": "welcoming",
    "usage": ",poj []"
  },

  // ========== UTILITY (38 commands) ==========
  {
    "name": "afk",
    "aliases": [],
    "arguments": "[[message]]",
    "description": "Set your AFK status with an optional message",
    "category": "utility",
    "usage": ",afk [[message]]"
  },
  {
    "name": "log",
    "aliases": [],
    "arguments": "[<add/remove/ignore>]",
    "description": "Manage server logging system",
    "category": "utility",
    "usage": ",log [<add/remove/ignore>]"
  },
  {
    "name": "log add",
    "aliases": [],
    "arguments": "[<channel> <message/voice/members>]",
    "description": "Add a log channel for a specific type",
    "category": "utility",
    "usage": ",log add [<channel> <message/voice/members>]"
  },
  {
    "name": "log ignore",
    "aliases": [],
    "arguments": "[<add/remove> <target>]",
    "description": "Manage logging ignore list",
    "category": "utility",
    "usage": ",log ignore [<add/remove> <target>]"
  },
  {
    "name": "log ignore add",
    "aliases": [],
    "arguments": "[<#channel/@user/@role>]",
    "description": "Add channel/user/role to logging ignore list",
    "category": "utility",
    "usage": ",log ignore add [<#channel/@user/@role>]"
  },
  {
    "name": "log ignore remove",
    "aliases": [],
    "arguments": "[<#channel/@user/@role>]",
    "description": "Remove channel/user/role from logging ignore list",
    "category": "utility",
    "usage": ",log ignore remove [<#channel/@user/@role>]"
  },
  {
    "name": "log remove",
    "aliases": [],
    "arguments": "[<channel> <message/voice/members>]",
    "description": "Remove a log channel for a specific type",
    "category": "utility",
    "usage": ",log remove [<channel> <message/voice/members>]"
  },
  {
    "name": "backup",
    "aliases": [],
    "arguments": "[create | load]",
    "description": "Advanced server backup and restoration system - only server owner/bot owner",
    "category": "utility",
    "usage": ",backup [create | load]"
  },
  {
    "name": "backup create",
    "aliases": [],
    "arguments": "[]",
    "description": "Create a complete backup of the current server",
    "category": "utility",
    "usage": ",backup create []"
  },
  {
    "name": "backup load",
    "aliases": [],
    "arguments": "[]",
    "description": "Load your backup into the current server",
    "category": "utility",
    "usage": ",backup load []"
  },
  {
    "name": "tz",
    "aliases": [],
    "arguments": "[[set <location>] [@user]]",
    "description": "View or set timezone",
    "category": "utility",
    "usage": ",tz [[set <location>] [@user]]"
  },
  {
    "name": "setpfp",
    "aliases": [],
    "arguments": "[[image URL or attach image]]",
    "description": "Set server icon",
    "category": "utility",
    "usage": ",setpfp [[image URL or attach image]]"
  },
  {
    "name": "setbanner",
    "aliases": [],
    "arguments": "[[image URL or attach image]]",
    "description": "Set server banner",
    "category": "utility",
    "usage": ",setbanner [[image URL or attach image]]"
  },
  {
    "name": "setsplash",
    "aliases": [],
    "arguments": "[[image URL or attach image]]",
    "description": "Set server splash screen",
    "category": "utility",
    "usage": ",setsplash [[image URL or attach image]]"
  },
  {
    "name": "lb fg",
    "aliases": [],
    "arguments": "[[#channel]]",
    "description": "Set Friend Group leaderboard channel",
    "category": "utility",
    "usage": ",lb fg [[#channel]]"
  },
  {
    "name": "lb global",
    "aliases": [],
    "arguments": "[[#channel]]",
    "description": "Set activity leaderboard channel (voice/messages)",
    "category": "utility",
    "usage": ",lb global [[#channel]]"
  },
  {
    "name": "lb reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset activity leaderboard data to 0",
    "category": "utility",
    "usage": ",lb reset []"
  },
  {
    "name": "timer",
    "aliases": [],
    "arguments": "[<add/remove/list/view>]",
    "description": "Manage automated message timers",
    "category": "utility",
    "usage": ",timer [<add/remove/list/view>]"
  },
  {
    "name": "timer add",
    "aliases": [],
    "arguments": "[<#channel> <interval> <message...>]",
    "description": "Add an automated message timer",
    "category": "utility",
    "usage": ",timer add [<#channel> <interval> <message...>]"
  },
  {
    "name": "timer list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all automated timers",
    "category": "utility",
    "usage": ",timer list []"
  },
  {
    "name": "timer remove",
    "aliases": [],
    "arguments": "[<#channel>]",
    "description": "Remove an automated timer",
    "category": "utility",
    "usage": ",timer remove [<#channel>]"
  },
  {
    "name": "timer view",
    "aliases": [],
    "arguments": "[<#channel>]",
    "description": "View details of a specific timer",
    "category": "utility",
    "usage": ",timer view [<#channel>]"
  },
  {
    "name": "autorole",
    "aliases": [],
    "arguments": "[<add|remove> <role>]",
    "description": "Auto-assign roles to new members",
    "category": "utility",
    "usage": ",autorole [<add|remove> <role>]"
  },
  {
    "name": "emoji",
    "aliases": [],
    "arguments": "[[emoji]]",
    "description": "Fetch the raw file for an emoji",
    "category": "utility",
    "usage": ",emoji [[emoji]]"
  },
  {
    "name": "emoji add",
    "aliases": [],
    "arguments": "[emoji]",
    "description": "Clone emoji(s) from other servers (can be multiple)",
    "category": "utility",
    "usage": ",emoji add [emoji]"
  },
  {
    "name": "emoji remove",
    "aliases": [],
    "arguments": "[emoji]",
    "description": "Remove emoji(s) (can be multiple)",
    "category": "utility",
    "usage": ",emoji remove [emoji]"
  },
  {
    "name": "emoji info",
    "aliases": [],
    "arguments": "[emoji]",
    "description": "Detailed information about an emoji",
    "category": "utility",
    "usage": ",emoji info [emoji]"
  },
  {
    "name": "emojis",
    "aliases": [],
    "arguments": "[]",
    "description": "List all emojis in the server",
    "category": "utility",
    "usage": ",emojis []"
  },
  {
    "name": "sticker",
    "aliases": [],
    "arguments": "[[sticker]]",
    "description": "Fetch the raw file for a sticker",
    "category": "utility",
    "usage": ",sticker [[sticker]]"
  },
  {
    "name": "sticker add",
    "aliases": [],
    "arguments": "[[sticker]]",
    "description": "Add sticker (or reply to messages with sticker)",
    "category": "utility",
    "usage": ",sticker add [[sticker]]"
  },
  {
    "name": "sticker remove",
    "aliases": [],
    "arguments": "[name]",
    "description": "Remove sticker by name",
    "category": "utility",
    "usage": ",sticker remove [name]"
  },
  {
    "name": "sticker info",
    "aliases": [],
    "arguments": "[sticker]",
    "description": "Detailed information about a sticker",
    "category": "utility",
    "usage": ",sticker info [sticker]"
  },
  {
    "name": "media",
    "aliases": [],
    "arguments": "[<caption/quote> [args]]",
    "description": "Media manipulation commands",
    "category": "utility",
    "usage": ",media [<caption/quote> [args]]"
  },
  {
    "name": "media caption",
    "aliases": [],
    "arguments": "[<caption> or <caption1>, <caption2>]",
    "description": "Add bold caption(s) to an image with high quality",
    "category": "utility",
    "usage": ",media caption [<caption> or <caption1>, <caption2>]"
  },
  {
    "name": "media quote",
    "aliases": [],
    "arguments": "[]",
    "description": "Create a high-quality quote card from a replied message",
    "category": "utility",
    "usage": ",media quote []"
  },
  {
    "name": "quote",
    "aliases": [],
    "arguments": "[]",
    "description": "Create a high-quality quote card from a replied message",
    "category": "utility",
    "usage": ",quote []"
  },
  {
    "name": "search",
    "aliases": [],
    "arguments": "[<query>]",
    "description": "Search the web using Google (10s server cooldown)",
    "category": "utility",
    "usage": ",search [<query>]"
  },
  {
    "name": "image",
    "aliases": [],
    "arguments": "[<query>]",
    "description": "Search for images using Google (10s server cooldown)",
    "category": "utility",
    "usage": ",image [<query>]"
  },

  // ========== AUTORESPONDER (13 commands) ==========
  {
    "name": "autoresponder",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage autoresponder triggers that send custom messages",
    "category": "autoresponder",
    "usage": ",autoresponder []"
  },
  {
    "name": "autoresponder add",
    "aliases": [],
    "arguments": "[<trigger>, <response>]",
    "description": "Add a new autoresponder trigger",
    "category": "autoresponder",
    "usage": ",autoresponder add [<trigger>, <response>]"
  },
  {
    "name": "autoresponder list",
    "aliases": [],
    "arguments": "[]",
    "description": "View all autoresponder triggers",
    "category": "autoresponder",
    "usage": ",autoresponder list []"
  },
  {
    "name": "autoresponder remove",
    "aliases": [],
    "arguments": "[<trigger>]",
    "description": "Remove an autoresponder trigger",
    "category": "autoresponder",
    "usage": ",autoresponder remove [<trigger>]"
  },
  {
    "name": "autoresponder reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove all autoresponder triggers",
    "category": "autoresponder",
    "usage": ",autoresponder reset []"
  },
  {
    "name": "autoresponder update",
    "aliases": [],
    "arguments": "[<trigger>, <new response>]",
    "description": "Update an existing autoresponder trigger",
    "category": "autoresponder",
    "usage": ",autoresponder update [<trigger>, <new response>]"
  },
  {
    "name": "reaction",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage auto-reaction triggers for messages",
    "category": "autoresponder",
    "usage": ",reaction []"
  },
  {
    "name": "reaction add",
    "aliases": [],
    "arguments": "[<emoji> <trigger>]",
    "description": "Add an emoji reaction to a trigger word",
    "category": "autoresponder",
    "usage": ",reaction add [<emoji> <trigger>]"
  },
  {
    "name": "reaction list",
    "aliases": [],
    "arguments": "[]",
    "description": "View all reaction triggers",
    "category": "autoresponder",
    "usage": ",reaction list []"
  },
  {
    "name": "reaction owner",
    "aliases": [],
    "arguments": "[<trigger>]",
    "description": "View who added a reaction trigger",
    "category": "autoresponder",
    "usage": ",reaction owner [<trigger>]"
  },
  {
    "name": "reaction remove",
    "aliases": [],
    "arguments": "[<emoji> <trigger>]",
    "description": "Remove a specific emoji from a trigger",
    "category": "autoresponder",
    "usage": ",reaction remove [<emoji> <trigger>]"
  },
  {
    "name": "reaction removeall",
    "aliases": [],
    "arguments": "[<trigger>]",
    "description": "Remove all emoji reactions from a trigger",
    "category": "autoresponder",
    "usage": ",reaction removeall [<trigger>]"
  },
  {
    "name": "reaction reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove all reaction triggers",
    "category": "autoresponder",
    "usage": ",reaction reset []"
  },

  // ========== BOOSTER (14 commands) ==========
  {
    "name": "boosterrole",
    "aliases": [],
    "arguments": "[<create/color/icon/delete> [args]]",
    "description": "Booster role system - create and customize booster roles",
    "category": "booster",
    "usage": ",boosterrole [<create/color/icon/delete> [args]]"
  },
  {
    "name": "boosterrole award",
    "aliases": [],
    "arguments": "[]",
    "description": "Set auto-assign role for all boosters",
    "category": "booster",
    "usage": ",boosterrole award []"
  },
  {
    "name": "boosterrole award remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove award role",
    "category": "booster",
    "usage": ",boosterrole award remove []"
  },
  {
    "name": "boosterrole award view",
    "aliases": [],
    "arguments": "[]",
    "description": "View current award role",
    "category": "booster",
    "usage": ",boosterrole award view []"
  },
  {
    "name": "boosterrole base",
    "aliases": [],
    "arguments": "[]",
    "description": "Set base role position for booster roles",
    "category": "booster",
    "usage": ",boosterrole base []"
  },
  {
    "name": "boosterrole cleanup",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove orphaned booster roles",
    "category": "booster",
    "usage": ",boosterrole cleanup []"
  },
  {
    "name": "boosterrole color",
    "aliases": [],
    "arguments": "[]",
    "description": "Change your booster role color",
    "category": "booster",
    "usage": ",boosterrole color []"
  },
  {
    "name": "boosterrole icon",
    "aliases": [],
    "arguments": "[]",
    "description": "Set your booster role icon",
    "category": "booster",
    "usage": ",boosterrole icon []"
  },
  {
    "name": "boosterrole list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all booster roles in the server",
    "category": "booster",
    "usage": ",boosterrole list []"
  },
  {
    "name": "boosterrole remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Delete your booster role",
    "category": "booster",
    "usage": ",boosterrole remove []"
  },
  {
    "name": "boosterrole rename",
    "aliases": [],
    "arguments": "[]",
    "description": "Rename your booster role",
    "category": "booster",
    "usage": ",boosterrole rename []"
  },
  {
    "name": "boosterrole share",
    "aliases": [],
    "arguments": "[]",
    "description": "Share your role with another user",
    "category": "booster",
    "usage": ",boosterrole share []"
  },
  {
    "name": "boosterrole unshare",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove your role from a user",
    "category": "booster",
    "usage": ",boosterrole unshare []"
  },
  {
    "name": "boosts",
    "aliases": [],
    "arguments": "[]",
    "description": "Show a list of all server boosters",
    "category": "booster",
    "usage": ",boosts []"
  },

  // ========== TICKET (16 commands) ==========
  {
    "name": "ticket",
    "aliases": [],
    "arguments": "[]",
    "description": "Ticket system management",
    "category": "ticket",
    "usage": ",ticket []"
  },
  {
    "name": "ticket add",
    "aliases": [],
    "arguments": "[@user/role]",
    "description": "Add a user or role to the ticket",
    "category": "ticket",
    "usage": ",ticket add [@user/role]"
  },
  {
    "name": "ticket button",
    "aliases": [],
    "arguments": "[(text) --message | (emoji) --icon]",
    "description": "Customize the ticket panel button",
    "category": "ticket",
    "usage": ",ticket button [(text) --message | (emoji) --icon]"
  },
  {
    "name": "ticket channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set the channel for the ticket panel",
    "category": "ticket",
    "usage": ",ticket channel [#channel]"
  },
  {
    "name": "ticket close",
    "aliases": [],
    "arguments": "[--delete yes/no]",
    "description": "Close the current ticket",
    "category": "ticket",
    "usage": ",ticket close [--delete yes/no]"
  },
  {
    "name": "ticket log",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set the transcript log channel",
    "category": "ticket",
    "usage": ",ticket log [#channel]"
  },
  {
    "name": "ticket open",
    "aliases": [],
    "arguments": "[]",
    "description": "Reopen a closed ticket",
    "category": "ticket",
    "usage": ",ticket open []"
  },
  {
    "name": "ticket refresh",
    "aliases": [],
    "arguments": "[]",
    "description": "Refresh the ticket panel",
    "category": "ticket",
    "usage": ",ticket refresh []"
  },
  {
    "name": "ticket remove",
    "aliases": [],
    "arguments": "[@user/role]",
    "description": "Remove a user or role from the ticket",
    "category": "ticket",
    "usage": ",ticket remove [@user/role]"
  },
  {
    "name": "ticket rename",
    "aliases": [],
    "arguments": "[(name)]",
    "description": "Rename the ticket channel",
    "category": "ticket",
    "usage": ",ticket rename [(name)]"
  },
  {
    "name": "ticket reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset all ticket settings",
    "category": "ticket",
    "usage": ",ticket reset []"
  },
  {
    "name": "ticket setup",
    "aliases": [],
    "arguments": "[]",
    "description": "Interactive ticket system setup",
    "category": "ticket",
    "usage": ",ticket setup []"
  },
  {
    "name": "ticket support",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage support roles for ticket system",
    "category": "ticket",
    "usage": ",ticket support []"
  },
  {
    "name": "ticket support add",
    "aliases": [],
    "arguments": "[<role_id>]",
    "description": "Add a support role to ticket system",
    "category": "ticket",
    "usage": ",ticket support add [<role_id>]"
  },
  {
    "name": "ticket support list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all support roles",
    "category": "ticket",
    "usage": ",ticket support list []"
  },
  {
    "name": "ticket support remove",
    "aliases": [],
    "arguments": "[<role_id>]",
    "description": "Remove a support role from ticket system",
    "category": "ticket",
    "usage": ",ticket support remove [<role_id>]"
  },

  // ========== FUN (20 commands) ==========
  {
    "name": "blacktea",
    "aliases": [],
    "arguments": "[]",
    "description": "Start a word battle royale game",
    "category": "fun",
    "usage": ",blacktea []"
  },
  {
    "name": "family",
    "aliases": [],
    "arguments": "[<subcommand>]",
    "description": "Family tree management system",
    "category": "fun",
    "usage": ",family [<subcommand>]"
  },
  {
    "name": "family admin",
    "aliases": [],
    "arguments": "[family admin <wipe|reset>]",
    "description": "[ADMIN] Family admin commands",
    "category": "fun",
    "usage": ",family admin [family admin <wipe|reset>]"
  },
  {
    "name": "family admin reset",
    "aliases": [],
    "arguments": "[family admin reset <user>]",
    "description": "[ADMIN] Reset user's family data",
    "category": "fun",
    "usage": ",family admin reset [family admin reset <user>]"
  },
  {
    "name": "family admin wipe",
    "aliases": [],
    "arguments": "[family admin wipe]",
    "description": "[ADMIN] Wipe all family data",
    "category": "fun",
    "usage": ",family admin wipe [family admin wipe]"
  },
  {
    "name": "family adopt",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Adopt another user as your child",
    "category": "fun",
    "usage": ",family adopt [@user]"
  },
  {
    "name": "family cuck",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Cheat on your partner with another user",
    "category": "fun",
    "usage": ",family cuck [@user]"
  },
  {
    "name": "family disown",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Disown one of your children",
    "category": "fun",
    "usage": ",family disown [@user]"
  },
  {
    "name": "family divorce",
    "aliases": [],
    "arguments": "[]",
    "description": "Divorce your partner",
    "category": "fun",
    "usage": ",family divorce []"
  },
  {
    "name": "family game",
    "aliases": [],
    "arguments": "[<game>]",
    "description": "Play family games with your partner",
    "category": "fun",
    "usage": ",family game [<game>]"
  },
  {
    "name": "family marry",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Propose marriage to another user",
    "category": "fun",
    "usage": ",family marry [@user]"
  },
  {
    "name": "family parent",
    "aliases": [],
    "arguments": "[[user]]",
    "description": "Check your or another user's parent",
    "category": "fun",
    "usage": ",family parent [[user]]"
  },
  {
    "name": "family partner",
    "aliases": [],
    "arguments": "[[user]]",
    "description": "Check your or another user's partner",
    "category": "fun",
    "usage": ",family partner [[user]]"
  },
  {
    "name": "family relate",
    "aliases": [],
    "arguments": "[@user1 [user2]]",
    "description": "Check how two users are related",
    "category": "fun",
    "usage": ",family relate [@user1 [user2]]"
  },
  {
    "name": "family runaway",
    "aliases": [],
    "arguments": "[]",
    "description": "Run away from your parent",
    "category": "fun",
    "usage": ",family runaway []"
  },
  {
    "name": "family ship",
    "aliases": [],
    "arguments": "[@user1 [user2]]",
    "description": "Check compatibility between two users",
    "category": "fun",
    "usage": ",family ship [@user1 [user2]]"
  },
  {
    "name": "family test",
    "aliases": [],
    "arguments": "[family test <married|full>]",
    "description": "Generate sample family trees for testing",
    "category": "fun",
    "usage": ",family test [family test <married|full>]"
  },
  {
    "name": "family test full",
    "aliases": [],
    "arguments": "[family test full]",
    "description": "Generate full sample family tree",
    "category": "fun",
    "usage": ",family test full [family test full]"
  },
  {
    "name": "family test married",
    "aliases": [],
    "arguments": "[family test married]",
    "description": "Generate sample married couple tree",
    "category": "fun",
    "usage": ",family test married [family test married]"
  },
  {
    "name": "family tree",
    "aliases": [],
    "arguments": "[[user]]",
    "description": "Display family tree image",
    "category": "fun",
    "usage": ",family tree [[user]]"
  },

  // ========== VOICE (21 commands) ==========
  {
    "name": "vc",
    "aliases": [],
    "arguments": "[<setup/category/name/bypass/kick/ban/lock> [args]]",
    "description": "VoiceMaster system - temporary voice channels",
    "category": "voice",
    "usage": ",vc [<setup/category/name/bypass/kick/ban/lock> [args]]"
  },
  {
    "name": "vc ban",
    "aliases": [],
    "arguments": "[]",
    "description": "Ban user from your voice channel",
    "category": "voice",
    "usage": ",vc ban []"
  },
  {
    "name": "vc bypass",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage roles that can bypass channel locks",
    "category": "voice",
    "usage": ",vc bypass []"
  },
  {
    "name": "vc category",
    "aliases": [],
    "arguments": "[]",
    "description": "Change VoiceMaster category",
    "category": "voice",
    "usage": ",vc category []"
  },
  {
    "name": "vc claim",
    "aliases": [],
    "arguments": "[]",
    "description": "Claim ownership of empty channel",
    "category": "voice",
    "usage": ",vc claim []"
  },
  {
    "name": "vc hide",
    "aliases": [],
    "arguments": "[]",
    "description": "Hide your voice channel",
    "category": "voice",
    "usage": ",vc hide []"
  },
  {
    "name": "vc intr",
    "aliases": [],
    "arguments": "[]",
    "description": "Show VoiceMaster admin interface",
    "category": "voice",
    "usage": ",vc intr []"
  },
  {
    "name": "vc kick",
    "aliases": [],
    "arguments": "[]",
    "description": "Kick user from your voice channel",
    "category": "voice",
    "usage": ",vc kick []"
  },
  {
    "name": "vc limit",
    "aliases": [],
    "arguments": "[]",
    "description": "Set user limit for your channel",
    "category": "voice",
    "usage": ",vc limit []"
  },
  {
    "name": "vc lock",
    "aliases": [],
    "arguments": "[]",
    "description": "Lock your voice channel",
    "category": "voice",
    "usage": ",vc lock []"
  },
  {
    "name": "vc name",
    "aliases": [],
    "arguments": "[]",
    "description": "Change default channel name format",
    "category": "voice",
    "usage": ",vc name []"
  },
  {
    "name": "vc permit",
    "aliases": [],
    "arguments": "[]",
    "description": "Allow user to join your locked channel",
    "category": "voice",
    "usage": ",vc permit []"
  },
  {
    "name": "vc rename",
    "aliases": [],
    "arguments": "[]",
    "description": "Rename your voice channel",
    "category": "voice",
    "usage": ",vc rename []"
  },
  {
    "name": "vc setup",
    "aliases": [],
    "arguments": "[]",
    "description": "Setup VoiceMaster system with interface channel",
    "category": "voice",
    "usage": ",vc setup []"
  },
  {
    "name": "vc transfer",
    "aliases": [],
    "arguments": "[]",
    "description": "Transfer ownership to another user",
    "category": "voice",
    "usage": ",vc transfer []"
  },
  {
    "name": "vc unban",
    "aliases": [],
    "arguments": "[]",
    "description": "Unban user from your voice channel",
    "category": "voice",
    "usage": ",vc unban []"
  },
  {
    "name": "vc unhide",
    "aliases": [],
    "arguments": "[]",
    "description": "Unhide your voice channel",
    "category": "voice",
    "usage": ",vc unhide []"
  },
  {
    "name": "vc unlock",
    "aliases": [],
    "arguments": "[]",
    "description": "Unlock your voice channel",
    "category": "voice",
    "usage": ",vc unlock []"
  },
  {
    "name": "massmute",
    "aliases": [],
    "arguments": "[]",
    "description": "Mute everyone in your current VC except admins/mute_members holders",
    "category": "voice",
    "usage": ",massmute []"
  },
  {
    "name": "massdeafen",
    "aliases": [],
    "arguments": "[]",
    "description": "Deafen everyone in your current VC except admins/mute_members holders",
    "category": "voice",
    "usage": ",massdeafen []"
  },
  {
    "name": "d",
    "aliases": [],
    "arguments": "[<@user> <voice channel>]",
    "description": "Move a user from their current VC to a new VC",
    "category": "voice",
    "usage": ",d [<@user> <voice channel>]"
  },

  // ========== SNIPE (4 commands) ==========
  {
    "name": "s",
    "aliases": [],
    "arguments": "[[index]]",
    "description": "Display deleted messages from the current channel",
    "category": "snipe",
    "usage": ",s [[index]]"
  },
  {
    "name": "es",
    "aliases": [],
    "arguments": "[[index]]",
    "description": "Display edited messages from the current channel",
    "category": "snipe",
    "usage": ",es [[index]]"
  },
  {
    "name": "rs",
    "aliases": [],
    "arguments": "[[index]]",
    "description": "Display removed reactions from the current channel",
    "category": "snipe",
    "usage": ",rs [[index]]"
  },
  {
    "name": "cs",
    "aliases": [],
    "arguments": "[[channel|server]]",
    "description": "Clear snipe data for current channel or entire server",
    "category": "snipe",
    "usage": ",cs [[channel|server]]"
  },

  // ========== BIRTHDAY (4 commands) ==========
  {
    "name": "birthday set",
    "aliases": [],
    "arguments": "[<date>]",
    "description": "Set your birthday. Accepts formats like: 25 Dec, Dec 25, 25/12, 12/25, December 25",
    "category": "birthday",
    "usage": ",birthday set [<date>]"
  },
  {
    "name": "birthday role set",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Admins can set a role to auto-assign on birthdays. Requires 'Manage Server' permission",
    "category": "birthday",
    "usage": ",birthday role set [@role]"
  },
  {
    "name": "birthday role reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Admins can remove the birthday role setting",
    "category": "birthday",
    "usage": ",birthday role reset []"
  },
  {
    "name": "birthday role view",
    "aliases": [],
    "arguments": "[]",
    "description": "View the currently configured birthday role",
    "category": "birthday",
    "usage": ",birthday role view []"
  }
];

export async function seedDatabase() {
  try {
    console.log("Seeding database with commands...");
    
    // Delete all existing commands first
    await storage.deleteAllCommands();
    
    // Insert all commands
    for (const cmd of allCommands) {
      await storage.createCommand(cmd);
    }
    
    console.log(`Successfully seeded ${allCommands.length} commands`);
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}
