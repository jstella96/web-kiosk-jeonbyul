import React, { useState } from 'react';
import { useOptions } from 'context/optionContext';
import OptionModal from 'components/Modal/OptionModal/OptionModal';
import { useOrderInfo } from 'context/orderInfoContext';
import styled, { css } from 'styled-components';
import { FoodsByCategoryType, FoodType } from 'types/food';
import { useSlider } from 'hooks/useSlider';
import FoodItem from './FoodItem';
import { foodListLayout } from './FoodListLayout';

interface FoodListContainerProps {
  foodsByCategory: FoodsByCategoryType[] | [];
  selectedIndex: number;
  changeSelectedIndex: (index: number) => void;
}

const FoodListContainer = ({
  foodsByCategory,
  selectedIndex,
  changeSelectedIndex
}: FoodListContainerProps) => {
  const { handleTouchStart, handleTouchMove, handleTouchEnd, translateX, sliderRef } = useSlider(
    selectedIndex,
    changeSelectedIndex,
    foodsByCategory.length - 1
  );
  const options = useOptions();
  const [selectedFood, setSelectedFood] = useState<FoodType>();
  const { orderInfoDispatch } = useOrderInfo();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openOptionModal = (food: any) => {
    setSelectedFood(food);
    setIsOpenModal(true);
  };

  return (
    <Slider
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <FoodListWrapper translateX={translateX}>
        {foodsByCategory.map((category, index) => (
          <FoodList key={category.id} {...(index === 0 ? { ref: sliderRef } : {})}>
            {category.foods.map((food) => (
              <FoodItem food={food} key={food.id} onClickFood={openOptionModal}></FoodItem>
            ))}
          </FoodList>
        ))}
      </FoodListWrapper>
      {isOpenModal && (
        <OptionModal
          sizeOptions={options.size[selectedFood ? selectedFood.id : 0] || {}}
          temperatureOptions={options.temperature[selectedFood ? selectedFood.id : 0] || {}}
          close={() => setIsOpenModal(false)}
          food={selectedFood}
          orderInfoDispatch={orderInfoDispatch}
        />
      )}
    </Slider>
  );
};
export default FoodListContainer;

const Slider = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
`;

const FoodListWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: all 0.4s;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ translateX }) => {
    return css`
      transform: translateX(${`${translateX}px`});
    `;
  }}
`;
const FoodList = styled.div`
  ${foodListLayout}
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
