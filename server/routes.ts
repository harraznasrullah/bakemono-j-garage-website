import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - prefix all routes with /api
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body against the schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      // Send email notification (would normally use a service like nodemailer)
      // For now we just log the submission
      console.log("New contact submission:", contactSubmission);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact submission received",
        id: contactSubmission.id 
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof Error) {
        res.status(400).json({ 
          success: false, 
          message: error.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Get contact submissions (admin feature, would normally be authenticated)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
