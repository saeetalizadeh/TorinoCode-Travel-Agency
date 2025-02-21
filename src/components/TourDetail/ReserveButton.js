"use client";
import { usePutTourBasket } from "@/core/services/mutations";
import { priceChanger } from "@/core/utils/helper";
import toast from "react-hot-toast";
import { useAuthInfo } from "../partials/provider/AuthProvider";
import { useRouter } from "next/navigation";

function ReserveButton({ dataPrice, id, tourExpired, availableSeats }) {
  const router = useRouter();
  const { isLogin, setIsOpen } = useAuthInfo();

  const { mutate } = usePutTourBasket();
  const reservationHandler = () => {
    if (!isLogin) {
      toast.error("لطفا ابتدا وارد حساب کاربری خود شوید!");
      setIsOpen(true);
      return;
    } else if (tourExpired < 0) {
      toast.error("تور منقضی شده است!");
      return;
    } else if (availableSeats == 0) {
      toast.error("ظرفیت تور به اتمام رسیده است!");
      return;
    }
    try {
      mutate(
        { id },
        { onSuccess: () => toast.success("تور با موفقیت رزور شد!") },
      );
    } catch (error) {
      toast.error("مشکلی پیش امده است \n لطفا دقایقی دیگر امتحان کنید!");
    }
    router.push("/checkout");
  };
  return (
    <>
      <button
        onClick={reservationHandler}
        className="h-[40px] w-[154px] rounded-[10px] bg-customGreen-200 text-xl text-background sm:h-[35px] sm:w-[100px] sm:text-base lg:h-[40px] lg:w-[154px] lg:text-xl"
      >
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
