import { MarketplaceQueries } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const countries = await MarketplaceQueries.getCountries();
    return NextResponse.json({ success: true, data: countries });
  } catch (error) {
    console.error("❌ Error fetching countries:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
