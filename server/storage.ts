import { 
  User, 
  InsertUser, 
  ContactSubmission, 
  InsertContact 
} from "@shared/schema";

// Define the interface with CRUD methods for users and contact submissions
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submission methods
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  updateContactSubmissionResponseStatus(id: number, hasResponded: boolean): Promise<ContactSubmission | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentUserId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submission methods
  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const now = new Date().toISOString();
    
    const contactSubmission: ContactSubmission = {
      ...contact,
      id,
      createdAt: now,
      hasResponded: false
    };
    
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async updateContactSubmissionResponseStatus(id: number, hasResponded: boolean): Promise<ContactSubmission | undefined> {
    const submission = this.contactSubmissions.get(id);
    
    if (!submission) {
      return undefined;
    }
    
    const updatedSubmission: ContactSubmission = {
      ...submission,
      hasResponded
    };
    
    this.contactSubmissions.set(id, updatedSubmission);
    return updatedSubmission;
  }
}

export const storage = new MemStorage();
