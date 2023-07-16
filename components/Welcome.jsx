import { signIn } from "next-auth/react";

const Welcome = () => {
  return (
    <div className="bg-code-black w-full">
      <div className="flex flex-col items-center pt-32">
        <div className="text-white text-5xl font-bold mb-5 font-readex">
          Welcome!
        </div>
      </div>
      <div className="flex flex-col items-center pb-32">
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: `${window.location}/user/dashboard`,
              redirect: true,
            })
          }
          className="text-black text-2xl mb-4 rounded-full w-96 h-20 ring-4 ring-white font-bold bg-blue-300 font-readex"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
