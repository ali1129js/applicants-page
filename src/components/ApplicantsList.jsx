import React from "react";
import Card from "./Card";

const ApplicantsList = ({ applicants }) => {
  if (!applicants) return null;
  if (!applicants.length) return <p>No applicants, sorry</p>;
  return (
    <>
      {applicants.map((applicant) => {
        return (
          <Card
            key={applicant.id}
            fname={applicant.fname}
            lname={applicant.lname}
            email={applicant.email}
          />
        );
      })}
    </>
  );
};
export default ApplicantsList;
