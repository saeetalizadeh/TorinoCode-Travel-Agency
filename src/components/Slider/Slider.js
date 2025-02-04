"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./style.css";

// import required modules
import { EffectCards, Navigation, Pagination, Scrollbar } from "swiper/modules";
const images = [
  { id: 1, src: "/images/R (1) (1).png" },
  { id: 2, src: "/images/OIP (8) (1).png" },
  { id: 3, src: "/images/car-4260033_1280 (1).png" },
  { id: 4, src: "/images/image_SI3sJmh4_1727080822376_raw (1).png" },
];
export default function Slider() {
  return (
    <div className="container">
      <div className="mdA:flex-row mdA:items-center mdA:gap-x-5 flex h-fit w-full flex-col xl:gap-x-40">
        <div className="pb-16">
          <div className="mb-6 flex gap-x-2">
            <div className="relative">
              <img
                src="/images/Group 7.svg"
                alt="QuestionMark"
                width={59}
                height={68}
              />
              <span className="absolute right-5 top-2 text-[38px] font-bold text-background">
                ؟
              </span>
            </div>
            <div className="flex gap-x-3 child:text-[40px] child:font-extrabold">
              <span>چرا</span>
              <span className="text-customGreen-200">تورینو</span>
              <span>؟</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="mb-4 font-Vazir text-[24px] font-semibold xl:text-[36px]">
              تور طبیعت گردی و تاریخی
            </h3>
            <p className="text-justify font-VazirRegular text-[15px] leading-7 xl:text-[20px] xl:leading-10">
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
        </div>

        <Swiper
          effect={"cards"}
          //   cubeEffect={{
          //     slideShadows: false,
          //     shadow: false,
          //   }}
          navigation
          pagination={{ clickable: true }}
          modules={[EffectCards, Pagination, Navigation, Scrollbar]}
          className="mySwiper"
        >
          {images.map((item) => (
            <SwiperSlide className="moz" key={item.id}>
              <img src={item.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
