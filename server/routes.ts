import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGuestbookEntrySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Guestbook routes
  app.get("/api/guestbook", async (req, res) => {
    const entries = await storage.getGuestbookEntries();
    res.json(entries);
  });

  app.post("/api/guestbook", async (req, res) => {
    try {
      const validatedData = insertGuestbookEntrySchema.parse(req.body);
      const entry = await storage.createGuestbookEntry(validatedData);
      res.json(entry);
    } catch (error) {
      res.status(400).json({ error: "Invalid guestbook entry data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
