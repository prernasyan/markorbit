// src/app/api/schemas/service-categories.js
export const serviceCategoriesSchema = {
  tableName: "service_categories",
  createTable: `
    CREATE TABLE IF NOT EXISTS service_categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE,
      description TEXT,
      icon TEXT,
      is_active BOOLEAN DEFAULT 1,
      display_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `,
  seedData: [
    {
      name: "SEO & Search Marketing",
      slug: "seo-search-marketing",
      description: "Search Engine Optimization and search marketing services",
      icon: "search",
      display_order: 1,
    },
    {
      name: "E-commerce Management",
      slug: "ecommerce-management",
      description: "Complete e-commerce platform management services",
      icon: "shopping-cart",
      display_order: 2,
    },
    {
      name: "Advertising & PPC",
      slug: "advertising-ppc",
      description: "Pay-per-click advertising and campaign management",
      icon: "target",
      display_order: 3,
    },
    {
      name: "Web Development",
      slug: "web-development",
      description: "Website and web application development services",
      icon: "code",
      display_order: 4,
    },
    {
      name: "Social Media & Content",
      slug: "social-media-content",
      description: "Social media management and content creation services",
      icon: "share-2",
      display_order: 5,
    },
    {
      name: "Email & Lead Generation",
      slug: "email-lead-generation",
      description: "Email marketing and lead generation services",
      icon: "mail",
      display_order: 6,
    },
    {
      name: "Video Production",
      slug: "video-production",
      description: "Video creation and production services",
      icon: "video",
      display_order: 7,
    },
    {
      name: "Platform Onboarding",
      slug: "platform-onboarding",
      description: "Marketplace onboarding and setup services",
      icon: "upload",
      display_order: 8,
    },
  ],
  insertQuery: `INSERT INTO service_categories (name, slug, description, icon, display_order) VALUES (?, ?, ?, ?, ?)`,
  insertParams: (item) => [
    item.name,
    item.slug,
    item.description,
    item.icon,
    item.display_order,
  ],
};
