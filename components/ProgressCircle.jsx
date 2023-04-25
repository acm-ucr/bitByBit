const ProgressCircle = ({ completed, index }) => {
  const radius = 7;
  const circleWidth = 40;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray - (dashArray * 62) / 100;
  let strkColor = "";
  if (index % 2 == 0) {
    strkColor = "stroke-code-darkerpurple";
  } else strkColor = "stroke-code-darkpurple";
  return completed ? (
    <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={`0 0 ${circleWidth} ${circleWidth}`}
    >
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        strokeWidth="19px"
        className="fill-none stroke-code-white"
      />
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        strokeWidth="14px"
        style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
        className={`fill-none ${strkColor}`}
        transform={`rotate(45 ${circleWidth / 2} ${circleWidth / 2})`}
      />
    </svg>
  ) : (
    <svg width="40" height="40" viewBox={`0 0 40 40`}>
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        strokeWidth="19px"
        className="fill-none stroke-code-white"
      />
      <path
        className={`fill-none ${strkColor}`}
        strokeWidth="3px"
        d="M12 20l5 6 11-11"
      />
    </svg>
  );
};

export default ProgressCircle;
