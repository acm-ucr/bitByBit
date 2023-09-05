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
      <div
        className={`flex border-code-white text-2xl font-light border-2 px-2 py-1  ${
          isActive
            ? `${color} !text-code-black`
            : `hover:bg-code-lightpurple hover:!text-code-black  !text-code-white`
        } rounded`}
      >
        {name}
      </div>
    </div>
  );
};

export default Filter;
