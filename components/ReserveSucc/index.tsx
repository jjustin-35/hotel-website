'use client';

import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import SuccMessage from "./SuccMessage";
import "./style.scss";
import { RootState } from "@/config/configureStore";

const ReserveSucc = () => {
    const { user } = useSelector((state: RootState) => state.user);
  return (
    <div className="reserve-page">
      <Container>
        <Row className="justify-content-md-between">
          <Col md={7}>
            <SuccMessage memberName={user?.name || 'test'} />
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReserveSucc;
