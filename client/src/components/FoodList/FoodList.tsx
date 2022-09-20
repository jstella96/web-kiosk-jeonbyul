import React from 'react';
import styled, { css } from 'styled-components';
import { FoodsByCategoryType } from 'types/food';
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

  return (
    <Slider
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <FoodListWrapper data-test="food-list-full" translateX={translateX}>
        {foodsByCategory.map((category, index) => (
          <FoodList
            data-test="food-list"
            key={category.id}
            {...(index === 0 ? { ref: sliderRef } : {})}
          >
            {category.foods.map((food) => (
              <FoodItem food={food} key={food.id}></FoodItem>
            ))}
          </FoodList>
        ))}
      </FoodListWrapper>
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
