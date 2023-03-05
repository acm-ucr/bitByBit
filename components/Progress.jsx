import React from "react";

const Progress = ({
  variableProgress,
  arraysProgress,
  conditionalsProgress,
  loopsProgress,
  functionsProgress,
}) => {
  return (
    <>
      <div className="bg-code-lightpurple rounded-3xl w-11/12 px-3 py-2 mb-4">
        <p className="flex font-medium text-3xl mb-2">Progress</p>
        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">variables</p>
          <p className="text-l mb-1">5/15</p>
        </div>
        <progress
          className="progress progress-primary bg-white"
          value={variableProgress}
          max="100"
        ></progress>

        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">arrays</p>
          <p className="text-l mb-1">6/15</p>
        </div>
        <progress
          className="progress progress-secondary bg-white"
          value={arraysProgress}
          max="100"
        ></progress>

        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">conditionals</p>
          <p className="text-l mb-1">8/15</p>
        </div>
        <progress
          className="progress progress-accent bg-white"
          value={conditionalsProgress}
          max="100"
        ></progress>

        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">loops</p>
          <p className="text-l mb-1">7/15</p>
        </div>
        <progress
          className="progress progress-success bg-white"
          value={loopsProgress}
          max="100"
        ></progress>

        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">functions</p>
          <p className="text-l mb-1">5/15</p>
        </div>
        <progress
          className="progress progress-info bg-white mb-1"
          value={functionsProgress}
          max="100"
        ></progress>
      </div>
    </>
  );
};

export default Progress;
