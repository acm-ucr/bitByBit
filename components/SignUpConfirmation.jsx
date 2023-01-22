import React from "react";

const SignUpConfirmation = () => {
  return (
    <>
      <div className="h-screen bg-slate-900 flex flex-col justify-between space-y-48">
        <div className="flex flex-col items-center pt-32">
          <div className="text-white text-5xl font-bold">All Done!</div>
        </div>
        <div className="flex flex-col items-center pb-32">
          <button className="text-black text-2xl font-bold bg-blue-300 rounded-full w-96 h-20 ring-4 ring-white">
            Continue to Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpConfirmation;
