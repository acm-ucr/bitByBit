import React, {useState} from "react";

const Search = () => {

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div id = "searchQuestions">
      <input
        type="search"
        placeholder="search questions"
        onChange={handleChange}
        value={searchInput} 
        

        style = {{color: "red"}}
        // <style>
        //   {
        //     .searchBar
        //     {
        //       back
        //     }
        //   }
        // </style>
        
        
        // style = {border = 60}

        // style = {border:5}
        
        // style={{
        //   .oval {

        //   }
        // }}

        // <style type="text/css">
        //   .oval {
        //     border-radius: 50%

        //   }
        // </style>
        />
        <button style = {{}}>
          
          random
        </button>
      
    </div>
  );
};

export default Search;

