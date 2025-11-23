import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { seedDatabase } from "./seed";
import { z } from "zod";

let seedInitialized = false;

export async function registerRoutes(app: Express): Promise<Server> {
  // Seed database on first startup
  if (!seedInitialized) {
    seedInitialized = true;
    await seedDatabase();
  }
  // Get all commands
  app.get("/api/commands", async (req, res) => {
    try {
      const commands = await storage.getAllCommands();
      res.json(commands);
    } catch (error) {
      console.error("Error fetching commands:", error);
      res.status(500).json({ error: "Failed to fetch commands" });
    }
  });

  // Get commands by category
  app.get("/api/commands/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const commands = await storage.getCommandsByCategory(category);
      res.json(commands);
    } catch (error) {
      console.error("Error fetching commands by category:", error);
      res.status(500).json({ error: "Failed to fetch commands" });
    }
  });

  // Search commands
  app.get("/api/commands/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        res.status(400).json({ error: "Query parameter 'q' is required" });
        return;
      }
      const commands = await storage.searchCommands(q);
      res.json(commands);
    } catch (error) {
      console.error("Error searching commands:", error);
      res.status(500).json({ error: "Failed to search commands" });
    }
  });

  // Get command categories
  app.get("/api/categories", async (req, res) => {
    try {
      const commands = await storage.getAllCommands();
      const categories = Array.from(new Set(commands.map((cmd) => cmd.category))).sort();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // Bulk upload commands (for populating from commands.txt)
  app.post("/api/commands/bulk", async (req, res) => {
    try {
      const commandsData = req.body;
      if (!Array.isArray(commandsData)) {
        res.status(400).json({ error: "Expected array of commands" });
        return;
      }

      // Delete existing commands
      await storage.deleteAllCommands();

      // Insert new commands
      for (const cmd of commandsData) {
        await storage.createCommand(cmd);
      }

      res.json({ success: true, count: commandsData.length });
    } catch (error) {
      console.error("Error uploading commands:", error);
      res.status(500).json({ error: "Failed to upload commands" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
