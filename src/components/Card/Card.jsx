import React from "react";
import "./card.css";

const colorGen = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
const Card = ({ fname, lname, email, phone, color, timeStamp }) => {
  const fixDate = new Date(timeStamp);
  return (
    <div className="card">
      <div className="avatar" style={{ backgroundColor: colorGen() }}>
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
      {phone}
      <div className="email">{email}</div>
      <div className="alert alert-info m-4">
        VIEWED{": "}
        {fixDate.toLocaleString("de-DE", {
          month: "short",
          day: "numeric",
          hour: "numeric",
        })}
      </div>
    </div>
  );
};
export default Card;
