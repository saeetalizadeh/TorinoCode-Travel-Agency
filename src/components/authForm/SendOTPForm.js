"use client";

import { useState } from "react";

import { useSendOtp } from "@/core/services/mutations";
import { isValidMobile } from "@/core/utils/validation";
import toast from "react-hot-toast";
import Image from "next/image";

function SendOTPForm({ mobile, setMobile, setStep, setIsOpen }) {
  const [error, setError] = useState("");

  const { isPending, mutate } = useSendOtp();

  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col w-[358px] relative md:w-[561px]  bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-6"
    >
      <div className="absolute left-3 top-3 p-2">
        <Image
          src="/images/add.svg"
          onClick={() => setIsOpen(false)}
          width={30}
          height={30}
          alt="x"
        />
      </div>
      <h4 className="text-[22px] font-bold text-center xl:text-[28px] mt-[36px] text-customGray-100">
        ورود به تورینو
      </h4>
      <form
        className="flex flex-col justify-end gap-4 flex-1 mt-11"
        onSubmit={sendOtpHandler}
      >
        <label className="font-VazirRegular text-black/60 ">
          شماره موبایل خود را وارد کنید
        </label>
        <input
          type="number"
          placeholder="0912***4253"
          className="h-11 rounded-md border ltr text-right no-spin p-2 border-[#00000037]"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {!!error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-customGreen-200 h-11 text-lg text-white rounded-md mt-[25px]"
          type="submit"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
