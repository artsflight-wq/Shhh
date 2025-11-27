import { type Server } from "node:http";
import express, { type Express, type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

// Simple server logger
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// ---------------------------------------------------------------------
// APP INITIALISATION
// ---------------------------------------------------------------------

export const app = express();

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// Accept JSON, URLENCODED
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    }
  })
);

app.use(express.urlencoded({ extended: false }));

// ---------------------------------------------------------------------
// REQUEST LOGGER (FOR API ONLY)
// ---------------------------------------------------------------------

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: any | undefined;

  const originalResJson = res.json.bind(res);
  res.json = (body, ...args) => {
    capturedJsonResponse = body;
    return originalResJson(body, ...args);
  };

  res.on("finish", () => {
    if (!path.startsWith("/api")) return;

    const duration = Date.now() - start;
    let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
    if (capturedJsonResponse) {
      try {
        logLine += " :: " + JSON.stringify(capturedJsonResponse);
      } catch {}
    }

    if (logLine.length > 150) logLine = logLine.slice(0, 149) + "…";
    log(logLine);
  });

  next();
});

// ---------------------------------------------------------------------
// MAIN SETUP FUNCTION
// ---------------------------------------------------------------------

export default async function runApp(
  setup: (app: Express, server: Server) => Promise<void>
) {
  // Register all API routes first
  const server = await registerRoutes(app);

  // Global API error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });

    // Do not crash PM2 — only log
    log(`ERROR ${status}: ${message}`, "error");
  });

  // Setup callback (DB, workers, etc)
  await setup(app, server);

  // -----------------------------------------------------------------
  // NO STATIC SERVING • NO PUBLIC FOLDER • NO INDEX.HTML
  // -----------------------------------------------------------------
  // API ONLY — prevents the "Could not find build directory" crash.
  // -----------------------------------------------------------------

  // Everything else should 404
  app.use("*", (_req, res) => {
    res.status(404).json({ message: "Not Found" });
  });
}
