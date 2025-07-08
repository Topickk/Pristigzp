import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { readFileSync } from "fs";
import { join } from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Content endpoints for reading text files
  app.get("/api/content/contacts", (req, res) => {
    try {
      const content = readFileSync(join(process.cwd(), "контактные_данные.txt"), "utf-8");
      res.type("text/plain").send(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to read contacts file" });
    }
  });

  app.get("/api/content/texts", (req, res) => {
    try {
      const content = readFileSync(join(process.cwd(), "тексты_и_контент.txt"), "utf-8");
      res.type("text/plain").send(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to read texts file" });
    }
  });

  app.get("/api/content/photos", (req, res) => {
    try {
      const content = readFileSync(join(process.cwd(), "фотографии_и_изображения.txt"), "utf-8");
      res.type("text/plain").send(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to read photos file" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
