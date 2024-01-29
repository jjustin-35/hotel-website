"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Info from "./Info";
import { RootState } from "@/config/configureStore";
import { Col, Container, Row } from "react-bootstrap";

const Reserve = () => {
  const { reserveOrder } = useSelector((state: RootState) => state.orders);
  return (
    <section className="reserve-section">
      <Container>
        <Row>
          <Col md={7}>
            <Info info={reserveOrder} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reserve;
