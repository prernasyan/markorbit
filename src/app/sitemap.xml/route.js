// app/sitemap.xml/route.js - Generate all combinations
import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function GET(request) {
  const debugInfo = [];
  const urls = [];

  debugInfo.push("=== SITEMAP DEBUG INFO ===");
  debugInfo.push(`Site URL: ${SITE_URL}`);
  debugInfo.push(`Timestamp: ${new Date().toISOString()}`);

  try {
    // Get all countries
    debugInfo.push("Fetching all countries...");
    const countriesResponse = await fetch(`${SITE_URL}/api/countries`, {
      cache: "no-store",
    });

    if (!countriesResponse.ok) {
      throw new Error(`Countries API failed: ${countriesResponse.status}`);
    }

    const countriesData = await countriesResponse.json();
    let countries = [];
    if (countriesData.success && Array.isArray(countriesData.data)) {
      countries = countriesData.data;
    } else if (Array.isArray(countriesData)) {
      countries = countriesData;
    }

    debugInfo.push(`Found ${countries.length} countries`);

    // Process each country
    for (const country of countries) {
      debugInfo.push(`Processing country: ${country.name} (${country.slug})`);

      try {
        // Get states for this country
        const statesResponse = await fetch(
          `${SITE_URL}/api/states/${country.slug}`,
          { cache: "no-store" }
        );

        if (!statesResponse.ok) {
          debugInfo.push(
            `States API failed for ${country.slug}: ${statesResponse.status}`
          );
          continue;
        }

        const statesData = await statesResponse.json();
        let states = [];
        if (Array.isArray(statesData)) {
          states = statesData;
        } else if (statesData.success && Array.isArray(statesData.data)) {
          states = statesData.data;
        } else if (statesData.data && Array.isArray(statesData.data)) {
          states = statesData.data;
        }

        debugInfo.push(`Found ${states.length} states for ${country.name}`);

        // Process each state
        for (const state of states) {
          debugInfo.push(`Processing state: ${state.name} in ${country.name}`);

          try {
            // Get services for this country/state combination
            const servicesResponse = await fetch(
              `${SITE_URL}/api/services/${country.slug}/${state.slug}`,
              { cache: "no-store" }
            );

            if (!servicesResponse.ok) {
              debugInfo.push(
                `Services API failed for ${country.slug}/${state.slug}: ${servicesResponse.status}`
              );
              continue;
            }

            const servicesData = await servicesResponse.json();
            let services = [];
            if (Array.isArray(servicesData)) {
              services = servicesData;
            } else if (
              servicesData.success &&
              Array.isArray(servicesData.data)
            ) {
              services = servicesData.data;
            } else if (servicesData.data && Array.isArray(servicesData.data)) {
              services = servicesData.data;
            }

            debugInfo.push(
              `Found ${services.length} services for ${country.name}/${state.name}`
            );

            // Process each service
            for (const service of services) {
              // Generate service URL: /ct/{service}/in/{country}/st/{state}
              const serviceUrl = `/ct/${service.slug}/in/${country.slug}/st/${state.slug}`;
              urls.push({
                url: serviceUrl,
                changefreq: "weekly",
                priority: "0.8",
              });

              try {
                // Get cities for this service/country/state combination
                const citiesResponse = await fetch(
                  `${SITE_URL}/api/cities/${country.slug}/${state.slug}/${service.slug}`,
                  { cache: "no-store" }
                );

                if (citiesResponse.ok) {
                  const citiesData = await citiesResponse.json();
                  let cities = [];
                  if (Array.isArray(citiesData)) {
                    cities = citiesData;
                  } else if (
                    citiesData.success &&
                    Array.isArray(citiesData.data)
                  ) {
                    cities = citiesData.data;
                  } else if (
                    citiesData.data &&
                    Array.isArray(citiesData.data)
                  ) {
                    cities = citiesData.data;
                  }

                  // Generate city URLs: /ct/{service}/in/{country}/st/{state}/a/{city}
                  cities.forEach((city) => {
                    const cityUrl = `/ct/${service.slug}/in/${country.slug}/st/${state.slug}/a/${city.slug}`;
                    urls.push({
                      url: cityUrl,
                      changefreq: "monthly",
                      priority: "0.6",
                    });
                  });

                  if (cities.length > 0) {
                    debugInfo.push(
                      `Added ${cities.length} city URLs for ${service.name} in ${state.name}, ${country.name}`
                    );
                  }
                } else {
                  debugInfo.push(
                    `Cities API failed for ${service.slug} in ${country.slug}/${state.slug}: ${citiesResponse.status}`
                  );
                }
              } catch (cityError) {
                debugInfo.push(
                  `City fetch error for ${service.slug}: ${cityError.message}`
                );
              }
            }

            if (services.length > 0) {
              debugInfo.push(
                `Added ${services.length} service URLs for ${state.name}, ${country.name}`
              );
            }
          } catch (serviceError) {
            debugInfo.push(
              `Service fetch error for ${country.slug}/${state.slug}: ${serviceError.message}`
            );
          }
        }
      } catch (stateError) {
        debugInfo.push(
          `State fetch error for ${country.slug}: ${stateError.message}`
        );
      }
    }

    // Add some category-level URLs if you want them
    // You could also add URLs like /ct/{service}/in/{country} (without state)
    // or /in/{country} (just country pages)

    // Generate some additional useful URLs
    for (const country of countries.slice(0, 5)) {
      // Top 5 countries
      // Add country-level URLs
      urls.push({
        url: `/in/${country.slug}`,
        changefreq: "weekly",
        priority: "0.7",
      });

      // Add service category URLs for top countries
      const topServices = [
        "digital-marketing-services",
        "web-development",
        "seo-services",
      ]; // Adjust based on your most important services
      for (const serviceSlug of topServices) {
        urls.push({
          url: `/ct/${serviceSlug}/in/${country.slug}`,
          changefreq: "weekly",
          priority: "0.7",
        });
      }
    }
  } catch (error) {
    debugInfo.push(`General error: ${error.message}`);
    debugInfo.push(`General error stack: ${error.stack}`);
  }

  debugInfo.push(`Total dynamic URLs generated: ${urls.length}`);

  // Add static URLs
  const staticUrls = [
    { url: "", priority: "1.0" },
    { url: "about", priority: "0.7" },
    { url: "services", priority: "0.7" },
    { url: "blog", priority: "0.7" },
    { url: "portfolio", priority: "0.7" },
    { url: "contact", priority: "0.7" },
  ];

  debugInfo.push(`Total static URLs: ${staticUrls.length}`);
  debugInfo.push(`Grand total URLs: ${urls.length + staticUrls.length}`);
  debugInfo.push("=== END DEBUG INFO ===");

  // Generate sitemap XML
  const staticXml = staticUrls
    .map(
      (item) => `
  <url>
    <loc>${SITE_URL}/${item.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join("");

  const dynamicXml = urls
    .map(
      (item) => `
  <url>
    <loc>${SITE_URL}${item.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticXml}${dynamicXml}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate", // Cache for 1 hour
    },
  });
}
