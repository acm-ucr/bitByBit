import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar variant="light" className="bg-code-black ">
      <Navbar.Brand href="/" className="text-code-white ">
        bitByBIT
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link className="text-code-white" href="/dashboard">
          Problems
        </Link>
        <Link className="text-code-white" href="/profile">
          Profile
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
