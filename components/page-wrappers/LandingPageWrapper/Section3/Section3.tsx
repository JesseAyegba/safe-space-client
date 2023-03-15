import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Hero from "../../../ui/Hero/Hero";

const Section3: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../public/image-assets/jsons/secure-note.json"),
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className="grid place-items-center">
      <Hero
        header="Introducing Secure Journals"
        body="The perfect way to keep your private thoughts and musings safe from prying eyes! With our advanced security features, you can be rest assured that your journal will remain for your eyes only."
        illustration={<div ref={container} className=" "></div>}
      />
    </div>
  );
};

export default Section3;
