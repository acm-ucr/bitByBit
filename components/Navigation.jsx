import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  const router = useRouter();
  return (
    <Navbar
      variant="light"
      fixed="top"
      className="bg-code-black font-semibold font-readex"
    >
      <Navbar.Brand href="/" className="!text-code-white px-2">
        <div className="text-3xl">bitByBIT</div>
      </Navbar.Brand>
      <Nav className="me-auto gap-3">
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
      <button
        className="text-code-white no-underline hover:text-code-lightpurple flex justify-end mr-4"
        onClick={() => {
          signOut(auth).then(() => {
            console.log("Logged Out Successfully");
          });
          router.push("/");
        }}
      >
        Sign Out
      </button>
    </Navbar>
  );
};

export default Navigation;
