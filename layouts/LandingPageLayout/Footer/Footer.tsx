import React from "react";
import MaxWidthProvider from "../../../components/ui/MaxWidthProvider/MaxWidthProvider";

const Footer: React.FC = () => {
  return (
    <MaxWidthProvider className="mx-auto bg-dark-bg border-t border-slate-400 py-8 mt-32">
      <div>
        <div className="text-slate-400 text-lg">Built by Neon</div>
      </div>
      <div></div>
    </MaxWidthProvider>
  );
};

export default Footer;
