"use client";

import Image from "next/image";

export default function Error() {
  return (
    <div className="not-found-page-h container  flex w-full flex-col-reverse justify-between md:flex-row lg:gap-x-[2vw]">
      <div className="flex h-full flex-col items-center justify-start gap-y-5  font-semibold md:w-1/2 md:items-start md:justify-center">
        <span className="w-fit text-2xl text-myGray-410 lg:text-4xl">
          اتصال با سرور برقرار نیست!
        </span>
        <span
          className="w-fit rounded-2xl text-[16px] text-myGray-410 lg:text-[24px] lg:leading-[43px]"
          href={"/"}
        >
          لطفا بعدا دوباره امتحان کنید.
        </span>
      </div>
      <div className="relative h-full w-full md:w-1/2">
        <Image
          fill={true}
          src="/images/Error Lamp Robot.svg"
          alt="Page not found!"
        />
      </div>
    </div>
  );
}
