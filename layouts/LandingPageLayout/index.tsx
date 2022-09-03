import React from "react";
import Navbar from "./Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const LandingPageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default LandingPageLayout;
