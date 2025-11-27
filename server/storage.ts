import { type User, type InsertUser, type Command, type InsertCommand } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllCommands(): Promise<Command[]>;
  getCommandsByCategory(category: string): Promise<Command[]>;
  searchCommands(query: string): Promise<Command[]>;
  createCommand(cmd: InsertCommand): Promise<Command>;
  deleteAllCommands(): Promise<void>;
}

// In-memory storage for development/fallback
export class MemoryStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private commands: Map<string, Command> = new Map();

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

  async deleteAllCommands(): Promise<void> {
    this.commands.clear();
  }
}

export const storage = new MemoryStorage();
