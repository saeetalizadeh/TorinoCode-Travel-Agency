import Image from "next/image";

function Banner() {
  return (
    <div className="relative z-[-1] h-[119px] w-full md:h-[350px]">
      <Image src="/images/Untitled_design__1_.png" fill={true} alt="بنر" />
    </div>
  );
}

export default Banner;
