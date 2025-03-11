import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded} className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          Solars
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <FaBars className="hamburger-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/solar-panels" onClick={() => setExpanded(false)}>
              Solar Panels
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
