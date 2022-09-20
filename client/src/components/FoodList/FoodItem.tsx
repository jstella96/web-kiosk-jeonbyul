import styled from 'styled-components';
import { FoodType } from 'types/food';
import COLORS from 'constants/color';
import { foodItemImageLayout, foodItemLayout } from './FoodListLayout';
import OptionModal from 'components/Modal/OptionModal/OptionModal';
import { useState } from 'react';

interface FoodItmeProps {
  food: FoodType;
}

const FoodItem = ({ food }: FoodItmeProps) => {
  const [showOptionModal, setShowOptionModal] = useState(false);
  return (
    <>
      <Food data-test="food-item" key={food.id} onClick={() => setShowOptionModal(true)}>
        <Img alt={food.name} src={food.imgUrl}></Img>
        <Title>{food.name}</Title>
        <Text>{food.basePrice.toLocaleString()}원</Text>
      </Food>
      {showOptionModal && (
        <OptionModal
          isShowing={showOptionModal}
          hide={() => setShowOptionModal(false)}
          food={food}
        />
      )}
    </>
  );
};
export default FoodItem;

const Food = styled.div`
  ${foodItemLayout}
  color: ${COLORS.primary};
  font-weight: 700;
`;
const Img = styled.img`
  ${foodItemImageLayout}
  min-width: 9rem;
  object-fit: cover;
`;
const Title = styled.h2`
  font-size: 1rem;
  display: block;
  text-align: center;
  margin-bottom: 0.2rem;
`;
const Text = styled.span`
  display: block;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 400;
`;
