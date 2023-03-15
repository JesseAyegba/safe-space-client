import type { NextPage } from "next";

const Error: NextPage = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white grid place-items-center">
      <div className="flex justify-center items-center">
        <div className="border-r pr-4 mr-4 py-4 font-bold text-brand-purple text-2xl">
          404
        </div>
        <div className="text-lg">This page could not be found.</div>
      </div>
    </div>
  );
};

export default Error;
