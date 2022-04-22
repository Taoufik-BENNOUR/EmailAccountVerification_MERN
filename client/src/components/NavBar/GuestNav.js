import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Navbar } from "react-bootstrap";
const GuestNav = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Email Validation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ButtonGroup className="ms-auto" aria-label="Basic example">
            <Link className="mr-auto" to="/signin">
              <Button>Sign Up</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign In</Button>
            </Link>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GuestNav;
