import React from "react";
import MaxWidthProvider from "../MaxWidthProvider/MaxWidthProvider";

interface Props {
  header: string;
  body: string;
  illustration: React.ReactNode;
  reverse?: boolean;
}

const Hero: React.FC<Props> = ({ header, body, illustration, reverse }) => {
  return (
    <MaxWidthProvider
      className={`mx-auto grid gap-20 lg:flex lg:items-center ${
        reverse && "flex-row-reverse"
      }`}
    >
      <div className="flex-1">
        <div className=" text-center lg:text-left">
          <h2 className="text-white text-3xl  font-bold mb-4 md:text-4xl">
            {header}
          </h2>
          <p className="text-2xl  text-slate-400 md:text-3xl">{body}</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="max-w-[30rem] mx-auto">{illustration}</div>
      </div>
    </MaxWidthProvider>
  );
};

export default Hero;
