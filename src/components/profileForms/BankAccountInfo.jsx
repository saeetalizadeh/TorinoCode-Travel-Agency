import { bankAcountSchema } from "@/core/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { usePutUserData } from "@/core/services/mutations";
function BankAccountInfo({ setIsEditingBankAccountInfo, PersonalInfo }) {
  useEffect(() => {
    setValue("debitCard_code", PersonalInfo?.debitCard_code);
    setValue("accountIdentifier", PersonalInfo?.accountIdentifier);
    setValue("shaba_code", PersonalInfo?.shaba_code);
  }, []);
  const { mutate } = usePutUserData();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });
  const submitHandler = (form) => {
    mutate(
      { payment: form },
      {
        onSuccess: () => {
          toast.success("!اطلاعات بانکی با موفقیت ثبت شد");
          setIsEditingBankAccountInfo(false);
        },
      },
    );
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex h-fit w-full flex-col rounded-[10px] border"
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
            <h1>ویرایش اطلاعات حساب بانکی</h1>
          </div>

          <div className="grid grid-cols-12 gap-y-[28px] sm:gap-x-[28px]">
            <div className="col-span-12 sm:col-span-6">
              <input
                type="number"
                {...register("debitCard_code")}
                placeholder="شماره کارت"
                className="no-spin h-[44px] w-full rounded-md border p-2"
              />
              <div className="min-h-7 w-full">
                {!!errors?.debitCard_code && (
                  <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                    {errors?.debitCard_code?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <input
                {...register("accountIdentifier")}
                placeholder="شماره حساب"
                type="number"
                className="no-spin h-[44px] w-full rounded-md border p-2"
              />
              <div className="min-h-7 w-full">
                {!!errors?.accountIdentifier && (
                  <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                    {errors?.accountIdentifier?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <input
                {...register("shaba_code")}
                placeholder="شماره شبا"
                type="number"
                className="no-spin h-[44px] w-full rounded-md border p-2"
              />
              <div className="min-h-7 w-full">
                {!!errors?.shaba_code && (
                  <p className="font-VazirDigitThin pr-2 pt-1 text-customRed-100">
                    {errors?.shaba_code?.message}
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
            onClick={() => setIsEditingBankAccountInfo(false)}
            className="w-full rounded-[10px] border border-customGreen-200 bg-background p-2 text-xl text-customGreen-200"
          >
            انصراف
          </button>
        </div>
      </div>
    </form>
  );
}

export default BankAccountInfo;
