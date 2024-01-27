"use client";

import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import type { HeaderVariant } from "@/constants/types/global";
import "./style.scss";
import dataset from "./data";

const Header = ({
  variant,
  isScrollChange,
}: {
  variant: HeaderVariant;
  isScrollChange?: boolean;
}) => {
  const [bgColor, setBgColor] = useState<"black" | "transparent">("black");
  const data = dataset[variant];

  const handleScroll = () => {
    if (!isScrollChange) return;
    if (window.scrollY > 100) {
      setBgColor("black");
      return;
    }

    setBgColor("transparent");
  };

  useEffect(() => {
    handleScroll();
    if (isScrollChange) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollChange]);

  return (
    <Navbar expand="lg" bg={bgColor}>
      <Container>
        <Navbar.Brand href="/">
          <img {...data.brand} />
        </Navbar.Brand>
        <Nav className="gap-3">
          {data.menu.map((item, idx) => (
            <Nav.Item key={idx}>
              <Nav.Link href={item.link} className="font-white p-3">
                {item.text}
              </Nav.Link>
            </Nav.Item>
          ))}
          <Button href={data.button.link} className="font-white d-flex align-items-center px-2rem">{data.button.text}</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
