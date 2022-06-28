import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Card, Image, Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import CModal from "../components/CModal";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const modalToggle = (item) => {
    setShow(true);
    setUser(item);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Delete that shit ?")) {
      try {
        setShow(false);
        await deleteDoc(doc(db, "users", id));
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Container>
      <Row className="ml-4">
        {users &&
          users.map((item) => (
            <Card
              style={{ width: "20rem", margin: "10px" }}
              key={item.id}
              className="mt-5 shadow p-3"
            >
              <Card.Body>
                <Card.Img
                  src={item.img}
                  className="img-fluid"
                  style={{ height: "250px", width: "250px" }}
                />
                <Card.Title className="mt-3">{item.name}</Card.Title>
                <hr />
                <Card.Text>{item.details}</Card.Text>
                <hr />
                <Card.Text>{item.contact}</Card.Text>
                <hr />

                <Button
                  variant="info"
                  onClick={() => navigate(`/edit/${item.id}`)}
                  className="mx-3"
                >
                  Update
                </Button>
                <Button variant="info" onClick={() => modalToggle(item)}>
                  View
                </Button>
              </Card.Body>
            </Card>
          ))}
      </Row>
      <Container>
        {show && (
          <CModal
            show={show}
            setShow={setShow}
            handleDelete={handleDelete}
            {...user}
          />
        )}
      </Container>
    </Container>
  );
};

export default Home;
