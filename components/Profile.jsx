import Image from "next/image";
import { HiPencil } from "react-icons/hi";

const Profile = ({ src, fullName, userName, joinDate, tags }) => {
  return (
    <div className="w-96 p-7 bg-code-darkpurple text-code-white rounded-3xl">
      <div className="flex justify-between items-start pb-2.5">
        <div className="w-48 h-48 mb-2 bg-gray-300 rounded-2xl relative">
          <Image
            src={src}
            className="rounded-2xl"
            alt={fullName + "'s profile picture"}
            fill
            unoptimized={true}
          />
        </div>
        <button>
          <HiPencil className="text-4xl" />
        </button>
      </div>
      <div className="text-3xl font-semibold">{userName}</div>
      <div className="text-xl font-normal">{fullName}</div>
      <div className="h-0.5 w-full bg-white rounded-sm my-4" />
      <div className="flex flex-wrap mb-2 gap-2">
        {tags.map((tag) => {
          return (
            <div
              key={tag.id}
              className="bg-white text-gray-800 px-2.5 py-0.5 text-lg rounded-2xl font-normal"
            >
              {tag}
            </div>
          );
        })}
      </div>
      <div className="text-sm font-light mt-4">member since {joinDate}</div>
    </div>
  );
};

export default Profile;
