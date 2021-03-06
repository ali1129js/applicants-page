import React from "react";
import Card from "../Card/Card";

const SearchGrid = ({ applicants }) => {
  const countAppointments = applicants.filter((ele) => ele.appointment);
  const countViewed = applicants.filter((ele) => ele.viewed);
  const countInterested = applicants.filter((ele) => ele.interested);
  const countOffer = applicants.filter((ele) => ele.offer);
  if (!applicants.length) {
    return (
      <div className="h2 m-5">
        <p>No applicants, sorry</p>
      </div>
    );
  }
  return (
    <div className="grid">
      <div className="row m-2">
        <div className="cataTitle h4 m-3">
          <strong>Appointment set ({countAppointments.length})</strong>
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
                bids={applicant.bid}
                title={"appointment"}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="row m-2">
        <div className="cataTitle h4 m-3">
          <strong>Property Viewed ({countViewed.length})</strong>
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
                bids={applicant.bid}
                title={"viewed"}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="row m-2">
        <div className="cataTitle h4 m-3">
          <strong>Interested ({countInterested.length})</strong>
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
                bids={applicant.bid}
                title={"viewed"}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="row m-2">
        <div className="cataTitle h4 m-3">
          <strong>Offer Accepted ({countOffer.length})</strong>
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
                bids={applicant.bid}
                title={"offer"}
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
