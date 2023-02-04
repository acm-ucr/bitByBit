import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex justify-between items-center">
      <div className="bg-white flex border-black border-2 rounded-full p-2">
        <FaSearch className="text-3xl text-black hover:!text-blue-500 cursor-pointer mx-2" />
        <input
          className="text-black outline-none"
          type="search"
          placeholder="search questions"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </div>
      <button className="flex items-center py-2 pl-1.5 pr-2.5 bg-code-green rounded-full font-readex">
        <FaRandom className="text-3xl text-code-black mx-1.5"/>
        random
      </button>
    </div>
  );
};

export default Search;
