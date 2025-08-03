import { MarketplaceQueries } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { countrySlug, stateSlug } = params;

  try {
    const services = await MarketplaceQueries.getServicesByState(
      countrySlug,
      stateSlug
    );

    return NextResponse.json({
      success: true,
      data: services,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch services",
      },
      { status: 500 }
    );
  }
}
