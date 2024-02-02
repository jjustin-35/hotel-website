"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/config/configureStore";
import { UpdateUserType } from "@/constants/types/user";
import { updateUser } from "@/redux/user";

import Tab from "../Tab";
import Account from "./Account";
import { tabs } from "./data";

const User = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].key);
  const { user } = useSelector((state: RootState) => state.user);
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
      oldPassword: data.password,
      newPassword: data.newPassword,
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
        <Col lg={5}>
          {activeTab === "account" && (
            <Account user={user} onSubmit={onSubmit} />
          )}
        </Col>
        <Col lg={7}></Col>
      </Row>
    </Container>
  );
};

export default User;
