import React from 'react';
import './index.scss';

const OptionSelect = ({ label, options = [], selectedIdx, setSelectedIdx }) => {
  const updateIdx = (index) => () => {
    setSelectedIdx(index);
  };

  return (
    <div className="food-option">
      <span> {label} </span>
      <div className="food-option-wrapper">
        {options.map((option, index) => (
          <button
            onClick={updateIdx(index)}
            key={index}
            className={selectedIdx === index ? 'food-option__selected' : ''}
          >
            {option.label} <span>{option.additionalAmount}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelect;
