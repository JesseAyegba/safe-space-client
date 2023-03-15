import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Hero from "../../../ui/Hero/Hero";

const Section2: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../public/image-assets/jsons/secure-server.json"),
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className="grid place-items-center">
      <Hero
        header="Open global accounts"
        body="Open a US Dollar, Nigerian Naira, Canadian Dollar, United Kingdom Pounds account in less than 5 minutes."
        illustration={<div ref={container} className=""></div>}
        reverse
      />
    </div>
  );
};

export default Section2;
