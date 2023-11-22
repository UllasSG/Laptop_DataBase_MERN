import React from "react";

const GraphicsOptions = ({ handleGraphicsChange }) => (
  <div className="radio-inputs">
    <label className="radio">
      <input
        type="radio"
        name="graphicsOption"
        value="grated"
        onChange={handleGraphicsChange}
      />
      <span className="name">Integrated</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="graphicsOption"
        value="edica"
        onChange={handleGraphicsChange}
      />
      <span className="name">Dedicated</span>
    </label>
  </div>
);

export default GraphicsOptions;
