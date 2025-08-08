// src/lib/metadata.ts

import { Metadata } from "next";

interface MetadataProps {
  service: string;
  location: string;
  country?: string;
  fullPageUrl: string;
  brandName?: string;
  businessPhone?: string;
}

const defaultBrandName = "Your Brand"; // Replace with your actual brand name
const defaultBusinessPhone = "+1-234-567-8900"; // Replace with your actual phone

export const toTitleCase = (str: string) =>
  str
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export function generateServiceMetadata({
  service,
  location,
  country = "Australia",
  fullPageUrl,
  brandName = defaultBrandName,
  businessPhone = defaultBusinessPhone,
}: MetadataProps): Metadata {
  const serviceTitle = toTitleCase(service);
  const locationTitle = toTitleCase(location);

  // Meta title as specified
  const title = `${serviceTitle} in ${locationTitle} | Affordable & Expert ${serviceTitle} Services Near You`;

  // Meta description as specified
  const description = `Looking for top-rated ${serviceTitle} in ${locationTitle}? We offer affordable, expert ${serviceTitle} solutions to your local business needs. Get a free quote now!`;

  // Generate structured data schemas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brandName,
    description: `${serviceTitle} in ${locationTitle} - Affordable and Trusted`,
    url: fullPageUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: locationTitle,
      addressCountry: country,
    },
    areaServed: {
      "@type": "Place",
      name: locationTitle,
    },
    serviceType: serviceTitle,
    priceRange: "$$",
    telephone: businessPhone,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is included in your ${serviceTitle.toLowerCase()} in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our ${serviceTitle.toLowerCase()} in ${locationTitle} includes a complete package tailored to local businesses. Whether you need strategy, execution, or support, we offer customized solutions to suit your needs.`,
        },
      },
      {
        "@type": "Question",
        name: `How much does ${serviceTitle.toLowerCase()} cost in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Pricing for ${serviceTitle.toLowerCase()} in ${locationTitle} depends on your business goals, scope, and features. Contact us today for a free quote based on your requirements.`,
        },
      },
      {
        "@type": "Question",
        name: `Why choose your company for ${serviceTitle.toLowerCase()} in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We specialize in offering result-driven and affordable ${serviceTitle.toLowerCase()} in ${locationTitle}, with a strong focus on local growth, transparency, and quality service.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you offer support after the ${serviceTitle.toLowerCase()} is completed?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we offer full post-service support and maintenance to ensure ongoing success. Our local team in ${locationTitle} is always available to assist you.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does it take to complete ${serviceTitle.toLowerCase()} in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Timelines vary based on your project size. Most ${serviceTitle.toLowerCase()} projects in ${locationTitle} are completed within 2 to 6 weeks depending on the complexity.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you work with small and medium-sized businesses in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Absolutely! We love helping local businesses grow. Our ${serviceTitle.toLowerCase()} solutions in ${locationTitle} are specially designed for startups, SMEs, and growing brands.`,
        },
      },
    ],
  };

  return {
    title,
    description,
    openGraph: {
      title: `${serviceTitle} in ${locationTitle} | ${brandName}`,
      description: `Affordable & expert ${serviceTitle} in ${locationTitle}. Get a free quote today!`,
      url: fullPageUrl,
      type: "website",
      siteName: brandName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceTitle} in ${locationTitle} | ${brandName}`,
      description: `Affordable & expert ${serviceTitle} in ${locationTitle}. Get a free quote today!`,
    },
    alternates: {
      canonical: fullPageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      // Add structured data as meta tags (will be converted to script tags in the component)
      "local-business-schema": JSON.stringify(localBusinessSchema),
      "faq-schema": JSON.stringify(faqSchema),
    },
  };
}

// Utility functions to generate schema objects (without JSX)
export function generateLocalBusinessSchema({
  service,
  location,
  country = "Australia",
  fullPageUrl,
  brandName = defaultBrandName,
  businessPhone = defaultBusinessPhone,
}: MetadataProps) {
  const serviceTitle = toTitleCase(service);
  const locationTitle = toTitleCase(location);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brandName,
    description: `${serviceTitle} in ${locationTitle} - Affordable and Trusted`,
    url: fullPageUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: locationTitle,
      addressCountry: country,
    },
    areaServed: {
      "@type": "Place",
      name: locationTitle,
    },
    serviceType: serviceTitle,
    priceRange: "$",
    telephone: businessPhone,
  };
}

export function generateFAQSchema({
  service,
  location,
}: {
  service: string;
  location: string;
}) {
  const serviceTitle = toTitleCase(service);
  const locationTitle = toTitleCase(location);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is included in your ${serviceTitle.toLowerCase()} in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our ${serviceTitle.toLowerCase()} in ${locationTitle} includes a complete package tailored to local businesses. Whether you need strategy, execution, or support, we offer customized solutions to suit your needs.`,
        },
      },
      {
        "@type": "Question",
        name: `How much does ${serviceTitle.toLowerCase()} cost in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Pricing for ${serviceTitle.toLowerCase()} in ${locationTitle} depends on your business goals, scope, and features. Contact us today for a free quote based on your requirements.`,
        },
      },
      {
        "@type": "Question",
        name: `Why choose your company for ${serviceTitle.toLowerCase()} in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We specialize in offering result-driven and affordable ${serviceTitle.toLowerCase()} in ${locationTitle}, with a strong focus on local growth, transparency, and quality service.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you offer support after the ${serviceTitle.toLowerCase()} is completed?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we offer full post-service support and maintenance to ensure ongoing success. Our local team in ${locationTitle} is always available to assist you.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does it take to complete ${serviceTitle.toLowerCase()} in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Timelines vary based on your project size. Most ${serviceTitle.toLowerCase()} projects in ${locationTitle} are completed within 2 to 6 weeks depending on the complexity.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you work with small and medium-sized businesses in ${locationTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Absolutely! We love helping local businesses grow. Our ${serviceTitle.toLowerCase()} solutions in ${locationTitle} are specially designed for startups, SMEs, and growing brands.`,
        },
      },
    ],
  };
}
