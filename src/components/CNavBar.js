import React from "react";
import {
  Navbar,
  Container,
  Button,
  Nav,
  Col,
  NavDropdown,
  Form,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const CNavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="pt-4">
        <Col sm={12}>
          <Navbar
            className="shadow p-3"
            collapseOnSelect
            expand="lg"
            bg="light"
          >
            <Container>
              <Navbar.Brand className="title_text">Crud</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="nav_home" onClick={() => navigate("/")}>
                    Home
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Button variant="info" onClick={() => navigate("/add")}>
                    Add
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Container>
    </>
  );
};

export default CNavBar;
