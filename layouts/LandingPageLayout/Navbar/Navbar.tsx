import React from "react";
import Link from "next/link";
import MaxWidthProvider from "../../../components/ui/MaxWidthProvider/MaxWidthProvider";

const LandingPageNavbar: React.FC = () => {
  return (
    <nav className="bg-dark-bg grid place-items-center">
      <MaxWidthProvider className="h-28 border-b border-slate-400 flex justify-between items-center">
        <div>
          <div className="font-bold text-brand-purple text-2xl">SafeSpace</div>
        </div>
        <div className="">
          <Link href="/signin">
            <a className="h-[3rem] grid place-items-center text-brand-purple text-sm font-semibold rounded-xl border border-brand-purple py-2 px-8 ">
              Sign in
            </a>
          </Link>
        </div>
      </MaxWidthProvider>
    </nav>
  );
};

export default LandingPageNavbar;
