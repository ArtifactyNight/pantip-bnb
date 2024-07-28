import { PGlite } from "@electric-sql/pglite";
import { drizzle as drizzlePg } from "drizzle-orm/node-postgres";
import { migrate as migratePg } from "drizzle-orm/node-postgres/migrator";
import type { PgDatabase } from "drizzle-orm/pg-core";
import { drizzle as drizzlePglite } from "drizzle-orm/pglite";
import { migrate as migratePglite } from "drizzle-orm/pglite/migrator";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import path from "path";
import { Client } from "pg";

import { Env } from "./Env";

let client;
let drizzle: PgDatabase<any, any, any>;

if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD && Env.DATABASE_URL) {
  client = new Client({
    connectionString: Env.DATABASE_URL,
  });
  await client.connect();

  drizzle = drizzlePg(client);
  await migratePg(drizzle, {
    migrationsFolder: path.join(process.cwd(), "migrations"),
  });
} else {
  const global = globalThis as unknown as { client: PGlite };

  if (!global.client) {
    global.client = new PGlite();
    await global.client.waitReady;
  }

  drizzle = drizzlePglite(global.client);
  await migratePglite(drizzle, {
    migrationsFolder: path.join(process.cwd(), "migrations"),
  });
}

export const db = drizzle;