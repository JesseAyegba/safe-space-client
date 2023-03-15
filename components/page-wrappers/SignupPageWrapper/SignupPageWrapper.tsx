import React from "react";
import SignupForm from "../../forms/SignupForm/SignupForm";
import BlurryBall from "../../ui/BlurryBall/BlurryBall";

const SignupPageWrapper: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg grid grid-cols-2">
      <div className="py-20 px-4">
        <SignupForm />
      </div>
      <div className="bg-slate-700 px-4 grid place-items-center">
        <BlurryBall />
      </div>
    </div>
  );
};

export default SignupPageWrapper;
