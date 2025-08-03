// src/app/api/schemas/services.js
export const servicesSchema = {
  tableName: "services",
  createTable: `
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      slug TEXT NOT NULL,
      description TEXT,
      is_active BOOLEAN DEFAULT 1,
      display_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES service_categories(id) ON DELETE CASCADE
    );
  `,
  seedData: [
    // SEO & Search Marketing Services
    {
      category_id: 1,
      name: "Digital Marketing Services",
      slug: "digital-marketing-services",
      description: "Comprehensive digital marketing solutions",
      display_order: 1,
    },
    {
      category_id: 1,
      name: "SEO Services",
      slug: "seo-services",
      description: "Search engine optimization services",
      display_order: 2,
    },
    {
      category_id: 1,
      name: "Shopify SEO Services",
      slug: "shopify-seo-services",
      description: "SEO optimization for Shopify stores",
      display_order: 3,
    },
    {
      category_id: 1,
      name: "eCommerce SEO Services",
      slug: "ecommerce-seo-services",
      description: "SEO services for e-commerce websites",
      display_order: 4,
    },
    {
      category_id: 1,
      name: "Amazon SEO Services",
      slug: "amazon-seo-services",
      description: "Amazon product listing optimization",
      display_order: 5,
    },

    // E-commerce Management Services
    {
      category_id: 2,
      name: "Amazon Management Services",
      slug: "amazon-management-services",
      description: "Complete Amazon seller account management",
      display_order: 1,
    },
    {
      category_id: 2,
      name: "Amazon Seller Consulting",
      slug: "amazon-seller-consulting",
      description: "Expert consulting for Amazon sellers",
      display_order: 2,
    },
    {
      category_id: 2,
      name: "Amazon Storefront & Branding Services",
      slug: "amazon-storefront-branding-services",
      description: "Amazon storefront design and branding",
      display_order: 3,
    },
    {
      category_id: 2,
      name: "Flipkart Management Services",
      slug: "flipkart-management-services",
      description: "Complete Flipkart seller management",
      display_order: 4,
    },
    {
      category_id: 2,
      name: "Myntra Management Services",
      slug: "myntra-management-services",
      description: "Myntra seller account management",
      display_order: 5,
    },
    {
      category_id: 2,
      name: "Nykaa Management Services",
      slug: "nykaa-management-services",
      description: "Nykaa seller account management",
      display_order: 6,
    },
    {
      category_id: 2,
      name: "eCommerce Optimization Services",
      slug: "ecommerce-optimization-services",
      description: "E-commerce website optimization",
      display_order: 7,
    },

    // Advertising & PPC Services
    {
      category_id: 3,
      name: "Amazon Advertising/PPC Services",
      slug: "amazon-advertising-ppc-services",
      description: "Amazon sponsored ads management",
      display_order: 1,
    },
    {
      category_id: 3,
      name: "Flipkart Advertising/PPC Services",
      slug: "flipkart-advertising-ppc-services",
      description: "Flipkart sponsored ads management",
      display_order: 2,
    },
    {
      category_id: 3,
      name: "Google Ads Management Services",
      slug: "google-ads-management-services",
      description: "Google Ads campaign management",
      display_order: 3,
    },
    {
      category_id: 3,
      name: "Facebook Ads Management Services",
      slug: "facebook-ads-management-services",
      description: "Facebook advertising campaign management",
      display_order: 4,
    },

    // Web Development Services
    {
      category_id: 4,
      name: "Shopify Development Services",
      slug: "shopify-development-services",
      description: "Custom Shopify store development",
      display_order: 1,
    },
    {
      category_id: 4,
      name: "WordPress Development Services",
      slug: "wordpress-development-services",
      description: "WordPress website development",
      display_order: 2,
    },
    {
      category_id: 4,
      name: "WordPress Website Development Services",
      slug: "wordpress-website-development-services",
      description: "Complete WordPress website solutions",
      display_order: 3,
    },

    // Social Media & Content Services
    {
      category_id: 5,
      name: "Social Media Management Services",
      slug: "social-media-management-services",
      description: "Complete social media management",
      display_order: 1,
    },

    // Email & Lead Generation Services
    {
      category_id: 6,
      name: "Lead Generation Services",
      slug: "lead-generation-services",
      description: "B2B and B2C lead generation",
      display_order: 1,
    },
    {
      category_id: 6,
      name: "Email Marketing Services",
      slug: "email-marketing-services",
      description: "Email campaign management and automation",
      display_order: 2,
    },

    // Video Production Services
    {
      category_id: 7,
      name: "Video Production Services",
      slug: "video-production-services",
      description: "Professional video creation and editing",
      display_order: 1,
    },
    {
      category_id: 7,
      name: "Video Testimonial Services",
      slug: "video-testimonial-services",
      description: "Customer testimonial video production",
      display_order: 2,
    },

    // Platform Onboarding Services - Fashion & Beauty
    {
      category_id: 8,
      name: "Ajio Onboarding and Marketing Services",
      slug: "ajio-onboarding-marketing-services",
      description: "Ajio marketplace onboarding and marketing",
      display_order: 1,
    },
    {
      category_id: 8,
      name: "TataCliQ Onboarding and Marketing Services",
      slug: "tatacliq-onboarding-marketing-services",
      description: "TataCliQ marketplace setup and marketing",
      display_order: 2,
    },
    {
      category_id: 8,
      name: "Pernias Pop Up Shop Onboarding and Marketing Services",
      slug: "pernias-popup-shop-onboarding-marketing-services",
      description: "Pernias Pop Up Shop onboarding",
      display_order: 3,
    },
    {
      category_id: 8,
      name: "Aza Fashion Onboarding and Marketing Services",
      slug: "aza-fashion-onboarding-marketing-services",
      description: "Aza Fashion marketplace onboarding",
      display_order: 4,
    },
    {
      category_id: 8,
      name: "Tira Beauty Onboarding and Marketing Services",
      slug: "tira-beauty-onboarding-marketing-services",
      description: "Tira Beauty platform onboarding",
      display_order: 5,
    },
    {
      category_id: 8,
      name: "Kalki Fashion Onboarding and Marketing Services",
      slug: "kalki-fashion-onboarding-marketing-services",
      description: "Kalki Fashion marketplace setup",
      display_order: 6,
    },
    {
      category_id: 8,
      name: "Purplle Onboarding and Marketing Services",
      slug: "purplle-onboarding-marketing-services",
      description: "Purplle beauty platform onboarding",
      display_order: 7,
    },
    {
      category_id: 8,
      name: "Smytten Onboarding and Marketing Services",
      slug: "smytten-onboarding-marketing-services",
      description: "Smytten platform onboarding",
      display_order: 8,
    },
    {
      category_id: 8,
      name: "Tata CLiQ Palette Onboarding and Marketing Services",
      slug: "tata-cliq-palette-onboarding-marketing-services",
      description: "Tata CLiQ Palette beauty platform setup",
      display_order: 9,
    },
    {
      category_id: 8,
      name: "Mirraw Luxe Onboarding and Marketing Services",
      slug: "mirraw-luxe-onboarding-marketing-services",
      description: "Mirraw Luxe fashion platform onboarding",
      display_order: 10,
    },
    {
      category_id: 8,
      name: "Nykaa Beauty Onboarding and Marketing Services",
      slug: "nykaa-beauty-onboarding-marketing-services",
      description: "Nykaa Beauty marketplace onboarding",
      display_order: 11,
    },
    {
      category_id: 8,
      name: "Myntra Luxe Onboarding and Marketing Services",
      slug: "myntra-luxe-onboarding-marketing-services",
      description: "Myntra Luxe premium fashion onboarding",
      display_order: 12,
    },
    {
      category_id: 8,
      name: "Ajio Luxe Onboarding and Marketing Services",
      slug: "ajio-luxe-onboarding-marketing-services",
      description: "Ajio Luxe premium fashion onboarding",
      display_order: 13,
    },
    {
      category_id: 8,
      name: "Tata CLiQ Luxury Onboarding and Marketing Services",
      slug: "tata-cliq-luxury-onboarding-marketing-services",
      description: "Tata CLiQ Luxury platform onboarding",
      display_order: 14,
    },

    // Platform Onboarding Services - Grocery & Quick Commerce
    {
      category_id: 8,
      name: "Blinkit Onboarding and Marketing Services",
      slug: "blinkit-onboarding-marketing-services",
      description: "Blinkit quick commerce onboarding",
      display_order: 15,
    },
    {
      category_id: 8,
      name: "Swiggy Instamart Onboarding and Marketing Services",
      slug: "swiggy-instamart-onboarding-marketing-services",
      description: "Swiggy Instamart grocery delivery setup",
      display_order: 16,
    },
    {
      category_id: 8,
      name: "Zepto Onboarding and Marketing Services",
      slug: "zepto-onboarding-marketing-services",
      description: "Zepto quick delivery platform onboarding",
      display_order: 17,
    },
    {
      category_id: 8,
      name: "Pincode Onboarding and Marketing Services",
      slug: "pincode-onboarding-marketing-services",
      description: "Pincode by PhonePe onboarding",
      display_order: 18,
    },
    {
      category_id: 8,
      name: "BigBasket Onboarding and Marketing Services",
      slug: "bigbasket-onboarding-marketing-services",
      description: "BigBasket grocery platform onboarding",
      display_order: 19,
    },
    {
      category_id: 8,
      name: "M-Now Onboarding and Marketing Services",
      slug: "m-now-onboarding-marketing-services",
      description: "M-Now quick commerce onboarding",
      display_order: 20,
    },

    // Platform Onboarding Services - Health & Wellness
    {
      category_id: 8,
      name: "Tata 1mg Onboarding and Marketing Services",
      slug: "tata-1mg-onboarding-marketing-services",
      description: "Tata 1mg health platform onboarding",
      display_order: 21,
    },
    {
      category_id: 8,
      name: "HealthMug Onboarding and Marketing Services",
      slug: "healthmug-onboarding-marketing-services",
      description: "HealthMug wellness platform onboarding",
      display_order: 22,
    },

    // Platform Onboarding Services - Fashion & Lifestyle
    {
      category_id: 8,
      name: "The Loom Onboarding and Marketing Services",
      slug: "the-loom-onboarding-marketing-services",
      description: "The Loom fashion platform onboarding",
      display_order: 23,
    },
    {
      category_id: 8,
      name: "Aashni & Co. Onboarding and Marketing Services",
      slug: "aashni-co-onboarding-marketing-services",
      description: "Aashni & Co. luxury fashion onboarding",
      display_order: 24,
    },
    {
      category_id: 8,
      name: "Jaypore Onboarding and Marketing Services",
      slug: "jaypore-onboarding-marketing-services",
      description: "Jaypore ethnic fashion onboarding",
      display_order: 25,
    },
    {
      category_id: 8,
      name: "Mirraw Onboarding and Marketing Services",
      slug: "mirraw-onboarding-marketing-services",
      description: "Mirraw ethnic wear platform onboarding",
      display_order: 26,
    },
    {
      category_id: 8,
      name: "Vanity Wagon Onboarding and Marketing Services",
      slug: "vanity-wagon-onboarding-marketing-services",
      description: "Vanity Wagon beauty platform onboarding",
      display_order: 27,
    },
    {
      category_id: 8,
      name: "Foxy Onboarding and Marketing Services",
      slug: "foxy-onboarding-marketing-services",
      description: "Foxy fashion platform onboarding",
      display_order: 28,
    },

    // Platform Onboarding Services - Kids & Baby
    {
      category_id: 8,
      name: "Firstcry Onboarding and Marketing Services",
      slug: "firstcry-onboarding-marketing-services",
      description: "Firstcry baby products platform onboarding",
      display_order: 29,
    },
    {
      category_id: 8,
      name: "Hopscotch Onboarding and Marketing Services",
      slug: "hopscotch-onboarding-marketing-services",
      description: "Hopscotch kids fashion onboarding",
      display_order: 30,
    },

    // Platform Onboarding Services - International
    {
      category_id: 8,
      name: "Walmart Onboarding and Marketing Services",
      slug: "walmart-onboarding-marketing-services",
      description: "Walmart marketplace onboarding",
      display_order: 31,
    },
    {
      category_id: 8,
      name: "Noon Onboarding and Marketing Services",
      slug: "noon-onboarding-marketing-services",
      description: "Noon Middle East marketplace onboarding",
      display_order: 32,
    },
    {
      category_id: 8,
      name: "Zalando Onboarding and Marketing Services",
      slug: "zalando-onboarding-marketing-services",
      description: "Zalando European fashion onboarding",
      display_order: 33,
    },
    {
      category_id: 8,
      name: "Lazada Onboarding and Marketing Services",
      slug: "lazada-onboarding-marketing-services",
      description: "Lazada Southeast Asia onboarding",
      display_order: 34,
    },
  ],
  insertQuery: `INSERT INTO services (category_id, name, slug, description, display_order) VALUES (?, ?, ?, ?, ?)`,
  insertParams: (item) => [
    item.category_id,
    item.name,
    item.slug,
    item.description,
    item.display_order,
  ],
};
