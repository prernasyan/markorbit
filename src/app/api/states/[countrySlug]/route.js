// app/api/states/[countrySlug]/route.js
import { NextResponse } from "next/server";
import { MarketplaceQueries } from "@/lib/queries";

export async function GET(request, { params }) {
  try {
    const { countrySlug } = params;

    console.log(`API: Fetching states for country: ${countrySlug}`);

    const states = await MarketplaceQueries.getStatesByCountry(countrySlug);

    console.log(`API: Found ${states.length} states for ${countrySlug}`);

    return NextResponse.json(states);
  } catch (error) {
    console.error("API Error fetching states:", error);
    return NextResponse.json(
      { error: "Failed to fetch states", details: error.message },
      { status: 500 }
    );
  }
}
