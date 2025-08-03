// app/api/services/[countrySlug]/[stateSlug]/route.js
import { NextResponse } from "next/server";
import { MarketplaceQueries } from "@/lib/queries";

export async function GET(request, { params }) {
  try {
    const { countrySlug, stateSlug } = params;

    console.log(
      `API: Fetching services for country: ${countrySlug}, state: ${stateSlug}`
    );

    const services = await MarketplaceQueries.getServicesByState(
      countrySlug,
      stateSlug
    );

    console.log(
      `API: Found ${services.length} services for ${countrySlug}/${stateSlug}`
    );

    return NextResponse.json({
      data: services,
      count: services.length,
    });
  } catch (error) {
    console.error("API Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services", details: error.message },
      { status: 500 }
    );
  }
}
