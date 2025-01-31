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
      }
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
      }
    );
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative flex flex-col w-[358px] md:w-[561px] md:items-center bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-6"
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
      <h4 className="text-[22px] font-bold text-center xl:text-[28px] mt-[36px] text-customGray-100">
        کد تایید را وارد کنید
      </h4>
      <form
        className="flex flex-col justify-end items-center gap-4 flex-1 mt-11"
        onSubmit={checkOtpHandler}
      >
        <label className="font-VazirRegular text-black/60 ">
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
          className="bg-customGreen-200 h-11 text-lg text-white md:w-[491px]  rounded-md mt-[25px]"
          type="submit"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
