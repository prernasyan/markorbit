// src/app/ct/[service]/in/[country]/st/[state]/page.tsx

import Link from "next/link";
import { Metadata } from "next";
import { MarketplaceQueries } from "@/lib/queries";
import { generateServiceMetadata, toTitleCase } from "@/lib/metadata";
import Wrapper from "@/layout/Wrapper";
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
import StructuredData from "@/components/seo/StructuredData";

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

// Configuration - Update these with your actual values
const SITE_CONFIG = {
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL || "https://seomy-nextjs.vercel.app/", // Replace with your actual domain
  brandName: "Seomy", // Replace with your actual brand name
  businessPhone: "+1-234-567-8900", // Replace with your actual phone
};

export async function generateStaticParams() {
  return []; // Optional: add pre-generated params here
}

// Generate metadata for SEO with your exact structure
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service, country, state } = params;
  const fullPageUrl = `${SITE_CONFIG.baseUrl}/ct/${service}/in/${country}/st/${state}`;

  return generateServiceMetadata({
    service,
    location: state,
    country: toTitleCase(country), // Use dynamic country from params
    fullPageUrl,
    brandName: SITE_CONFIG.brandName,
    businessPhone: SITE_CONFIG.businessPhone,
  });
}

export default async function ServiceCitiesPage({ params }: Params) {
  const { service, country, state } = params;

  try {
    const cities: City[] = await MarketplaceQueries.getCitiesForService(
      country,
      state,
      service
    );

    const fullPageUrl = `${SITE_CONFIG.baseUrl}/ct/${service}/in/${country}/st/${state}`;

    return (
      <Wrapper>
        {/* Add structured data to head */}
        <StructuredData
          service={service}
          location={state}
          country={toTitleCase(country)} // Use dynamic country from params
          fullPageUrl={fullPageUrl}
          brandName={SITE_CONFIG.brandName}
          businessPhone={SITE_CONFIG.businessPhone}
        />

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
                    {toTitleCase(country)}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {toTitleCase(state)}
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
            <h3 className="mb-4">
              {toTitleCase(service)} in {toTitleCase(state)} | Affordable &
              Expert {toTitleCase(service)} Near You
            </h3>

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
                          {toTitleCase(service)} in {toTitleCase(city.name)}
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* FAQ Section - This helps with the FAQ schema */}
            <section className="mt-5">
              <h2>Frequently Asked Questions</h2>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      Q- What is included in your{" "}
                      {toTitleCase(service).toLowerCase()} in{" "}
                      {toTitleCase(state)}?
                    </button>
                  </h3>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      A- Our {toTitleCase(service).toLowerCase()} in{" "}
                      {toTitleCase(state)} includes a complete package tailored
                      to local businesses. Whether you need strategy, execution,
                      or support, we offer customized solutions to suit your
                      needs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      Q- How much does {toTitleCase(service).toLowerCase()} cost
                      in {toTitleCase(state)}?
                    </button>
                  </h3>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      A- Pricing for {toTitleCase(service).toLowerCase()} in{" "}
                      {toTitleCase(state)} depends on your business goals,
                      scope, and features. Contact us today for a free quote
                      based on your requirements.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      Q- Why choose your company for{" "}
                      {toTitleCase(service).toLowerCase()} in{" "}
                      {toTitleCase(state)}?
                    </button>
                  </h3>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      A- We specialize in offering result-driven and affordable{" "}
                      {toTitleCase(service).toLowerCase()} in{" "}
                      {toTitleCase(state)}, with a strong focus on local growth,
                      transparency, and quality service.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                    >
                      Q- Do you offer support after the{" "}
                      {toTitleCase(service).toLowerCase()} is completed?
                    </button>
                  </h3>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      A- Yes, we offer full post-service support and maintenance
                      to ensure ongoing success. Our local team in{" "}
                      {toTitleCase(state)} is always available to assist you.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                    >
                      Q- How long does it take to complete{" "}
                      {toTitleCase(service).toLowerCase()} in{" "}
                      {toTitleCase(state)}?
                    </button>
                  </h3>
                  <div
                    id="faq5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      A- Timelines vary based on your project size. Most{" "}
                      {toTitleCase(service).toLowerCase()} projects in{" "}
                      {toTitleCase(state)} are completed within 2 to 6 weeks
                      depending on the complexity.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq6"
                    >
                      Q- Do you work with small and medium-sized businesses in{" "}
                      {toTitleCase(state)}?
                    </button>
                  </h3>
                  <div
                    id="faq6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      A- Absolutely! We love helping local businesses grow. Our{" "}
                      {toTitleCase(service).toLowerCase()} solutions in{" "}
                      {toTitleCase(state)} are specially designed for startups,
                      SMEs, and growing brands.
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
          <h1>Error Loading Cities</h1>
          <p>Failed to load cities. Please try again later.</p>
        </div>
        <FooterFive />
      </Wrapper>
    );
  }
}
