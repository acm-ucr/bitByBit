import React from "react";
import Filter from "./Filter";

const Filters = () => {
  return (
    <div className="rounded-3xl p-3 pt-2 w-3/4 font-readex text-code-white bg-code-darkerpurple">
      <div className="flex text-lg justify-between mb-2 mr-10">
        <div className="text-xl">Filters</div>
        <div className="font-light">clear all</div>
      </div>
      <div className="flex flex-col">
        <div className="mb-1 text-xl">Tags</div>
        <div className="flex flex-wrap gap-1 pb-2 font-light">
          <Filter color="yellow" name="variables" />
          <Filter color="lime" name="arrays" />
          <Filter color="lightpink" name="conditionals" />
          <Filter color="lightpurple" name="loops" />
          <Filter color="blue" name="functions" />
        </div>
        <div className="mb-1 text-xl">Difficulty</div>
        <div className="flex flex-wrap gap-1 font-light">
          <Filter color="lightgreen" name="easy" />
          <Filter color="yellow" name="medium" />
          <Filter color="lightpink" name="hard" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
