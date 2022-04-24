import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import "./header.css"
const UserNav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar className="navbar"  expand="lg">
        <Container>
          <Navbar.Brand href="#home">Email Validation</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Button className="ms-auto" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default UserNav;
