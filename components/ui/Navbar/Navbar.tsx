import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="bg-dark-bg px-4 flex justify-center items-center">
      <div className="flex items-center justify-between h-20 w-full max-w-8xl">
        <section>
          <p className="text-white text-3xl font-bold">Safe Space</p>
        </section>
        <section className="flex items-center">
          <Link href="#">
            <a className="text-white block text-sm mx-2">Login</a>
          </Link>
          <Link href="#">
            <a className="bg-brand-purple rounded-sm block text-white text-sm mx-2 px-4 py-3 font-bold">
              Get started
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
