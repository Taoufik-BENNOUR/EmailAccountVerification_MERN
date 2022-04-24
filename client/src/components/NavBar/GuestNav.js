import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Navbar } from "react-bootstrap";
import "./header.css"

const GuestNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Email Validation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ButtonGroup className="ms-auto" aria-label="Basic example">
            <Link className="mr-auto" to="/signin">
              <Button className="sign-button">Sign in</Button>
            </Link>
            <Link to="/signup">
              <Button className="sign-button" >Sign Up</Button>
            </Link>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GuestNav;
