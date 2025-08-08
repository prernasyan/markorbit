import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import HomeFive from "@/components/homes/home-5";
import { MarketplaceQueries } from "@/lib/queries";
import HeaderFive from "@/layout/headers/HeaderFive";
import ProjectAreaHomeTwo from "@/components/homes/home-2/ProjectAreaHomeTwo";
import ReviewAreaHomeFour from "@/components/homes/home-4/ReviewAreaHomeFour";
import AboutAreaHomeFive from "@/components/homes/home-5/AboutAreaHomeFive";
import CounterAreaHomeFive from "@/components/homes/home-5/CounterAreaHomeFive";
import CountriesSection from "@/components/homes/home-5/CountriesSection";
import FeatureAreaHomeFive from "@/components/homes/home-5/FeatureAreaHomeFive";
import HeroBannerHomeFive from "@/components/homes/home-5/HeroBannerHomeFive";
import ProjectFeaturHomefive from "@/components/homes/home-5/ProjectFeaturHomefive";
import TestimonialAreaHomeFive from "@/components/homes/home-5/TestimonialAreaHomeFive";
import ToolestAeaHomeFive from "@/components/homes/home-5/ToolestAeaHomeFive";
import FooterFive from "@/layout/footers/FooterFive";

export const metadata = {
  title: "Home Main - SEO Marketing - Digital Marketing & SEO Agency",
};

// This should be a Server Component that fetches data
export default async function HomePage() {
  let countries = [];

  try {
    countries = await MarketplaceQueries.getCountries();
  } catch (error) {
    console.error("Error fetching countries:", error);
    countries = [];
  }

  return (
    <Wrapper>
      {/* <HomeFive countries={countries} /> */}
      <HeaderFive />
      <main>
        <HeroBannerHomeFive />
        <FeatureAreaHomeFive />
        <AboutAreaHomeFive />
        <CounterAreaHomeFive />
        <ToolestAeaHomeFive />
        <ProjectAreaHomeTwo style={true} />
        <ProjectFeaturHomefive />
        <TestimonialAreaHomeFive />
        <ReviewAreaHomeFour style={true} />
        <CountriesSection countries={countries} />
      </main>
      <FooterFive />
      <ScrollToTop style={false} />
    </Wrapper>
  );
}
