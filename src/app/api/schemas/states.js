// src/app/api/schemas/states.js
export const statesSchema = {
  tableName: "states",
  createTable: `
    CREATE TABLE IF NOT EXISTS states (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      country_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      code TEXT,
      slug TEXT NOT NULL,
      is_active BOOLEAN DEFAULT 1,
      display_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE,
      UNIQUE(country_id, slug)
    );
  `,
  seedData: [
    // India - country_id: 1
    {
      country_id: 1,
      name: "Delhi",
      code: "DL",
      slug: "delhi",
      display_order: 1,
    },
    {
      country_id: 1,
      name: "Maharashtra",
      code: "MH",
      slug: "maharashtra",
      display_order: 2,
    },
    {
      country_id: 1,
      name: "Karnataka",
      code: "KA",
      slug: "karnataka",
      display_order: 3,
    },

    // United States - country_id: 2
    {
      country_id: 2,
      name: "New York",
      code: "NY",
      slug: "new-york",
      display_order: 1,
    },
    {
      country_id: 2,
      name: "Los Angeles",
      code: "CA",
      slug: "los-angeles",
      display_order: 2,
    },
    {
      country_id: 2,
      name: "Miami",
      code: "FL",
      slug: "miami",
      display_order: 3,
    },
    {
      country_id: 2,
      name: "Chicago",
      code: "IL",
      slug: "chicago",
      display_order: 4,
    },
    {
      country_id: 2,
      name: "Boston",
      code: "MA",
      slug: "boston",
      display_order: 5,
    },

    // Australia - country_id: 3
    { country_id: 3, name: "Melbourne", slug: "melbourne", display_order: 1 },
    { country_id: 3, name: "Sydney", slug: "sydney", display_order: 2 },
    { country_id: 3, name: "Perth", slug: "perth", display_order: 3 },
    { country_id: 3, name: "Brisbane", slug: "brisbane", display_order: 4 },
    { country_id: 3, name: "Gold Coast", slug: "gold-coast", display_order: 5 },

    // Brazil - country_id: 4
    { country_id: 4, name: "Sao Paulo", slug: "sao-paulo", display_order: 1 },
    {
      country_id: 4,
      name: "Rio de Janeiro",
      slug: "rio-de-janeiro",
      display_order: 2,
    },
    {
      country_id: 4,
      name: "Belo Horizonte",
      slug: "belo-horizonte",
      display_order: 3,
    },
    { country_id: 4, name: "Curitiba", slug: "curitiba", display_order: 4 },
    { country_id: 4, name: "Fortaleza", slug: "fortaleza", display_order: 5 },

    // Canada - country_id: 5
    { country_id: 5, name: "Toronto", slug: "toronto", display_order: 1 },
    { country_id: 5, name: "Montreal", slug: "montreal", display_order: 2 },
    { country_id: 5, name: "Vancouver", slug: "vancouver", display_order: 3 },
    { country_id: 5, name: "Calgary", slug: "calgary", display_order: 4 },
    { country_id: 5, name: "Edmonton", slug: "edmonton", display_order: 5 },

    // France - country_id: 6
    { country_id: 6, name: "Paris", slug: "paris", display_order: 1 },
    { country_id: 6, name: "Lyon", slug: "lyon", display_order: 2 },
    { country_id: 6, name: "Bordeaux", slug: "bordeaux", display_order: 3 },
    { country_id: 6, name: "Marseille", slug: "marseille", display_order: 4 },
    { country_id: 6, name: "Lille", slug: "lille", display_order: 5 },

    // Germany - country_id: 7
    { country_id: 7, name: "Berlin", slug: "berlin", display_order: 1 },
    { country_id: 7, name: "Munich", slug: "munich", display_order: 2 },
    {
      country_id: 7,
      name: "Frankfurt am Main",
      slug: "frankfurt-am-main",
      display_order: 3,
    },
    { country_id: 7, name: "Dortmund", slug: "dortmund", display_order: 4 },
    { country_id: 7, name: "Hamburg", slug: "hamburg", display_order: 5 },

    // Greece - country_id: 8
    { country_id: 8, name: "Athens", slug: "athens", display_order: 1 },
    {
      country_id: 8,
      name: "Thessaloniki",
      slug: "thessaloniki",
      display_order: 2,
    },
    { country_id: 8, name: "Irakleio", slug: "irakleio", display_order: 3 },
    { country_id: 8, name: "Chania", slug: "chania", display_order: 4 },
    { country_id: 8, name: "Larisa", slug: "larisa", display_order: 5 },

    // Ireland - country_id: 9
    { country_id: 9, name: "Dublin", slug: "dublin", display_order: 1 },
    { country_id: 9, name: "Cork", slug: "cork", display_order: 2 },
    { country_id: 9, name: "Limerick", slug: "limerick", display_order: 3 },
    { country_id: 9, name: "Drogheda", slug: "drogheda", display_order: 4 },
    { country_id: 9, name: "Mullingar", slug: "mullingar", display_order: 5 },

    // Italy - country_id: 10
    { country_id: 10, name: "Rome", slug: "rome", display_order: 1 },
    { country_id: 10, name: "Milan", slug: "milan", display_order: 2 },
    { country_id: 10, name: "Naples", slug: "naples", display_order: 3 },
    { country_id: 10, name: "Turin", slug: "turin", display_order: 4 },
    { country_id: 10, name: "Palermo", slug: "palermo", display_order: 5 },

    // Mexico - country_id: 11
    {
      country_id: 11,
      name: "Mexico City",
      slug: "mexico-city",
      display_order: 1,
    },
    { country_id: 11, name: "Monterrey", slug: "monterrey", display_order: 2 },
    { country_id: 11, name: "Queretaro", slug: "queretaro", display_order: 3 },
    {
      country_id: 11,
      name: "Guadalajara",
      slug: "guadalajara",
      display_order: 4,
    },
    { country_id: 11, name: "Chihuahua", slug: "chihuahua", display_order: 5 },

    // Netherlands - country_id: 12
    { country_id: 12, name: "Amsterdam", slug: "amsterdam", display_order: 1 },
    { country_id: 12, name: "Rotterdam", slug: "rotterdam", display_order: 2 },
    { country_id: 12, name: "The Hague", slug: "the-hague", display_order: 3 },
    { country_id: 12, name: "Eindhoven", slug: "eindhoven", display_order: 4 },
    { country_id: 12, name: "Utrecht", slug: "utrecht", display_order: 5 },

    // Saudi Arabia - country_id: 13
    { country_id: 13, name: "Riyadh", slug: "riyadh", display_order: 1 },
    { country_id: 13, name: "Alkhubar", slug: "alkhubar", display_order: 2 },
    { country_id: 13, name: "Addiriyah", slug: "addiriyah", display_order: 3 },
    { country_id: 13, name: "Jiddah", slug: "jiddah", display_order: 4 },
    { country_id: 13, name: "Addammam", slug: "addammam", display_order: 5 },

    // Spain - country_id: 14
    { country_id: 14, name: "Madrid", slug: "madrid", display_order: 1 },
    { country_id: 14, name: "Barcelona", slug: "barcelona", display_order: 2 },
    { country_id: 14, name: "Marbella", slug: "marbella", display_order: 3 },
    { country_id: 14, name: "Valencia", slug: "valencia", display_order: 4 },
    {
      country_id: 14,
      name: "Palma de Mallorca",
      slug: "palma-de-mallorca",
      display_order: 5,
    },

    // United Kingdom - country_id: 15
    { country_id: 15, name: "London", slug: "london", display_order: 1 },
    {
      country_id: 15,
      name: "Manchester",
      slug: "manchester",
      display_order: 2,
    },
    { country_id: 15, name: "Glasgow", slug: "glasgow", display_order: 3 },
    {
      country_id: 15,
      name: "Birmingham",
      slug: "birmingham",
      display_order: 4,
    },
    { country_id: 15, name: "Liverpool", slug: "liverpool", display_order: 5 },
  ],
  insertQuery: `INSERT INTO states (country_id, name, code, slug, display_order) VALUES (?, ?, ?, ?, ?)`,
  insertParams: (item) => [
    item.country_id,
    item.name,
    item.code ?? null,
    item.slug,
    item.display_order,
  ],
};
