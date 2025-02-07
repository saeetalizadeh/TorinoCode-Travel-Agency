"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import QueryString from "qs";

import { useGetTours } from "@/core/services/queries";
import { DateToIso, flattenObject } from "@/core/utils/helper";
import { useRouter } from "next/navigation";
import useQuery from "@/core/hooks/query";
import Image from "next/image";

function SearchBar() {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const { getQuery } = useQuery();
  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit, control, reset } = useForm();

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) reset({ originId, destinationId });
    console.log({ originId, destinationId });
  }, []);

  const submitHandler = (form) => {
    const { originId, destinationId, date } = form;

    if (form.date === "تاریخ") {
      delete form.date;
    }

    if (form.originId === "مبدا") {
      delete form.originId;
    }

    if (form.destinationId === "مقصد") {
      delete form.destinationId;
    }
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
  };

  return (
    <>
      <div className="container">
        <div className="flex justify-center gap-x-1 font-VazirRegular md:mt-4 md:text-[20px]">
          <span className="text-customGreen-200">تورینو</span>
          <span className="text-customGray-100">
            برگزار کننده بهترین تورهای داخلی و خارجی
          </span>
        </div>
        <form className="p-5" onSubmit={handleSubmit(submitHandler)}>
          <div className="grid grid-cols-12 gap-x-2 gap-y-3 rounded-xl md:divide-x md:divide-x-reverse md:border md:p-2">
            <div className="relative col-span-6 md:col-span-3">
              <div className="absolute right-[20%] top-4 md:top-3">
                <Image
                  src="/images/location.svg"
                  width={18}
                  height={18}
                  alt="مبدا"
                />
              </div>
              <select
                defaultValue="مبدا"
                className="w-full rounded-xl border p-2.5 text-center font-VazirRegular text-customGray-100/60 md:border-none md:p-1.5"
                {...register("originId")}
              >
                <option disabled>مبدا</option>

                <option value="1">تهران</option>
                <option value="2">سنندج</option>
                <option value="7">مازندران</option>
                <option value="4">اصفهان</option>
              </select>
            </div>
            <div className="relative col-span-6 md:col-span-3">
              <div className="absolute right-[15%] top-4 md:top-3">
                <Image
                  src="/images/global-search.svg"
                  width={18}
                  height={18}
                  alt="مقصد"
                />
              </div>
              <select
                defaultValue="مقصد"
                className="w-full rounded-xl border p-2.5 text-center font-VazirRegular text-customGray-100/60 md:border-none md:p-1.5"
                {...register("destinationId")}
              >
                <option disabled>مقصد</option>
                <option value="9">ایتالیا</option>
                <option value="7">مازندران</option>
                <option value="5">سلیمانیه</option>
                <option value="6">هولیر</option>
                <option value="3">مادرید</option>
              </select>
            </div>
            <div className="relative col-span-12 md:col-span-3">
              <div className="absolute right-[35%] top-3 md:right-[20%] md:top-2.5">
                <Image
                  src="/images/calendar.svg"
                  width={18}
                  height={18}
                  alt="تقویم"
                />
              </div>
              <Controller
                control={control}
                name="date"
                render={({ field: { onChange } }) => (
                  <DatePicker
                    inputClass="w-full text-center md:p-1.5 p-2.5 border rounded-xl md:border-none font-VazirRegular placeholder:text-customGray-100/60"
                    inputAttributes={{ placeholder: "تاریخ" }}
                    round="x2"
                    accentColor="#28A745"
                    onChange={(e) =>
                      onChange({
                        startDate: DateToIso(e.from),
                        endDate: DateToIso(e.to),
                      })
                    }
                    range
                  />
                )}
              />
            </div>
            <input
              type="submit"
              value="جستجو"
              className="col-span-12 w-full rounded-xl bg-customGreen-200 p-2.5 text-background md:col-span-3 md:border-none md:p-1.5"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
