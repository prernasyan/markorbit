// app/sitemap.ts
import { MetadataRoute } from "next";
import { MarketplaceQueries } from "@/lib/queries";

const SITE_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://markorbit.vercel.app/",
  defaultChangeFreq: "weekly" as const,
  defaultPriority: 0.8,
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.baseUrl;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog-grid`,
      lastModified: new Date(),
    },
  ];

  try {
    // Generate dynamic pages
    const dynamicPages = await generateDynamicPages(baseUrl);
    return [...staticPages, ...dynamicPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return static pages only if dynamic generation fails
    return staticPages;
  }
}

async function generateDynamicPages(
  baseUrl: string
): Promise<MetadataRoute.Sitemap> {
  const dynamicPages: MetadataRoute.Sitemap = [];

  try {
    // Get all countries
    const countries = await MarketplaceQueries.getCountries();

    for (const country of countries) {
      // Get states for each country
      const states = await MarketplaceQueries.getStatesByCountry(country.slug);

      for (const state of states) {
        // Get services for each state
        const services = await MarketplaceQueries.getServicesByState(
          country.slug,
          state.slug
        );

        // Create unique services array (remove duplicates)
        const uniqueServices = services.reduce((acc: any[], current: any) => {
          const existing = acc.find((item) => item.slug === current.slug);
          if (!existing) {
            acc.push(current);
          }
          return acc;
        }, []);

        for (const service of uniqueServices) {
          // Service in state page: /ct/[service]/in/[country]/st/[state]
          dynamicPages.push({
            url: `${baseUrl}/ct/${service.slug}/in/${country.slug}/st/${state.slug}`,
            lastModified: new Date(),
          });

          // Get cities for this service in this state
          const cities = await MarketplaceQueries.getCitiesForService(
            country.slug,
            state.slug,
            service.slug
          );

          for (const city of cities) {
            // Service in city page: /ct/[service]/in/[country]/st/[state]/a/[city]
            dynamicPages.push({
              url: `${baseUrl}/ct/${service.slug}/in/${country.slug}/st/${state.slug}/a/${city.slug}`,
              lastModified: new Date(),
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("Error generating dynamic pages for sitemap:", error);
  }

  return dynamicPages;
}
