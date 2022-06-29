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
      <Container className="pt-4">
        <Col sm={12}>
          <Navbar
            className="shadow p-3"
            collapseOnSelect
            expand="lg"
            bg="light"
          >
            <Container>
              <Navbar.Brand href="#home">Crud</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                </Nav>
                <Nav>
                  <Button variant="outline-info" className="mx-2">
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
        <Container>
          <small className="text-white mx-2">Email</small>
          <input className="my-1" type="text" /> <br />
          <small className="text-white">Password</small>
          <input className="" type="password" /> <br />
          <div className="my-2">
            <Button className="mx-2" variant="info" size="sm">
              Login
            </Button>
            <Button variant="info" size="sm">
              SignUp
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default CNavBar;
