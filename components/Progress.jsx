import React from "react";

const Progress = () => {
  return (
    <>
      <div className="bg-code-lightpurple rounded-3xl px-3 py-2 w-full">
        <p className="flex font-medium text-3xl mb-2">Progress</p>
        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">variables</p>
          <p className="text-l mb-1">5/15</p>
        </div>
        <div className="flex bg-code-white text-black-500 rounded-full w-full h-3 mb-3">
          <div className="bg-code-yellow text-black-500 rounded-full w-1/3 z-10"></div>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">arrays</p>
          <p className="text-l mb-1">6/15</p>
        </div>
        <div className="flex bg-code-white text-black-500 rounded-full w-full h-3 mb-3">
          <div className="bg-code-lime text-black-500 rounded-full w-2/5 z-10"></div>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">conditionals</p>
          <p className="text-l mb-1">8/15</p>
        </div>
        <div className="flex bg-code-white text-black-500 rounded-full w-full h-3 mb-3">
          <div className="bg-code-lightpink text-black-500 rounded-full w-6/12 z-10"></div>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">loops</p>
          <p className="text-l mb-1">7/15</p>
        </div>
        <div className="flex bg-code-white text-black-500 rounded-full w-full h-3 mb-3">
          <div className="bg-code-pink text-black-500 rounded-full w-5/12 z-10"></div>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">functions</p>
          <p className="text-l mb-1">5/15</p>
        </div>
        <div className="flex bg-code-white text-black-500 rounded-full w-full h-3 mb-3">
          <div className="bg-code-blue text-black-500 rounded-full w-1/3 z-10"></div>
        </div>
      </div>
    </>
  );
};

export default Progress;
