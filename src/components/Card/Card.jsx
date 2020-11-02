import React from "react";
import "./card.css";

const Card = ({ fname, lname, email, phone, color, timeStamp, bids }) => {
  const fixDate = new Date(timeStamp);
  return (
    <div className="card">
      <div className="avatar" style={{ backgroundColor: color.toString() }}>
        <div className="init">
          {fname.charAt(0)}
          {lname.charAt(0)}
        </div>
      </div>
      <div className="fullname">
        <strong>
          {fname} {lname}
        </strong>
      </div>
      +{phone.toString().substr(0, 2)} {phone.toString().substr(2, 3)}{" "}
      {phone.toString().substr(5, 3)} {phone.toString().substr(8, 5)}
      <div className="email">{email}</div>
      <div className="badge bg-secondary ml-4 mr-4 mt-2 mb-2">
        {fixDate.toLocaleString("de-DE", {
          month: "short",
          day: "numeric",
          hour: "numeric",
        })}
      </div>
      {bids ? (
        <div className="badge bg-warning ml-5 mr-5 mt-2 mb-2">
          {bids.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}€
        </div>
      ) : null}
    </div>
  );
};
export default Card;
