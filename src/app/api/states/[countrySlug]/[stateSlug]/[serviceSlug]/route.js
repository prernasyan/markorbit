import { MarketplaceQueries } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { countrySlug, stateSlug, serviceSlug } = params;

  try {
    const cities = await MarketplaceQueries.getCitiesForService(
      countrySlug,
      stateSlug,
      serviceSlug
    );

    return NextResponse.json({
      success: true,
      data: cities,
    });
  } catch (error) {
    console.error("Error fetching cities:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch cities",
      },
      { status: 500 }
    );
  }
}
