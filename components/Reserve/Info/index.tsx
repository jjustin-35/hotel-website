import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { ReserveOrderType } from "@/constants/types/order";
import { RootState } from "@/config/configureStore";
import { getRooms } from "@/redux/rooms";
import useAppDispatch from "@/helpers/useAppDispatch";

import InfoItem from "./item";

import "./style.scss";
import "../style.scss";
import data from "./data";
import { isArrayExist } from "@/helpers/other";

const ReserveInfo = ({
  info,
  onEdit,
}: {
  info: ReserveOrderType;
  onEdit: (data: Record<string, any>) => void;
}) => {
  const { roomName, checkInDate, checkOutDate, peopleNum } = info || {};
  const { rooms } = useSelector((state: RootState) => state.rooms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArrayExist(rooms)) {
      dispatch(getRooms());
    }
  }, [rooms]);

  return (
    <div className="reserve-section">
      <h2 className="h3 reserve-section-title">{data.title}</h2>
      <div className="d-flex flex-column gap-4">
        {data.items.map((item) => {
          const info = (() => {
            if (item.key === "roomName") return roomName;
            if (item.key === "date") return [checkInDate, checkOutDate];
            if (item.key === "peopleNum") return peopleNum;
          })();
          return (
            <InfoItem
              key={item.key}
              name={item.key}
              title={item.title}
              subItems={item.subItems}
              infoOptions={rooms}
              info={info}
              onEdit={onEdit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReserveInfo;
