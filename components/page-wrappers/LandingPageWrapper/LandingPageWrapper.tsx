import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

const LandingPageWrapper: React.FC = () => {
  return (
    <div>
      <div className="grid gap-32">
        <section>
          <Section1 />
        </section>
        <section>
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
