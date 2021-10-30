import React from "react";
import { Carousel, Form, FormControl, Button } from "react-bootstrap";

export default function TopBanner() {
  const images = [
    "https://i.ibb.co/KwNx66h/6.jpg",
    "https://i.ibb.co/L0RhP40/5.jpg",
    "https://i.ibb.co/F56161n/4.jpg",
    "https://i.ibb.co/x5gw3Zp/3.jpg",
    "https://i.ibb.co/pPwjkMY/2.jpg",
    "https://i.ibb.co/phw8Btr/1.jpg",
  ];
  return (
    <div>
      <div className="w-75 m-auto my-2">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Enter your tracking number(s)"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Track</Button>
        </Form>
      </div>
      <Carousel variant="dark">
        {images.map((image) => {
          return (
            <Carousel.Item key={images.indexOf(image)}>
              <div className="my-2">
                <img className="w-100 d-block" src={image} alt="First slide" />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
