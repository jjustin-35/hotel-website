import { Card, Button } from "react-bootstrap";
import "./style.scss";
import { RoomType } from "@/constants/types/room";
import { ReserveOrderType } from "@/constants/types/order";

const ReserveCard = ({
  roomData,
  reserveData,
}: {
  roomData: RoomType;
  reserveData: ReserveOrderType;
}) => {
  const startDate = new Date(reserveData.checkInDate);
  const endDate = new Date(reserveData.checkOutDate);

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const price = roomData?.price || 0;
  const totalPrice = price * days;
  return (
    <Card className="reserve-card bg-white rounded-2 d-flex flex-column reserve-card-gap border-0">
      <Card.Img variant="top" className="rounded-2" src={roomData?.imageUrl} />
      <Card.Body className="p-0">
        <Card.Title className="h3">價格詳情</Card.Title>
        <div className="d-flex flex-column gap-2 my-4  border-bottom border-dark">
          <div className="d-flex justify-content-between">
            <Card.Text className="">{`NT$ ${price} x ${days} 晚`}</Card.Text>
            <Card.Text className="">{`NT$ ${totalPrice}`}</Card.Text>
          </div>
          <div className="d-flex justify-content-between">
            <Card.Text className="">住宿折扣</Card.Text>
            <Card.Text className="">{`-NT$ 0`}</Card.Text>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Card.Text className="fw-bold">總計</Card.Text>
          <Card.Text className="fw-bold">{`NT$ ${totalPrice}`}</Card.Text>
        </div>
      </Card.Body>
      <Button className="text-white">預約</Button>
    </Card>
  );
};

export default ReserveCard;
