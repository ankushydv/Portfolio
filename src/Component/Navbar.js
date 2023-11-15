import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/img/logo.svg";
import NavbarIcon1 from "../assets/img/nav-icon1.svg";
import NavbarIcon2 from "../assets/img/nav-icon2.svg";
import NavbarIcon3 from "../assets/img/nav-icon3.svg";

export const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      style={{ paddingTop: "0" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggel-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className={
                activeLink === "link" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("link")}
            >
              Link
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/michael-williams/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={NavbarIcon1} alt="" />
              </a>
              <a
                href="https://github.com/michaelwilliams"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={NavbarIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/michaelwilliams/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={NavbarIcon3} alt="" />
              </a>
              <button>Let's Connect</button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
