import React, { useState, useEffect } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { storage, db } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CSpinner from "../components/CSpinner";
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
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    id && getSingleUser();
  }, [id]);

  const getSingleUser = async () => {
    const docRef = doc(db, "users", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({
              ...prev,
              img: downloadURL,
            }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if (!id) {
      try {
        await addDoc(collection(db, "users"), {
          ...data,
          timestamp: serverTimestamp(),
        });
        toast.info("Successfully added user!");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        toast.info("Successfully updated user!");
        await updateDoc(doc(db, "users", id), {
          ...data,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    }

    navigate("/");
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5 ">
          <Col sm={7}>
            {isSubmit ? (
              <CSpinner />
            ) : (
              <>
                <h1 className="user_text">{id ? "Update User" : "Add User"}</h1>
                <Form className=" p-5 form" onSubmit={handleSubmit}>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    placeholder="Enter name"
                    onChange={handleChange}
                    name="name"
                    value={name}
                    e
                    autoFocus
                  />
                  {errors.name ? (
                    <div className="bg-danger mt-1 shadow p-1 mb-2">
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
                    <div className="bg-danger mt-1 shadow p-1 mb-2">
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
                    <div className="bg-danger mt-1 shadow p-1 mb-2">
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
                    <div className="bg-danger mt-1 shadow p-1 mb-2">
                      <small className="text-white">{errors.details}</small>
                    </div>
                  ) : null}
                  <Form.Label>Upload</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={(e) => setFile(e.target.files[0])}
                    placeholder="Enter contact no"
                  />
                  <Button
                    variant="dark"
                    className="mt-3 mx-2"
                    onClick={() => navigate("/")}
                  >
                    Return
                  </Button>
                  <Button
                    className="mt-3"
                    type="submit"
                    variant="info"
                    disabled={progress !== null && progress < 100}
                  >
                    {id ? "Save" : "Upload"}
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
