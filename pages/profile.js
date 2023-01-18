import ProblemRecord from "@/components/ProblemRecord";
import ProblemsSolved from "@/components/ProblemsSolved";
import Profile from "@/components/Profile";
import Submissions from "@/components/Submissions";
import React from "react";
import { Row, Col } from "react-bootstrap";

const profile = () => {
  return (
    <div>
      <Row>
        <Col>
          <Profile />
          <ProblemsSolved />
        </Col>
        <Col>
          <Submissions />
          <ProblemRecord />
        </Col>
      </Row>
    </div>
  );
};

export default profile;
