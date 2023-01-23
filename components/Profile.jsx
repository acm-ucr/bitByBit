import React from "react";
import Image from "next/image";

const Profile = () => {
  const profilePicSrc = "";
  const userName = "akim291";
  const fullName = "Ashley Kim";
  const joinDate = "01.08.23";
  const tags = ["javascript"];
  return (
    <div className="w-full p-7 bg-indigo-900 text-white rounded-3xl">
      <div className="flex justify-between items-start pb-2">
        <div className="w-48 h-48 mb-2 bg-gray-300 rounded-2xl relative">
          <Image
            src={profilePicSrc}
            className="rounded-2xl"
            alt={fullName + "'s profile picture"}
            fill
            unoptimized={true}
          />
        </div>
        <button className="hover:scale-110">
          {
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.7542 9.75929L19.2021 3.28429L21.3604 1.12596C21.9514 0.534988 22.6775 0.239502 23.5388 0.239502C24.399 0.239502 25.1247 0.534988 25.7156 1.12596L27.874 3.28429C28.4649 3.87527 28.7733 4.58854 28.799 5.42413C28.8247 6.25868 28.542 6.97145 27.951 7.56242L25.7542 9.75929ZM23.5188 12.0333L7.17708 28.3749H0.625V21.8228L16.9667 5.48117L23.5188 12.0333Z"
                fill="white"
              />
            </svg>
          }
        </button>
      </div>
      <div className="text-3xl font-bold">{userName}</div>
      <div className="text-xl font-normal">{fullName}</div>
      <div className="h-0.5 w-full bg-white rounded-sm my-3" />
      <div className="flex flex-wrap mt-2 mb-2 gap-2">
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
