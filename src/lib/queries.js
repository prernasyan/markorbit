// Database queries utility (lib/queries.js)
import { openDb } from "@/app/api/db";

export class MarketplaceQueries {
  // Get all countries for the main landing page
  static async getCountries() {
    const db = await openDb();
    const query = `
      SELECT id, name, code, slug, display_order 
      FROM countries 
      WHERE is_active = 1 
      ORDER BY display_order, name
    `;
    const rows = await db.all(query);
    return rows;
  }

  // Get states by country slug
  static async getStatesByCountry(countrySlug) {
    const db = await openDb();
    const query = `
      SELECT s.id, s.name, s.code, s.slug, s.display_order
      FROM states s
      JOIN countries c ON s.country_id = c.id
      WHERE c.slug = ? AND s.is_active = 1
      ORDER BY s.display_order, s.name
    `;
    return await db.all(query, [countrySlug]);
  }

  // Get services available in a specific state
  static async getServicesByState(countrySlug, stateSlug) {
    const db = await openDb();
    const query = `
      SELECT DISTINCT sc.name as category_name, sc.slug as category_slug,
             sc.display_order as category_display_order,
             s.id, s.name, s.slug, s.description, s.display_order
      FROM location_services ls
      JOIN services s ON ls.service_id = s.id
      JOIN service_categories sc ON s.category_id = sc.id
      JOIN states st ON ls.state_id = st.id
      JOIN countries c ON ls.country_id = c.id
      WHERE c.slug = ? AND st.slug = ?
        AND ls.is_active = 1 AND s.is_active = 1
      ORDER BY sc.display_order, s.display_order, s.name
    `;
    const rows = await db.all(query, [countrySlug, stateSlug]);
    return rows;
  }

  // Alias method for compatibility with React component
  static async getServicesByCountryAndState(countrySlug, stateSlug) {
    return await this.getServicesByState(countrySlug, stateSlug);
  }

  // Get cities for a specific service in a state
  static async getCitiesForService(countrySlug, stateSlug, serviceSlug) {
    const db = await openDb();
    const query = `
      SELECT DISTINCT ci.id, ci.name, ci.slug, ci.description, ci.display_order
      FROM location_services ls
      JOIN services s ON ls.service_id = s.id
      JOIN cities ci ON ls.city_id = ci.id
      JOIN states st ON ls.state_id = st.id
      JOIN countries c ON ls.country_id = c.id
      WHERE c.slug = ? AND st.slug = ? AND s.slug = ?
        AND ls.is_active = 1 AND ci.is_active = 1
      ORDER BY ci.display_order, ci.name
    `;
    const rows = await db.all(query, [countrySlug, stateSlug, serviceSlug]);
    return rows;
  }

  // Get city details and businesses for final page
  static async getCityServiceDetails(
    countrySlug,
    stateSlug,
    serviceSlug,
    citySlug
  ) {
    const db = await openDb();

    const cityQuery = `
      SELECT ci.id, ci.name, ci.description, s.name as service_name,
             st.name as state_name, c.name as country_name
      FROM cities ci
      JOIN states st ON ci.state_id = st.id
      JOIN countries c ON st.country_id = c.id
      JOIN location_services ls ON ci.id = ls.city_id
      JOIN services s ON ls.service_id = s.id
      WHERE c.slug = ? AND st.slug = ? AND s.slug = ? AND ci.slug = ?
        AND ci.is_active = 1
      LIMIT 1
    `;

    const businessQuery = `
      SELECT bl.id, bl.name, bl.slug, bl.description, bl.address, 
             bl.phone, bl.rating, bl.review_count, bl.is_verified
      FROM business_listings bl
      JOIN business_location_services bls ON bl.id = bls.business_id
      JOIN location_services ls ON bls.location_service_id = ls.id
      JOIN cities ci ON ls.city_id = ci.id
      JOIN states st ON ls.state_id = st.id
      JOIN countries c ON ls.country_id = c.id
      JOIN services s ON ls.service_id = s.id
      WHERE c.slug = ? AND st.slug = ? AND s.slug = ? AND ci.slug = ?
        AND bl.is_active = 1 AND bls.is_active = 1
      ORDER BY bl.is_verified DESC, bl.rating DESC, bl.name
    `;

    const [cityResult, businessResult] = await Promise.all([
      db.get(cityQuery, [countrySlug, stateSlug, serviceSlug, citySlug]),
      db.all(businessQuery, [countrySlug, stateSlug, serviceSlug, citySlug]),
    ]);

    return {
      city: cityResult,
      businesses: businessResult,
    };
  }

  // Get SEO metadata for any page
  static async getSEOMetadata(pageType, referenceId) {
    const db = await openDb();
    const query = `
      SELECT title, meta_description, meta_keywords, canonical_url,
             og_title, og_description, og_image
      FROM seo_metadata
      WHERE page_type = ? AND reference_id = ?
    `;
    return await db.get(query, [pageType, referenceId]);
  }
}
