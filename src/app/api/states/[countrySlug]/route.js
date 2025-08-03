import { MarketplaceQueries } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { countrySlug } = params;

  try {
    const states = await MarketplaceQueries.getStatesByCountry(countrySlug);
    return NextResponse.json(states);
  } catch (error) {
    console.error("Error fetching states:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
