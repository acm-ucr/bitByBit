import { useState } from "react";
import Filter from "./Filter";

const tags = [
  {
    name: "variables",
    color: "bg-code-yellow",
  },
  {
    name: "arrays",
    color: "bg-code-lime",
  },
  {
    name: "conditionals",
    color: "bg-code-lightpink",
  },
  {
    name: "loops",
    color: "bg-code-yellow",
  },
  {
    name: "functions",
    color: "bg-code-blue",
  },
];

const difficulties = [
  {
    name: "easy",
    color: "bg-code-lightgreen",
  },
  {
    name: "medium",
    color: "bg-code-yellow",
  },
  {
    name: "hard",
    color: "bg-code-lightpink",
  },
];

const Filters = () => {
  const [filtered, setFiltered] = useState([]);

  const clearAll = () => {
    setFiltered([]);
  };

  const submitFilter = () => {
    console.log(filtered)
    window.location.reload(true)
  };

  return (
    <div className="rounded-3xl p-3 pt-2 w-11/12 font-readex text-code-white bg-code-darkerpurple">
      <div className="flex text-lg justify-between mb-2 mr-0">
        <div className="text-3xl">Filters</div>
        <button className="text-2xl font-extralight" onClick={clearAll}>
          clear all
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-1 text-2xl">Tags</div>
        <div className="flex flex-wrap gap-1 pb-2 font-light">
          {tags.map((tag, index) => (
            <Filter
              setFiltered={setFiltered}
              filtered={filtered}
              color={tag.color}
              name={tag.name}
              key={index}
            />
          ))}
        </div>
        <div className="mb-1 text-2xl">Difficulty</div>
        <div className="flex flex-wrap gap-1 font-light">
          {difficulties.map((difficulty, index) => (
            <Filter
              setFiltered={setFiltered}
              filtered={filtered}
              color={difficulty.color}
              name={difficulty.name}
              key={index}
            />
          ))}
        </div>
      </div>
      <button className="text-2xl font-extralight float-right" onClick={submitFilter}>
          submit
      </button>
    </div>
  );
};

export default Filters;
