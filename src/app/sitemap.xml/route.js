// app/sitemap.xml/route.js - Debug version with info in XML comments
import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function GET(request) {
  const debugInfo = [];
  const urls = [];

  debugInfo.push("=== SITEMAP DEBUG INFO ===");
  debugInfo.push(`Site URL: ${SITE_URL}`);
  debugInfo.push(`Timestamp: ${new Date().toISOString()}`);

  try {
    // Test countries API
    debugInfo.push("Testing countries API...");

    const countriesUrl = `${SITE_URL}/api/countries`;
    debugInfo.push(`Countries URL: ${countriesUrl}`);

    try {
      const response = await fetch(countriesUrl, { cache: "no-store" });
      debugInfo.push(`Countries response status: ${response.status}`);
      debugInfo.push(`Countries response ok: ${response.ok}`);

      if (response.ok) {
        const text = await response.text();
        debugInfo.push(`Countries response length: ${text.length} chars`);
        debugInfo.push(
          `Countries response preview: ${text.substring(0, 100)}...`
        );

        try {
          const data = JSON.parse(text);
          debugInfo.push(`Countries data type: ${typeof data}`);
          debugInfo.push(`Countries is array: ${Array.isArray(data)}`);

          if (Array.isArray(data)) {
            debugInfo.push(`Countries count: ${data.length}`);

            if (data.length > 0) {
              const country = data[0];
              debugInfo.push(`First country: ${JSON.stringify(country)}`);

              // Test states API
              debugInfo.push("Testing states API...");
              const statesUrl = `${SITE_URL}/api/states/${country.slug}`;
              debugInfo.push(`States URL: ${statesUrl}`);

              try {
                const statesResponse = await fetch(statesUrl, {
                  cache: "no-store",
                });
                debugInfo.push(
                  `States response status: ${statesResponse.status}`
                );

                if (statesResponse.ok) {
                  const statesText = await statesResponse.text();
                  debugInfo.push(
                    `States response length: ${statesText.length} chars`
                  );

                  try {
                    const statesData = JSON.parse(statesText);
                    debugInfo.push(`States data type: ${typeof statesData}`);
                    debugInfo.push(
                      `States is array: ${Array.isArray(statesData)}`
                    );

                    if (Array.isArray(statesData) && statesData.length > 0) {
                      debugInfo.push(`States count: ${statesData.length}`);
                      const state = statesData[0];
                      debugInfo.push(`First state: ${JSON.stringify(state)}`);

                      // Test services API
                      debugInfo.push("Testing services API...");
                      const servicesUrl = `${SITE_URL}/api/services/${country.slug}/${state.slug}`;
                      debugInfo.push(`Services URL: ${servicesUrl}`);

                      try {
                        const servicesResponse = await fetch(servicesUrl, {
                          cache: "no-store",
                        });
                        debugInfo.push(
                          `Services response status: ${servicesResponse.status}`
                        );

                        if (servicesResponse.ok) {
                          const servicesText = await servicesResponse.text();
                          debugInfo.push(
                            `Services response length: ${servicesText.length} chars`
                          );

                          try {
                            const servicesData = JSON.parse(servicesText);
                            debugInfo.push(
                              `Services data type: ${typeof servicesData}`
                            );
                            debugInfo.push(
                              `Services structure: ${JSON.stringify(
                                Object.keys(servicesData || {})
                              )}`
                            );

                            let services = [];
                            if (Array.isArray(servicesData)) {
                              services = servicesData;
                            } else if (
                              servicesData &&
                              Array.isArray(servicesData.data)
                            ) {
                              services = servicesData.data;
                            }

                            debugInfo.push(
                              `Final services count: ${services.length}`
                            );

                            if (services.length > 0) {
                              const service = services[0];
                              debugInfo.push(
                                `First service: ${JSON.stringify(service)}`
                              );

                              // Generate some URLs
                              const serviceUrl = `/ct/${service.slug}/in/${country.slug}/st/${state.slug}`;
                              urls.push({
                                url: serviceUrl,
                                changefreq: "weekly",
                                priority: "0.8",
                              });
                              debugInfo.push(
                                `Generated service URL: ${serviceUrl}`
                              );

                              // Test cities API
                              debugInfo.push("Testing cities API...");
                              const citiesUrl = `${SITE_URL}/api/cities/${country.slug}/${state.slug}/${service.slug}`;
                              debugInfo.push(`Cities URL: ${citiesUrl}`);

                              try {
                                const citiesResponse = await fetch(citiesUrl, {
                                  cache: "no-store",
                                });
                                debugInfo.push(
                                  `Cities response status: ${citiesResponse.status}`
                                );

                                if (citiesResponse.ok) {
                                  const citiesText =
                                    await citiesResponse.text();
                                  debugInfo.push(
                                    `Cities response length: ${citiesText.length} chars`
                                  );

                                  try {
                                    const citiesData = JSON.parse(citiesText);
                                    debugInfo.push(
                                      `Cities data type: ${typeof citiesData}`
                                    );
                                    debugInfo.push(
                                      `Cities is array: ${Array.isArray(
                                        citiesData
                                      )}`
                                    );

                                    if (Array.isArray(citiesData)) {
                                      debugInfo.push(
                                        `Cities count: ${citiesData.length}`
                                      );

                                      citiesData.forEach((city, index) => {
                                        if (index < 3) {
                                          // Only log first 3 cities
                                          const cityUrl = `/ct/${service.slug}/in/${country.slug}/st/${state.slug}/a/${city.slug}`;
                                          urls.push({
                                            url: cityUrl,
                                            changefreq: "monthly",
                                            priority: "0.6",
                                          });
                                          debugInfo.push(
                                            `Generated city URL ${
                                              index + 1
                                            }: ${cityUrl}`
                                          );
                                        }
                                      });
                                    }
                                  } catch (e) {
                                    debugInfo.push(
                                      `Cities JSON parse error: ${e.message}`
                                    );
                                  }
                                } else {
                                  const errorText = await citiesResponse.text();
                                  debugInfo.push(
                                    `Cities API error: ${errorText.substring(
                                      0,
                                      100
                                    )}`
                                  );
                                }
                              } catch (e) {
                                debugInfo.push(
                                  `Cities API fetch error: ${e.message}`
                                );
                              }
                            }
                          } catch (e) {
                            debugInfo.push(
                              `Services JSON parse error: ${e.message}`
                            );
                          }
                        } else {
                          const errorText = await servicesResponse.text();
                          debugInfo.push(
                            `Services API error: ${errorText.substring(0, 100)}`
                          );
                        }
                      } catch (e) {
                        debugInfo.push(
                          `Services API fetch error: ${e.message}`
                        );
                      }
                    }
                  } catch (e) {
                    debugInfo.push(`States JSON parse error: ${e.message}`);
                  }
                } else {
                  const errorText = await statesResponse.text();
                  debugInfo.push(
                    `States API error: ${errorText.substring(0, 100)}`
                  );
                }
              } catch (e) {
                debugInfo.push(`States API fetch error: ${e.message}`);
              }
            }
          } else {
            debugInfo.push(
              `Countries data is not array: ${JSON.stringify(data)}`
            );
          }
        } catch (e) {
          debugInfo.push(`Countries JSON parse error: ${e.message}`);
        }
      } else {
        const errorText = await response.text();
        debugInfo.push(`Countries API error: ${errorText.substring(0, 100)}`);
      }
    } catch (e) {
      debugInfo.push(`Countries API fetch error: ${e.message}`);
      debugInfo.push(`Countries API fetch stack: ${e.stack}`);
    }
  } catch (error) {
    debugInfo.push(`General error: ${error.message}`);
    debugInfo.push(`General error stack: ${error.stack}`);
  }

  debugInfo.push(`Total URLs generated: ${urls.length}`);
  debugInfo.push("=== END DEBUG INFO ===");

  // Static URLs
  const staticUrls = [
    { url: "", priority: "1.0" },
    { url: "about", priority: "0.7" },
    { url: "services", priority: "0.7" },
    { url: "blog", priority: "0.7" },
    { url: "portfolio", priority: "0.7" },
    { url: "contact", priority: "0.7" },
  ];

  // Generate sitemap with debug info in comments
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

  const debugComments = debugInfo.map((info) => `<!-- ${info} -->`).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${debugComments}
${staticXml}
${dynamicXml}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-cache",
    },
  });
}
