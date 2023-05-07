const Progress = ({
  variablesProgress,
  arraysProgress,
  conditionalsProgress,
  loopsProgress,
  functionsProgress,
  total,
}) => {
  return (
    <>
      <div className="bg-code-lightpurple rounded-3xl w-11/12 px-3 py-2 mb-4">
        <p className="flex font-medium text-3xl mb-2">Progress</p>
        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">variables</p>
          <p className="text-l mb-1">{`${variablesProgress}/${total}`}</p>
        </div>
        <progress
          className="progress progress-primary bg-code-lightpurple"
          value={variablesProgress}
          max={total}
        ></progress>

        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">arrays</p>
          <p className="text-l mb-1">6/15</p>
        </div>
        <progress
          className="progress progress-secondary bg-code-lightpurple"
          value={arraysProgress}
          max={total}
        ></progress>

        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">conditionals</p>
          <p className="text-l mb-1">8/15</p>
        </div>
        <progress
          className="progress progress-accent bg-code-lightpurple"
          value={conditionalsProgress}
          max={total}
        ></progress>

        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">loops</p>
          <p className="text-l mb-1">7/15</p>
        </div>
        <progress
          className="progress progress-success bg-code-lightpurple"
          value={loopsProgress}
          max={total}
        ></progress>

        <div className="flex justify-between items-end">
          <p className="text-2xl mb-1">functions</p>
          <p className="text-l mb-1">5/15</p>
        </div>
        <progress
          className="progress progress-info bg-code-lightpurple mb-1"
          value={functionsProgress}
          max={total}
        ></progress>
      </div>
    </>
  );
};

export default Progress;
