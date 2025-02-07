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
  console.log(tour);

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
  const priceChanger = (number) => {
    let Price = new Intl.NumberFormat();
    return Price.format(number);
  };

  return {
    tourExpired,
    dateBack,
    month: month[monthNomToFa[1]],
    travelTime: travelTime,
    fleetVehicle: fleetVehicle[tour.fleetVehicle],
    tourOptions: tour.options[1],
    priceChanger: priceChanger,
  };
}
export { flattenObject, DateToIso };
