import React from "react";
import Filter from "./Filter";

const Filters = () => {
  return (
    <div className="rounded-3xl p-3 pt-2 w-11/12 font-readex text-code-white bg-code-darkerpurple">
      <div className="flex text-lg justify-between mb-2 mr-10">
        <div className="text-3xl">Filters</div>
        <div className="text-2xl font-extralight">clear all</div>
      </div>
      <div className="flex flex-col">
        <div className="mb-1 text-2xl">Tags</div>
        <div className="flex flex-wrap gap-1 pb-2 font-light">
          <Filter color="bg-code-yellow" name="variables" />
          <Filter color="bg-code-lime" name="arrays" />
          <Filter color="bg-code-lightpink" name="conditionals" />
          <Filter color="bg-code-lightpurple" name="loops" />
          <Filter color="bg-code-blue" name="functions" />
        </div>
        <div className="mb-1 text-2xl">Difficulty</div>
        <div className="flex flex-wrap gap-1 font-light">
          <Filter color="bg-code-lightgreen" name="easy" />
          <Filter color="bg-code-yellow" name="medium" />
          <Filter color="bg-code-lightpink" name="hard" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
