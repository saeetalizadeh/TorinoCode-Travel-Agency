import Image from "next/image";

function ContactUs() {
  return (
    <div className="container mb-[90px]">
      <div className="flex flex-col rounded-xl border sm:flex-row">
        <div className="relative h-[128px] w-full rounded-t-[10px] bg-customGreen-200 p-3 xs:p-6 sm:h-[160px] xl:h-[251px] sm:rounded-b-[10px] lg:p-10">
          <div className="mb-2.5 flex">
            <span className="text-[22px] text-background lg:text-[32px] xl:text-[48px]">
              خرید تلفنی از
            </span>
            <span className="mr-1 lg:mr-2 lg:text-[32px] text-[22px] text-customGreen-300 xl:text-[48px]">
              تورینو
            </span>
          </div>
          <span className="text-[14px] text-background lg:text-[18px] xl:text-[32px]">
            به هرکجا که میخواهید!
          </span>
          <div className="absolute -bottom-2 left-0 sm:left-2 xl:bottom-0">
            <div className="relative h-[156px] w-[195px] xl:h-[225px] xl:w-[308px]">
              <Image
                fill={true}
                alt="تماس با ما"
                src="/images/professional-cartoon-man-talking-phone-icon-illustration_1151483-70336-removebg-preview 1.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-7 py-3 sm:w-1/2 sm:flex-col sm:justify-center sm:gap-3">
          <div className="flex gap-x-2 sm:gap-x-1">
            <span className="font-VazirRegular text-[20px] font-bold xl:text-[28px]">
              021-1840
            </span>
            <img src="/images/call.svg" />
          </div>
          <button className="rounded-lg bg-customGreen-300 px-7 py-2 text-[14px] text-background xl:h-[41px]">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
