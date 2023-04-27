import ProblemRecord from "@/components/ProblemRecord";
import ProblemsSolved from "@/components/ProblemsSolved";
// import Submissions from "@/components/Submissions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "@/components/Profile";
import UserContext from "@/components/UserContext";
import { useContext } from "react";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-code-black">
      <Row className="w-full">
        <Col xl={4}>
          {user ? (
            <Profile
              src={user.image}
              fullName={user.name}
              userName={user.username}
              joinDate={user.created}
            />
          ) : (
            <Profile joinDate="April 1st 2023" />
          )}
          <ProblemsSolved />
        </Col>
        <Col xl={8}>
          {/* <Submissions /> */}
          <ProblemRecord />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
