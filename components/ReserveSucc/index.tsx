"use client";

import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

import { RootState } from "@/config/configureStore";
import { OrderType } from "@/constants/types/order";
import SuccMessage from "./SuccMessage";
import ReserveSuccCard from "./Card";
import "./style.scss";

const ReserveSucc = ({ order }: { order: OrderType }) => {
  const { user } = useSelector((state: RootState) => state.user);

  const { userInfo } = order || {};
  return (
    <div className="reserve-page font-white">
      <Container>
        <Row className="justify-content-lg-between">
          <Col lg={7}>
            <SuccMessage memberName={user?.name || "test"} />
            <div className="reserve-section d-flex flex-column align-items-start gap-40">
              <h2 className="h3 mb-0">立即查詢你的訂單紀錄</h2>
              <Button
                className="bg-primary font-white reserve-button"
                href="/member?feature=order"
              >
                前往我的訂單
              </Button>
            </div>
            <div className="reserve-section d-flex flex-column gap-40">
              <h2 className="h3 mb-0">訂房資訊</h2>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex flex-column gap-2">
                  <span>姓名</span>
                  <span>{userInfo?.name}</span>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span>手機號碼</span>
                  <span>{userInfo?.phone}</span>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span>電子信箱</span>
                  <span>{userInfo?.email}</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <ReserveSuccCard order={order} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReserveSucc;
