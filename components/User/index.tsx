import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "../Tab";
import { tabs } from "./data";

const User = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].key);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Container>
      <Tab
        tabs={tabs}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <Row>
        <Col lg={5}></Col>
        <Col lg={7}></Col>
      </Row>
    </Container>
  );
};

export default User;
