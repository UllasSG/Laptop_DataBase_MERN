
import React from 'react';
import './ChoicePage.css'
const PriceInput = ({ handlePriceChange }) => (
  <div className='prc-input-wrapper'>
    <label>
      Price:
      <input  name="price" onChange={handlePriceChange} className='price-box' type="number"/>
    </label>
  </div>
);

export default PriceInput;
