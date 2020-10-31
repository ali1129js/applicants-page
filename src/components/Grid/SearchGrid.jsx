import React from "react";
import Card from "../Card/Card";

const SearchGrid = ({ applicants }) => {
  const countAppointments = applicants.filter((ele) => ele.appointment);
  const countViewed = applicants.filter((ele) => ele.viewed);
  const countInterested = applicants.filter((ele) => ele.interested);
  const countOffer = applicants.filter((ele) => ele.offer);
  return (
    <div className="grid">
      <div className="row">
        <div className="cataTitle h2 m-3">
          Appointment set({countAppointments.length})
        </div>
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
        <div className="cataTitle h2 m-3">
          Property Viewed({countViewed.length})
        </div>
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
        <div className="cataTitle h2 m-3">
          Interested({countInterested.length})
        </div>
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
        <div className="cataTitle h3 m-3">
          Offer Accepted({countOffer.length})
        </div>
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
