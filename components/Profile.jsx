import Image from "next/image";
import { HiPencil, HiX } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  const date = new Date(session.user.start);

  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const updateContext = (tempUser) => {
    console.log(session.user.id, tempUser);
    console.log(newUserName);
    axios
      .post("/api/updateUserInfo", { uid: session.user.id, newName: tempUser })
      .finally(() => setIsEditing(false));
  };

  const updateProfileComponent = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
    setNewUserName("");
  };

  return (
    <div className="w-10/12 p-7 m-4 bg-code-darkpurple text-code-white rounded-3xl">
      <div className="flex justify-between items-start pb-2.5">
        <div className="w-48 h-48 mb-2 bg-gray-300 rounded-2xl relative">
          <Image
            src={session.user.image}
            className="rounded-2xl"
            alt={session.user.name + "'s profile picture"}
            fill
            unoptimized={true}
          />
        </div>
        <button onClick={(e) => updateProfileComponent()}>
          {!isEditing ? (
            <HiPencil className="text-4xl" />
          ) : (
            <HiX className="text-4xl" />
          )}
        </button>
      </div>
      {!isEditing ? (
        <div className="text-3xl font-semibold">
          {newUserName === "" ? session.user.username : newUserName}
        </div>
      ) : (
        <div className="grid max-w-80 gap-1">
          Change username
          <input
            className="text-lg rounded w-full h-9 text-code-black pl-2"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <button
            className="justify-self-end rounded-full h-7 w-24 bg-code-lime text-code-black font-bold"
            onClick={() => {
              updateContext(newUserName);
            }}
          >
            Save
          </button>
        </div>
      )}
      <div className="text-xl font-normal">{session.user.name}</div>
      <div className="h-0.5 w-full bg-white rounded-sm my-4" />
      <div className="text-sm font-light mt-4">
        member since{" "}
        {date.toLocaleString("en-US", { month: "long" }) +
          " " +
          date.getFullYear()}
      </div>
    </div>
  );
};

export default Profile;
