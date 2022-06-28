import React from "react";
import { Button, Modal, Image, Container, CloseButton } from "react-bootstrap";

const CModal = ({
  show,
  setShow,
  img,
  name,
  contact,
  details,
  location,
  id,
  handleDelete,
}) => {
  return (
    <Container>
      <Modal.Dialog>
        <Modal show={show} animation={true}>
          <Modal.Header>
            <Modal.Title>User Detail</Modal.Title>
            <CloseButton onClick={() => setShow(false)} />
          </Modal.Header>
          <Modal.Body>
            <Image src={img} className="img-fluid" />
          </Modal.Body>
          <Modal.Body className="text-center">
            <Modal.Title>{name}</Modal.Title>
            <hr />
            <p>{contact}</p>
            <hr />
            <p>{details}</p>
            <hr />
            <p>{location}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => setShow(false)}>
              Return
            </Button>
            <Button variant="danger" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Modal.Dialog>
    </Container>
  );
};

export default CModal;
