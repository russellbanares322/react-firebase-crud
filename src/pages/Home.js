import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Card, Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import CModal from "../components/CModal";
import CSpinner from "../components/CSpinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImFileEmpty } from "react-icons/im";

const Home = ({ isApprove }) => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
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

  if (loading) {
    return <CSpinner />;
  }

  const modalToggle = (item) => {
    setShow(true);
    setUserData(item);
  };

  const handleDelete = async (id) => {
    if (isApprove !== false) {
      try {
        setShow(false);
        await deleteDoc(doc(db, "users", id));
        setUsers(users.filter((user) => user.id !== id));
        toast.error("Successfully deleted user!");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {users.length === 0 ? (
          <h1 className="my-5  no_usertext">
            Currently no added user
            <ImFileEmpty size={50} className="icon_file" />
          </h1>
        ) : (
          users.map((item) => (
            <Card key={item.id} className="mt-5 card p-2 mx-2">
              <Card.Body>
                <Card.Img
                  src={item.img}
                  fluid
                  style={{ width: "100%", height: "15rem" }}
                />
                <Card.Title className="mt-3">{item.name}</Card.Title>
                <hr />
                <Card.Text>{item.details}</Card.Text>
                <hr />
                <Card.Text>{item.contact}</Card.Text>
                <hr />

                <Button
                  variant="primary"
                  onClick={() => navigate(`/edit/${item.id}`)}
                  className="mx-3 mb-5"
                >
                  Update
                </Button>
                <Button
                  className="mb-5"
                  variant="outline-primary"
                  onClick={() => modalToggle(item)}
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </Row>
      <Container>
        {show && (
          <CModal
            show={show}
            setShow={setShow}
            handleDelete={handleDelete}
            {...userData}
          />
        )}
      </Container>
    </Container>
  );
};

export default Home;
