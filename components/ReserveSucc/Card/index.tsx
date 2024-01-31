import { Card } from "react-bootstrap";

import { OrderType } from "@/constants/types/order";
import CardChecklist from "@/components/CheckList/cardLayout";
import { getInfoTexts } from "@/helpers/getInfoTexts";
import "./style.scss";

const ReserveSuccCard = ({ order }: { order: OrderType }) => {
  const roomData = order?.roomId;
  const startDate = new Date(order.checkInDate);
  const endDate = new Date(order.checkOutDate);
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const startDateStr = `${startDate.getFullYear()} 年 ${
    startDate.getMonth() + 1
  } 月 ${startDate.getDate()} 日`;
  const endDateStr = `${endDate.getFullYear()} 年 ${
    endDate.getMonth() + 1
  } 月 ${endDate.getDate()} 日`;

  const price = roomData?.price * days || 0;

  const facility = getInfoTexts(roomData?.facilityInfo);
  const amenity = getInfoTexts(roomData?.amenityInfo);
  return (
    <Card className="reserve-card bg-white rounded-2 d-flex flex-column reserve-card-gap border-0">
      <p className="mb-2">預訂參考編號: {order._id}</p>
      <Card.Title className="h3">即將來的行程</Card.Title>
      <Card.Img variant="top" className="rounded-2" src={roomData?.imageUrl} />
      <Card.Body className="p-0 d-flex flex-column gap-40">
        <div className="d-flex flex-column gap-2 my-4 border-bottom border-dark">
          <Card.Title className="h4">{`${roomData?.name}，${days}晚 | 住宿人數：${order?.peopleNum}位`}</Card.Title>
          <Card.Text className="reserve-card-text-primary mb-0">{`入住：${startDateStr}，15:00 可入住`}</Card.Text>
          <Card.Text className="reserve-card-text-dark mb-0">{`退房：${endDateStr}，12:00 前退房`}</Card.Text>
          <Card.Text>{`NT$ ${price}`}</Card.Text>
        </div>
        <div className="d-flex flex-column gap-2 my-4">
          <Card.Title className="h4 reserve-card-text-primary">
            房內設備
          </Card.Title>
          <CardChecklist data={facility} />
        </div>
        <div className="d-flex flex-column gap-2 my-4">
          <Card.Title className="h4 reserve-card-text-primary">
            備品提供
          </Card.Title>
          <CardChecklist data={amenity} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReserveSuccCard;
