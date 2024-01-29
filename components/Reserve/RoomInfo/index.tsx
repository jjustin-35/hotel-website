import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { AppDispatch, RootState } from "@/config/configureStore";
import { getRoomDetail } from "@/redux/rooms";
import IconCards from "@/components/IconCards";
import CheckList from "@/components/CheckList";

const RoomInfo = ({ roomId }: { roomId: string }) => {
  const { roomDetail } = useSelector((state: RootState) => state.rooms);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRoomDetail(roomId));
  }, [roomId]);

  return <div className="d-flex flex-column gap-4"></div>;
};

export default RoomInfo;
