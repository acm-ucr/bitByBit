import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar
      variant="light"
      fixed="top"
      className="bg-code-black font-semibold font-readex"
    >
      <Navbar.Brand href="/" className="!text-code-white px-2">
        <div className="text-3xl">bitByBIT</div>
      </Navbar.Brand>
      <Nav className="me-auto flex-grow-1 gap-3">
        <Link
          className="text-code-white no-underline hover:text-code-lightpurple"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="text-code-white no-underline hover:text-code-lightpurple"
          href="/profile"
        >
          Profile
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
