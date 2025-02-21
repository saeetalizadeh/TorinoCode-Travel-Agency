"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { email } from "@/core/schema";
import { useForm } from "react-hook-form";
import { usePutUserData } from "@/core/services/mutations";
import toast from "react-hot-toast";
import { useEffect } from "react";

function EmailForm({ userEmail, setIsEditingEmail }) {
  const { mutate } = usePutUserData();
  useEffect(() => {
    setValue("email", userEmail.email);
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(email),
  });

  const submitHandler = (form) => {

    if (userEmail?.email !== form.email) {
      mutate(
        { ...form },
        {
          onSuccess: () => {
            toast.success("ایمیل شما با موفقیت ثبت شد!");
            setIsEditingEmail(false);
          },

          onError: (error) => {
            toast.error(error.message);
          },
        },
      );
    } else {
      setIsEditingEmail(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="col-span-12 flex w-full justify-between lg:col-span-7 xl:col-span-5 xl:col-start-8"
    >
      <div className={`relative flex w-full justify-end gap-4`}>
        <input
          type="text"
          {...register("email")}
          placeholder="آدرس ایمیل"
          className="w-full rounded-[5px] border bg-background pr-3 text-sm focus:bg-background focus:outline-none"
        />
        {errors.email && (
          <span className="absolute -bottom-[18px] right-3 text-xs text-customRed-100">
            {errors.email.message}
          </span>
        )}
        <button
          type="submit"
          className="w-1/3 rounded-[5px] bg-customGreen-200 py-[10px] text-sm text-background"
        >
          تایید
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
