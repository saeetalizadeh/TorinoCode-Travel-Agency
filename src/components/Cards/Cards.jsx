import { serverFetch } from "@/core/services/http";
import Image from "next/image";

async function Cards({ query }) {
  const data = await serverFetch(`tour`, query, "no-store");
  if (!data) {
    return (
      <div className="col-span-12 mx-auto text-[30px] text-customRed-100/70">
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
  const date = new Date(tour.startDate);
  const dateBack = new Date(tour.endDate) - date;
  const tourExpired = date - new Date();
  const travelTime = Math.round(dateBack / 24 / 60 / 60 / 1000);

  const fleetVehicle = {
    Bus: "اتوبوس",
    Van: "ون",
    SUV: "SUV",
    Airplane: "هواپیما",
  };

  const monthNomToFa = new Intl.DateTimeFormat("fa").format(date).split("/");

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

  const result = [
    month[monthNomToFa[1]],
    travelTime,
    fleetVehicle[tour.fleetVehicle],
    tour.options[1],
  ];

  const priceChanger = (number) => {
    let Price = new Intl.NumberFormat();
    return Price.format(number);
  };

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
                  <span>{result[0]} ماه , </span>
                  <span>{result[1]} روزه , </span>
                  <span>{result[2]} , </span>
                  <span>{result[3]} </span>
                </>
              )}
            </span>
          </div>
        </div>
        <div className="flex justify-between border-t pt-[6px]">
          <button className="h-[29px] w-[99px] rounded-[4px] bg-customGreen-200 text-background">
            رزرو
          </button>
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
