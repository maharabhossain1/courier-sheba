import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import OrderForm from "../OrderForm/OrderForm";

export default function Servicing() {
  const { serviceId } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(
      `https://protected-badlands-11098.herokuapp.com/services/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <>
      <div className="w-75 m-auto my-5">
        <div className="text-center m-4  ">
          <h1>{service.title}</h1>
        </div>
        <Container>
          <Row xs={1} md={2} lg={2} className="justify-content-evenly">
            <Col className="d-flex align-items-center justify-content-center">
              <div className=" m-auto">
                <img src={service.img} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <div>
                <div className="w-50">
                  <hr />
                  <hr />
                </div>
                <div className="home-text">
                  <h3>{service.detail}</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <OrderForm name={service.title} />
    </>
  );
}
