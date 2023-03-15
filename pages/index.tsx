import type { NextPage } from "next";
import LandingPageWrapper from "../components/page-wrappers/LandingPageWrapper/LandingPageWrapper";
import LandingPageLayout from "../layouts/LandingPageLayout";

const Home: NextPage = () => {
  return (
    <LandingPageLayout>
      <LandingPageWrapper />
    </LandingPageLayout>
  );
};

export default Home;
