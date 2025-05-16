
import React from 'react';


const QuantitySelector = ({ quantity, onChange, stock }) => {
  const handleDecrease = () => {
    if (quantity > 1) onChange(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < stock) onChange(quantity + 1);
  };

  const handleInputChange = (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val) || val < 1) val = 1;
    if (val > stock) val = stock;
    onChange(val);
  };

  return (
    <div className="quantity-selector">
      <button className="quantity-button" onClick={handleDecrease}>−</button>
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        onChange={handleInputChange}
        min="1"
        max={stock}
      />
      <button className="quantity-button" onClick={handleIncrease}>+</button>
    </div>
  );
};

export default QuantitySelector;
