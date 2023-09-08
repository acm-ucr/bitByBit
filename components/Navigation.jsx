import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSession, signOut } from "next-auth/react";

const Navigation = () => {
  const { data: session } = useSession();

  if (session)
    return (
      <Navbar
        variant="light"
        className="bg-code-black font-semibold font-readex w-11/12"
      >
        <Navbar.Brand href="/user/dashboard" className="!text-code-white w-1/6">
          <div className="text-3xl">bitByBIT</div>
        </Navbar.Brand>
        {session.user && (
          <Nav className="w-5/6 justify-end">
            <Link
              className="text-code-white no-underline hover:text-code-lightpurple mr-4"
              href="/user/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-code-white no-underline hover:text-code-lightpurple mr-4"
              href="/user/profile"
            >
              Profile
            </Link>
            <button
              className="text-code-white no-underline hover:text-code-lightpurple flex justify-end"
              onClick={() => signOut({ callbackUrl: "/", redirect: true })}
            >
              Sign Out
            </button>
          </Nav>
        )}
      </Navbar>
    );
  else
    return (
      <Navbar
        variant="light"
        className="bg-code-black font-semibold font-readex w-11/12 gap-x-5"
      >
        <Navbar.Brand href="/" className="!text-code-white">
          <div className="text-3xl">bitByBIT</div>
        </Navbar.Brand>
      </Navbar>
    );
};

export default Navigation;
