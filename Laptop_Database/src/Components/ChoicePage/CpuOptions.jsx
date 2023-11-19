import React from "react";

const CpuOptions = ({ handleCpuChange }) => (
  <div className="radio-inputs">
    <label className="radio">
      <input
        type="radio"
        name="cpuOption"
        value="Intel i3"
        onChange={handleCpuChange}
      />
      <span className="name">Intel i3</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="cpuOption"
        value="Intel i5"
        onChange={handleCpuChange}
      />
      <span className="name">Intel i5</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="cpuOption"
        value="Intel i7"
        onChange={handleCpuChange}
      />
      <span className="name">Intel i7</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="cpuOption"
        value="Intel i9"
        onChange={handleCpuChange}
      />
      <span className="name">Intel i9</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="cpuOption"
        value="Ryzen 3"
        onChange={handleCpuChange}
      />
      <span className="name">Ryzen 3</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="cpuOption"
        value="Ryzen 5"
        onChange={handleCpuChange}
      />
      <span className="name">Ryzen 5</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="cpuOption"
        value="Ryzen 7"
        onChange={handleCpuChange}
      />
      <span className="name">Ryzen 7</span>
    </label>
  </div>
);

export default CpuOptions;
