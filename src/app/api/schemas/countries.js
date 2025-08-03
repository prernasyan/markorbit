// src/app/api/schemas/countries.js
export const countriesSchema = {
  tableName: "countries",
  createTable: `
    CREATE TABLE IF NOT EXISTS countries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      code TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE,
      is_active BOOLEAN DEFAULT 1,
      display_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `,
  seedData: [
    { name: "India", code: "IN", slug: "india", display_order: 1 },
    {
      name: "United States",
      code: "US",
      slug: "united-states",
      display_order: 2,
    },
    { name: "Australia", code: "AU", slug: "australia", display_order: 3 },
    { name: "Brazil", code: "BR", slug: "brazil", display_order: 4 },
    { name: "Canada", code: "CA", slug: "canada", display_order: 5 },
    { name: "France", code: "FR", slug: "france", display_order: 6 },
    { name: "Germany", code: "DE", slug: "germany", display_order: 7 },
    { name: "Greece", code: "GR", slug: "greece", display_order: 8 },
    { name: "Ireland", code: "IE", slug: "ireland", display_order: 9 },
    { name: "Italy", code: "IT", slug: "italy", display_order: 10 },
    { name: "Mexico", code: "MX", slug: "mexico", display_order: 11 },
    { name: "Netherlands", code: "NL", slug: "netherlands", display_order: 12 },
    {
      name: "Saudi Arabia",
      code: "SA",
      slug: "saudi-arabia",
      display_order: 13,
    },
    { name: "Spain", code: "ES", slug: "spain", display_order: 14 },
    {
      name: "United Kingdom",
      code: "GB",
      slug: "united-kingdom",
      display_order: 15,
    },
    { name: "Singapore", code: "SG", slug: "singapore", display_order: 16 },
  ],
  insertQuery: `INSERT INTO countries (name, code, slug, display_order) VALUES (?, ?, ?, ?)`,
  insertParams: (item) => [item.name, item.code, item.slug, item.display_order],
};
