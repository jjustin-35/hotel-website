"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";
import Info from "./Info";
import Form from "./Form";
import RoomInfo from "./RoomInfo";
import { RootState } from "@/config/configureStore";
import { Col, Container, Row } from "react-bootstrap";

const Reserve = () => {
  const { reserveOrder } = useSelector((state: RootState) => state.orders);
  const router = useRouter();

  const onBack = () => {
    if (reserveOrder.roomId) {
      router.push(`/room/${reserveOrder.roomId}`);
      return;
    }
    router.push('/all-rooms');
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
        <Row>
          <Col md={7}>
            <Info info={reserveOrder} />
            <Form />
            <RoomInfo roomId={reserveOrder?.roomId} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reserve;
