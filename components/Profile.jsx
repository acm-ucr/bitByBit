import Image from "next/image";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  const date = new Date(session.user.start);

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
      </div>
      <div className="text-3xl font-semibold">{session.user.name}</div>
      <div className="h-0.5 w-full bg-white rounded-sm my-3" />
      <div className="text-sm font-light mt-2">
        member since{" "}
        {date.toLocaleString("en-US", { month: "long" }) +
          " " +
          date.getFullYear()}
      </div>
    </div>
  );
};

export default Profile;
