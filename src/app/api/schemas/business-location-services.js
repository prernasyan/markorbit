// src/app/api/schemas/business-location-services.js
export const businessLocationServicesSchema = {
  tableName: "business_location_services",
  createTable: `
    CREATE TABLE IF NOT EXISTS business_location_services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_id INTEGER NOT NULL,
      location_service_id INTEGER NOT NULL,
      price_min DECIMAL(10,2),
      price_max DECIMAL(10,2),
      is_active BOOLEAN DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (business_id) REFERENCES business_listings(id) ON DELETE CASCADE,
      FOREIGN KEY (location_service_id) REFERENCES location_services(id) ON DELETE CASCADE,
      UNIQUE(business_id, location_service_id)
    );
  `,
  seedData: [
    {
      business_id: 1,
      location_service_id: 1,
      price_min: 800,
      price_max: 1200,
      is_active: true,
    },
    {
      business_id: 1,
      location_service_id: 4,
      price_min: 1500,
      price_max: 2500,
      is_active: true,
    },
    {
      business_id: 2,
      location_service_id: 1,
      price_min: 1000,
      price_max: 1500,
      is_active: true,
    },
  ],
  insertQuery: `INSERT INTO business_location_services (business_id, location_service_id, price_min, price_max, is_active) VALUES (?, ?, ?, ?, ?)`,
  insertParams: (item) => [
    item.business_id,
    item.location_service_id,
    item.price_min,
    item.price_max,
    item.is_active,
  ],
};
