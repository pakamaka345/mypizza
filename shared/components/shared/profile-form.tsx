"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  formRegisterSchema,
  TFormRegisterValues,
} from "./modals/auth-modal/forms/schema";
import { User } from "@prisma/client";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { Container, FormInput, Title } from ".";
import { Button } from "../ui";
import { updateUserInfo } from "@/app/actions";

interface Props {
  data: User;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success("User info updated successfully", { icon: "🚀" });
    } catch (error) {
      return toast.error("Failed to update user info", { icon: "🔥" });
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <Container className="my-10">
      <Title text="Personal Information" size="md" className="font-bold" />

      <FormProvider {...form}>
        <form
          className="flex flex-col gap-5 w-96 mt-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="Email" required />
          <FormInput name="fullName" label="Full Name" required />

          <FormInput
            name="password"
            label="Password"
            type="password"
            required
          />
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            required
          />

          <Button
            disabled={form.formState.isSubmitting}
            className="text-base mt-10"
            type="submit"
          >
            Save Changes
          </Button>

          <Button
            onClick={onClickSignOut}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button"
          >
            Sign Out
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
