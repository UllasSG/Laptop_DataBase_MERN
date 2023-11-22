import React from "react";

const ScreenSizeOptions = ({ handleScreenSizeChange }) => (
  <div className="radio-inputs">

    <label className="radio">
      <input
        type="radio"
        name="screenSizeOption"
        value="14 inches"
        onChange={handleScreenSizeChange}
      />
      <span className="name">14 inches</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="screenSizeOption"
        value="15.6 inches"
        onChange={handleScreenSizeChange}
      />
      <span className="name">15.6 inches</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="screenSizeOption"
        value="17.3 inches"
        onChange={handleScreenSizeChange}
      />
      <span className="name">17.3 inches</span>
    </label>
  </div>
);

export default ScreenSizeOptions;
