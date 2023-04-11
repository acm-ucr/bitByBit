import { useMemo } from "react";

const Filter = ({ color, name, setFiltered, filtered }) => {
  const isActive = useMemo(() => {
    return filtered.includes(name);
  }, [filtered, name]);

  const handleClick = () => {
    if (!isActive) {
      setFiltered([...filtered, name]);
    } else {
      setFiltered(filtered.filter((item) => item !== name));
    }
  };

  return (
    <div className="hover:cursor-pointer select-none" onClick={handleClick}>
      {isActive ? (
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
