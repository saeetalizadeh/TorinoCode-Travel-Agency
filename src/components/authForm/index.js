"use client";

import { useState } from "react";
import Link from "next/link";
import ModalContainer from "../partials/container/ModalContainer";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useGetUserData } from "@/core/services/queries";
import Image from "next/image";
import { setCookie } from "@/core/utils/cookie";
import { useAuthInfo } from "../partials/provider/AuthProvider";
import { useQueryClient } from "@tanstack/react-query";

function AuthForm() {
  const { isLogin, setIsLogin, isOpen, setIsOpen } = useAuthInfo();

  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const queryClient = useQueryClient();

  const { data } = useGetUserData();
  const logOutHandler = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
    setIsLogin(false);
  };

  return (
    <div>
      {isLogin ? (
        <div className="relative delay-150">
          <div
            onClick={() => setDropDown((item) => !item)}
            className="flex items-center gap-x-1 text-myGreen-200"
          >
            <div className="relative h-[14px] w-[14px] xs:h-5 xs:w-5 md:h-6 md:w-6">
              <Image fill={true} src="/images/Adamak.svg" alt="profile" />
            </div>

            <span className="px-1.5 py-0.5 text-[14px] font-medium xs:text-[18px] md:text-[18px]">
              {data?.data?.mobile}
            </span>

            <div
              className="
            relative h-[14px] w-[14px] xs:h-5 xs:w-5 md:h-6 md:w-6"
            >
              <Image fill={true} src="/images/arrow-down.svg" alt="profile" />
            </div>
          </div>
          {/* {dropDown && ( */}
          <div
            className={`absolute -left-[10%] top-8 w-[167px] divide-y rounded-2xl bg-background  shadow-md xs:top-10 xs:w-[200px] md:top-10 mdC:top-10 lg:-left-[20%] lg:w-[246px] ${
              dropDown ? "profile-down-active " : "profile-down-hidden"
            }`}
          >
            <div className="flex h-11 items-center gap-x-3 rounded-t-[11px] bg-myGray-105/80 px-3">
              <div className="relative h-4 w-4 rounded-full bg-myGray-140 p-2 md:p-3">
                <Image fill={true} src="/images/frame.svg" alt="profile" />
              </div>
              <span className="w-fit text-[14px] font-medium text-myGreen-300 md:text-[16px] lg:text-[18px]">
                {!!data?.data?.firstName
                  ? `${data.data.firstName} ${data.data.lastName}`
                  : data?.data?.mobile}
              </span>
            </div>

            <Link
              href={"/profile"}
              // onClick={() => setDropDown(false)}
              className="relative flex h-[35px] items-center gap-x-2 pr-3 hover:bg-myGray-110 lg:h-[45px]"
            >
              <div className="relative h-4 w-4 md:h-5 md:w-5">
                <Image fill={true} src="/images/profile.svg" alt="profile" />
              </div>
              <span className="text-[12px] text-myGray-410 lg:text-[14px]">
                اطلاعات حساب کاربری
              </span>
            </Link>

            <div className="flex h-[35px] items-center gap-x-2 rounded-b-[15px] pb-1.5 pr-3 hover:bg-myGray-110 lg:h-[45px]">
              <div className="relative mt-1 h-4 w-4 md:h-5 md:w-5">
                <Image fill={true} src="/images/logout.svg" alt="profile" />
              </div>
              <span
                className="text-[12px] text-myRed-100 lg:text-[14px]"
                onClick={logOutHandler}
              >
                خروج از حساب کاربری
              </span>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className=" border border-customGreen-200 rounded-lg xl:px-4 xl:py-2 px-2 py-1 "
        >
          <div className="md:flex gap-2 hidden">
            <div className="relative w-5 h-5 xl:w-6 xl:h-6">
              <Image src="/images/Adamak.svg" fill={true} alt="آدمک" />
            </div>
            <span className="text-customGreen-200 xl:text-[18px] border-l pl-2 border-customGreen-200 text-sm">
              ورود
            </span>
            <span className="text-customGreen-200 xl:text-[18px] text-sm">
              ثبت نام
            </span>
          </div>
          <div className="md:hidden">
            <Image src="/images/login.svg" width={24} height={24} alt="آدمک" />
          </div>
        </button>
      )}
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            setIsOpen={setIsOpen}
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
