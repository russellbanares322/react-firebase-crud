import { Spinner } from "react-bootstrap";
import React from "react";

const CSpinner = () => {
  return (
    <div>
      <Spinner animation="border" role="status" size="lg">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default CSpinner;
