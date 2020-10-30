import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  // const searchResults = () => {
  //   if (props.results) {
  //     const resVal = props.results.map(block => (
  //       <TitleComponent
  //         key={block.id}
  //         title={block.title}
  //         overview={block.overview}
  //         poster={block.poster_path}
  //         votes={block.vote_average}
  //         backdrop={block.backdrop_path}
  //       />
  //     ));
  //     return resVal;
  //   }
  // };
  const handleInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const resetInputField = () => {
    setSearchValue("");
  };
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  return (
    <>
      <form className="search">
        <input
          value={searchValue}
          onChange={handleInputChanges}
          type="text"
          placeholder="Search for applicant"
        />
        <input onClick={callSearchFunction} type="submit" value="Search" />
      </form>
    </>
  );
};
export default Search;
/*
<div className="row mt-5">{searchResults()}</div>
*/
