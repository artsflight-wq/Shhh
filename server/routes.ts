import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { seedDatabase } from "./seed";
import { z } from "zod";
import { CATEGORIES } from "@shared/categoryConfig";
import multer from "multer";
import path from "path";
import fs from "fs";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";
const UPLOADS_DIR = path.join(process.cwd(), "uploads");
const MUSIC_DIR = path.join(UPLOADS_DIR, "music");

// Ensure upload directories exist
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
if (!fs.existsSync(MUSIC_DIR)) {
  fs.mkdirSync(MUSIC_DIR, { recursive: true });
}

// Configure multer for music uploads
const musicStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, MUSIC_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, "background" + path.extname(file.originalname));
  },
});

const uploadMusic = multer({
  storage: musicStorage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["audio/mpeg", "audio/wav", "audio/ogg", "audio/mp3", "audio/x-m4a", "audio/mp4"];
    if (allowedTypes.includes(file.mimetype) || file.originalname.match(/\.(mp3|wav|ogg|m4a)$/i)) {
      cb(null, true);
    } else {
      cb(new Error("Only audio files are allowed"));
    }
  },
});

// Admin auth middleware
const adminAuth = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

let seedInitialized = false;

export async function registerRoutes(app: Express): Promise<Server> {
  // Seed database on first startup
  if (!seedInitialized) {
    seedInitialized = true;
    await seedDatabase();
  }
  
  // Serve uploaded files
  app.use("/uploads", (req, res, next) => {
    const filePath = path.join(UPLOADS_DIR, req.path);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).json({ error: "File not found" });
    }
  });

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

  // Get command categories with metadata
  app.get("/api/categories", async (req, res) => {
    try {
      const commands = await storage.getAllCommands();
      
      // Calculate command counts per category
      const categoryCounts = commands.reduce((acc, cmd) => {
        acc[cmd.category] = (acc[cmd.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      // Add "all" category with total count
      const totalCount = commands.length;
      
      // Map categories to include metadata and counts
      const categoriesWithMetadata = CATEGORIES.map(cat => ({
        id: cat.id,
        name: cat.name,
        displayName: cat.displayName,
        icon: cat.icon,
        description: cat.description,
        commandCount: cat.id === "all" ? totalCount : (categoryCounts[cat.name] || 0)
      }));
      
      res.json(categoriesWithMetadata);
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

  // ============ ADMIN API ENDPOINTS ============

  // Admin login verification
  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  });

  // Create a new command (admin only)
  app.post("/api/admin/commands", adminAuth, async (req, res) => {
    try {
      const { name, aliases, arguments: args, description, category, usage } = req.body;
      
      if (!name || !description || !category) {
        res.status(400).json({ error: "Name, description, and category are required" });
        return;
      }

      const command = await storage.createCommand({
        name,
        aliases: aliases || [],
        arguments: args || "",
        description,
        category,
        usage: usage || `,${name}`,
      });

      res.json(command);
    } catch (error) {
      console.error("Error creating command:", error);
      res.status(500).json({ error: "Failed to create command" });
    }
  });

  // Update a command (admin only)
  app.put("/api/admin/commands/:id", adminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      
      const command = await storage.updateCommand(id, updates);
      if (!command) {
        res.status(404).json({ error: "Command not found" });
        return;
      }

      res.json(command);
    } catch (error) {
      console.error("Error updating command:", error);
      res.status(500).json({ error: "Failed to update command" });
    }
  });

  // Delete a command (admin only)
  app.delete("/api/admin/commands/:id", adminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteCommand(id);
      
      if (!deleted) {
        res.status(404).json({ error: "Command not found" });
        return;
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting command:", error);
      res.status(500).json({ error: "Failed to delete command" });
    }
  });

  // Upload music file (admin only)
  app.post("/api/admin/music", adminAuth, uploadMusic.single("music"), async (req, res) => {
    try {
      if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }

      // Remove any existing music files (keep only 1)
      const files = fs.readdirSync(MUSIC_DIR);
      for (const file of files) {
        if (file !== req.file.filename) {
          fs.unlinkSync(path.join(MUSIC_DIR, file));
        }
      }

      const musicUrl = `/uploads/music/${req.file.filename}`;
      await storage.setSetting("backgroundMusic", musicUrl);

      res.json({ success: true, url: musicUrl, filename: req.file.originalname });
    } catch (error) {
      console.error("Error uploading music:", error);
      res.status(500).json({ error: "Failed to upload music" });
    }
  });

  // Get current music file (public)
  app.get("/api/music", async (req, res) => {
    try {
      const musicUrl = await storage.getSetting("backgroundMusic");
      
      if (!musicUrl) {
        res.json({ hasMusic: false });
        return;
      }

      // Check if file actually exists
      const filePath = path.join(process.cwd(), musicUrl);
      if (!fs.existsSync(filePath)) {
        await storage.deleteSetting("backgroundMusic");
        res.json({ hasMusic: false });
        return;
      }

      res.json({ hasMusic: true, url: musicUrl });
    } catch (error) {
      console.error("Error getting music:", error);
      res.status(500).json({ error: "Failed to get music" });
    }
  });

  // Delete music file (admin only)
  app.delete("/api/admin/music", adminAuth, async (req, res) => {
    try {
      // Remove all files from music directory
      const files = fs.readdirSync(MUSIC_DIR);
      for (const file of files) {
        fs.unlinkSync(path.join(MUSIC_DIR, file));
      }

      await storage.deleteSetting("backgroundMusic");
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting music:", error);
      res.status(500).json({ error: "Failed to delete music" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
