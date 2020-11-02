import React from "react";
import "./statsbar.css";

const StatsBar = ({ total, newOffer, viewed, appointment, other }) => {
  return (
    <div className="topright">
      <ul>
        <li>
          {total} <div>Total</div>
        </li>
        <li>
          {newOffer} <div>New</div>
        </li>
        <li>
          {viewed} <div>Viewed</div>
        </li>
        <li>
          {appointment} <div>Appointment</div>
        </li>
        <li>
          {other} <div>Others</div>
        </li>
      </ul>
    </div>
  );
};
export default StatsBar;
