import { storage } from "./storage";

const allCommands = [
  {
    "name": "help",
    "aliases": [],
    "arguments": "[query]",
    "description": "Hierarchical help system with pagination and subcommand display",
    "category": "info",
    "usage": ",help [query]"
  },
  {
    "name": "h",
    "aliases": [],
    "arguments": "[query]",
    "description": "Alias for help command",
    "category": "info",
    "usage": ",h [query]"
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
    "name": "membercount",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for mc command",
    "category": "info",
    "usage": ",membercount []"
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
    "name": "userinfo",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for ui command",
    "category": "info",
    "usage": ",userinfo [@user]"
  },
  {
    "name": "whois",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for ui command",
    "category": "info",
    "usage": ",whois [@user]"
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
    "name": "roleinfo",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for ri command",
    "category": "info",
    "usage": ",roleinfo [@role]"
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
    "name": "serverinfo",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for si command",
    "category": "info",
    "usage": ",serverinfo []"
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
    "name": "channelinfo",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Alias for ci command",
    "category": "info",
    "usage": ",channelinfo [#channel]"
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
    "name": "inviteinfo",
    "aliases": [],
    "arguments": "[invite]",
    "description": "Alias for ii command",
    "category": "info",
    "usage": ",inviteinfo [invite]"
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
    "name": "timezone set",
    "aliases": [],
    "arguments": "[timezone]",
    "description": "Alias for tz set command",
    "category": "utility",
    "usage": ",timezone set [timezone]"
  },
  {
    "name": "timezone",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for tz command",
    "category": "utility",
    "usage": ",timezone [@user]"
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
    "name": "k",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Alias for kick command",
    "category": "moderation",
    "usage": ",k [@user] [reason]"
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
    "name": "ub",
    "aliases": [],
    "arguments": "[user_id] [reason]",
    "description": "Alias for unban command",
    "category": "moderation",
    "usage": ",ub [user_id] [reason]"
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
    "name": "massunban",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for unbanall command",
    "category": "moderation",
    "usage": ",massunban []"
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
    "name": "to",
    "aliases": [],
    "arguments": "[@user] [duration] [reason]",
    "description": "Alias for timeout command",
    "category": "moderation",
    "usage": ",to [@user] [duration] [reason]"
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
    "name": "uto",
    "aliases": [],
    "arguments": "[@user] [reason]",
    "description": "Alias for untimeout command",
    "category": "moderation",
    "usage": ",uto [@user] [reason]"
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
    "name": "hb",
    "aliases": [],
    "arguments": "[user_id] [reason]",
    "description": "Alias for hackban command",
    "category": "moderation",
    "usage": ",hb [user_id] [reason]"
  },
  {
    "name": "hardban",
    "aliases": [],
    "arguments": "[user_id] [reason]",
    "description": "Alias for hackban command",
    "category": "moderation",
    "usage": ",hardban [user_id] [reason]"
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
    "name": "raidmode",
    "aliases": [],
    "arguments": "[duration] [kick|ban|jail]",
    "description": "Alias for raid command",
    "category": "moderation",
    "usage": ",raidmode [duration] [kick|ban|jail]"
  },
  {
    "name": "raidmode on",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for raid on command",
    "category": "moderation",
    "usage": ",raidmode on []"
  },
  {
    "name": "raidmode off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for raid off command",
    "category": "moderation",
    "usage": ",raidmode off []"
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
    "name": "clear",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Alias for purge command",
    "category": "moderation",
    "usage": ",clear [amount]"
  },
  {
    "name": "prune",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Alias for purge command",
    "category": "moderation",
    "usage": ",prune [amount]"
  },
  {
    "name": "c",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Alias for purge command",
    "category": "moderation",
    "usage": ",c [amount]"
  },
  {
    "name": "bc",
    "aliases": [],
    "arguments": "[amount]",
    "description": "Clean bot messages (legacy alias for purge bots)",
    "category": "moderation",
    "usage": ",bc [amount]"
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
    "name": "role toggle",
    "aliases": [],
    "arguments": "[@user] [@role]",
    "description": "Alias for r toggle command",
    "category": "roles",
    "usage": ",role toggle [@user] [@role]"
  },
  {
    "name": "role restore",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for r restore command",
    "category": "roles",
    "usage": ",role restore [@user]"
  },
  {
    "name": "role rename",
    "aliases": [],
    "arguments": "[@role] [name]",
    "description": "Alias for r rename command",
    "category": "roles",
    "usage": ",role rename [@role] [name]"
  },
  {
    "name": "role delete",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for r delete command",
    "category": "roles",
    "usage": ",role delete [@role]"
  },
  {
    "name": "role create",
    "aliases": [],
    "arguments": "[name] [color]",
    "description": "Alias for r create command",
    "category": "roles",
    "usage": ",role create [name] [color]"
  },
  {
    "name": "role dump",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for r dump command",
    "category": "roles",
    "usage": ",role dump [@role]"
  },
  {
    "name": "role humans",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for r humans command",
    "category": "roles",
    "usage": ",role humans [@role]"
  },
  {
    "name": "role has",
    "aliases": [],
    "arguments": "[@user] [@role]",
    "description": "Alias for r has command",
    "category": "roles",
    "usage": ",role has [@user] [@role]"
  },
  {
    "name": "role color",
    "aliases": [],
    "arguments": "[@role] [color]",
    "description": "Alias for r color command",
    "category": "roles",
    "usage": ",role color [@role] [color]"
  },
  {
    "name": "role icon",
    "aliases": [],
    "arguments": "[@role] [emoji/url]",
    "description": "Alias for r icon command",
    "category": "roles",
    "usage": ",role icon [@role] [emoji/url]"
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
    "name": "inrole",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for ir command",
    "category": "roles",
    "usage": ",inrole [@role]"
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
    "name": "forcenick",
    "aliases": [],
    "arguments": "[@user] [nickname]",
    "description": "Alias for fn command",
    "category": "roles",
    "usage": ",forcenick [@user] [nickname]"
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
    "name": "drag",
    "aliases": [],
    "arguments": "[@user] [voice channel]",
    "description": "Alias for d command",
    "category": "voice",
    "usage": ",drag [@user] [voice channel]"
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
    "name": "modhistory",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for mh command",
    "category": "modlog",
    "usage": ",modhistory [@user]"
  },
  {
    "name": "cases",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for mh command",
    "category": "modlog",
    "usage": ",cases [@user]"
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
    "name": "giveaway start",
    "aliases": [],
    "arguments": "[duration] [#channel] [winners] [prize]",
    "description": "Alias for gw start command",
    "category": "giveaways",
    "usage": ",giveaway start [duration] [#channel] [winners] [prize]"
  },
  {
    "name": "giveaway end",
    "aliases": [],
    "arguments": "[message_link]",
    "description": "Alias for gw end command",
    "category": "giveaways",
    "usage": ",giveaway end [message_link]"
  },
  {
    "name": "giveaway edit",
    "aliases": [],
    "arguments": "[message_link] [host|duration|prize] [value]",
    "description": "Alias for gw edit command",
    "category": "giveaways",
    "usage": ",giveaway edit [message_link] [host|duration|prize] [value]"
  },
  {
    "name": "giveaway reroll",
    "aliases": [],
    "arguments": "[message_link]",
    "description": "Alias for gw reroll command",
    "category": "giveaways",
    "usage": ",giveaway reroll [message_link]"
  },
  {
    "name": "giveaway history",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for gw history command",
    "category": "giveaways",
    "usage": ",giveaway history []"
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
    "name": "welcome channel",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Alias for welc channel command",
    "category": "config",
    "usage": ",welcome channel [#channel]"
  },
  {
    "name": "welcome edit",
    "aliases": [],
    "arguments": "[message]",
    "description": "Alias for welc edit command",
    "category": "config",
    "usage": ",welcome edit [message]"
  },
  {
    "name": "welcome preview",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for welc preview command",
    "category": "config",
    "usage": ",welcome preview []"
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
    "name": "eventcontrol add",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for ec add command",
    "category": "config",
    "usage": ",eventcontrol add [@role]"
  },
  {
    "name": "eventcontrol remove",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for ec remove command",
    "category": "config",
    "usage": ",eventcontrol remove [@role]"
  },
  {
    "name": "eventcontrol list",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for ec list command",
    "category": "config",
    "usage": ",eventcontrol list []"
  },
  {
    "name": "eventcontrol disable",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for ec disable command",
    "category": "config",
    "usage": ",eventcontrol disable []"
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
    "name": "fakepermissions grant",
    "aliases": [],
    "arguments": "[@user/@role] [permission(s)]",
    "description": "Alias for fp grant command",
    "category": "permissions",
    "usage": ",fakepermissions grant [@user/@role] [permission(s)]"
  },
  {
    "name": "fakepermissions remove",
    "aliases": [],
    "arguments": "[@user/@role] [permission(s)]",
    "description": "Alias for fp remove command",
    "category": "permissions",
    "usage": ",fakepermissions remove [@user/@role] [permission(s)]"
  },
  {
    "name": "fakepermissions list",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Alias for fp list command",
    "category": "permissions",
    "usage": ",fakepermissions list [@user/@role]"
  },
  {
    "name": "fakepermissions reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for fp reset command",
    "category": "permissions",
    "usage": ",fakepermissions reset []"
  },
  {
    "name": "fakeperms grant",
    "aliases": [],
    "arguments": "[@user/@role] [permission(s)]",
    "description": "Alias for fp grant command",
    "category": "permissions",
    "usage": ",fakeperms grant [@user/@role] [permission(s)]"
  },
  {
    "name": "fakeperms remove",
    "aliases": [],
    "arguments": "[@user/@role] [permission(s)]",
    "description": "Alias for fp remove command",
    "category": "permissions",
    "usage": ",fakeperms remove [@user/@role] [permission(s)]"
  },
  {
    "name": "fakeperms list",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Alias for fp list command",
    "category": "permissions",
    "usage": ",fakeperms list [@user/@role]"
  },
  {
    "name": "fakeperms reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for fp reset command",
    "category": "permissions",
    "usage": ",fakeperms reset []"
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
    "name": "seticon",
    "aliases": [],
    "arguments": "[image]",
    "description": "Alias for setpfp command",
    "category": "config",
    "usage": ",seticon [image]"
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
    "name": "vm setup",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for vc setup command",
    "category": "voice",
    "usage": ",vm setup [@role]"
  },
  {
    "name": "vm intr",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for vc intr command",
    "category": "voice",
    "usage": ",vm intr []"
  },
  {
    "name": "vm category",
    "aliases": [],
    "arguments": "[category]",
    "description": "Alias for vc category command",
    "category": "voice",
    "usage": ",vm category [category]"
  },
  {
    "name": "vm name",
    "aliases": [],
    "arguments": "[format]",
    "description": "Alias for vc name command",
    "category": "voice",
    "usage": ",vm name [format]"
  },
  {
    "name": "vm bypass add",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for vc bypass add command",
    "category": "voice",
    "usage": ",vm bypass add [@role]"
  },
  {
    "name": "vm bypass remove",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for vc bypass remove command",
    "category": "voice",
    "usage": ",vm bypass remove [@role]"
  },
  {
    "name": "vm bypass list",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for vc bypass list command",
    "category": "voice",
    "usage": ",vm bypass list []"
  },
  {
    "name": "vm bypass sync",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for vc bypass sync command",
    "category": "voice",
    "usage": ",vm bypass sync []"
  },
  {
    "name": "vm kick",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for vc kick command",
    "category": "voice",
    "usage": ",vm kick [@user]"
  },
  {
    "name": "vm ban",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for vc ban command",
    "category": "voice",
    "usage": ",vm ban [@user]"
  },
  {
    "name": "vm unban",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for vc unban command",
    "category": "voice",
    "usage": ",vm unban [@user]"
  },
  {
    "name": "vm permit",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for vc permit command",
    "category": "voice",
    "usage": ",vm permit [@user]"
  },
  {
    "name": "vm rename",
    "aliases": [],
    "arguments": "[name]",
    "description": "Alias for vc rename command",
    "category": "voice",
    "usage": ",vm rename [name]"
  },
  {
    "name": "vm transfer",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for vc transfer command",
    "category": "voice",
    "usage": ",vm transfer [@user]"
  },
  {
    "name": "vm lock",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for vc lock command",
    "category": "voice",
    "usage": ",vm lock []"
  },
  {
    "name": "vm unlock",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for vc unlock command",
    "category": "voice",
    "usage": ",vm unlock []"
  },
  {
    "name": "vm limit",
    "aliases": [],
    "arguments": "[number]",
    "description": "Alias for vc limit command",
    "category": "voice",
    "usage": ",vm limit [number]"
  },
  {
    "name": "vm claim",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for vc claim command",
    "category": "voice",
    "usage": ",vm claim []"
  },
  {
    "name": "vm hide",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for vc hide command",
    "category": "voice",
    "usage": ",vm hide []"
  },
  {
    "name": "vm unhide",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for vc unhide command",
    "category": "voice",
    "usage": ",vm unhide []"
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
    "name": "family cheat",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for family cuck command",
    "category": "family",
    "usage": ",family cheat [@user]"
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
    "name": "family parents",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for family parent command",
    "category": "family",
    "usage": ",family parents [@user]"
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
    "name": "family rls",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Alias for family relate command",
    "category": "family",
    "usage": ",family rls [@user1] [@user2]"
  },
  {
    "name": "family relationship",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Alias for family relate command",
    "category": "family",
    "usage": ",family relationship [@user1] [@user2]"
  },
  {
    "name": "family relation",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Alias for family relate command",
    "category": "family",
    "usage": ",family relation [@user1] [@user2]"
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
    "name": "family familytree",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for family tree command",
    "category": "family",
    "usage": ",family familytree [@user]"
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
    "name": "marry",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family marry command",
    "category": "family",
    "usage": ",marry [@user]"
  },
  {
    "name": "divorce",
    "aliases": [],
    "arguments": "[]",
    "description": "Top-level alias for family divorce command",
    "category": "family",
    "usage": ",divorce []"
  },
  {
    "name": "cuck",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family cuck command",
    "category": "family",
    "usage": ",cuck [@user]"
  },
  {
    "name": "cheat",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family cheat command",
    "category": "family",
    "usage": ",cheat [@user]"
  },
  {
    "name": "partner",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family partner command",
    "category": "family",
    "usage": ",partner [@user]"
  },
  {
    "name": "adopt",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family adopt command",
    "category": "family",
    "usage": ",adopt [@user]"
  },
  {
    "name": "runaway",
    "aliases": [],
    "arguments": "[]",
    "description": "Top-level alias for family runaway command",
    "category": "family",
    "usage": ",runaway []"
  },
  {
    "name": "disown",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family disown command",
    "category": "family",
    "usage": ",disown [@user]"
  },
  {
    "name": "parent",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family parent command",
    "category": "family",
    "usage": ",parent [@user]"
  },
  {
    "name": "parents",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family parents command",
    "category": "family",
    "usage": ",parents [@user]"
  },
  {
    "name": "relate",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Top-level alias for family relate command",
    "category": "family",
    "usage": ",relate [@user1] [@user2]"
  },
  {
    "name": "rls",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Top-level alias for family rls command",
    "category": "family",
    "usage": ",rls [@user1] [@user2]"
  },
  {
    "name": "relationship",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Top-level alias for family relationship command",
    "category": "family",
    "usage": ",relationship [@user1] [@user2]"
  },
  {
    "name": "relation",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Top-level alias for family relation command",
    "category": "family",
    "usage": ",relation [@user1] [@user2]"
  },
  {
    "name": "ship",
    "aliases": [],
    "arguments": "[@user1] [@user2]",
    "description": "Top-level alias for family ship command",
    "category": "family",
    "usage": ",ship [@user1] [@user2]"
  },
  {
    "name": "tree",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family tree command",
    "category": "family",
    "usage": ",tree [@user]"
  },
  {
    "name": "familytree",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Top-level alias for family familytree command",
    "category": "family",
    "usage": ",familytree [@user]"
  },
  {
    "name": "lq",
    "aliases": [],
    "arguments": "[]",
    "description": "Top-level alias for family game quiz command",
    "category": "family",
    "usage": ",lq []"
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
    "name": "media c",
    "aliases": [],
    "arguments": "[caption]",
    "description": "Alias for media caption command",
    "category": "media",
    "usage": ",media c [caption]"
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
    "name": "media q",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for media quote command",
    "category": "media",
    "usage": ",media q []"
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
    "name": "i",
    "aliases": [],
    "arguments": "[query]",
    "description": "Alias for image command",
    "category": "media",
    "usage": ",i [query]"
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
    "name": "nuketimer",
    "aliases": [],
    "arguments": "[subcommand]",
    "description": "Manage nuke timers (alias for timerlist)",
    "category": "chat",
    "usage": ",nuketimer [subcommand]"
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
    "name": "here",
    "aliases": [],
    "arguments": "[args]",
    "description": "Alias for pinghere command",
    "category": "chat",
    "usage": ",here [args]"
  },
  {
    "name": "athere",
    "aliases": [],
    "arguments": "[args]",
    "description": "Alias for pinghere command",
    "category": "chat",
    "usage": ",athere [args]"
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
    "name": "everyone",
    "aliases": [],
    "arguments": "[args]",
    "description": "Alias for pingeveryone command",
    "category": "chat",
    "usage": ",everyone [args]"
  },
  {
    "name": "ateveryone",
    "aliases": [],
    "arguments": "[args]",
    "description": "Alias for pingeveryone command",
    "category": "chat",
    "usage": ",ateveryone [args]"
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
    "name": "emoji delete",
    "aliases": [],
    "arguments": "[emojis...]",
    "description": "Alias for emoji remove command",
    "category": "emoji",
    "usage": ",emoji delete [emojis...]"
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
    "name": "sticker delete",
    "aliases": [],
    "arguments": "[sticker_names...]",
    "description": "Alias for sticker remove command",
    "category": "emoji",
    "usage": ",sticker delete [sticker_names...]"
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
    "name": "yap",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for summarise command",
    "category": "messages",
    "usage": ",yap []"
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
    "name": "snipe",
    "aliases": [],
    "arguments": "[index]",
    "description": "Alias for s command",
    "category": "messages",
    "usage": ",snipe [index]"
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
    "name": "editsnipe",
    "aliases": [],
    "arguments": "[index]",
    "description": "Alias for es command",
    "category": "messages",
    "usage": ",editsnipe [index]"
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
    "name": "reactionsnipe",
    "aliases": [],
    "arguments": "[index]",
    "description": "Alias for rs command",
    "category": "messages",
    "usage": ",reactionsnipe [index]"
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
    "name": "clearsnipe",
    "aliases": [],
    "arguments": "[channel|server]",
    "description": "Alias for cs command",
    "category": "messages",
    "usage": ",clearsnipe [channel|server]"
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
    "name": "ar add",
    "aliases": [],
    "arguments": "[trigger, response]",
    "description": "Alias for autoresponder add command",
    "category": "autoresponder",
    "usage": ",ar add [trigger, response]"
  },
  {
    "name": "ar remove",
    "aliases": [],
    "arguments": "[trigger]",
    "description": "Alias for autoresponder remove command",
    "category": "autoresponder",
    "usage": ",ar remove [trigger]"
  },
  {
    "name": "ar update",
    "aliases": [],
    "arguments": "[trigger, new_response]",
    "description": "Alias for autoresponder update command",
    "category": "autoresponder",
    "usage": ",ar update [trigger, new_response]"
  },
  {
    "name": "ar list",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for autoresponder list command",
    "category": "autoresponder",
    "usage": ",ar list []"
  },
  {
    "name": "ar reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for autoresponder reset command",
    "category": "autoresponder",
    "usage": ",ar reset []"
  },
  {
    "name": "aur add",
    "aliases": [],
    "arguments": "[trigger, response]",
    "description": "Alias for autoresponder add command",
    "category": "autoresponder",
    "usage": ",aur add [trigger, response]"
  },
  {
    "name": "aur remove",
    "aliases": [],
    "arguments": "[trigger]",
    "description": "Alias for autoresponder remove command",
    "category": "autoresponder",
    "usage": ",aur remove [trigger]"
  },
  {
    "name": "aur update",
    "aliases": [],
    "arguments": "[trigger, new_response]",
    "description": "Alias for autoresponder update command",
    "category": "autoresponder",
    "usage": ",aur update [trigger, new_response]"
  },
  {
    "name": "aur list",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for autoresponder list command",
    "category": "autoresponder",
    "usage": ",aur list []"
  },
  {
    "name": "aur reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for autoresponder reset command",
    "category": "autoresponder",
    "usage": ",aur reset []"
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
    "name": "react add",
    "aliases": [],
    "arguments": "[emoji] [trigger]",
    "description": "Alias for reaction add command",
    "category": "autoresponder",
    "usage": ",react add [emoji] [trigger]"
  },
  {
    "name": "react remove",
    "aliases": [],
    "arguments": "[emoji] [trigger]",
    "description": "Alias for reaction remove command",
    "category": "autoresponder",
    "usage": ",react remove [emoji] [trigger]"
  },
  {
    "name": "react removeall",
    "aliases": [],
    "arguments": "[trigger]",
    "description": "Alias for reaction removeall command",
    "category": "autoresponder",
    "usage": ",react removeall [trigger]"
  },
  {
    "name": "react list",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for reaction list command",
    "category": "autoresponder",
    "usage": ",react list []"
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
    "name": "nuketimers",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for timerlist command",
    "category": "other",
    "usage": ",nuketimers []"
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
    "name": "sentry on",
    "aliases": [],
    "arguments": "[reason]",
    "description": "Alias for panick on command",
    "category": "other",
    "usage": ",sentry on [reason]"
  },
  {
    "name": "sentry off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for panick off command",
    "category": "other",
    "usage": ",sentry off []"
  },
  {
    "name": "sentry status",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for panick status command",
    "category": "other",
    "usage": ",sentry status []"
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
    "name": "antinuke ban on",
    "aliases": [],
    "arguments": "[--command/--bot/--threshold N/--punishment]",
    "description": "Alias for an ban on command",
    "category": "antinuke",
    "usage": ",antinuke ban on [--command/--bot/--threshold N/--punishment]"
  },
  {
    "name": "antinuke ban off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an ban off command",
    "category": "antinuke",
    "usage": ",antinuke ban off []"
  },
  {
    "name": "antinuke kick on",
    "aliases": [],
    "arguments": "[--command/--bot/--threshold N/--punishment]",
    "description": "Alias for an kick on command",
    "category": "antinuke",
    "usage": ",antinuke kick on [--command/--bot/--threshold N/--punishment]"
  },
  {
    "name": "antinuke kick off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an kick off command",
    "category": "antinuke",
    "usage": ",antinuke kick off []"
  },
  {
    "name": "antinuke webhook on",
    "aliases": [],
    "arguments": "[--threshold N/--punishment]",
    "description": "Alias for an webhook on command",
    "category": "antinuke",
    "usage": ",antinuke webhook on [--threshold N/--punishment]"
  },
  {
    "name": "antinuke webhook off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an webhook off command",
    "category": "antinuke",
    "usage": ",antinuke webhook off []"
  },
  {
    "name": "antinuke channel on",
    "aliases": [],
    "arguments": "[--create/--delete/--update/--threshold N/--punishment]",
    "description": "Alias for an channel on",
    "category": "antinuke",
    "usage": ",antinuke channel on [--create/--delete/--update/--threshold N/--punishment]"
  },
  {
    "name": "antinuke channel off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an channel off command",
    "category": "antinuke",
    "usage": ",antinuke channel off []"
  },
  {
    "name": "antinuke role on",
    "aliases": [],
    "arguments": "[--create/--delete/--update/--threshold N/--punishment]",
    "description": "Alias for an role on command",
    "category": "antinuke",
    "usage": ",antinuke role on [--create/--delete/--update/--threshold N/--punishment]"
  },
  {
    "name": "antinuke role off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an role off command",
    "category": "antinuke",
    "usage": ",antinuke role off []"
  },
  {
    "name": "antinuke ping on",
    "aliases": [],
    "arguments": "[--threshold N/--punishment]",
    "description": "Alias for an ping on command",
    "category": "antinuke",
    "usage": ",antinuke ping on [--threshold N/--punishment]"
  },
  {
    "name": "antinuke ping off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an ping off command",
    "category": "antinuke",
    "usage": ",antinuke ping off []"
  },
  {
    "name": "antinuke vanity on",
    "aliases": [],
    "arguments": "[--punishment]",
    "description": "Alias for an vanity on command",
    "category": "antinuke",
    "usage": ",antinuke vanity on [--punishment]"
  },
  {
    "name": "antinuke vanity off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an vanity off command",
    "category": "antinuke",
    "usage": ",antinuke vanity off []"
  },
  {
    "name": "antinuke botadd on",
    "aliases": [],
    "arguments": "[--threshold N/--punishment]",
    "description": "Alias for an botadd on command",
    "category": "antinuke",
    "usage": ",antinuke botadd on [--threshold N/--punishment]"
  },
  {
    "name": "antinuke botadd off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an botadd off command",
    "category": "antinuke",
    "usage": ",antinuke botadd off []"
  },
  {
    "name": "antinuke permission on",
    "aliases": [],
    "arguments": "[--threshold N/--punishment]",
    "description": "Alias for an permission on command",
    "category": "antinuke",
    "usage": ",antinuke permission on [--threshold N/--punishment]"
  },
  {
    "name": "antinuke permission off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an permission off command",
    "category": "antinuke",
    "usage": ",antinuke permission off []"
  },
  {
    "name": "antinuke admin",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for an admin command",
    "category": "antinuke",
    "usage": ",antinuke admin [@user]"
  },
  {
    "name": "antinuke unadmin",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for an unadmin command",
    "category": "antinuke",
    "usage": ",antinuke unadmin [@user]"
  },
  {
    "name": "antinuke whitelist",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Alias for an whitelist command",
    "category": "antinuke",
    "usage": ",antinuke whitelist [@user/@role]"
  },
  {
    "name": "antinuke unwhitelist",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Alias for an unwhitelist command",
    "category": "antinuke",
    "usage": ",antinuke unwhitelist [@user/@role]"
  },
  {
    "name": "antinuke config",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an config command",
    "category": "antinuke",
    "usage": ",antinuke config []"
  },
  {
    "name": "antinuke list",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for an list command",
    "category": "antinuke",
    "usage": ",antinuke list []"
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
    "name": "birthday role remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for birthday role reset command",
    "category": "birthday",
    "usage": ",birthday role remove []"
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
    "name": "bday set",
    "aliases": [],
    "arguments": "[date]",
    "description": "Alias for birthday set command",
    "category": "birthday",
    "usage": ",bday set [date]"
  },
  {
    "name": "bday view",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for birthday view command",
    "category": "birthday",
    "usage": ",bday view [@user]"
  },
  {
    "name": "bday role set",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for birthday role set command",
    "category": "birthday",
    "usage": ",bday role set [@role]"
  },
  {
    "name": "bday role reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for birthday role reset command",
    "category": "birthday",
    "usage": ",bday role reset []"
  },
  {
    "name": "bday role remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for birthday role remove command",
    "category": "birthday",
    "usage": ",bday role remove []"
  },
  {
    "name": "bday role view",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for birthday role view command",
    "category": "birthday",
    "usage": ",bday role view []"
  },
  {
    "name": "bd set",
    "aliases": [],
    "arguments": "[date]",
    "description": "Alias for birthday set command",
    "category": "birthday",
    "usage": ",bd set [date]"
  },
  {
    "name": "bd view",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for birthday view command",
    "category": "birthday",
    "usage": ",bd view [@user]"
  },
  {
    "name": "bd role set",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for birthday role set command",
    "category": "birthday",
    "usage": ",bd role set [@role]"
  },
  {
    "name": "bd role reset",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for birthday role reset command",
    "category": "birthday",
    "usage": ",bd role reset []"
  },
  {
    "name": "bd role remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for birthday role remove command",
    "category": "birthday",
    "usage": ",bd role remove []"
  },
  {
    "name": "bd role view",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for birthday role view command",
    "category": "birthday",
    "usage": ",bd role view []"
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
    "name": "f invites on",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for filter invites on command",
    "category": "filters",
    "usage": ",f invites on []"
  },
  {
    "name": "f invites off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for filter invites off command",
    "category": "filters",
    "usage": ",f invites off []"
  },
  {
    "name": "f spam on",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for filter spam on command",
    "category": "filters",
    "usage": ",f spam on []"
  },
  {
    "name": "f spam off",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for filter spam off command",
    "category": "filters",
    "usage": ",f spam off []"
  },
  {
    "name": "f exempt add",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Alias for filter exempt add command",
    "category": "filters",
    "usage": ",f exempt add [@user/@role]"
  },
  {
    "name": "f exempt remove",
    "aliases": [],
    "arguments": "[@user/@role]",
    "description": "Alias for filter exempt remove command",
    "category": "filters",
    "usage": ",f exempt remove [@user/@role]"
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
    "name": "boosterrole colour",
    "aliases": [],
    "arguments": "[color]",
    "description": "Alias for boosterrole color command",
    "category": "birthday",
    "usage": ",boosterrole colour [color]"
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
    "name": "br base",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for boosterrole base command",
    "category": "birthday",
    "usage": ",br base [@role]"
  },
  {
    "name": "br",
    "aliases": [],
    "arguments": "[color] [name]",
    "description": "Alias for boosterrole command",
    "category": "birthday",
    "usage": ",br [color] [name]"
  },
  {
    "name": "br rename",
    "aliases": [],
    "arguments": "[name]",
    "description": "Alias for boosterrole rename command",
    "category": "birthday",
    "usage": ",br rename [name]"
  },
  {
    "name": "br color",
    "aliases": [],
    "arguments": "[color]",
    "description": "Alias for boosterrole color command",
    "category": "birthday",
    "usage": ",br color [color]"
  },
  {
    "name": "br colour",
    "aliases": [],
    "arguments": "[color]",
    "description": "Alias for boosterrole colour command",
    "category": "birthday",
    "usage": ",br colour [color]"
  },
  {
    "name": "br icon",
    "aliases": [],
    "arguments": "[emoji/url]",
    "description": "Alias for boosterrole icon command",
    "category": "birthday",
    "usage": ",br icon [emoji/url]"
  },
  {
    "name": "br remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for boosterrole remove command",
    "category": "birthday",
    "usage": ",br remove []"
  },
  {
    "name": "br share",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for boosterrole share command",
    "category": "birthday",
    "usage": ",br share [@user]"
  },
  {
    "name": "br unshare",
    "aliases": [],
    "arguments": "[@user]",
    "description": "Alias for boosterrole unshare command",
    "category": "birthday",
    "usage": ",br unshare [@user]"
  },
  {
    "name": "br list",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for boosterrole list command",
    "category": "birthday",
    "usage": ",br list []"
  },
  {
    "name": "br cleanup",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for boosterrole cleanup command",
    "category": "birthday",
    "usage": ",br cleanup []"
  },
  {
    "name": "br award",
    "aliases": [],
    "arguments": "[@role]",
    "description": "Alias for boosterrole award command",
    "category": "birthday",
    "usage": ",br award [@role]"
  },
  {
    "name": "br award view",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for boosterrole award view command",
    "category": "birthday",
    "usage": ",br award view []"
  },
  {
    "name": "br award remove",
    "aliases": [],
    "arguments": "[]",
    "description": "Alias for boosterrole award remove command",
    "category": "birthday",
    "usage": ",br award remove []"
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
    "name": "timer preview",
    "aliases": [],
    "arguments": "[#channel]",
    "description": "Alias for timer view command",
    "category": "timers",
    "usage": ",timer preview [#channel]"
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

