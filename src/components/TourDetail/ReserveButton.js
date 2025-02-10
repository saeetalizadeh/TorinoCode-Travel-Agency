import { priceChanger } from "@/core/utils/helper";

function ReserveButton({ dataPrice }) {
  return (
    <>
      <button className="h-[40px] w-[154px] rounded-[10px] bg-customGreen-200 text-xl text-background sm:h-[35px] sm:w-[100px] sm:text-base lg:h-[40px] lg:w-[154px] lg:text-xl">
        رزرو و خرید
      </button>
      <div>
        <span className="text-2xl text-customBlue-100 lg:text-3xl">
          {priceChanger(dataPrice)}
        </span>
        <span className="pr-2 text-[10px] text-customGray-100/50 lg:text-base">
          تومان
        </span>
      </div>
    </>
  );
}

export default ReserveButton;
