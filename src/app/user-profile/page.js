"use client";
import BankAccountInfo from "@/components/profileForms/BankAccountInfo";
import EmailForm from "@/components/profileForms/EmailForm";
import PersonalInfoForm from "@/components/profileForms/PersonalInfoForm";
import { useGetUserData } from "@/core/services/queries";
import Image from "next/image";
import { useState } from "react";

function Profile() {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [isEditingBankAccountInfo, setIsEditingBankAccountInfo] =
    useState(false);
  const genders = {
    male: "مرد",
    female: "زن",
  };
  function monthNumToFa(date) {
    const month = {
      "\u06F1": "فروردین",
      "\u06F2": "اردیبهشت",
      "\u06F3": "خرداد",
      "\u06F4": "تیر",
      "\u06F5": "مرداد",
      "\u06F6": "شهریور",
      "\u06F7": "مهر",
      "\u06F8": "آبان",
      "\u06F9": "آذر",
      "\u06F1\u06F0": "دی",
      "\u06F1\u06F1": "بهمن",
      "\u06F1\u06F2": "اسفند",
    };
    const newDate = new Intl.DateTimeFormat("fa").format(date).split("/");

    return [`${newDate[2]} ${month[newDate[1]]} ${newDate[0]}`];
  }
  const { data } = useGetUserData();

  return (
    <div className="mb-6 mt-6 flex flex-col gap-y-5 font-VazirRegular md:mt-0">
      <div className="flex flex-col gap-y-5 rounded-[10px] border p-4">
        <h1>اطلاعات حساب کاربری</h1>
        <div
          className={`grid grid-cols-12 ${isEditingEmail && "items-center"} gap-y-5 lg:gap-x-8`}
        >
          <div className="col-span-12 flex justify-between child:text-sm lg:col-span-5">
            <span className="text-customGray-100/80">شماره موبایل</span>
            <span className="tracking-wider">{data?.data.mobile}</span>
          </div>
          {isEditingEmail ? (
            <EmailForm
              setIsEditingEmail={setIsEditingEmail}
              userEmail={data?.data}
            />
          ) : (
            <div className="col-span-12 flex w-full justify-between lg:col-span-7 xl:col-span-5 xl:col-start-8">
              <span className="w-1/5 text-sm text-customGray-100/80">
                ایمیل
              </span>
              <div
                className={`flex flex-wrap-reverse ${!!data?.data.email ? "w-full" : "w-1/2 flex-row-reverse justify-between"} justify-end gap-4 child:text-sm`}
              >
                <button
                  onClick={() => setIsEditingEmail(true)}
                  className="flex items-center gap-2 text-customBlue-100 hover:text-customBlue-100/80"
                >
                  <Image
                    src="/images/edit-2.svg"
                    width={16}
                    height={16}
                    alt="افزودن"
                  />
                  <span>{!!data?.data.email ? "ویرایش ایمیل" : "افزودن"}</span>
                </button>
                <span className="font-sans tracking-wide text-customGray-100/90">
                  {data?.data.email ? data.data.email : "---"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex flex-col gap-y-5 rounded-[10px] border ${isEditingPersonalInfo ? "p-0" : "p-4"}`}
      >
        {isEditingPersonalInfo ? (
          <PersonalInfoForm
            PersonalInfo={data?.data}
            setIsEditingPersonalInfo={setIsEditingPersonalInfo}
          />
        ) : (
          <>
            <div className="flex justify-between">
              <h1>اطلاعات شخصی</h1>
              <button
                onClick={() => setIsEditingPersonalInfo(true)}
                className="flex items-center gap-2 text-sm text-customBlue-100 hover:text-customBlue-100/80"
              >
                <Image
                  src="/images/edit-2.svg"
                  width={16}
                  height={16}
                  alt="افزودن"
                />
                <span>
                  {!!data?.data.email ? "ویرایش اطلاعات " : "افزودن اطلاعات "}
                </span>
              </button>
            </div>
            <div className="grid grid-cols-12 gap-x-4 gap-y-5 child:text-sm child:text-customGray-100/95">
              <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-7">
                <span className="text-customGray-100/80 xs:w-1/3 sm:w-fit lg:w-1/3">
                  نام و نام خانوداگی
                </span>
                <span
                  className={`${data?.data.fullName ? "text-left xs:w-1/2" : "w-1/2 text-center"} sm:w-fit lg:w-1/2`}
                >
                  {data?.data.fullName ? data.data.fullName : "---"}
                </span>
              </div>
              <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-5">
                <span className="text-customGray-100/80 xs:w-1/3 sm:w-fit lg:w-1/3">
                  کد ملی
                </span>
                <span
                  className={`${data?.data.nationalCode ? "text-left xs:w-1/2" : "w-1/2 text-center"} sm:w-fit lg:w-1/2`}
                >
                  {data?.data.nationalCode ? data.data.nationalCode : "---"}
                </span>
              </div>
              <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-7">
                <span className="text-customGray-100/80 xs:w-1/3 sm:w-fit lg:w-1/3">
                  جنسیت
                </span>
                <span
                  className={`${data?.data.gender ? "text-left xs:w-1/2" : "w-1/2 text-center"} sm:w-fit lg:w-1/2`}
                >
                  {!!data?.data.gender ? genders[data?.data.gender] : "---"}
                </span>
              </div>
              <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-5">
                <span className="text-customGray-100/80 xs:w-1/3 sm:w-fit lg:w-1/3">
                  تاریخ تولد
                </span>
                <span
                  className={`${data?.data.birthDate ? "text-left xs:w-1/2" : "w-1/2 text-center"} sm:w-fit lg:w-1/2`}
                >
                  {data?.data.birthDate
                    ? monthNumToFa(new Date(data.data.birthDate))
                    : "---"}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      {isEditingBankAccountInfo ? (
        <BankAccountInfo
          setIsEditingBankAccountInfo={setIsEditingBankAccountInfo}
          PersonalInfo={data?.data?.payment}
        />
      ) : (
        <div className="flex flex-col gap-y-5 rounded-[10px] border p-4">
          <div className="flex justify-between">
            <h1>اطلاعات حساب بانکی</h1>
            <button
              onClick={() => setIsEditingBankAccountInfo(true)}
              className="flex items-center gap-2 text-sm text-customBlue-100 hover:text-customBlue-100/80"
            >
              <Image
                src="/images/edit-2.svg"
                width={16}
                height={16}
                alt="افزودن"
              />
              <span>
                {!!data?.data.email ? "ویرایش اطلاعات " : "افزودن اطلاعات "}
              </span>
            </button>
          </div>
          <div className="grid grid-cols-12 gap-x-4 gap-y-5 child:text-sm child:text-customGray-100/95">
            <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-12 lg:col-span-6">
              <span className="text-customGray-100/80">شماره کارت</span>
              <span
                className={`tracking-wide ${data?.data.payment?.debitCard_code ? "w-fit" : "w-1/2 text-center"}`}
              >
                {data?.data.payment?.debitCard_code
                  ? data.data.payment?.debitCard_code
                  : "---"}
              </span>
            </div>
            <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-12 lg:col-span-6 xl:col-span-5 xl:col-start-8">
              <span className="text-customGray-100/80">شماره شبا</span>
              <span
                className={`tracking-wide ${data?.data.payment?.shaba_code ? "w-fit" : "w-1/2 text-center"}`}
              >
                {data?.data.payment?.shaba_code
                  ? `IR  ${data.data.payment?.shaba_code}`
                  : "---"}
              </span>
            </div>
            <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-12 lg:col-span-6">
              <span className="text-customGray-100/80">شماره حساب</span>
              <span
                className={`tracking-wide ${data?.data.payment?.accountIdentifier ? "w-fit" : "w-1/2 text-center"}`}
              >
                {data?.data.payment?.accountIdentifier
                  ? data.data.payment?.accountIdentifier
                  : "---"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
