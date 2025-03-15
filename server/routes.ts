import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { drizzle } from "drizzle-orm/postgres-js";
import { blogs } from "@shared/schema";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog routes
  app.get("/api/blogs", async (_req, res) => {
    try {
      const allBlogs = await db.select().from(blogs).execute();
      res.json(allBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ message: "Failed to fetch blogs" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}