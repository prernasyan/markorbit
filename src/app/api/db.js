// src/app/api/db.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

let db = null;

export async function openDb() {
  if (!db) {
    db = await open({
      filename: path.join(process.cwd(), "database.sqlite"),
      driver: sqlite3.Database,
    });

    // Enable foreign keys
    await db.exec("PRAGMA foreign_keys = ON;");
  }
  return db;
}
