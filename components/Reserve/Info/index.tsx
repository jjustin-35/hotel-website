import type { ReserveOrderType } from "@/constants/types/order";

import InfoItem from "./item";

import "./style.scss";
import "../style.scss";
import data from "./data";

const ReserveInfo = ({ info }: { info: ReserveOrderType }) => {
  const { roomName, checkInDate, checkOutDate, peopleNum } = info || {};
  return (
    <div>
      <h2 className="h3 reserve-section-title">{data.title}</h2>
      <div className="d-flex flex-column gap-4">
        {data.items.map((item) => {
          const info = (() => {
            if (item.key === "room") return roomName;
            if (item.key === "date") return [checkInDate, checkOutDate];
            if (item.key === "peopleNum") return peopleNum;
          })();
          return (
            <InfoItem
              key={item.key}
              name={item.key}
              title={item.title}
              subItems={item.subItems}
              info={info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReserveInfo;
