// src/app/ct/[service]/in/[country]/st/[state]/page.tsx

import Link from "next/link";
import { MarketplaceQueries } from "@/lib/queries";
import Wrapper from "@/layout/Wrapper";
import HomeFour from "@/components/homes/home-4";
import ScrollToTop from "@/components/common/scroll-to-top";
import HeaderFive from "@/layout/headers/HeaderFive";
import HeroBannerHomefour from "@/components/homes/home-4/HeroBannerHomefour";
import FooterFive from "@/layout/footers/FooterFive";
import ServicesAreaHomeFour from "@/components/homes/home-4/ServicesAreaHomeFour";
import FeatureAreaHomeFour from "@/components/homes/home-4/FeatureAreaHomeFour";
import OptimizeAreaHomeFour from "@/components/homes/home-4/OptimizeAreaHomeFour";
import CounterAreaHomeFour from "@/components/homes/home-4/CounterAreaHomeFour";
import PortfolioAreaHomeFour from "@/components/homes/home-4/PortfolioAreaHomeFour";
import TestimonialAreaHomeFour from "@/components/homes/home-4/TestimonialAreaHomeFour";
import ReviewAreaHomeFour from "@/components/homes/home-4/ReviewAreaHomeFour";
import ContactAreaHomeFour from "@/components/homes/home-4/ContactAreaHomeFour";
import BlogAreaHomeFour from "@/components/homes/home-4/BlogAreaHomeFour";
import AwardAreaHomeFour from "@/components/homes/home-4/AwardAreaHomeFour";

const toTitleCase = (str: string) =>
  str
    .split(/[-_ ]+/) // handle kebab-case, snake_case, or space
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

// Define types for params and cities
interface Params {
  params: {
    service: string;
    country: string;
    state: string;
  };
}

interface City {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export async function generateStaticParams() {
  return []; // Optional: add pre-generated params here
}

export async function generateMetadata({ params }: Params) {
  const { service, country, state } = params;
  return {
    title: `${toTitleCase(service)} in ${state}`,
  };
}

export default async function ServiceCitiesPage({ params }: Params) {
  const { service, country, state } = params;

  try {
    const cities: City[] = await MarketplaceQueries.getCitiesForService(
      country,
      state,
      service
    );

    return (
      <Wrapper>
        <HeaderFive />

        {/* Breadcrumb Section */}
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
                    {country}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {state}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <main>
          <HeroBannerHomefour
            service={service}
            state={state}
            country={country}
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
          <AwardAreaHomeFour />

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
    console.error("Error fetching cities:", error);
    return (
      <Wrapper>
        <HeaderFive />
        <div className="container py-4">
          <p>Failed to load cities. Please try again later.</p>
        </div>
        <FooterFive />
      </Wrapper>
    );
  }
}
