import { detailsFormater } from "@/core/utils/helper";
import Image from "next/image";

function Options({ data }) {
  const { fleetVehicle, dateBackTofa, monthtofa, origin, priceChanger } =
    detailsFormater(data);

  return (
    <div className="scrollbar-webkit flex divide-x divide-x-reverse overflow-y-hidden py-4 md:w-full lg:justify-between">
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lg:px-8">
        <div className="mx-auto flex w-[80px] items-center gap-x-2 text-customGray-100/90">
          <Image
            src="/images/routing-2.svg"
            width={20}
            height={20}
            alt="مبدا"
          />
          <span>مبدا</span>
        </div>
        <span className="text-sm">{origin}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lg:px-8">
        <div className="mx-auto flex w-[100px] items-center gap-x-2 text-customGray-100/90">
          <Image
            src="/images/calendar (1).svg"
            width={20}
            height={20}
            alt="تاریخ رفت"
          />
          <span>تاریخ رفت</span>
        </div>
        <span className="text-sm">{monthtofa}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lg:px-8">
        <div className="mx-auto flex w-[110px] items-center gap-x-2 text-customGray-100/90">
          <Image
            src="/images/calendar (1).svg"
            width={20}
            height={20}
            alt="تاریخ برگشت"
          />
          <span>تاریخ برگشت</span>
        </div>
        <span className="text-sm">{dateBackTofa}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lg:px-8">
        <div className="mx-auto flex w-[110px] items-center gap-x-2 text-customGray-100/90">
          <Image src="/images/bus.svg" width={16} height={16} alt="حمل و نقل" />
          <span>حمل و نقل</span>
        </div>
        <span className="text-sm">{fleetVehicle}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lg:px-8">
        <div className="mx-auto flex w-[80px] items-center gap-x-2 text-customGray-100/90">
          <Image
            src="/images/profile-2user.svg"
            width={16}
            height={16}
            alt="ظرفیت"
          />
          <span className="w-full">ظرفیت</span>
        </div>
        <span className="text-sm">حداکثر {data.availableSeats} نفر</span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lg:px-8">
        <div className="mx-auto flex w-[80px] items-center gap-x-2 text-customGray-100/90">
          <Image src="/images/security.svg" width={16} height={16} alt="  " />
          <span>بیمه</span>
        </div>
        <span className="text-sm text-customGray-100/95">
          {data.insurance ? "دارای بیمه مسافر" : "فاقد بیمه"}
        </span>
      </div>
    </div>
  );
}

export default Options;
