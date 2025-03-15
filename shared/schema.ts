import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  slug: text("slug").notNull().unique(),
  publishedAt: timestamp("published_at").notNull(),
  tags: text("tags").array(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  technologies: text("technologies").array(),
  completionDate: timestamp("completion_date"),
  clientName: text("client_name"),
  testimonial: text("testimonial"),
});

export const team = pgTable("team", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url"),
  socialLinks: json("social_links"),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  company: text("company"),
  content: text("content").notNull(),
  rating: integer("rating"),
  imageUrl: text("image_url"),
});

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  date: timestamp("date").notNull(),
  serviceType: text("service_type").notNull(),
  message: text("message"),
  status: text("status").notNull().default("pending"),
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribed: boolean("subscribed").notNull().default(true),
  subscribedAt: timestamp("subscribed_at").notNull(),
});

// Insert schemas
export const insertBlogSchema = createInsertSchema(blogs).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertTeamSchema = createInsertSchema(team).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });
export const insertConsultationSchema = createInsertSchema(consultations).omit({ id: true });
export const insertNewsletterSchema = createInsertSchema(newsletters).omit({ id: true });

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Blog = typeof blogs.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type TeamMember = typeof team.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type Consultation = typeof consultations.$inferSelect;
export type Newsletter = typeof newsletters.$inferSelect;