import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar variant="light" className="bg-code-black font-semibold font-readex">
      <Navbar.Brand href="/" className="!text-code-white px-2">
        <div className="text-3xl">bitByBIT</div>
      </Navbar.Brand>
      <Nav className="me-auto flex-grow-1 gap-3">
        <Link className="text-code-white no-underline hover:text-code-lightpurple" href="/dashboard">
          Problems
        </Link>
        <Link className="text-code-white no-underline hover:text-code-lightpurple" href="/profile">
          Profile
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
