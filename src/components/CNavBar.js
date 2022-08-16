import React from "react";
import { Navbar, Container, Button, Nav, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CNavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="pt-4">
        <Col sm={12}>
          <Navbar
            className="shadow p-3 navbar"
            collapseOnSelect
            expand="lg"
            bg="light"
          >
            <Container>
              <Navbar.Brand
                onClick={() => navigate("/")}
                className="title_text"
                style={{ cursor: "pointer" }}
              >
                CRUD
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="nav_home" onClick={() => navigate("/")}>
                    Home
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Button variant="primary" onClick={() => navigate("/add")}>
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
