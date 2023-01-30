import PrimaryLogo from "@/components/PrimaryLogo";
import Welcome from "@/components/Welcome";
import { Col, Row } from "react-bootstrap";

const Index = () => {
  return (
    <Row className="flex justify-center items-center">
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
