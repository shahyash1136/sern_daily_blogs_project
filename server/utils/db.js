import pkg from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

const { Pool } = pkg;

/* const db = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "daily_blogs",
  password: process.env.PGPASSWORD || "admin",
  port: process.env.PGPORT || 5432,
}); */

const db = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

export { db };