import React, { useState } from "react";

const Filter = ({ color, name, setFiltered, filtered }) => {
  const [active, setActive] = useState(0);
  const handleClick = () => {
    if (!active) {
      setActive(1);
      setFiltered([...filtered, name]);
    } else {
      setActive(0);
      setFiltered(filtered.filter((item) => item !== name));
    }
  };
  return (
    <div className="hover:cursor-pointer select-none" onClick={handleClick}>
      {active ? (
        <div
          className={` flex border-code-white text-2xl font-extralight border-2 px-2 py-1 ${color} rounded-full text-code-black`}
        >
          {name}
        </div>
      ) : (
        <div
          className={` flex border-code-white text-2xl font-extralight border-2 px-2 py-1 rounded-full text-code-white`}
        >
          {name}
        </div>
      )}
    </div>
  );
};

export default Filter;
