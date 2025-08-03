// src/app/ct/[service]/in/[country]/page.tsx

import Link from "next/link";
import { MarketplaceQueries } from "@/lib/queries";

// Define the expected shape of route parameters
interface Params {
  params: {
    service: string;
    country: string;
  };
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Params) {
  return {
    title: `States for ${params.service} in ${params.country}`,
  };
}

export default async function ServiceStatesPage({ params }: Params) {
  const { service, country } = params;

  let states = [];
  try {
    states = await MarketplaceQueries.getStatesByCountry(country);
  } catch (error) {
    console.error("Error fetching states:", error);
  }

  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" className="text-decoration-none">
              Countries
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {service} &gt; {country}
          </li>
        </ol>
      </nav>

      <h1 className="mb-4">Select State for {service} Services</h1>

      <div className="row">
        {states.map((state: any) => (
          <div key={state.id} className="col-md-4 mb-4">
            <Link
              href={`/ct/${service}/in/${country}/st/${state.slug}`}
              className="text-decoration-none"
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">{state.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
