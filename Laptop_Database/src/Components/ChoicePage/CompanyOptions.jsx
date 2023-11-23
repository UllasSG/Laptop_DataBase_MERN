import React from "react";

const CompanyOptions = ({ handleCompanyChange }) => (
  <div className="radio-inputs">
    <label className="radio">
      <input
        type="radio"
        name="companyOption"
        value="HP"
        onChange={handleCompanyChange}
      />
      <span className="name">HP</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="companyOption"
        value="MSI"
        onChange={handleCompanyChange}
      />
      <span className="name">MSI</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="companyOption"
        value="Mi"
        onChange={handleCompanyChange}
      />
      <span className="name">MI</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="companyOption"
        value="Dell"
        onChange={handleCompanyChange}
      />
    
      <span className="name">Dell</span>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="companyOption"
        value="Lenovo"
        onChange={handleCompanyChange}
      />
      <span className="name">Lenovo</span>
    </label>
    
    <label className="radio">
      <input
        type="radio"
        name="companyOption"
        value="ASUS"
        onChange={handleCompanyChange}
      />
      <span className="name">ASUS</span>
    </label>
  </div>
);

export default CompanyOptions;
