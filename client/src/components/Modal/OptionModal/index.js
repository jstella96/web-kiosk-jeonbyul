import React, { useState } from 'react';
import { convertOptionKeyToLabel } from 'utils/option';
import FoodCount from 'components/common/FoodCount';
import './index.scss';
import OptionSelect from 'components/Modal/OptionSelect';
import { ORDER_INFO_ACTIONS } from 'hooks/orderInfoState';

const OptionModal = ({
  sizeOptions,
  orderInfoDispatch,
  temperatureOptions,
  isOpen,
  close,
  food
}) => {
  const convertedTemperatureOptions = convertOptionKeyToLabel(temperatureOptions, 'temprature');
  const convertedSizeOptions = convertOptionKeyToLabel(sizeOptions, 'size');

  const [selectedTemperatureIdx, setSelectedTemperatureIdx] = useState(0);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [count, setCount] = useState(1);

  const initOption = () => {
    setCount(1);
    setSelectedSizeIdx(0);
    setSelectedTemperatureIdx(0);
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
    orderInfoDispatch({
      type: ORDER_INFO_ACTIONS.ADD_CARTITEM,
      payload: {
        cartItem: newCartItem
      }
    });
    initOption();
    close();
  };

  return (
    <div className={isOpen ? 'openModal modal' : 'modal'}>
      <section>
        <main>
          <div className="food-detail">
            <img className="food-img" src={food.imgUrl} />
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
