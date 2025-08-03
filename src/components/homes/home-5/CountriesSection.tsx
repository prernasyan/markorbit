"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Country {
  id: number;
  name: string;
  slug: string;
}

interface State {
  id: number;
  name: string;
  slug: string;
}

interface Service {
  id: number;
  name: string;
  slug: string;
}

interface ServicesMap {
  [stateSlug: string]: Service[];
}

const CountriesSection = ({ countries = [] }: { countries: Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [states, setStates] = useState<State[]>([]);
  const [servicesMap, setServicesMap] = useState<ServicesMap>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countries.length > 0) {
      const india = countries.find(
        (country) =>
          country.name.toLowerCase().includes("india") ||
          country.slug === "india"
      );
      if (india) handleCountrySelect(india);
    }
  }, [countries]);

  const handleCountrySelect = async (country: Country) => {
    if (selectedCountry?.slug === country.slug) {
      setSelectedCountry(null);
      setStates([]);
      setServicesMap({});
      return;
    }

    setSelectedCountry(country);
    setLoading(true);
    setServicesMap({});

    try {
      const response = await fetch(`/api/states/${country.slug}`);
      const data: State[] = await response.json();
      setStates(data);
      if (data.length > 0) {
        await fetchServicesForAllStates(country, data);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchServicesForAllStates = async (
    country: Country,
    statesData: State[]
  ) => {
    const servicesResults = await Promise.all(
      statesData.map(async (state) => {
        try {
          const response = await fetch(
            `/api/services/${country.slug}/${state.slug}`
          );
          const data = await response.json();
          return { stateSlug: state.slug, services: data.data || [] };
        } catch {
          return { stateSlug: state.slug, services: [] };
        }
      })
    );

    const newServicesMap: ServicesMap = {};
    servicesResults.forEach((result) => {
      newServicesMap[result.stateSlug] = result.services;
    });

    setServicesMap(newServicesMap);
  };

  return (
    <section className="py-5">
      <div className="container-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">
            Find Local Services
          </h2>
          <p className="text-muted fs-5">
            Discover trusted service providers in your area
          </p>
        </div>

        {/* Countries */}
        <div className="mb-5">
          <h3 className="h3 fw-semibold text-dark mb-4">Select Your Country</h3>
          <div className="d-flex flex-wrap gap-3 mb-4">
            {countries.map((country) => {
              const isSelected = selectedCountry?.slug === country.slug;
              return (
                <button
                  key={country.id}
                  onClick={() => handleCountrySelect(country)}
                  className={`btn btn-sm rounded-pill fw-medium transition-all ${
                    isSelected ? "btn-primary" : "btn-outline-secondary"
                  }`}
                >
                  {country.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* States and Services */}
        {selectedCountry && (
          <div className="bg-light rounded p-4 mb-4">
            <div className="small text-muted mb-3">
              Selected:{" "}
              <span className="fw-medium text-dark">
                {selectedCountry.name}
              </span>
            </div>
            <h4 className="h4 fw-semibold text-dark mb-4">
              Available Services by State/Region
            </h4>

            {loading ? (
              <div className="text-center text-muted py-4">
                <div
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                Loading states and services...
              </div>
            ) : (
              <div className="overflow-auto pb-3">
                <div
                  className="d-flex gap-4"
                  style={{ minWidth: "fit-content" }}
                >
                  {states.map((state) => (
                    <div
                      key={state.id}
                      className="card flex-shrink-0"
                      style={{ minWidth: "280px", width: "280px" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title border-bottom pb-2 mb-3">
                          {state.name}
                        </h5>
                        {servicesMap[state.slug]?.length > 0 ? (
                          <ul className="list-unstyled">
                            {servicesMap[state.slug].map((service) => (
                              <li key={service.id} className="mb-2">
                                <Link
                                  href={`/ct/${service.slug}/in/${selectedCountry.slug}/st/${state.slug}`}
                                  className="text-decoration-none small text-primary"
                                >
                                  {service.name} in {state.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="small text-muted fst-italic">
                            No services available in {state.name}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CountriesSection;
