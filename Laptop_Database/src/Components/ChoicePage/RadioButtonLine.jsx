import React, { useState } from "react";
import CompanyOptions from "./CompanyOptions";
import CpuOptions from "./CpuOptions";
import RamOptions from "./RamOptions";
import ScreenSizeOptions from "./ScreenSizeOptions";
import GraphicsOptions from "./GraphicsOptions";
import PriceInput from "./PriceInput";

function RadioButtonLine() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedCpu, setSelectedCpu] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedScreenSize, setSelectedScreenSize] = useState(null);
  const [selectedGraphics, setSelectedGraphics] = useState(null);
  const [enteredPrice, setEnteredPrice] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleCpuChange = (event) => {
    setSelectedCpu(event.target.value);
  };

  const handleRamChange = (event) => {
    setSelectedRam(event.target.value);
  };

  const handleScreenSizeChange = (event) => {
    setSelectedScreenSize(event.target.value);
  };

  const handleGraphicsChange = (event) => {
    setSelectedGraphics(event.target.value);
  };

  const handlePriceChange = (event) => {
    setEnteredPrice(event.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      company: selectedCompany,
      cpu: selectedCpu,
      ram: selectedRam,
      screenSize: selectedScreenSize,
      graphics: selectedGraphics,
      price: enteredPrice
    };

    console.log("Form Data:", formData);
  };

  const renderOptions = () => {
    switch (selectedOption) {
      case "Company":
        return <CompanyOptions handleCompanyChange={handleCompanyChange} />;
      case "CPU":
        return <CpuOptions handleCpuChange={handleCpuChange} />;
      case "Ram":
        return <RamOptions handleRamChange={handleRamChange} />;
      case "Scrn size":
        return (
          <ScreenSizeOptions handleScreenSizeChange={handleScreenSizeChange} />
        );
      case "Graphics":
        return <GraphicsOptions handleGraphicsChange={handleGraphicsChange} />;
      case "Price":
        return <PriceInput handlePriceChange={handlePriceChange} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="option"
          value="Company"
          checked={selectedOption === "Company"}
          onChange={handleOptionChange}
        />
        Company
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="CPU"
          checked={selectedOption === "CPU"}
          onChange={handleOptionChange}
        />
        CPU
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="Ram"
          checked={selectedOption === "Ram"}
          onChange={handleOptionChange}
        />
        Ram
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="Scrn size"
          checked={selectedOption === "Scrn size"}
          onChange={handleOptionChange}
        />
        Scrn size
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="Graphics"
          checked={selectedOption === "Graphics"}
          onChange={handleOptionChange}
        />
        Graphics
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="Price"
          checked={selectedOption === "Price"}
          onChange={handleOptionChange}
        />
        Price
      </label>

      {renderOptions()}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default RadioButtonLine;
