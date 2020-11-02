import React from "react";

const Search = (props) => {
  const handleInputChanges = (e) => {
    props.search(e.target.value);
  };

  return (
    <>
      <form>
        <input
          onChange={handleInputChanges}
          type="text"
          className="form-control-lg"
          placeholder="Search for an applicant"
        />
      </form>
    </>
  );
};
export default Search;
/*
<div className="row mt-5">{searchResults()}</div>
*/
