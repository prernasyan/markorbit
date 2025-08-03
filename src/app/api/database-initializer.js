// src/app/api/database-initializer.js
import { openDb } from "./db.js";
import { countriesSchema } from "./schemas/countries.js";
import { statesSchema } from "./schemas/states.js";
import { citiesSchema } from "./schemas/cities.js";
import { serviceCategoriesSchema } from "./schemas/service-categories.js";
import { servicesSchema } from "./schemas/services.js";
import { locationServicesSchema } from "./schemas/location-services.js";
import { businessListingsSchema } from "./schemas/business-listings.js";
import { businessLocationServicesSchema } from "./schemas/business-location-services.js";
import { seoMetadataSchema } from "./schemas/seo-metadata.js";

// Define the order of table creation (important for foreign keys)
const schemas = [
  countriesSchema,
  statesSchema,
  citiesSchema,
  serviceCategoriesSchema,
  servicesSchema,
  locationServicesSchema,
  businessListingsSchema,
  businessLocationServicesSchema,
  seoMetadataSchema,
];

export async function initializeDatabase() {
  const db = await openDb();
  const results = [];

  try {
    console.log("🚀 Starting database initialization...");

    for (const schema of schemas) {
      console.log(`📋 Creating table: ${schema.tableName}`);

      // Create table
      await db.exec(schema.createTable);

      // Check if data already exists
      const existingData = await db.get(
        `SELECT COUNT(*) as count FROM ${schema.tableName}`
      );

      if (existingData.count === 0 && schema.seedData) {
        console.log(`📊 Seeding data for: ${schema.tableName}`);

        // Insert seed data
        for (const item of schema.seedData) {
          await db.run(schema.insertQuery, schema.insertParams(item));
        }

        results.push({
          table: schema.tableName,
          status: "created_and_seeded",
          count: schema.seedData.length,
        });

        console.log(
          `✅ ${schema.tableName}: Created and seeded with ${schema.seedData.length} records`
        );
      } else {
        results.push({
          table: schema.tableName,
          status: "already_exists",
          count: existingData.count,
        });

        console.log(
          `ℹ️ ${schema.tableName}: Already exists with ${existingData.count} records`
        );
      }
    }

    console.log("🎉 Database initialization completed successfully!");

    return {
      success: true,
      message: "Database initialized successfully",
      results,
    };
  } catch (error) {
    console.error("❌ Error initializing database:", error);
    throw error;
  }
}

export async function resetDatabase() {
  const db = await openDb();

  try {
    console.log("🔄 Resetting database...");

    // Drop tables in reverse order (to handle foreign keys)
    const reverseSchemas = [...schemas].reverse();

    for (const schema of reverseSchemas) {
      await db.exec(`DROP TABLE IF EXISTS ${schema.tableName}`);
      console.log(`🗑️ Dropped table: ${schema.tableName}`);
    }

    // Recreate all tables
    const result = await initializeDatabase();

    console.log("🎉 Database reset completed!");
    return result;
  } catch (error) {
    console.error("❌ Error resetting database:", error);
    throw error;
  }
}
