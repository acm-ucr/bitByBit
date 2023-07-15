import ProblemRecord from "@/components/ProblemRecord";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "@/components/Profile";
import ProtectedPage from "@/components/ProtectedPage";

const ProfilePage = () => {
  return (
    <ProtectedPage title="Profile" restrictions={[]}>
      <div className="bg-code-black w-full h-min flex justify-center overscroll-none">
        <Row className="w-11/12">
          <Col xl={4}>{<Profile />}</Col>
          <Col xl={8}>
            <ProblemRecord />
          </Col>
        </Row>
      </div>
    </ProtectedPage>
  );
};

export default ProfilePage;
