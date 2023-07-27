import PrimaryLogo from "@/components/PrimaryLogo";
import Welcome from "@/components/Welcome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = () => {
  return (
    <Row className="flex justify-center items-center bg-code-black h-screen w-full">
      <Col xl={6}>
        <PrimaryLogo />
      </Col>
      <Col xl={6}>
        <Welcome />
      </Col>
    </Row>
  );
};

export default Index;
