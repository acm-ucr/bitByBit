import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex justify-between items-center bg-red-500">
      <input
        className="text-black"
        type="search"
        placeholder="search questions"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <FaSearch className="text-3xl text-black hover:!text-blue-500 cursor-pointer" />
    </div>
  );
};

export default Search;
