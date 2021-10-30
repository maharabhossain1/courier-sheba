import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiDeliveryDrone } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import "./Header.css";

export default function Header() {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      className="my-nav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <GiDeliveryDrone className="fs-1" /> Courier Sheba
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="me-auto">
            <Nav.Link className="mx-2" as={Link} to="/home">
              Home
            </Nav.Link>
            {user?.email && (
              <>
                <Nav.Link className="mx-2" as={Link} to="/myorder">
                  My Order
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to="/manageallorder">
                  Manage All Order
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to="/addservice">
                  Add New Service
                </Nav.Link>
              </>
            )}

            <Navbar.Text>
              <FaUserTie className="text-light fs-4" />
              <span className="mx-2 text-light">{user?.displayName}</span>
            </Navbar.Text>
            {user?.email ? (
              <Button className="mx-2" onClick={logOut} variant="light">
                <FiLogOut /> Logout
              </Button>
            ) : (
              <Nav.Link className="mx-2" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
