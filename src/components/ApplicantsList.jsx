import React from "react";
import DefaultGrid from "./Grid/DefaultGrid";
import SearchGrid from "./Grid/SearchGrid";

const ApplicantsList = ({ applicants, searchValue }) => {
  if (!applicants) return null;

  if (searchValue === null) {
    return <DefaultGrid applicants={applicants} />;
  } else {
    const filtered = applicants.filter(
      (person) =>
        person.fname.toLowerCase().includes(searchValue.toLowerCase()) ||
        person.lname.toLowerCase().includes(searchValue.toLowerCase()) ||
        person.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    return <SearchGrid applicants={filtered} />;
  }
};
export default ApplicantsList;
