import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">bitByBIT</Navbar.Brand>
      <Nav className="me-auto">
        <Link href="/problems">Problems</Link>
        <Link href="/dashboard">Dashboard</Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
