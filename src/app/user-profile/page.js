"use client";
import EmailForm from "@/components/profileForms/EmailForm";
import { usePutUserData } from "@/core/services/mutations";
import { useGetUserData } from "@/core/services/queries";
import Image from "next/image";
import { useState } from "react";

function Profile() {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [isEditingBankAccountInfo, setIsEditingBankAccountInfo] =
    useState(false);
  const { data } = useGetUserData();
  console.log(data);
  const { mutate } = usePutUserData();

  return (
    <div className="mb-6 mt-6 flex flex-col gap-y-5 font-VazirRegular md:mt-0">
      <div className="flex flex-col gap-y-5 rounded-[10px] border p-4">
        <h1>اطلاعات حساب کاربری</h1>
        <div className="grid grid-cols-12 gap-y-5 lg:gap-x-8">
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
      <div className="flex flex-col gap-y-5 rounded-[10px] border p-4">
        <div className="flex justify-between">
          <h1>اطلاعات شخصی</h1>
          <button className="flex items-center gap-2 text-sm text-customBlue-100 hover:text-customBlue-100/80">
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
            <span className="text-right xs:w-1/2 sm:w-fit lg:w-1/2">
              {data?.data.fullName ? data.data.fullName : "---"}
            </span>
          </div>
          <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-5">
            <span className="text-customGray-100/80 xs:w-1/3 sm:w-fit lg:w-1/3">
              کد ملی
            </span>
            <span className="text-right tracking-wider xs:w-1/2 sm:w-fit lg:w-1/2">
              {data?.data.nationalCode ? data.data.nationalCode : "---"}
            </span>
          </div>
          <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-7">
            <span className="text-customGray-100/80 xs:w-1/3 sm:w-fit lg:w-1/3">
              جنسیت
            </span>
            <span className="text-right xs:w-1/2 sm:w-fit lg:w-1/2">
              {data?.data.gender ? data.data.gender : "---"}
            </span>
          </div>
          <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-5">
            <span className="text-customGray-100/80 xs:w-1/3 sm:w-fit lg:w-1/3">
              تاریخ تولد
            </span>
            <span className="text-right tracking-wider xs:w-1/2 sm:w-fit lg:w-1/2">
              {data?.data.birthDate ? data.data.birthDate : "---"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 rounded-[10px] border p-4">
        <div className="flex justify-between">
          <h1>اطلاعات حساب بانکی</h1>
          <button className="flex items-center gap-2 text-sm text-customBlue-100 hover:text-customBlue-100/80">
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
            <span className="tracking-wide">
              {data?.data.payment?.debitCard_code
                ? data.data.payment?.debitCard_code
                : "---"}
            </span>
          </div>
          <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-12 lg:col-span-6 xl:col-span-5 xl:col-start-8">
            <span className="text-customGray-100/80">شماره شبا</span>
            <span className="tracking-wide">
              {data?.data.payment?.shaba_code
                ? `IR  ${data.data.payment?.shaba_code}`
                : "---"}
            </span>
          </div>
          <div className="col-span-12 flex justify-between sm:col-span-6 md:col-span-12 lg:col-span-6">
            <span className="text-customGray-100/80">شماره حساب</span>
            <span className="tracking-wide">
              {data?.data.payment?.accountIdentifier
                ? data.data.payment?.accountIdentifier
                : "---"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
