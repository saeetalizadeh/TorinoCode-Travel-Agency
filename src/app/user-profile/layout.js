"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ProfileLayout(props) {
  const path = usePathname();

  return (
    <div className="container">
      <div className="mt-5 max-h-fit gap-5 md:grid md:grid-cols-12">
        <div className="flex max-h-fit justify-around border-b md:col-span-3 md:flex-col md:rounded-[10px] md:border">
          <Link
            href="/user-profile"
            className={`flex w-1/3 items-center justify-center gap-x-2 rounded-t-[10px] pb-2 text-xs md:w-full md:justify-start md:p-2 ${path === "/user-profile" ? "border-b border-customGreen-200 text-customGreen-200 md:border-b-0 md:bg-customGreen-100" : ""}`}
          >
            <div className="relative mt-0.5 h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 24 24"
                fill="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                  fill="currentColor"
                />
                <path
                  d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1>پروفایل</h1>
          </Link>
          <Link
            href="/user-profile/tours"
            className={`flex w-1/3 items-center justify-center gap-x-2 pb-2 text-xs md:w-full md:justify-start md:border-b md:border-t md:p-2 ${path === "/user-profile/transactions" && "border-b-customGreen-200 md:border-b"} ${path === "/user-profile" && "border-t-customGreen-200"} ${path === "/user-profile/tours" && "border-b border-customGreen-200 text-customGreen-200 md:bg-customGreen-100"}`}
          >
            <div className="relative mt-0.5 h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3201 8.66667C12.5067 8.66667 12.6667 8.50667 12.6534 8.32C12.4734 5.9 10.4601 4 8.00006 4C5.54006 4 3.52673 5.9 3.34673 8.32C3.33339 8.50667 3.49339 8.66667 3.68006 8.66667H12.3201Z"
                  fill="currentColor"
                />
                <path
                  d="M14.6667 9.16663H14.6134C14.2467 9.16663 13.9467 8.86663 13.9467 8.49996C13.9467 8.13329 14.2467 7.83329 14.6134 7.83329C14.9801 7.83329 15.3067 8.13329 15.3067 8.49996C15.3067 8.86663 15.0334 9.16663 14.6667 9.16663ZM1.38675 9.16663H1.33341C0.966748 9.16663 0.666748 8.86663 0.666748 8.49996C0.666748 8.13329 0.966748 7.83329 1.33341 7.83329C1.70008 7.83329 2.02675 8.13329 2.02675 8.49996C2.02675 8.86663 1.75341 9.16663 1.38675 9.16663ZM12.6734 4.49329C12.5001 4.49329 12.3334 4.42663 12.2001 4.29996C11.9401 4.03996 11.9401 3.61996 12.2001 3.35996L12.2867 3.27329C12.5467 3.01329 12.9667 3.01329 13.2267 3.27329C13.4867 3.53329 13.4867 3.95329 13.2267 4.21329L13.1401 4.29996C13.0134 4.42663 12.8467 4.49329 12.6734 4.49329ZM3.32675 4.49329C3.15341 4.49329 2.98675 4.42663 2.85342 4.29996L2.76675 4.20663C2.50675 3.94663 2.50675 3.52663 2.76675 3.26663C3.02675 3.00663 3.44675 3.00663 3.70675 3.26663L3.79341 3.35329C4.05341 3.61329 4.05341 4.03329 3.79341 4.29329C3.66675 4.42663 3.49341 4.49329 3.32675 4.49329ZM8.00008 2.52663C7.63341 2.52663 7.33342 2.25329 7.33342 1.88663V1.83329C7.33342 1.46663 7.63341 1.16663 8.00008 1.16663C8.36675 1.16663 8.66675 1.46663 8.66675 1.83329C8.66675 2.19996 8.36675 2.52663 8.00008 2.52663Z"
                  fill="currentColor"
                />
                <path
                  d="M13.3334 11H2.66675C2.39341 11 2.16675 10.7733 2.16675 10.5C2.16675 10.2267 2.39341 10 2.66675 10H13.3334C13.6067 10 13.8334 10.2267 13.8334 10.5C13.8334 10.7733 13.6067 11 13.3334 11Z"
                  fill="currentColor"
                />
                <path
                  d="M12 13H4C3.72667 13 3.5 12.7733 3.5 12.5C3.5 12.2267 3.72667 12 4 12H12C12.2733 12 12.5 12.2267 12.5 12.5C12.5 12.7733 12.2733 13 12 13Z"
                  fill="currentColor"
                />
                <path
                  d="M10 15H6C5.72667 15 5.5 14.7733 5.5 14.5C5.5 14.2267 5.72667 14 6 14H10C10.2733 14 10.5 14.2267 10.5 14.5C10.5 14.7733 10.2733 15 10 15Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1>تور های من</h1>
          </Link>
          <Link
            href="/user-profile/transactions"
            className={`flex w-1/3 items-center justify-center gap-x-2 pb-2 text-xs md:w-full md:justify-start md:rounded-b-[10px] md:p-2 ${path === "/user-profile/transactions" && "border-b border-customGreen-200 text-customGreen-200 md:border-b-0 md:bg-customGreen-100"}`}
          >
            <div className="relative mt-0.5 h-4 w-4 md:h-5 md:w-5">
              <svg
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 10.5C14.6667 13.08 12.58 15.1667 10 15.1667L10.7 14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33325 6.50004C1.33325 3.92004 3.41992 1.83337 5.99992 1.83337L5.29992 3.00004"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.0195 2.48159C14.0773 2.539 14.1573 2.69159 14.1659 3.20671H8.50076C8.50936 2.69159 8.58937 2.539 8.64722 2.48159C8.70979 2.41949 8.88214 2.33337 9.48 2.33337H13.1867C13.7845 2.33337 13.9569 2.41949 14.0195 2.48159Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M8.5 5.37329V4.87329H14.1667V5.37329V6.03329C14.1667 6.62372 14.0806 6.791 14.0195 6.85174C13.9569 6.91384 13.7845 6.99996 13.1867 6.99996H9.48C8.88214 6.99996 8.70979 6.91384 8.64722 6.85174C8.58602 6.791 8.5 6.62372 8.5 6.03329V5.37329Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M7.3527 10.1482C7.41054 10.2056 7.49056 10.3582 7.49916 10.8733H1.83401C1.84261 10.3582 1.92263 10.2056 1.98047 10.1482C2.04304 10.0861 2.2154 10 2.81325 10H6.51992C7.11777 10 7.29013 10.0861 7.3527 10.1482Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M1.66659 12.04C1.47992 12.04 1.33325 12.1867 1.33325 12.3734V13.04V13.7C1.33325 14.8734 1.62659 15.1667 2.81325 15.1667H6.51992C7.70658 15.1667 7.99992 14.8734 7.99992 13.7V13.04V12.3734C7.99992 12.1867 7.85325 12.04 7.66658 12.04H1.66659Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1>تراکنش ها</h1>
          </Link>
        </div>
        <div className="md:col-span-9 md:mt-0">{props.children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
