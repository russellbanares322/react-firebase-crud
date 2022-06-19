import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Col,
  Spinner,
  Row,
  Alert,
} from "react-bootstrap";

import { storage } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  location: "",
  contact: "",
  details: "",
};

const CreateEditUser = () => {
  const [data, setData] = useState(initialState);
  const { name, location, contact, details } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = "Invalid input";
    }
    if (!location) {
      errors.location = "Invalid input";
    }
    if (!contact) {
      errors.contact = "Invalid input";
    }
    if (!details) {
      errors.details = "Invalid input";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5 border shadow p-3">
          <Col sm={4}>
            {isSubmit ? (
              <Spinner
                className="text-center"
                animation="border"
                role="status"
                variant="dark"
              />
            ) : (
              <>
                <h1>Add User</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    error={
                      errors.name ? (
                        <>
                          <Alert variant="danger">{errors.name}</Alert>
                        </>
                      ) : null
                    }
                    placeholder="Enter name"
                    onChange={handleChange}
                    name="name"
                    value={name}
                    autoFocus
                  />
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    error={
                      errors.location ? { content: errors.location } : null
                    }
                    placeholder="Enter location"
                    onChange={handleChange}
                    name="location"
                    value={location}
                  />
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    error={errors.contact ? { content: errors.contact } : null}
                    placeholder="Enter contact no"
                    onChange={handleChange}
                    name="contact"
                    value={contact}
                  />
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    error={errors.details ? { content: errors.details } : null}
                    placeholder="Enter details"
                    onChange={handleChange}
                    name="details"
                    value={details}
                  />
                  <Form.Label>Upload</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    placeholder="Enter contact no"
                  />
                  <Button className="mt-3" type="submit" variant="info">
                    Submit
                  </Button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateEditUser;
