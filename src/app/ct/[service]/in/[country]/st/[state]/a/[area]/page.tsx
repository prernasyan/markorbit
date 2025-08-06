// src/app/ct/[service]/in/[country]/st/[state]/a/[area]/page.tsx
import Link from "next/link";
import { MarketplaceQueries } from "@/lib/queries";
import Wrapper from "@/layout/Wrapper";
import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import ScrollToTop from "@/components/common/scroll-to-top";
import HeroBannerHomefour2 from "@/components/homes/home-4/HeroBannerHomefour2";
import ServicesAreaHomeFour from "@/components/homes/home-4/ServicesAreaHomeFour";
import AwardAreaHomeFour from "@/components/homes/home-4/AwardAreaHomeFour";
import BlogAreaHomeFour from "@/components/homes/home-4/BlogAreaHomeFour";
import ContactAreaHomeFour from "@/components/homes/home-4/ContactAreaHomeFour";
import CounterAreaHomeFour from "@/components/homes/home-4/CounterAreaHomeFour";
import FeatureAreaHomeFour from "@/components/homes/home-4/FeatureAreaHomeFour";
import OptimizeAreaHomeFour from "@/components/homes/home-4/OptimizeAreaHomeFour";
import PortfolioAreaHomeFour from "@/components/homes/home-4/PortfolioAreaHomeFour";
import ReviewAreaHomeFour from "@/components/homes/home-4/ReviewAreaHomeFour";
import TestimonialAreaHomeFour from "@/components/homes/home-4/TestimonialAreaHomeFour";

// City type
interface City {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

// Params type
interface Params {
  params: {
    service: string;
    country: string;
    state: string;
    area: string;
  };
}

// Title Case Helper
const toTitleCase = (str: string) =>
  str
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Params) {
  const { area, service } = params;
  return {
    title: `${toTitleCase(service)} in ${toTitleCase(area)}`,
  };
}

export default async function BusinessListingsPage({ params }: Params) {
  const { service, country, state, area } = params;

  try {
    const data = await MarketplaceQueries.getCityServiceDetails(
      country,
      state,
      service,
      area
    );

    const cities: City[] = await MarketplaceQueries.getCitiesForService(
      country,
      state,
      service
    );

    if (!data?.city) {
      return <div className="container py-5">City not found.</div>;
    }

    const { city, businesses } = data;

    return (
      <Wrapper>
        <HeaderFive />

        {/* Breadcrumb */}
        <div className="mt-5">
          <div className="container py-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none">
                    Countries
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link
                    href={`/ct/${service}/in/${country}`}
                    className="text-decoration-none"
                  >
                    {toTitleCase(country)}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link
                    href={`/ct/${service}/in/${country}/st/${state}`}
                    className="text-decoration-none"
                  >
                    {toTitleCase(state)}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {toTitleCase(city.name)}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main>
          <HeroBannerHomefour2
            service={toTitleCase(service)}
            state={toTitleCase(state)}
            city={area}
          />

          <ServicesAreaHomeFour />
          <FeatureAreaHomeFour />
          <OptimizeAreaHomeFour service={service} />
          <CounterAreaHomeFour />
          <PortfolioAreaHomeFour />
          <TestimonialAreaHomeFour />
          <ReviewAreaHomeFour />
          <ContactAreaHomeFour />
          <BlogAreaHomeFour />

          <div className="container py-4">
            <h1 className="mb-4">
              {toTitleCase(service)} in {state}
            </h1>

            <div className="row">
              {cities.map((city: City) => (
                <div key={city.id} className="col-md-4 mb-4">
                  <Link
                    href={`/ct/${service}/in/${country}/st/${state}/a/${city.slug}`}
                    className="text-decoration-none"
                  >
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title text-dark">
                          {toTitleCase(service)} in {city.name}
                        </h5>
                        {/* {city.description && (
                          <p className="card-text text-muted">
                            {city.description}
                          </p>
                        )} */}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>

        <FooterFive />
        <ScrollToTop style={false} />
      </Wrapper>
    );
  } catch (error) {
    console.error("Error fetching city details:", error);
    return (
      <div className="container py-5 text-center">
        Failed to load business listings.
      </div>
    );
  }
}
