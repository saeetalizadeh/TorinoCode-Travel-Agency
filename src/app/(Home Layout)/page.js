import Banner from "@/components/Banner/Banner";
import Cards from "@/components/Cards/Cards";
import ContactUs from "@/components/ContactUs/ContactUs";
import Slider from "@/components/Slider/Slider";

export default async function Home(props) {
  const query = await props.searchParams;
  return (
    <div>
      <Banner />
      <div className="container">
        <h1 className="my-4 font-VazirRegular text-[20px]">همه تور ها</h1>
        <div className="grid grid-cols-12 gap-x-[25px] gap-y-[30px]">
          <Cards query={query} />
        </div>
      </div>
      <ContactUs />
      <Slider />
    </div>
  );
}
