"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/config/configureStore";
import { UpdateUserType } from "@/constants/types/user";
import { updateUser } from "@/redux/user";

import Tab from "../Tab";
import Account from "./Account";
import Profile from "./Profile";
import OrderCard from "@/components/OrderCard";
import History from "./History";
import { tabs } from "./data";

const User = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].key);
  const { user } = useSelector((state: RootState) => state.user);
  const { orders, orderDetail } = useSelector((state: RootState) => state.orders);
  const dispatch = useDispatch<AppDispatch>();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const onSubmit = (data: any) => {
    const updateData: UpdateUserType = {
      userId: user.id,
      name: data.name || user.name,
      phone: data.phone || user.phone,
      birthday: data.birthday || user.birthday,
      address: {
        zipcode: data.zipcode || user.address.zipcode,
        detail: data.detail || user.address.detail,
      },
      ...(data.password && { oldPassword: data.password }),
      ...(data.newPassword && { newPassword: data.newPassword }),
    };
    dispatch(updateUser(updateData));
  };

  return (
    <Container>
      <Tab
        tabs={tabs}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <Row>
        {activeTab === "account" && (
          <>
            <Col lg={5}>
              <Account user={user} onSubmit={onSubmit} />
            </Col>
            <Col lg={7}>
              <Profile user={user} onSubmit={onSubmit} />
            </Col>
          </>
        )}
        {activeTab === "order" && (
          <>
            <Col lg={7}>
              <OrderCard order={orderDetail} />
            </Col>
            <Col lg={5}>
              <History orders={orders} />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default User;
