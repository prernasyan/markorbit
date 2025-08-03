import TeamDetailsDynamic from "@/components/inner-pages/team-details-dynamic";
import team_data from "@/data/team";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import { notFound } from "next/navigation";

export const metadata = {
  title:
    "Team Details - SEO Marketing - Digital Marketing & SEO Agency Next js Template",
};

// Generate static params for all valid team member IDs
export async function generateStaticParams() {
  return team_data.map((member) => ({
    id: member.id.toString(),
  }));
}

const TeamDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const single_member = team_data.find(
    (item) => Number(item.id) === Number(id)
  );

  // If member not found, trigger 404
  if (!single_member) {
    notFound();
  }

  return (
    <Wrapper>
      <HeaderSix />
      <main>
        <TeamDetailsDynamic single_member={single_member} />
      </main>
      <FooterFive style={true} />
      <ScrollToTop style={false} />
    </Wrapper>
  );
};

export default TeamDetailsPage;
