import Image from "next/image";
import React from "react";

const Section1: React.FC = () => {
  return (
    <div className="grid grid-cols-2 min-h py-4 px-8">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-6xl text-white mb-10">
          Organize your files in a more structured and secure way
        </h1>
        <p className="font-base text-lg text-gray-400 mb-8">
          SafeSpace is a cloud based file storage platform with all the features
          you need to store, share and organize your files.
        </p>
        <div className="flex items-center gap-6">
          <button className="font-bold px-8 py-4 rounded-2xl bg-brand-purple text-white w-40">
            Get Started
          </button>
          <button className="font-bold px-8 py-4 rounded-2xl border border-brand-purple text-brand-purple w-40">
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
