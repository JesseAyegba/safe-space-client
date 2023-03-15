import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignupFormInputs } from "../../../typings/typings";
import { inputStyles } from "../../../utils/other/inputStyles";
import ButtonLoader from "../../ui/ButtonLoader/ButtonLoader";
import { SignupFormSchema } from "./SignupForm.schema";

const SignupForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    mode: "all",
    resolver: yupResolver(SignupFormSchema),
  });

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
      const firstName = data.firstName;
      const lastName = data.lastName;
      const email = data.email;
      const password = data.password;

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    } catch (error: any) {
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-[30rem] mx-auto">
        <div className="font-bold text-brand-purple text-2xl mb-12">
          SafeSpace
        </div>
        <h1 className="font-bold text-brand-purple text-3xl mb-10">
          Create an account
        </h1>
      </div>
      <div className="grid gap-6 max-w-[30rem] mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <TextInput
              className="font-bold"
              withAsterisk
              label={
                <div className="text-sm inline font-bold mb-2">First name</div>
              }
              size="xl"
              radius="md"
              styles={inputStyles}
              {...register("firstName")}
              error={
                errors.firstName && (
                  <p className="text-xs text-red-text font-semibold">
                    {errors.firstName.message}
                  </p>
                )
              }
            />
          </div>
          <div>
            <TextInput
              className="font-bold"
              withAsterisk
              label={
                <div className="text-sm inline font-bold mb-2">Last name</div>
              }
              size="xl"
              radius="md"
              styles={inputStyles}
              {...register("lastName")}
              error={
                errors.lastName && (
                  <p className="text-xs text-red-text font-semibold">
                    {errors.lastName.message}
                  </p>
                )
              }
            />
          </div>
        </div>
        <div>
          <TextInput
            className="font-bold"
            withAsterisk
            label={<div className="text-sm inline font-bold mb-2">Email</div>}
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
        <div>
          <TextInput
            className="font-bold"
            withAsterisk
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
            label={
              <div className="text-sm inline font-bold mb-2">Password</div>
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
        <div className="mt-6 mb-8">
          <button
            disabled={loading}
            className={`h-[3.5rem] bg-brand-purple w-full rounded-xl font-bold ${
              loading && "opacity-50"
            }`}
            type="submit"
          >
            {loading ? <ButtonLoader /> : <span>Sign up</span>}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
