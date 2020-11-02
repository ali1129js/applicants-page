import React, { useState } from "react";

const BidsDrop = () => {
  const [value, setValue] = useState("");
  return (
    <form>
      <select
        className="form-select m-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option defaultValue>Bids</option>
        <option value="50">50.000€</option>
        <option value="100">100.000€ </option>
        <option value="200">200.000€</option>
        <option value="250">250.000€</option>
      </select>
    </form>
  );
};
export default BidsDrop;
