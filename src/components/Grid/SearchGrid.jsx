import React from "react";
import Card from "../Card/Card";

const SearchGrid = ({ applicants }) => {
  return (
    <div className="grid">
      <div className="row">
        <div className="cataTitle h2 m-3">Appointment set(3)</div>
        {applicants.map((applicant) => {
          if (applicant.appointment) {
            return (
              <Card
                key={applicant.id}
                fname={applicant.fname}
                lname={applicant.lname}
                email={applicant.email}
                phone={applicant.phone}
                color={applicant.color}
                timeStamp={applicant.appointment}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="row">
        <div className="cataTitle h2 m-3">Property Viewed(5)</div>
        {applicants.map((applicant) => {
          if (applicant.viewed) {
            return (
              <Card
                key={applicant.id}
                fname={applicant.fname}
                lname={applicant.lname}
                email={applicant.email}
                phone={applicant.phone}
                color={applicant.color}
                timeStamp={applicant.viewed}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="row">
        <div className="cataTitle h2 m-3">Interested(6)</div>
        {applicants.map((applicant) => {
          if (applicant.interested) {
            return (
              <Card
                key={applicant.id}
                fname={applicant.fname}
                lname={applicant.lname}
                email={applicant.email}
                phone={applicant.phone}
                color={applicant.color}
                timeStamp={applicant.interested}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="row">
        <div className="cataTitle h3 m-3">Offer Accepted(10)</div>
        {applicants.map((applicant) => {
          if (applicant.offer) {
            return (
              <Card
                key={applicant.id}
                fname={applicant.fname}
                lname={applicant.lname}
                email={applicant.email}
                phone={applicant.phone}
                color={applicant.color}
                timeStamp={applicant.offer}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
export default SearchGrid;
