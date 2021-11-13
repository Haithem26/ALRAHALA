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
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="70"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
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
              <Nav.Link href="/about_us">A Propos</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/sign-up">Inscription</Nav.Link>
              {!isAuthenticated ? (
                <Nav.Link href="/login_password">Connexion</Nav.Link>
              ) : (
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
