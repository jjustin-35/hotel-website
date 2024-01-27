"use client";

import { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import "./style.scss";

const Header = ({ isScrollChange }: { isScrollChange?: boolean }) => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  useEffect(() => {
    if (isScrollChange) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollChange]);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
