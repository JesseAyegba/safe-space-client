import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

const LandingPageWrapper: React.FC = () => {
  return (
    <div>
      <div className="px-4 md:px-8">
        <section className="mb-10">
          <Section1 />
        </section>
        <section className="mb-10">
          <Section2 />
        </section>
        <section className="">
          <Section3 />
        </section>
      </div>
    </div>
  );
};

export default LandingPageWrapper;
