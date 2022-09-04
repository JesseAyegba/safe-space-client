import React from "react";
import Link from "next/link";

const LandingPageNavbar: React.FC = () => {
  return (
    <nav className="bg-dark-bg">
      <div className="h-full grid  grid-cols-2  px-4 py-10  lg:grid-cols-[0.3fr,1fr,0.4fr] md:px-8">
        <div>
          <h2 className="font-bold text-brand-purple text-2xl">SafeSpace</h2>
        </div>
        <div className="place-items-center hidden lg:grid">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="#">
                <a className="text-white font-semibold text-sm hover:border-b-4 hover:border-brand-purple py-3">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-white font-semibold text-sm hover:border-b-4 hover:border-brand-purple py-3">
                  Pricing
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-8">
          <button className="hidden text-brand-purple text-sm font-semibold lg:inline-block">
            Sign in
          </button>
          <button className="hidden bg-brand-purple text-sm font-semibold text-white px-6 py-2 rounded-lg lg:inline-block">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavbar;
