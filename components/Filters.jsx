import React, { useState } from "react";
import Filter from "./Filter";

const Filters = () => {
  const [filtered, setFiltered] = useState([]);

  const clearAll = () => {
    setFiltered([]);
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
          <Filter
            setFiltered={setFiltered}
            filtered={filtered}
            color="bg-code-yellow"
            name="variables"
          />
          <Filter
            setFiltered={setFiltered}
            filtered={filtered}
            color="bg-code-lime"
            name="arrays"
          />
          <Filter
            setFiltered={setFiltered}
            filtered={filtered}
            color="bg-code-lightpink"
            name="conditionals"
          />
          <Filter
            setFiltered={setFiltered}
            filtered={filtered}
            color="bg-code-lightpurple"
            name="loops"
          />
          <Filter
            setFiltered={setFiltered}
            filtered={filtered}
            color="bg-code-blue"
            name="functions"
          />
        </div>
        <div className="mb-1 text-2xl">Difficulty</div>
        <div className="flex flex-wrap gap-1 font-light">
          <Filter
            setFiltered={setFiltered}
            filtered={filtered}
            color="bg-code-lightgreen"
            name="easy"
          />
          <Filter
            setFiltered={setFiltered}
            filtered={filtered}
            color="bg-code-yellow"
            name="medium"
          />
          <Filter
            setFiltered={setFiltered}
            filtered={filtered}
            color="bg-code-lightpink"
            name="hard"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
