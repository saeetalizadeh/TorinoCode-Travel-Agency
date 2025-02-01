import Image from "next/image";

function Footer() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row  justify-between border-b pt-7 pb-7 border-t">
        <div className="flex justify-around">
          <div className="xl:ml-[100px] ml-[50px]">
            <h1 className="xs:text-2xl text-lg font-semibold ">تورینو</h1>
            <div className=" flex flex-col mt-6 gap-y-2">
              <h4 className="xs:text-lg text-sm">درباره ما</h4>
              <h4 className="xs:text-lg text-sm">تماس با ما</h4>
              <h4 className="xs:text-lg text-sm">چرا تورینو</h4>
              <h4 className="xs:text-lg text-sm">بیمه مسافرتی</h4>
            </div>
          </div>
          <div>
            <h1 className="xs:text-2xl  text-lg font-semibold">
              خدمات مشتریان
            </h1>
            <div className=" flex flex-col mt-6 gap-y-2">
              <h4 className="xs:text-lg text-sm"> پشتیبانی آنلاین</h4>
              <h4 className="xs:text-lg text-sm"> راهنمای خرید</h4>
              <h4 className="xs:text-lg text-sm"> راهنمای استرداد</h4>
              <h4 className="xs:text-lg text-sm"> پرسش و پاسخ</h4>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row-reverse items-center md:items-end justify-center pt-5 gap-x-10 ">
          <div className=" flex text-left flex-col w-fit items-end ">
            <img
              className="md:w-[146px] md:h-[44px] w-[100px] h-[30px]"
              src="/images/TorinoLogo.svg"
            />
            <div className="flex gap-x-2 mt-5 w-[180px]">
              <span> تلفن پشتیبانی :</span>
              <span className="font-VazirRegular ">021-8574</span>
            </div>
          </div>
          <div className="flex gap-x-8 mt-9 flex-wrap child:size-[38px]  justify-center">
            {/* <img src="/images/footer.svg" />
            <img src="/images/passenger-rights-48368f81 1.svg" />
            <img src="/images/ecunion-35c3c933.svg" />
            <img src="/images/samandehi-6e2b448a.svg" />
            <img src="/images/aira-682b7c43.svg" /> */}
            <div className="relative h-[38px] w-[35px] md:h-[55px] md:w-[50px] lg:h-[74px] lg:w-[68px]">
              <Image fill={true} src="/images/footer.svg" alt="فوتر" />
            </div>
            <div className="relative h-[38px] w-[35px] md:h-[55px] md:w-[50px] lg:h-[74px] lg:w-[68px]">
              <Image
                fill={true}
                src="/images/passenger-rights-48368f81 1.svg"
                alt="فوتر2"
              />
            </div>
            <div className="relative h-[38px] w-[35px] md:h-[55px] md:w-[50px] lg:h-[74px] lg:w-[68px]">
              <Image
                fill={true}
                src="/images/samandehi-6e2b448a.svg"
                alt="فوتر3"
              />
            </div>
            <div className="relative h-[38px] w-[35px] md:h-[55px] md:w-[50px] lg:h-[74px] lg:w-[68px]">
              <Image
                fill={true}
                src="/images/ecunion-35c3c933.svg"
                alt="فوتر4"
              />
            </div>
            <div className="relative h-[38px] w-[35px] md:h-[55px] md:w-[50px] lg:h-[74px] lg:w-[68px]">
              <Image fill={true} src="/images/aira-682b7c43.svg" alt="فوتر5" />
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 flex justify-center">
        <p className="text-black/50 font-VazirRegular">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </div>
    </div>
  );
}

export default Footer;
