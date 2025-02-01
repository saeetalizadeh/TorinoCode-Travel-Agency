import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page-h container flex w-full flex-col-reverse justify-between md:flex-row lg:gap-x-[2vw]">
      <div className="flex h-full md:w-1/2 flex-col items-center justify-start md:justify-center gap-y-5 md:gap-y-14 lg:gap-y-20 font-semibold">
        <span className="text-myGray-410 lg:text-4xl text-2xl">
          صفحه مورد نظر یافت نشد!
        </span>
        <Link
          className="rounded-2xl bg-customGreen-100 lg:px-[45px] px-[19px] lg:py-4 py-[13px] lg:text-[28px] text-xl lg:leading-[43px] text-customGreen-200"
          href={"/"}
        >
          <p>بازگشت به صفحه اصلی</p>
        </Link>
      </div>
      <div className="relative h-full w-full md:w-1/2">
        <Image fill={true} src={"/images/Error TV.svg"} alt="Page not found!" />
      </div>
    </div>
  );
}
