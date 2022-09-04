import Image from "next/image";
import React from "react";

const Section1: React.FC = () => {
  return (
    <div className="grid min-h  md:grid-cols-2 mb-16">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-3xl  text-white mb-10 md:text-4xl xl:text-5xl ">
          Organize your files in a more structured and secure way
        </h1>
        <p className="font-base  text-gray-400 mb-8 text:xs md:text-lg">
          SafeSpace is a cloud based file storage platform with all the features
          you need to store, share and organize your files.
        </p>
        <div className="flex items-center gap-6">
          <button className="font-bold px-8 py-4 rounded-2xl bg-brand-purple text-white w-40 text-xs md:text-sm ">
            Get Started
          </button>
          <button className="font-bold px-8 py-4 rounded-2xl border border-brand-purple text-brand-purple w-40 text-xs md:text-sm">
            Login
          </button>
        </div>
      </div>
      <div className="grid place-items-center p-4">
        <div className="w-4/5">
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            src="/image-assets/svgs/server-room.svg"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
