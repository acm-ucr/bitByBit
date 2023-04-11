const ProblemCategory = ({ difficulty, solved, total, color }) => {
  return (
    <div>
      <div className="flex flex-wrap self-center justify-between text-2xl py-2">
        <div className="font-medium">{difficulty}</div>
        <div className="flex items-center rounded-xl font-medium">
          <div className="font-normal bg-black rounded-l-lg text-white text-2xl px-2">
            {solved}
          </div>
          <div className={`font-normal ${color} rounded-r-lg text-2xl px-2`}>
            {total}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCategory;
