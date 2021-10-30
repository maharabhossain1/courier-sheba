import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";

export default function AddService() {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (service, e) => {
    fetch("https://protected-badlands-11098.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
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
        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            {...register("title")}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Image URL"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Image URL"
            {...register("img", { required: true })}
          />
          {errors.img && <span>This field is required</span>}
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Detail"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            {...register("detail", { required: true })}
          />
          {errors.detail && <span>This field is required</span>}
        </FloatingLabel>
        <Form.Control
          type="submit"
          value="Add a New Service"
          className="my-3 btn-custom-color text-light"
        />
      </Form>
    </div>
  );
}
