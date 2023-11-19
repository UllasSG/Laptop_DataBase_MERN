// ScreenSizeOptions.js
import React from "react";

const ScreenSizeOptions = ({ handleScreenSizeChange }) => (
  <div>
    <label>
      <input
        type="radio"
        name="screenSizeOption"
        value="13.3 in"
        onChange={handleScreenSizeChange}
      />
      13.3 in
    </label>
    <label>
      <input
        type="radio"
        name="screenSizeOption"
        value="14 in"
        onChange={handleScreenSizeChange}
      />
      14 in
    </label>
    <label>
      <input
        type="radio"
        name="screenSizeOption"
        value="15.6 in"
        onChange={handleScreenSizeChange}
      />
      15.6 in
    </label>
    <label>
      <input
        type="radio"
        name="screenSizeOption"
        value="17.3 in"
        onChange={handleScreenSizeChange}
      />
      17.3 in
    </label>
  </div>
);

export default ScreenSizeOptions;
