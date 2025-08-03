import FooterFive from "@/layout/footers/FooterFive";
import HeaderFive from "@/layout/headers/HeaderFive";
import ProjectAreaHomeTwo from "../home-2/ProjectAreaHomeTwo";
import ReviewAreaHomeFour from "../home-4/ReviewAreaHomeFour";
import AboutAreaHomeFive from "./AboutAreaHomeFive";
import CounterAreaHomeFive from "./CounterAreaHomeFive";
import FeatureAreaHomeFive from "./FeatureAreaHomeFive";
import HeroBannerHomeFive from "./HeroBannerHomeFive";
import ProjectFeaturHomefive from "./ProjectFeaturHomefive";
import TeamAreaHomeFive from "./TeamAreaHomeFive";
import TestimonialAreaHomeFive from "./TestimonialAreaHomeFive";
import ToolestAeaHomeFive from "./ToolestAeaHomeFive";
import CountriesSection from "./CountriesSection";

// ✅ Define the type for a country (adjust as needed based on your data)
interface Country {
  id: number;
  name: string;
  code: string;
  slug: string;
  is_active: boolean;
  // Add more fields if needed
}

interface HomeFiveProps {
  countries: Country[];
}

const HomeFive = ({ countries }: HomeFiveProps) => {
  return (
    <>
      <HeaderFive />
      <main>
        <HeroBannerHomeFive />
        <FeatureAreaHomeFive />
        <AboutAreaHomeFive />
        <CounterAreaHomeFive />
        <ToolestAeaHomeFive />
        <ProjectAreaHomeTwo style={true} />
        <ProjectFeaturHomefive />
        <TeamAreaHomeFive />
        <TestimonialAreaHomeFive />
        <ReviewAreaHomeFour style={true} />
        <CountriesSection countries={countries} />
      </main>
      <FooterFive />
    </>
  );
};

export default HomeFive;
