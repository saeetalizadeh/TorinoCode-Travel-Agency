"use client";
import { personalInfo } from "@/core/schema";
import { useGetToursBasket } from "@/core/services/queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { DateToIso, priceChanger } from "@/core/utils/helper";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { usePostOrder } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function CheckOutForm() {
  const { data, isPending, isError } = useGetToursBasket();
  const date = new Date(data?.data.startDate);
  const dateBack = new Date(data?.data.endDate) - date;
  const travelTime = Math.round(dateBack / 24 / 60 / 60 / 1000);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfo),
  });
  const router = useRouter();

  const { mutate } = usePostOrder();
  const submitHandler = (form) => {
    mutate(
      { form },
      {
        onSuccess: () => {
          toast.success("تور خریداری شد!");
        },
        onError: () => {
          return;
        },
      },
    );
    router.replace("profile/tours");
  };

  return (
    <div className="container font-VazirRegular">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex h-fit w-full flex-col gap-y-6"
      >
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 rounded-[10px] border bg-background p-6 lg:col-span-8">
            <div className="mb-5 flex gap-x-3">
              <Image
                src="/images/framebold.svg"
                width={24}
                height={24}
                alt="dfa"
              />
              <h1 className="text-2xl">مشخصات مسافر</h1>
            </div>

            <div className="grid grid-cols-12 gap-y-[30px] sm:gap-x-[28px] sm:gap-y-[28px]">
              <div className="col-span-12 sm:col-span-6">
                <input
                  {...register("fullName")}
                  placeholder="نام و نام خانوادگی"
                  className="h-[44px] w-full rounded-md border p-2"
                />
                <div className="min-h-9 w-full">
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
                  className="h-[44px] w-full rounded-md border p-2"
                />
                <div className="min-h-9 w-full">
                  {!!errors?.nationalCode && (
                    <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                      {errors?.nationalCode?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-span-12 h-[46px] rounded-md border sm:col-span-6">
                <select
                  {...register("gender")}
                  defaultValue="جنسیت"
                  className="w-full p-2"
                >
                  <option disabled>جنسیت</option>
                  <option value="female" className="text-black">
                    زن
                  </option>
                  <option value="male" className="text-black">
                    مرد
                  </option>
                </select>
                <div className="min-h-9 w-full">
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
                      inputAttributes={{ placeholder: "تاریخ" }}
                      round="x2"
                      accentColor="#28A745"
                      onChange={(e) => {
                        onChange(DateToIso(e.value));
                      }}
                    />
                  )}
                />
                <div className="min-h-9 w-full">
                  {!!errors?.birthDate && (
                    <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                      {errors?.birthDate?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-col gap-y-4 rounded-[10px] border bg-background p-6">
              {!isError && !isPending && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{data?.data?.title}</span>
                    <div className="text-customGray-100/50">
                      <span>
                        {travelTime} روز و {travelTime - 1} شب
                      </span>
                    </div>
                  </div>
                  <span className="my-1 h-px border-b border-dashed"></span>
                  <div className="flex items-center justify-between">
                    <span className="text-base">قیمت نهایی</span>
                    <div className="flex items-center gap-x-2">
                      <span className="text-[28px] text-customBlue-100">
                        {priceChanger(data?.data.price)}
                      </span>
                      <span className="text-xs text-customGray-100/35">
                        تومان
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-[10px] bg-customGreen-200 p-2 text-xl text-background"
                  >
                    ثبت و خرید نهایی
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckOutForm;
