import React from "react";
import MultiStepLoginForm from "../../forms/MultiStepLoginForm/MultiStepLoginForm";

const SigninPageWrapper: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg flex justify-center items-start py-20">
      <MultiStepLoginForm />
    </div>
  );
};

export default SigninPageWrapper;
