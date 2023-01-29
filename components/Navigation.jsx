import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">bitByBIT</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/problems">Problems</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
