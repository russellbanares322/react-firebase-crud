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
      errors.name = "Please input name";
    }
    if (!location) {
      errors.location = "Please input location";
    }
    if (!contact) {
      errors.contact = "Please input contact";
    }
    if (!details) {
      errors.details = "Please input details";
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
                    placeholder="Enter name"
                    onChange={handleChange}
                    name="name"
                    value={name}
                    autoFocus
                  />
                  {errors.name ? (
                    <div className="bg-danger mt-1 shadow p-1">
                      <small className="text-white">{errors.name}</small>
                    </div>
                  ) : null}

                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    placeholder="Enter location"
                    onChange={handleChange}
                    name="location"
                    value={location}
                  />
                  {errors.location ? (
                    <div className="bg-danger mt-1 shadow p-1">
                      <small className="text-white">{errors.location}</small>
                    </div>
                  ) : null}
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    placeholder="Enter contact no"
                    onChange={handleChange}
                    name="contact"
                    value={contact}
                  />
                  {errors.contact ? (
                    <div className="bg-danger mt-1 shadow p-1">
                      <small className="text-white">{errors.contact}</small>
                    </div>
                  ) : null}
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter details"
                    onChange={handleChange}
                    name="details"
                    value={details}
                  />
                  {errors.details ? (
                    <div className="bg-danger mt-1 shadow p-1">
                      <small className="text-white">{errors.details}</small>
                    </div>
                  ) : null}
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
