import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

const ProtectedPage = ({ title, children, restrictions }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(status === "authenticated");
    console.log(session.user.role === "member");
    console.log(router.pathname === "/");
    if (status === "unauthenticated") {
      console.log("Not signed in");
      router.push("/");
    }
    if (
      status === "authenticated" &&
      session.user.role !== "admin" &&
      router.pathname === "/"
    ) {
      router.push("/user/dashboard");
    }
    if (
      status === "authenticated" &&
      restrictions.includes("admin") &&
      session.user.role !== "admin"
    ) {
      console.log("Dont have admin permissions");
      router.push("/");
    }
  }, [status, router]);

  return (
    <>
      {status === "loading" && <>LOADING</>}
      {status === "authenticated" && (
        <div>
          <title>{title}</title>
          {children}
        </div>
      )}
    </>
  );
};

export default ProtectedPage;
