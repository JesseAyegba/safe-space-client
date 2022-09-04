import React from "react";

const Section2: React.FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-center">
        <p className="px-2 py-2 bg-gray-400 rounded-xl font-semibold w-32 mx-auto mb-4 text-sm">
          Made for you
        </p>
        <h2 className="font-semibold  text-white mb-4 text-2xl md:text-4xl">
          Welcome to SafeSpace
        </h2>
        <p className="max-w-md mx-auto text-gray-400 text:xs md:text-lg">
          With our intuitive platform, we are sure you'll have no trouble
          setting things up quickly
        </p>
      </div>
    </div>
  );
};

export default Section2;
