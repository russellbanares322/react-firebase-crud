import React, { useState } from "react";

import {
  Button,
  Modal as ModalBs,
  Image,
  Container,
  CloseButton,
} from "react-bootstrap";

const Modal = ({
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
    <Container className="modal">
      <ModalBs.Dialog>
        <ModalBs show={show} animation={true} size="md">
          <ModalBs.Header>
            <ModalBs.Title>User Detail</ModalBs.Title>
            <CloseButton onClick={() => setShow(false)} />
          </ModalBs.Header>
          <ModalBs.Body>
            <Image src={img} className="img-fluid" />
          </ModalBs.Body>
          <ModalBs.Body className="text-center">
            <ModalBs.Title>{name}</ModalBs.Title>
            <hr />
            <p>{contact}</p>
            <hr />
            <p>{details}</p>
            <hr />
            <p>{location}</p>
          </ModalBs.Body>
          <ModalBs.Footer>
            <Button variant="danger" onClick={handleConfirmModal}>
              Delete
            </Button>
            <Button variant="dark" onClick={() => setShow(false)}>
              Return
            </Button>
          </ModalBs.Footer>
        </ModalBs>
      </ModalBs.Dialog>
      <Container>
        <ModalBs.Dialog>
          <ModalBs
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal_delete"
            show={confirmModal}
            onHide={confirmModal}
          >
            <ModalBs.Header onClick={handleClose} closeButton>
              <ModalBs.Title>Are you sure ?</ModalBs.Title>
            </ModalBs.Header>
            <ModalBs.Body>
              <p>
                Do you really want to delete this record? This process cannot be
                undone.
              </p>
            </ModalBs.Body>
            <ModalBs.Footer>
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
            </ModalBs.Footer>
          </ModalBs>
        </ModalBs.Dialog>
      </Container>
    </Container>
  );
};

export default Modal;
