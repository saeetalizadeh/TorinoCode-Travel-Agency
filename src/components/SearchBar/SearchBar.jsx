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
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
  };

  return (
    <>
      <div className="container">
        <div className="flex justify-center gap-x-1 font-VazirRegular">
          <span className="text-customGreen-200">تورینو</span>
          <span className="text-customGray-100">
            برگزار کننده بهترین تورهای داخلی و خارجی
          </span>
        </div>
        <form className="p-5" onSubmit={handleSubmit(submitHandler)}>
          <div className="grid grid-cols-12 gap-x-2 gap-y-3">
            <div className="relative col-span-6">
              <div className="absolute right-[20%] top-4">
                <Image
                  src="/images/location.svg"
                  width={18}
                  height={18}
                  alt="مبدا"
                />
              </div>
              <select
                className="w-full rounded-xl border p-2.5 text-center font-VazirRegular text-customGray-100/60"
                {...register("originId")}
              >
                <option disabled selected>
                  مبدا
                </option>

                <option value="1">تهران</option>
                <option value="2">سنندج</option>
                <option value="2">تبریز</option>
                <option value="2">شیراز</option>
              </select>
            </div>
            <div className="relative col-span-6">
              <div className="absolute right-[15%] top-4">
                <Image
                  src="/images/global-search.svg"
                  width={18}
                  height={18}
                  alt="مقصد"
                />
              </div>
              <select
                className="w-full rounded-xl border p-2.5 text-center font-VazirRegular text-customGray-100/60"
                {...register("destinationId")}
              >
                <option disabled selected>
                  مقصد
                </option>
                <option value="1">تهران</option>
                <option value="2">سنندج</option>
              </select>
            </div>
            <div className="relative col-span-12">
              <div className="absolute right-[35%] top-3">
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
                    inputClass="w-full text-center p-2.5 border rounded-xl font-VazirRegular placeholder:text-customGray-100/60"
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
              className="col-span-12 w-full rounded-xl bg-customGreen-200 p-2.5 text-background"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
