import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ paddingTop: "0" }}
    >
      <Container>
        <Navbar.Brand href="#home">Port</Navbar.Brand>
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
                {/* <img src={} alt=""/> */}
              </a>
              <a
                href="https://github.com/michaelwilliams"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src={} alt=""/> */}
              </a>
              <a
                href="https://www.instagram.com/michaelwilliams/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src={} alt=""/> */}
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
