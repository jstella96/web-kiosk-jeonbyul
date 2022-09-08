import React, { useState } from 'react';
import { convertOptionKeyToLabel } from 'utils/option';
import FoodCount from 'components/common/FoodCount';
import OptionSelect from 'components/Modal/OptionSelect';
import { addCartItem } from 'hooks/orderInfoState';
import styled from 'styled-components';
import COLORS from 'constants/color';
import { modal } from 'styles/common';

interface OptionModalProps {
  sizeOptions: any;
  orderInfoDispatch: any;
  temperatureOptions: any;
  close: any;
  food: any;
}

const OptionModal = ({
  sizeOptions,
  orderInfoDispatch,
  temperatureOptions,
  close,
  food
}: OptionModalProps) => {
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
    orderInfoDispatch(addCartItem(newCartItem));
    initOption();
    close();
  };

  return (
    <Modal>
      <Section>
        <Main>
          <FoodDetail>
            <img alt={food.name} src={food.imgUrl} />
            <h2>{food.name}</h2>
            <span>{food.basePrice}원</span>
          </FoodDetail>
          <OptionContainer>
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
          </OptionContainer>
        </Main>
        <Footer>
          <button onClick={closeModal}> 닫기 </button>
          <button onClick={submit}> 담기 </button>
        </Footer>
      </Section>
    </Modal>
  );
};
const Modal = styled.div`
  ${modal}
  display: flex;
`;
const Section = styled.section`
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
  border-radius: 0.2rem;
  background-color: ${COLORS.white};
  display: grid;
  grid-template-rows: 8fr 1fr;
`;
const Main = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FoodDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 15rem;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
  span {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  button {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default OptionModal;
