import { type GuestbookEntry, type InsertGuestbookEntry } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getGuestbookEntries(): Promise<GuestbookEntry[]>;
  createGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry>;
}

export class MemStorage implements IStorage {
  private guestbookEntries: Map<string, GuestbookEntry>;

  constructor() {
    this.guestbookEntries = new Map();
  }

  async getGuestbookEntries(): Promise<GuestbookEntry[]> {
    return Array.from(this.guestbookEntries.values()).sort(
      (a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async createGuestbookEntry(insertEntry: InsertGuestbookEntry): Promise<GuestbookEntry> {
    const id = randomUUID();
    const entry: GuestbookEntry = { 
      ...insertEntry, 
      name: insertEntry.name || null,
      id, 
      createdAt: new Date() 
    };
    this.guestbookEntries.set(id, entry);
    return entry;
  }
}

export const storage = new MemStorage();
