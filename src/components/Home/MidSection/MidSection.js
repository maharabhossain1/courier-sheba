import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MidSection.css";

export default function MidSection() {
  return (
    <div className="mid-section my-2">
      <Container>
        <Row xs={1} md={2} lg={2} className="justify-content-evenly">
          <Col className=" d-flex align-items-center justify-content-center">
            <div>
              <img
                src="https://i.ibb.co/W6rx0JY/7.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <div className="w-50">
                <hr />
                <hr />
              </div>
              <div className="home-text">
                <h1>COURIER SHEBA FOR THE CONNECTED AGE.</h1>
                <h5>
                  When Adrian Dalsey, Larry Hillblom and Robert Lynn founded DHL
                  in 1969, they didn’t know they would revolutionize the world
                  of logistics. Today, DHL is the world’s leading logistics
                  company. Our 400,000 people in over 220 countries and
                  territories work every day to help you cross borders, reach
                  new markets and grow your business. Or simply send a letter to
                  your loved ones.
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
