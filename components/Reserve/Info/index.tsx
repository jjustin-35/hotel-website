import type { OrderType } from "@/constants/types/order";

import InfoItem from "./item";

import "./style.scss";
import data from "./data";

const ReserveInfo = ({ info }: { info: OrderType }) => {
  if (!info) return null;
  const { roomId, checkInDate, checkOutDate, peopleNum } = info;
  const { name } = roomId;
  return (
    <>
      <h2 className="h3 mb-4">{data.title}</h2>
      <div className="d-flex flex-column gap-4">
        {data.items.map((item) => {
          const info = (() => {
            if (item.key === "room") return name;
            if (item.key === "date") return [checkInDate, checkOutDate];
            if (item.key === "peopleNum") return peopleNum;
            return null;
          })();
          return <InfoItem key={item.key} {...item} info={info} />;
        })}
      </div>
    </>
  );
};

export default ReserveInfo;
