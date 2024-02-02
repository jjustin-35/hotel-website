import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Item from "./item";
import { RootState } from "@/config/configureStore";

const History = () => {
  const { orders } = useSelector((state: RootState) => state.orders);
  return (
    <Card className="padding-40 d-flex flex-column gap-40 bg-white rounded-3">
      <Card.Title className="fs-4 fw-bold">訂單紀錄</Card.Title>
      <div>
        {orders.map((order) => (
          <Item key={order._id} item={order} />
        ))}
      </div>
    </Card>
  );
};

export default History;
