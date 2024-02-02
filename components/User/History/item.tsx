import { OrderType } from "@/constants/types/order";
import Image from "next/image";

const HistoryItem = ({ item }: { item: OrderType }) => {
  const startDate = new Date(item.checkInDate);
  const endDate = new Date(item.checkOutDate);
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const startDateStr = `${startDate.getFullYear()} 年 ${
    startDate.getMonth() + 1
  } 月 ${startDate.getDate()} 日`;
  const endDateStr = `${endDate.getFullYear()} 年 ${
    endDate.getMonth() + 1
  } 月 ${endDate.getDate()} 日`;
  return (
    <div className="d-flex gap-4 padding-y-40 border-bottom border-dark">
      <Image
        src="/images/room.jpg"
        alt="room"
        width={120}
        height={80}
        className="rounded-2"
      />
      <div className="d-flex flex-column gap-3">
        <p className="mb-0">{`預約參考編號: ${item._id}`}</p>
        <p className="fs-5 fw-bold">{item.roomId.name}</p>
        <div className="d-flex flex-column gap-2">
          <p className="mb-0">{`住宿天數: ${days}`}</p>
          <p className="mb-0">{`住宿人數: ${item.peopleNum}`}</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <p className="mb-0">{`入住: ${startDateStr}`}</p>
          <p className="mb-0">{`退房: ${endDateStr}`}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
