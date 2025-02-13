import Tour from "@/components/TourDetail/Tour";
import { serverFetch } from "@/core/services/http";

async function TourDetail(props) {
  const tourId = props.params.id;
  const data = await serverFetch(`tour/${tourId}`, null, "no-store");

  return (
    <div className="min-h-main py-9 sm:bg-[#F3F3F3]">
      <Tour data={data} />
    </div>
  );
}

export default TourDetail;
