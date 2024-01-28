"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Info from "./Info";
import { RootState } from "@/config/configureStore";

const Reserve = () => {
  const { reserveOrder } = useSelector((state: RootState) => state.orders);
//   const router = useRouter();
//   if (!reserveOrder) {
//     router.push("/all-rooms");
//     return null;
//   }
  return (
    <>
      <Info info={reserveOrder} />
    </>
  );
};

export default Reserve;
