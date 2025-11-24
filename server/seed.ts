import { storage } from "./storage";

const allCommands = [

  {
    "name": "an",
    "aliases": [],
    "arguments": "[<module> <on/off> [flags]]",
    "description": "Antinuke configuration system",
    "category": "security",
    "usage": ",an [<module> <on/off> [flags]]"
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
    "name": "fp",
    "aliases": [],
    "arguments": "[<grant/remove/list/reset> [args]]",
    "description": "Manage fake permissions for users and roles",
    "category": "permissions",
    "usage": ",fp [<grant/remove/list/reset> [args]]"
  },
  {
    "name": "gw",
    "aliases": [],
    "arguments": "[<start/end/edit/reroll> [args]]",
    "description": "Giveaway system - create and manage giveaways",
    "category": "giveaways",
    "usage": ",gw [<start/end/edit/reroll> [args]]"
  },
  {
    "name": "lb",
    "aliases": [],
    "arguments": "[<global/fg> [#channel]]",
    "description": "Leaderboard system management",
    "category": "config",
    "usage": ",lb [<global/fg> [#channel]]"
  },
  {
    "name": "levels",
    "aliases": [],
    "arguments": "[<subcommand> [args]]",
    "description": "Levels/XP system commands",
    "category": "leveling",
    "usage": ",levels [<subcommand> [args]]"
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
    "name": "panick",
    "aliases": [],
    "arguments": "[<on/off> [reason]]",
    "description": "Emergency server lockdown mode",
    "category": "security",
    "usage": ",panick [<on/off> [reason]]"
  },
  {
    "name": "r",
    "aliases": [],
    "arguments": "[<subcommand> [args] (see ,r for full usage)]",
    "description": "Role management (toggle/restore/rename/delete/create/dump/etc)",
    "category": "roles",
    "usage": ",r [<subcommand> [args] (see ,r for full usage)]"
  },
  {
    "name": "vc",
    "aliases": [],
    "arguments": "[<setup/category/name/bypass/kick/ban/lock> [args]]",
    "description": "VoiceMaster system - temporary voice channels",
    "category": "voice",
    "usage": ",vc [<setup/category/name/bypass/kick/ban/lock> [args]]"
  },
  {
    "name": "help",
    "aliases": [],
    "arguments": "[query]",
    "description": "Hierarchical help system with pagination and subcommand display",
    "category": "info",
    "usage": ",help [query]"
  },
  {
    "name": "docs",
    "aliases": [],
    "arguments": "[]",
    "description": "Show documentation about variables, flags, and parsing methods",
    "category": "info",
    "usage": ",docs []"
  },
  {
    "name": "mc",
    "aliases": [],
    "arguments": "[]",
    "description": "Display server member count breakdown by category",
    "category": "info",
    "usage": ",mc []"
  },
  {
    "name": "ui",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Display detailed user information and avatar",
    "category": "info",
    "usage": ",ui [@user]"
  },
  {
    "name": "ri",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Display detailed role information and permissions",
    "category": "info",
    "usage": ",ri [@role]"
  },
  {
    "name": "si",
    "aliases": [],
    "arguments": "[]",
    "description": "Display detailed server information and statistics",
    "category": "info",
    "usage": ",si []"
  },
  {
    "name": "ci",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Display detailed channel information",
    "category": "info",
    "usage": ",ci [#channel]"
  },
  {
    "name": "ii",
    "aliases": [],
    "arguments": "[invite]",
    "description": "Display detailed Discord invite information",
    "category": "info",
    "usage": ",ii [invite]"
  },
  {
    "name": "roles",
    "aliases": [],
    "arguments": "[]",
    "description": "Display all server roles in hierarchical order",
    "category": "info",
    "usage": ",roles []"
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
    "name": "tz set",
    "aliases": [],
    "arguments": "[timezone]",
    "description": "Set your timezone using IANA timezone or country name",
    "category": "utility",
    "usage": ",tz set [timezone]"
  },
  {
    "name": "tz",
    "aliases": [],
    "arguments": "[@user]",
    "description": "View timezone and current time for yourself or another user",
    "category": "utility",
    "usage": ",tz [@user]"
  },
  {
    "name": "ping",
    "aliases": [],
    "arguments": "[mode]",
    "description": "Display bot latency and optional advanced diagnostics",
    "category": "utility",
    "usage": ",ping [mode]"
  },
  {
    "name": "stats",
    "aliases": [],
    "arguments": "[]",
    "description": "Display bot statistics and performance metrics",
    "category": "utility",
    "usage": ",stats []"
  },
  {
    "name": "invite",
    "aliases": [],
    "arguments": "[]",
    "description": "Display bot invite link",
    "category": "utility",
    "usage": ",invite []"
  },
  {
    "name": "kick",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Kick member from server with optional reason",
    "category": "moderation",
    "usage": ",kick [@user] [reason]"
  },
  {
    "name": "ban",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Permanently ban member from server",
    "category": "moderation",
    "usage": ",ban [@user] [reason]"
  },
  {
    "name": "unban",
    "aliases": [],
    "arguments": "[user_id] [reason]",
    "description": "Unban user by their Discord ID",
    "category": "moderation",
    "usage": ",unban [user_id] [reason]"
  },
  {
    "name": "unbanall",
    "aliases": [],
    "arguments": "[]",
    "description": "Mass unban all banned users except hardbanned users (requires confirmation)",
    "category": "moderation",
    "usage": ",unbanall []"
  },
  {
    "name": "timeout",
    "aliases": [],
    "arguments": "[@user] [duration] [reason]",
    "description": "Timeout member for specified duration",
    "category": "moderation",
    "usage": ",timeout [@user] [duration] [reason]"
  },
  {
    "name": "untimeout",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Remove timeout from member",
    "category": "moderation",
    "usage": ",untimeout [@user] [reason]"
  },
  {
    "name": "softban",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Ban user, delete their messages, then instantly unban",
    "category": "moderation",
    "usage": ",softban [@user] [reason]"
  },
  {
    "name": "hackban",
    "aliases": [],
    "arguments": "[user_id] [reason]",
    "description": "Preemptive ban before user joins server (cannot be unbanned except by antinuke admins)",
    "category": "moderation",
    "usage": ",hackban [user_id] [reason]"
  },
  {
    "name": "raid",
    "aliases": [],
    "arguments": "[duration] [kick|ban|jail]",
    "description": "Mass moderation action on members who joined within specified duration",
    "category": "moderation",
    "usage": ",raid [duration] [kick|ban|jail]"
  },
  {
    "name": "raid on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable full server lockdown mode (locks channels, disables joins, deletes webhooks)",
    "category": "moderation",
    "usage": ",raid on []"
  },
  {
    "name": "raid off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable server lockdown mode and restore permissions",
    "category": "moderation",
    "usage": ",raid off []"
  },
  {
    "name": "purge",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete specified number of messages in channel",
    "category": "moderation",
    "usage": ",purge [amount]"
  },
  {
    "name": "purge bots",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete only bot messages",
    "category": "moderation",
    "usage": ",purge bots [amount]"
  },
  {
    "name": "purge humans",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete only human messages",
    "category": "moderation",
    "usage": ",purge humans [amount]"
  },
  {
    "name": "purge @user",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete messages from specific user",
    "category": "moderation",
    "usage": ",purge @user [amount]"
  },
  {
    "name": "purge contains",
    "aliases": [],
    "arguments": "[text] [amount]",
    "description": "Delete messages containing specific text",
    "category": "moderation",
    "usage": ",purge contains [text] [amount]"
  },
  {
    "name": "purge reactions",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete messages with reactions",
    "category": "moderation",
    "usage": ",purge reactions [amount]"
  },
  {
    "name": "purge mentions",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete messages with @mentions",
    "category": "moderation",
    "usage": ",purge mentions [amount]"
  },
  {
    "name": "purge links",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Delete messages containing links",
    "category": "moderation",
    "usage": ",purge links [amount]"
  },
  {
    "name": "setup",
    "aliases": [],
    "arguments": "[mute]",
    "description": "Interactive setup for server systems like mute roles",
    "category": "management",
    "usage": ",setup [mute]"
  },
  {
    "name": "setupmute",
    "aliases": [],
    "arguments": "[]",
    "description": "Set up mute role system (hidden alias)",
    "category": "management",
    "usage": ",setupmute []"
  },
  {
    "name": "sync",
    "aliases": [],
    "arguments": "[mute|jail]",
    "description": "Synchronize mute or jail role permissions across all channels",
    "category": "management",
    "usage": ",sync [mute|jail]"
  },
  {
    "name": "imute",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Mute member from sending images and attachments",
    "category": "management",
    "usage": ",imute [@user] [reason]"
  },
  {
    "name": "rmute",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Mute member from adding reactions to messages",
    "category": "management",
    "usage": ",rmute [@user] [reason]"
  },
  {
    "name": "iunmute",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Unmute member from image restrictions",
    "category": "management",
    "usage": ",iunmute [@user] [reason]"
  },
  {
    "name": "runmute",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Unmute member from reaction restrictions",
    "category": "management",
    "usage": ",runmute [@user] [reason]"
  },
  {
    "name": "setme",
    "aliases": [],
    "arguments": "[]",
    "description": "Set up jail system (hidden command)",
    "category": "management",
    "usage": ",setme []"
  },
  {
    "name": "jail",
    "aliases": [],
    "arguments": "[@user] [duration] [reason]",
    "description": "Jail member by removing all roles for specified duration",
    "category": "management",
    "usage": ",jail [@user] [duration] [reason]"
  },
  {
    "name": "unjail",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Remove member from jail and restore their roles",
    "category": "management",
    "usage": ",unjail [@user]"
  },
  {
    "name": "lock",
    "aliases": [],
    "arguments": "[]",
    "description": "Lock current channel from @everyone",
    "category": "management",
    "usage": ",lock []"
  },
  {
    "name": "lock all",
    "aliases": [],
    "arguments": "[]",
    "description": "Lock all channels in server from @everyone",
    "category": "management",
    "usage": ",lock all []"
  },
  {
    "name": "unlock",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Unlock specified channel for @everyone",
    "category": "management",
    "usage": ",unlock [#channel]"
  },
  {
    "name": "slowmode",
    "aliases": [],
    "arguments": "[duration|off]",
    "description": "Set or disable slowmode for current channel",
    "category": "management",
    "usage": ",slowmode [duration|off]"
  },
  {
    "name": "boosts",
    "aliases": [],
    "arguments": "[]",
    "description": "Display list of all server boosters",
    "category": "info",
    "usage": ",boosts []"
  },
  {
    "name": "pin",
    "aliases": [],
    "arguments": "[message_id/link]",
    "description": "Pin message by ID, link, or reply reference",
    "category": "management",
    "usage": ",pin [message_id/link]"
  },
  {
    "name": "unpin",
    "aliases": [],
    "arguments": "[message_id/link]",
    "description": "Unpin message by ID, link, or reply reference",
    "category": "management",
    "usage": ",unpin [message_id/link]"
  },
  {
    "name": "r toggle",
    "aliases": [],
    "arguments": "[@user] [@role]",
    "description": "Toggle role on or off for user",
    "category": "roles",
    "usage": ",r toggle [@user] [@role]"
  },
  {
    "name": "r restore",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Restore all removed roles to user",
    "category": "roles",
    "usage": ",r restore [@user]"
  },
  {
    "name": "r rename",
    "aliases": [],
    "arguments": "[@role] [name]",
    "description": "Rename existing role",
    "category": "roles",
    "usage": ",r rename [@role] [name]"
  },
  {
    "name": "r delete",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Delete role from server",
    "category": "roles",
    "usage": ",r delete [@role]"
  },
  {
    "name": "r create",
    "aliases": [],
    "arguments": "[name] [color]",
    "description": "Create new role with name and optional color",
    "category": "roles",
    "usage": ",r create [name] [color]"
  },
  {
    "name": "r dump",
    "aliases": [],
    "arguments": "[@role]",
    "description": "List all members who have specific role",
    "category": "roles",
    "usage": ",r dump [@role]"
  },
  {
    "name": "r humans",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Add role to all human members (not bots)",
    "category": "roles",
    "usage": ",r humans [@role]"
  },
  {
    "name": "r has",
    "aliases": [],
    "arguments": "[@user] [@role]",
    "description": "Check if user has specific role",
    "category": "roles",
    "usage": ",r has [@user] [@role]"
  },
  {
    "name": "r color",
    "aliases": [],
    "arguments": "[@role] [color]",
    "description": "Change role color using hex or name",
    "category": "roles",
    "usage": ",r color [@role] [color]"
  },
  {
    "name": "r icon",
    "aliases": [],
    "arguments": "[@role] [emoji/url]",
    "description": "Set role icon using emoji or image URL",
    "category": "roles",
    "usage": ",r icon [@role] [emoji/url]"
  },
  {
    "name": "ir",
    "aliases": [],
    "arguments": "[@role]",
    "description": "List all members with specific role (in-role)",
    "category": "roles",
    "usage": ",ir [@role]"
  },
  {
    "name": "autorole add",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Add auto-assigned role for new members",
    "category": "roles",
    "usage": ",autorole add [@role]"
  },
  {
    "name": "autorole remove",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Remove auto-assigned role",
    "category": "roles",
    "usage": ",autorole remove [@role]"
  },
  {
    "name": "strip",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Remove all roles from member",
    "category": "roles",
    "usage": ",strip [@user] [reason]"
  },
  {
    "name": "nick",
    "aliases": [],
    "arguments": "[@user] [nickname]",
    "description": "Change member's nickname",
    "category": "roles",
    "usage": ",nick [@user] [nickname]"
  },
  {
    "name": "fn",
    "aliases": [],
    "arguments": "[@user] [nickname]",
    "description": "Force member's nickname (prevents self-changing)",
    "category": "roles",
    "usage": ",fn [@user] [nickname]"
  },
  {
    "name": "talk",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Grant role permission to send messages in current channel",
    "category": "channels",
    "usage": ",talk [@role]"
  },
  {
    "name": "untalk",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Remove role's permission to send messages in current channel",
    "category": "channels",
    "usage": ",untalk [@role]"
  },
  {
    "name": "hide",
    "aliases": [],
    "arguments": "[]",
    "description": "Hide current channel from @everyone",
    "category": "channels",
    "usage": ",hide []"
  },
  {
    "name": "hide all",
    "aliases": [],
    "arguments": "[]",
    "description": "Hide all channels from @everyone",
    "category": "channels",
    "usage": ",hide all []"
  },
  {
    "name": "unhide",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Unhide channel from @everyone",
    "category": "channels",
    "usage": ",unhide [#channel]"
  },
  {
    "name": "d",
    "aliases": [],
    "arguments": "[@user] [voice channel]",
    "description": "Drag user to specified voice channel",
    "category": "voice",
    "usage": ",d [@user] [voice channel]"
  },
  {
    "name": "massmute",
    "aliases": [],
    "arguments": "[]",
    "description": "Server mute everyone in author's current voice channel",
    "category": "voice",
    "usage": ",massmute []"
  },
  {
    "name": "massdeafen",
    "aliases": [],
    "arguments": "[]",
    "description": "Server deafen everyone in author's current voice channel",
    "category": "voice",
    "usage": ",massdeafen []"
  },
  {
    "name": "perms",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Display fake and native permissions for user",
    "category": "voice",
    "usage": ",perms [@user]"
  },
  {
    "name": "mh",
    "aliases": [],
    "arguments": "[@user]",
    "description": "View moderation history and cases for user",
    "category": "modlog",
    "usage": ",mh [@user]"
  },
  {
    "name": "rank",
    "aliases": [],
    "arguments": "[@user]",
    "description": "View XP rank, level, and progress for user",
    "category": "leveling",
    "usage": ",rank [@user]"
  },
  {
    "name": "leaderboard",
    "aliases": [],
    "arguments": "[voice|message]",
    "description": "View activity leaderboard for voice or messages",
    "category": "leveling",
    "usage": ",leaderboard [voice|message]"
  },
  {
    "name": "levels unlock",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable XP tracking system in server",
    "category": "leveling",
    "usage": ",levels unlock []"
  },
  {
    "name": "levels lock",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable XP tracking system in server",
    "category": "leveling",
    "usage": ",levels lock []"
  },
  {
    "name": "levels ignore",
    "aliases": [],
    "arguments": "[#channel/@role]",
    "description": "Toggle ignore status for channel or role in XP tracking",
    "category": "leveling",
    "usage": ",levels ignore [#channel/@role]"
  },
  {
    "name": "levels list",
    "aliases": [],
    "arguments": "[]",
    "description": "Show all ignored channels and roles for XP tracking",
    "category": "leveling",
    "usage": ",levels list []"
  },
  {
    "name": "levels add",
    "aliases": [],
    "arguments": "[@role] [level]",
    "description": "Add level role reward at specified level",
    "category": "leveling",
    "usage": ",levels add [@role] [level]"
  },
  {
    "name": "levels remove",
    "aliases": [],
    "arguments": "[level]",
    "description": "Remove level role reward at specified level",
    "category": "leveling",
    "usage": ",levels remove [level]"
  },
  {
    "name": "levels sync",
    "aliases": [],
    "arguments": "[]",
    "description": "Award level roles to all users based on current XP",
    "category": "leveling",
    "usage": ",levels sync []"
  },
  {
    "name": "levels stackroles",
    "aliases": [],
    "arguments": "[on|off]",
    "description": "Toggle role stacking mode (keep lower level roles)",
    "category": "leveling",
    "usage": ",levels stackroles [on|off]"
  },
  {
    "name": "levels message",
    "aliases": [],
    "arguments": "[template]",
    "description": "Set custom level-up message template with variables",
    "category": "leveling",
    "usage": ",levels message [template]"
  },
  {
    "name": "levels messagemode",
    "aliases": [],
    "arguments": "[pm|context|#channel|none]",
    "description": "Set level-up message destination",
    "category": "leveling",
    "usage": ",levels messagemode [pm|context|#channel|none]"
  },
  {
    "name": "levels setrate",
    "aliases": [],
    "arguments": "[multiplier]",
    "description": "Set XP multiplier rate for server",
    "category": "leveling",
    "usage": ",levels setrate [multiplier]"
  },
  {
    "name": "levels roles",
    "aliases": [],
    "arguments": "[]",
    "description": "Show all level rewards and your progress toward them",
    "category": "leveling",
    "usage": ",levels roles []"
  },
  {
    "name": "levels leaderboard",
    "aliases": [],
    "arguments": "[]",
    "description": "Show top 10 users by XP with ranks",
    "category": "leveling",
    "usage": ",levels leaderboard []"
  },
  {
    "name": "levels rank",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Show user's rank and level progress with XP bar",
    "category": "leveling",
    "usage": ",levels rank [@user]"
  },
  {
    "name": "levels setlevel",
    "aliases": [],
    "arguments": "[@user] [level]",
    "description": "Set user's level directly (admin only)",
    "category": "leveling",
    "usage": ",levels setlevel [@user] [level]"
  },
  {
    "name": "levels setxp",
    "aliases": [],
    "arguments": "[@user] [xp]",
    "description": "Set user's XP directly (admin only)",
    "category": "leveling",
    "usage": ",levels setxp [@user] [xp]"
  },
  {
    "name": "streak",
    "aliases": [],
    "arguments": "[]",
    "description": "View streak leaderboard and configured rewards",
    "category": "leveling",
    "usage": ",streak []"
  },
  {
    "name": "streak admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Open interactive streak system admin panel",
    "category": "leveling",
    "usage": ",streak admin []"
  },
  {
    "name": "streak on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable streak system in server",
    "category": "leveling",
    "usage": ",streak on []"
  },
  {
    "name": "streak off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable streak system in server",
    "category": "leveling",
    "usage": ",streak off []"
  },
  {
    "name": "streak dm",
    "aliases": [],
    "arguments": "[]",
    "description": "Toggle DM notifications for streak updates",
    "category": "leveling",
    "usage": ",streak dm []"
  },
  {
    "name": "streak check",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Check streak progress and statistics for user",
    "category": "leveling",
    "usage": ",streak check [@user]"
  },
  {
    "name": "pledge",
    "aliases": [],
    "arguments": "[]",
    "description": "Join the pledge system and receive pledge role",
    "category": "leveling",
    "usage": ",pledge []"
  },
  {
    "name": "pledge admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Open interactive pledge admin panel for configuration",
    "category": "leveling",
    "usage": ",pledge admin []"
  },
  {
    "name": "pledge status",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Check pledge progress and remaining requirements for user",
    "category": "leveling",
    "usage": ",pledge status [@user]"
  },
  {
    "name": "pledge leave",
    "aliases": [],
    "arguments": "[]",
    "description": "Leave current pledge and forfeit progress",
    "category": "leveling",
    "usage": ",pledge leave []"
  },
  {
    "name": "pledge help",
    "aliases": [],
    "arguments": "[]",
    "description": "Show detailed pledge system help and rules",
    "category": "leveling",
    "usage": ",pledge help []"
  },
  {
    "name": "fg",
    "aliases": [],
    "arguments": "[]",
    "description": "Display Friend Group status and personal rank",
    "category": "leveling",
    "usage": ",fg []"
  },
  {
    "name": "fg admin",
    "aliases": [],
    "arguments": "[]",
    "description": "Open FG admin panel for configuration",
    "category": "leveling",
    "usage": ",fg admin []"
  },
  {
    "name": "fg rank",
    "aliases": [],
    "arguments": "[]",
    "description": "Show your rank in all Friend Groups you belong to",
    "category": "leveling",
    "usage": ",fg rank []"
  },
  {
    "name": "fg mvp",
    "aliases": [],
    "arguments": "[]",
    "description": "Show MVP (most active member) of your Friend Groups",
    "category": "leveling",
    "usage": ",fg mvp []"
  },
  {
    "name": "fg top",
    "aliases": [],
    "arguments": "[]",
    "description": "Show top 10 contributors in your Friend Group",
    "category": "leveling",
    "usage": ",fg top []"
  },
  {
    "name": "fg daily",
    "aliases": [],
    "arguments": "[]",
    "description": "Show today's top contributors in your Friend Group",
    "category": "leveling",
    "usage": ",fg daily []"
  },
  {
    "name": "fg challenge",
    "aliases": [],
    "arguments": "[]",
    "description": "Show current FG challenge status and progress",
    "category": "leveling",
    "usage": ",fg challenge []"
  },
  {
    "name": "fg challenge start",
    "aliases": [],
    "arguments": "[@role1] [@role2] [duration]",
    "description": "Start new FG challenge between two roles",
    "category": "leveling",
    "usage": ",fg challenge start [@role1] [@role2] [duration]"
  },
  {
    "name": "fg challenge end",
    "aliases": [],
    "arguments": "[]",
    "description": "Manually end current FG challenge early",
    "category": "leveling",
    "usage": ",fg challenge end []"
  },
  {
    "name": "fg challenge cancel",
    "aliases": [],
    "arguments": "[]",
    "description": "Cancel current FG challenge without declaring winner",
    "category": "leveling",
    "usage": ",fg challenge cancel []"
  },
  {
    "name": "gw start",
    "aliases": [],
    "arguments": "[duration] [#channel] [winners] [prize]",
    "description": "Start new giveaway with optional requirement flags",
    "category": "giveaways",
    "usage": ",gw start [duration] [#channel] [winners] [prize]"
  },
  {
    "name": "gw end",
    "aliases": [],
    "arguments": "[message_link]",
    "description": "Manually end giveaway early and select winners",
    "category": "giveaways",
    "usage": ",gw end [message_link]"
  },
  {
    "name": "gw edit",
    "aliases": [],
    "arguments": "[message_link] [host|duration|prize] [value]",
    "description": "Edit giveaway host, duration, or prize",
    "category": "giveaways",
    "usage": ",gw edit [message_link] [host|duration|prize] [value]"
  },
  {
    "name": "gw reroll",
    "aliases": [],
    "arguments": "[message_link]",
    "description": "Reroll winners for already ended giveaway",
    "category": "giveaways",
    "usage": ",gw reroll [message_link]"
  },
  {
    "name": "gw history",
    "aliases": [],
    "arguments": "[]",
    "description": "Show giveaway history from last 6 hours",
    "category": "giveaways",
    "usage": ",gw history []"
  },
  {
    "name": "prefix",
    "aliases": [],
    "arguments": "[prefix]",
    "description": "Set bot command prefix for server",
    "category": "config",
    "usage": ",prefix [prefix]"
  },
  {
    "name": "welc channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set welcome message channel",
    "category": "config",
    "usage": ",welc channel [#channel]"
  },
  {
    "name": "welc edit",
    "aliases": [],
    "arguments": "[message]",
    "description": "Edit welcome message template with variables",
    "category": "config",
    "usage": ",welc edit [message]"
  },
  {
    "name": "welc preview",
    "aliases": [],
    "arguments": "[]",
    "description": "Send preview of welcome message",
    "category": "config",
    "usage": ",welc preview []"
  },
  {
    "name": "goodbye channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set goodbye message channel",
    "category": "config",
    "usage": ",goodbye channel [#channel]"
  },
  {
    "name": "goodbye edit",
    "aliases": [],
    "arguments": "[message]",
    "description": "Edit goodbye message template with variables",
    "category": "config",
    "usage": ",goodbye edit [message]"
  },
  {
    "name": "goodbye preview",
    "aliases": [],
    "arguments": "[]",
    "description": "Send preview of goodbye message",
    "category": "config",
    "usage": ",goodbye preview []"
  },
  {
    "name": "dmonboard toggle",
    "aliases": [],
    "arguments": "[]",
    "description": "Toggle DM on member join feature",
    "category": "config",
    "usage": ",dmonboard toggle []"
  },
  {
    "name": "dmonboard message",
    "aliases": [],
    "arguments": "[message]",
    "description": "Set DM message sent to new members on join",
    "category": "config",
    "usage": ",dmonboard message [message]"
  },
  {
    "name": "boost channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set boost announcement channel",
    "category": "config",
    "usage": ",boost channel [#channel]"
  },
  {
    "name": "boost message",
    "aliases": [],
    "arguments": "[message]",
    "description": "Set boost announcement message template",
    "category": "config",
    "usage": ",boost message [message]"
  },
  {
    "name": "starboard channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set starboard channel for starred messages",
    "category": "config",
    "usage": ",starboard channel [#channel]"
  },
  {
    "name": "starboard count",
    "aliases": [],
    "arguments": "[number]",
    "description": "Set star reaction count threshold for starboard",
    "category": "config",
    "usage": ",starboard count [number]"
  },
  {
    "name": "vanity role",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Set vanity role awarded for displaying server tag",
    "category": "config",
    "usage": ",vanity role [@role]"
  },
  {
    "name": "vanity tag",
    "aliases": [],
    "arguments": "[tag]",
    "description": "Set required server tag text for vanity role",
    "category": "config",
    "usage": ",vanity tag [tag]"
  },
  {
    "name": "vanity add",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Manually give vanity role to user",
    "category": "config",
    "usage": ",vanity add [@user]"
  },
  {
    "name": "vanity remove",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Manually remove vanity role from user",
    "category": "config",
    "usage": ",vanity remove [@user]"
  },
  {
    "name": "ec add",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Add Event Control role for channel management",
    "category": "config",
    "usage": ",ec add [@role]"
  },
  {
    "name": "ec remove",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Remove Event Control role",
    "category": "config",
    "usage": ",ec remove [@role]"
  },
  {
    "name": "ec list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all Event Control roles",
    "category": "config",
    "usage": ",ec list []"
  },
  {
    "name": "ec disable",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable entire Event Control system",
    "category": "config",
    "usage": ",ec disable []"
  },
  {
    "name": "vcpush toggle",
    "aliases": [],
    "arguments": "[]",
    "description": "Toggle VCPush auto-posting feature",
    "category": "config",
    "usage": ",vcpush toggle []"
  },
  {
    "name": "vcpush channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set VCPush announcement channel",
    "category": "config",
    "usage": ",vcpush channel [#channel]"
  },
  {
    "name": "vcpush delay",
    "aliases": [],
    "arguments": "[minutes]",
    "description": "Set minimum delay between VCPush announcements",
    "category": "config",
    "usage": ",vcpush delay [minutes]"
  },
  {
    "name": "vcpush message",
    "aliases": [],
    "arguments": "[message]",
    "description": "Set VCPush announcement message template",
    "category": "config",
    "usage": ",vcpush message [message]"
  },
  {
    "name": "vcpush window",
    "aliases": [],
    "arguments": "[start_hour] [end_hour]",
    "description": "Set active time window for VCPush (24h format)",
    "category": "config",
    "usage": ",vcpush window [start_hour] [end_hour]"
  },
  {
    "name": "fp grant",
    "aliases": [],
    "arguments": "[@user/@role] [permission(s)]",
    "description": "Grant fake permissions to user or role",
    "category": "permissions",
    "usage": ",fp grant [@user/@role] [permission(s)]"
  },
  {
    "name": "fp remove",
    "aliases": [],
    "arguments": "[@user/@role] [permission(s)]",
    "description": "Remove fake permissions from user or role",
    "category": "permissions",
    "usage": ",fp remove [@user/@role] [permission(s)]"
  },
  {
    "name": "fp list",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "List all permissions for user, role, or entire server",
    "category": "permissions",
    "usage": ",fp list [@user/@role]"
  },
  {
    "name": "fp reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset and clear all fake permissions in server",
    "category": "permissions",
    "usage": ",fp reset []"
  },
  {
    "name": "lb global",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Post global activity leaderboard message with buttons",
    "category": "config",
    "usage": ",lb global [#channel]"
  },
  {
    "name": "lb fg",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Post Friend Group leaderboard message with buttons",
    "category": "config",
    "usage": ",lb fg [#channel]"
  },
  {
    "name": "lb reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset all leaderboard data for server",
    "category": "config",
    "usage": ",lb reset []"
  },
  {
    "name": "poj",
    "aliases": [],
    "arguments": "[]",
    "description": "Ping on join system configuration",
    "category": "config",
    "usage": ",poj []"
  },
  {
    "name": "doj preview",
    "aliases": [],
    "arguments": "[]",
    "description": "Preview DM on join message",
    "category": "config",
    "usage": ",doj preview []"
  },
  {
    "name": "doj set",
    "aliases": [],
    "arguments": "[message]",
    "description": "Set DM on join message template",
    "category": "config",
    "usage": ",doj set [message]"
  },
  {
    "name": "doj on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable DM on join feature",
    "category": "config",
    "usage": ",doj on []"
  },
  {
    "name": "doj off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable DM on join feature",
    "category": "config",
    "usage": ",doj off []"
  },
  {
    "name": "setpfp",
    "aliases": [],
    "arguments": "[image]",
    "description": "Set server profile picture from attachment or URL",
    "category": "config",
    "usage": ",setpfp [image]"
  },
  {
    "name": "setbanner",
    "aliases": [],
    "arguments": "[image]",
    "description": "Set server banner from attachment or URL (hidden)",
    "category": "config",
    "usage": ",setbanner [image]"
  },
  {
    "name": "setsplash",
    "aliases": [],
    "arguments": "[image]",
    "description": "Set server invite splash from attachment or URL (hidden)",
    "category": "config",
    "usage": ",setsplash [image]"
  },
  {
    "name": "vc setup",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Setup VoiceMaster system with interface channel creation",
    "category": "voice",
    "usage": ",vc setup [@role]"
  },
  {
    "name": "vc intr",
    "aliases": [],
    "arguments": "[]",
    "description": "Show VoiceMaster admin interface panel",
    "category": "voice",
    "usage": ",vc intr []"
  },
  {
    "name": "vc category",
    "aliases": [],
    "arguments": "[category]",
    "description": "Change VoiceMaster category for temporary channels",
    "category": "voice",
    "usage": ",vc category [category]"
  },
  {
    "name": "vc name",
    "aliases": [],
    "arguments": "[format]",
    "description": "Change default channel name format with variables",
    "category": "voice",
    "usage": ",vc name [format]"
  },
  {
    "name": "vc bypass add",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Add role to VoiceMaster bypass list",
    "category": "voice",
    "usage": ",vc bypass add [@role]"
  },
  {
    "name": "vc bypass remove",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Remove role from VoiceMaster bypass list",
    "category": "voice",
    "usage": ",vc bypass remove [@role]"
  },
  {
    "name": "vc bypass list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all VoiceMaster bypass roles",
    "category": "voice",
    "usage": ",vc bypass list []"
  },
  {
    "name": "vc bypass sync",
    "aliases": [],
    "arguments": "[]",
    "description": "Sync bypass roles permissions to all VoiceMaster channels",
    "category": "voice",
    "usage": ",vc bypass sync []"
  },
  {
    "name": "vc kick",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Kick user from your owned voice channel",
    "category": "voice",
    "usage": ",vc kick [@user]"
  },
  {
    "name": "vc ban",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Ban user from your owned voice channel",
    "category": "voice",
    "usage": ",vc ban [@user]"
  },
  {
    "name": "vc unban",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Unban user from your owned voice channel",
    "category": "voice",
    "usage": ",vc unban [@user]"
  },
  {
    "name": "vc permit",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Allow specific user to join your locked voice channel",
    "category": "voice",
    "usage": ",vc permit [@user]"
  },
  {
    "name": "vc rename",
    "aliases": [],
    "arguments": "[name]",
    "description": "Rename your owned voice channel",
    "category": "voice",
    "usage": ",vc rename [name]"
  },
  {
    "name": "vc transfer",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Transfer voice channel ownership to another user",
    "category": "voice",
    "usage": ",vc transfer [@user]"
  },
  {
    "name": "vc lock",
    "aliases": [],
    "arguments": "[]",
    "description": "Lock your voice channel from new joins",
    "category": "voice",
    "usage": ",vc lock []"
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
    "name": "vc limit",
    "aliases": [],
    "arguments": "[number]",
    "description": "Set user limit for your voice channel (0-99)",
    "category": "voice",
    "usage": ",vc limit [number]"
  },
  {
    "name": "vc claim",
    "aliases": [],
    "arguments": "[]",
    "description": "Claim ownership of empty voice channel",
    "category": "voice",
    "usage": ",vc claim []"
  },
  {
    "name": "vc hide",
    "aliases": [],
    "arguments": "[]",
    "description": "Hide your voice channel from @everyone",
    "category": "voice",
    "usage": ",vc hide []"
  },
  {
    "name": "vc unhide",
    "aliases": [],
    "arguments": "[]",
    "description": "Unhide your voice channel to @everyone",
    "category": "voice",
    "usage": ",vc unhide []"
  },
  {
    "name": "family marry",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Propose marriage to user (requires acceptance)",
    "category": "family",
    "usage": ",family marry [@user]"
  },
  {
    "name": "family divorce",
    "aliases": [],
    "arguments": "[]",
    "description": "Divorce your current partner",
    "category": "family",
    "usage": ",family divorce []"
  },
  {
    "name": "family cuck",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Cheat on partner with another user",
    "category": "family",
    "usage": ",family cuck [@user]"
  },
  {
    "name": "family partner",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Check partner for yourself or another user",
    "category": "family",
    "usage": ",family partner [@user]"
  },
  {
    "name": "family adopt",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Adopt user as your child (requires acceptance)",
    "category": "family",
    "usage": ",family adopt [@user]"
  },
  {
    "name": "family runaway",
    "aliases": [],
    "arguments": "[]",
    "description": "Run away from your parent and become independent",
    "category": "family",
    "usage": ",family runaway []"
  },
  {
    "name": "family disown",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Disown one of your children",
    "category": "family",
    "usage": ",family disown [@user]"
  },
  {
    "name": "family parent",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Check parent for yourself or another user",
    "category": "family",
    "usage": ",family parent [@user]"
  },
  {
    "name": "family relate",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Check how two users are related",
    "category": "family",
    "usage": ",family relate [@user1] [@user2]"
  },
  {
    "name": "family ship",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Check romantic compatibility percentage between users",
    "category": "family",
    "usage": ",family ship [@user1] [@user2]"
  },
  {
    "name": "family tree",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Display family tree visualization with Graphviz",
    "category": "family",
    "usage": ",family tree [@user]"
  },
  {
    "name": "family game quiz",
    "aliases": [],
    "arguments": "[]",
    "description": "Play interactive Love Quiz game with your partner",
    "category": "family",
    "usage": ",family game quiz []"
  },
  {
    "name": "family test married",
    "aliases": [],
    "arguments": "[]",
    "description": "Generate sample married couple tree (testing only)",
    "category": "family",
    "usage": ",family test married []"
  },
  {
    "name": "family test full",
    "aliases": [],
    "arguments": "[]",
    "description": "Generate full sample family tree (testing only)",
    "category": "family",
    "usage": ",family test full []"
  },
  {
    "name": "family admin wipe",
    "aliases": [],
    "arguments": "[]",
    "description": "Wipe all global family data (requires confirmation)",
    "category": "family",
    "usage": ",family admin wipe []"
  },
  {
    "name": "family admin reset",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Reset specific user's family data globally",
    "category": "family",
    "usage": ",family admin reset [@user]"
  },
  {
    "name": "family admin cleantest",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove leaked test data from database",
    "category": "family",
    "usage": ",family admin cleantest []"
  },
  {
    "name": "blacktea",
    "aliases": [],
    "arguments": "[]",
    "description": "Start interactive word battle royale game",
    "category": "games",
    "usage": ",blacktea []"
  },
  {
    "name": "media caption",
    "aliases": [],
    "arguments": "[caption]",
    "description": "Add text caption to replied image",
    "category": "media",
    "usage": ",media caption [caption]"
  },
  {
    "name": "media quote",
    "aliases": [],
    "arguments": "[]",
    "description": "Create quote card from replied message with avatar",
    "category": "media",
    "usage": ",media quote []"
  },
  {
    "name": "search",
    "aliases": [],
    "arguments": "[query]",
    "description": "Search the web using Google with 10s server cooldown",
    "category": "media",
    "usage": ",search [query]"
  },
  {
    "name": "image",
    "aliases": [],
    "arguments": "[query]",
    "description": "Search for images using Google Images",
    "category": "media",
    "usage": ",image [query]"
  },
  {
    "name": "define",
    "aliases": [],
    "arguments": "[word]",
    "description": "Get dictionary definition of word with pronunciation",
    "category": "media",
    "usage": ",define [word]"
  },
  {
    "name": "ud",
    "aliases": [],
    "arguments": "[word]",
    "description": "Get Urban Dictionary definition with examples",
    "category": "media",
    "usage": ",ud [word]"
  },
  {
    "name": "ttt",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Play tic-tac-toe game against another user",
    "category": "games",
    "usage": ",ttt [@user]"
  },
  {
    "name": "ttt stats",
    "aliases": [],
    "arguments": "[]",
    "description": "View your tic-tac-toe win/loss statistics",
    "category": "games",
    "usage": ",ttt stats []"
  },
  {
    "name": "8ball",
    "aliases": [],
    "arguments": "[question]",
    "description": "Ask magic 8ball a yes/no question",
    "category": "games",
    "usage": ",8ball [question]"
  },
  {
    "name": "coinflip",
    "aliases": [],
    "arguments": "[]",
    "description": "Flip a coin and get heads or tails",
    "category": "games",
    "usage": ",coinflip []"
  },
  {
    "name": "dice",
    "aliases": [],
    "arguments": "[sides]",
    "description": "Roll dice with optional number of sides (default 6)",
    "category": "games",
    "usage": ",dice [sides]"
  },
  {
    "name": "choose",
    "aliases": [],
    "arguments": "[option1|option2...]",
    "description": "Choose random option from pipe-separated list",
    "category": "games",
    "usage": ",choose [option1|option2...]"
  },
  {
    "name": "rate",
    "aliases": [],
    "arguments": "[thing]",
    "description": "Rate something out of 10 randomly",
    "category": "games",
    "usage": ",rate [thing]"
  },
  {
    "name": "blackjack",
    "aliases": [],
    "arguments": "[bet]",
    "description": "Play blackjack card game with betting",
    "category": "games",
    "usage": ",blackjack [bet]"
  },
  {
    "name": "slots",
    "aliases": [],
    "arguments": "[bet]",
    "description": "Play slots machine game with betting",
    "category": "games",
    "usage": ",slots [bet]"
  },
  {
    "name": "rps",
    "aliases": [],
    "arguments": "[@user] [rock|paper|scissors]",
    "description": "Play rock paper scissors against user",
    "category": "games",
    "usage": ",rps [@user] [rock|paper|scissors]"
  },
  {
    "name": "say",
    "aliases": [],
    "arguments": "[message]",
    "description": "Make bot repeat your message in current channel",
    "category": "chat",
    "usage": ",say [message]"
  },
  {
    "name": "embed",
    "aliases": [],
    "arguments": "[title|description]",
    "description": "Create custom embed with title and description",
    "category": "chat",
    "usage": ",embed [title|description]"
  },
  {
    "name": "poll",
    "aliases": [],
    "arguments": "[question|option1|option2...]",
    "description": "Create poll with question and options",
    "category": "chat",
    "usage": ",poll [question|option1|option2...]"
  },
  {
    "name": "remind",
    "aliases": [],
    "arguments": "[duration] [message]",
    "description": "Set reminder for yourself with custom message",
    "category": "chat",
    "usage": ",remind [duration] [message]"
  },
  {
    "name": "urban",
    "aliases": [],
    "arguments": "[word]",
    "description": "Search Urban Dictionary for word definition",
    "category": "media",
    "usage": ",urban [word]"
  },
  {
    "name": "weather",
    "aliases": [],
    "arguments": "[location]",
    "description": "Check current weather for specified location",
    "category": "media",
    "usage": ",weather [location]"
  },
  {
    "name": "translate",
    "aliases": [],
    "arguments": "[language] [text]",
    "description": "Translate text to target language",
    "category": "media",
    "usage": ",translate [language] [text]"
  },
  {
    "name": "qr",
    "aliases": [],
    "arguments": "[text]",
    "description": "Generate QR code from text or URL",
    "category": "media",
    "usage": ",qr [text]"
  },
  {
    "name": "shorten",
    "aliases": [],
    "arguments": "[url]",
    "description": "Shorten URL using URL shortening service",
    "category": "media",
    "usage": ",shorten [url]"
  },
  {
    "name": "wiki",
    "aliases": [],
    "arguments": "[query]",
    "description": "Search Wikipedia and get article summary",
    "category": "media",
    "usage": ",wiki [query]"
  },
  {
    "name": "reset",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Reset fakeping cooldowns for specified users",
    "category": "chat",
    "usage": ",reset [@user]"
  },
  {
    "name": "list",
    "aliases": [],
    "arguments": "[list_type]",
    "description": "List various server data by type",
    "category": "chat",
    "usage": ",list [list_type]"
  },
  {
    "name": "wipe",
    "aliases": [],
    "arguments": "[]",
    "description": "Wipe specific server data category",
    "category": "chat",
    "usage": ",wipe []"
  },
  {
    "name": "pinghere",
    "aliases": [],
    "arguments": "[args]",
    "description": "Ping @here with custom message",
    "category": "chat",
    "usage": ",pinghere [args]"
  },
  {
    "name": "pingeveryone",
    "aliases": [],
    "arguments": "[args]",
    "description": "Ping @everyone with custom message",
    "category": "chat",
    "usage": ",pingeveryone [args]"
  },
  {
    "name": "emoji add",
    "aliases": [],
    "arguments": "[emojis...]",
    "description": "Add emojis to server from attachments or URLs",
    "category": "emoji",
    "usage": ",emoji add [emojis...]"
  },
  {
    "name": "emoji remove",
    "aliases": [],
    "arguments": "[emojis...]",
    "description": "Remove emojis from server by name or emoji",
    "category": "emoji",
    "usage": ",emoji remove [emojis...]"
  },
  {
    "name": "emoji info",
    "aliases": [],
    "arguments": "[emoji]",
    "description": "Display detailed information about emoji",
    "category": "emoji",
    "usage": ",emoji info [emoji]"
  },
  {
    "name": "emojis",
    "aliases": [],
    "arguments": "[]",
    "description": "List all custom emojis in server with IDs",
    "category": "emoji",
    "usage": ",emojis []"
  },
  {
    "name": "sticker add",
    "aliases": [],
    "arguments": "[args...]",
    "description": "Add stickers to server from attachments",
    "category": "emoji",
    "usage": ",sticker add [args...]"
  },
  {
    "name": "sticker remove",
    "aliases": [],
    "arguments": "[sticker_names...]",
    "description": "Remove stickers from server by name",
    "category": "emoji",
    "usage": ",sticker remove [sticker_names...]"
  },
  {
    "name": "sticker info",
    "aliases": [],
    "arguments": "[sticker_name]",
    "description": "Display detailed information about sticker",
    "category": "emoji",
    "usage": ",sticker info [sticker_name]"
  },
  {
    "name": "transcribe",
    "aliases": [],
    "arguments": "[]",
    "description": "Transcribe voice message to text using Deepgram",
    "category": "messages",
    "usage": ",transcribe []"
  },
  {
    "name": "summarise",
    "aliases": [],
    "arguments": "[]",
    "description": "Summarize long message or conversation thread",
    "category": "messages",
    "usage": ",summarise []"
  },
  {
    "name": "s",
    "aliases": [],
    "arguments": "[index]",
    "description": "Display deleted message from current channel by index",
    "category": "messages",
    "usage": ",s [index]"
  },
  {
    "name": "es",
    "aliases": [],
    "arguments": "[index]",
    "description": "Display edited message from current channel by index",
    "category": "messages",
    "usage": ",es [index]"
  },
  {
    "name": "rs",
    "aliases": [],
    "arguments": "[index]",
    "description": "Display removed reaction from current channel by index",
    "category": "messages",
    "usage": ",rs [index]"
  },
  {
    "name": "cs",
    "aliases": [],
    "arguments": "[channel|server]",
    "description": "Clear snipe data for channel or entire server",
    "category": "messages",
    "usage": ",cs [channel|server]"
  },
  {
    "name": "afk",
    "aliases": [],
    "arguments": "[message]",
    "description": "Set AFK status with optional custom message",
    "category": "afk",
    "usage": ",afk [message]"
  },
  {
    "name": "afk",
    "aliases": [],
    "arguments": "[]",
    "description": "Return from AFK and clear AFK status",
    "category": "afk",
    "usage": ",afk []"
  },
  {
    "name": "autoresponder add",
    "aliases": [],
    "arguments": "[trigger, response]",
    "description": "Add new autoresponder trigger with response",
    "category": "autoresponder",
    "usage": ",autoresponder add [trigger, response]"
  },
  {
    "name": "autoresponder remove",
    "aliases": [],
    "arguments": "[trigger]",
    "description": "Remove autoresponder trigger by name",
    "category": "autoresponder",
    "usage": ",autoresponder remove [trigger]"
  },
  {
    "name": "autoresponder update",
    "aliases": [],
    "arguments": "[trigger, new_response]",
    "description": "Update existing autoresponder response",
    "category": "autoresponder",
    "usage": ",autoresponder update [trigger, new_response]"
  },
  {
    "name": "autoresponder list",
    "aliases": [],
    "arguments": "[]",
    "description": "View all configured autoresponder triggers",
    "category": "autoresponder",
    "usage": ",autoresponder list []"
  },
  {
    "name": "autoresponder reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove all autoresponder triggers from server",
    "category": "autoresponder",
    "usage": ",autoresponder reset []"
  },
  {
    "name": "reaction add",
    "aliases": [],
    "arguments": "[emoji] [trigger]",
    "description": "Add emoji auto-reaction to trigger word",
    "category": "autoresponder",
    "usage": ",reaction add [emoji] [trigger]"
  },
  {
    "name": "reaction remove",
    "aliases": [],
    "arguments": "[emoji] [trigger]",
    "description": "Remove emoji auto-reaction from trigger",
    "category": "autoresponder",
    "usage": ",reaction remove [emoji] [trigger]"
  },
  {
    "name": "reaction removeall",
    "aliases": [],
    "arguments": "[trigger]",
    "description": "Remove all emoji auto-reactions from trigger",
    "category": "autoresponder",
    "usage": ",reaction removeall [trigger]"
  },
  {
    "name": "reaction list",
    "aliases": [],
    "arguments": "[]",
    "description": "View all configured reaction triggers",
    "category": "autoresponder",
    "usage": ",reaction list []"
  },
  {
    "name": "ticket setup",
    "aliases": [],
    "arguments": "[]",
    "description": "Interactive guided ticket system setup",
    "category": "tickets",
    "usage": ",ticket setup []"
  },
  {
    "name": "ticket support add",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Add role to support staff team",
    "category": "tickets",
    "usage": ",ticket support add [@role]"
  },
  {
    "name": "ticket support remove",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Remove role from support staff team",
    "category": "tickets",
    "usage": ",ticket support remove [@role]"
  },
  {
    "name": "ticket support list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all support staff roles",
    "category": "tickets",
    "usage": ",ticket support list []"
  },
  {
    "name": "ticket channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set ticket panel channel location",
    "category": "tickets",
    "usage": ",ticket channel [#channel]"
  },
  {
    "name": "ticket log",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Set ticket transcript log channel",
    "category": "tickets",
    "usage": ",ticket log [#channel]"
  },
  {
    "name": "ticket button",
    "aliases": [],
    "arguments": "[(text)] [--message]",
    "description": "Customize ticket button with text",
    "category": "tickets",
    "usage": ",ticket button [(text)] [--message]"
  },
  {
    "name": "ticket button",
    "aliases": [],
    "arguments": "[(emoji)] [--icon]",
    "description": "Customize ticket button with emoji icon",
    "category": "tickets",
    "usage": ",ticket button [(emoji)] [--icon]"
  },
  {
    "name": "ticket refresh",
    "aliases": [],
    "arguments": "[]",
    "description": "Refresh ticket panel message with current settings",
    "category": "tickets",
    "usage": ",ticket refresh []"
  },
  {
    "name": "ticket reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Reset all ticket system settings to default",
    "category": "tickets",
    "usage": ",ticket reset []"
  },
  {
    "name": "ticket close",
    "aliases": [],
    "arguments": "[--delete yes|no]",
    "description": "Close current ticket with optional deletion",
    "category": "tickets",
    "usage": ",ticket close [--delete yes|no]"
  },
  {
    "name": "ticket add",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Add user or role to current ticket",
    "category": "tickets",
    "usage": ",ticket add [@user/@role]"
  },
  {
    "name": "ticket remove",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Remove user or role from current ticket",
    "category": "tickets",
    "usage": ",ticket remove [@user/@role]"
  },
  {
    "name": "ticket rename",
    "aliases": [],
    "arguments": "[name]",
    "description": "Rename current ticket channel",
    "category": "tickets",
    "usage": ",ticket rename [name]"
  },
  {
    "name": "ticket open",
    "aliases": [],
    "arguments": "[]",
    "description": "Reopen previously closed ticket",
    "category": "tickets",
    "usage": ",ticket open []"
  },
  {
    "name": "nuke",
    "aliases": [],
    "arguments": "[]",
    "description": "Nuke and recreate current channel with identical settings",
    "category": "other",
    "usage": ",nuke []"
  },
  {
    "name": "nuke arm",
    "aliases": [],
    "arguments": "[duration] [#channel]",
    "description": "Arm automatic nuke timer for channel (1h-24h)",
    "category": "other",
    "usage": ",nuke arm [duration] [#channel]"
  },
  {
    "name": "nuke disarm",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Disarm automatic nuke timer for channel",
    "category": "other",
    "usage": ",nuke disarm [#channel]"
  },
  {
    "name": "timerlist",
    "aliases": [],
    "arguments": "[]",
    "description": "List all armed nuke timers in server",
    "category": "other",
    "usage": ",timerlist []"
  },
  {
    "name": "panick on",
    "aliases": [],
    "arguments": "[reason]",
    "description": "Enable panic mode server lockdown with reason",
    "category": "other",
    "usage": ",panick on [reason]"
  },
  {
    "name": "panick off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable panic mode and restore normal operations",
    "category": "other",
    "usage": ",panick off []"
  },
  {
    "name": "panick status",
    "aliases": [],
    "arguments": "[]",
    "description": "View current panic mode status and settings",
    "category": "other",
    "usage": ",panick status []"
  },
  {
    "name": "an ban on",
    "aliases": [],
    "arguments": "[--command/--bot/--threshold N/--punishment]",
    "description": "Enable ban protection module with flags",
    "category": "antinuke",
    "usage": ",an ban on [--command/--bot/--threshold N/--punishment]"
  },
  {
    "name": "an ban off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable ban protection module",
    "category": "antinuke",
    "usage": ",an ban off []"
  },
  {
    "name": "an kick on",
    "aliases": [],
    "arguments": "[--command/--bot/--threshold N/--punishment]",
    "description": "Enable kick protection module with flags",
    "category": "antinuke",
    "usage": ",an kick on [--command/--bot/--threshold N/--punishment]"
  },
  {
    "name": "an kick off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable kick protection module",
    "category": "antinuke",
    "usage": ",an kick off []"
  },
  {
    "name": "an webhook on",
    "aliases": [],
    "arguments": "[--threshold N/--punishment]",
    "description": "Enable webhook protection module with flags",
    "category": "antinuke",
    "usage": ",an webhook on [--threshold N/--punishment]"
  },
  {
    "name": "an webhook off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable webhook protection module",
    "category": "antinuke",
    "usage": ",an webhook off []"
  },
  {
    "name": "an channel on",
    "aliases": [],
    "arguments": "[--create/--delete/--update/--threshold N/--punishment]",
    "description": "Enable channel protection module",
    "category": "antinuke",
    "usage": ",an channel on [--create/--delete/--update/--threshold N/--punishment]"
  },
  {
    "name": "an channel off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable channel protection module",
    "category": "antinuke",
    "usage": ",an channel off []"
  },
  {
    "name": "an role on",
    "aliases": [],
    "arguments": "[--create/--delete/--update/--threshold N/--punishment]",
    "description": "Enable role protection module",
    "category": "antinuke",
    "usage": ",an role on [--create/--delete/--update/--threshold N/--punishment]"
  },
  {
    "name": "an role off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable role protection module",
    "category": "antinuke",
    "usage": ",an role off []"
  },
  {
    "name": "an ping on",
    "aliases": [],
    "arguments": "[--threshold N/--punishment]",
    "description": "Enable mass ping protection module with flags",
    "category": "antinuke",
    "usage": ",an ping on [--threshold N/--punishment]"
  },
  {
    "name": "an ping off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable mass ping protection module",
    "category": "antinuke",
    "usage": ",an ping off []"
  },
  {
    "name": "an vanity on",
    "aliases": [],
    "arguments": "[--punishment]",
    "description": "Enable vanity URL protection module with flags",
    "category": "antinuke",
    "usage": ",an vanity on [--punishment]"
  },
  {
    "name": "an vanity off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable vanity URL protection module",
    "category": "antinuke",
    "usage": ",an vanity off []"
  },
  {
    "name": "an botadd on",
    "aliases": [],
    "arguments": "[--threshold N/--punishment]",
    "description": "Enable bot add protection module with flags",
    "category": "antinuke",
    "usage": ",an botadd on [--threshold N/--punishment]"
  },
  {
    "name": "an botadd off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable bot add protection module",
    "category": "antinuke",
    "usage": ",an botadd off []"
  },
  {
    "name": "an permission on",
    "aliases": [],
    "arguments": "[--threshold N/--punishment]",
    "description": "Enable permission changes protection module",
    "category": "antinuke",
    "usage": ",an permission on [--threshold N/--punishment]"
  },
  {
    "name": "an permission off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable permission changes protection module",
    "category": "antinuke",
    "usage": ",an permission off []"
  },
  {
    "name": "an admin",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Add user as antinuke admin with elevated permissions",
    "category": "antinuke",
    "usage": ",an admin [@user]"
  },
  {
    "name": "an unadmin",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Remove user from antinuke admin list",
    "category": "antinuke",
    "usage": ",an unadmin [@user]"
  },
  {
    "name": "an whitelist",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Add user or role to antinuke whitelist",
    "category": "antinuke",
    "usage": ",an whitelist [@user/@role]"
  },
  {
    "name": "an unwhitelist",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Remove user or role from antinuke whitelist",
    "category": "antinuke",
    "usage": ",an unwhitelist [@user/@role]"
  },
  {
    "name": "an config",
    "aliases": [],
    "arguments": "[]",
    "description": "View complete antinuke configuration and settings",
    "category": "antinuke",
    "usage": ",an config []"
  },
  {
    "name": "an list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all whitelisted users, roles, and admins",
    "category": "antinuke",
    "usage": ",an list []"
  },
  {
    "name": "backup create",
    "aliases": [],
    "arguments": "[]",
    "description": "Create complete server backup (channels, roles, settings)",
    "category": "other",
    "usage": ",backup create []"
  },
  {
    "name": "backup load",
    "aliases": [],
    "arguments": "[]",
    "description": "Load your server backup into current server",
    "category": "other",
    "usage": ",backup load []"
  },
  {
    "name": "birthday set",
    "aliases": [],
    "arguments": "[date]",
    "description": "Set your birthday using DD Mon, Mon DD, or DD/MM format",
    "category": "birthday",
    "usage": ",birthday set [date]"
  },
  {
    "name": "birthday view",
    "aliases": [],
    "arguments": "[@user]",
    "description": "View birthday for yourself or another user",
    "category": "birthday",
    "usage": ",birthday view [@user]"
  },
  {
    "name": "birthday role set",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Set role automatically assigned on member birthdays",
    "category": "birthday",
    "usage": ",birthday role set [@role]"
  },
  {
    "name": "birthday role reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove birthday role setting",
    "category": "birthday",
    "usage": ",birthday role reset []"
  },
  {
    "name": "birthday role view",
    "aliases": [],
    "arguments": "[]",
    "description": "View currently configured birthday role",
    "category": "birthday",
    "usage": ",birthday role view []"
  },
  {
    "name": "filter invites on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable automatic invite link deletion filter",
    "category": "filters",
    "usage": ",filter invites on []"
  },
  {
    "name": "filter invites off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable invite link deletion filter",
    "category": "filters",
    "usage": ",filter invites off []"
  },
  {
    "name": "filter spam on",
    "aliases": [],
    "arguments": "[]",
    "description": "Enable spam detection and deletion filter",
    "category": "filters",
    "usage": ",filter spam on []"
  },
  {
    "name": "filter spam off",
    "aliases": [],
    "arguments": "[]",
    "description": "Disable spam detection filter",
    "category": "filters",
    "usage": ",filter spam off []"
  },
  {
    "name": "filter exempt add",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Add user or role to filter exemption list",
    "category": "filters",
    "usage": ",filter exempt add [@user/@role]"
  },
  {
    "name": "filter exempt remove",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Remove user or role from filter exemptions",
    "category": "filters",
    "usage": ",filter exempt remove [@user/@role]"
  },
  {
    "name": "log add",
    "aliases": [],
    "arguments": "[#channel] [message|voice|members]",
    "description": "Add log channel for event type",
    "category": "logs",
    "usage": ",log add [#channel] [message|voice|members]"
  },
  {
    "name": "log remove",
    "aliases": [],
    "arguments": "[#channel] [message|voice|members]",
    "description": "Remove log channel for event type",
    "category": "logs",
    "usage": ",log remove [#channel] [message|voice|members]"
  },
  {
    "name": "log ignore add",
    "aliases": [],
    "arguments": "[#channel/@user/@role]",
    "description": "Add channel, user, or role to logging ignore list",
    "category": "logs",
    "usage": ",log ignore add [#channel/@user/@role]"
  },
  {
    "name": "log ignore remove",
    "aliases": [],
    "arguments": "[#channel/@user/@role]",
    "description": "Remove from logging ignore list",
    "category": "logs",
    "usage": ",log ignore remove [#channel/@user/@role]"
  },
  {
    "name": "boosterrole base",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Set base role position for all booster roles",
    "category": "birthday",
    "usage": ",boosterrole base [@role]"
  },
  {
    "name": "boosterrole",
    "aliases": [],
    "arguments": "[color] [name]",
    "description": "Create custom booster role with color and name",
    "category": "birthday",
    "usage": ",boosterrole [color] [name]"
  },
  {
    "name": "boosterrole rename",
    "aliases": [],
    "arguments": "[name]",
    "description": "Rename your existing booster role",
    "category": "birthday",
    "usage": ",boosterrole rename [name]"
  },
  {
    "name": "boosterrole color",
    "aliases": [],
    "arguments": "[color]",
    "description": "Change your booster role color using hex or name",
    "category": "birthday",
    "usage": ",boosterrole color [color]"
  },
  {
    "name": "boosterrole icon",
    "aliases": [],
    "arguments": "[emoji/url]",
    "description": "Set icon for your booster role",
    "category": "birthday",
    "usage": ",boosterrole icon [emoji/url]"
  },
  {
    "name": "boosterrole remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Delete your custom booster role",
    "category": "birthday",
    "usage": ",boosterrole remove []"
  },
  {
    "name": "boosterrole share",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Share your booster role with another user",
    "category": "birthday",
    "usage": ",boosterrole share [@user]"
  },
  {
    "name": "boosterrole unshare",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Revoke shared booster role from user",
    "category": "birthday",
    "usage": ",boosterrole unshare [@user]"
  },
  {
    "name": "boosterrole list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all custom booster roles in server",
    "category": "birthday",
    "usage": ",boosterrole list []"
  },
  {
    "name": "boosterrole cleanup",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove orphaned booster roles with no owners",
    "category": "birthday",
    "usage": ",boosterrole cleanup []"
  },
  {
    "name": "boosterrole award",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Set role automatically assigned to all boosters",
    "category": "birthday",
    "usage": ",boosterrole award [@role]"
  },
  {
    "name": "boosterrole award view",
    "aliases": [],
    "arguments": "[]",
    "description": "View currently configured award role",
    "category": "birthday",
    "usage": ",boosterrole award view []"
  },
  {
    "name": "boosterrole award remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove award role setting",
    "category": "birthday",
    "usage": ",boosterrole award remove []"
  },
  {
    "name": "timer add",
    "aliases": [],
    "arguments": "[#channel] [interval] [message]",
    "description": "Add automated recurring message timer",
    "category": "timers",
    "usage": ",timer add [#channel] [interval] [message]"
  },
  {
    "name": "timer remove",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Remove timer from specified channel",
    "category": "timers",
    "usage": ",timer remove [#channel]"
  },
  {
    "name": "timer list",
    "aliases": [],
    "arguments": "[]",
    "description": "List all configured timers in server",
    "category": "timers",
    "usage": ",timer list []"
  },
  {
    "name": "timer view",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "View detailed timer information for channel",
    "category": "timers",
    "usage": ",timer view [#channel]"
  },
  {
    "name": "autoresponder",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage autoresponder triggers that send custom messages",
    "category": "automation",
    "usage": ",autoresponder []"
  },
  {
    "name": "autorole",
    "aliases": [],
    "arguments": "[<add|remove> <role>]",
    "description": "Auto-assign roles to new members",
    "category": "roles",
    "usage": ",autorole [<add|remove> <role>]"
  },
  {
    "name": "backup",
    "aliases": [],
    "arguments": "[create | load]",
    "description": "Advanced server backup and restoration system - only server owner/bot owner",
    "category": "admin",
    "usage": ",backup [create | load]"
  },
  {
    "name": "doj",
    "aliases": [],
    "arguments": "[<preview/set/on/off>]",
    "description": "DM On Join system - Send DMs to new members",
    "category": "config",
    "usage": ",doj [<preview/set/on/off>]"
  },
  {
    "name": "ec",
    "aliases": [],
    "arguments": "[<feature> <on/off>]",
    "description": "Event Control - manage server events and restrictions",
    "category": "config",
    "usage": ",ec [<feature> <on/off>]"
  },
  {
    "name": "family",
    "aliases": [],
    "arguments": "[<subcommand>]",
    "description": "Family tree management system",
    "category": "family",
    "usage": ",family [<subcommand>]"
  },
  {
    "name": "family admin",
    "aliases": [],
    "arguments": "[family admin <wipe|reset>]",
    "description": "[ADMIN] Family admin commands",
    "category": "family",
    "usage": ",family admin [family admin <wipe|reset>]"
  },
  {
    "name": "family game",
    "aliases": [],
    "arguments": "[<game>]",
    "description": "Play family games with your partner",
    "category": "family",
    "usage": ",family game [<game>]"
  },
  {
    "name": "family test",
    "aliases": [],
    "arguments": "[family test <married|full>]",
    "description": "Generate sample family trees for testing",
    "category": "family",
    "usage": ",family test [family test <married|full>]"
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
    "name": "log",
    "aliases": [],
    "arguments": "[<add/remove/ignore>]",
    "description": "Manage server logging system",
    "category": "utility",
    "usage": ",log [<add/remove/ignore>]"
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
    "name": "quote",
    "aliases": [],
    "arguments": "[]",
    "description": "Create a high-quality quote card from a replied message",
    "category": "utility",
    "usage": ",quote []"
  },
  {
    "name": "reaction",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage auto-reaction triggers for messages",
    "category": "automation",
    "usage": ",reaction []"
  },
  {
    "name": "reaction owner",
    "aliases": [],
    "arguments": "[<trigger>]",
    "description": "View who added a reaction trigger",
    "category": "automation",
    "usage": ",reaction owner [<trigger>]"
  },
  {
    "name": "reaction reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Remove all reaction triggers",
    "category": "automation",
    "usage": ",reaction reset []"
  },
  {
    "name": "ticket",
    "aliases": [],
    "arguments": "[]",
    "description": "Ticket system management",
    "category": "tickets",
    "usage": ",ticket []"
  },
  {
    "name": "ticket support",
    "aliases": [],
    "arguments": "[]",
    "description": "Manage support roles for ticket system",
    "category": "tickets",
    "usage": ",ticket support []"
  },
  {
    "name": "timer",
    "aliases": [],
    "arguments": "[<add/remove/list/view>]",
    "description": "Manage automated message timers",
    "category": "automation",
    "usage": ",timer [<add/remove/list/view>]"
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
    "name": "welc",
    "aliases": [],
    "arguments": "[<channel/edit/preview>]",
    "description": "Welcoming system management",
    "category": "config",
    "usage": ",welc [<channel/edit/preview>]"
  }

];

export async function seedDatabase() {
  try {
    const existing = await storage.getAllCommands();
    if (existing.length > 0) {
      console.log("✓ Database already seeded");
      return;
    }

    console.log("Seeding database with commands...");
    for (const cmd of allCommands) {
      await storage.createCommand(cmd);
    }
    console.log(`✓ Seeded ${allCommands.length} commands`);
  } catch (error) {
    console.error("Seed warning:", error instanceof Error ? error.message : "Unknown error");
  }
}

