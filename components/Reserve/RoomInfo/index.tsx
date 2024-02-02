import { RoomType } from "@/constants/types/room";
import { getInfoTexts } from "@/helpers/getInfoTexts";
import IconCards from "@/components/IconCards";
import CheckList from "@/components/CheckList";
import data from "./data";
import "../style.scss";

const RoomInfo = ({ roomData }: { roomData: RoomType }) => {
  if (!roomData) return null;

  const { layoutInfo, facilityInfo, amenityInfo } = roomData;

  const basic = data.basicInfo.items.map((item) => {
    const itemText = roomData[item.key] as string;
    const text = item.key === "maxPeople" ? `${itemText} 人` : itemText;
    return {
      ...item,
      text,
    };
  });

  const layout = getInfoTexts(layoutInfo);
  const facility = getInfoTexts(facilityInfo);
  const amenity = getInfoTexts(amenityInfo);
  return (
    <div className="reserve-section">
      <h2 className="h3 reserve-section-title">{data.title}</h2>
      <div className="d-flex flex-column gap-4">
        <p className="fw-bold reserve-item-title mb-0">
          {data.basicInfo.title}
        </p>
        <IconCards data={basic} />
        <p className="fw-bold reserve-item-title mb-0">
          {data.layoutInfo.title}
        </p>
        <CheckList data={layout} />
        <p className="fw-bold reserve-item-title mb-0">
          {data.facilityInfo.title}
        </p>
        <CheckList data={facility} />
        <p className="fw-bold reserve-item-title mb-0">
          {data.amenityInfo.title}
        </p>
        <CheckList data={amenity} />
      </div>
    </div>
  );
};

export default RoomInfo;
