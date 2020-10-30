import React from "react";
import "./card.css";

const colorGen = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
const Card = ({ fname, lname, email, phone }) => {
  return (
    <div className="card">
      <div className="avatar" style={{ backgroundColor: colorGen() }}>
        <div className="init">
          {fname.charAt(0)}
          {lname.charAt(0)}
        </div>
      </div>
      <div className="">
        <strong>
          {fname} {lname}
        </strong>
      </div>
      {phone}
      <div className="">{email}</div>
    </div>
  );
};
export default Card;
