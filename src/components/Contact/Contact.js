import React from "react";
import { Button, Form } from "react-bootstrap";
import { MdContactPhone } from "react-icons/md";
import img from "./img/contact.gif";

export default function Contact() {
  return (
    <>
      <div className="my-3" id="services">
        <div className="m-5 p-2 home-text ">
          <h1>
            <MdContactPhone className="text-custom-color" /> Contact Us
          </h1>
        </div>
      </div>
      <div className="m-3 d-flex justify-content-evenly align-items-center ">
        <div className="w-50">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="w-50 mx-2">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write Down Some information</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="dark" className="btn-custom-color">
              Submit your mail
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
