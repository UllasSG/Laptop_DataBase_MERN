import React from "react";

const RamOptions = ({ handleRamChange }) => (
  <div className="radio-inputs">
    <label className="radio">
      <input
        type="radio"
        name="ramOption"
        value="4 GB"
        onChange={handleRamChange}
      />
      <span className="name">4 GB</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="ramOption"
        value="8 GB"
        onChange={handleRamChange}
      />
      <span className="name">8 GB</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="ramOption"
        value="16 GB"
        onChange={handleRamChange}
      />
      <span className="name">16 GB</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="ramOption"
        value="32 GB"
        onChange={handleRamChange}
      />
      <span className="name">32 GB</span>
    </label>
  </div>
);

export default RamOptions;
