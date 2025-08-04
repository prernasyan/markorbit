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
    {
      country_id: 1,
      name: "Tamil Nadu",
      code: "TN",
      slug: "tamil-nadu",
      display_order: 4,
    },
    {
      country_id: 1,
      name: "West Bengal",
      code: "WB",
      slug: "west-bengal",
      display_order: 5,
    },
    {
      country_id: 1,
      name: "Gujarat",
      code: "GJ",
      slug: "gujarat",
      display_order: 6,
    },
    {
      country_id: 1,
      name: "Rajasthan",
      code: "RJ",
      slug: "rajasthan",
      display_order: 7,
    },
    {
      country_id: 1,
      name: "Punjab",
      code: "PB",
      slug: "punjab",
      display_order: 8,
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
      name: "California",
      code: "CA",
      slug: "california",
      display_order: 2,
    },
    {
      country_id: 2,
      name: "Florida",
      code: "FL",
      slug: "florida",
      display_order: 3,
    },
    {
      country_id: 2,
      name: "Illinois",
      code: "IL",
      slug: "illinois",
      display_order: 4,
    },
    {
      country_id: 2,
      name: "Massachusetts",
      code: "MA",
      slug: "massachusetts",
      display_order: 5,
    },
    {
      country_id: 2,
      name: "Texas",
      code: "TX",
      slug: "texas",
      display_order: 6,
    },

    // Australia - country_id: 3
    {
      country_id: 3,
      name: "Victoria",
      code: "VIC",
      slug: "victoria",
      display_order: 1,
    },
    {
      country_id: 3,
      name: "New South Wales",
      code: "NSW",
      slug: "new-south-wales",
      display_order: 2,
    },
    {
      country_id: 3,
      name: "Western Australia",
      code: "WA",
      slug: "western-australia",
      display_order: 3,
    },
    {
      country_id: 3,
      name: "Queensland",
      code: "QLD",
      slug: "queensland",
      display_order: 4,
    },

    // Brazil - country_id: 4
    { country_id: 4, name: "São Paulo", slug: "sao-paulo", display_order: 1 },
    {
      country_id: 4,
      name: "Rio de Janeiro",
      slug: "rio-de-janeiro",
      display_order: 2,
    },
    {
      country_id: 4,
      name: "Minas Gerais",
      slug: "minas-gerais",
      display_order: 3,
    },
    { country_id: 4, name: "Paraná", slug: "parana", display_order: 4 },
    { country_id: 4, name: "Ceará", slug: "ceara", display_order: 5 },

    // Canada - country_id: 5
    {
      country_id: 5,
      name: "Ontario",
      code: "ON",
      slug: "ontario",
      display_order: 1,
    },
    {
      country_id: 5,
      name: "Quebec",
      code: "QC",
      slug: "quebec",
      display_order: 2,
    },
    {
      country_id: 5,
      name: "British Columbia",
      code: "BC",
      slug: "british-columbia",
      display_order: 3,
    },
    {
      country_id: 5,
      name: "Alberta",
      code: "AB",
      slug: "alberta",
      display_order: 4,
    },

    // France - country_id: 6
    {
      country_id: 6,
      name: "Île-de-France",
      slug: "ile-de-france",
      display_order: 1,
    },
    {
      country_id: 6,
      name: "Auvergne-Rhône-Alpes",
      slug: "auvergne-rhone-alpes",
      display_order: 2,
    },
    {
      country_id: 6,
      name: "Nouvelle-Aquitaine",
      slug: "nouvelle-aquitaine",
      display_order: 3,
    },
    {
      country_id: 6,
      name: "Provence-Alpes-Côte d'Azur",
      slug: "provence-alpes-cote-dazur",
      display_order: 4,
    },
    {
      country_id: 6,
      name: "Hauts-de-France",
      slug: "hauts-de-france",
      display_order: 5,
    },

    // Germany - country_id: 7
    { country_id: 7, name: "Berlin", slug: "berlin", display_order: 1 },
    { country_id: 7, name: "Bavaria", slug: "bavaria", display_order: 2 },
    { country_id: 7, name: "Hesse", slug: "hesse", display_order: 3 },
    {
      country_id: 7,
      name: "North Rhine-Westphalia",
      slug: "north-rhine-westphalia",
      display_order: 4,
    },
    { country_id: 7, name: "Hamburg", slug: "hamburg", display_order: 5 },

    // Greece - country_id: 8
    { country_id: 8, name: "Attica", slug: "attica", display_order: 1 },
    {
      country_id: 8,
      name: "Central Macedonia",
      slug: "central-macedonia",
      display_order: 2,
    },
    { country_id: 8, name: "Crete", slug: "crete", display_order: 3 },
    { country_id: 8, name: "Thessaly", slug: "thessaly", display_order: 4 },

    // Ireland - country_id: 9
    { country_id: 9, name: "Leinster", slug: "leinster", display_order: 1 },
    { country_id: 9, name: "Munster", slug: "munster", display_order: 2 },
    { country_id: 9, name: "Connacht", slug: "connacht", display_order: 3 },

    // Italy - country_id: 10
    { country_id: 10, name: "Lazio", slug: "lazio", display_order: 1 },
    { country_id: 10, name: "Lombardy", slug: "lombardy", display_order: 2 },
    { country_id: 10, name: "Campania", slug: "campania", display_order: 3 },
    { country_id: 10, name: "Piedmont", slug: "piedmont", display_order: 4 },
    { country_id: 10, name: "Sicily", slug: "sicily", display_order: 5 },

    // Mexico - country_id: 11
    {
      country_id: 11,
      name: "Mexico City",
      slug: "mexico-city",
      display_order: 1,
    },
    {
      country_id: 11,
      name: "Nuevo León",
      slug: "nuevo-leon",
      display_order: 2,
    },
    { country_id: 11, name: "Querétaro", slug: "queretaro", display_order: 3 },
    { country_id: 11, name: "Jalisco", slug: "jalisco", display_order: 4 },
    { country_id: 11, name: "Chihuahua", slug: "chihuahua", display_order: 5 },

    // Netherlands - country_id: 12
    {
      country_id: 12,
      name: "North Holland",
      slug: "north-holland",
      display_order: 1,
    },
    {
      country_id: 12,
      name: "South Holland",
      slug: "south-holland",
      display_order: 2,
    },
    {
      country_id: 12,
      name: "North Brabant",
      slug: "north-brabant",
      display_order: 3,
    },
    { country_id: 12, name: "Utrecht", slug: "utrecht", display_order: 4 },

    // Saudi Arabia - country_id: 13
    {
      country_id: 13,
      name: "Riyadh Province",
      slug: "riyadh-province",
      display_order: 1,
    },
    {
      country_id: 13,
      name: "Eastern Province",
      slug: "eastern-province",
      display_order: 2,
    },
    {
      country_id: 13,
      name: "Makkah Province",
      slug: "makkah-province",
      display_order: 3,
    },

    // Spain - country_id: 14
    {
      country_id: 14,
      name: "Community of Madrid",
      slug: "community-of-madrid",
      display_order: 1,
    },
    { country_id: 14, name: "Catalonia", slug: "catalonia", display_order: 2 },
    { country_id: 14, name: "Andalusia", slug: "andalusia", display_order: 3 },
    {
      country_id: 14,
      name: "Valencian Community",
      slug: "valencian-community",
      display_order: 4,
    },
    {
      country_id: 14,
      name: "Balearic Islands",
      slug: "balearic-islands",
      display_order: 5,
    },

    // United Kingdom - country_id: 15
    { country_id: 15, name: "England", slug: "england", display_order: 1 },
    { country_id: 15, name: "Scotland", slug: "scotland", display_order: 2 },
    { country_id: 15, name: "Wales", slug: "wales", display_order: 3 },

    // Singapore - country_id: 16
    { country_id: 16, name: "Singapore", slug: "singapore", display_order: 1 },
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
