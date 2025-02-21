"use client";
import { useGetUserTours } from "@/core/services/queries";
import {
  fleetVehicles,
  monthNumToFarsi,
  priceChanger,
} from "@/core/utils/helper";
import Image from "next/image";

function Tours() {
  const { data } = useGetUserTours();
  const city = {
    1: "تهران",
    2: "سنندج",
    3: "مادرید",
    4: "اصفحان",
    5: "سلمانیه",
    6: "هولیر",
    7: "مازندران",
    8: "آفرود سنتر",
    9: "ایتالیا",
  };

  return (
    <div className="flex flex-col gap-y-5 rounded-[10px] md:border md:p-5">
      {data?.data.map((item) => (
        <div key={Math.random()} className="relative rounded-[8px] border p-4">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-4 xs:gap-x-0">
              {new Date(item.startDate) < new Date() &&
                new Date(item.endDate) > new Date() && (
                  <span className="absolute left-4 top-4 rounded-full bg-customGreen-200/20 px-2 py-1 font-VazirRegular text-[10px] text-customGreen-200">
                    در حال برگزاری
                  </span>
                )}
              {new Date(item.endDate) < new Date() && (
                <span className="absolute left-4 top-4 rounded-full bg-customRed-100/20 px-2 py-1 font-VazirRegular text-[10px] text-customRed-100">
                  به اتمام رسیده
                </span>
              )}
              {new Date(item.startDate) > new Date() && (
                <span className="absolute left-4 top-4 rounded-full bg-customYellow-100/20 px-2 py-1 font-VazirRegular text-[10px] text-customYellow-100">
                  در پیش رو
                </span>
              )}
              <div className="flex items-center gap-x-2 xs:w-1/2">
                <Image
                  src="/images/sun-fog.svg"
                  width={18}
                  height={18}
                  alt="عکس نور افتاب"
                />
                <p className="text-xs lg:text-sm">{item.title}</p>
              </div>
              <div className="flex items-center gap-x-2 text-xs">
                <Image
                  src={fleetVehicles[item.fleetVehicle].iconSrc}
                  width={18}
                  height={18}
                  alt="سفر با وسیله نقلیه"
                />
                <p className="text-xs lg:text-sm">
                  سفر با {fleetVehicles[item.fleetVehicle].name}
                </p>
              </div>
            </div>
            <div className="border-b pb-2 lg:flex">
              <div className="flex items-center lg:w-1/2 lg:gap-x-5">
                <h3 className="w-1/2 text-sm lg:w-auto lg:text-sm">
                  از {city[item.origin.id]} به {city[item.destination.id]}
                </h3>
                <div className="flex items-center gap-x-2">
                  <span className="mb-2 text-2xl text-customGray-100/70">
                    .
                  </span>
                  <p className="text-xs text-customGray-100/70 lg:text-sm">
                    {monthNumToFarsi(new Date(item.startDate))}
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:w-1/2 lg:gap-x-5">
                <h3 className="w-1/2 text-sm lg:w-auto lg:text-sm">
                  تاریخ برگشت
                </h3>
                <div className="flex items-center gap-x-2">
                  <span className="mb-2 text-2xl text-customGray-100/70">
                    .
                  </span>
                  <p className="text-xs text-customGray-100/70 lg:text-sm">
                    {monthNumToFarsi(new Date(item.endDate))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-1 mt-4 flex items-center A:justify-between A:divide-x A:divide-x-reverse lg:justify-start">
            <div className="flex w-1/2 flex-col items-center gap-x-4 border-l A:w-auto A:flex-row A:border-none lg:pl-5">
              <span className="text-xs text-customGray-100/70 lg:text-sm">
                شماره تور
              </span>
              <span className="text-xs">102095404</span>
            </div>
            <div className="flex w-1/2 flex-col items-center A:w-auto A:flex-row A:gap-x-2 A:px-2 xs:pr-12 sm:pr-24 lg:pr-5">
              <span className="text-xs text-customGray-100/70 lg:text-sm">
                مبلغ پرداخت شده
              </span>
              <div className="flex items-end gap-1">
                <span className="text-xs lg:text-sm">
                  {priceChanger(item.price)}
                </span>
                <span className="text-[8px] text-customGray-100/70 lg:text-xs">
                  تومان
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tours;
