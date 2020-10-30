import React from "react";
import Card from "./Card/Card";

const ApplicantsList = ({ applicants }) => {
  if (!applicants) return null;
  if (!applicants.length) return <p>No applicants, sorry</p>;
  return (
    //status
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
};
export default ApplicantsList;
