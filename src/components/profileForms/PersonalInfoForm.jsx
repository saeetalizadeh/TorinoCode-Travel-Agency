"use client";
import { personalInfo } from "@/core/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { DateToIso } from "@/core/utils/helper";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { usePutUserData } from "@/core/services/mutations";
import toast from "react-hot-toast";
import { useEffect } from "react";

function PersonalInfoForm({ setIsEditingPersonalInfo, PersonalInfo }) {
  useEffect(() => {
    setValue("fullName", PersonalInfo?.fullName);
    setValue("nationalCode", PersonalInfo?.nationalCode);
    setValue("gender", PersonalInfo?.gender);
    setValue("birthDate", PersonalInfo?.birthDate);
  }, []);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfo),
  });
  const { mutate } = usePutUserData();
  const submitHandler = (form) => {
    mutate(
      { ...form },
      {
        onSuccess: () => {
          toast.success("!اطلاعات شخصی با موفقیت ثبت شد");
          setIsEditingPersonalInfo(false);
        },
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex h-fit w-full flex-col"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 p-6">
          <div className="mb-5 flex gap-x-3">
            <Image
              src="/images/framebold.svg"
              width={24}
              height={24}
              alt="dfa"
            />
            <h1>ویرایش اطلاعات شخصی </h1>
          </div>

          <div className="grid grid-cols-12 gap-y-[28px] sm:gap-x-[28px]">
            <div className="col-span-12 sm:col-span-6">
              <input
                {...register("fullName")}
                placeholder="نام و نام خانوادگی"
                className="h-[44px] w-full rounded-md border p-2"
              />
              <div className="min-h-7 w-full">
                {!!errors?.fullName && (
                  <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                    {errors?.fullName?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <input
                {...register("nationalCode")}
                placeholder="کد ملی"
                type="number"
                className="no-spin h-[44px] w-full rounded-md border p-2"
              />
              <div className="min-h-7 w-full">
                {!!errors?.nationalCode && (
                  <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                    {errors?.nationalCode?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <select
                {...register("gender")}
                defaultValue="جنسیت"
                className="w-full rounded-md border p-2"
              >
                <option
                  value=""
                  disabled
                  selected
                  className="text-customGray-100/60"
                >
                  جنسیت
                </option>
                <option value="female" className="text-black">
                  زن
                </option>
                <option value="male" className="text-black">
                  مرد
                </option>
              </select>
              <div className="min-h-7 w-full">
                {!!errors?.gender && (
                  <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                    {errors?.gender?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6">
              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange } }) => (
                  <DatePicker
                    inputClass=" w-full h-[44px] p-2 rounded-md border"
                    inputAttributes={{ placeholder: " تاریخ تولد" }}
                    round="x2"
                    accentColor="#28A745"
                    onChange={(e) => {
                      onChange(DateToIso(e.value));
                    }}
                  />
                )}
              />
              <div className="min-h-7 w-full">
                {!!errors?.birthDate && (
                  <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                    {errors?.birthDate?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex gap-x-3 p-6 md:col-span-6 md:col-start-6 md:col-end-13 md:items-end">
          <button
            type="submit"
            className="w-full rounded-[10px] bg-customGreen-200 p-2 text-xl text-background"
          >
            تایید
          </button>
          <button
            onClick={() => setIsEditingPersonalInfo(false)}
            className="w-full rounded-[10px] border border-customGreen-200 bg-background p-2 text-xl text-customGreen-200"
          >
            انصراف
          </button>
        </div>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
