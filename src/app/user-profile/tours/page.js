"use client";
import { useGetUserTours } from "@/core/services/queries";
import { fleetVehicles, priceChanger } from "@/core/utils/helper";
import Image from "next/image";

function Tours() {
  const { data } = useGetUserTours();
  console.log(data);
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
  const date = new Date(data?.data.startDate);
  const dateBack = new Date(data?.data.endDate) - date;
  const tourExpired = date - new Date();
  const travelTime = Math.round(dateBack / 24 / 60 / 60 / 1000);
  const endDate = new Date(data?.data.endDate);
  return (
    <div className="flex flex-col gap-y-5 rounded-[10px] md:border md:p-5">
      {data?.data.map((item) => (
        <div key={Math.random()} className="relative rounded-[8px] border p-4">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-4 xs:gap-x-0">
              <span className="absolute left-2 top-2 rounded-full bg-customGreen-100 px-2 py-1 text-[8px] text-customGreen-200 xs:left-5 xs:top-5">
                به اتمام رسیده
              </span>
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
            <div className="border-b-2 pb-2 lg:flex">
              <div className="flex items-center lg:w-1/2 lg:gap-x-5">
                <h3 className="w-1/2 text-sm lg:w-auto lg:text-sm">
                  از {city[item.origin.id]} به {city[item.destination.id]}
                </h3>
                <div className="flex items-center gap-x-2">
                  <span className="mb-2 text-2xl text-customGray-100/70">
                    .
                  </span>
                  <p className="text-xs text-customGray-100/70 lg:text-sm">
                    دوشنبه 15 شهریور 1402
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
                    جمعه 19 شهریور 1402
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="A:justify-between A:divide-x A:divide-x-reverse my-1 mt-4 flex items-center lg:justify-start">
            <div className="A:flex-row A:w-auto A:border-none flex w-1/2 flex-col items-center gap-x-4 border-l lg:pl-5">
              <span className="text-xs text-customGray-100/70 lg:text-sm">
                شماره تور
              </span>
              <span className="text-xs">102095404</span>
            </div>
            <div className="A:flex-row A:w-auto A:gap-x-2 A:px-2 flex w-1/2 flex-col items-center xs:pr-12 sm:pr-24 lg:pr-5">
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
