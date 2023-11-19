import React from "react";

const CpuOptions = ({ handleCpuChange }) => (
  <div>
    <label>
      <input
        type="radio"
        name="cpuOption"
        value="Intel i3"
        onChange={handleCpuChange}
      />
      Intel i3
    </label>
    <label>
      <input
        type="radio"
        name="cpuOption"
        value="Intel i5"
        onChange={handleCpuChange}
      />
      Intel i5
    </label>
    <label>
      <input
        type="radio"
        name="cpuOption"
        value="Intel i7"
        onChange={handleCpuChange}
      />
      Intel i7
    </label>
    <label>
      <input
        type="radio"
        name="cpuOption"
        value="Intel i9"
        onChange={handleCpuChange}
      />
      Intel i9
    </label>
    <label>
      <input
        type="radio"
        name="cpuOption"
        value="Ryzen 3"
        onChange={handleCpuChange}
      />
      Ryzen 3
    </label>
    <label>
      <input
        type="radio"
        name="cpuOption"
        value="Ryzen 5"
        onChange={handleCpuChange}
      />
      Ryzen 5
    </label>
    <label>
      <input
        type="radio"
        name="cpuOption"
        value="Ryzen 7"
        onChange={handleCpuChange}
      />
      Ryzen 7
    </label>
  </div>
);

export default CpuOptions;
