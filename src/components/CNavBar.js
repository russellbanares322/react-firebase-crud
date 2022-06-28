import React from "react";
import {
  Navbar,
  Container,
  Button,
  Nav,
  Col,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const CNavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Col sm={12}>
        <Navbar collapseOnSelect expand="lg" bg="secondary">
          <Container>
            <Navbar.Brand href="#home">Crud</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="info" className="mx-2">
                  Login
                </Button>
                <Button variant="info" onClick={() => navigate("/add")}>
                  Add
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </>
  );
};

export default CNavBar;
