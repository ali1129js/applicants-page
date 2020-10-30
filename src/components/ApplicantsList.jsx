import React from "react";
import Card from "./Card/Card";

const ApplicantsList = ({ applicants, searchValue }) => {
  if (!applicants) return null;
  if (!applicants.length) return <p>No applicants, sorry</p>;
  if (searchValue === null) {
    return (
      <div className="row">
        {applicants.map((applicant) => {
          return (
            <Card
              key={applicant.id}
              fname={applicant.fname}
              lname={applicant.lname}
              email={applicant.email}
              phone={applicant.phone}
            />
          );
        })}
      </div>
    );
  } else {
    const filtered = applicants.filter(
      (person) =>
        person.fname.toLowerCase().includes(searchValue.toLowerCase()) ||
        person.lname.toLowerCase().includes(searchValue.toLowerCase()) ||
        person.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div className="row">
        {filtered.map((applicant) => {
          return (
            <Card
              key={applicant.id}
              fname={applicant.fname}
              lname={applicant.lname}
              email={applicant.email}
              phone={applicant.phone}
            />
          );
        })}
      </div>
    );
  }
};
export default ApplicantsList;
