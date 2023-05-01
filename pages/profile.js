import ProblemRecord from "@/components/ProblemRecord";
import ProblemsSolved from "@/components/ProblemsSolved";
// import Submissions from "@/components/Submissions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "@/components/Profile";
import UserContext from "@/components/UserContext";
import { useContext } from "react";
import { Timestamp } from "firebase/firestore";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  const getDate = () => {
    const timestamp = new Timestamp(
      user.created.seconds,
      user.created.nanoseconds
    ).toDate();

    const nthNumber = (number) => {
      if (number > 3 && number < 21) return "th";
      switch (number % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const day = timestamp.getDate();
    const month = timestamp.toLocaleDateString("en-US", { month: "long" });
    const year = timestamp.getFullYear();

    const date = `${month} ${day}${nthNumber(day)}, ${year}`;

    return date;
  };

  return (
    <div className="bg-code-black overscroll-contain overflow-hidden h-full">
      <Row className="w-full">
        <Col xl={4}>
          {user ? (
            <Profile
              src={user.image}
              fullName={user.name}
              userName={user.username}
              joinDate={getDate()}
            />
          ) : (
            <Profile />
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
