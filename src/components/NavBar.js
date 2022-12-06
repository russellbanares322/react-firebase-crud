import React from "react";
import {
  Navbar as NavbarBs,
  Container,
  Button,
  Nav,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="pt-4">
        <Col sm={12}>
          <NavbarBs className="shadow p-3 navbar" collapseOnSelect expand="lg">
            <Container>
              <NavbarBs.Brand
                onClick={() => navigate("/")}
                className="navbar_brand"
              >
                CRUD
              </NavbarBs.Brand>
              <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
              <NavbarBs.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="nav_home" onClick={() => navigate("/")}>
                    Home
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Button
                    style={{ backgroundColor: "#3C6EE1", border: "none" }}
                    onClick={() => navigate("/add")}
                  >
                    Add
                  </Button>
                </Nav>
              </NavbarBs.Collapse>
            </Container>
          </NavbarBs>
        </Col>
      </Container>
    </>
  );
};

export default NavBar;
