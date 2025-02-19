"use client";

import { useState } from "react";
import OtpInput from "react18-input-otp";

import { useCheckOtp, useSendOtp } from "@/core/services/mutations";
import { useAuthInfo } from "../partials/provider/AuthProvider";
import Image from "next/image";
import TimerOTP from "./TimerOTP";
import { isValidMobile } from "@/core/utils/validation";
import toast from "react-hot-toast";

function CheckOTPForm({ mobile, setStep, setIsOpen }) {
  const [code, setCode] = useState("");

  const { setIsLogin } = useAuthInfo();
  const { isPending, mutate } = useCheckOtp();

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: async (data) => {
          setIsOpen(false);
          setStep(1);
          setIsLogin(true);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);
  const changeHandler = (otp) => {
    setCode(otp);
  };
  const [error, setError] = useState("");

  const { isPending: isPending2, mutate: mutate2 } = useSendOtp();

  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending2) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    setError("");

    mutate2(
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
      },
    );
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative flex w-[358px] flex-col rounded-[20px] bg-white p-6 shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] md:w-[561px] md:items-center"
    >
      <div className="absolute left-3 top-3 p-2">
        <Image
          src="/images/Line arrow-left.svg"
          onClick={() => setStep(1)}
          width={24}
          height={24}
          alt="x"
        />
      </div>
      <h4 className="mt-[36px] text-center text-[22px] font-bold text-customGray-100 xl:text-[28px]">
        کد تایید را وارد کنید
      </h4>
      <form
        className="mt-11 flex flex-1 flex-col items-center justify-end gap-4"
        onSubmit={checkOtpHandler}
      >
        <label className="font-VazirRegular text-black/60">
          کد تایید به شماره {mobile} ارسال شد
        </label>
        <div style={{ direction: "ltr" }}>
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "49px",
              height: "45px",
              marginRight: "5px",
            }}
          />
        </div>
        <div>
          <TimerOTP expiryTimestamp={time} sendOtpHandler={sendOtpHandler} />
        </div>
        <button
          className="mt-[25px] h-11 rounded-md w-full bg-customGreen-200 px-3 text-lg text-white md:w-[491px]"
          type="submit"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
