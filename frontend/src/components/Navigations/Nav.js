import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import Auth from "../../contexts/Auth";
import { logout } from "../../services/AuthApi";

import logo from "../../images/alrahalalogo.png";

const Navi = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);

    window.location.replace("/");
  };
  return (
    <div className="navigation">
      <Navbar bg="dark" expand="sm" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img
                src={logo}
                width="70"
                height="60"
                className="d-inline-block align-top"
                alt="logo"
              />{" "}
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-start"
          >
            <Nav className="me-auto">
              <Nav.Link href="/">Acceuil</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/list-event">Evénements</Nav.Link>
              <Nav.Link href="/about_us">Apropos</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>

              {!isAuthenticated ? null : (
                <Nav.Link onClick={handleLogout}>Deconnexion</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
