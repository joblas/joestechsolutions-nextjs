import { promises as fs } from "fs";
import path from "path";

// Simple JSON file storage for intakes
// For production, consider using a proper database (Prisma, Supabase, etc.)

export interface IntakeData {
  id: string;
  sessionId: string;
  email: string;
  name: string;
  setupType: "local" | "vps";
  operatingSystem: string;
  specs: string;
  useCases: string;
  // VPS-specific fields
  domainPreference?: string;
  modelSizePreference?: "small" | "medium" | "large";
  // Metadata
  timestamp: string;
  status: "pending" | "scheduled" | "completed";
}

const DATA_DIR = path.join(process.cwd(), "data");
const INTAKES_FILE = path.join(DATA_DIR, "intakes.json");

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Read all intakes
export async function getIntakes(): Promise<IntakeData[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(INTAKES_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Add a new intake
export async function addIntake(
  intake: Omit<IntakeData, "id" | "timestamp" | "status">
): Promise<IntakeData> {
  await ensureDataDir();
  const intakes = await getIntakes();

  const newIntake: IntakeData = {
    ...intake,
    id: `intake_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    timestamp: new Date().toISOString(),
    status: "pending",
  };

  intakes.push(newIntake);
  await fs.writeFile(INTAKES_FILE, JSON.stringify(intakes, null, 2));

  return newIntake;
}

// Update an intake
export async function updateIntake(
  id: string,
  updates: Partial<IntakeData>
): Promise<IntakeData | null> {
  const intakes = await getIntakes();
  const index = intakes.findIndex((i) => i.id === id);

  if (index === -1) return null;

  intakes[index] = { ...intakes[index], ...updates };
  await fs.writeFile(INTAKES_FILE, JSON.stringify(intakes, null, 2));

  return intakes[index];
}

// Get recent intakes (for admin endpoint)
export async function getRecentIntakes(limit: number = 50): Promise<IntakeData[]> {
  const intakes = await getIntakes();
  return intakes
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
}

// Get intake by session ID
export async function getIntakeBySessionId(sessionId: string): Promise<IntakeData | null> {
  const intakes = await getIntakes();
  return intakes.find((i) => i.sessionId === sessionId) || null;
}

/*
 * PRODUCTION ALTERNATIVES:
 *
 * 1. SQLite with better-sqlite3:
 *    npm install better-sqlite3
 *    Use SQL queries for more robust storage
 *
 * 2. Prisma with PostgreSQL/SQLite:
 *    npm install prisma @prisma/client
 *    npx prisma init
 *    Define schema and use type-safe queries
 *
 * 3. Supabase:
 *    npm install @supabase/supabase-js
 *    Use hosted PostgreSQL with real-time features
 *
 * 4. Vercel KV (Redis):
 *    npm install @vercel/kv
 *    Simple key-value storage
 */
