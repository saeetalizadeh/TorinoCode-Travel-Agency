"use client";

import { detailsFormater } from "@/core/utils/helper";
import Image from "next/image";
import Options from "./Options";
import ReserveButton from "./ReserveButton";

function Tour({ data }) {
  const { travelTime } = detailsFormater(data);

  return (
    <div className="container">
      <div className="rounded-[10px] bg-background px-4 font-VazirRegular sm:border">
        <div className="flex flex-col sm:flex-row">
          <div className="relative mt-6 h-[200px] w-full max-w-[423px]">
            <Image
              className="rounded-xl"
              src={data.image}
              fill={true}
              alt="عکس تور"
            />
          </div>
          <div className="w-full p-4 sm:mt-6 sm:flex sm:flex-col sm:justify-between">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold"> {data.title}</span>
              <span className="text-[15px] text-customGray-100/90">
                {travelTime} روز و {travelTime - 1} شب
              </span>
            </div>
            <div className="relative mt-3 flex justify-between text-xs text-customGray-100/50 xs:gap-3 sm:flex-col lg:flex-row lg:justify-start lg:gap-4 lg:text-base">
              <div className="flex gap-x-2">
                <Image
                  src="/images/user-tick.svg"
                  width={14}
                  height={14}
                  alt="تورلیدر"
                />
                <span>تورلیدر از مبدا</span>
              </div>
              <div className="flex gap-x-2">
                <Image
                  src="/images/map.svg"
                  width={14}
                  height={14}
                  alt="برنامه سفر"
                />
                <span>برنامه سفر</span>
              </div>
              <div className="flex gap-x-2">
                <Image
                  src="/images/medal-star.svg"
                  width={14}
                  height={14}
                  alt="تضمین کیفیت"
                />
                <span>تضمین کیفیت</span>
              </div>
            </div>
            <div className="my-8 hidden w-full justify-between sm:my-0 sm:flex sm:flex-row-reverse">
              <ReserveButton dataPrice={data.price} />
            </div>
          </div>
        </div>
        <div className="px-4">
          <Options data={data} />
        </div>
        <div className="mb-14 mt-8 flex items-center justify-between sm:hidden">
          <ReserveButton dataPrice={data.price} />
        </div>
      </div>
    </div>
  );
}

export default Tour;
