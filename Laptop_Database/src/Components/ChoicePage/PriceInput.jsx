
import React from 'react';

const PriceInput = ({ handlePriceChange }) => (
  <div>
    <label>
      Price:
      <input type="text" name="price" onChange={handlePriceChange} />
    </label>
  </div>
);

export default PriceInput;
