import React from "react";

const GraphicsOptions = ({ handleGraphicsChange }) => (
  <div>
    <label>
      <input
        type="radio"
        name="graphicsOption"
        value="Dedicated"
        onChange={handleGraphicsChange}
      />
      Dedicated
    </label>
    <label>
      <input
        type="radio"
        name="graphicsOption"
        value="Integrated"
        onChange={handleGraphicsChange}
      />
      Integrated
    </label>
  </div>
);

export default GraphicsOptions;
