import React, { useState } from "react";

import { Button, Modal, Image, Container, CloseButton } from "react-bootstrap";

const CModal = ({
  show,
  setShow,
  img,
  name,
  contact,
  details,
  location,
  handleDelete,
  id,
}) => {
  const [isApprove, setIsApprove] = useState(true);
  const [confirmModal, setConfirmModal] = useState(false);
  const handleConfirmModal = () => {
    setConfirmModal(!confirmModal);
  };

  const handleApprove = () => {
    setIsApprove(!isApprove);
  };
  const handleClose = () => setConfirmModal(false);

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
            <Button variant="danger" onClick={handleConfirmModal}>
              Delete
            </Button>
            <Button variant="dark" onClick={() => setShow(false)}>
              Return
            </Button>
          </Modal.Footer>
        </Modal>
      </Modal.Dialog>
      <Container>
        <Modal.Dialog>
          <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal_delete"
            show={confirmModal}
            onHide={confirmModal}
          >
            <Modal.Header onClick={handleClose} closeButton>
              <Modal.Title>Are you sure ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Do you really want to delete this record? This process cannot be
                undone.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  handleDelete(id);
                  handleApprove();
                }}
              >
                Yes
              </Button>
              <Button variant="dark" onClick={handleClose}>
                No
              </Button>
            </Modal.Footer>
          </Modal>
        </Modal.Dialog>
      </Container>
    </Container>
  );
};

export default CModal;
