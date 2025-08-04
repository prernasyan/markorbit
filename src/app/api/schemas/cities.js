// // src/app/api/schemas/cities.js
// export const citiesSchema = {
//   tableName: "cities",
//   createTable: `
//     CREATE TABLE IF NOT EXISTS cities (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       state_id INTEGER NOT NULL,
//       name TEXT NOT NULL,
//       slug TEXT NOT NULL,
//       description TEXT,
//       is_active BOOLEAN DEFAULT 1,
//       display_order INTEGER DEFAULT 0,
//       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE,
//       UNIQUE(state_id, slug)
//     );
//   `,
//   seedData: [
//     // Delhi (state_id: 1)
//     {
//       state_id: 1,
//       name: "New Delhi",
//       slug: "new-delhi",
//       description:
//         "New Delhi is the capital of India and offers a wide range of premium salon and beauty services.",
//       display_order: 1,
//     },
//     {
//       state_id: 1,
//       name: "Central Delhi",
//       slug: "central-delhi",
//       description:
//         "Central Delhi is known for its bustling markets and quality grooming services.",
//       display_order: 2,
//     },
//     {
//       state_id: 1,
//       name: "South Delhi",
//       slug: "south-delhi",
//       description: "South Delhi features upscale salons and wellness centers.",
//       display_order: 3,
//     },

//     // Maharashtra (state_id: 2)
//     {
//       state_id: 2,
//       name: "Mumbai",
//       slug: "mumbai",
//       description:
//         "Mumbai, the financial capital, has numerous high-end beauty and grooming establishments.",
//       display_order: 1,
//     },
//     {
//       state_id: 2,
//       name: "Pune",
//       slug: "pune",
//       description:
//         "Pune offers modern salon services with traditional touches.",
//       display_order: 2,
//     },

//     // Karnataka (state_id: 3)
//     {
//       state_id: 3,
//       name: "Bangalore",
//       slug: "bangalore",
//       description:
//         "Bangalore is a tech hub with trendy salons and wellness spots.",
//       display_order: 1,
//     },

//     // Add similar entries for other states as needed...
//   ],
//   insertQuery: `INSERT INTO cities (state_id, name, slug, description, display_order) VALUES (?, ?, ?, ?, ?)`,
//   insertParams: (item) => [
//     item.state_id,
//     item.name,
//     item.slug,
//     item.description,
//     item.display_order,
//   ],
// };

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
    // Delhi (state_id: 1) - India
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
    {
      state_id: 1,
      name: "North Delhi",
      slug: "north-delhi",
      description: "North Delhi offers traditional and modern beauty services.",
      display_order: 4,
    },
    {
      state_id: 1,
      name: "East Delhi",
      slug: "east-delhi",
      description:
        "East Delhi provides accessible beauty and grooming options.",
      display_order: 5,
    },

    // Maharashtra (state_id: 2) - India
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
    {
      state_id: 2,
      name: "Nagpur",
      slug: "nagpur",
      description:
        "Nagpur features quality beauty services in central Maharashtra.",
      display_order: 3,
    },
    {
      state_id: 2,
      name: "Nashik",
      slug: "nashik",
      description: "Nashik provides excellent salon and spa services.",
      display_order: 4,
    },

    // Karnataka (state_id: 3) - India
    {
      state_id: 3,
      name: "Bangalore",
      slug: "bangalore",
      description:
        "Bangalore is a tech hub with trendy salons and wellness spots.",
      display_order: 1,
    },
    {
      state_id: 3,
      name: "Mysore",
      slug: "mysore",
      description: "Mysore offers traditional and modern beauty treatments.",
      display_order: 2,
    },
    {
      state_id: 3,
      name: "Mangalore",
      slug: "mangalore",
      description: "Mangalore provides coastal-inspired beauty services.",
      display_order: 3,
    },

    // Tamil Nadu (state_id: 4) - India
    {
      state_id: 4,
      name: "Chennai",
      slug: "chennai",
      description:
        "Chennai offers premium beauty and wellness services in South India.",
      display_order: 1,
    },
    {
      state_id: 4,
      name: "Coimbatore",
      slug: "coimbatore",
      description:
        "Coimbatore features modern salon services with traditional values.",
      display_order: 2,
    },
    {
      state_id: 4,
      name: "Madurai",
      slug: "madurai",
      description:
        "Madurai provides authentic beauty treatments with cultural significance.",
      display_order: 3,
    },

    // West Bengal (state_id: 5) - India
    {
      state_id: 5,
      name: "Kolkata",
      slug: "kolkata",
      description:
        "Kolkata blends traditional Bengali beauty practices with modern services.",
      display_order: 1,
    },
    {
      state_id: 5,
      name: "Howrah",
      slug: "howrah",
      description:
        "Howrah offers quality beauty services across the Hooghly River.",
      display_order: 2,
    },

    // Gujarat (state_id: 6) - India
    {
      state_id: 6,
      name: "Ahmedabad",
      slug: "ahmedabad",
      description:
        "Ahmedabad features vibrant beauty and wellness establishments.",
      display_order: 1,
    },
    {
      state_id: 6,
      name: "Surat",
      slug: "surat",
      description: "Surat offers diamond-quality beauty services.",
      display_order: 2,
    },
    {
      state_id: 6,
      name: "Vadodara",
      slug: "vadodara",
      description: "Vadodara provides royal-inspired beauty treatments.",
      display_order: 3,
    },

    // Rajasthan (state_id: 7) - India
    {
      state_id: 7,
      name: "Jaipur",
      slug: "jaipur",
      description:
        "Jaipur, the Pink City, offers royal beauty and wellness experiences.",
      display_order: 1,
    },
    {
      state_id: 7,
      name: "Jodhpur",
      slug: "jodhpur",
      description: "Jodhpur provides regal beauty services in the Blue City.",
      display_order: 2,
    },
    {
      state_id: 7,
      name: "Udaipur",
      slug: "udaipur",
      description:
        "Udaipur offers luxurious beauty treatments in the City of Lakes.",
      display_order: 3,
    },

    // Punjab (state_id: 8) - India
    {
      state_id: 8,
      name: "Chandigarh",
      slug: "chandigarh",
      description:
        "Chandigarh features modern beauty services in the planned city.",
      display_order: 1,
    },
    {
      state_id: 8,
      name: "Amritsar",
      slug: "amritsar",
      description: "Amritsar offers traditional Punjabi beauty treatments.",
      display_order: 2,
    },
    {
      state_id: 8,
      name: "Ludhiana",
      slug: "ludhiana",
      description:
        "Ludhiana provides quality grooming services in Punjab's commercial hub.",
      display_order: 3,
    },

    // New York (state_id: 9) - United States
    {
      state_id: 9,
      name: "Manhattan",
      slug: "manhattan",
      description:
        "Manhattan offers world-class beauty services in the heart of NYC.",
      display_order: 1,
    },
    {
      state_id: 9,
      name: "Brooklyn",
      slug: "brooklyn",
      description:
        "Brooklyn features diverse and trendy beauty establishments.",
      display_order: 2,
    },
    {
      state_id: 9,
      name: "Queens",
      slug: "queens",
      description:
        "Queens provides multicultural beauty services and treatments.",
      display_order: 3,
    },

    // California (state_id: 10) - United States
    {
      state_id: 10,
      name: "Los Angeles",
      slug: "los-angeles",
      description:
        "Los Angeles offers Hollywood-style beauty and wellness services.",
      display_order: 1,
    },
    {
      state_id: 10,
      name: "Beverly Hills",
      slug: "beverly-hills",
      description:
        "Beverly Hills features luxury beauty treatments for celebrities and clients.",
      display_order: 2,
    },
    {
      state_id: 10,
      name: "San Francisco",
      slug: "san-francisco",
      description:
        "San Francisco provides innovative beauty services with tech-forward approaches.",
      display_order: 3,
    },
    {
      state_id: 10,
      name: "San Diego",
      slug: "san-diego",
      description:
        "San Diego offers beach-inspired beauty and wellness treatments.",
      display_order: 4,
    },

    // Florida (state_id: 11) - United States
    {
      state_id: 11,
      name: "Miami",
      slug: "miami",
      description:
        "Miami provides vibrant beauty services with Latin American influences.",
      display_order: 1,
    },
    {
      state_id: 11,
      name: "Miami Beach",
      slug: "miami-beach",
      description:
        "Miami Beach offers beachside beauty and wellness experiences.",
      display_order: 2,
    },
    {
      state_id: 11,
      name: "Orlando",
      slug: "orlando",
      description:
        "Orlando features family-friendly beauty and grooming services.",
      display_order: 3,
    },

    // Illinois (state_id: 12) - United States
    {
      state_id: 12,
      name: "Chicago",
      slug: "chicago",
      description:
        "Chicago offers Midwest hospitality with premium beauty services.",
      display_order: 1,
    },
    {
      state_id: 12,
      name: "Naperville",
      slug: "naperville",
      description: "Naperville provides suburban luxury beauty treatments.",
      display_order: 2,
    },

    // Massachusetts (state_id: 13) - United States
    {
      state_id: 13,
      name: "Boston",
      slug: "boston",
      description:
        "Boston features historic charm with modern beauty services.",
      display_order: 1,
    },
    {
      state_id: 13,
      name: "Cambridge",
      slug: "cambridge",
      description:
        "Cambridge offers intellectual elegance in beauty and wellness.",
      display_order: 2,
    },

    // Texas (state_id: 14) - United States
    {
      state_id: 14,
      name: "Houston",
      slug: "houston",
      description:
        "Houston provides diverse beauty services in Texas's largest city.",
      display_order: 1,
    },
    {
      state_id: 14,
      name: "Dallas",
      slug: "dallas",
      description:
        "Dallas offers sophisticated beauty treatments with Southern charm.",
      display_order: 2,
    },
    {
      state_id: 14,
      name: "Austin",
      slug: "austin",
      description: "Austin features eclectic and creative beauty services.",
      display_order: 3,
    },

    // Victoria (state_id: 15) - Australia
    {
      state_id: 15,
      name: "Melbourne",
      slug: "melbourne",
      description:
        "Melbourne offers European-inspired beauty services in Australia's cultural capital.",
      display_order: 1,
    },
    {
      state_id: 15,
      name: "Geelong",
      slug: "geelong",
      description: "Geelong provides coastal beauty treatments near Melbourne.",
      display_order: 2,
    },

    // New South Wales (state_id: 16) - Australia
    {
      state_id: 16,
      name: "Sydney",
      slug: "sydney",
      description:
        "Sydney features harbor-view beauty services and luxury treatments.",
      display_order: 1,
    },
    {
      state_id: 16,
      name: "Newcastle",
      slug: "newcastle",
      description: "Newcastle offers beachside beauty and wellness services.",
      display_order: 2,
    },

    // Western Australia (state_id: 17) - Australia
    {
      state_id: 17,
      name: "Perth",
      slug: "perth",
      description:
        "Perth provides isolated luxury with premium beauty services.",
      display_order: 1,
    },
    {
      state_id: 17,
      name: "Fremantle",
      slug: "fremantle",
      description:
        "Fremantle offers historic charm with modern beauty treatments.",
      display_order: 2,
    },

    // Queensland (state_id: 18) - Australia
    {
      state_id: 18,
      name: "Brisbane",
      slug: "brisbane",
      description:
        "Brisbane features sunny beauty services in Queensland's capital.",
      display_order: 1,
    },
    {
      state_id: 18,
      name: "Gold Coast",
      slug: "gold-coast",
      description:
        "Gold Coast offers beach paradise beauty and wellness experiences.",
      display_order: 2,
    },
    {
      state_id: 18,
      name: "Cairns",
      slug: "cairns",
      description:
        "Cairns provides tropical beauty treatments near the Great Barrier Reef.",
      display_order: 3,
    },

    // São Paulo (state_id: 19) - Brazil
    {
      state_id: 19,
      name: "São Paulo City",
      slug: "sao-paulo-city",
      description:
        "São Paulo City offers vibrant Brazilian beauty culture and services.",
      display_order: 1,
    },
    {
      state_id: 19,
      name: "Campinas",
      slug: "campinas",
      description:
        "Campinas features quality beauty services in São Paulo state.",
      display_order: 2,
    },

    // Rio de Janeiro (state_id: 20) - Brazil
    {
      state_id: 20,
      name: "Rio de Janeiro City",
      slug: "rio-de-janeiro-city",
      description:
        "Rio de Janeiro offers beach-inspired beauty treatments with carnival flair.",
      display_order: 1,
    },
    {
      state_id: 20,
      name: "Niterói",
      slug: "niteroi",
      description: "Niterói provides beautiful bay-view beauty services.",
      display_order: 2,
    },

    // Minas Gerais (state_id: 21) - Brazil
    {
      state_id: 21,
      name: "Belo Horizonte",
      slug: "belo-horizonte",
      description:
        "Belo Horizonte offers mountain-fresh beauty and wellness services.",
      display_order: 1,
    },

    // Paraná (state_id: 22) - Brazil
    {
      state_id: 22,
      name: "Curitiba",
      slug: "curitiba",
      description:
        "Curitiba features eco-friendly beauty treatments in Brazil's green capital.",
      display_order: 1,
    },

    // Ceará (state_id: 23) - Brazil
    {
      state_id: 23,
      name: "Fortaleza",
      slug: "fortaleza",
      description:
        "Fortaleza offers tropical beach beauty services on Brazil's northeast coast.",
      display_order: 1,
    },

    // Ontario (state_id: 24) - Canada
    {
      state_id: 24,
      name: "Toronto",
      slug: "toronto",
      description:
        "Toronto provides multicultural beauty services in Canada's largest city.",
      display_order: 1,
    },
    {
      state_id: 24,
      name: "Ottawa",
      slug: "ottawa",
      description:
        "Ottawa offers capital-quality beauty and wellness services.",
      display_order: 2,
    },
    {
      state_id: 24,
      name: "Hamilton",
      slug: "hamilton",
      description:
        "Hamilton features steel city strength with gentle beauty treatments.",
      display_order: 3,
    },

    // Quebec (state_id: 25) - Canada
    {
      state_id: 25,
      name: "Montreal",
      slug: "montreal",
      description:
        "Montreal offers French-Canadian elegance in beauty and wellness.",
      display_order: 1,
    },
    {
      state_id: 25,
      name: "Quebec City",
      slug: "quebec-city",
      description:
        "Quebec City provides European charm with North American beauty services.",
      display_order: 2,
    },

    // British Columbia (state_id: 26) - Canada
    {
      state_id: 26,
      name: "Vancouver",
      slug: "vancouver",
      description:
        "Vancouver features mountain and ocean-inspired beauty treatments.",
      display_order: 1,
    },
    {
      state_id: 26,
      name: "Victoria",
      slug: "victoria",
      description:
        "Victoria offers British Columbia's capital charm with garden-fresh beauty services.",
      display_order: 2,
    },

    // Alberta (state_id: 27) - Canada
    {
      state_id: 27,
      name: "Calgary",
      slug: "calgary",
      description:
        "Calgary provides Rocky Mountain-fresh beauty and wellness experiences.",
      display_order: 1,
    },
    {
      state_id: 27,
      name: "Edmonton",
      slug: "edmonton",
      description:
        "Edmonton offers northern Alberta hospitality with quality beauty services.",
      display_order: 2,
    },

    // Île-de-France (state_id: 28) - France
    {
      state_id: 28,
      name: "Paris",
      slug: "paris",
      description:
        "Paris, the fashion capital, offers world-renowned beauty and luxury services.",
      display_order: 1,
    },
    {
      state_id: 28,
      name: "Versailles",
      slug: "versailles",
      description:
        "Versailles provides royal-inspired beauty treatments near the famous palace.",
      display_order: 2,
    },

    // Auvergne-Rhône-Alpes (state_id: 29) - France
    {
      state_id: 29,
      name: "Lyon",
      slug: "lyon",
      description:
        "Lyon offers gastronomic-inspired beauty services in France's culinary capital.",
      display_order: 1,
    },
    {
      state_id: 29,
      name: "Grenoble",
      slug: "grenoble",
      description:
        "Grenoble provides Alpine-fresh beauty treatments in the French Alps.",
      display_order: 2,
    },

    // Nouvelle-Aquitaine (state_id: 30) - France
    {
      state_id: 30,
      name: "Bordeaux",
      slug: "bordeaux",
      description:
        "Bordeaux features wine-inspired beauty treatments in France's wine region.",
      display_order: 1,
    },
    {
      state_id: 30,
      name: "La Rochelle",
      slug: "la-rochelle",
      description:
        "La Rochelle offers coastal beauty services on France's Atlantic coast.",
      display_order: 2,
    },

    // Provence-Alpes-Côte d'Azur (state_id: 31) - France
    {
      state_id: 31,
      name: "Marseille",
      slug: "marseille",
      description:
        "Marseille provides Mediterranean-inspired beauty services on the French Riviera.",
      display_order: 1,
    },
    {
      state_id: 31,
      name: "Nice",
      slug: "nice",
      description:
        "Nice offers luxurious Riviera beauty treatments with sea views.",
      display_order: 2,
    },
    {
      state_id: 31,
      name: "Cannes",
      slug: "cannes",
      description:
        "Cannes features celebrity-style beauty services during film festival season.",
      display_order: 3,
    },

    // Hauts-de-France (state_id: 32) - France
    {
      state_id: 32,
      name: "Lille",
      slug: "lille",
      description:
        "Lille offers Flemish-influenced beauty services near the Belgian border.",
      display_order: 1,
    },

    // Berlin (state_id: 33) - Germany
    {
      state_id: 33,
      name: "Berlin",
      slug: "berlin",
      description:
        "Berlin provides cutting-edge beauty services in Germany's capital city.",
      display_order: 1,
    },

    // Bavaria (state_id: 34) - Germany
    {
      state_id: 34,
      name: "Munich",
      slug: "munich",
      description:
        "Munich offers Bavarian elegance with premium beauty and wellness services.",
      display_order: 1,
    },
    {
      state_id: 34,
      name: "Nuremberg",
      slug: "nuremberg",
      description:
        "Nuremberg features traditional German beauty treatments with modern touches.",
      display_order: 2,
    },

    // Hesse (state_id: 35) - Germany
    {
      state_id: 35,
      name: "Frankfurt",
      slug: "frankfurt",
      description:
        "Frankfurt provides international business-class beauty services.",
      display_order: 1,
    },

    // North Rhine-Westphalia (state_id: 36) - Germany
    {
      state_id: 36,
      name: "Dortmund",
      slug: "dortmund",
      description:
        "Dortmund offers industrial strength beauty treatments in the Ruhr area.",
      display_order: 1,
    },
    {
      state_id: 36,
      name: "Cologne",
      slug: "cologne",
      description:
        "Cologne features cathedral-inspired beauty services with historic charm.",
      display_order: 2,
    },
    {
      state_id: 36,
      name: "Düsseldorf",
      slug: "dusseldorf",
      description:
        "Düsseldorf provides fashion-forward beauty treatments in Germany's style capital.",
      display_order: 3,
    },

    // Hamburg (state_id: 37) - Germany
    {
      state_id: 37,
      name: "Hamburg",
      slug: "hamburg",
      description:
        "Hamburg offers maritime-inspired beauty services in Germany's port city.",
      display_order: 1,
    },

    // Attica (state_id: 38) - Greece
    {
      state_id: 38,
      name: "Athens",
      slug: "athens",
      description:
        "Athens provides ancient wisdom with modern beauty treatments in Greece's capital.",
      display_order: 1,
    },
    {
      state_id: 38,
      name: "Piraeus",
      slug: "piraeus",
      description:
        "Piraeus offers port city beauty services with Mediterranean influences.",
      display_order: 2,
    },

    // Central Macedonia (state_id: 39) - Greece
    {
      state_id: 39,
      name: "Thessaloniki",
      slug: "thessaloniki",
      description:
        "Thessaloniki features Byzantine beauty traditions with modern Greek services.",
      display_order: 1,
    },

    // Crete (state_id: 40) - Greece
    {
      state_id: 40,
      name: "Heraklion",
      slug: "heraklion",
      description:
        "Heraklion offers Minoan-inspired beauty treatments on Greece's largest island.",
      display_order: 1,
    },
    {
      state_id: 40,
      name: "Chania",
      slug: "chania",
      description:
        "Chania provides Venetian-influenced beauty services in western Crete.",
      display_order: 2,
    },

    // Thessaly (state_id: 41) - Greece
    {
      state_id: 41,
      name: "Larissa",
      slug: "larissa",
      description:
        "Larissa offers agricultural freshness with natural beauty treatments.",
      display_order: 1,
    },

    // Leinster (state_id: 42) - Ireland
    {
      state_id: 42,
      name: "Dublin",
      slug: "dublin",
      description:
        "Dublin provides Irish charm with internationally-inspired beauty services.",
      display_order: 1,
    },
    {
      state_id: 42,
      name: "Drogheda",
      slug: "drogheda",
      description:
        "Drogheda offers historic beauty treatments in Ireland's ancient east.",
      display_order: 2,
    },

    // Munster (state_id: 43) - Ireland
    {
      state_id: 43,
      name: "Cork",
      slug: "cork",
      description:
        "Cork features rebel county spirit with premium beauty and wellness services.",
      display_order: 1,
    },
    {
      state_id: 43,
      name: "Limerick",
      slug: "limerick",
      description:
        "Limerick provides Shannon-side beauty treatments with Irish hospitality.",
      display_order: 2,
    },

    // Connacht (state_id: 44) - Ireland
    {
      state_id: 44,
      name: "Galway",
      slug: "galway",
      description:
        "Galway offers Atlantic coast beauty services with traditional Irish touches.",
      display_order: 1,
    },

    // Lazio (state_id: 45) - Italy
    {
      state_id: 45,
      name: "Rome",
      slug: "rome",
      description:
        "Rome provides eternal city elegance with classical beauty treatments.",
      display_order: 1,
    },

    // Lombardy (state_id: 46) - Italy
    {
      state_id: 46,
      name: "Milan",
      slug: "milan",
      description:
        "Milan offers fashion capital sophistication with luxury beauty services.",
      display_order: 1,
    },
    {
      state_id: 46,
      name: "Bergamo",
      slug: "bergamo",
      description:
        "Bergamo features alpine beauty treatments in Lombardy's historic city.",
      display_order: 2,
    },

    // Campania (state_id: 47) - Italy
    {
      state_id: 47,
      name: "Naples",
      slug: "naples",
      description:
        "Naples provides volcanic energy with passionate Italian beauty services.",
      display_order: 1,
    },
    {
      state_id: 47,
      name: "Salerno",
      slug: "salerno",
      description:
        "Salerno offers Amalfi coast-inspired beauty treatments with sea views.",
      display_order: 2,
    },

    // Piedmont (state_id: 48) - Italy
    {
      state_id: 48,
      name: "Turin",
      slug: "turin",
      description:
        "Turin features royal Savoy elegance with premium beauty and wellness services.",
      display_order: 1,
    },

    // Sicily (state_id: 49) - Italy
    {
      state_id: 49,
      name: "Palermo",
      slug: "palermo",
      description:
        "Palermo offers Sicilian passion with Mediterranean beauty traditions.",
      display_order: 1,
    },
    {
      state_id: 49,
      name: "Catania",
      slug: "catania",
      description:
        "Catania provides volcanic energy with Etna-inspired beauty treatments.",
      display_order: 2,
    },

    // Mexico City (state_id: 50) - Mexico
    {
      state_id: 50,
      name: "Mexico City",
      slug: "mexico-city",
      description:
        "Mexico City offers vibrant Aztec-inspired beauty services in the capital.",
      display_order: 1,
    },

    // Nuevo León (state_id: 51) - Mexico
    {
      state_id: 51,
      name: "Monterrey",
      slug: "monterrey",
      description:
        "Monterrey provides mountain-fresh beauty treatments in northern Mexico.",
      display_order: 1,
    },

    // Querétaro (state_id: 52) - Mexico
    {
      state_id: 52,
      name: "Querétaro City",
      slug: "queretaro-city",
      description:
        "Querétaro City offers colonial charm with modern beauty services.",
      display_order: 1,
    },

    // Jalisco (state_id: 53) - Mexico
    {
      state_id: 53,
      name: "Guadalajara",
      slug: "guadalajara",
      description:
        "Guadalajara features mariachi spirit with traditional Mexican beauty treatments.",
      display_order: 1,
    },
    {
      state_id: 53,
      name: "Puerto Vallarta",
      slug: "puerto-vallarta",
      description:
        "Puerto Vallarta offers beach paradise beauty services on Mexico's Pacific coast.",
      display_order: 2,
    },

    // Chihuahua (state_id: 54) - Mexico
    {
      state_id: 54,
      name: "Chihuahua City",
      slug: "chihuahua-city",
      description:
        "Chihuahua City provides desert oasis beauty treatments in northern Mexico.",
      display_order: 1,
    },

    // North Holland (state_id: 55) - Netherlands
    {
      state_id: 55,
      name: "Amsterdam",
      slug: "amsterdam",
      description:
        "Amsterdam offers canal-side beauty services with Dutch innovation.",
      display_order: 1,
    },
    {
      state_id: 55,
      name: "Haarlem",
      slug: "haarlem",
      description:
        "Haarlem provides historic Dutch charm with tulip-fresh beauty treatments.",
      display_order: 2,
    },

    // South Holland (state_id: 56) - Netherlands
    {
      state_id: 56,
      name: "Rotterdam",
      slug: "rotterdam",
      description:
        "Rotterdam features modern architecture with cutting-edge beauty services.",
      display_order: 1,
    },
    {
      state_id: 56,
      name: "The Hague",
      slug: "the-hague",
      description:
        "The Hague offers royal elegance with diplomatic-quality beauty treatments.",
      display_order: 2,
    },

    // North Brabant (state_id: 57) - Netherlands
    {
      state_id: 57,
      name: "Eindhoven",
      slug: "eindhoven",
      description:
        "Eindhoven provides tech-inspired beauty treatments in the Netherlands' design capital.",
      display_order: 1,
    },

    // Utrecht (state_id: 58) - Netherlands
    {
      state_id: 58,
      name: "Utrecht",
      slug: "utrecht",
      description:
        "Utrecht offers central Netherlands charm with university-town beauty services.",
      display_order: 1,
    },

    // Riyadh Province (state_id: 59) - Saudi Arabia
    {
      state_id: 59,
      name: "Riyadh",
      slug: "riyadh",
      description:
        "Riyadh provides royal Saudi elegance with luxury beauty and wellness services.",
      display_order: 1,
    },

    // Eastern Province (state_id: 60) - Saudi Arabia
    {
      state_id: 60,
      name: "Dammam",
      slug: "dammam",
      description:
        "Dammam offers Persian Gulf beauty treatments with modern Saudi services.",
      display_order: 1,
    },
    {
      state_id: 60,
      name: "Khobar",
      slug: "khobar",
      description:
        "Khobar provides oil-rich luxury with premium beauty and wellness experiences.",
      display_order: 2,
    },

    // Makkah Province (state_id: 61) - Saudi Arabia
    {
      state_id: 61,
      name: "Jeddah",
      slug: "jeddah",
      description:
        "Jeddah offers Red Sea beauty services with international Saudi hospitality.",
      display_order: 1,
    },
    {
      state_id: 61,
      name: "Makkah",
      slug: "makkah",
      description:
        "Makkah provides spiritual wellness with traditional Arabian beauty treatments.",
      display_order: 2,
    },

    // Community of Madrid (state_id: 62) - Spain
    {
      state_id: 62,
      name: "Madrid",
      slug: "madrid",
      description:
        "Madrid offers royal Spanish elegance with Iberian beauty traditions.",
      display_order: 1,
    },

    // Catalonia (state_id: 63) - Spain
    {
      state_id: 63,
      name: "Barcelona",
      slug: "barcelona",
      description:
        "Barcelona features Catalan creativity with Mediterranean beauty services.",
      display_order: 1,
    },
    {
      state_id: 63,
      name: "Girona",
      slug: "girona",
      description:
        "Girona offers Costa Brava beauty treatments with historic Catalonian charm.",
      display_order: 2,
    },

    // Andalusia (state_id: 64) - Spain
    {
      state_id: 64,
      name: "Marbella",
      slug: "marbella",
      description:
        "Marbella provides Costa del Sol luxury with jet-set beauty services.",
      display_order: 1,
    },
    {
      state_id: 64,
      name: "Seville",
      slug: "seville",
      description:
        "Seville offers flamenco passion with Moorish-inspired beauty treatments.",
      display_order: 2,
    },

    // Valencian Community (state_id: 65) - Spain
    {
      state_id: 65,
      name: "Valencia",
      slug: "valencia",
      description:
        "Valencia features orange blossom freshness with Mediterranean beauty services.",
      display_order: 1,
    },
    {
      state_id: 65,
      name: "Alicante",
      slug: "alicante",
      description:
        "Alicante offers Costa Blanca beauty treatments with Spanish coastal charm.",
      display_order: 2,
    },

    // Balearic Islands (state_id: 66) - Spain
    {
      state_id: 66,
      name: "Palma de Mallorca",
      slug: "palma-de-mallorca",
      description:
        "Palma offers island paradise beauty services with Balearic sophistication.",
      display_order: 1,
    },
    {
      state_id: 66,
      name: "Ibiza",
      slug: "ibiza",
      description:
        "Ibiza provides party island glamour with bohemian beauty treatments.",
      display_order: 2,
    },

    // England (state_id: 67) - United Kingdom
    {
      state_id: 67,
      name: "London",
      slug: "london",
      description:
        "London offers British sophistication with international beauty excellence.",
      display_order: 1,
    },
    {
      state_id: 67,
      name: "Manchester",
      slug: "manchester",
      description:
        "Manchester provides industrial heritage with modern beauty innovations.",
      display_order: 2,
    },
    {
      state_id: 67,
      name: "Birmingham",
      slug: "birmingham",
      description:
        "Birmingham offers Midlands hospitality with multicultural beauty services.",
      display_order: 3,
    },
    {
      state_id: 67,
      name: "Liverpool",
      slug: "liverpool",
      description:
        "Liverpool features Mersey beat energy with Beatles-era beauty charm.",
      display_order: 4,
    },

    // Scotland (state_id: 68) - United Kingdom
    {
      state_id: 68,
      name: "Glasgow",
      slug: "glasgow",
      description:
        "Glasgow provides Scottish warmth with Highland-inspired beauty treatments.",
      display_order: 1,
    },
    {
      state_id: 68,
      name: "Edinburgh",
      slug: "edinburgh",
      description:
        "Edinburgh offers royal Scottish elegance with castle-view beauty services.",
      display_order: 2,
    },

    // Wales (state_id: 69) - United Kingdom
    {
      state_id: 69,
      name: "Cardiff",
      slug: "cardiff",
      description:
        "Cardiff features Welsh valleys charm with Celtic beauty traditions.",
      display_order: 1,
    },

    // Singapore (state_id: 70) - Singapore
    {
      state_id: 70,
      name: "Singapore City",
      slug: "singapore-city",
      description:
        "Singapore offers tropical luxury with multicultural Asian beauty services.",
      display_order: 1,
    },
    {
      state_id: 70,
      name: "Orchard Road",
      slug: "orchard-road",
      description:
        "Orchard Road provides shopping paradise with premium beauty experiences.",
      display_order: 2,
    },
    {
      state_id: 70,
      name: "Marina Bay",
      slug: "marina-bay",
      description:
        "Marina Bay offers futuristic beauty treatments with skyline views.",
      display_order: 3,
    },
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
