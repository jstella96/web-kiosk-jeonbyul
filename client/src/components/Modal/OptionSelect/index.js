import React from 'react';
import './index.scss';

const OptionSelect = ({ options = [], selectedIdx, setSelectedIdx }) => {
  const updateIdx = (index) => () => {
    setSelectedIdx(index);
  };
  return (
    <div className="food-option-wrapper">
      {options.map((option, index) =>
        option.additionalPrice ? (
          <button
            onClick={updateIdx(index)}
            key={index}
            className={selectedIdx === index ? 'food-option__selected' : ''}
          >
            <span>{option.label}</span>
            <span>+{+option.additionalPrice.toLocaleString()}원</span>
          </button>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default OptionSelect;
