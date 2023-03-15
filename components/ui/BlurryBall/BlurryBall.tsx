import React from "react";

const BlurryBall: React.FC = () => {
  return (
    <div className="relative  grid place-items-center">
      <div className="w-40 h-40 bg-brand-purple rounded-full"></div>
      <div className="w-56 h-56  absolute z-10 top-20 backdrop-blur-lg"></div>
    </div>
  );
};

export default BlurryBall;
