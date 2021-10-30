import React from "react";
import { Button } from "react-bootstrap";

export default function singleOrder() {
  const { status, _id, serviceName, email } = order;
  return (
    <div
      key={_id}
      className="d-flex w-75 m-auto my-4 p-3 border-custom-color align-items-center"
    >
      <div className="w-75">
        <h4>{serviceName}</h4>
        <p>
          <small>{email}</small>
        </p>
        <p>{status}</p>
      </div>
      <div>
        <p>Order Confirm or Delete</p>
        <Button className="bg-success mx-2"> Confirm ✔︎ </Button>
        <Button
          className="bg-danger"
          onClick={() => {
            handleUserID(_id);
          }}
        >
          {" "}
          X
        </Button>
      </div>
    </div>
  );
}
