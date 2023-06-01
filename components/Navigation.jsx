import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CodeContext from "./CodeContext";
import { useContext } from "react";

const Navigation = () => {
  const router = useRouter();

  const { user, setUser } = useContext(CodeContext);

  return (
    <Navbar
      variant="light"
      className="bg-code-black font-semibold font-readex w-11/12 gap-x-5"
    >
      <Navbar.Brand href="/" className="!text-code-white">
        <div className="text-3xl">bitByBIT</div>
      </Navbar.Brand>
      {user && (
        <>
          <Nav className="me-auto">
            <Link
              className="text-code-white no-underline hover:text-code-lightpurple"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </Nav>
          <Link
            className="text-code-white no-underline hover:text-code-lightpurple mr-4"
            href="/profile"
          >
            Profile
          </Link>
          <button
            className="text-code-white no-underline hover:text-code-lightpurple flex justify-end"
            onClick={() => {
              signOut(auth).then(() => {
                console.log("Logged Out Successfully");
                setUser(null);
              });
              router.push("/");
            }}
          >
            Sign Out
          </button>
        </>
      )}
    </Navbar>
  );
};

export default Navigation;
