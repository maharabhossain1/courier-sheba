import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";

export default function OrderForm({ name }) {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (order, e) => {
    e.preventDefault();
    fetch("https://protected-badlands-11098.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added succesfully");
        }
        e.target.reset();
      });
  };

  return (
    <div className="w-75 m-auto my-5">
      <div className=" my-4">
        <h1>Hello {user?.displayName} </h1>
        <h4>
          If you want to add new service , <br /> please fill up the form and
          submit and then go to the Home{" "}
        </h4>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FloatingLabel
          controlId="floatingInput"
          label="User Email"
          className="mb-3"
        >
          <Form.Control
            type="email"
            value={user.email || ""}
            {...register("email")}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Status Code"
          className="mb-3"
        >
          <Form.Control
            type="text"
            {...register("status")}
            defaultValue="pending"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Please Coply Service Name"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            {...register("serviceName", { required: true })}
            placeholder="Leave a comment here"
          />
          {errors.serviceName && <span>This field is required</span>}
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Address"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            {...register("address", { required: true })}
          />
          {errors.address && <span>This field is required</span>}
        </FloatingLabel>
        <Form.Control
          type="submit"
          className="my-3 btn-custom-color text-light"
        />
      </Form>
    </div>
  );
}
