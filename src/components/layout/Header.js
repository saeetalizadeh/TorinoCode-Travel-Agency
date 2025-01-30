"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalContainer from "../partials/container/ModalContainer";

function Header() {
  const [active, setActive] = useState(false);
  return (
    <div className="grid grid-cols-4 container justify-between h-[74px]">
      {active && (
        <div
          className="absolute right-0 top-0 z-50 w-full h-full bg-black/30 md:hidden"
          onClick={(e) => {
            if (e.target.tagName === "DIV") {
              setActive(false);
            }
          }}
        >
          <NavBar />
        </div>
      )}
      <div
        className="col-span-4 md:hidden flex h-full items-center "
        onClick={() => setActive(true)}
      >
        <Image
          src="/images/hmbgr.svg"
          alt="لوگو تورینو"
          width={20}
          height={16}
        />
      </div>

      <div className="col-span-4 hidden md:flex xl:gap-[84px] gap-[40px] items-center">
        <div>
          <Image
            src="/images/TorinoLogo.svg"
            alt="لوگو تورینو"
            width={146}
            height={44}
          />
        </div>
        <div className="w-full">
          <NavBar />
        </div>
      </div>
      <div className="col-span-1 col-end-6 h-full flex items-center">
        <button className=" border border-customGreen-200 rounded-lg xl:px-4 xl:py-2 px-2 py-1 ">
          <div className="md:flex gap-2 hidden">
            <div className="relative w-5 h-5 xl:w-6 xl:h-6">
              <Image src="/images/Adamak.svg" fill={true} alt="آدمک" />
            </div>
            <span className="text-customGreen-200 xl:text-[18px] border-l pl-2 border-customGreen-200 text-sm">
              ورود
            </span>
            <span className="text-customGreen-200 xl:text-[18px] text-sm">
              ثبت نام
            </span>
          </div>
          <div className="md:hidden">
            <Image src="/images/login.svg" width={24} height={24} alt="آدمک" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;

function NavBar() {
  return (
    <ul className="flex-col w-[209px] h-full rounded-l-xl gap-y-[22px] pt-8 md:pt-0 bg-background flex md:flex-row justify-start md:w-full child-hover:text-customGreen-200 child:text-customGray-100 text-sm xl:text-[16px] xl:gap-x-12 gap-x-7 pr-3 md:pr-0  ">
      <li>
        <Link href="/" className="flex gap-x-2">
          <span className="md:hidden">
            <Image src="/images/home-2.svg" width={16} height={16} alt="خانه" />
          </span>
          <span>صفحه اصلی</span>
        </Link>
      </li>
      <li>
        <Link href="/" className="flex gap-x-2">
          <span className="md:hidden">
            <Image
              src="/images/airplane-square.svg"
              width={16}
              height={16}
              alt="خانه"
            />
          </span>
          <span>خدمات گردشگری</span>
        </Link>
      </li>
      <li>
        <Link href="/" className="flex gap-x-2">
          <span className="md:hidden">
            <Image
              src="/images/volume-low.svg"
              width={16}
              height={16}
              alt="خانه"
            />
          </span>
          <span>درباره ما</span>
        </Link>
      </li>
      <li>
        <Link href="/" className="flex gap-x-2">
          <span className="md:hidden">
            <Image
              src="/images/call (1).svg"
              width={16}
              height={16}
              alt="خانه"
            />
          </span>
          <span>تماس با ما</span>
        </Link>
      </li>
    </ul>
  );
}
