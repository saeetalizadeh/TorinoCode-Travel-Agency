"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { email } from "@/core/schema";
import { useForm } from "react-hook-form";
import { usePutUserData } from "@/core/services/mutations";
import toast from "react-hot-toast";

function EmailForm({ userEmail, setIsEditingEmail }) {


  const { mutate } = usePutUserData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(email),
  });
  const submitHandler = (form) => {
    console.log(form);

    if (userEmail?.email !== form.email) {
      mutate(
        { ...form },
        {
          onError: (error) => {
            toast.error(error.message);
          },
        },
      );
    }
    setIsEditingEmail(false);
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="col-span-12 flex w-full justify-between lg:col-span-7 xl:col-span-5 xl:col-start-8"
    >
      <div className={`flex w-full justify-end gap-4 child:text-sm`}>
        <input
          type="text"
          {...register("email")}
          className="w-full bg-slate-400"
        />
        <button type="submit" className="w-1/6 bg-customGreen-200">
          تایید
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
