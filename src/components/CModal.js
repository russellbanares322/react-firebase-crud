import React from "react";
import { Button, Modal, Image, Container, CloseButton } from "react-bootstrap";

const CModal = ({
  open,
  setOpen,
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
      <Modal.Dialog
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>
          <Modal.Title>User Detail</Modal.Title>
          <CloseButton onClick={() => setOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          <Image src={img} className="img-fluid" />
        </Modal.Body>
        <Modal.Body>
          <Modal.Title>{name}</Modal.Title>
          <p>{contact}</p>
          <p>{details}</p>
          <p>{location}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
};

export default CModal;
