import React from "react";

const Filter = ({ color, name }) => {
  return (
    <div>
      <div
        className={` flex border-code-white text-2xl font-extralight border-2 px-2 py-1 ${color} rounded-full text-code-black`}
      >
        {name}
        {" x"}
      </div>
    </div>
  );
};

export default Filter;
