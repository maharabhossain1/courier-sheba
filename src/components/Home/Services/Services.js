import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { GrDeliver } from "react-icons/gr";
import useAuth from "../../../hook/useAuth";
import Cart from "./Cart/Cart";

export default function Services() {
  const { isLoading, setIsLoading } = useAuth();
  const [sheba, setSheba] = useState([]);
  useEffect(() => {
    fetch("https://protected-badlands-11098.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setSheba(data))
      .finally(() => setIsLoading(false));
  }, [setIsLoading]);
  if (isLoading) {
    return (
      <div className="m-5 p-5 d-flex ">
        <Spinner className="m-auto" animation="border" variant="success" />
      </div>
    );
  }
  return (
    <div className="my-3" id="services">
      <div className="m-5 p-2 home-text ">
        <h1>
          <GrDeliver className="text-custom-color" /> Our Services
        </h1>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3} className="justify-content-evenly m-auto">
          {sheba.map((shebaMini) => (
            <Cart key={shebaMini._id} shebaMini={shebaMini} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
