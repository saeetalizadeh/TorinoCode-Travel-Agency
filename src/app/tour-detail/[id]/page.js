import Tour from "@/components/TourDetail/Tour";
import { serverFetch } from "@/core/services/http";

async function TourDetail(props) {
  const tourId = props.params.id;
  // console.log(tourId);
  const data = await serverFetch(`tour/${tourId}`, null, "no-store");
  // console.log(data);

  return <Tour data={data} />;
}

export default TourDetail;
