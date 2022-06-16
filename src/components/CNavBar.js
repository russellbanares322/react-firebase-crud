import React from "react";
import { Navbar, Container, Button, Nav, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const CNavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Col sm={12}>
        <Navbar bg="secondary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="text-black" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-black" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className="text-black" href="#pricing">
                Pricing
              </Nav.Link>
            </Nav>
            <Button
              className="pull-right"
              variant="info"
              onClick={() => navigate("/add")}
            >
              Add Apartment
            </Button>
          </Container>
        </Navbar>
      </Col>
    </>
  );
};

export default CNavBar;
