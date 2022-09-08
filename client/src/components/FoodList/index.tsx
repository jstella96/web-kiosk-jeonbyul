import React, { useState } from 'react';
import { useOptions } from 'context/optionContext';
import OptionModal from 'components/Modal/OptionModal';
import { useOrderInfo } from 'context/orderInfoContext';
import styled, { css } from 'styled-components';
import { FoodsByCategoryType, FoodType } from 'types/food';
import { useSlider } from 'hooks/useSlider';
import COLORS from 'constants/color';

interface FoodListContainerProps {
  foodsByCategory: FoodsByCategoryType[];
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
              <Food key={food.id} onClick={() => openOptionModal(food)}>
                <img alt={food.name} src={food.imgUrl}></img>
                <h2>{food.name}</h2>
                <span>{(+food.basePrice).toLocaleString()}원</span>
              </Food>
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
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  flex-basis: 100%;
  flex-shrink: 0;
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Food = styled.div`
  margin: 0.8rem;
  color: ${COLORS.primary};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    max-width: 9rem;
    margin: auto;
    object-fit: cover;
  }
  h2 {
    font-size: 1rem;
    display: block;
    text-align: center;
    margin-bottom: 0.2rem;
  }
  span {
    display: block;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 400;
  }
`;
