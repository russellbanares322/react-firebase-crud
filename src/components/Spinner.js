import { Spinner as SpinnerBs } from "react-bootstrap";
import React from "react";

const Spinner = () => {
  return (
    <div>
      <SpinnerBs
        animation="border"
        role="status"
        size="lg"
        style={{ height: "3rem", width: "3rem", marginTop: "40px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </SpinnerBs>
    </div>
  );
};

export default Spinner;
