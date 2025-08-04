// // src/app/api/schemas/location-services.js
// export const locationServicesSchema = {
//   tableName: "location_services",
//   createTable: `
//     CREATE TABLE IF NOT EXISTS location_services (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       service_id INTEGER NOT NULL,
//       country_id INTEGER NOT NULL,
//       state_id INTEGER NOT NULL,
//       city_id INTEGER NOT NULL,
//       is_active BOOLEAN DEFAULT 1,
//       priority INTEGER DEFAULT 0,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
//       FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE,
//       FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE,
//       FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE,
//       UNIQUE(service_id, country_id, state_id, city_id)
//     );
//   `,
//   seedData: [
//     // Example output from programmatically generating full combinations:
//     { service_id: 1, country_id: 1, state_id: 1, city_id: 1, priority: 1 },
//     { service_id: 2, country_id: 1, state_id: 1, city_id: 1, priority: 2 },
//     { service_id: 3, country_id: 1, state_id: 1, city_id: 1, priority: 3 },
//     { service_id: 4, country_id: 1, state_id: 1, city_id: 1, priority: 4 },
//     { service_id: 5, country_id: 1, state_id: 1, city_id: 1, priority: 5 },
//     { service_id: 6, country_id: 1, state_id: 1, city_id: 1, priority: 6 },
//     { service_id: 7, country_id: 1, state_id: 1, city_id: 1, priority: 7 },
//     { service_id: 8, country_id: 1, state_id: 1, city_id: 1, priority: 8 },
//     { service_id: 9, country_id: 1, state_id: 1, city_id: 1, priority: 9 },
//     { service_id: 10, country_id: 1, state_id: 1, city_id: 1, priority: 10 },
//     { service_id: 11, country_id: 1, state_id: 1, city_id: 1, priority: 11 },
//     { service_id: 12, country_id: 1, state_id: 1, city_id: 1, priority: 12 },
//     { service_id: 13, country_id: 1, state_id: 1, city_id: 1, priority: 13 },
//     { service_id: 14, country_id: 1, state_id: 1, city_id: 1, priority: 14 },
//     { service_id: 15, country_id: 1, state_id: 1, city_id: 1, priority: 15 },
//     { service_id: 16, country_id: 1, state_id: 1, city_id: 1, priority: 16 },
//     { service_id: 17, country_id: 1, state_id: 1, city_id: 1, priority: 17 },
//     { service_id: 18, country_id: 1, state_id: 1, city_id: 1, priority: 18 },
//     { service_id: 19, country_id: 1, state_id: 1, city_id: 1, priority: 19 },
//     { service_id: 20, country_id: 1, state_id: 1, city_id: 1, priority: 20 },
//     { service_id: 21, country_id: 1, state_id: 1, city_id: 1, priority: 21 },
//     { service_id: 22, country_id: 1, state_id: 1, city_id: 1, priority: 22 },
//     { service_id: 23, country_id: 1, state_id: 1, city_id: 1, priority: 23 },
//     { service_id: 24, country_id: 1, state_id: 1, city_id: 1, priority: 24 },
//     { service_id: 25, country_id: 1, state_id: 1, city_id: 1, priority: 25 },
//     { service_id: 26, country_id: 1, state_id: 1, city_id: 1, priority: 26 },
//     { service_id: 27, country_id: 1, state_id: 1, city_id: 1, priority: 27 },
//     { service_id: 28, country_id: 1, state_id: 1, city_id: 1, priority: 28 },
//     { service_id: 29, country_id: 1, state_id: 1, city_id: 1, priority: 29 },
//     { service_id: 30, country_id: 1, state_id: 1, city_id: 1, priority: 30 },
//     { service_id: 31, country_id: 1, state_id: 1, city_id: 1, priority: 31 },
//     { service_id: 32, country_id: 1, state_id: 1, city_id: 1, priority: 32 },
//     { service_id: 33, country_id: 1, state_id: 1, city_id: 1, priority: 33 },
//     { service_id: 34, country_id: 1, state_id: 1, city_id: 1, priority: 34 },
//     { service_id: 35, country_id: 1, state_id: 1, city_id: 1, priority: 35 },
//     { service_id: 36, country_id: 1, state_id: 1, city_id: 1, priority: 36 },
//     { service_id: 37, country_id: 1, state_id: 1, city_id: 1, priority: 37 },
//     { service_id: 38, country_id: 1, state_id: 1, city_id: 1, priority: 38 },
//     { service_id: 39, country_id: 1, state_id: 1, city_id: 1, priority: 39 },
//     { service_id: 40, country_id: 1, state_id: 1, city_id: 1, priority: 40 },
//     { service_id: 41, country_id: 1, state_id: 1, city_id: 1, priority: 41 },
//     { service_id: 42, country_id: 1, state_id: 1, city_id: 1, priority: 42 },
//     { service_id: 43, country_id: 1, state_id: 1, city_id: 1, priority: 43 },
//     { service_id: 44, country_id: 1, state_id: 1, city_id: 1, priority: 44 },
//     { service_id: 45, country_id: 1, state_id: 1, city_id: 1, priority: 45 },
//     { service_id: 46, country_id: 1, state_id: 1, city_id: 1, priority: 46 },
//     { service_id: 47, country_id: 1, state_id: 1, city_id: 1, priority: 47 },
//     { service_id: 48, country_id: 1, state_id: 1, city_id: 1, priority: 48 },
//     { service_id: 49, country_id: 1, state_id: 1, city_id: 1, priority: 49 },
//     { service_id: 50, country_id: 1, state_id: 1, city_id: 1, priority: 50 },
//     { service_id: 51, country_id: 1, state_id: 1, city_id: 1, priority: 51 },
//     { service_id: 52, country_id: 1, state_id: 1, city_id: 1, priority: 52 },
//     { service_id: 53, country_id: 1, state_id: 1, city_id: 1, priority: 53 },
//     { service_id: 54, country_id: 1, state_id: 1, city_id: 1, priority: 54 },
//     { service_id: 55, country_id: 1, state_id: 1, city_id: 1, priority: 55 },
//     { service_id: 56, country_id: 1, state_id: 1, city_id: 1, priority: 56 },
//     { service_id: 57, country_id: 1, state_id: 1, city_id: 1, priority: 57 },
//     { service_id: 58, country_id: 1, state_id: 1, city_id: 1, priority: 58 },
//     { service_id: 59, country_id: 1, state_id: 1, city_id: 1, priority: 59 },
//   ],
//   insertQuery: `INSERT INTO location_services (service_id, country_id, state_id, city_id, priority) VALUES (?, ?, ?, ?, ?)`,
//   insertParams: (item) => [
//     item.service_id,
//     item.country_id,
//     item.state_id,
//     item.city_id,
//     item.priority,
//   ],
// };

import { citiesSchema } from "./cities";

// Function to generate all location services combinations
function generateLocationServices() {
  // Define the complete mapping structure
  const stateToCountryMapping = {
    // India (country_id: 1)
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    // United States (country_id: 2)
    9: 2,
    10: 2,
    11: 2,
    12: 2,
    13: 2,
    14: 2,
    // Australia (country_id: 3)
    15: 3,
    16: 3,
    17: 3,
    18: 3,
    // Brazil (country_id: 4)
    19: 4,
    20: 4,
    21: 4,
    22: 4,
    23: 4,
    // Canada (country_id: 5)
    24: 5,
    25: 5,
    26: 5,
    27: 5,
    // France (country_id: 6)
    28: 6,
    29: 6,
    30: 6,
    31: 6,
    32: 6,
    // Germany (country_id: 7)
    33: 7,
    34: 7,
    35: 7,
    36: 7,
    37: 7,
    // Greece (country_id: 8)
    38: 8,
    39: 8,
    40: 8,
    41: 8,
    // Ireland (country_id: 9)
    42: 9,
    43: 9,
    44: 9,
    // Italy (country_id: 10)
    45: 10,
    46: 10,
    47: 10,
    48: 10,
    49: 10,
    // Mexico (country_id: 11)
    50: 11,
    51: 11,
    52: 11,
    53: 11,
    54: 11,
    // Netherlands (country_id: 12)
    55: 12,
    56: 12,
    57: 12,
    58: 12,
    // Saudi Arabia (country_id: 13)
    59: 13,
    60: 13,
    61: 13,
    // Spain (country_id: 14)
    62: 14,
    63: 14,
    64: 14,
    65: 14,
    66: 14,
    // United Kingdom (country_id: 15)
    67: 15,
    68: 15,
    69: 15,
    // Singapore (country_id: 16)
    70: 16,
  };

  const locationServices = [];
  let priorityCounter = 1;

  // Get all cities from the schema above
  const allCities = citiesSchema.seedData;

  // For each service (1-59)
  for (let serviceId = 1; serviceId <= 59; serviceId++) {
    // For each city
    for (const city of allCities) {
      const stateId = city.state_id;
      const countryId = stateToCountryMapping[stateId];

      // Assign city_id based on the index in the array + 1
      const cityId = allCities.indexOf(city) + 1;

      locationServices.push({
        service_id: serviceId,
        country_id: countryId,
        state_id: stateId,
        city_id: cityId,
        priority: priorityCounter++,
      });
    }
  }

  return locationServices;
}

// Generate the complete location services data
const completeLocationServices = generateLocationServices();

// src/app/api/schemas/location-services.js
export const locationServicesSchema = {
  tableName: "location_services",
  createTable: `
    CREATE TABLE IF NOT EXISTS location_services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      service_id INTEGER NOT NULL,
      country_id INTEGER NOT NULL,
      state_id INTEGER NOT NULL,
      city_id INTEGER NOT NULL,
      is_active BOOLEAN DEFAULT 1,
      priority INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
      FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE,
      FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE,
      FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE,
      UNIQUE(service_id, country_id, state_id, city_id)
    );
  `,
  seedData: completeLocationServices,
  insertQuery: `INSERT INTO location_services (service_id, country_id, state_id, city_id, priority) VALUES (?, ?, ?, ?, ?)`,
  insertParams: (item) => [
    item.service_id,
    item.country_id,
    item.state_id,
    item.city_id,
    item.priority,
  ],
};

// Export statistics for reference
export const locationStats = {
  totalCountries: 16,
  totalStates: 70,
  totalCities: citiesSchema.seedData.length,
  totalServices: 59,
  totalLocationServices: completeLocationServices.length,
  breakdown: {
    India: {
      states: 8,
      cities: citiesSchema.seedData.filter((c) =>
        [1, 2, 3, 4, 5, 6, 7, 8].includes(c.state_id)
      ).length,
    },
    "United States": {
      states: 6,
      cities: citiesSchema.seedData.filter((c) =>
        [9, 10, 11, 12, 13, 14].includes(c.state_id)
      ).length,
    },
    Australia: {
      states: 4,
      cities: citiesSchema.seedData.filter((c) =>
        [15, 16, 17, 18].includes(c.state_id)
      ).length,
    },
    Brazil: {
      states: 5,
      cities: citiesSchema.seedData.filter((c) =>
        [19, 20, 21, 22, 23].includes(c.state_id)
      ).length,
    },
    Canada: {
      states: 4,
      cities: citiesSchema.seedData.filter((c) =>
        [24, 25, 26, 27].includes(c.state_id)
      ).length,
    },
    France: {
      states: 5,
      cities: citiesSchema.seedData.filter((c) =>
        [28, 29, 30, 31, 32].includes(c.state_id)
      ).length,
    },
    Germany: {
      states: 5,
      cities: citiesSchema.seedData.filter((c) =>
        [33, 34, 35, 36, 37].includes(c.state_id)
      ).length,
    },
    Greece: {
      states: 4,
      cities: citiesSchema.seedData.filter((c) =>
        [38, 39, 40, 41].includes(c.state_id)
      ).length,
    },
    Ireland: {
      states: 3,
      cities: citiesSchema.seedData.filter((c) =>
        [42, 43, 44].includes(c.state_id)
      ).length,
    },
    Italy: {
      states: 5,
      cities: citiesSchema.seedData.filter((c) =>
        [45, 46, 47, 48, 49].includes(c.state_id)
      ).length,
    },
    Mexico: {
      states: 5,
      cities: citiesSchema.seedData.filter((c) =>
        [50, 51, 52, 53, 54].includes(c.state_id)
      ).length,
    },
    Netherlands: {
      states: 4,
      cities: citiesSchema.seedData.filter((c) =>
        [55, 56, 57, 58].includes(c.state_id)
      ).length,
    },
    "Saudi Arabia": {
      states: 3,
      cities: citiesSchema.seedData.filter((c) =>
        [59, 60, 61].includes(c.state_id)
      ).length,
    },
    Spain: {
      states: 5,
      cities: citiesSchema.seedData.filter((c) =>
        [62, 63, 64, 65, 66].includes(c.state_id)
      ).length,
    },
    "United Kingdom": {
      states: 3,
      cities: citiesSchema.seedData.filter((c) =>
        [67, 68, 69].includes(c.state_id)
      ).length,
    },
    Singapore: {
      states: 1,
      cities: citiesSchema.seedData.filter((c) => [70].includes(c.state_id))
        .length,
    },
  },
};

console.log("Location Services Generation Complete!");
console.log(
  `Total Location Service Combinations: ${completeLocationServices.length}`
);
console.log(
  `Services: 59 | Cities: ${citiesSchema.seedData.length} | States: 70 | Countries: 16`
);
