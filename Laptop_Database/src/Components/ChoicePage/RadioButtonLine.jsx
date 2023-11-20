
import React, { useState } from "react";
import CompanyOptions from "./CompanyOptions";
import CpuOptions from "./CpuOptions";
import RamOptions from "./RamOptions";
import ScreenSizeOptions from "./ScreenSizeOptions";
import GraphicsOptions from "./GraphicsOptions";
import PriceInput from "./PriceInput";
import "./ChoicePage.css";
import data from "../../data";
import {Link} from 'react-router-dom'

function RadioButtonLine() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedCpu, setSelectedCpu] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedScreenSize, setSelectedScreenSize] = useState(null);
  const [selectedGraphics, setSelectedGraphics] = useState(null);
  const [enteredPrice, setEnteredPrice] = useState("");
  const [selection, setSelection] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    setSelection((prevSelection) => prevSelection + "  " + event.target.value);
  };


  const handleCpuChange = (event) => {
    setSelectedCpu(event.target.value);
    setSelection((prevSelection) => prevSelection + "  " + event.target.value);
  };

  const handleRamChange = (event) => {
    setSelectedRam(event.target.value);
    setSelection((prevSelection) => prevSelection + "  " + event.target.value);
  };

  const handleScreenSizeChange = (event) => {
    setSelectedScreenSize(event.target.value);
    setSelection((prevSelection) => prevSelection + "  " + event.target.value);
  };

  const handleGraphicsChange = (event) => {
    setSelectedGraphics(event.target.value);
    setSelection((prevSelection) => prevSelection + "  " + event.target.value);
  };

  const handlePriceChange = (event) => {
    setEnteredPrice(event.target.value);
    //  setSelection((prevSelection) => prevSelection + "  " + event.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      company: selectedCompany,
      cpu: selectedCpu,
      ram: selectedRam,
      screenSize: selectedScreenSize,
      graphics: selectedGraphics,
      price: enteredPrice,
    };
    // data.push(formData);
    console.log("Form Data:", formData);
    //console.log(data); 
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
          <ScreenSizeOptions
            handleScreenSizeChange={handleScreenSizeChange}
          />
        );
      case "Graphics":
        return <GraphicsOptions handleGraphicsChange={handleGraphicsChange} />;
      case "Price":
        return <PriceInput handlePriceChange={handlePriceChange} />;
      default:
        return null;
    }
  };

  // const renderButtons = (options) => {
  //   return options.map((option) => (
  //     <label key={option.value} className="radio">
  //       <input
  //         className="choice-btn"
  //         type="radio"
  //         name="option"
  //         value={option.value}
  //         checked={selectedOption === option.value}
  //         onChange={handleOptionChange}
  //       />
  //       <span className="name">
  //         {selectedOption === option.value ? option.label : null}
  //       </span>
  //     </label>
  //   ));
  // };




  return (
    <div className="container">
      <div className="selection">
        {selection}
      </div>
      <div className="choice-wrapper">
        <div className="radio-inputs">
          {/* First row of buttons */}

          <label className="radio">
            <input
              className="choice-btn"
              type="radio"
              name="option"
              value="Company"
              checked={selectedOption === "Company"}
              onChange={handleOptionChange}
            />
            <span className="name">Company</span>
          </label>

          <label className="radio">
            <input
              className="choice-btn"
              type="radio"
              name="option"
              value="CPU"
              checked={selectedOption === "CPU"}
              onChange={handleOptionChange}
            />
            <span className="name">CPU</span>
          </label>

          <label className="radio">
            <input
              className="choice-btn"
              type="radio"
              name="option"
              value="Ram"
              checked={selectedOption === "Ram"}
              onChange={handleOptionChange}
            />
            <span className="name">Ram</span>
          </label>

          <label className="radio">
            <input
              className="choice-btn"
              type="radio"
              name="option"
              value="Scrn size"
              checked={selectedOption === "Scrn size"}
              onChange={handleOptionChange}
            />
            <span className="name">Scrn size</span>
          </label>

          <label className="radio">
            <input
              className="choice-btn"
              type="radio"
              name="option"
              value="Graphics"
              checked={selectedOption === "Graphics"}
              onChange={handleOptionChange}
            />
            <span className="name">Graphics</span>
          </label>

          <label className="radio">
            <input
              className="choice-btn"
              type="radio"
              name="option"
              value="Price"
              checked={selectedOption === "Price"}
              onChange={handleOptionChange}
            />
            <span className="name">Price</span>
          </label>

          {/* Repeat the same structure for other buttons in the first row */}
        </div>

        <div className="radio-inputs">
          {/* Second row of buttons */}
          <label className="radio">
            {/* ... */}
          </label>
          {/* Repeat the same structure for other buttons in the second row */}
        </div>

        {/* Render options based on selected radio button */}
        {renderOptions()}

        <Link to="/products"><button onClick={handleSubmit}>Submit</button></Link>
      </div>
    </div>
  );
}

export default RadioButtonLine;

