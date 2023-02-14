import React from "react";

const Filter = ({ color, name }) => {
  return (
    <div>
      <div
        className={` flex border-code-white border-2 px-2 ${color} rounded-full text-code-black`}
      >
        {name}
        {" x"}
      </div>
    </div>
  );
};

export default Filter;
