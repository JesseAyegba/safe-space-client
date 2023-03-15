import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import { SubmitHandler, useForm } from "react-hook-form";
import { MultiStepLoginFormInputs } from "../../typings/typings";
import { yupResolver } from "@hookform/resolvers/yup";
import { MultiStepLoginFormSchema } from "./MultiStepLoginForm.schema";

const MultiStepLoginForm: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<MultiStepLoginFormInputs>({
    mode: "all",
    resolver: yupResolver(MultiStepLoginFormSchema),
  });
  const email = watch("email");

  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };

  const decreaseStep = () => {
    setStep((prev) => prev - 1);
  };

  const showUI = () => {
    switch (step) {
      case 0:
        return (
          <Step1
            onNext={increaseStep}
            register={register}
            trigger={trigger}
            errors={errors}
          />
        );

      case 1:
        return (
          <Step2
            onPrevious={decreaseStep}
            register={register}
            errors={errors}
            email={email}
          />
        );
    }
  };

  const onSubmit: SubmitHandler<MultiStepLoginFormInputs> = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
    } catch (error: any) {
    } finally {
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-slate-700 py-12 px-10 w-full max-w-md"
    >
      <div className="font-bold text-brand-purple text-2xl mb-12">
        SafeSpace
      </div>
      {showUI()}
    </form>
  );
};

export default MultiStepLoginForm;
