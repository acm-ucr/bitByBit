import ProblemRecord from "@/components/ProblemRecord";
import ProblemsSolved from "@/components/ProblemsSolved";
// import Profile from "@/components/Profile";
import Submissions from "@/components/Submissions";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const profile = () => {
  return (
    <div className="bg-code-black pt-16">
      <Row className="w-full">
        <Col xl={4}>
          <ProblemsSolved />
        </Col>
        <Col xl={8}>
          <Submissions />
        </Col>
        <ProblemRecord />
      </Row>
    </div>
  );
};

export default profile;
