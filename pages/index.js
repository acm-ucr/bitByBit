import PrimaryLogo from "@/components/PrimaryLogo";
import Welcome from "@/components/Welcome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Index = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/user/dashboard");
  }

  return (
    <>
      {status === "unauthenticated" && (
        <Row className="flex justify-center items-center bg-code-black h-screen w-full">
          <Col xl={6}>
            <PrimaryLogo />
          </Col>
          <Col xl={6}>
            <Welcome />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Index;
