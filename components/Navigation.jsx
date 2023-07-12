import { auth } from "@/firebase";
import { signOut as firebaseSignOut } from "firebase/auth";
import Link from "next/link";
// import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CodeContext from "./CodeContext";
import { useContext } from "react";
import { signOut } from "next-auth/react";

const Navigation = () => {
  // const router = useRouter();

  const { user, setUser } = useContext(CodeContext);

  return (
    <Navbar
      variant="light"
      className="bg-code-black font-semibold font-readex w-11/12 gap-x-5"
    >
      <Navbar.Brand href="/dashboard" className="!text-code-white">
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
              firebaseSignOut(auth)
                .then(() => {
                  console.log("Logged out Successfully");
                })
                .then(() => {
                  setUser(null);
                  signOut();
                });
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
