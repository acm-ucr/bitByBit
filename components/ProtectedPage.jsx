import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import LoadingScreen from "../components/LoadingScreen";

const ProtectedPage = ({ title, children, restrictions }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
    if (
      status === "authenticated" &&
      restrictions.includes("admin") &&
      session.user.role !== "admin"
    ) {
      router.push("/");
    }
  }, [status, router]);

  return (
    <>
      {status === "loading" && <LoadingScreen />}
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
