"use client";

import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./style.scss";
import dataset from "./data";
import { RootState } from "@/config/configureStore";

const Bugger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={isOpen ? "bugger bugger-open" : "bugger"}>
      {Array.from(Array(3)).map((_, idx) => (
        <span key={idx} />
      ))}
    </div>
  );
};

const Header = ({ isScrollChange }: { isScrollChange?: boolean }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const [bgColor, setBgColor] = useState<"black" | "transparent">("black");
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = !!user;
  const data = isAuth ? dataset.user : dataset.guest;

  const handleClick = () => setIsOpen((prev) => !prev);

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
    <Navbar expand="md" variant="dark" bg={bgColor} sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img {...data.brand} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0 box-shadow-0"
          onClick={handleClick}
        >
          <Bugger isOpen={isOpen} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="gap-md-3 align-items-center justify-content-center nav-collapse-list">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
