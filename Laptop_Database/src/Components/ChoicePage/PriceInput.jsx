
import React from 'react';
import './ChoicePage.css'
const PriceInput = ({ handlePriceChange }) => (
  <div className='prc-input-wrapper'>
    <label>
      Price:
      <input type="text" name="price" onChange={handlePriceChange} className='price-box'/>
    </label>
  </div>
);

export default PriceInput;
