import { serverFetch } from "@/core/services/http";
import { detailsFormater } from "@/core/utils/helper";
import Image from "next/image";
import Link from "next/link";

async function Cards({ query }) {
  const data = await serverFetch(`tour`, query, "no-store");
  if (data.length < 1) {
    return (
      <div className="col-span-12 mx-auto text-[20px] text-customRed-100/70 md:text-[30px]">
        <h1>توری با این مشخصات یافت نشد!</h1>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="col-span-12 mx-auto text-[20px] text-customRed-100/70 md:text-[30px]">
        <h1>خطایی رخ داد !</h1>
      </div>
    );
  }

  return (
    <>
      {data.map((tour) => (
        <Card key={tour.id} tour={tour} />
      ))}
    </>
  );
}

export default Cards;

export function Card({ tour }) {
  const {
    tourExpired,
    month,
    travelTime,
    fleetVehicle,
    tourOptions,
    priceChanger,
  } = detailsFormater(tour);

  return (
    <div
      key={tour.id}
      className="col-span-12 flex flex-col xs:col-span-6 md:col-span-4 xl:col-span-3"
    >
      <div className="relative h-[159px] w-full">
        <Image src={tour.image} fill={true} alt="تور" />
      </div>
      <div className="rounded-b-[10px] border p-2">
        <div className="flex flex-col gap-y-[6px] py-2">
          <span>{tour.title}</span>
          <div>
            <span className="line-clamp-1 font-VazirRegular text-[15px] text-customGray-100/70">
              {tourExpired < 0 ? (
                <span className="text-customRed-100">تور منقضی شده است</span>
              ) : (
                <>
                  <span>{month} ماه , </span>
                  <span>{travelTime} روزه , </span>
                  <span>{fleetVehicle} , </span>
                  <span>{tourOptions} </span>
                </>
              )}
            </span>
          </div>
        </div>
        <div className="flex justify-between border-t pt-[6px]">
          <Link href={`/tour-detail/${tour.id}`}>
            <button className="h-[29px] w-[99px] rounded-[4px] bg-customGreen-200 text-background">
              رزرو
            </button>
          </Link>
          <div className="flex gap-x-1">
            <span className="font-VazirRegular text-[16px] text-customBlue-100">
              {priceChanger(tour.price)}
            </span>
            <span className="font-VazirRegular text-customGray-100/70">
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
