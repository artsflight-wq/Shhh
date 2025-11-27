import { type Server } from "node:http";
import express, { type Express, type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

export const app = express();

declare module "http" {
  interface IncomingMessage { rawBody: unknown }
}

app.use(express.json({
  verify: (req, _res, buf) => { req.rawBody = buf }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let captured: any;

  const original = res.json.bind(res);
  res.json = (body, ...args) => {
    captured = body;
    return original(body, ...args);
  };

  res.on("finish", () => {
    if (!path.startsWith("/api")) return;
    const duration = Date.now() - start;
    let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
    if (captured) {
      try { logLine += " :: " + JSON.stringify(captured) } catch {}
    }
    if (logLine.length > 150) logLine = logLine.slice(0,149)+"…";
    log(logLine);
  });

  next();
});

export default async function runApp(
  setup: (app: Express, server: Server) => Promise<void>
) {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    log(`ERROR ${status}: ${message}`, "error");
  });

  // run your provided setup (serveStatic)
  await setup(app, server);

  // finally start HTTP server
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    log(`Server running on port ${PORT}`, "startup");
  });

  return server;
}