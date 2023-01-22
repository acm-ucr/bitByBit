import React from "react";

const Welcome = () => {
  return (
    <div className="bg-black w-full">
      <div className="flex flex-col items-center pt-32">
        <div className="text-white text-5xl font-bold mb-5">Welcome!</div>
      </div>
      <div className="flex flex-col items-center pb-32">
        <button className="text-black text-2xl mb-4 rounded-full w-96 h-20 ring-4 ring-white font-bold bg-blue-300 ">
          Get Started
        </button>
        <button className="text-white text-2xl rounded-full w-96 h-20 ring-4 ring-white font-bold bg-black-500 ">
          I already have an account
        </button>
      </div>
    </div>
  );
};

export default Welcome;
