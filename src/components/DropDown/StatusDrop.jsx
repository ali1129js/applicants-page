import React, { useState } from "react";

const StatusDrop = () => {
  const [value, setValue] = useState("");
  return (
    <form>
      <select
        className="form-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option defaultValue>Status</option>
        <option value="appointment">Appointment set</option>
        <option value="viewed">Property Viewed </option>
        <option value="other">Interested</option>
        <option value="offer">Offer Accepted</option>
      </select>
    </form>
  );
};
export default StatusDrop;
