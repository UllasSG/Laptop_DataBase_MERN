import React from "react";

const RamOptions = ({ handleRamChange }) => (
  <div>
    <label>
      <input
        type="radio"
        name="ramOption"
        value="4 GB"
        onChange={handleRamChange}
      />
      4 GB
    </label>
    <label>
      <input
        type="radio"
        name="ramOption"
        value="8 GB"
        onChange={handleRamChange}
      />
      8 GB
    </label>
    <label>
      <input
        type="radio"
        name="ramOption"
        value="16 GB"
        onChange={handleRamChange}
      />
      16 GB
    </label>
    <label>
      <input
        type="radio"
        name="ramOption"
        value="32 GB"
        onChange={handleRamChange}
      />
      32 GB
    </label>
  </div>
);

export default RamOptions;
