// src/app/api/schemas/seo-metadata.js
export const seoMetadataSchema = {
  tableName: "seo_metadata",
  createTable: `
    CREATE TABLE IF NOT EXISTS seo_metadata (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      page_type TEXT NOT NULL,
      reference_id INTEGER NOT NULL,
      title TEXT,
      meta_description TEXT,
      meta_keywords TEXT,
      canonical_url TEXT,
      og_title TEXT,
      og_description TEXT,
      og_image TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(page_type, reference_id)
    );
  `,
  seedData: [
    {
      page_type: "country",
      reference_id: 1,
      title: "Beauty & Salon Services in India",
      meta_description:
        "Find the best beauty salons and wellness services across India. Professional treatments at affordable prices.",
      meta_keywords: "beauty salon india, spa services india, hair salon india",
      og_title: "Beauty Services in India",
      og_description: "Discover premium beauty and wellness services in India",
    },
    {
      page_type: "state",
      reference_id: 1,
      title: "Best Salons in Delhi",
      meta_description:
        "Explore top-rated beauty salons and spas in Delhi. Book appointments for hair, beauty, and wellness services.",
      meta_keywords: "beauty salon delhi, hair salon delhi, spa delhi",
      og_title: "Beauty Salons in Delhi",
      og_description: "Premium beauty services in Delhi",
    },
    {
      page_type: "city",
      reference_id: 1,
      title: "Beauty Salons in New Delhi",
      meta_description:
        "Find top-rated beauty salons and spas in New Delhi. Professional hair, beauty, and wellness treatments.",
      meta_keywords:
        "beauty salon new delhi, hair salon new delhi, spa new delhi",
      og_title: "Beauty Salons in New Delhi",
      og_description: "Discover quality beauty services in New Delhi",
    },
  ],
  insertQuery: `INSERT INTO seo_metadata (page_type, reference_id, title, meta_description, meta_keywords, og_title, og_description) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  insertParams: (item) => [
    item.page_type,
    item.reference_id,
    item.title,
    item.meta_description,
    item.meta_keywords,
    item.og_title,
    item.og_description,
  ],
};
