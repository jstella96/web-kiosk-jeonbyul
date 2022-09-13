import styled from 'styled-components';
import { FoodType } from 'types/food';
import COLORS from 'constants/color';
import { foodItemImageLayout, foodItemLayout } from './FoodListLayout';

interface FoodItmeProps {
  food: FoodType;
  onClickFood: (food: FoodType) => void;
}

const FoodItem = ({ food, onClickFood }: FoodItmeProps) => {
  return (
    <Food key={food.id} onClick={() => onClickFood(food)}>
      <Img alt={food.name} src={food.imgUrl}></Img>
      <Title>{food.name}</Title>
      <Text>{food.basePrice.toLocaleString()}원</Text>
    </Food>
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
