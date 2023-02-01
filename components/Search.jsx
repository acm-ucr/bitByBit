import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

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
    </div>
  );
};

export default Search;
