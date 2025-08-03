// src/app/api/schemas/cities.js
export const citiesSchema = {
  tableName: "cities",
  createTable: `
    CREATE TABLE IF NOT EXISTS cities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      state_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      slug TEXT NOT NULL,
      description TEXT,
      is_active BOOLEAN DEFAULT 1,
      display_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE,
      UNIQUE(state_id, slug)
    );
  `,
  seedData: [
    // Delhi (state_id: 1)
    {
      state_id: 1,
      name: "New Delhi",
      slug: "new-delhi",
      description:
        "New Delhi is the capital of India and offers a wide range of premium salon and beauty services.",
      display_order: 1,
    },
    {
      state_id: 1,
      name: "Central Delhi",
      slug: "central-delhi",
      description:
        "Central Delhi is known for its bustling markets and quality grooming services.",
      display_order: 2,
    },
    {
      state_id: 1,
      name: "South Delhi",
      slug: "south-delhi",
      description: "South Delhi features upscale salons and wellness centers.",
      display_order: 3,
    },

    // Maharashtra (state_id: 2)
    {
      state_id: 2,
      name: "Mumbai",
      slug: "mumbai",
      description:
        "Mumbai, the financial capital, has numerous high-end beauty and grooming establishments.",
      display_order: 1,
    },
    {
      state_id: 2,
      name: "Pune",
      slug: "pune",
      description:
        "Pune offers modern salon services with traditional touches.",
      display_order: 2,
    },

    // Karnataka (state_id: 3)
    {
      state_id: 3,
      name: "Bangalore",
      slug: "bangalore",
      description:
        "Bangalore is a tech hub with trendy salons and wellness spots.",
      display_order: 1,
    },

    // Add similar entries for other states as needed...
  ],
  insertQuery: `INSERT INTO cities (state_id, name, slug, description, display_order) VALUES (?, ?, ?, ?, ?)`,
  insertParams: (item) => [
    item.state_id,
    item.name,
    item.slug,
    item.description,
    item.display_order,
  ],
};
