import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import HomeFive from "@/components/homes/home-5";
import { MarketplaceQueries } from "@/lib/queries";

export const metadata = {
  title:
    "Home Main - SEO Marketing - Digital Marketing & SEO Agency Next js Template",
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
      <HomeFive countries={countries} />
      <ScrollToTop style={false} />
    </Wrapper>
  );
}
