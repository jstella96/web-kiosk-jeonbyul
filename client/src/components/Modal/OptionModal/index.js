import React, { useEffect, useState } from 'react';
import { convertOptionKeyToLabel } from 'utils/option';
import FoodCount from 'components/common/FoodCount';
import './index.scss';
import OptionSelect from 'components/Modal/OptionSelect';
import { useCartItems, useCartItemsDispatch } from 'store/CartItemsContext';

const OptionModal = ({ sizeOptions, temperatureOptions, isOpen, close, food }) => {
  const cartItemsDispatch = useCartItemsDispatch();

  const convertedTemperatureOptions = convertOptionKeyToLabel(temperatureOptions, 'temprature');
  const convertedSizeOptions = convertOptionKeyToLabel(sizeOptions, 'size');

  const [selectedTemperatureIdx, setSelectedTemperatureIdx] = useState(0);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [count, setCount] = useState(1);

  const initOption = () => {
    setCount(1);
    setSelectedSizeIdx(1);
    setSelectedTemperatureIdx(1);
  };

  const closeModal = () => {
    initOption();
    close();
  };

  const submit = () => {
    const newCartItem = {
      food,
      count,
      sizeOption: convertedSizeOptions[selectedSizeIdx],
      temperatureOption: convertedTemperatureOptions[selectedTemperatureIdx]
    };
    cartItemsDispatch({
      type: 'add',
      cartItem: newCartItem
    });
    initOption();
    close();
  };

  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      <section>
        <main>
          <div className="food-detail">
            <img
              className="food-img"
              src="https://www.ediya.com/files/menu/IMG_1649842079840.png"
            />
            <h2 className="food-name">{food.name}</h2>
            <span className="food-price">{food.basePrice} 원</span>
          </div>

          <div className="food-option-container">
            <OptionSelect
              options={convertedTemperatureOptions}
              selectedIdx={selectedTemperatureIdx}
              setSelectedIdx={setSelectedTemperatureIdx}
            ></OptionSelect>
            <OptionSelect
              options={convertedSizeOptions}
              selectedIdx={selectedSizeIdx}
              setSelectedIdx={setSelectedSizeIdx}
            ></OptionSelect>
            <FoodCount count={count} setCount={setCount}></FoodCount>
          </div>
        </main>
        <footer className="option-modal-footer">
          <button onClick={closeModal}> 닫기 </button>
          <button onClick={submit}> 담기 </button>
        </footer>
      </section>
    </div>
  );
};

export default OptionModal;
