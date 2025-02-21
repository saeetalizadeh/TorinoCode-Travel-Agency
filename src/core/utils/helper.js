const flattenObject = (obj, delimiter = ".", prefix = "") => {
  const flattObject = Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    )
      Object.assign(acc, flattenObject(obj[k], delimiter, k));
    else acc[k] = obj[k];
    return acc;
  }, {});

  return flattObject;
};

const DateToIso = (date) => new Date(date).toISOString();

export function detailsFormater(tour) {
  const date = new Date(tour.startDate);
  const dateBack = new Date(tour.endDate) - date;
  const tourExpired = date - new Date();
  const travelTime = Math.round(dateBack / 24 / 60 / 60 / 1000);
  const endDate = new Date(tour.endDate);

  const fleetVehicle = {
    Bus: "اتوبوس",
    Van: "ون",
    SUV: "SUV",
    Airplane: "هواپیما",
  };
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
  const priceChanger = (number) => {
    let Price = new Intl.NumberFormat();
    return Price.format(number);
  };
  function monthNumToFa(date) {
    const newDate = new Intl.DateTimeFormat("fa").format(date).split("/");

    return [`${newDate[2]} ${month[newDate[1]]} ${newDate[0]}`];
  }

  return {
    tourExpired,
    dateBack,
    month: month[monthNumToFa[1]],
    monthtofa: monthNumToFa(date),
    dateBackTofa: monthNumToFa(endDate),
    travelTime: travelTime,
    fleetVehicle: fleetVehicle[tour.fleetVehicle],
    tourOptions: tour.options[1],
    priceChanger: priceChanger,
    origin: city[tour.origin.id],
  };
}
export const fleetVehicles = {
  Bus: { name: "اتوبوس", iconSrc: "/images/bus.svg" },
  Van: { name: "ون", iconSrc: "/images/van-passenger.svg" },
  SUV: { name: "SUV", iconSrc: "/images/car-suv-vehicle.svg" },
  Airplane: { name: "هواپیما", iconSrc: "/images/airplane.svg" },
  Ship: { name: "کشتی", iconSrc: "/images/ship.svg" },
};
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
export function monthNumToFarsi(date = "2022-10-02") {
  const newDate = new Intl.DateTimeFormat("fa").format(date).split("/");
  const weekDays = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];
  const day = date.getDay();

  return [`${newDate[2]} ${month[newDate[1]]} ${newDate[0]}, ${weekDays[day]}`];
}
export const priceChanger = (number) => {
  let Price = new Intl.NumberFormat();
  return Price.format(number);
};

export { flattenObject, DateToIso };
