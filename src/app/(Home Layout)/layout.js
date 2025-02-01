import Image from "next/image";

export default function MainLayout({ children }) {
  const services = [
    {
      id: 1,
      src: "/images/Group 16 (1).png",
      alt: "best price",
      title: "بصرفه ترین قیمت",
      description: "بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.",
      imgStyle: "min-h-[64px] min-w-[71px] xl:min-h-[109px] xl:min-w-[121px]",
    },
    {
      id: 2,
      src: "/images/Group 17.png",
      alt: "support",
      title: "پشتیبانی",
      description: "پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.",
      imgStyle: "min-h-[64px] min-w-[70px] xl:min-h-[99px] xl:min-w-[109px]",
    },
    {
      id: 3,
      src: "/images/Group 18.png",
      alt: "user satisfaction",
      title: "رضایت کاربران",
      description: "رضایت بیش از 10 هزار کاربر از تور های ما. ",
      imgStyle: "min-h-[64px] min-w-[64px] xl:min-h-[104px] xl:min-w-[104px]",
    },
  ];
  return (
    <>
      <main className="min-h-main">{children}</main>
      <section className="container">
        <div className="border-#00000040 flex flex-col gap-y-10 border-t py-5 sm:flex-row">
          {services.map((item) => (
            <div
              className="flex items-center gap-x-[13px] px-4 sm:flex-col sm:items-start sm:gap-y-3 lg:flex-row lg:items-center"
              key={item.id}
            >
              <div className={`relative ${item.imgStyle}`}>
                <Image fill={true} src={item.src} alt={item.alt} />
              </div>
              <div>
                <h4 className="mb-1 font-VazirMedium text-[14px] font-medium md:text-[20px] xl:text-[26px]">
                  {item.title}
                </h4>
                <p className="font-VazirRegular text-xs font-light leading-[18px] tracking-wide lg:text-[16px] lg:leading-[25px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
