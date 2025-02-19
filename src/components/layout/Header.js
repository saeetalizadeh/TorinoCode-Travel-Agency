"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthForm from "../authForm";
import { usePathname } from "next/navigation";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container grid h-[74px] grid-cols-4 justify-between">
        {active && (
          <div
            className="absolute right-0 top-0 z-50 h-full w-full bg-black/30 md:hidden"
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
          className="col-span-4 flex h-full items-center md:hidden"
          onClick={() => setActive(true)}
        >
          <Image
            src="/images/hmbgr.svg"
            alt="لوگو تورینو"
            width={20}
            height={16}
          />
        </div>

        <div className="col-span-4 hidden items-center gap-[40px] md:flex xl:gap-[84px]">
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
        <div className="col-span-1 col-end-6 flex h-full items-center">
          <AuthForm />
        </div>
      </div>
    </header>
  );
}

export default Header;

function NavBar() {
  const url = usePathname();
  console.log(url);

  return (
    <ul className="flex h-full w-[209px] flex-col justify-start gap-x-7 gap-y-[22px] rounded-l-xl bg-background pr-3 pt-8 text-sm child:text-customGray-100 child-hover:text-customGreen-200 md:w-full md:flex-row md:pr-0 md:pt-0 xl:gap-x-12 xl:text-[16px]">
      <li>
        <Link
          href="/"
          className={`flex gap-x-2 ${url === "/" ? "text-customGreen-200 hover:text-customGreen-200/80" : "text-customGray-100 hover:text-customGray-100/80"}`}
        >
          <span className="md:hidden">
            <Image src="/images/home-2.svg" width={16} height={16} alt="خانه" />
          </span>
          <span>صفحه اصلی</span>
        </Link>
      </li>
      <li>
        <Link
          href="/tour-services"
          className={`flex gap-x-2 ${url === "/tour-services" ? "text-customGreen-200 hover:text-customGreen-200/80" : "text-customGray-100 hover:text-customGray-100/80"}`}
        >
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
        <Link
          href="/about-us"
          className={`flex gap-x-2 ${url === "/about-us" ? "text-customGreen-200 hover:text-customGreen-200/80" : "text-customGray-100 hover:text-customGray-100/80"}`}
        >
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
        <Link
          href="/contact-us"
          className={`flex gap-x-2 ${url === "/contact-us" ? "text-customGreen-200 hover:text-customGreen-200/80" : "text-customGray-100 hover:text-customGray-100/80"}`}
        >
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
