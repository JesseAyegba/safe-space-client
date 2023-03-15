import Link from "next/link";
import React, { useState } from "react";
import EmailBlock from "../../../ui/EmailBlock/EmailBlock";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { MultiStepLoginFormInputs } from "../../../../typings/typings";
import { inputStyles } from "../../../../utils/other/inputStyles";
import { TextInput } from "@mantine/core";

interface Props {
  onPrevious: () => void;
  register: UseFormRegister<MultiStepLoginFormInputs>;
  errors: FieldErrorsImpl<MultiStepLoginFormInputs>;
  email: string;
}

const Step2: React.FC<Props> = ({ onPrevious, register, errors, email }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handPrevious = () => {
    onPrevious();
  };
  return (
    <div>
      {" "}
      <h1 className="font-bold text-brand-purple text-3xl mb-10">
        Enter password
      </h1>
      <div className="grid gap-8">
        <div>
          <EmailBlock
            onClick={() => {
              onPrevious();
            }}
            email={email}
          />
        </div>
        <div>
          <TextInput
            type={showPassword ? "text" : "password"}
            rightSection={
              <div
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
                className="cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </div>
            }
            className="font-bold"
            label={
              <button
                type="button"
                className="text-sm font-bold mb-2 hover:bg-green-500"
              >
                Password
              </button>
            }
            size="xl"
            radius="md"
            styles={inputStyles}
            {...register("password")}
            error={
              errors.password && (
                <p className="text-xs text-red-text font-semibold">
                  {errors.password.message}
                </p>
              )
            }
          />
        </div>
      </div>
      <div className="mt-6 mb-8">
        <button
          type="submit"
          className="h-[3.5rem] bg-brand-purple w-full rounded-xl font-bold"
        >
          <span>Sign in</span>
        </button>
      </div>
      <div className="text-center">
        <Link href="/reset-password">
          <a className="text-brand-purple text-sm text-medium">
            Forgot password?
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Step2;
