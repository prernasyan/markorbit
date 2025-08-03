// // Database connection utility (lib/db.js)
// import { Pool } from "pg";

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// export { pool };

// lib/db.js
import Database from "better-sqlite3";

const db = new Database("src/app/api/db.js"); // Path to your SQLite file

export { db };
