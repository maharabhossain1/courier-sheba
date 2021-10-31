import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="bg-dark pt-5 footer">
      <Container>
        <Row xs={1} md={4} lg={6} className="justify-content-evenly">
          <Col>
            <ul className="text-light">
              <h4>Policy Info</h4>
              <li>Editorial Policy</li>
              <li>Privacy Policy</li>
              <li>Vulnerability Disclosure Policy</li>
              <li>Terms and Conditions</li>
              <li>Customer Support Policy</li>
              <li>Return Policy</li>
            </ul>
          </Col>
          <Col>
            <ul className="text-light">
              <h4>Useful Links</h4>
              <li>FAQ</li>
              <li>About us</li>
              <li>Contect us</li>
              <li>Special Offers</li>
              <li>Health Store</li>
              <li>Need Help?</li>
            </ul>
          </Col>
          <Col className="text-light">
            <ul>
              <h4>Social Medial </h4>
              <li>Get in touched by Social media</li>
              <li>
                <FaFacebook className="fs-1 m-1" />
                <FaGithub className="fs-1 m-1" />
                <FaInstagram className="fs-1 m-1" />
                <FaTwitter className="fs-1 m-1" />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="container mt-3  d-flex  justify-content-center">
        <p className="text-xs-center text-light">
          &copy;{new Date().getFullYear()} Courier Sheba -All Rights
        </p>
      </div>
    </div>
  );
}
