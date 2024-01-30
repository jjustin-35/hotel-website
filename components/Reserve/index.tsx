"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import Info from "./Info";
import Form from "./Form";
import RoomInfo from "./RoomInfo";
import ReserveCard from "./Card";
import { getRoomDetail } from "@/redux/rooms";
import { AppDispatch, RootState } from "@/config/configureStore";
import { orderActions } from "@/redux/orders";

const Reserve = () => {
  const { reserveOrder } = useSelector((state: RootState) => state.orders);
  const { roomDetail } = useSelector((state: RootState) => state.rooms);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (reserveOrder?.roomId && !roomDetail) {
      dispatch(getRoomDetail(reserveOrder.roomId));
    }
  }, [reserveOrder?.roomId, roomDetail]);

  const onEdit = (data: Record<string, any>) => {
    const payload = {
      ...reserveOrder,
      ...data,
    };
    dispatch(orderActions.setReserveOrder(payload));
  };

  const onBack = () => {
    if (reserveOrder.roomId) {
      router.push(`/room/${reserveOrder.roomId}`);
      return;
    }
    router.push("/all-rooms");
  };
  return (
    <div className="reserve-page">
      <Container>
        <h1 className="h2 d-flex align-items-center fw-bold">
          <Image
            src="/images/icon/ic-arrow-left.svg"
            alt="ic-arrow-left"
            width={40}
            height={40}
            onClick={onBack}
            className="cursor-pointer"
          />
          確認訂房資訊
        </h1>
        <Row className="justify-content-md-between">
          <Col md={7}>
            <Info info={reserveOrder} onEdit={onEdit} />
            <Form />
            <RoomInfo roomData={roomDetail} />
          </Col>
          <Col md={4}>
            <ReserveCard roomData={roomDetail} reserveData={reserveOrder} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reserve;
