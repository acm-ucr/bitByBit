import ProblemRecord from "@/components/ProblemRecord";
import ProblemsSolved from "@/components/ProblemsSolved";
// import Profile from "@/components/Profile";
import Submissions from "@/components/Submissions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "@/components/Profile";

const profile = () => {
  return (
    <div className="bg-code-black pt-16">
      <Row className="w-full">
        <Col xl={4}>
          <Profile
            fullName="Ashley Kim"
            userName="Ashley Kim"
            joinDate="April 1st 2023"
          />
          <ProblemsSolved />
        </Col>
        <Col xl={8}>
          <Submissions />
          <ProblemRecord />
        </Col>
      </Row>
    </div>
  );
};

export default profile;
