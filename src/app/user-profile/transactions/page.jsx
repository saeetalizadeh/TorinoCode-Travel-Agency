"use client";
import { useGetUserTransactions } from "@/core/services/queries";
import { detailsFormater, priceChanger } from "@/core/utils/helper";

function Transactions() {
  const { data } = useGetUserTransactions();
  console.log(data);
  const timeFormatter = (time) => {
    const formatter = new Intl.DateTimeFormat("fa-IR", {
      timeZone: "Asia/Tehran",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const iranDate = formatter.format(new Date(time));
    return iranDate.split(",").join(" - ");
  };
  return (
    <div className="mb-5 flex flex-col rounded-xl border">
      <div className="grid h-10 grid-cols-12 justify-items-center rounded-t-[10px] bg-[#DBDBDB] md:mt-0">
        <span className="col-span-4 p-2 text-xs text-customGray-100 md:col-span-3 md:text-base">
          تاریخ و ساعت
        </span>
        <span className="col-span-4 p-2 text-xs text-customGray-100 md:col-span-3 md:text-base">
          مبلغ(تومان)
        </span>
        <span className="col-span-4 hidden p-2 text-xs text-customGray-100 md:col-span-3 md:inline-block md:text-base">
          نوع تراکنش
        </span>
        <span className="col-span-4 p-2 text-xs text-customGray-100 md:col-span-3 md:text-base">
          شماره سفارش
        </span>
      </div>
      {data?.data.map((item) => (
        <div key={item.id}>
          <div className="grid grid-cols-12 justify-items-center p-2">
            <span className="ltr col-span-4 text-[9px] text-customGray-100 md:col-span-3 md:text-sm">
              {timeFormatter(item.createdAt)}
            </span>
            <span className="col-span-4 text-[13px] md:col-span-3 md:text-sm">
              {priceChanger(item.amount)}
            </span>
            <span className="col-span-4 hidden text-customGray-100 md:col-span-3 md:inline-block md:text-sm">
              ثبت نام در تور گردشگری
            </span>
            <span className="col-span-3 text-[13px] md:text-base">
              12054902
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Transactions;
