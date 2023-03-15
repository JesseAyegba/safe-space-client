import { useRouter } from "next/router";
import React from "react";
import MaxWidthProvider from "../../../ui/MaxWidthProvider/MaxWidthProvider";

const Section1: React.FC = () => {
  const router = useRouter();
  return (
    <MaxWidthProvider className="mx-auto pt-40 text-center">
      <h1 className="max-w-5xl mx-auto font-bold text-3xl md:text-5xl lg:text-7xl  text-white mb-10 ">
        Organize your files in a more{" "}
        <span className="text-brand-purple">structured</span> and secure way.
      </h1>
      <p className=" max-w-xl mx-auto text-slate-400 mb-8 text:xs md:text-lg">
        SafeSpace is a cloud based file storage platform with all the features
        you need to store, share and organize your files.
      </p>
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => {
            router.push("/signup");
          }}
          className="font-medium px-4 h-[3rem] rounded-xl bg-brand-purple text-white w-full max-w-[10rem] text-md  "
        >
          Get Started
        </button>
        <button
          onClick={() => {
            router.push("/signin");
          }}
          className="font-medium px-4 h-[3rem] rounded-xl border border-brand-purple text-brand-purple w-full max-w-[10rem] text-md "
        >
          Sign in
        </button>
      </div>
    </MaxWidthProvider>
  );
};

export default Section1;
