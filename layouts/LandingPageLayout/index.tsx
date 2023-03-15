import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const LandingPageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
