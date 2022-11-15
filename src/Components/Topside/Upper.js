import React from "react";
import "./Upper.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Upper = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Chess Compitition</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/studentlist" id="topbotton">Participants List</Nav.Link>
            <Nav.Link href="/add" id="topbotton">Add Student</Nav.Link>
            <Nav.Link href="/addname" id="topbotton">Add Name</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Upper;
