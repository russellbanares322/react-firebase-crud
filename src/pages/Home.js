import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Card, Image, Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsubmit = onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {});
    });
  });
  return <div>Home</div>;
};

export default Home;
