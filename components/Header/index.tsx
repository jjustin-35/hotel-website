"use client";

import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./style.scss";
import dataset from "./data";
import { RootState } from "@/config/configureStore";

const Header = ({ isScrollChange }: { isScrollChange?: boolean }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const [bgColor, setBgColor] = useState<"black" | "transparent">("black");

  const isAuth = !!user;
  const data = isAuth ? dataset.user : dataset.guest;

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
          {isAuth && (
            <Nav.Item>
              <Nav.Link href="/member">{user.name}</Nav.Link>
            </Nav.Item>
          )}
          <Button
            href={data.button.link}
            className="font-white d-flex align-items-center px-2rem"
          >
            {data.button.text}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
