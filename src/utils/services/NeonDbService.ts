import { Pool } from "@neondatabase/serverless";

export async function getNeonDBPool() {
  return new Pool({
    connectionString: process.env.NEON_DATABASE_URL,
  });
}
