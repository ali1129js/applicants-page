import React from "react";
import { GoSearch } from "react-icons/go";
const Search = (props) => {
  const handleInputChanges = (e) => {
    props.search(e.target.value);
  };

  return (
    <>
      <form>
        <div className="addicon">
          <GoSearch />

          <input
            onChange={handleInputChanges}
            type="text"
            className="form-control-lg"
            placeholder="Search for an applicant"
          />
        </div>
      </form>
    </>
  );
};
export default Search;
/*
<div className="row mt-5">{searchResults()}</div>
*/
