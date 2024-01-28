"use client";

import { useSelector } from "react-redux";
import Info from "./Info";
import { RootState } from "@/config/configureStore";

const Reserve = () => {
  const { reserveOrder } = useSelector((state: RootState) => state.orders);
  return (
    <>
      <Info info={reserveOrder} />
    </>
  );
};

export default Reserve;
