import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="bg-code-black">
      <Navbar.Brand>
        <a href="/" className="text-code-white">
          bitByBIT
        </a>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link href="/dashboard">Problems</Link>
        <Link href="/profile">Profile</Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
