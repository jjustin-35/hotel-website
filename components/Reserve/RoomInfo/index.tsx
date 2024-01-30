import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import { AppDispatch, RootState } from "@/config/configureStore";
import { getRoomDetail } from "@/redux/rooms";
import IconCards from "@/components/IconCards";
import CheckList from "@/components/CheckList";
import data from "./data";

const RoomInfo = ({ roomId }: { roomId: string }) => {
  const { roomDetail } = useSelector((state: RootState) => state.rooms);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRoomDetail(roomId));
  }, [roomId]);

  if (!roomId) return null;

  const { layoutInfo, facilityInfo, amenityInfo } = roomDetail;

  const basic = data.basicInfo.items.map((item) => {
    const text = roomDetail[item.key] as string;
    return {
      ...item,
      text,
    };
  });

  const layout = layoutInfo.reduce<string[]>((acc, cur) => {
    if (cur.isProvide) {
      return [...acc, cur.title];
    }
    return acc;
  }, []);

  const facility = facilityInfo.reduce<string[]>((acc, cur) => {
    if (cur.isProvide) {
      return [...acc, cur.title];
    }
    return acc;
  }, []);

  const amenity = amenityInfo.reduce<string[]>((acc, cur) => {
    if (cur.isProvide) {
      return [...acc, cur.title];
    }
    return acc;
  }, []);
  return (
    <Container>
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
    </Container>
  );
};

export default RoomInfo;
