import { TextInput } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";
import { MultiStepLoginFormInputs } from "../../../typings/typings";
import { inputStyles } from "../../../utils/other/inputStyles";
import ButtonLoader from "../../ui/ButtonLoader/ButtonLoader";

interface Props {
  onNext: () => void;
  register: UseFormRegister<MultiStepLoginFormInputs>;
  trigger: UseFormTrigger<MultiStepLoginFormInputs>;
  errors: FieldErrorsImpl<MultiStepLoginFormInputs>;
}

const Step1: React.FC<Props> = ({ onNext, register, trigger, errors }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleNext = async () => {
    const isValid = await trigger("email");
    if (!isValid) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 4000);
  };
  return (
    <div>
      <h1 className="font-bold text-brand-purple text-3xl mb-10">
        Sign in to SafeSpace
      </h1>
      <p className="text-slate-400 mb-4 text-sm">
        Not on your device? Use a private or incognito window to sign in.
      </p>
      <div>
        <TextInput
          className="font-bold"
          label={<div className="text-sm font-bold mb-2">Email</div>}
          size="xl"
          radius="md"
          styles={inputStyles}
          {...register("email")}
          error={
            errors.email && (
              <p className="text-xs text-red-text font-semibold">
                {errors.email.message}
              </p>
            )
          }
        />
      </div>
      <div className="mt-6 mb-8">
        <button
          disabled={loading}
          onClick={() => handleNext()}
          className={`h-[3.5rem] bg-brand-purple w-full rounded-xl font-bold ${
            loading && "opacity-50"
          }`}
          type="button"
        >
          {loading ? <ButtonLoader /> : <span>Continue</span>}
        </button>
      </div>
      <div className="text-center">
        <Link href="/signup">
          <a className="text-brand-purple text-sm text-medium">
            Sign up for an account
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
