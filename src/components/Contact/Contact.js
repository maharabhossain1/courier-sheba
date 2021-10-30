import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdContactPhone } from "react-icons/md";
import img from "./img/contact.gif";

export default function Contact() {
  return (
    <>
      <div className=" my-2">
        <div className="my-3" id="services">
          <div className="m-5 p-2 home-text ">
            <h1>
              <MdContactPhone className="text-custom-color" /> Contact Us
            </h1>
          </div>
        </div>
        <Container>
          <Row xs={1} md={2} lg={2} className="justify-content-evenly">
            <Col className=" d-flex align-items-center justify-content-center">
              <div className="m-2">
                <img className="img-fluid" src={img} alt="" />
              </div>
            </Col>
            <Col>
              <div className="m-2">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
