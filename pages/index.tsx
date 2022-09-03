import type { NextPage } from "next";
import LandingPageWrapper from "../components/ui/LandingPageWrapper/LandingPageWrapper";
import LandingPageLayout from "../layouts/LandingPageLayout";

const Home: NextPage = () => {
  return (
    <div>
      <LandingPageLayout>
        <LandingPageWrapper />
      </LandingPageLayout>
    </div>
  );
};

export default Home;
