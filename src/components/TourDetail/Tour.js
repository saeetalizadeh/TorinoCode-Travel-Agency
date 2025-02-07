"use client";

import { detailsFormater } from "@/core/utils/helper";
import Image from "next/image";

function Tour({ data }) {
  const {
    tourExpired,
    dateBack,
    month,
    travelTime,
    fleetVehicle,
    tourOptions,
    priceChanger,
  } = detailsFormater(data);

  return (
    <div>
      <Image src={data.image} width={330} height={220} alt="عکس تور" />
      <div>
        <span>{data.title}</span>
        <span>{data.options}</span>
      </div>
      <div>
        <div>
          <Image
            src="/images/user-tick.svg"
            width={14}
            height={14}
            alt="تورلیدر"
          />
          <span>تورلیدر از مبدا</span>
        </div>
        <div>
          <Image
            src="/images/map.svg"
            width={14}
            height={14}
            alt="برنامه سفر"
          />
          <span>برنامه سفر</span>
        </div>
        <div>
          <Image
            src="/images/medal-star.svg"
            width={14}
            height={14}
            alt="تضمین کیفیت"
          />
          <span>تضمین کیفیت</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            <Image
              src="/images/routing-2.svg"
              width={20}
              height={20}
              alt="مبدا"
            />
            <span>مبدا</span>
          </div>
          <span>{data.origin.name}</span>
        </div>
        <div>
          <div>
            <Image
              src="/images/calendar (1).svg"
              width={20}
              height={20}
              alt="تاریخ رفت"
            />
            <span>تاریخ رفت</span>
          </div>
          <span>{month}</span>
        </div>
        <div>
          <div>
            <Image
              src="/images/calendar (1).svg"
              width={20}
              height={20}
              alt="تاریخ برگشت"
            />
            <span>تاریخ برگشت</span>
          </div>
          <span>{dateBack}</span>
        </div>

        <div>
          <div>
            <Image
              src="/images/bus.svg"
              width={16}
              height={16}
              alt="حمل و نقل"
            />
            <span>حمل و نقل</span>
          </div>
          <span>{fleetVehicle}</span>
        </div>
        <div>
          <div>
            <Image
              src="/images/profile-2user.svg"
              width={16}
              height={16}
              alt="ظرفیت"
            />
            <span>ظرفیت</span>
          </div>
          <span>{data.availableSeats}</span>
        </div>
        <div>
          <div>
            <Image src="/images/security.svg" width={16} height={16} alt="  " />
            <span>بیمه</span>
          </div>
          <span>{data.insurance ? "دارای بیمه مسافر" : "فاقد بیمه"}</span>
        </div>
      </div>
      <div>
        <button>رزرو و خرید</button>
        <div>
          <span>{data.price}</span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
}

export default Tour;
