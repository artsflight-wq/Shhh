import { type User, type InsertUser, type Command, type InsertCommand, type SiteSetting, type InsertSiteSetting } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllCommands(): Promise<Command[]>;
  getCommandsByCategory(category: string): Promise<Command[]>;
  searchCommands(query: string): Promise<Command[]>;
  createCommand(cmd: InsertCommand): Promise<Command>;
  updateCommand(id: string, cmd: Partial<InsertCommand>): Promise<Command | undefined>;
  deleteCommand(id: string): Promise<boolean>;
  deleteAllCommands(): Promise<void>;
  getSetting(key: string): Promise<string | undefined>;
  setSetting(key: string, value: string): Promise<SiteSetting>;
  deleteSetting(key: string): Promise<boolean>;
}

// In-memory storage for development/fallback
export class MemoryStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private commands: Map<string, Command> = new Map();
  private settings: Map<string, SiteSetting> = new Map();

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((u) => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllCommands(): Promise<Command[]> {
    return Array.from(this.commands.values());
  }

  async getCommandsByCategory(category: string): Promise<Command[]> {
    return Array.from(this.commands.values()).filter(
      (cmd) => cmd.category === category
    );
  }

  async searchCommands(query: string): Promise<Command[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.commands.values()).filter(
      (cmd) =>
        cmd.name.toLowerCase().includes(lowerQuery) ||
        cmd.description.toLowerCase().includes(lowerQuery) ||
        cmd.aliases.some((alias) =>
          alias.toLowerCase().includes(lowerQuery)
        )
    );
  }

  async createCommand(cmd: InsertCommand): Promise<Command> {
    const id = randomUUID();
    const command: Command = { ...cmd, id };
    this.commands.set(id, command);
    return command;
  }

  async updateCommand(id: string, cmd: Partial<InsertCommand>): Promise<Command | undefined> {
    const existing = this.commands.get(id);
    if (!existing) return undefined;
    const updated: Command = { ...existing, ...cmd };
    this.commands.set(id, updated);
    return updated;
  }

  async deleteCommand(id: string): Promise<boolean> {
    return this.commands.delete(id);
  }

  async deleteAllCommands(): Promise<void> {
    this.commands.clear();
  }

  async getSetting(key: string): Promise<string | undefined> {
    const setting = Array.from(this.settings.values()).find(s => s.key === key);
    return setting?.value;
  }

  async setSetting(key: string, value: string): Promise<SiteSetting> {
    const existing = Array.from(this.settings.values()).find(s => s.key === key);
    if (existing) {
      const updated: SiteSetting = { ...existing, value };
      this.settings.set(existing.id, updated);
      return updated;
    }
    const id = randomUUID();
    const setting: SiteSetting = { id, key, value };
    this.settings.set(id, setting);
    return setting;
  }

  async deleteSetting(key: string): Promise<boolean> {
    const setting = Array.from(this.settings.values()).find(s => s.key === key);
    if (setting) {
      return this.settings.delete(setting.id);
    }
    return false;
  }
}

export const storage = new MemoryStorage();
